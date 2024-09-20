from builtins import object

# from django.contrib.gis.db.models import Union
from django.shortcuts import render

from django.contrib.auth.decorators import login_required
from SystemManagement.tnv_decorator import org_require as org_login_required
from django.shortcuts import render, get_object_or_404, redirect
from django.template import loader
from django.http import HttpResponse
from django import template
from django.core.paginator import Paginator
# Create your views here.
# from filetype.types.archive import Cab

from django.http import JsonResponse
from datetime import datetime as dtime
import json
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User
from django.db.models import Q
from Common.context import LoadDefaultContext as dcontext

from Workspace.views import AdminWebContext
from .models import *
# from Common.GenModels_truongnv1 import *
#from MainManagement.submodels.perm_models import tCheckPermission
#from MainManagement.submodels.perm_models import tCheckPermission, tCheckApiViewPermission, tCheckUsernamePermissionByGroup
from Workspace.views import AdminWebContext
from .models import *
# Create your views here.

def fill_content_mail_template():
    pass

def HRAccount_by_OrganizationView(request, *args, **kwargs):
    try:
        context = AdminWebContext(request, page_info='SentMailManagement:HRAccount_by_OrganizationView', *args, **kwargs)
    except Exception as xx:
        context = {}
        context['website_template'] = 'default'
    response = []
    try:
        # list_HRAccount = HRAccount.objects.all().order_by("-created_at")
        # lấy ra list uuid hrAccount thuộc tổ chức hiện tại
        from HRAccountManagement.models import UserOrganization
        list_uuid_hrAccount_belong_crr_org = UserOrganization.objects.filter(organization=context['organization'].uuid).values("hr_account").all()
        for item_uuid_hrAccount in list_uuid_hrAccount_belong_crr_org:
            this_hrAccount = HRAccount.objects.filter(uuid=item_uuid_hrAccount["hr_account"]).first()
            if this_hrAccount:
                response.append({
                    "uuid": item_uuid_hrAccount["hr_account"],
                    "name": this_hrAccount.name,
                    "email": this_hrAccount.email
                })
    except Exception as e:
        return JsonResponse({"error": str(e)})
    
    result = JsonResponse(response, safe=False)
    return result