

from django.db import models
from uuid import uuid4 as UUID4
from django.utils.timezone import now as djnow
from django.conf import settings
from django.core.files.storage import FileSystemStorage
from django.contrib.auth.models import User
from model_utils import FieldTracker
from django.contrib.postgres.fields import HStoreField
from django.contrib.postgres.fields import ArrayField
from django.utils.translation import gettext as _
from django.db.models import Q
# Create your models here.
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.utils import formataddr
import smtplib, ssl
import mailchimp_transactional as MailchimpTransactional
from mailchimp_transactional.api_client import ApiClientError
from django.contrib.auth import get_user_model
Account = get_user_model()

# dành cho việc sử dụng slug field
from django.utils.text import slugify
import string
import random

# dành cho việc sử dụng cache
from RedisCachingSystem.RedisModel import obj2dict,dict2obj
from core.settings import redis_conn,SELF_INSTANCE_UUID
import json
from SentMailManagement.test import send_mail_daidv
from SystemPurchaseManagement.send_mail_process import invite_2 as tnv_invite_content
from SystemPurchaseManagement.send_mail_process import send_yandex as tnv_mail
from SystemPurchaseManagement.send_mail_process import reset_password as tnv_mail_reset_password
from SystemPurchaseManagement.send_mail_process import update_password_success as tnv_mail_update_password_success
import html
def rand_slug():
    return ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(10))

# define path to save file
import os
from datetime import datetime 
from datetime import datetime as tnv_datetime
from datetime import date as tnv_date
from datetime import time as tnv_time
def _upload_to(instance, filename):
    result = os.path.join(instance._meta.app_label, instance.__class__.__name__, datetime.today().strftime("%Y/%m/%d"),
                          filename)
    print('result = %s' % result)
    return result
#TNV_IMPORT_MODELS

from SystemOrganizationManagement.models import Organization
                    
from HRAccountManagement.models import HRAccount
                    


# Loại email
class SystemMailType(models.Model):
    class Meta:
        verbose_name = "Loại email"
        verbose_name_plural = "Loại email"

    uuid = models.UUIDField(default=UUID4,
                                max_length=64,
                                editable=False,
                                unique=True,
                                primary_key=True,
                            )
    #$model_default_field
    
                
    # (code) Mã:
    code = models.CharField(
                                editable=False,
                                blank=False,
                                null=False,
                                
                                default="",
                                max_length=100,
                                help_text=_('Mã'),
                            )
            
    # (created_by) Người tạo:
    created_by = models.ForeignKey(Account,
                                to_field='username',
                                related_name='%(app_label)s_%(class)s_created_by',
                                on_delete=(models.PROTECT),
                                editable=False,
                                blank=False,
                                null=True,
                                
                                help_text=_('Người tạo'),
                            )
            
                
    # (created_at) Thời điểm tạo:
    created_at = models.DateTimeField(
                                editable=False,
                                blank=False,
                                null=False,
                                
                                default=djnow,
                                
                                help_text=_('Thời điểm tạo'),
                            )
            
    # (updated_by) Người cập nhật:
    updated_by = models.ForeignKey(Account,
                                to_field='username',
                                related_name='%(app_label)s_%(class)s_updated_by',
                                on_delete=(models.PROTECT),
                                editable=False,
                                blank=False,
                                null=True,
                                
                                help_text=_('Người cập nhật'),
                            )
            
                
    # (updated_at) Thời điểm cập nhật:
    updated_at = models.DateTimeField(
                                editable=False,
                                blank=False,
                                null=False,
                                
                                default=djnow,
                                
                                help_text=_('Thời điểm cập nhật'),
                            )
            
    # (organization) Tổ chức:
    organization = HStoreField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                help_text=_('Tổ chức'),
                            )
            
    # (hr_created_by) Người tạo:
    hr_created_by = HStoreField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                help_text=_('Người tạo'),
                            )
            
    # (hr_updated_by) Người cập nhật:
    hr_updated_by = HStoreField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                help_text=_('Người cập nhật'),
                            )
            
                
    # (name) Tên:
    name = models.CharField(
                                editable=True,
                                blank=False,
                                null=False,
                                
                                default="",
                                max_length=2000,
                                help_text=_('Tên'),
                            )
            
                
    # (friendly_code) Mã:
    friendly_code = models.CharField(
                                editable=True,
                                blank=False,
                                null=True,
                                
                                max_length=100,
                                help_text=_('Mã'),
                            )
            
                
    # (is_default) Mặc định:
    is_default = models.BooleanField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                default=True,
                                max_length=None,
                                help_text=_('Mặc định'),
                            )
            
    #SystemMailType_add_fields
    ################################################################

    


    class Template:
        # hiển thị chi tiết

        configs = [
            {
                'template_listviews': False,
                'allow_load_list_async': True, # Load danh sách lựa chọn bất đồng bộ
                'load_list_append': True, # cho phép load thêm bản ghi vào cuối danh sách nếu muốn
            },
        ]
        dActions = [
            
            'detail',
        
            'add',
            
            'edit',
            
            'delete',
            
        ]
        fieldsets = [
            
            ('code','created_by','created_at',),
                    
            ('updated_by','updated_at','organization',),
                    
            ('hr_created_by','hr_updated_by','name',),
                    
            ('friendly_code','is_default',),

        ]

        read_only_field = [
            
            'code',
                    
            'created_by',
                    
            'created_at',
                    
            'updated_by',
                    
            'updated_at',
                    
        ]
        required_field = [
            
            'organization',
                    
            'hr_created_by',
                    
            'hr_updated_by',
                    
            'is_default',
                    
        ]
        in_form_buttons = [
            

        ]
        special_type_fields = [
            
        ]
        list_actions = [
            

        ]
        # hiển thị trên bảng
        list_fields = [
            
                    
            'organization',
                    
                    
            'hr_created_by',
                    
                    
            'hr_updated_by',
                    
                    
            'name',
                    
                    
            'friendly_code',
                    
                    
            'is_default',
                    
        ]
        # hiển thị trên bảng thêm mới
        inline_fields = [
            
                    
            'organization',
                    
                    
            'hr_created_by',
                    
                    
            'hr_updated_by',
                    
                    
            'name',
                    
                    
            'friendly_code',
                    
                    
            'is_default',
                    
        ]
        # các trường thông tin search
        search_fields = [
            
            'organization',
                    
            'hr_created_by',
                    
            'hr_updated_by',
                    
            'name',
                    
            'friendly_code',
                    
            'is_default',
                    
        ]
        # các trường thông tin filter
        filter_fields = [
            

        ]
        # endclasstemplate

    
    tracker = FieldTracker()

    

    # Cập nhật giá trị (organization) Tổ chức:
    def set_organization_values(self,fk):
        try:
            if fk != "" and fk != None:
                crr_pk = Organization.objects.filter(pk=fk).values("uuid","code","friendly_code","name").first()
                if crr_pk is not None:
                    self.organization = crr_pk
                    print("set or update organization success!!")  
                else:
                    print("set or update organization fail because Organization obj with fk == %s not found!!" % fk)  
            else:
                print("set or update organization fail because fk == %s None or Empty" % fk)  
        except Exception as xx:
            print("set or update organization fail because %s" % str(xx))
    # Lấy obj (organization) Tổ chức:
    def get_organization_obj(self):
        try:
            crr_dict = self.organization
            if crr_dict != None and crr_dict :
                return Organization.objects.filter(pk=crr_dict["uuid"]).values().first()
            else:
                return None
        except Exception as xx:
            print("set or update organization fail because %s" % str(xx))
            return None


         
            

    # Cập nhật giá trị (hr_created_by) Người tạo:
    def set_hr_created_by_values(self,fk):
        try:
            if fk != "" and fk != None:
                crr_pk = HRAccount.objects.filter(pk=fk).values("uuid","code","friendly_code","name").first()
                if crr_pk is not None:
                    self.hr_created_by = crr_pk
                    print("set or update hr_created_by success!!")  
                else:
                    print("set or update hr_created_by fail because HRAccount obj with fk == %s not found!!" % fk)  
            else:
                print("set or update hr_created_by fail because fk == %s None or Empty" % fk)  
        except Exception as xx:
            print("set or update hr_created_by fail because %s" % str(xx))
    # Lấy obj (hr_created_by) Người tạo:
    def get_hr_created_by_obj(self):
        try:
            crr_dict = self.hr_created_by
            if crr_dict != None and crr_dict :
                return HRAccount.objects.filter(pk=crr_dict["uuid"]).values().first()
            else:
                return None
        except Exception as xx:
            print("set or update hr_created_by fail because %s" % str(xx))
            return None


         
            

    # Cập nhật giá trị (hr_updated_by) Người cập nhật:
    def set_hr_updated_by_values(self,fk):
        try:
            if fk != "" and fk != None:
                crr_pk = HRAccount.objects.filter(pk=fk).values("uuid","code","friendly_code","name").first()
                if crr_pk is not None:
                    self.hr_updated_by = crr_pk
                    print("set or update hr_updated_by success!!")  
                else:
                    print("set or update hr_updated_by fail because HRAccount obj with fk == %s not found!!" % fk)  
            else:
                print("set or update hr_updated_by fail because fk == %s None or Empty" % fk)  
        except Exception as xx:
            print("set or update hr_updated_by fail because %s" % str(xx))
    # Lấy obj (hr_updated_by) Người cập nhật:
    def get_hr_updated_by_obj(self):
        try:
            crr_dict = self.hr_updated_by
            if crr_dict != None and crr_dict :
                return HRAccount.objects.filter(pk=crr_dict["uuid"]).values().first()
            else:
                return None
        except Exception as xx:
            print("set or update hr_updated_by fail because %s" % str(xx))
            return None


         
            

    
    # lấy danh sách các Mẫu email phụ thuộc Loại email
    def get_systemmailtemplate_child_values_list(self):
        from SentMailManagement.models import SystemMailTemplate
        return SystemMailTemplate.objects.filter(email_type__uuid=self.uuid).values("uuid","name","code",).all()
            
    # lấy số lượng các Mẫu email phụ thuộc Loại email
    def get_count_systemmailtemplate_child(self):
        from SentMailManagement.models import SystemMailTemplate
        return SystemMailTemplate.objects.filter(email_type__uuid=self.uuid).all().count()
            

    #SystemMailType_add_func
    
    

    def __str__(self):
        return str(self.name)
    def save(self, *args, **kwargs):
        
        self.updated_at = djnow()
        super().save(*args, **kwargs)

        if self._state.adding and self.created_by is not None:
            self.updated_by = self.created_by




# Mẫu email
class SystemMailTemplate(models.Model):
    class Meta:
        verbose_name = "Mẫu email"
        verbose_name_plural = "Mẫu email"

    uuid = models.UUIDField(default=UUID4,
                                max_length=64,
                                editable=False,
                                unique=True,
                                primary_key=True,
                            )
    #$model_default_field
    
                
    # (name) Tên:
    name = models.CharField(
                                editable=True,
                                blank=False,
                                null=False,
                                
                                default="",
                                max_length=2000,
                                help_text=_('Tên'),
                            )
            
                
    # (code) Mã:
    code = models.CharField(
                                editable=False,
                                blank=False,
                                null=False,
                                
                                default="",
                                max_length=100,
                                help_text=_('Mã'),
                            )
            
                
    # (friendly_code) Mã:
    friendly_code = models.CharField(
                                editable=True,
                                blank=False,
                                null=True,
                                
                                max_length=100,
                                help_text=_('Mã'),
                            )
            
    # (created_by) Người tạo:
    created_by = models.ForeignKey(Account,
                                to_field='username',
                                related_name='%(app_label)s_%(class)s_created_by',
                                on_delete=(models.PROTECT),
                                editable=False,
                                blank=False,
                                null=True,
                                
                                help_text=_('Người tạo'),
                            )
            
    # (updated_by) Người cập nhật:
    updated_by = models.ForeignKey(Account,
                                to_field='username',
                                related_name='%(app_label)s_%(class)s_updated_by',
                                on_delete=(models.PROTECT),
                                editable=False,
                                blank=False,
                                null=True,
                                
                                help_text=_('Người cập nhật'),
                            )
            
                
    # (updated_at) Thời điểm cập nhật:
    updated_at = models.DateTimeField(
                                editable=False,
                                blank=False,
                                null=False,
                                
                                default=djnow,
                                
                                help_text=_('Thời điểm cập nhật'),
                            )
            
    # (email_type) Loại email:
    email_type = HStoreField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                help_text=_('Loại email'),
                            )
            
                
    # (content) Nội dung:
    content = models.TextField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                max_length=50000,
                                help_text=_('Nội dung'),
                            )
            
                
    # (is_default) Mặc định:
    is_default = models.BooleanField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                max_length=None,
                                help_text=_('Mặc định'),
                            )
            
    # (organization) Tổ chức:
    organization = HStoreField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                help_text=_('Tổ chức'),
                            )
            
    # (hr_created_by) Người tạo:
    hr_created_by = HStoreField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                help_text=_('Người tạo'),
                            )
            
    # (hr_updated_by) Người cập nhật:
    hr_updated_by = HStoreField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                help_text=_('Người cập nhật'),
                            )
            
                
    # (created_at) Thời điểm tạo:
    created_at = models.DateTimeField(
                                editable=False,
                                blank=False,
                                null=False,
                                
                                default=djnow,
                                
                                help_text=_('Thời điểm tạo'),
                            )
            
    #SystemMailTemplate_add_fields
    ################################################################

    


    class Template:
        # hiển thị chi tiết

        configs = [
            {
                'template_listviews': False,
                'allow_load_list_async': True, # Load danh sách lựa chọn bất đồng bộ
                'load_list_append': True, # cho phép load thêm bản ghi vào cuối danh sách nếu muốn
            },
        ]
        dActions = [
            
            'detail',
        
            'add',
            
            'edit',
            
            'delete',
            
            'export_excel',
            
            'import_excel',
            
        ]
        fieldsets = [
            
            ('name','code','friendly_code',),
                    
            ('created_by','updated_by','updated_at',),
                    
            ('email_type','content','is_default',),
                    
            ('organization','hr_created_by','hr_updated_by',),
                    
            ('created_at',),

        ]

        read_only_field = [
            
            'code',
                    
            'created_by',
                    
            'updated_by',
                    
            'updated_at',
                    
            'created_at',
                    
        ]
        required_field = [
            
            'email_type',
                    
            'content',
                    
            'is_default',
                    
            'organization',
                    
            'hr_created_by',
                    
            'hr_updated_by',
                    
        ]
        in_form_buttons = [
            

        ]
        special_type_fields = [
            
        ]
        list_actions = [
            

        ]
        # hiển thị trên bảng
        list_fields = [
            
                    
            'name',
                    
                    
            'friendly_code',
                    
                    
            'email_type',
                    
                    
            'content',
                    
                    
            'is_default',
                    
                    
            'organization',
                    
                    
            'hr_created_by',
                    
                    
            'hr_updated_by',
                    
        ]
        # hiển thị trên bảng thêm mới
        inline_fields = [
            
                    
            'name',
                    
                    
            'friendly_code',
                    
                    
            'email_type',
                    
                    
            'content',
                    
                    
            'is_default',
                    
                    
            'organization',
                    
                    
            'hr_created_by',
                    
                    
            'hr_updated_by',
                    
        ]
        # các trường thông tin search
        search_fields = [
            
            'name',
                    
            'friendly_code',
                    
            'email_type',
                    
            'content',
                    
            'is_default',
                    
            'organization',
                    
            'hr_created_by',
                    
            'hr_updated_by',
                    
        ]
        # các trường thông tin filter
        filter_fields = [
            

        ]
        # endclasstemplate

    
    tracker = FieldTracker()

    

    # Cập nhật giá trị (email_type) Loại email:
    def set_email_type_values(self,fk):
        try:
            if fk != "" and fk != None:
                crr_pk = SystemMailType.objects.filter(pk=fk).values("uuid","code","friendly_code","name").first()
                if crr_pk is not None:
                    self.email_type = crr_pk
                    print("set or update email_type success!!")  
                else:
                    print("set or update email_type fail because SystemMailType obj with fk == %s not found!!" % fk)  
            else:
                print("set or update email_type fail because fk == %s None or Empty" % fk)  
        except Exception as xx:
            print("set or update email_type fail because %s" % str(xx))
    # Lấy obj (email_type) Loại email:
    def get_email_type_obj(self):
        try:
            crr_dict = self.email_type
            if crr_dict != None and crr_dict :
                return SystemMailType.objects.filter(pk=crr_dict["uuid"]).values().first()
            else:
                return None
        except Exception as xx:
            print("set or update email_type fail because %s" % str(xx))
            return None


         
            

    # Cập nhật giá trị (organization) Tổ chức:
    def set_organization_values(self,fk):
        try:
            if fk != "" and fk != None:
                crr_pk = Organization.objects.filter(pk=fk).values("uuid","code","friendly_code","name").first()
                if crr_pk is not None:
                    self.organization = crr_pk
                    print("set or update organization success!!")  
                else:
                    print("set or update organization fail because Organization obj with fk == %s not found!!" % fk)  
            else:
                print("set or update organization fail because fk == %s None or Empty" % fk)  
        except Exception as xx:
            print("set or update organization fail because %s" % str(xx))
    # Lấy obj (organization) Tổ chức:
    def get_organization_obj(self):
        try:
            crr_dict = self.organization
            if crr_dict != None and crr_dict :
                return Organization.objects.filter(pk=crr_dict["uuid"]).values().first()
            else:
                return None
        except Exception as xx:
            print("set or update organization fail because %s" % str(xx))
            return None


         
            

    # Cập nhật giá trị (hr_created_by) Người tạo:
    def set_hr_created_by_values(self,fk):
        try:
            if fk != "" and fk != None:
                crr_pk = HRAccount.objects.filter(pk=fk).values("uuid","code","friendly_code","name").first()
                if crr_pk is not None:
                    self.hr_created_by = crr_pk
                    print("set or update hr_created_by success!!")  
                else:
                    print("set or update hr_created_by fail because HRAccount obj with fk == %s not found!!" % fk)  
            else:
                print("set or update hr_created_by fail because fk == %s None or Empty" % fk)  
        except Exception as xx:
            print("set or update hr_created_by fail because %s" % str(xx))
    # Lấy obj (hr_created_by) Người tạo:
    def get_hr_created_by_obj(self):
        try:
            crr_dict = self.hr_created_by
            if crr_dict != None and crr_dict :
                return HRAccount.objects.filter(pk=crr_dict["uuid"]).values().first()
            else:
                return None
        except Exception as xx:
            print("set or update hr_created_by fail because %s" % str(xx))
            return None


         
            

    # Cập nhật giá trị (hr_updated_by) Người cập nhật:
    def set_hr_updated_by_values(self,fk):
        try:
            if fk != "" and fk != None:
                crr_pk = HRAccount.objects.filter(pk=fk).values("uuid","code","friendly_code","name").first()
                if crr_pk is not None:
                    self.hr_updated_by = crr_pk
                    print("set or update hr_updated_by success!!")  
                else:
                    print("set or update hr_updated_by fail because HRAccount obj with fk == %s not found!!" % fk)  
            else:
                print("set or update hr_updated_by fail because fk == %s None or Empty" % fk)  
        except Exception as xx:
            print("set or update hr_updated_by fail because %s" % str(xx))
    # Lấy obj (hr_updated_by) Người cập nhật:
    def get_hr_updated_by_obj(self):
        try:
            crr_dict = self.hr_updated_by
            if crr_dict != None and crr_dict :
                return HRAccount.objects.filter(pk=crr_dict["uuid"]).values().first()
            else:
                return None
        except Exception as xx:
            print("set or update hr_updated_by fail because %s" % str(xx))
            return None


         
            

    
    # lấy danh sách các Cá nhân/nhóm nhận mail phụ thuộc Mẫu email
    def get_systemmailtarget_child_values_list(self):
        from SentMailManagement.models import SystemMailTarget
        return SystemMailTarget.objects.filter(email_template__uuid=self.uuid).values("uuid","name","code",).all()
            
    # lấy số lượng các Cá nhân/nhóm nhận mail phụ thuộc Mẫu email
    def get_count_systemmailtarget_child(self):
        from SentMailManagement.models import SystemMailTarget
        return SystemMailTarget.objects.filter(email_template__uuid=self.uuid).all().count()
            
    # lấy danh sách các Mail cần gửi phụ thuộc Mẫu email
    def get_systemmailmail_child_values_list(self):
        from SentMailManagement.models import SystemMailMail
        return SystemMailMail.objects.filter(email_template__uuid=self.uuid).values("uuid","name","code",).all()
            
    # lấy số lượng các Mail cần gửi phụ thuộc Mẫu email
    def get_count_systemmailmail_child(self):
        from SentMailManagement.models import SystemMailMail
        return SystemMailMail.objects.filter(email_template__uuid=self.uuid).all().count()
            

    #SystemMailTemplate_add_func
    
    

    def __str__(self):
        return str(self.name)
    def save(self, *args, **kwargs):
        self.updated_at = djnow()
        super().save(*args, **kwargs)

        if self._state.adding and self.created_by is not None:
            self.updated_by = self.created_by



# Quản lý trạng thái tải lên Mẫu email
class SystemMailTemplateImportStatus(models.Model):
    class Meta:
        verbose_name = "Trạng thái tải lên Mẫu email"
        verbose_name_plural = "Trạng thái tải lên Mẫu email"

    uuid = models.UUIDField(default=UUID4,
                                max_length=64,
                                editable=False,
                                unique=True,
                                primary_key=True,
                            )
    #$model_default_field
    
                
    # (name) Tên:None
    name = models.CharField(
                                editable=True,
                                blank=False,
                                null=False,
                                
                                default="",
                                max_length=2000,
                                help_text=_('Tên'),
                            )
            
                
    # (code) Mã:None
    code = models.CharField(
                                editable=False,
                                blank=False,
                                null=False,
                                
                                default="",
                                max_length=100,
                                help_text=_('Mã'),
                            )
            
                
    # (friendly_code) Mã:None
    friendly_code = models.CharField(
                                editable=True,
                                blank=False,
                                null=True,
                                
                                max_length=100,
                                help_text=_('Mã'),
                            )
            
    # (created_by) Người tạo:None
    created_by = models.ForeignKey(Account,
                                to_field='username',
                                related_name='%(app_label)s_%(class)s_created_by',
                                on_delete=(models.PROTECT),
                                editable=False,
                                blank=False,
                                null=True,
                                
                                help_text=_('Người tạo'),
                            )
            
                
    # (created_at) Thời điểm tạo:None
    created_at = models.DateTimeField(
                                editable=False,
                                blank=False,
                                null=False,
                                
                                default=djnow,
                                
                                help_text=_('Thời điểm tạo'),
                            )
            
    # (updated_by) Người cập nhật:None
    updated_by = models.ForeignKey(Account,
                                to_field='username',
                                related_name='%(app_label)s_%(class)s_updated_by',
                                on_delete=(models.PROTECT),
                                editable=False,
                                blank=False,
                                null=True,
                                
                                help_text=_('Người cập nhật'),
                            )
            
                
    # (updated_at) Thời điểm cập nhật:None
    updated_at = models.DateTimeField(
                                editable=False,
                                blank=False,
                                null=False,
                                
                                default=djnow,
                                
                                help_text=_('Thời điểm cập nhật'),
                            )
            
                
    # (icon_class) Class icon:None
    icon_class = models.CharField(
                                editable=True,
                                blank=False,
                                null=True,
                                
                                max_length=100,
                                help_text=_('Class icon'),
                            )
            
                
    # (color_class) Class màu:None
    color_class = models.CharField(
                                editable=True,
                                blank=False,
                                null=True,
                                
                                max_length=100,
                                help_text=_('Class màu'),
                            )
            
    #SystemMailTemplateImportStatus_add_fields
    ################################################################

    


    class Template:
        # hiển thị chi tiết

        configs = [
            {
                'template_listviews': False,
                'allow_load_list_async': True, # Load danh sách lựa chọn bất đồng bộ
                'load_list_append': True, # cho phép load thêm bản ghi vào cuối danh sách nếu muốn
            },
        ]
        dActions = [
            
            'detail',
        
            'add',
            
            'edit',
            
            'delete',
            
            'export_excel',
            
        ]
        fieldsets = [
            
            ('name','code','friendly_code',),
                    
            ('created_by','created_at','updated_by',),
                    
            ('updated_at','icon_class','color_class',),
                    

        ]

        read_only_field = [
            
            'code',
                    
            'created_by',
                    
            'created_at',
                    
            'updated_by',
                    
            'updated_at',
                    
        ]
        required_field = [
            
        ]
        in_form_buttons = [
            

        ]
        special_type_fields = [
            
        ]
        list_actions = [
            

        ]
        # hiển thị trên bảng
        list_fields = [
            
                    
            'name',
                    
                    
            'friendly_code',
                    
                    
            'icon_class',
                    
                    
            'color_class',
                    
        ]
        # hiển thị trên bảng thêm mới
        inline_fields = [
            
                    
            'name',
                    
                    
            'friendly_code',
                    
                    
            'icon_class',
                    
                    
            'color_class',
                    
        ]
        # các trường thông tin search
        search_fields = [
            
            'name',
                    
            'friendly_code',
                    
            'icon_class',
                    
            'color_class',
                    
        ]
        # các trường thông tin filter
        filter_fields = [
            

        ]
        # endclasstemplate

    
    tracker = FieldTracker()

    

    
    # lấy danh sách các Tải lên Mẫu email phụ thuộc Trạng thái tải lên Mẫu email
    def get_systemmailtemplateimportdata_child_values_list(self):
        from SentMailManagement.models import SystemMailTemplateImportData
        return SystemMailTemplateImportData.objects.filter(import_status__uuid=self.uuid).values("uuid","name","code",).all()
            
    # lấy số lượng các Tải lên Mẫu email phụ thuộc Trạng thái tải lên Mẫu email
    def get_count_systemmailtemplateimportdata_child(self):
        from SentMailManagement.models import SystemMailTemplateImportData
        return SystemMailTemplateImportData.objects.filter(import_status__uuid=self.uuid).all().count()
            

    #SystemMailTemplateImportStatus_add_func
    
    

    def __str__(self):
        return str(self.name)
    def save(self, *args, **kwargs):
        
        self.updated_at = djnow()
        super().save(*args, **kwargs)

        if self._state.adding and self.created_by is not None:
            self.updated_by = self.created_by



# Quản lý tải lên Mẫu email
class SystemMailTemplateImportData(models.Model):
    class Meta:
        verbose_name = "Tải lên Mẫu email"
        verbose_name_plural = "Tải lên Mẫu email"

    uuid = models.UUIDField(default=UUID4,
                                max_length=64,
                                editable=False,
                                unique=True,
                                primary_key=True,
                            )
    #$model_default_field
    
                
    # (name) Tên:None
    name = models.CharField(
                                editable=True,
                                blank=False,
                                null=False,
                                
                                default="",
                                max_length=2000,
                                help_text=_('Tên'),
                            )
            
                
    # (code) Mã:None
    code = models.CharField(
                                editable=False,
                                blank=False,
                                null=False,
                                
                                default="",
                                max_length=100,
                                help_text=_('Mã'),
                            )
            
                
    # (friendly_code) Mã:None
    friendly_code = models.CharField(
                                editable=True,
                                blank=False,
                                null=True,
                                
                                max_length=100,
                                help_text=_('Mã'),
                            )
            
    # (created_by) Người tạo:None
    created_by = models.ForeignKey(Account,
                                to_field='username',
                                related_name='%(app_label)s_%(class)s_created_by',
                                on_delete=(models.PROTECT),
                                editable=False,
                                blank=False,
                                null=True,
                                
                                help_text=_('Người tạo'),
                            )
            
                
    # (created_at) Thời điểm tạo:None
    created_at = models.DateTimeField(
                                editable=False,
                                blank=False,
                                null=False,
                                
                                default=djnow,
                                
                                help_text=_('Thời điểm tạo'),
                            )
            
    # (updated_by) Người cập nhật:None
    updated_by = models.ForeignKey(Account,
                                to_field='username',
                                related_name='%(app_label)s_%(class)s_updated_by',
                                on_delete=(models.PROTECT),
                                editable=False,
                                blank=False,
                                null=True,
                                
                                help_text=_('Người cập nhật'),
                            )
            
                
    # (updated_at) Thời điểm cập nhật:None
    updated_at = models.DateTimeField(
                                editable=False,
                                blank=False,
                                null=False,
                                
                                default=djnow,
                                
                                help_text=_('Thời điểm cập nhật'),
                            )
            
    # (file) Tệp dữ liệu:None
    file = models.FileField(
                                editable=True,
                                blank=False,
                                null=True,
                                upload_to=_upload_to,
                                
                                help_text=_('Tệp dữ liệu'),
                            )
            
                
    # (total_record_number) Số lượng dữ liệu tải lên:None
    total_record_number = models.IntegerField(
                                editable=True,
                                blank=False,
                                null=True,
                                
                                
                                help_text=_('Số lượng dữ liệu tải lên'),
                            )
            
                
    # (is_import_failed) Tải lên lỗi:None
    is_import_failed = models.BooleanField(
                                editable=True,
                                blank=False,
                                null=True,
                                
                                default=False,
                                
                                help_text=_('Tải lên lỗi'),
                            )
            
                
    # (is_import_success) Tải thành công:None
    is_import_success = models.BooleanField(
                                editable=True,
                                blank=False,
                                null=True,
                                
                                default=True,
                                
                                help_text=_('Tải thành công'),
                            )
            
                
    # (json_import_data) dữ liệu tải lên(json):None
    json_import_data = models.TextField(
                                editable=True,
                                blank=False,
                                null=True,
                                
                                max_length=50000,
                                help_text=_('dữ liệu tải lên(json)'),
                            )
            
                
    # (json_check_validation) dữ liệu không thỏa mãn yêu cầu:None
    json_check_validation = models.TextField(
                                editable=True,
                                blank=False,
                                null=True,
                                
                                max_length=50000,
                                help_text=_('dữ liệu không thỏa mãn yêu cầu'),
                            )
            
                
    # (json_fail_data) dữ liệu bị lỗi:None
    json_fail_data = models.TextField(
                                editable=True,
                                blank=False,
                                null=True,
                                
                                max_length=50000,
                                help_text=_('dữ liệu bị lỗi'),
                            )
            
    # (import_status) Trạng thái tải lên:None
    import_status = HStoreField(
                                editable=True,
                                blank=False,
                                null=True,
                                
                                help_text=_('Trạng thái tải lên'),
                            )
            
    #SystemMailTemplateImportData_add_fields
    ################################################################

    


    class Template:
        # hiển thị chi tiết

        configs = [
            {
                'template_listviews': False,
                'allow_load_list_async': True, # Load danh sách lựa chọn bất đồng bộ
                'load_list_append': True, # cho phép load thêm bản ghi vào cuối danh sách nếu muốn
            },
        ]
        dActions = [
            
            'detail',
        
            'add',
            
            'edit',
            
            'delete',
            
            'export_excel',
            
        ]
        fieldsets = [
            
            ('name','code','friendly_code',),
                    
            ('created_by','created_at','updated_by',),
                    
            ('updated_at','file','total_record_number',),
                    
            ('is_import_failed','is_import_success','json_import_data',),
                    
            ('json_check_validation','json_fail_data','import_status',),
                    

        ]

        read_only_field = [
            
            'code',
                    
            'created_by',
                    
            'created_at',
                    
            'updated_by',
                    
            'updated_at',
                    
        ]
        required_field = [
            
        ]
        in_form_buttons = [
            

        ]
        special_type_fields = [
            
        ]
        list_actions = [
            

        ]
        # hiển thị trên bảng
        list_fields = [
            
                    
            'name',
                    
                    
            'friendly_code',
                    
                    
            'file',
                    
                    
            'total_record_number',
                    
                    
            'json_check_validation',
                    
                    
            'json_fail_data',
                    
                    
            'import_status',
                    
        ]
        # hiển thị trên bảng thêm mới
        inline_fields = [
            
                    
            'name',
                    
                    
            'friendly_code',
                    
                    
            'file',
                    
                    
            'total_record_number',
                    
                    
            'json_check_validation',
                    
                    
            'json_fail_data',
                    
                    
            'import_status',
                    
        ]
        # các trường thông tin search
        search_fields = [
            
            'name',
                    
            'friendly_code',
                    
            'file',
                    
            'total_record_number',
                    
            'import_status',
                    
        ]
        # các trường thông tin filter
        filter_fields = [
            
            'total_record_number',
                    
            'is_import_failed',
                    
            'is_import_success',
                    
            'json_import_data',
                    
            'json_check_validation',
                    
            'json_fail_data',
                    
            'import_status',
                    

        ]
        # endclasstemplate

    
    tracker = FieldTracker()

    

    # Cập nhật giá trị (import_status) Trạng thái tải lên:None
    def set_import_status_values(self,fk):
        try:
            if fk != "" and fk != None:
                crr_pk = SystemMailTemplateImportStatus.objects.filter(pk=fk).values("uuid","code","friendly_code","name").first()
                if crr_pk is not None:
                    self.import_status = crr_pk
                    print("set or update import_status success!!")  
                else:
                    print("set or update import_status fail because SystemMailTemplateImportStatus obj with fk == %s not found!!" % fk)  
            else:
                print("set or update import_status fail because fk == %s None or Empty" % fk)  
        except Exception as xx:
            print("set or update import_status fail because %s" % str(xx))
    # Lấy obj (import_status) Trạng thái tải lên:None
    def get_import_status_obj(self):
        try:
            crr_dict = self.import_status
            if crr_dict != None and crr_dict :
                return SystemMailTemplateImportStatus.objects.filter(pk=crr_dict["uuid"]).values().first()
            else:
                return None
        except Exception as xx:
            print("set or update import_status fail because %s" % str(xx))
            return None


         
            

    

    #SystemMailTemplateImportData_add_func
    
    

    def __str__(self):
        return str(self.name)
    def save(self, *args, **kwargs):
        
        self.updated_at = djnow()
        super().save(*args, **kwargs)

        if self._state.adding and self.created_by is not None:
            self.updated_by = self.created_by




# Cấu hình email gửi đi
class SystemMailSenderConfig(models.Model):
    class Meta:
        verbose_name = "Cấu hình email gửi đi"
        verbose_name_plural = "Cấu hình email gửi đi"

    uuid = models.UUIDField(default=UUID4,
                                max_length=64,
                                editable=False,
                                unique=True,
                                primary_key=True,
                            )
    #$model_default_field
    
                
    # (name) Tên:None
    name = models.CharField(
                                editable=True,
                                blank=False,
                                null=False,
                                
                                default="",
                                max_length=2000,
                                help_text=_('Tên'),
                            )
            
                
    # (code) Mã:None
    code = models.CharField(
                                editable=False,
                                blank=False,
                                null=False,
                                
                                default="",
                                max_length=100,
                                help_text=_('Mã'),
                            )
            
                
    # (friendly_code) Mã:None
    friendly_code = models.CharField(
                                editable=True,
                                blank=False,
                                null=True,
                                
                                max_length=100,
                                help_text=_('Mã'),
                            )
            
    # (created_by) Người tạo:None
    created_by = models.ForeignKey(Account,
                                to_field='username',
                                related_name='%(app_label)s_%(class)s_created_by',
                                on_delete=(models.PROTECT),
                                editable=False,
                                blank=False,
                                null=True,
                                
                                help_text=_('Người tạo'),
                            )
            
                
    # (created_at) Thời điểm tạo:None
    created_at = models.DateTimeField(
                                editable=False,
                                blank=False,
                                null=False,
                                
                                default=djnow,
                                
                                help_text=_('Thời điểm tạo'),
                            )
            
    # (updated_by) Người cập nhật:None
    updated_by = models.ForeignKey(Account,
                                to_field='username',
                                related_name='%(app_label)s_%(class)s_updated_by',
                                on_delete=(models.PROTECT),
                                editable=False,
                                blank=False,
                                null=True,
                                
                                help_text=_('Người cập nhật'),
                            )
            
                
    # (updated_at) Thời điểm cập nhật:None
    updated_at = models.DateTimeField(
                                editable=False,
                                blank=False,
                                null=False,
                                
                                default=djnow,
                                
                                help_text=_('Thời điểm cập nhật'),
                            )
            
    # (organization) Tổ chức:None
    organization = HStoreField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                help_text=_('Tổ chức'),
                            )
            
    # (email_server) Email server:None
    email_server = HStoreField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                help_text=_('Email server'),
                            )
            
                
    # (email) Email:None
    email = models.CharField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                max_length=500,
                                help_text=_('Email'),
                            )
            
                
    # (password) Mật khẩu:None
    password = models.CharField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                max_length=500,
                                help_text=_('Mật khẩu'),
                            )
            
                
    # (app_password) Mật khẩu app:None
    app_password = models.CharField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                max_length=500,
                                help_text=_('Mật khẩu app'),
                            )

    number_sent = models.IntegerField(
                                        editable=True,
                                        blank=True,
                                        null=True,
                                        default=0,
                                        help_text=_('Người tạo'),
                                    )
    active = models.BooleanField(
                                    editable=True,
                                    blank=True,
                                    null=True,
                                    default=True,
                                    help_text=_('Người tạo'),
                                )
            
    # (hr_created_by) Người tạo:None
    hr_created_by = HStoreField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                help_text=_('Người tạo'),
                            )
            
    # (hr_updated_by) Người cập nhật:None
    hr_updated_by = HStoreField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                help_text=_('Người cập nhật'),
                            )
            
    #SystemMailSenderConfig_add_fields
    ################################################################

    


    class Template:
        # hiển thị chi tiết

        configs = [
            {
                'template_listviews': False,
                'allow_load_list_async': True, # Load danh sách lựa chọn bất đồng bộ
                'load_list_append': True, # cho phép load thêm bản ghi vào cuối danh sách nếu muốn
            },
        ]
        dActions = [
            
            'detail',
        
            'add',
            
            'edit',
            
            'delete',
            
        ]
        fieldsets = [
            
            ('name','code','friendly_code',),
                    
            ('created_by','created_at','updated_by',),
                    
            ('updated_at','organization','email_server',),
                    
            ('email','password','app_password',),
                    
            ('hr_created_by','hr_updated_by',),

        ]

        read_only_field = [
            
            'code',
                    
            'created_by',
                    
            'created_at',
                    
            'updated_by',
                    
            'updated_at',
                    
        ]
        required_field = [
            
            'organization',
                    
            'email_server',
                    
            'email',
                    
            'password',
                    
            'app_password',
                    
            'hr_created_by',
                    
            'hr_updated_by',
                    
        ]
        in_form_buttons = [
            

        ]
        special_type_fields = [
            
        ]
        list_actions = [
            

        ]
        # hiển thị trên bảng
        list_fields = [
            
                    
            'name',
                    
                    
            'friendly_code',
                    
                    
            'organization',
                    
                    
            'email_server',
                    
                    
            'email',
                    
                    
            'password',
                    
                    
            'app_password',
                    
                    
            'hr_created_by',
                    
                    
            'hr_updated_by',
                    
        ]
        # hiển thị trên bảng thêm mới
        inline_fields = [
            
                    
            'name',
                    
                    
            'friendly_code',
                    
                    
            'organization',
                    
                    
            'email_server',
                    
                    
            'email',
                    
                    
            'password',
                    
                    
            'app_password',
                    
                    
            'hr_created_by',
                    
                    
            'hr_updated_by',
                    
        ]
        # các trường thông tin search
        search_fields = [
            
            'name',
                    
            'friendly_code',
                    
            'organization',
                    
            'email_server',
                    
            'email',
                    
            'password',
                    
            'app_password',
                    
            'hr_created_by',
                    
            'hr_updated_by',
                    
        ]
        # các trường thông tin filter
        filter_fields = [
            

        ]
        # endclasstemplate

    
    tracker = FieldTracker()

    

    # Cập nhật giá trị (organization) Tổ chức:None
    def set_organization_values(self,fk):
        try:
            if fk != "" and fk != None:
                crr_pk = Organization.objects.filter(pk=fk).values("uuid","code","friendly_code","name").first()
                if crr_pk is not None:
                    self.organization = crr_pk
                    print("set or update organization success!!")  
                else:
                    print("set or update organization fail because Organization obj with fk == %s not found!!" % fk)  
            else:
                print("set or update organization fail because fk == %s None or Empty" % fk)  
        except Exception as xx:
            print("set or update organization fail because %s" % str(xx))
    # Lấy obj (organization) Tổ chức:None
    def get_organization_obj(self):
        try:
            crr_dict = self.organization
            if crr_dict != None and crr_dict :
                return Organization.objects.filter(pk=crr_dict["uuid"]).values().first()
            else:
                return None
        except Exception as xx:
            print("set or update organization fail because %s" % str(xx))
            return None


         
            

    # Cập nhật giá trị (email_server) Email server:None
    def set_email_server_values(self,fk):
        try:
            if fk != "" and fk != None:
                crr_pk = SystemMailServerConfig.objects.filter(pk=fk).values("uuid","code","friendly_code","name").first()
                if crr_pk is not None:
                    self.email_server = crr_pk
                    print("set or update email_server success!!")  
                else:
                    print("set or update email_server fail because SystemMailServerConfig obj with fk == %s not found!!" % fk)  
            else:
                print("set or update email_server fail because fk == %s None or Empty" % fk)  
        except Exception as xx:
            print("set or update email_server fail because %s" % str(xx))
    # Lấy obj (email_server) Email server:None
    def get_email_server_obj(self):
        try:
            crr_dict = self.email_server
            if crr_dict != None and crr_dict :
                return SystemMailServerConfig.objects.filter(pk=crr_dict["uuid"]).values().first()
            else:
                return None
        except Exception as xx:
            print("set or update email_server fail because %s" % str(xx))
            return None


         
            

    # Cập nhật giá trị (hr_created_by) Người tạo:None
    def set_hr_created_by_values(self,fk):
        try:
            if fk != "" and fk != None:
                crr_pk = HRAccount.objects.filter(pk=fk).values("uuid","code","friendly_code","name").first()
                if crr_pk is not None:
                    self.hr_created_by = crr_pk
                    print("set or update hr_created_by success!!")  
                else:
                    print("set or update hr_created_by fail because HRAccount obj with fk == %s not found!!" % fk)  
            else:
                print("set or update hr_created_by fail because fk == %s None or Empty" % fk)  
        except Exception as xx:
            print("set or update hr_created_by fail because %s" % str(xx))
    # Lấy obj (hr_created_by) Người tạo:None
    def get_hr_created_by_obj(self):
        try:
            crr_dict = self.hr_created_by
            if crr_dict != None and crr_dict :
                return HRAccount.objects.filter(pk=crr_dict["uuid"]).values().first()
            else:
                return None
        except Exception as xx:
            print("set or update hr_created_by fail because %s" % str(xx))
            return None


         
            

    # Cập nhật giá trị (hr_updated_by) Người cập nhật:None
    def set_hr_updated_by_values(self,fk):
        try:
            if fk != "" and fk != None:
                crr_pk = HRAccount.objects.filter(pk=fk).values("uuid","code","friendly_code","name").first()
                if crr_pk is not None:
                    self.hr_updated_by = crr_pk
                    print("set or update hr_updated_by success!!")  
                else:
                    print("set or update hr_updated_by fail because HRAccount obj with fk == %s not found!!" % fk)  
            else:
                print("set or update hr_updated_by fail because fk == %s None or Empty" % fk)  
        except Exception as xx:
            print("set or update hr_updated_by fail because %s" % str(xx))
    # Lấy obj (hr_updated_by) Người cập nhật:None
    def get_hr_updated_by_obj(self):
        try:
            crr_dict = self.hr_updated_by
            if crr_dict != None and crr_dict :
                return HRAccount.objects.filter(pk=crr_dict["uuid"]).values().first()
            else:
                return None
        except Exception as xx:
            print("set or update hr_updated_by fail because %s" % str(xx))
            return None


         
            

    
    # lấy danh sách các Mail cần gửi phụ thuộc Cấu hình email gửi đi
    def get_systemmailmail_child_values_list(self):
        from SentMailManagement.models import SystemMailMail
        return SystemMailMail.objects.filter(mail_sender__uuid=self.uuid).values("uuid","name","code",).all()
            
    # lấy số lượng các Mail cần gửi phụ thuộc Cấu hình email gửi đi
    def get_count_systemmailmail_child(self):
        from SentMailManagement.models import SystemMailMail
        return SystemMailMail.objects.filter(mail_sender__uuid=self.uuid).all().count()
            

    #SystemMailSenderConfig_add_func
    
    

    def __str__(self):
        return str(self.name)
    def save(self, *args, **kwargs):
        if self.active:
            try:
                all_systemcsenderconfigs = SystemMailSenderConfig.objects.filter(active=True)
                for systemsenderconfig in all_systemcsenderconfigs:
                    if self != systemsenderconfig:
                        systemsenderconfig.active = False
                        systemsenderconfig.save()
                # self.active = True
            except Exception as xx:
                print(xx)
        self.updated_at = djnow()
        super().save(*args, **kwargs)

        if self._state.adding and self.created_by is not None:
            self.updated_by = self.created_by
            




# Cấu hình email server
class SystemMailServerConfig(models.Model):
    class Meta:
        verbose_name = "Cấu hình email server"
        verbose_name_plural = "Cấu hình email server"

    uuid = models.UUIDField(default=UUID4,
                                max_length=64,
                                editable=False,
                                unique=True,
                                primary_key=True,
                            )
    #$model_default_field
    
                
    # (name) Tên:
    name = models.CharField(
                                editable=True,
                                blank=False,
                                null=False,
                                
                                default="",
                                max_length=2000,
                                help_text=_('Tên'),
                            )
            
                
    # (code) Mã:
    code = models.CharField(
                                editable=False,
                                blank=False,
                                null=False,
                                
                                default="",
                                max_length=100,
                                help_text=_('Mã'),
                            )
            
                
    # (friendly_code) Mã:
    friendly_code = models.CharField(
                                editable=True,
                                blank=False,
                                null=True,
                                
                                max_length=100,
                                help_text=_('Mã'),
                            )
            
    # (created_by) Người tạo:
    created_by = models.ForeignKey(Account,
                                to_field='username',
                                related_name='%(app_label)s_%(class)s_created_by',
                                on_delete=(models.PROTECT),
                                editable=False,
                                blank=False,
                                null=True,
                                
                                help_text=_('Người tạo'),
                            )
            
                
    # (created_at) Thời điểm tạo:
    created_at = models.DateTimeField(
                                editable=False,
                                blank=False,
                                null=False,
                                
                                default=djnow,
                                
                                help_text=_('Thời điểm tạo'),
                            )
            
    # (updated_by) Người cập nhật:
    updated_by = models.ForeignKey(Account,
                                to_field='username',
                                related_name='%(app_label)s_%(class)s_updated_by',
                                on_delete=(models.PROTECT),
                                editable=False,
                                blank=False,
                                null=True,
                                
                                help_text=_('Người cập nhật'),
                            )
            
                
    # (host) Host:
    host = models.CharField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                max_length=500,
                                help_text=_('Host'),
                            )
            
                
    # (port) Port:
    port = models.CharField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                max_length=500,
                                help_text=_('Port'),
                            )
            
                
    # (port_smtp) Port SMTP:
    port_smtp = models.CharField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                max_length=500,
                                help_text=_('Port SMTP'),
                            )
            
                
    # (is_ssl) SSL:
    is_ssl = models.BooleanField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                max_length=None,
                                help_text=_('SSL'),
                            )
            
                
    # (limit_sending) Giới hạn gửi:
    limit_sending = models.IntegerField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                
                                help_text=_('Giới hạn gửi'),
                            )
            
                
    # (is_default) Mặc định:
    is_default = models.BooleanField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                default=True,
                                max_length=None,
                                help_text=_('Mặc định'),
                            )
            
    # (hr_created_by) Người tạo:
    hr_created_by = HStoreField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                help_text=_('Người tạo'),
                            )
            
    # (hr_updated_by) Người cập nhật:
    hr_updated_by = HStoreField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                help_text=_('Người cập nhật'),
                            )
            
                
    # (updated_at) Thời điểm cập nhật:
    updated_at = models.DateTimeField(
                                editable=False,
                                blank=False,
                                null=False,
                                
                                default=djnow,
                                
                                help_text=_('Thời điểm cập nhật'),
                            )
            
    # (organization) Tổ chức:
    organization = HStoreField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                help_text=_('Tổ chức'),
                            )
            
    #SystemMailServerConfig_add_fields
    ################################################################

    


    class Template:
        # hiển thị chi tiết

        configs = [
            {
                'template_listviews': False,
                'allow_load_list_async': True, # Load danh sách lựa chọn bất đồng bộ
                'load_list_append': True, # cho phép load thêm bản ghi vào cuối danh sách nếu muốn
            },
        ]
        dActions = [
            
            'detail',
        
            'add',
            
            'edit',
            
            'delete',
            
        ]
        fieldsets = [
            
            ('name','code','friendly_code',),
                    
            ('created_by','created_at','updated_by',),
                    
            ('host','port','port_smtp',),
                    
            ('is_ssl','limit_sending','is_default',),
                    
            ('hr_created_by','hr_updated_by','updated_at',),
                    
            ('organization',),

        ]

        read_only_field = [
            
            'code',
                    
            'created_by',
                    
            'created_at',
                    
            'updated_by',
                    
            'updated_at',
                    
        ]
        required_field = [
            
            'host',
                    
            'port',
                    
            'port_smtp',
                    
            'is_ssl',
                    
            'limit_sending',
                    
            'active',
                    
            'is_default',
                    
            'hr_created_by',
                    
            'hr_updated_by',
                    
            'organization',
                    
        ]
        in_form_buttons = [
            

        ]
        special_type_fields = [
            
        ]
        list_actions = [
            

        ]
        # hiển thị trên bảng
        list_fields = [
            
                    
            'name',
                    
                    
            'friendly_code',
                    
                    
            'host',
                    
                    
            'port',
                    
                    
            'port_smtp',
                    
                    
            'is_ssl',
                    
                    
            'limit_sending',
                    
                    
            'active',
                    
                    
            'is_default',
                    
                    
            'hr_created_by',
                    
                    
            'hr_updated_by',
                    
                    
            'organization',
                    
        ]
        # hiển thị trên bảng thêm mới
        inline_fields = [
            
                    
            'name',
                    
                    
            'friendly_code',
                    
                    
            'host',
                    
                    
            'port',
                    
                    
            'port_smtp',
                    
                    
            'is_ssl',
                    
                    
            'limit_sending',
                    
                    
            'active',
                    
                    
            'is_default',
                    
                    
            'hr_created_by',
                    
                    
            'hr_updated_by',
                    
                    
            'organization',
                    
        ]
        # các trường thông tin search
        search_fields = [
            
            'name',
                    
            'friendly_code',
                    
            'host',
                    
            'port',
                    
            'port_smtp',
                    
            'is_ssl',
                    
            'limit_sending',
                    
            'active',
                    
            'is_default',
                    
            'hr_created_by',
                    
            'hr_updated_by',
                    
            'organization',
                    
        ]
        # các trường thông tin filter
        filter_fields = [
            

        ]
        # endclasstemplate

    
    tracker = FieldTracker()

    

    # Cập nhật giá trị (hr_created_by) Người tạo:
    def set_hr_created_by_values(self,fk):
        try:
            if fk != "" and fk != None:
                crr_pk = HRAccount.objects.filter(pk=fk).values("uuid","code","friendly_code","name").first()
                if crr_pk is not None:
                    self.hr_created_by = crr_pk
                    print("set or update hr_created_by success!!")  
                else:
                    print("set or update hr_created_by fail because HRAccount obj with fk == %s not found!!" % fk)  
            else:
                print("set or update hr_created_by fail because fk == %s None or Empty" % fk)  
        except Exception as xx:
            print("set or update hr_created_by fail because %s" % str(xx))
    # Lấy obj (hr_created_by) Người tạo:
    def get_hr_created_by_obj(self):
        try:
            crr_dict = self.hr_created_by
            if crr_dict != None and crr_dict :
                return HRAccount.objects.filter(pk=crr_dict["uuid"]).values().first()
            else:
                return None
        except Exception as xx:
            print("set or update hr_created_by fail because %s" % str(xx))
            return None


         
            

    # Cập nhật giá trị (hr_updated_by) Người cập nhật:
    def set_hr_updated_by_values(self,fk):
        try:
            if fk != "" and fk != None:
                crr_pk = HRAccount.objects.filter(pk=fk).values("uuid","code","friendly_code","name").first()
                if crr_pk is not None:
                    self.hr_updated_by = crr_pk
                    print("set or update hr_updated_by success!!")  
                else:
                    print("set or update hr_updated_by fail because HRAccount obj with fk == %s not found!!" % fk)  
            else:
                print("set or update hr_updated_by fail because fk == %s None or Empty" % fk)  
        except Exception as xx:
            print("set or update hr_updated_by fail because %s" % str(xx))
    # Lấy obj (hr_updated_by) Người cập nhật:
    def get_hr_updated_by_obj(self):
        try:
            crr_dict = self.hr_updated_by
            if crr_dict != None and crr_dict :
                return HRAccount.objects.filter(pk=crr_dict["uuid"]).values().first()
            else:
                return None
        except Exception as xx:
            print("set or update hr_updated_by fail because %s" % str(xx))
            return None


         
            

    # Cập nhật giá trị (organization) Tổ chức:
    def set_organization_values(self,fk):
        try:
            if fk != "" and fk != None:
                crr_pk = Organization.objects.filter(pk=fk).values("uuid","code","friendly_code","name").first()
                if crr_pk is not None:
                    self.organization = crr_pk
                    print("set or update organization success!!")  
                else:
                    print("set or update organization fail because Organization obj with fk == %s not found!!" % fk)  
            else:
                print("set or update organization fail because fk == %s None or Empty" % fk)  
        except Exception as xx:
            print("set or update organization fail because %s" % str(xx))
    # Lấy obj (organization) Tổ chức:
    def get_organization_obj(self):
        try:
            crr_dict = self.organization
            if crr_dict != None and crr_dict :
                return Organization.objects.filter(pk=crr_dict["uuid"]).values().first()
            else:
                return None
        except Exception as xx:
            print("set or update organization fail because %s" % str(xx))
            return None


         
            

    
    # lấy danh sách các Cấu hình email gửi đi phụ thuộc Cấu hình email server
    def get_systemmailsenderconfig_child_values_list(self):
        from SentMailManagement.models import SystemMailSenderConfig
        return SystemMailSenderConfig.objects.filter(email_server__uuid=self.uuid).values("uuid","name","code",).all()
            
    # lấy số lượng các Cấu hình email gửi đi phụ thuộc Cấu hình email server
    def get_count_systemmailsenderconfig_child(self):
        from SentMailManagement.models import SystemMailSenderConfig
        return SystemMailSenderConfig.objects.filter(email_server__uuid=self.uuid).all().count()
            

    #SystemMailServerConfig_add_func
    
    

    def __str__(self):
        return str(self.name)
    # def save(self, *args, **kwargs):
        
    #     self.updated_at = djnow()
    #     super().save(*args, **kwargs)

    #     if self._state.adding and self.created_by is not None:
    #         self.updated_by = self.created_by

    def save(self, *args, **kwargs):
        if self.is_default:
            try:
                all_systemcserverconfigs = SystemMailServerConfig.objects.filter(is_default=True)
                for systemserverconfig in all_systemcserverconfigs:
                    if self != systemserverconfig:
                        systemserverconfig.is_default = False
                        systemserverconfig.save()
                # self.is_default = True
            except Exception as xx:
                print(xx)

        if self._state.adding and self.created_by is not None:
            self.updated_by = self.created_by

        self.updated_at = djnow()
        super(SystemMailServerConfig, self).save(*args, **kwargs)


# Cá nhân/nhóm nhận mail
class SystemMailTarget(models.Model):
    class Meta:
        verbose_name = "Cá nhân/nhóm nhận mail"
        verbose_name_plural = "Cá nhân/nhóm nhận mail"

    uuid = models.UUIDField(default=UUID4,
                                max_length=64,
                                editable=False,
                                unique=True,
                                primary_key=True,
                            )
    #$model_default_field
    
                
    # (name) Tên:None
    name = models.CharField(
                                editable=True,
                                blank=False,
                                null=False,
                                
                                default="",
                                max_length=2000,
                                help_text=_('Tên'),
                            )
            
                
    # (code) Mã:None
    code = models.CharField(
                                editable=False,
                                blank=False,
                                null=False,
                                
                                default="",
                                max_length=100,
                                help_text=_('Mã'),
                            )
            
                
    # (friendly_code) Mã:None
    friendly_code = models.CharField(
                                editable=True,
                                blank=False,
                                null=True,
                                
                                max_length=100,
                                help_text=_('Mã'),
                            )
            
    # (created_by) Người tạo:None
    created_by = models.ForeignKey(Account,
                                to_field='username',
                                related_name='%(app_label)s_%(class)s_created_by',
                                on_delete=(models.PROTECT),
                                editable=False,
                                blank=False,
                                null=True,
                                
                                help_text=_('Người tạo'),
                            )
            
                
    # (created_at) Thời điểm tạo:None
    created_at = models.DateTimeField(
                                editable=False,
                                blank=False,
                                null=False,
                                
                                default=djnow,
                                
                                help_text=_('Thời điểm tạo'),
                            )
            
    # (updated_by) Người cập nhật:None
    updated_by = models.ForeignKey(Account,
                                to_field='username',
                                related_name='%(app_label)s_%(class)s_updated_by',
                                on_delete=(models.PROTECT),
                                editable=False,
                                blank=False,
                                null=True,
                                
                                help_text=_('Người cập nhật'),
                            )
            
                
    # (updated_at) Thời điểm cập nhật:None
    updated_at = models.DateTimeField(
                                editable=False,
                                blank=False,
                                null=False,
                                
                                default=djnow,
                                
                                help_text=_('Thời điểm cập nhật'),
                            )
            
    # (email_template) Mẫu email:None
    email_template = HStoreField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                help_text=_('Mẫu email'),
                            )
            
    # (target) Người nhận mail:None
    target = ArrayField(HStoreField(),
                                editable=True,
                                blank=True,
                                null=True,
                                
                                help_text=_('Người nhận mail'),
                            )
            
                
    # (content) Nội dung:None
    content = models.TextField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                max_length=50000,
                                help_text=_('Nội dung'),
                            )
            
                
    # (status_code) Mã trạng thái:None
    status_code = models.CharField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                max_length=500,
                                help_text=_('Mã trạng thái'),
                            )
            
                
    # (status_text) Trạng thái:None
    status_text = models.CharField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                max_length=500,
                                help_text=_('Trạng thái'),
                            )
            
    # (organization) Tổ chức:None
    organization = HStoreField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                help_text=_('Tổ chức'),
                            )
            
    # (hr_created_by) Người tạo:None
    hr_created_by = HStoreField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                help_text=_('Người tạo'),
                            )
            
    # (hr_updated_by) Người cập nhật:None
    hr_updated_by = HStoreField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                help_text=_('Người cập nhật'),
                            )
            
    #SystemMailTarget_add_fields
    ################################################################

    


    class Template:
        # hiển thị chi tiết

        configs = [
            {
                'template_listviews': False,
                'allow_load_list_async': True, # Load danh sách lựa chọn bất đồng bộ
                'load_list_append': True, # cho phép load thêm bản ghi vào cuối danh sách nếu muốn
            },
        ]
        dActions = [
            
            'detail',
        
            'add',
            
            'edit',
            
            'delete',
            
        ]
        fieldsets = [
            
            ('name','code','friendly_code',),
                    
            ('created_by','created_at','updated_by',),
                    
            ('updated_at','email_template','target',),
                    
            ('content','status_code','status_text',),
                    
            ('organization','hr_created_by','hr_updated_by',),
                    

        ]

        read_only_field = [
            
            'code',
                    
            'created_by',
                    
            'created_at',
                    
            'updated_by',
                    
            'updated_at',
                    
        ]
        required_field = [
            
            'email_template',
                    
            'target',
                    
            'content',
                    
            'status_code',
                    
            'status_text',
                    
            'organization',
                    
            'hr_created_by',
                    
            'hr_updated_by',
                    
        ]
        in_form_buttons = [
            

        ]
        special_type_fields = [
            
        ]
        list_actions = [
            

        ]
        # hiển thị trên bảng
        list_fields = [
            
                    
            'name',
                    
                    
            'friendly_code',
                    
                    
            'email_template',
                    
                    
            'target',
                    
                    
            'content',
                    
                    
            'status_code',
                    
                    
            'status_text',
                    
                    
            'organization',
                    
                    
            'hr_created_by',
                    
                    
            'hr_updated_by',
                    
        ]
        # hiển thị trên bảng thêm mới
        inline_fields = [
            
                    
            'name',
                    
                    
            'friendly_code',
                    
                    
            'email_template',
                    
                    
            'target',
                    
                    
            'content',
                    
                    
            'status_code',
                    
                    
            'status_text',
                    
                    
            'organization',
                    
                    
            'hr_created_by',
                    
                    
            'hr_updated_by',
                    
        ]
        # các trường thông tin search
        search_fields = [
            
            'name',
                    
            'friendly_code',
                    
            'email_template',
                    
            'target',
                    
            'content',
                    
            'status_code',
                    
            'status_text',
                    
            'organization',
                    
            'hr_created_by',
                    
            'hr_updated_by',
                    
        ]
        # các trường thông tin filter
        filter_fields = [
            

        ]
        # endclasstemplate

    
    tracker = FieldTracker()

    

    # Cập nhật giá trị (email_template) Mẫu email:None
    def set_email_template_values(self,fk):
        try:
            if fk != "" and fk != None:
                crr_pk = SystemMailTemplate.objects.filter(pk=fk).values("uuid","code","friendly_code","name", "content").first()
                if crr_pk is not None:
                    self.email_template = crr_pk
                    print("set or update email_template success!!")  
                else:
                    print("set or update email_template fail because SystemMailTemplate obj with fk == %s not found!!" % fk)  
            else:
                print("set or update email_template fail because fk == %s None or Empty" % fk)  
        except Exception as xx:
            print("set or update email_template fail because %s" % str(xx))
    # Lấy obj (email_template) Mẫu email:None
    def get_email_template_obj(self):
        try:
            crr_dict = self.email_template
            if crr_dict != None and crr_dict :
                return SystemMailTemplate.objects.filter(pk=crr_dict["uuid"]).values().first()
            else:
                return None
        except Exception as xx:
            print("set or update email_template fail because %s" % str(xx))
            return None


         
            
    # thêm mới giá trị (target) Người nhận mail:None
    def add_target_values(self,fk):
        try:
            if fk != "" and fk != None:
                crr_pk = HRAccount.objects.filter(pk=fk).values("uuid","code","name", "email").first()
                if crr_pk is not None and self.target:
                    self.target.append(crr_pk)
                    print("add target success!!")  
                elif crr_pk is not None and (self.target == None or self.target == []):
                    self.target = []
                    self.target.append(crr_pk)
                    print("add target success!!")
                else:
                    print("add target fail because HRAccount obj with fk == %s not found!!" % fk)  
            else:
                print("add target fail because fk == %s None or Empty" % fk)  
        except Exception as xx:
            print("add target fail because %s" % str(xx))

    # cập nhật giá trị (target) Người nhận mail:None
    def update_target_values(self,fk):
        try:
            if fk != "" and fk != None :
                crr_pk = HRAccount.objects.filter(pk=fk).values("uuid","code","name", "email").first()
                if self.target:
                    for obj_value in self.target:
                        if obj_value["uuid"] == fk:
                            obj_value = crr_pk
                    print("update target success!!")  
                else:
                    print("update target fail because HRAccount obj with fk == %s not found!!" % fk)  
            else:
                print("update target fail because fk == %s None or Empty" % fk)  
        except Exception as xx:
            print("update target fail because %s" % str(xx))

    # Xóa giá trị (target) Người nhận mail:None
    def delete_target_values(self,fk):
        try:
            if fk != "" and fk != None and self.target:
                crr_target = self.target
                # self.target = [{key : val for key, val in sub.items() if val != fk} for sub in crr_target]
                self.target = [obj for obj in crr_target if not (obj['uuid'] == fk)]
            else:
                print("delete target fail because fk == %s None or Empty" % fk)  
        except Exception as xx:
            print("delete target fail because %s" % str(xx))
    # Lấy danh sách obj (target) Người nhận mail:None
    def get_list_target_obj(self):
        try:
            if self.target:
                crr_uuid_list = [obj['uuid'] for obj in self.target if 'uuid' in obj]

                if len(crr_uuid_list) > 0 :
                    return HRAccount.objects.filter(pk__in=crr_uuid_list).values().first()
                else:
                    return []
            else:
                return []
        except Exception as xx:
            print("set or update target fail because %s" % str(xx))
            return []
    # Lấy số lượng obj (target) Người nhận mail:None
    def get_count_target_obj(self):
        try:
            if self.target:
                return len(self.target)
            else:
                return 0
        except Exception as xx:
            print("get count target fail because %s" % str(xx))
            return 0
            

    # Cập nhật giá trị (organization) Tổ chức:None
    def set_organization_values(self,fk):
        try:
            if fk != "" and fk != None:
                crr_pk = Organization.objects.filter(pk=fk).values("uuid","code","friendly_code","name").first()
                if crr_pk is not None:
                    self.organization = crr_pk
                    print("set or update organization success!!")  
                else:
                    print("set or update organization fail because Organization obj with fk == %s not found!!" % fk)  
            else:
                print("set or update organization fail because fk == %s None or Empty" % fk)  
        except Exception as xx:
            print("set or update organization fail because %s" % str(xx))
    # Lấy obj (organization) Tổ chức:None
    def get_organization_obj(self):
        try:
            crr_dict = self.organization
            if crr_dict != None and crr_dict :
                return Organization.objects.filter(pk=crr_dict["uuid"]).values().first()
            else:
                return None
        except Exception as xx:
            print("set or update organization fail because %s" % str(xx))
            return None


         
            

    # Cập nhật giá trị (hr_created_by) Người tạo:None
    def set_hr_created_by_values(self,fk):
        try:
            if fk != "" and fk != None:
                crr_pk = HRAccount.objects.filter(pk=fk).values("uuid","code","friendly_code","name").first()
                if crr_pk is not None:
                    self.hr_created_by = crr_pk
                    print("set or update hr_created_by success!!")  
                else:
                    print("set or update hr_created_by fail because HRAccount obj with fk == %s not found!!" % fk)  
            else:
                print("set or update hr_created_by fail because fk == %s None or Empty" % fk)  
        except Exception as xx:
            print("set or update hr_created_by fail because %s" % str(xx))
    # Lấy obj (hr_created_by) Người tạo:None
    def get_hr_created_by_obj(self):
        try:
            crr_dict = self.hr_created_by
            if crr_dict != None and crr_dict :
                return HRAccount.objects.filter(pk=crr_dict["uuid"]).values().first()
            else:
                return None
        except Exception as xx:
            print("set or update hr_created_by fail because %s" % str(xx))
            return None


         
            

    # Cập nhật giá trị (hr_updated_by) Người cập nhật:None
    def set_hr_updated_by_values(self,fk):
        try:
            if fk != "" and fk != None:
                crr_pk = HRAccount.objects.filter(pk=fk).values("uuid","code","friendly_code","name").first()
                if crr_pk is not None:
                    self.hr_updated_by = crr_pk
                    print("set or update hr_updated_by success!!")  
                else:
                    print("set or update hr_updated_by fail because HRAccount obj with fk == %s not found!!" % fk)  
            else:
                print("set or update hr_updated_by fail because fk == %s None or Empty" % fk)  
        except Exception as xx:
            print("set or update hr_updated_by fail because %s" % str(xx))
    # Lấy obj (hr_updated_by) Người cập nhật:None
    def get_hr_updated_by_obj(self):
        try:
            crr_dict = self.hr_updated_by
            if crr_dict != None and crr_dict :
                return HRAccount.objects.filter(pk=crr_dict["uuid"]).values().first()
            else:
                return None
        except Exception as xx:
            print("set or update hr_updated_by fail because %s" % str(xx))
            return None


         
            

    
    # lấy danh sách các Mail cần gửi phụ thuộc Cá nhân/nhóm nhận mail
    def get_systemmailmail_child_values_list(self):
        from SentMailManagement.models import SystemMailMail
        return SystemMailMail.objects.filter(mail_target__uuid=self.uuid).values("uuid","name","code",).all()
            
    # lấy số lượng các Mail cần gửi phụ thuộc Cá nhân/nhóm nhận mail
    def get_count_systemmailmail_child(self):
        from SentMailManagement.models import SystemMailMail
        return SystemMailMail.objects.filter(mail_target__uuid=self.uuid).all().count()
            

    #SystemMailTarget_add_func
    
    

    def __str__(self):
        return str(self.name)
    def save(self, *args, **kwargs):
        
        self.updated_at = djnow()
        super().save(*args, **kwargs)

        if self._state.adding and self.created_by is not None:
            self.updated_by = self.created_by




# Mail cần gửi
class SystemMailMail(models.Model):
    class Meta:
        verbose_name = "Mail cần gửi"
        verbose_name_plural = "Mail cần gửi"

    uuid = models.UUIDField(default=UUID4,
                                max_length=64,
                                editable=False,
                                unique=True,
                                primary_key=True,
                            )
    #$model_default_field
    
                
    # (name) Tên:
    name = models.CharField(
                                editable=True,
                                blank=False,
                                null=False,
                                
                                default="",
                                max_length=2000,
                                help_text=_('Tên'),
                            )
            
                
    # (code) Mã:
    code = models.CharField(
                                editable=False,
                                blank=False,
                                null=False,
                                
                                default="",
                                max_length=100,
                                help_text=_('Mã'),
                            )
            
                
    # (friendly_code) Mã:
    friendly_code = models.CharField(
                                editable=True,
                                blank=False,
                                null=True,
                                
                                max_length=100,
                                help_text=_('Mã'),
                            )
            
    # (created_by) Người tạo:
    created_by = models.ForeignKey(Account,
                                to_field='username',
                                related_name='%(app_label)s_%(class)s_created_by',
                                on_delete=(models.PROTECT),
                                editable=False,
                                blank=False,
                                null=True,
                                
                                help_text=_('Người tạo'),
                            )
            
                
    # (created_at) Thời điểm tạo:
    created_at = models.DateTimeField(
                                editable=False,
                                blank=False,
                                null=False,
                                
                                default=djnow,
                                
                                help_text=_('Thời điểm tạo'),
                            )
            
    # (updated_by) Người cập nhật:
    updated_by = models.ForeignKey(Account,
                                to_field='username',
                                related_name='%(app_label)s_%(class)s_updated_by',
                                on_delete=(models.PROTECT),
                                editable=False,
                                blank=False,
                                null=True,
                                
                                help_text=_('Người cập nhật'),
                            )
            
    # (organization) Tổ chức:
    organization = HStoreField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                help_text=_('Tổ chức'),
                            )
            
    # (mail_sender) Email gửi đi:
    mail_sender = HStoreField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                help_text=_('Email gửi đi'),
                            )
            
    # (email_template) Mẫu email:
    email_template = HStoreField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                help_text=_('Mẫu email'),
                            )
            
    # (mail_target) Cá nhân/nhóm nhận mail:
    mail_target = HStoreField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                help_text=_('Cá nhân/nhóm nhận mail'),
                            )

    mail_to = models.CharField(
                                editable=True,
                                blank=True,
                                null=True,
                                max_length=500,
                                help_text=_('Cá nhân/nhóm nhận mail'),
                            )

    list_mail_to = ArrayField(models.CharField(max_length=500), 
                              default=None,
                              editable=True,
                              blank=True,
                              null=True,
                              help_text=_('Danh sách nhận mail'))

    list_mail_target = ArrayField(HStoreField(),
                                editable=True,
                                blank=True,
                                null=True,
                                help_text=_('Danh sách người nhận mail'),
                            )
        
    # (addressee) Người nhận:
    addressee = HStoreField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                help_text=_('Người nhận'),
                            )
            
                
    # (content) Nội dung:
    content = models.TextField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                max_length=50000,
                                help_text=_('Nội dung'),
                            )
            
                
    # (status_code) Mã trạng thái:
    status_code = models.CharField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                max_length=500,
                                help_text=_('Mã trạng thái'),
                            )
            
                
    # (status_text) Trạng thái:
    status_text = models.CharField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                max_length=500,
                                help_text=_('Trạng thái'),
                            )
            
    # (hr_created_by) Người tạo:
    hr_created_by = HStoreField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                help_text=_('Người tạo'),
                            )
            
                
    # (updated_at) Thời điểm cập nhật:
    updated_at = models.DateTimeField(
                                editable=False,
                                blank=False,
                                null=False,
                                
                                default=djnow,
                                
                                help_text=_('Thời điểm cập nhật'),
                            )
            
    # (hr_updated_by) Người cập nhật:
    hr_updated_by = HStoreField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                help_text=_('Người cập nhật'),
                            )
            
    #SystemMailMail_add_fields
    ################################################################

    


    class Template:
        # hiển thị chi tiết

        configs = [
            {
                'template_listviews': False,
                'allow_load_list_async': True, # Load danh sách lựa chọn bất đồng bộ
                'load_list_append': True, # cho phép load thêm bản ghi vào cuối danh sách nếu muốn
            },
        ]
        dActions = [
            
            'detail',
        
            'add',
            
            'edit',
            
            'delete',
            
        ]
        fieldsets = [
            
            ('name','code','friendly_code',),
                    
            ('created_by','created_at','updated_by',),
                    
            ('organization','mail_sender','email_template',),
                    
            ('mail_target','addressee','content', 'list_mail_target'),
                    
            ('status_code','status_text','hr_created_by',),
                    
            ('updated_at','hr_updated_by',),

        ]

        read_only_field = [
            
            'code',
                    
            'created_by',
                    
            'created_at',
                    
            'updated_by',
                    
            'updated_at',
                    
        ]
        required_field = [
            
            'organization',
                    
            'mail_sender',

            'list_mail_target',
                    
            'email_template',
                    
            'mail_target',
                    
            'addressee',
                    
            'content',
                    
            'status_code',
                    
            'status_text',
                    
            'hr_created_by',
                    
            'hr_updated_by',
                    
        ]
        in_form_buttons = [
            

        ]
        special_type_fields = [
            
        ]
        list_actions = [
            

        ]
        # hiển thị trên bảng
        list_fields = [
            
                    
            'name',
                    
                    
            'friendly_code',
                    
                    
            'organization',
                    
                    
            'mail_sender',
                    
                    
            'email_template',
                    
                    
            'mail_target',
                    
            'list_mail_target',
                    
            'addressee',
                    
                    
            'content',
                    
                    
            'status_code',
                    
                    
            'status_text',
                    
                    
            'hr_created_by',
                    
                    
            'hr_updated_by',
                    
        ]
        # hiển thị trên bảng thêm mới
        inline_fields = [
            
                    
            'name',
                    
                    
            'friendly_code',
                    
                    
            'organization',
                    
                    
            'mail_sender',
                    
                    
            'email_template',
                    
                    
            'mail_target',
                    

            'list_mail_target',
                    

            'addressee',
                    
                    
            'content',
                    
                    
            'status_code',
                    
                    
            'status_text',
                    
                    
            'hr_created_by',
                    
                    
            'hr_updated_by',
                    
        ]
        # các trường thông tin search
        search_fields = [
            
            'name',
                    
            'friendly_code',
                    
            'organization',
                    
            'mail_sender',
                    
            'email_template',
                    
            'mail_target',
                    
            'addressee',
                    
            'content',
                    
            'status_code',
                    
            'status_text',
                    
            'hr_created_by',
                    
            'hr_updated_by',
                    
        ]
        # các trường thông tin filter
        filter_fields = [
            

        ]
        # endclasstemplate

    
    tracker = FieldTracker()

    

    # Cập nhật giá trị (organization) Tổ chức:
    def set_organization_values(self,fk):
        try:
            if fk != "" and fk != None:
                crr_pk = Organization.objects.filter(pk=fk).values("uuid","code","friendly_code","name").first()
                if crr_pk is not None:
                    self.organization = crr_pk
                    print("set or update organization success!!")  
                else:
                    print("set or update organization fail because Organization obj with fk == %s not found!!" % fk)  
            else:
                print("set or update organization fail because fk == %s None or Empty" % fk)  
        except Exception as xx:
            print("set or update organization fail because %s" % str(xx))
    # Lấy obj (organization) Tổ chức:
    def get_organization_obj(self):
        try:
            crr_dict = self.organization
            if crr_dict != None and crr_dict :
                return Organization.objects.filter(pk=crr_dict["uuid"]).values().first()
            else:
                return None
        except Exception as xx:
            print("set or update organization fail because %s" % str(xx))
            return None


         
            

    # Cập nhật giá trị (mail_sender) Email gửi đi:
    def set_mail_sender_values(self,fk):
        try:
            if fk != "" and fk != None:
                crr_pk = SystemMailSenderConfig.objects.filter(pk=fk).values("uuid","code","friendly_code","name").first()
                if crr_pk is not None:
                    self.mail_sender = crr_pk
                    print("set or update mail_sender success!!")  
                else:
                    print("set or update mail_sender fail because SystemMailSenderConfig obj with fk == %s not found!!" % fk)  
            else:
                print("set or update mail_sender fail because fk == %s None or Empty" % fk)  
        except Exception as xx:
            print("set or update mail_sender fail because %s" % str(xx))
    # Lấy obj (mail_sender) Email gửi đi:
    def get_mail_sender_obj(self):
        try:
            crr_dict = self.mail_sender
            if crr_dict != None and crr_dict :
                return SystemMailSenderConfig.objects.filter(pk=crr_dict["uuid"]).values().first()
            else:
                return None
        except Exception as xx:
            print("set or update mail_sender fail because %s" % str(xx))
            return None


         
            

    # Cập nhật giá trị (email_template) Mẫu email:
    def set_email_template_values(self,fk):
        try:
            if fk != "" and fk != None:
                crr_pk = SystemMailTemplate.objects.filter(pk=fk).values("uuid","code","friendly_code","name").first()
                if crr_pk is not None:
                    self.email_template = crr_pk
                    print("set or update email_template success!!")  
                else:
                    print("set or update email_template fail because SystemMailTemplate obj with fk == %s not found!!" % fk)  
            else:
                print("set or update email_template fail because fk == %s None or Empty" % fk)  
        except Exception as xx:
            print("set or update email_template fail because %s" % str(xx))
    # Lấy obj (email_template) Mẫu email:
    def get_email_template_obj(self):
        try:
            crr_dict = self.email_template
            if crr_dict != None and crr_dict :
                return SystemMailTemplate.objects.filter(pk=crr_dict["uuid"]).values().first()
            else:
                return None
        except Exception as xx:
            print("set or update email_template fail because %s" % str(xx))
            return None


         
            

    # Cập nhật giá trị (mail_target) Cá nhân/nhóm nhận mail:
    def set_mail_target_values(self,fk):
        try:
            if fk != "" and fk != None:
                crr_pk = SystemMailTarget.objects.filter(pk=fk).values("uuid","code","friendly_code","name").first()
                if crr_pk is not None:
                    self.mail_target = crr_pk
                    print("set or update mail_target success!!")  
                else:
                    print("set or update mail_target fail because SystemMailTarget obj with fk == %s not found!!" % fk)  
            else:
                print("set or update mail_target fail because fk == %s None or Empty" % fk)  
        except Exception as xx:
            print("set or update mail_target fail because %s" % str(xx))
    # Lấy obj (mail_target) Cá nhân/nhóm nhận mail:
    def get_mail_target_obj(self):
        try:
            crr_dict = self.mail_target
            if crr_dict != None and crr_dict :
                return SystemMailTarget.objects.filter(pk=crr_dict["uuid"]).values().first()
            else:
                return None
        except Exception as xx:
            print("set or update mail_target fail because %s" % str(xx))
            return None


         
            

    # Cập nhật giá trị (addressee) Người nhận:
    def set_addressee_values(self,fk):
        try:
            if fk != "" and fk != None:
                crr_pk = HRAccount.objects.filter(pk=fk).values("uuid","code","friendly_code","name").first()
                if crr_pk is not None:
                    self.addressee = crr_pk
                    print("set or update addressee success!!")  
                else:
                    print("set or update addressee fail because HRAccount obj with fk == %s not found!!" % fk)  
            else:
                print("set or update addressee fail because fk == %s None or Empty" % fk)  
        except Exception as xx:
            print("set or update addressee fail because %s" % str(xx))
    # Lấy obj (addressee) Người nhận:
    def get_addressee_obj(self):
        try:
            crr_dict = self.addressee
            if crr_dict != None and crr_dict :
                return HRAccount.objects.filter(pk=crr_dict["uuid"]).values().first()
            else:
                return None
        except Exception as xx:
            print("set or update addressee fail because %s" % str(xx))
            return None


         
            

    # Cập nhật giá trị (hr_created_by) Người tạo:
    def set_hr_created_by_values(self,fk):
        try:
            if fk != "" and fk != None:
                crr_pk = HRAccount.objects.filter(pk=fk).values("uuid","code","friendly_code","name").first()
                if crr_pk is not None:
                    self.hr_created_by = crr_pk
                    print("set or update hr_created_by success!!")  
                else:
                    print("set or update hr_created_by fail because HRAccount obj with fk == %s not found!!" % fk)  
            else:
                print("set or update hr_created_by fail because fk == %s None or Empty" % fk)  
        except Exception as xx:
            print("set or update hr_created_by fail because %s" % str(xx))
    # Lấy obj (hr_created_by) Người tạo:
    def get_hr_created_by_obj(self):
        try:
            crr_dict = self.hr_created_by
            if crr_dict != None and crr_dict :
                return HRAccount.objects.filter(pk=crr_dict["uuid"]).values().first()
            else:
                return None
        except Exception as xx:
            print("set or update hr_created_by fail because %s" % str(xx))
            return None


         
            

    # Cập nhật giá trị (hr_updated_by) Người cập nhật:
    def set_hr_updated_by_values(self,fk):
        try:
            if fk != "" and fk != None:
                crr_pk = HRAccount.objects.filter(pk=fk).values("uuid","code","friendly_code","name").first()
                if crr_pk is not None:
                    self.hr_updated_by = crr_pk
                    print("set or update hr_updated_by success!!")  
                else:
                    print("set or update hr_updated_by fail because HRAccount obj with fk == %s not found!!" % fk)  
            else:
                print("set or update hr_updated_by fail because fk == %s None or Empty" % fk)  
        except Exception as xx:
            print("set or update hr_updated_by fail because %s" % str(xx))
    # Lấy obj (hr_updated_by) Người cập nhật:
    def get_hr_updated_by_obj(self):
        try:
            crr_dict = self.hr_updated_by
            if crr_dict != None and crr_dict :
                return HRAccount.objects.filter(pk=crr_dict["uuid"]).values().first()
            else:
                return None
        except Exception as xx:
            print("set or update hr_updated_by fail because %s" % str(xx))
            return None


    # thêm mới giá trị (list_mail_target) Người nhận mail:None
    def add_list_mail_target_values(self,fk):
        try:
            if fk != "" and fk != None:
                crr_pk = HRAccount.objects.filter(pk=fk).values("uuid","code","name", "email").first()
                if crr_pk is not None and self.list_mail_target:
                    self.list_mail_target.append(crr_pk)
                    print("add list_mail_target success!!")  
                elif crr_pk is not None and (self.list_mail_target == None or self.list_mail_target == []):
                    self.list_mail_target = []
                    self.list_mail_target.append(crr_pk)
                    print("add list_mail_target success!!")
                else:
                    print("add list_mail_target fail because HRAccount obj with fk == %s not found!!" % fk)  
            else:
                print("add list_mail_target fail because fk == %s None or Empty" % fk)  
        except Exception as xx:
            print("add list_mail_target fail because %s" % str(xx))
            
    # cập nhật giá trị (list_mail_target) Người nhận mail:None
    def update_list_mail_target_values(self,fk):
        try:
            if fk != "" and fk != None :
                crr_pk = HRAccount.objects.filter(pk=fk).values("uuid","code","name", "email").first()
                if self.list_mail_target:
                    for obj_value in self.list_mail_target:
                        if obj_value["uuid"] == fk:
                            obj_value = crr_pk
                    print("update list_mail_target success!!")  
                else:
                    print("update list_mail_target fail because HRAccount obj with fk == %s not found!!" % fk)  
            else:
                print("update list_mail_target fail because fk == %s None or Empty" % fk)  
        except Exception as xx:
            print("update list_mail_target fail because %s" % str(xx))
    
    # Xóa giá trị (list_mail_target) Người nhận mail:None
    def delete_list_mail_target_values(self,fk):
        try:
            if fk != "" and fk != None and self.list_mail_target:
                crr_list_mail_target = self.list_mail_target
                # self.list_mail_target = [{key : val for key, val in sub.items() if val != fk} for sub in crr_list_mail_target]
                self.list_mail_target = [obj for obj in crr_list_mail_target if not (obj['uuid'] == fk)]
            else:
                print("delete list_mail_target fail because fk == %s None or Empty" % fk)  
        except Exception as xx:
            print("delete list_mail_target fail because %s" % str(xx))

    # Lấy danh sách obj (list_mail_target) Người nhận mail:None
    def get_list_list_mail_target_obj(self):
        try:
            if self.list_mail_target:
                crr_uuid_list = [obj['uuid'] for obj in self.list_mail_target if 'uuid' in obj]

                if len(crr_uuid_list) > 0 :
                    return HRAccount.objects.filter(pk__in=crr_uuid_list).values().first()
                else:
                    return []
            else:
                return []
        except Exception as xx:
            print("set or update list_mail_target fail because %s" % str(xx))
            return []

    # Lấy số lượng obj (list_mail_target) Người nhận mail:None
    def get_count_list_mail_target_obj(self):
        try:
            if self.list_mail_target:
                return len(self.list_mail_target)
            else:
                return 0
        except Exception as xx:
            print("get count list_mail_target fail because %s" % str(xx))
            return 0       

    # lấy danh sách các Mail đã gửi phụ thuộc Mail cần gửi
    def get_systemmailsentmail_child_values_list(self):
        from SentMailManagement.models import SystemMailSentMail
        return SystemMailSentMail.objects.filter(mail__uuid=self.uuid).values("uuid","name","code",).all()
            
    # lấy số lượng các Mail đã gửi phụ thuộc Mail cần gửi
    def get_count_systemmailsentmail_child(self):
        from SentMailManagement.models import SystemMailSentMail
        return SystemMailSentMail.objects.filter(mail__uuid=self.uuid).all().count()
            

    #SystemMailMail_add_func
    
    def auto_send_email(self):
        try:
            # if self.mail is not None and self.email != "" and  self.email != "None" and self.validate_email():
            # Kiểm tra và lấy cấu hình SMTP server mặc định từ database
            smtp_server = SystemMailServerConfig.objects.filter(is_default=True).first()

            print('smtp_server =', smtp_server)
             # Nếu không tìm thấy SMTP server, đặt thông báo lỗi và trả về
            if smtp_server is None:
                self.status_text = "[MPS] - Error Not Found SMTP Server Config"
                self.status_code = "404"
                return None
            else:
                a = 0

                # Lấy thông tin cấu hình gửi email từ database, dựa trên SMTP server
                email_sender = SystemMailSenderConfig.objects.filter(
                    # is_active=True,
                    email_server__uuid=smtp_server.uuid,
                    # number_sent__lt=smtp_server.limit_sending
                ).first()
                print('email_sender=', email_sender)
                # Nếu không tìm thấy cấu hình gửi email, đặt thông báo lỗi và trả về
                if email_sender is None:
                    self.status_text = "[MPS] - Error Not Found Email Sender"
                    self.status_code = "404"
                    return None
                else:
                    try:
                        # Kiểm tra nếu SMTP server là "mailchimp"
                        if smtp_server.name == "mailchimp":
                            # key = 'md-6OrwnduBJKTKv5bfjMfMgg'
                            key = email_sender.app_password #Địa chỉ email người gửi, lấy từ cấu hình email sender.
                            from_email = email_sender.email #Chủ đề của email, lấy từ tên của email.
                            receiver_email = self.email
                            subject_email = self.name
                            text_content = str(self.content)
                            mailchimp = MailchimpTransactional.Client(key)

                            # Xây dựng thông điệp gửi cho Mailchimp
                            message = {
                                "from_email": from_email, # Địa chỉ email người gửi
                                # "from_name": DISPLAY_NAME_EMAIL,
                                "subject": subject_email, # Chủ đề của email
                                "html": text_content, # Nội dung HTML của email
                                "send_to": receiver_email, # Địa chỉ email người nhận 
                                "to": [
                                    {
                                        "email": receiver_email, # Địa chỉ email người nhận
                                        "type": "to" # Loại người nhận (trong trường hợp này, là "to")
                                    },
                                ],
                                "reply_to": "support@mpsolutions.com.vn", # Địa chỉ email để reply
                                "support_phone": "0912.555.644", # Số điện thoại hỗ trợ
                                "send_at": str(datetime.now().strftime("%d/%m/%y %H:%m:%S")), # Thời điểm gửi email
                                # "return_path_domain": DOMAIN_NAME,
                            }
                            try:
                                # Test sent_mail
                                # template2 = str(open("SendMailMangementManagement/moi_danh_gia-V3.0.html", "r").read())
                                # result = MailChimpSender(key, template2, **message2)
                                # Gửi thông điệp sử dụng API của Mailchimp
                                if message["from_email"] != "no-reply@danhgi.com.vn":
                                    return # Ngừng thực hiện nếu địa chỉ email nguồn không phải là "no-reply@danhgi.com.vn"
                                if message["send_to"].find("@mpsolutions.com.vn") is True:
                                    return # Ngừng thực hiện nếu địa chỉ email đích chứa "@mpsolutions.com.vn"
                                if message["html"] == None or str(message["html"]).strip() == "":
                                    return # Ngừng thực hiện nếu nội dung email html trống
                                if message["subject"] == None or str(message["subject"]) == "":
                                    return # Ngừng thực hiện nếu chủ đề email trống
                                response = mailchimp.messages.send({"message": message})
                                print('API called successfully: {}'.format(response))
                                email_sender.number_sent = email_sender.number_sent + 1
                                email_sender.save()
                            except ApiClientError as error:
                                print('An exception occurred: {}'.format(error.text))
                        else:
                            # Nếu không phải là "mailchimp", sử dụng SMTP server thông thường
                            port = smtp_server.port
                            smtp_server = smtp_server.host
                            sender_email = email_sender.email #địa chỉ email của người gửi
                            password = email_sender.app_password #mật khẩu ứng dụng email của người gửi.
                            receiver_email = self.mail_to #địa chỉ email của người nhận.
                            email_message = MIMEMultipart() #Tạo một email_message MIME multipart
                            DISPLAY_NAME_EMAIL = 'test' #tên hiển thị cho người gửi.
                            email_message['From'] = formataddr((DISPLAY_NAME_EMAIL, sender_email)) 
                            email_message['To'] = receiver_email
                            email_message['Subject'] = self.name
                            self.content = self.content.replace("{{uuid_mail}}", str(self.uuid))

                            # self.content = html.unescape(self.content)
                            
                            email_message.attach(MIMEText(self.content, "html")) #Đính kèm nội dung HTML vào email_message.
                            email_string = email_message.as_string() #Chuyển đổi email_message email thành chuỗi.
                            context = ssl.create_default_context() 

                            # Gửi email thông qua SMTP server
                            with smtplib.SMTP_SSL(smtp_server, port, context=context) as server:
                                server.ehlo() #Xác định máy khách đến máy chủ.  
                                server.login(sender_email, password) #Đăng nhập vào máy chủ email.
                                server.sendmail(sender_email, receiver_email, email_string) #Gửi email.
                                self.status_text = "Successful" 
                                self.status_code = "200"
                                email_sender.number_sent = email_sender.number_sent + 1
                                email_sender.save()
                                a += 1
                                print(a)

                        # lưu vào thư đã gửi
                        email_has_sent = SystemMailSentMail()
                        email_has_sent.status_code = self.status_code
                        email_has_sent.status_text = self.status_text
                        SystemMailMail_dict = {
                            'uuid': self.uuid,
                            'friendly_code': self.friendly_code,
                            'name': self.name,
                            'code': self.code,
                            'content': self.content,
                        }
                        email_has_sent.mail = SystemMailMail_dict
                        email_has_sent.to_email = self.mail_to
                        email_has_sent.mail_sender = self.mail_sender["email"]
                        email_has_sent.name = self.name
                        email_has_sent.save()

                    except Exception as ex:
                        self.status_text = str(ex)
                        self.status_code = "404"
        except Exception as ex:
            print("Lỗi khi auto_send_mail ", str(ex))


    def auto_send_email_sys(self):
        try:
            # Lấy ra email gửi đi
            mail_sender = SystemMailSenderConfig.objects.filter(uuid=self.mail_sender["uuid"]).first()
            # Từ email gửi đi lấy ra cấu hình mail server
            mail_server = SystemMailServerConfig.objects.filter(uuid=mail_sender.email_server["uuid"]).first()
            
            print('mail_server =', mail_server)
             # Nếu không tìm thấy SMTP server, đặt thông báo lỗi và trả về
            if mail_server is None:
                self.status_text = "[MPS] - Error Not Found SMTP Server Config"
                self.status_code = "404"
                return None
            else:
                a = 0

                # Lấy thông tin cấu hình gửi email từ database, dựa trên SMTP server
                email_sender = SystemMailSenderConfig.objects.filter(
                    # is_active=True,
                    email_server__uuid=mail_server.uuid,
                    # number_sent__lt=mail_server.limit_sending
                ).first()
                print('email_sender=', email_sender)
                # Nếu không tìm thấy cấu hình gửi email, đặt thông báo lỗi và trả về
                if email_sender is None:
                    self.status_text = "[MPS] - Error Not Found Email Sender"
                    self.status_code = "404"
                    return None
                else:
                    try:
                        # Nếu không phải là "mailchimp", sử dụng SMTP server thông thường
                        port = mail_server.port
                        smtp_server_host = mail_server.host
                        sender_email = email_sender.email #địa chỉ email của người gửi
                        password = email_sender.app_password #mật khẩu ứng dụng email của người gửi.
                        receiver_email = self.mail_to #địa chỉ email của người nhận.
                        
                        DISPLAY_NAME_EMAIL = 'HRM360' #tên hiển thị cho người gửi.
                        email_message = MIMEMultipart() #Tạo một email_message MIME multipart
                        email_message['From'] = formataddr((DISPLAY_NAME_EMAIL, sender_email)) 
                        email_message['To'] = receiver_email
                        email_message['Subject'] = self.name
                        email_message.attach(MIMEText(self.content, "html")) #Đính kèm nội dung HTML vào email_message.
                        email_string = email_message.as_string() #Chuyển đổi email_message email thành chuỗi.
                        context = ssl.create_default_context() 

                        # Gửi email thông qua SMTP server
                        with smtplib.SMTP_SSL(smtp_server_host, port, context=context) as server:
                            server.ehlo() #Xác định máy khách đến máy chủ.  
                            server.login(sender_email, password) #Đăng nhập vào máy chủ email.
                            server.sendmail(sender_email, receiver_email, email_string) #Gửi email.
                            self.status_text = "Successful" 
                            self.status_code = "200"
                            email_sender.number_sent = email_sender.number_sent + 1
                            email_sender.save()
                            a += 1
                            print(a)
                    except Exception as ex:
                        self.status_text = str(ex)
                        self.status_code = "404"
        except Exception as ex:
            print("Lỗi khi auto_send_mail ", str(ex))


    def auto_send_email_sys_2(self):
        try:
            # Lấy ra email gửi đi mail_sender
            mail_sender = SystemMailSenderConfig.objects.filter(uuid=self.mail_sender["uuid"]).first()
            # Từ email gửi đi lấy ra cấu hình mail server
            mail_server = SystemMailServerConfig.objects.filter(uuid=mail_sender.email_server["uuid"]).first()
            
            print('mail_server =', mail_server)
             # Nếu không tìm thấy SMTP server, đặt thông báo lỗi và trả về
            if mail_server is None:
                self.status_text = "[MPS] - Error Not Found SMTP Server Config"
                self.status_code = "404"
                return None
            else:
                a = 0

                # Lấy thông tin cấu hình gửi email từ database, dựa trên SMTP server
                email_sender = SystemMailSenderConfig.objects.filter(
                    # is_active=True,
                    email_server__uuid=mail_server.uuid,
                    # number_sent__lt=mail_server.limit_sending
                ).first()
                print('email_sender=', email_sender)
                # Nếu không tìm thấy cấu hình gửi email, đặt thông báo lỗi và trả về
                if email_sender is None:
                    self.status_text = "[MPS] - Error Not Found Email Sender"
                    self.status_code = "404"
                    return None
                else:
                    try:
                        # Nếu không phải là "mailchimp", sử dụng SMTP server thông thường
                        port = mail_server.port
                        smtp_server_host = mail_server.host
                        sender_email = email_sender.email #địa chỉ email của người gửi
                        password = email_sender.app_password #mật khẩu ứng dụng email của người gửi.
                        receiver_email = self.mail_to #địa chỉ email của người nhận.
                        
                        DISPLAY_NAME_EMAIL = 'HRM360' #tên hiển thị cho người gửi.
                        email_message = MIMEMultipart() #Tạo một email_message MIME multipart
                        email_message['From'] = formataddr((DISPLAY_NAME_EMAIL, sender_email)) 
                        email_message['To'] = receiver_email
                        email_message['Subject'] = self.name
                        email_message.attach(MIMEText(self.content, "html")) #Đính kèm nội dung HTML vào email_message.
                        email_string = email_message.as_string() #Chuyển đổi email_message email thành chuỗi.
                        context = ssl.create_default_context() 

                        # Gửi email thông qua SMTP server
                        with smtplib.SMTP_SSL(smtp_server_host, port, context=context) as server:
                            server.ehlo() #Xác định máy khách đến máy chủ.  
                            server.login(sender_email, password) #Đăng nhập vào máy chủ email.
                            server.sendmail(sender_email, receiver_email, email_string) #Gửi email.
                            self.status_text = "Thành công" 
                            self.status_code = "200"
                            if email_sender.number_sent is None:
                                email_sender.number_sent = 0
                            email_sender.number_sent = email_sender.number_sent + 1
                            email_sender.save()
                            a += 1
                            print(a)

                        # lưu vào thư đã gửi SystemMailSentMail
                        email_has_sent = SystemMailSentMail()
                        email_has_sent.status_code = self.status_code
                        email_has_sent.status_text = self.status_text
                        SystemMailMail_dict = {
                            'uuid': self.uuid,
                            'friendly_code': self.friendly_code,
                            'name': self.name,
                            'code': self.code,
                            'content': self.content,
                        }
                        email_has_sent.mail = SystemMailMail_dict
                        email_has_sent.to_email = self.mail_to #(to_email) Tên địa chỉ mail nhận
                        email_has_sent.mail_sender = mail_sender.email # (mail_sender) Tên địa chỉ mail gửi
                        email_has_sent.name = self.name 
                        
                        email_has_sent.save()

                    except Exception as ex:
                        self.status_text = str(ex)
                        self.status_code = "404"
        except Exception as ex:
            print("Lỗi khi auto_send_mail ", str(ex))


    def send_mail_sys(self, template_code, mail_to, lst_value=None, crr_mail_sender=None, crr_mail_target=None):
        import re
        try:
            # lấy ra template mail từ "template_code" truyền vào hàm
            mail_template = SystemMailTemplate.objects.filter(friendly_code=template_code).first()
            mail_template_dict = {
                'uuid': mail_template.uuid,
                'friendly_code': mail_template.friendly_code,
                'name': mail_template.name,
                'code': mail_template.code,
            }

            #lấy ra SystemMailSenderConfig
            if crr_mail_sender is not None:
                mail_sender = SystemMailSenderConfig.objects.filter(friendly_code=crr_mail_sender).values("uuid","friendly_code","code","name").first()
            else:
                # nếu ko truyền giá trị crr_mail_sender thì mặc định lấy SystemMailSenderConfig có mã "HoTroHRM"
                mail_sender = SystemMailSenderConfig.objects.filter(friendly_code="HoTroHRM").values("uuid","friendly_code","code","name").first()

            variables = lst_value

            #function replace variable in mail_template (form daidv with love)
            # def replace_variable(match):
            #     variable_name = match.group(1).strip()
            #     if variable_name in variables:
            #         return variables[variable_name]
            #     return match.group(0)
            def replace_variable(match):
                if match.group(1) is not None:
                    variable_name = match.group(1).strip()
                elif match.group(2) is not None:
                    variable_name = match.group(2).strip()
                else:
                    # Xử lý trường hợp không có group nào khớp
                    return match.group(0)

                if variable_name in variables:
                    return variables[variable_name]
                return match.group(0)
            #lấy ra html, css của mail_template
            content_template = mail_template.content
            
            #thay thế variable trong mail_tempalte
            # message = re.sub(r'{{(.*?)}}', replace_variable, content_template)
            message = re.sub(r'\{\{(.*?)\}\}|\$(\w+)', replace_variable, content_template)
            subject_template = str(mail_template.name)

            # subject = re.sub(r'{{(.*?)}}', replace_variable, subject_template)
            subject = subject_template #tiêu đề mail là tên của mail_template

            try:
                #khởi tạo những thuộc tính cho obj SystemMailMail (Mail cần gửi)
                self.name = subject 
                self.mail_to = mail_to 
                self.content = message
                if crr_mail_target is not None:
                    mail_target_dict = SystemMailTarget.objects.filter(name=crr_mail_target).values("uuid","friendly_code","code","name").first()
                    self.mail_target = mail_target_dict #mail_target": cá nhân/ nhóm nhận mail
                self.email_template = mail_template_dict
                self.mail_sender = mail_sender #có obj SystemMailSenderConfig để lấy ra SystemMailServerConfig
                self.status_text = "Khởi tạo"
                super().save() 
                self.auto_send_email_sys_2()
            except Exception as xx:
                print(xx)
        except Exception as ex:
            print("Lỗi khi auto_send_mail ", str(ex))

    def auto_send_email_2(self):
        try:
            mail_template = SystemMailTemplate.objects.filter(uuid=self.email_template['uuid']).first()
            # if self.mail is not None and self.email != "" and  self.email != "None" and self.validate_email():
            # Kiểm tra và lấy cấu hình SMTP server mặc định từ database
            smtp_server = SystemMailServerConfig.objects.filter(is_default=True).first()

            print('smtp_server =', smtp_server)
             # Nếu không tìm thấy SMTP server, đặt thông báo lỗi và trả về
            if smtp_server is None:
                self.status_text = "[MPS] - Error Not Found SMTP Server Config"
                self.status_code = "404"
                return None
            else:
                a = 0

                # Lấy thông tin cấu hình gửi email từ database, dựa trên SMTP server
                email_sender = SystemMailSenderConfig.objects.filter(
                    # is_active=True,
                    email_server__uuid=smtp_server.uuid,
                    # number_sent__lt=smtp_server.limit_sending
                ).first()
                print('email_sender=', email_sender)
                # Nếu không tìm thấy cấu hình gửi email, đặt thông báo lỗi và trả về
                if email_sender is None:
                    self.status_text = "[MPS] - Error Not Found Email Sender"
                    self.status_code = "404"
                    return None
                else:
                    try:
                        # Kiểm tra nếu SMTP server là "mailchimp"
                        if smtp_server.name == "mailchimp":
                            # key = 'md-6OrwnduBJKTKv5bfjMfMgg'
                            key = email_sender.app_password #Địa chỉ email người gửi, lấy từ cấu hình email sender.
                            from_email = email_sender.email #Chủ đề của email, lấy từ tên của email.
                            receiver_email = self.email
                            subject_email = self.name
                            text_content = str(self.content)
                            mailchimp = MailchimpTransactional.Client(key)

                            # Xây dựng thông điệp gửi cho Mailchimp
                            message = {
                                "from_email": from_email, # Địa chỉ email người gửi
                                # "from_name": DISPLAY_NAME_EMAIL,
                                "subject": subject_email, # Chủ đề của email
                                "html": text_content, # Nội dung HTML của email
                                "send_to": receiver_email, # Địa chỉ email người nhận 
                                "to": [
                                    {
                                        "email": receiver_email, # Địa chỉ email người nhận
                                        "type": "to" # Loại người nhận (trong trường hợp này, là "to")
                                    },
                                ],
                                "reply_to": "support@mpsolutions.com.vn", # Địa chỉ email để reply
                                "support_phone": "0912.555.644", # Số điện thoại hỗ trợ
                                "send_at": str(datetime.now().strftime("%d/%m/%y %H:%m:%S")), # Thời điểm gửi email
                                # "return_path_domain": DOMAIN_NAME,
                            }
                            try:
                                # Test sent_mail
                                # template2 = str(open("SendMailMangementManagement/moi_danh_gia-V3.0.html", "r").read())
                                # result = MailChimpSender(key, template2, **message2)
                                # Gửi thông điệp sử dụng API của Mailchimp
                                if message["from_email"] != "no-reply@danhgi.com.vn":
                                    return # Ngừng thực hiện nếu địa chỉ email nguồn không phải là "no-reply@danhgi.com.vn"
                                if message["send_to"].find("@mpsolutions.com.vn") is True:
                                    return # Ngừng thực hiện nếu địa chỉ email đích chứa "@mpsolutions.com.vn"
                                if message["html"] == None or str(message["html"]).strip() == "":
                                    return # Ngừng thực hiện nếu nội dung email html trống
                                if message["subject"] == None or str(message["subject"]) == "":
                                    return # Ngừng thực hiện nếu chủ đề email trống
                                response = mailchimp.messages.send({"message": message})
                                print('API called successfully: {}'.format(response))
                                email_sender.number_sent = email_sender.number_sent + 1
                                email_sender.save()
                            except ApiClientError as error:
                                print('An exception occurred: {}'.format(error.text))
                        else:
                            # Nếu không phải là "mailchimp", sử dụng SMTP server thông thường
                            port = smtp_server.port
                            smtp_server = smtp_server.host
                            sender_email = email_sender.email #địa chỉ email của người gửi
                            password = email_sender.app_password #mật khẩu ứng dụng email của người gửi.
                            receiver_email = self.mail_to #địa chỉ email của người nhận.
                            email_message = MIMEMultipart() #Tạo một email_message MIME multipart
                            DISPLAY_NAME_EMAIL = 'test' #tên hiển thị cho người gửi.
                            email_message['From'] = formataddr((DISPLAY_NAME_EMAIL, sender_email)) 
                            email_message['To'] = receiver_email
                            email_message['Subject'] = self.name
                            values = self.content.split()
                            self.content = mail_template.content.replace("$username",values[0]).replace("$password",values[1])
                            # self.content = self.content.replace("{{uuid_mail}}", str(self.uuid))
                            email_message.attach(MIMEText(self.content, "html")) #Đính kèm nội dung HTML vào email_message.
                            email_string = email_message.as_string() #Chuyển đổi email_message email thành chuỗi.
                            context = ssl.create_default_context() 

                            # Gửi email thông qua SMTP server
                            with smtplib.SMTP_SSL(smtp_server, port, context=context) as server:
                                server.ehlo() #Xác định máy khách đến máy chủ.  
                                server.login(sender_email, password) #Đăng nhập vào máy chủ email.
                                server.sendmail(sender_email, receiver_email, email_string) #Gửi email.
                                self.status_text = "Successful" 
                                self.status_code = "200"
                                email_sender.number_sent = email_sender.number_sent + 1
                                email_sender.save()
                                a += 1
                                print(a)
                    except Exception as ex:
                        self.status_text = str(ex)
                        self.status_code = "404"
        except Exception as ex:
            print("Lỗi khi auto_send_mail 123", str(ex))

    def send_mail_front_end(self, mail_to, crr_mail_sender=None, content=None):
        try:
            if crr_mail_sender is not None:
                mail_sender = SystemMailSenderConfig.objects.filter(uuid=crr_mail_sender).values("uuid","friendly_code","code","name").first()
            else:
                mail_sender = SystemMailSenderConfig.objects.values("uuid","friendly_code","code","name").first()
            try:
                self.mail_to = mail_to
                self.content = content
                self.mail_sender = mail_sender
                self.status_text = "Khởi tạo"
                super().save()
                self.auto_send_email_sys()
            except Exception as xx:
                print(xx)
        except Exception as ex:
            print("Lỗi khi auto_send_mail ", str(ex))
    
    def send_mail_front_end_to_many_people(self, uuid_mail_target, crr_mail_sender=None, content=None):
        try:
            if crr_mail_sender is not None:
                mail_sender = SystemMailSenderConfig.objects.filter(uuid=crr_mail_sender).values("uuid","friendly_code","code","name").first()
            else:
                mail_sender = SystemMailSenderConfig.objects.values("uuid","friendly_code","code","name").first()
            mail_target_obj = SystemMailTarget.objects.filter(uuid=uuid_mail_target).values("uuid","friendly_code","code","name").first()
            try:
                self.mail_target = mail_target_obj
                self.content = content
                self.mail_sender = mail_sender
                self.status_text = "Khởi tạo"
                super().save()
                self.auto_send_email_sys_to_many_people()
            except Exception as xx:
                print(xx)
        except Exception as ex:
            print("Lỗi khi auto_send_mail ", str(ex))
    
    def compose_mail_front_end_to_many_people(self, list_uuid_target=None, crr_mail_sender=None, content=None):
        try:
            if crr_mail_sender is not None:
                mail_sender = SystemMailSenderConfig.objects.filter(uuid=crr_mail_sender).values("uuid","friendly_code","code","name").first()
            else:
                mail_sender = SystemMailSenderConfig.objects.values("uuid","friendly_code","code","name").first()
            
            email_string = ""
            list_mail_target_res = []
            # for index, uuid_target in enumerate(list_uuid_target):
            #     email_from_uuid_target = HRAccount.objects.filter(uuid=uuid_target).values("email")
            #     email_string += email_from_uuid_target[0]["email"]
            #     if index != len(list_uuid_target) - 1:
            #         email_string += ","
                # mail_target_obj = SystemMailTarget.objects.filter(uuid=uuid_mail_target).values("uuid","friendly_code","code","name").first()

            try:
                self.list_mail_target = list_uuid_target
                self.mail_to = email_string
                self.content = content
                self.mail_sender = mail_sender
                self.status_text = "Khởi tạo"
                super().save()
                self.auto_compose_email_sys_to_many_people()
            except Exception as xx:
                print(xx)
        except Exception as ex:
            print("Lỗi khi auto_send_mail ", str(ex))

    def auto_compose_email_sys_to_many_people(self):
        try:
            # Lấy ra email gửi đi
            mail_sender = SystemMailSenderConfig.objects.filter(uuid=self.mail_sender["uuid"]).first()
            # Từ email gửi đi lấy ra cấu hình mail server
            mail_server = SystemMailServerConfig.objects.filter(uuid=mail_sender.email_server["uuid"]).first()

            # email_string = self.mail_to
            # email_list = email_string.split(",")  # Mảng để lưu trữ các địa chỉ email
            # Lặp qua danh sách và trích xuất địa chỉ email

            print('mail_server =', mail_server)
             # Nếu không tìm thấy SMTP server, đặt thông báo lỗi và trả về
            if mail_server is None:
                self.status_text = "[MPS] - Error Not Found SMTP Server Config"
                self.status_code = "404"
                return None
            else:
                a = 0

                # Lấy thông tin cấu hình gửi email từ database, dựa trên SMTP server
                # email_sender = SystemMailSenderConfig.objects.filter(
                #     # is_active=True,
                #     email_server__uuid=mail_server.uuid,
                #     # number_sent__lt=mail_server.limit_sending
                # ).first()
                print('mail_sender=', mail_sender)
                # Nếu không tìm thấy cấu hình gửi email, đặt thông báo lỗi và trả về
                if mail_sender is None:
                    self.status_text = "[MPS] - Error Not Found Email Sender"
                    self.status_code = "404"
                    return None
                else:
                    try:
                        # Nếu không phải là "mailchimp", sử dụng SMTP server thông thường
                        port = mail_server.port
                        smtp_server_host = mail_server.host
                        sender_email = mail_sender.email #địa chỉ email của người gửi
                        password = mail_sender.app_password #mật khẩu ứng dụng email của người gửi.

                        receiver_email = email_list #địa chỉ email của người nhận.
                        
                        for receiver_email_item in receiver_email:
                            DISPLAY_NAME_EMAIL = 'HRM360' #tên hiển thị cho người gửi.
                            email_message = MIMEMultipart() #Tạo một email_message MIME multipart
                            email_message['From'] = formataddr((DISPLAY_NAME_EMAIL, sender_email)) 
                            email_message['To'] = receiver_email_item
                            email_message['Subject'] = self.name
                            email_message.attach(MIMEText(self.content, "html")) #Đính kèm nội dung HTML vào email_message.
                            email_string = email_message.as_string() #Chuyển đổi email_message email thành chuỗi.
                            context = ssl.create_default_context() 

                            # Gửi email thông qua SMTP server
                            with smtplib.SMTP_SSL(smtp_server_host, port, context=context) as server:
                                server.ehlo() #Xác định máy khách đến máy chủ.  
                                server.login(sender_email, password) #Đăng nhập vào máy chủ email.
                                server.sendmail(sender_email, receiver_email_item, email_string) #Gửi email.
                                self.status_text = "Successful" 
                                self.status_code = "200"
                                mail_sender.number_sent = mail_sender.number_sent + 1
                                mail_sender.save()
                                a += 1
                                print(a)
                    
                        # lưu vào thư đã gửi
                        email_has_sent = SystemMailSentMail()
                        email_has_sent.status_code = self.status_code
                        email_has_sent.status_text = self.status_text
                        SystemMailMail_dict = {
                            'uuid': self.uuid,
                            'friendly_code': self.friendly_code,
                            'name': self.name,
                            'code': self.code,
                            'content': self.content,
                        }
                        email_has_sent.mail = SystemMailMail_dict

                        to_email_string = ", ".join(email_list)
                        email_has_sent.to_email = to_email_string

                        # addressee_string = mail_target_obj[0]["name"]
                        # addressee_dict = {
                        #     'name': mail_target_obj[0]["name"],
                        # }
                        # email_has_sent.addressee = addressee_dict
                        email_has_sent.mail_sender = mail_sender.email
                        email_has_sent.save()
                    except Exception as ex:
                        self.status_text = str(ex)
                        self.status_code = "404"
        except Exception as ex:
            print("Lỗi khi auto_send_mail ", str(ex))


    def auto_send_email_sys_to_many_people(self):
        try:
            # Lấy ra email gửi đi
            mail_sender = SystemMailSenderConfig.objects.filter(uuid=self.mail_sender["uuid"]).first()
            # Từ email gửi đi lấy ra cấu hình mail server
            mail_server = SystemMailServerConfig.objects.filter(uuid=mail_sender.email_server["uuid"]).first()
            
            mail_target_obj = SystemMailTarget.objects.filter(uuid=self.mail_target["uuid"]).values("uuid","friendly_code","code", "target", "name")
            field_target = mail_target_obj[0]["target"]
            email_list = []  # Mảng để lưu trữ các địa chỉ email
            # Lặp qua danh sách và trích xuất địa chỉ email
            for item in field_target:
                # Kiểm tra xem đối tượng có khóa 'email' không
                if 'email' in item:
                    email_list.append(item['email'])
            print('mail_server =', mail_server)
             # Nếu không tìm thấy SMTP server, đặt thông báo lỗi và trả về
            if mail_server is None:
                self.status_text = "[MPS] - Error Not Found SMTP Server Config"
                self.status_code = "404"
                return None
            else:
                a = 0

                # Lấy thông tin cấu hình gửi email từ database, dựa trên SMTP server
                # email_sender = SystemMailSenderConfig.objects.filter(
                #     # is_active=True,
                #     email_server__uuid=mail_server.uuid,
                #     # number_sent__lt=mail_server.limit_sending
                # ).first()
                print('mail_sender=', mail_sender)
                # Nếu không tìm thấy cấu hình gửi email, đặt thông báo lỗi và trả về
                if mail_sender is None:
                    self.status_text = "[MPS] - Error Not Found Email Sender"
                    self.status_code = "404"
                    return None
                else:
                    try:
                        # Nếu không phải là "mailchimp", sử dụng SMTP server thông thường
                        port = mail_server.port
                        smtp_server_host = mail_server.host
                        sender_email = mail_sender.email #địa chỉ email của người gửi
                        password = mail_sender.app_password #mật khẩu ứng dụng email của người gửi.

                        receiver_email = email_list #địa chỉ email của người nhận.
                        
                        for receiver_email_item in receiver_email:
                            DISPLAY_NAME_EMAIL = 'HRM360' #tên hiển thị cho người gửi.
                            email_message = MIMEMultipart() #Tạo một email_message MIME multipart
                            email_message['From'] = formataddr((DISPLAY_NAME_EMAIL, sender_email)) 
                            email_message['To'] = receiver_email_item
                            email_message['Subject'] = self.name
                            email_message.attach(MIMEText(self.content, "html")) #Đính kèm nội dung HTML vào email_message.
                            email_string = email_message.as_string() #Chuyển đổi email_message email thành chuỗi.
                            context = ssl.create_default_context() 

                            # Gửi email thông qua SMTP server
                            with smtplib.SMTP_SSL(smtp_server_host, port, context=context) as server:
                                server.ehlo() #Xác định máy khách đến máy chủ.  
                                server.login(sender_email, password) #Đăng nhập vào máy chủ email.
                                server.sendmail(sender_email, receiver_email_item, email_string) #Gửi email.
                                self.status_text = "Successful" 
                                self.status_code = "200"
                                mail_sender.number_sent = mail_sender.number_sent + 1
                                mail_sender.save()
                                a += 1
                                print(a)
                    
                        # lưu vào thư đã gửi
                        email_has_sent = SystemMailSentMail()
                        email_has_sent.status_code = self.status_code
                        email_has_sent.status_text = self.status_text
                        SystemMailMail_dict = {
                            'uuid': self.uuid,
                            'friendly_code': self.friendly_code,
                            'name': self.name,
                            'code': self.code,
                            'content': self.content,
                        }
                        email_has_sent.mail = SystemMailMail_dict

                        to_email_string = ", ".join(email_list)
                        email_has_sent.to_email = to_email_string

                        # addressee_string = mail_target_obj[0]["name"]
                        addressee_dict = {
                            'name': mail_target_obj[0]["name"],
                        }
                        email_has_sent.addressee = addressee_dict
                        email_has_sent.mail_sender = mail_sender.email
                        email_has_sent.save()
                    except Exception as ex:
                        self.status_text = str(ex)
                        self.status_code = "404"
        except Exception as ex:
            print("Lỗi khi auto_send_mail ", str(ex))


    def __str__(self):
        return str(self.name)
    
    def save(self, *args, **kwargs):
        
        self.updated_at = djnow()
        super().save(*args, **kwargs)

        if self._state.adding and self.created_by is not None:
            self.updated_by = self.created_by
    # def save(self, *args, **kwargs):
    #     #huytn
    #     is_adding = False

    #     if self._state.adding:
    #         is_adding = True

    #     self.updated_at = djnow()
    #     super().save(*args, **kwargs)

    #     if is_adding and self.created_by is not None:
    #         self.updated_by = self.created_by
        # try:
        #     if is_adding:
        #         self.auto_send_email_2()
        # except Exception as xx:
        #     print("set or update send mail fail because %s" % str(xx))
        
        
        # Cách gửi mail toàn hệ thống
        # email_send = SystemMailMail()
        # email_send.send_mail_sys("huy","huy@gmail.com")
        # email_send.send_mail_sys("DKND01","huy@gmail.com",{"username": "hand@hrm360.com.vn",})
        



# Mail đã gửi
class SystemMailSentMail(models.Model):
    class Meta:
        verbose_name = "Mail đã gửi"
        verbose_name_plural = "Mail đã gửi"

    uuid = models.UUIDField(default=UUID4,
                                max_length=64,
                                editable=False,
                                unique=True,
                                primary_key=True,
                            )
    #$model_default_field
    
                
    # (name) Tên:
    name = models.CharField(
                                editable=True,
                                blank=False,
                                null=False,
                                
                                default="",
                                max_length=2000,
                                help_text=_('Tên'),
                            )
            
                
    # (code) Mã:
    code = models.CharField(
                                editable=False,
                                blank=False,
                                null=False,
                                
                                default="",
                                max_length=100,
                                help_text=_('Mã'),
                            )
            
                
    # (friendly_code) Mã:
    friendly_code = models.CharField(
                                editable=True,
                                blank=False,
                                null=True,
                                
                                max_length=100,
                                help_text=_('Mã'),
                            )
            
    # (created_by) Người tạo:
    created_by = models.ForeignKey(Account,
                                to_field='username',
                                related_name='%(app_label)s_%(class)s_created_by',
                                on_delete=(models.PROTECT),
                                editable=False,
                                blank=False,
                                null=True,
                                
                                help_text=_('Người tạo'),
                            )
            
                
    # (created_at) Thời điểm tạo:
    created_at = models.DateTimeField(
                                editable=False,
                                blank=False,
                                null=False,
                                
                                default=djnow,
                                
                                help_text=_('Thời điểm tạo'),
                            )
            
    # (updated_by) Người cập nhật:
    updated_by = models.ForeignKey(Account,
                                to_field='username',
                                related_name='%(app_label)s_%(class)s_updated_by',
                                on_delete=(models.PROTECT),
                                editable=False,
                                blank=False,
                                null=True,
                                
                                help_text=_('Người cập nhật'),
                            )
            
                
    # (updated_at) Thời điểm cập nhật:
    updated_at = models.DateTimeField(
                                editable=False,
                                blank=False,
                                null=False,
                                
                                default=djnow,
                                
                                help_text=_('Thời điểm cập nhật'),
                            )
            
    # (organization) Tổ chức:
    organization = HStoreField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                help_text=_('Tổ chức'),
                            )
            
    # (addressee) Người nhận:
    addressee = HStoreField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                help_text=_('Người nhận'),
                            )
            
    # (mail) Mail cần gửi đi:
    mail = HStoreField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                help_text=_('Mail cần gửi đi'),
                            )
            
                
    # (mail_sender) Tên mail gửi:
    mail_sender = models.CharField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                max_length=500,
                                help_text=_('Tên mail gửi'),
                            )
            
                
    # (to_email) Tên mail nhận:
    to_email = models.CharField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                max_length=500,
                                help_text=_('Tên mail nhận'),
                            )
            
                
    # (status_code) Mã trạng thái:
    status_code = models.CharField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                max_length=500,
                                help_text=_('Mã trạng thái'),
                            )
            
                
    # (status_text) Trạng thái:
    status_text = models.CharField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                max_length=500,
                                help_text=_('Trạng thái'),
                            )
            
    # (hr_created_by) Người tạo:
    hr_created_by = HStoreField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                help_text=_('Người tạo'),
                            )
            
    # (hr_updated_by) Người cập nhật:
    hr_updated_by = HStoreField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                help_text=_('Người cập nhật'),
                            )
            
                
    # (content) Nội dung:
    content = models.TextField(
                                editable=True,
                                blank=True,
                                null=True,
                                
                                max_length=50000,
                                help_text=_('Nội dung'),
                            )
            
    #SystemMailSentMail_add_fields
    ################################################################

    


    class Template:
        # hiển thị chi tiết

        configs = [
            {
                'template_listviews': False,
                'allow_load_list_async': True, # Load danh sách lựa chọn bất đồng bộ
                'load_list_append': True, # cho phép load thêm bản ghi vào cuối danh sách nếu muốn
            },
        ]
        dActions = [
            
            'detail',
        
            'add',
            
            'edit',
            
            'delete',
            
        ]
        fieldsets = [
            
            ('name','code','friendly_code',),
                    
            ('created_by','created_at','updated_by',),
                    
            ('updated_at','organization','addressee',),
                    
            ('mail','mail_sender','to_email',),
                    
            ('status_code','status_text','hr_created_by',),
                    
            ('hr_updated_by','content',),

        ]

        read_only_field = [
            
            'code',
                    
            'created_by',
                    
            'created_at',
                    
            'updated_by',
                    
            'updated_at',
                    
        ]
        required_field = [
            
            'organization',
                    
            'addressee',
                    
            'mail',
                    
            'mail_sender',
                    
            'to_email',
                    
            'status_code',
                    
            'status_text',
                    
            'hr_created_by',
                    
            'hr_updated_by',
                    
            'content',
                    
        ]
        in_form_buttons = [
            

        ]
        special_type_fields = [
            
        ]
        list_actions = [
            

        ]
        # hiển thị trên bảng
        list_fields = [
            
                    
            'name',
                    
                    
            'friendly_code',
                    
                    
            'organization',
                    
                    
            'addressee',
                    
                    
            'mail',
                    
                    
            'mail_sender',
                    
                    
            'to_email',
                    
                    
            'status_code',
                    
                    
            'status_text',
                    
                    
            'hr_created_by',
                    
                    
            'hr_updated_by',
                    
                    
            'content',
                    
        ]
        # hiển thị trên bảng thêm mới
        inline_fields = [
            
                    
            'name',
                    
                    
            'friendly_code',
                    
                    
            'organization',
                    
                    
            'addressee',
                    
                    
            'mail',
                    
                    
            'mail_sender',
                    
                    
            'to_email',
                    
                    
            'status_code',
                    
                    
            'status_text',
                    
                    
            'hr_created_by',
                    
                    
            'hr_updated_by',
                    
                    
            'content',
                    
        ]
        # các trường thông tin search
        search_fields = [
            
            'name',
                    
            'friendly_code',
                    
            'organization',
                    
            'addressee',
                    
            'mail',
                    
            'mail_sender',
                    
            'to_email',
                    
            'status_code',
                    
            'status_text',
                    
            'hr_created_by',
                    
            'hr_updated_by',
                    
            'content',
                    
        ]
        # các trường thông tin filter
        filter_fields = [
            

        ]
        # endclasstemplate

    
    tracker = FieldTracker()

    

    # Cập nhật giá trị (organization) Tổ chức:
    def set_organization_values(self,fk):
        try:
            if fk != "" and fk != None:
                crr_pk = Organization.objects.filter(pk=fk).values("uuid","code","friendly_code","name").first()
                if crr_pk is not None:
                    self.organization = crr_pk
                    print("set or update organization success!!")  
                else:
                    print("set or update organization fail because Organization obj with fk == %s not found!!" % fk)  
            else:
                print("set or update organization fail because fk == %s None or Empty" % fk)  
        except Exception as xx:
            print("set or update organization fail because %s" % str(xx))
    # Lấy obj (organization) Tổ chức:
    def get_organization_obj(self):
        try:
            crr_dict = self.organization
            if crr_dict != None and crr_dict :
                return Organization.objects.filter(pk=crr_dict["uuid"]).values().first()
            else:
                return None
        except Exception as xx:
            print("set or update organization fail because %s" % str(xx))
            return None


         
            

    # Cập nhật giá trị (addressee) Người nhận:
    def set_addressee_values(self,fk):
        try:
            if fk != "" and fk != None:
                crr_pk = HRAccount.objects.filter(pk=fk).values("uuid","code","friendly_code","name").first()
                if crr_pk is not None:
                    self.addressee = crr_pk
                    print("set or update addressee success!!")  
                else:
                    print("set or update addressee fail because HRAccount obj with fk == %s not found!!" % fk)  
            else:
                print("set or update addressee fail because fk == %s None or Empty" % fk)  
        except Exception as xx:
            print("set or update addressee fail because %s" % str(xx))
    # Lấy obj (addressee) Người nhận:
    def get_addressee_obj(self):
        try:
            crr_dict = self.addressee
            if crr_dict != None and crr_dict :
                return HRAccount.objects.filter(pk=crr_dict["uuid"]).values().first()
            else:
                return None
        except Exception as xx:
            print("set or update addressee fail because %s" % str(xx))
            return None


         
            

    # Cập nhật giá trị (mail) Mail cần gửi đi:
    def set_mail_values(self,fk):
        try:
            if fk != "" and fk != None:
                crr_pk = SystemMailMail.objects.filter(pk=fk).values("uuid","code","friendly_code","name", "content").first()
                if crr_pk is not None:
                    self.mail = crr_pk
                    print("set or update mail success!!")  
                else:
                    print("set or update mail fail because SystemMailMail obj with fk == %s not found!!" % fk)  
            else:
                print("set or update mail fail because fk == %s None or Empty" % fk)  
        except Exception as xx:
            print("set or update mail fail because %s" % str(xx))
    # Lấy obj (mail) Mail cần gửi đi:
    def get_mail_obj(self):
        try:
            crr_dict = self.mail
            if crr_dict != None and crr_dict :
                return SystemMailMail.objects.filter(pk=crr_dict["uuid"]).values().first()
            else:
                return None
        except Exception as xx:
            print("set or update mail fail because %s" % str(xx))
            return None


         
            

    # Cập nhật giá trị (hr_created_by) Người tạo:
    def set_hr_created_by_values(self,fk):
        try:
            if fk != "" and fk != None:
                crr_pk = HRAccount.objects.filter(pk=fk).values("uuid","code","friendly_code","name").first()
                if crr_pk is not None:
                    self.hr_created_by = crr_pk
                    print("set or update hr_created_by success!!")  
                else:
                    print("set or update hr_created_by fail because HRAccount obj with fk == %s not found!!" % fk)  
            else:
                print("set or update hr_created_by fail because fk == %s None or Empty" % fk)  
        except Exception as xx:
            print("set or update hr_created_by fail because %s" % str(xx))
    # Lấy obj (hr_created_by) Người tạo:
    def get_hr_created_by_obj(self):
        try:
            crr_dict = self.hr_created_by
            if crr_dict != None and crr_dict :
                return HRAccount.objects.filter(pk=crr_dict["uuid"]).values().first()
            else:
                return None
        except Exception as xx:
            print("set or update hr_created_by fail because %s" % str(xx))
            return None


         
            

    # Cập nhật giá trị (hr_updated_by) Người cập nhật:
    def set_hr_updated_by_values(self,fk):
        try:
            if fk != "" and fk != None:
                crr_pk = HRAccount.objects.filter(pk=fk).values("uuid","code","friendly_code","name").first()
                if crr_pk is not None:
                    self.hr_updated_by = crr_pk
                    print("set or update hr_updated_by success!!")  
                else:
                    print("set or update hr_updated_by fail because HRAccount obj with fk == %s not found!!" % fk)  
            else:
                print("set or update hr_updated_by fail because fk == %s None or Empty" % fk)  
        except Exception as xx:
            print("set or update hr_updated_by fail because %s" % str(xx))
    # Lấy obj (hr_updated_by) Người cập nhật:
    def get_hr_updated_by_obj(self):
        try:
            crr_dict = self.hr_updated_by
            if crr_dict != None and crr_dict :
                return HRAccount.objects.filter(pk=crr_dict["uuid"]).values().first()
            else:
                return None
        except Exception as xx:
            print("set or update hr_updated_by fail because %s" % str(xx))
            return None


         
            

    

    #SystemMailSentMail_add_func
    
    

    def __str__(self):
        return str(self.name)

    def auto_send_email(self):
        try:
            # if self.mail is not None and self.email != "" and  self.email != "None" and self.validate_email():
            smtp_server = SystemMailServerConfig.objects.filter(is_default=True).first()

            print('smtp_server =', smtp_server)
            if smtp_server is None:
                self.status_text = "[MPS] - Error Not Found SMTP Server Config"
                self.status_code = "404"
                return None
            else:
                a = 0
                email_sender = SystemMailSenderConfig.objects.filter(
                    is_active=True,
                    email_server__uuid=smtp_server.uuid,
                    # number_sent__lt=smtp_server.limit_sending
                ).first()
                print('email_sender=', email_sender)
                if email_sender is None:
                    self.status_text = "[MPS] - Error Not Found Email Sender"
                    self.status_code = "404"
                    return None
                else:
                    try:
                        if smtp_server.name == "mailchimp":
                            # key = 'md-6OrwnduBJKTKv5bfjMfMgg'
                            key = email_sender.app_password
                            from_email = email_sender.email
                            receiver_email = self.email
                            subject_email = self.name
                            text_content = str(self.content)
                            mailchimp = MailchimpTransactional.Client(key)
                            message = {
                                "from_email": from_email,
                                # "from_name": DISPLAY_NAME_EMAIL,
                                "subject": subject_email,
                                "html": text_content,
                                "send_to": receiver_email,
                                "to": [
                                    {
                                        "email": receiver_email,
                                        "type": "to"
                                    },
                                ],
                                "reply_to": "support@mpsolutions.com.vn",
                                "support_phone": "0912.555.644",
                                "send_at": str(datetime.now().strftime("%d/%m/%y %H:%m:%S")),
                                # "return_path_domain": DOMAIN_NAME,
                            }
                            try:
                                # Test sent_mail
                                # template2 = str(open("SendMailMangementManagement/moi_danh_gia-V3.0.html", "r").read())
                                # result = MailChimpSender(key, template2, **message2)

                                if message["from_email"] != "hotro@hrm360.com.vn":
                                    return
                                if message["send_to"].find("@mpsolutions.com.vn") is True:
                                    return
                                if message["html"] == None or str(message["html"]).strip() == "":
                                    return
                                if message["subject"] == None or str(message["subject"]) == "":
                                    return
                                response = mailchimp.messages.send({"message": message})
                                print('API called successfully: {}'.format(response))
                                email_sender.number_sent = email_sender.number_sent + 1
                                email_sender.save()
                            except ApiClientError as error:
                                print('An exception occurred: {}'.format(error.text))
                        else:
                            port = smtp_server.port
                            smtp_server = smtp_server.host
                            sender_email = email_sender.email
                            password = email_sender.app_password
                            receiver_email = self.email
                            email_message = MIMEMultipart()
                            DISPLAY_NAME_EMAIL = 'test'
                            email_message['From'] = formataddr((DISPLAY_NAME_EMAIL, sender_email))
                            email_message['To'] = receiver_email
                            email_message['Subject'] = self.name
                            self.content = self.content.replace("{{uuid_mail}}", str(self.uuid))
                            email_message.attach(MIMEText(self.content, "html"))
                            email_string = email_message.as_string()
                            context = ssl.create_default_context()
                            with smtplib.SMTP_SSL(smtp_server, port, context=context) as server:
                                server.ehlo()
                                server.login(sender_email, password)
                                server.sendmail(sender_email, receiver_email, email_string)
                                self.status_text = "Successful"
                                self.status_code = "200"
                                email_sender.number_sent = email_sender.number_sent + 1
                                email_sender.save()
                                a += 1
                                print(a)
                    except Exception as ex:
                        self.status_text = str(ex)
                        self.status_code = "404"
        except Exception as ex:
            print("Lỗi khi auto_send_mail ", str(ex))

    def save(self, *args, **kwargs):
        
        self.updated_at = djnow()
        super().save(*args, **kwargs)

        if self._state.adding and self.created_by is not None:
            self.updated_by = self.created_by


