

#!/usr/bin/env python
# -*- coding: utf-8 -*-
# region Description
__author__ = 'TruongNV - NGUYEN VAN TRUONG'
__copyright__ = "Copyright ©2023 TruongNV <truongg.nv@gmail.com>"
__maintainer__ = "TruongNV"
__email__ = "truongg.nv@gmail.com"
__status__ = "Production"
__date__ = 24/8/2023
# endregion
# __init__.py

from django.http import HttpResponse
from django.template import loader
from django.core.paginator import Paginator
from django.contrib.auth.decorators import login_required


from ..models import *
from sys import _getframe
from Logger.admin import log_write

from django.http import HttpResponseRedirect
from django.contrib.auth import get_user_model
Account = get_user_model() 


# Định nghĩa Resource của class SystemMailType : Loại email
            
def systemmailtype_post_handle(request, slug=None):
    all_data = request.POST
    context = {}
    context['alerts'] = []
    if request.user.is_authenticated:
        if request.user.is_superuser and slug is not None:
            checker = Account.objects.filter(username=slug).first()
        else:
            checker = Account.objects.filter(username=request.user).first()
        if checker is not None:
            current_user = checker
            action = all_data['action']
            log_write(msg=(str('action = %s' % action)), request=request, func_name=_getframe().f_code.co_name)
            if action == 'add-site':
                try:
                    pass
                except Exception as px:
                    try:
                        pass
                    finally:
                        px = None
                        del px

            elif action == 'xx':
                try:
                    pass
                except Exception as px:
                    try:
                        pass
                    finally:
                        px = None
                        del px
    else:
        return HttpResponseRedirect('Account:Signin')

            
def systemmailtype_get_handle(request, slug=None):
    all_data = request.GET
    context = {}
    context['alerts'] = []
    if request.user.is_authenticated:
        if request.user.is_superuser and slug is not None:
            checker = Account.objects.filter(username=slug).first()
        else:
            checker = Account.objects.filter(username=(request.user)).first()
        if checker is not None:
            current_user = checker
            action = all_data['action']
            log_write(msg=(str('action = %s' % action)), request=request, func_name=_getframe().f_code.co_name)
            if action == 'add-site':
                try:
                    pass
                except Exception as px:
                    try:
                        pass
                    finally:
                        px = None
                        del px

            elif action == 'verify-site':
                try:
                    pass
                except Exception as px:
                    try:
                        pass
                    finally:
                        px = None
                        del px

    else:
        return HttpResponseRedirect('Account:Signin')
  
