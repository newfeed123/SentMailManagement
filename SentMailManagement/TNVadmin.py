

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

from django.contrib import admin
from import_export import fields, resources
from import_export.widgets import ForeignKeyWidget
from import_export.admin import ImportExportModelAdmin
from django.utils.html import format_html
from .models import *


# Định nghĩa Resource của class SystemMailSenderConfig : Cấu hình email gửi đi
class SystemMailSenderConfigResource(resources.ModelResource):
    # uuid_field = fields.Field(
    #     column_name='uuid',
    #     attribute='uuid',
    #     widget=ForeignKeyWidget(
    #         SystemMailSenderConfig,
    #         'uuid',
    #         )
    #     )
    class Meta:
        # fields = (
        #     'uuid_field',
        # )
        model = SystemMailSenderConfig

# Định nghĩa Admin của class SystemMailSenderConfig : Cấu hình email gửi đi
class SystemMailSenderConfigAdmin(ImportExportModelAdmin):
    resource_class = SystemMailSenderConfigResource
    list_display = (
        #'name',
        
            'name',
                    
            'friendly_code',
                    
            'organization',
                    
            'email_server',
                    
            'email',
                    
            'password',
                    
            'app_password',
                    
            'hr_created_by',
                    
            'hr_updated_by',
                    
    )
    search_fields = (

        #'name',

        'uuid',

        
            'name',
                    
            'friendly_code',
                    
            'organization',
                    
            'email_server',
                    
            'email',
                    
            'password',
                    
            'app_password',
                    
            'hr_created_by',
                    
            'hr_updated_by',
                    
     )
    fieldsets = (
        
        (None, {
            'fields': (

            #'name',

            'uuid',

            
            'name',
                    
            'friendly_code',
                    
            'organization',
                    
            'email_server',
                    
            'email',
                    
            'password',
                    
            'app_password',
                    
            'hr_created_by',
                    
            'hr_updated_by',
                    
            )
        }),

        ('Advanced options', {

            'classes': ('collapse',),

            'fields': (
              
            'code',
                    
            'created_by',
                    
            'created_at',
                    
            'updated_by',
                    
            'updated_at',
                    
            ),
        }),
    )
    list_display_links = (
        'name',
    )
    date_hierarchy = 'updated_at'
    ordering = (
        'updated_at',
    )
    readonly_fields = (
        'uuid',
        'created_at',
        'updated_at',
        'created_by',
        'updated_by',
        
            'code',
                    
            'created_by',
                    
            'created_at',
                    
            'updated_by',
                    
            'updated_at',
                    
    )
    class Media:
        js = ('Website/admin/js/test.js',)
        css = {
             'all': ('Website/admin/css/test.css',)
        }
    def name_link(self, obj):
        return format_html(str('<a href="%s" target="_self">%s</a>' % (obj.name, obj.updated_at)))
    name_link.short_description = 'Name Link'
    name_link.allow_tags = True
    def save_model(self, request, instance, form, change):
        user = request.user
        instance = form.save(commit=False)
        instance.save()
        form.save_m2m()
        return instance
# Đăng ký Admin của class SystemMailSenderConfig
admin.site.register(SystemMailSenderConfig, SystemMailSenderConfigAdmin)
  

# Định nghĩa Resource của class SystemMailTarget : Cá nhân/nhóm nhận mail
class SystemMailTargetResource(resources.ModelResource):
    # uuid_field = fields.Field(
    #     column_name='uuid',
    #     attribute='uuid',
    #     widget=ForeignKeyWidget(
    #         SystemMailTarget,
    #         'uuid',
    #         )
    #     )
    class Meta:
        # fields = (
        #     'uuid_field',
        # )
        model = SystemMailTarget

# Định nghĩa Admin của class SystemMailTarget : Cá nhân/nhóm nhận mail
class SystemMailTargetAdmin(ImportExportModelAdmin):
    resource_class = SystemMailTargetResource
    list_display = (
        #'name',
        
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
                    
    )
    search_fields = (

        #'name',

        'uuid',

        
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
                    
     )
    fieldsets = (
        
        (None, {
            'fields': (

            #'name',

            'uuid',

            
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
                    
            )
        }),

        ('Advanced options', {

            'classes': ('collapse',),

            'fields': (
              
            'code',
                    
            'created_by',
                    
            'created_at',
                    
            'updated_by',
                    
            'updated_at',
                    
            ),
        }),
    )
    list_display_links = (
        'name',
    )
    date_hierarchy = 'updated_at'
    ordering = (
        'updated_at',
    )
    readonly_fields = (
        'uuid',
        'created_at',
        'updated_at',
        'created_by',
        'updated_by',
        
            'code',
                    
            'created_by',
                    
            'created_at',
                    
            'updated_by',
                    
            'updated_at',
                    
    )
    class Media:
        js = ('Website/admin/js/test.js',)
        css = {
             'all': ('Website/admin/css/test.css',)
        }
    def name_link(self, obj):
        return format_html(str('<a href="%s" target="_self">%s</a>' % (obj.name, obj.updated_at)))
    name_link.short_description = 'Name Link'
    name_link.allow_tags = True
    def save_model(self, request, instance, form, change):
        user = request.user
        instance = form.save(commit=False)
        instance.save()
        form.save_m2m()
        return instance
# Đăng ký Admin của class SystemMailTarget
admin.site.register(SystemMailTarget, SystemMailTargetAdmin)
  

# Định nghĩa Resource của class SystemMailMail : Mail cần gửi
class SystemMailMailResource(resources.ModelResource):
    # uuid_field = fields.Field(
    #     column_name='uuid',
    #     attribute='uuid',
    #     widget=ForeignKeyWidget(
    #         SystemMailMail,
    #         'uuid',
    #         )
    #     )
    class Meta:
        # fields = (
        #     'uuid_field',
        # )
        model = SystemMailMail

# Định nghĩa Admin của class SystemMailMail : Mail cần gửi
class SystemMailMailAdmin(ImportExportModelAdmin):
    resource_class = SystemMailMailResource
    list_display = (
        #'name',
        
            'name',
                    
            'friendly_code',
                    
            'organization',
                    
            'mail_sender',
                    
            'email_template',
                    
            'mail_target',

            "mail_to",
                    
            'addressee',
                    
            'content',
                    
            'status_code',
                    
            'status_text',
                    
            'hr_created_by',
                    
            'hr_updated_by',
                    
    )
    search_fields = (

        #'name',

        'uuid',

        
            'name',
                    
            'friendly_code',
                    
            'organization',
                    
            'mail_sender',
                    
            'email_template',
                    
            'mail_target',
            
            'mail_to',
                    
            'addressee',
                    
            'content',
                    
            'status_code',
                    
            'status_text',
                    
            'hr_created_by',
                    
            'hr_updated_by',
                    
     )
    fieldsets = (
        
        (None, {
            'fields': (

            #'name',

            'uuid',

            
            'name',
                    
            'friendly_code',
                    
            'organization',
                    
            'mail_sender',
                    
            'email_template',
                    
            'mail_target',

            'mail_to',
                    
            'addressee',
                    
            'content',
                    
            'status_code',
                    
            'status_text',
                    
            'hr_created_by',
                    
            'hr_updated_by',
                    
            )
        }),

        ('Advanced options', {

            'classes': ('collapse',),

            'fields': (
              
            'code',
                    
            'created_by',
                    
            'created_at',
                    
            'updated_by',
                    
            'updated_at',
                    
            ),
        }),
    )
    list_display_links = (
        'name',
    )
    date_hierarchy = 'updated_at'
    ordering = (
        'updated_at',
    )
    readonly_fields = (
        'uuid',
        'created_at',
        'updated_at',
        'created_by',
        'updated_by',
        
            'code',
                    
            'created_by',
                    
            'created_at',
                    
            'updated_by',
                    
            'updated_at',
                    
    )
    class Media:
        js = ('Website/admin/js/test.js',)
        css = {
             'all': ('Website/admin/css/test.css',)
        }
    def name_link(self, obj):
        return format_html(str('<a href="%s" target="_self">%s</a>' % (obj.name, obj.updated_at)))
    name_link.short_description = 'Name Link'
    name_link.allow_tags = True
    def save_model(self, request, instance, form, change):
        user = request.user
        instance = form.save(commit=False)
        instance.save()
        form.save_m2m()
        return instance
# Đăng ký Admin của class SystemMailMail
admin.site.register(SystemMailMail, SystemMailMailAdmin)
  

# Định nghĩa Resource của class SystemMailSentMail : Mail đã gửi
class SystemMailSentMailResource(resources.ModelResource):
    # uuid_field = fields.Field(
    #     column_name='uuid',
    #     attribute='uuid',
    #     widget=ForeignKeyWidget(
    #         SystemMailSentMail,
    #         'uuid',
    #         )
    #     )
    class Meta:
        # fields = (
        #     'uuid_field',
        # )
        model = SystemMailSentMail

# Định nghĩa Admin của class SystemMailSentMail : Mail đã gửi
class SystemMailSentMailAdmin(ImportExportModelAdmin):
    resource_class = SystemMailSentMailResource
    list_display = (
        #'name',
        
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
                    
    )
    search_fields = (

        #'name',

        'uuid',

        
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
                    
     )
    fieldsets = (
        
        (None, {
            'fields': (

            #'name',

            'uuid',

            
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
                    
            )
        }),

        ('Advanced options', {

            'classes': ('collapse',),

            'fields': (
              
            'code',
                    
            'created_by',
                    
            'created_at',
                    
            'updated_by',
                    
            'updated_at',
                    
            ),
        }),
    )
    list_display_links = (
        'name',
    )
    date_hierarchy = 'updated_at'
    ordering = (
        'updated_at',
    )
    readonly_fields = (
        'uuid',
        'created_at',
        'updated_at',
        'created_by',
        'updated_by',
        
            'code',
                    
            'created_by',
                    
            'created_at',
                    
            'updated_by',
                    
            'updated_at',
                    
    )
    class Media:
        js = ('Website/admin/js/test.js',)
        css = {
             'all': ('Website/admin/css/test.css',)
        }
    def name_link(self, obj):
        return format_html(str('<a href="%s" target="_self">%s</a>' % (obj.name, obj.updated_at)))
    name_link.short_description = 'Name Link'
    name_link.allow_tags = True
    def save_model(self, request, instance, form, change):
        user = request.user
        instance = form.save(commit=False)
        instance.save()
        form.save_m2m()
        return instance
# Đăng ký Admin của class SystemMailSentMail
admin.site.register(SystemMailSentMail, SystemMailSentMailAdmin)
  

# Định nghĩa Resource của class SystemMailServerConfig : Cấu hình email server
class SystemMailServerConfigResource(resources.ModelResource):
    # uuid_field = fields.Field(
    #     column_name='uuid',
    #     attribute='uuid',
    #     widget=ForeignKeyWidget(
    #         SystemMailServerConfig,
    #         'uuid',
    #         )
    #     )
    class Meta:
        # fields = (
        #     'uuid_field',
        # )
        model = SystemMailServerConfig

# Định nghĩa Admin của class SystemMailServerConfig : Cấu hình email server
class SystemMailServerConfigAdmin(ImportExportModelAdmin):
    resource_class = SystemMailServerConfigResource
    list_display = (
        #'name',
        
            'name',
                    
            'friendly_code',
                    
            'host',
                    
            'port',
                    
            'port_smtp',
                    
            'is_ssl',
                    
            'limit_sending',
                    
            'is_default',
                    
            'hr_created_by',
                    
            # 'active',
                    
            'organization',
                    
            'hr_updated_by',
                    
    )
    search_fields = (

        #'name',

        'uuid',

        
            'name',
                    
            'friendly_code',
                    
            'host',
                    
            'port',
                    
            'port_smtp',
                    
            'is_ssl',
                    
            'limit_sending',
                    
            'is_default',
                    
            'hr_created_by',
                    
            # 'active',
                    
            'organization',
                    
            'hr_updated_by',
                    
     )
    fieldsets = (
        
        (None, {
            'fields': (

            #'name',

            'uuid',

            
            'name',
                    
            'friendly_code',
                    
            'host',
                    
            'port',
                    
            'port_smtp',
                    
            'is_ssl',
                    
            'limit_sending',
                    
            'is_default',
                    
            'hr_created_by',
                    
            # 'active',
                    
            'organization',
                    
            'hr_updated_by',
                    
            )
        }),

        ('Advanced options', {

            'classes': ('collapse',),

            'fields': (
              
            'code',
                    
            'created_by',
                    
            'created_at',
                    
            'updated_by',
                    
            'updated_at',
                    
            ),
        }),
    )
    list_display_links = (
        'name',
    )
    date_hierarchy = 'updated_at'
    ordering = (
        'updated_at',
    )
    readonly_fields = (
        'uuid',
        'created_at',
        'updated_at',
        'created_by',
        'updated_by',
        
            'code',
                    
            'created_by',
                    
            'created_at',
                    
            'updated_by',
                    
            'updated_at',
                    
    )
    class Media:
        js = ('Website/admin/js/test.js',)
        css = {
             'all': ('Website/admin/css/test.css',)
        }
    def name_link(self, obj):
        return format_html(str('<a href="%s" target="_self">%s</a>' % (obj.name, obj.updated_at)))
    name_link.short_description = 'Name Link'
    name_link.allow_tags = True
    def save_model(self, request, instance, form, change):
        user = request.user
        instance = form.save(commit=False)
        instance.save()
        form.save_m2m()
        return instance
# Đăng ký Admin của class SystemMailServerConfig
admin.site.register(SystemMailServerConfig, SystemMailServerConfigAdmin)
  

# Định nghĩa Resource của class SystemMailTemplate : Mẫu email
class SystemMailTemplateResource(resources.ModelResource):
    # uuid_field = fields.Field(
    #     column_name='uuid',
    #     attribute='uuid',
    #     widget=ForeignKeyWidget(
    #         SystemMailTemplate,
    #         'uuid',
    #         )
    #     )
    class Meta:
        # fields = (
        #     'uuid_field',
        # )
        model = SystemMailTemplate

# Định nghĩa Admin của class SystemMailTemplate : Mẫu email
class SystemMailTemplateAdmin(ImportExportModelAdmin):
    resource_class = SystemMailTemplateResource
    list_display = (
        #'name',
        
            'name',
                    
            'friendly_code',
                    
            'email_type',
                    
            # 'content',
                    
            'is_default',
                    
            'organization',
                    
            'hr_created_by',
                    
            'hr_updated_by',
                    
    )
    search_fields = (

        #'name',

        'uuid',

        
            'name',
                    
            'friendly_code',
                    
            'email_type',
                    
            'content',
                    
            'is_default',
                    
            'organization',
                    
            'hr_created_by',
                    
            'hr_updated_by',
                    
     )
    fieldsets = (
        
        (None, {
            'fields': (

            #'name',

            'uuid',

            
            'name',
                    
            'friendly_code',
                    
            'email_type',
                    
            'content',
                    
            'is_default',
                    
            'organization',
                    
            'hr_created_by',
                    
            'hr_updated_by',
                    
            )
        }),

        ('Advanced options', {

            'classes': ('collapse',),

            'fields': (
              
            'code',
                    
            'created_by',
                    
            'updated_by',
                    
            'updated_at',
                    
            'created_at',
                    
            ),
        }),
    )
    list_display_links = (
        'name',
    )
    date_hierarchy = 'updated_at'
    ordering = (
        'updated_at',
    )
    readonly_fields = (
        'uuid',
        'created_at',
        'updated_at',
        'created_by',
        'updated_by',
        
            'code',
                    
            'created_by',
                    
            'updated_by',
                    
            'updated_at',
                    
            'created_at',
                    
    )
    class Media:
        js = ('Website/admin/js/test.js',)
        css = {
             'all': ('Website/admin/css/test.css',)
        }
    def name_link(self, obj):
        return format_html(str('<a href="%s" target="_self">%s</a>' % (obj.name, obj.updated_at)))
    name_link.short_description = 'Name Link'
    name_link.allow_tags = True
    def save_model(self, request, instance, form, change):
        user = request.user
        instance = form.save(commit=False)
        instance.save()
        form.save_m2m()
        return instance
# Đăng ký Admin của class SystemMailTemplate
admin.site.register(SystemMailTemplate, SystemMailTemplateAdmin)
  

# Định nghĩa Resource của class SystemMailType : Loại email
class SystemMailTypeResource(resources.ModelResource):
    # uuid_field = fields.Field(
    #     column_name='uuid',
    #     attribute='uuid',
    #     widget=ForeignKeyWidget(
    #         SystemMailType,
    #         'uuid',
    #         )
    #     )
    class Meta:
        # fields = (
        #     'uuid_field',
        # )
        model = SystemMailType

# Định nghĩa Admin của class SystemMailType : Loại email
class SystemMailTypeAdmin(ImportExportModelAdmin):
    resource_class = SystemMailTypeResource
    list_display = (
        #'name',
        
            'organization',
                    
            'hr_created_by',
                    
            'hr_updated_by',
                    
            'name',
                    
            'friendly_code',
                    
            'is_default',
                    
    )
    search_fields = (

        #'name',

        'uuid',

        
            'organization',
                    
            'hr_created_by',
                    
            'hr_updated_by',
                    
            'name',
                    
            'friendly_code',
                    
            'is_default',
                    
     )
    fieldsets = (
        
        (None, {
            'fields': (

            #'name',

            'uuid',

            
            'organization',
                    
            'hr_created_by',
                    
            'hr_updated_by',
                    
            'name',
                    
            'friendly_code',
                    
            'is_default',
                    
            )
        }),

        ('Advanced options', {

            'classes': ('collapse',),

            'fields': (
              
            'code',
                    
            'created_by',
                    
            'created_at',
                    
            'updated_by',
                    
            'updated_at',
                    
            ),
        }),
    )
    list_display_links = (
        'name',
    )
    date_hierarchy = 'updated_at'
    ordering = (
        'updated_at',
    )
    readonly_fields = (
        'uuid',
        'created_at',
        'updated_at',
        'created_by',
        'updated_by',
        
            'code',
                    
            'created_by',
                    
            'created_at',
                    
            'updated_by',
                    
            'updated_at',
                    
    )
    class Media:
        js = ('Website/admin/js/test.js',)
        css = {
             'all': ('Website/admin/css/test.css',)
        }
    def name_link(self, obj):
        return format_html(str('<a href="%s" target="_self">%s</a>' % (obj.name, obj.updated_at)))
    name_link.short_description = 'Name Link'
    name_link.allow_tags = True
    def save_model(self, request, instance, form, change):
        user = request.user
        instance = form.save(commit=False)
        instance.save()
        form.save_m2m()
        return instance
# Đăng ký Admin của class SystemMailType
admin.site.register(SystemMailType, SystemMailTypeAdmin)
  

# Định nghĩa Resource của class SystemMailTemplateImportData : Tải lên Mẫu email
class SystemMailTemplateImportDataResource(resources.ModelResource):
    # uuid_field = fields.Field(
    #     column_name='uuid',
    #     attribute='uuid',
    #     widget=ForeignKeyWidget(
    #         SystemMailTemplateImportData,
    #         'uuid',
    #         )
    #     )
    class Meta:
        # fields = (
        #     'uuid_field',
        # )
        model = SystemMailTemplateImportData

# Định nghĩa Admin của class SystemMailTemplateImportData : Tải lên Mẫu email
class SystemMailTemplateImportDataAdmin(ImportExportModelAdmin):
    resource_class = SystemMailTemplateImportDataResource
    list_display = (
        #'name',
        
            'name',
                    
            'friendly_code',
                    
            'file',
                    
            'total_record_number',
                    
            'json_check_validation',
                    
            'json_fail_data',
                    
            'import_status',
                    
    )
    search_fields = (

        #'name',

        'uuid',

        
            'name',
                    
            'friendly_code',
                    
            'file',
                    
            'total_record_number',
                    
            'import_status',
                    
     )
    fieldsets = (
        
        (None, {
            'fields': (

            #'name',

            'uuid',

            
            'name',
                    
            'friendly_code',
                    
            'file',
                    
            'total_record_number',
                    
            'json_check_validation',
                    
            'json_fail_data',
                    
            'import_status',
                    
            )
        }),

        ('Advanced options', {

            'classes': ('collapse',),

            'fields': (
              
            'code',
                    
            'created_by',
                    
            'created_at',
                    
            'updated_by',
                    
            'updated_at',
                    
            'is_import_failed',
                    
            'is_import_success',
                    
            'json_import_data',
                    
            ),
        }),
    )
    list_display_links = (
        'name',
    )
    date_hierarchy = 'updated_at'
    ordering = (
        'updated_at',
    )
    readonly_fields = (
        'uuid',
        'created_at',
        'updated_at',
        'created_by',
        'updated_by',
        
            'code',
                    
            'created_by',
                    
            'created_at',
                    
            'updated_by',
                    
            'updated_at',
                    
    )
    class Media:
        js = ('Website/admin/js/test.js',)
        css = {
             'all': ('Website/admin/css/test.css',)
        }
    def name_link(self, obj):
        return format_html(str('<a href="%s" target="_self">%s</a>' % (obj.name, obj.updated_at)))
    name_link.short_description = 'Name Link'
    name_link.allow_tags = True
    def save_model(self, request, instance, form, change):
        user = request.user
        instance = form.save(commit=False)
        instance.save()
        form.save_m2m()
        return instance
# Đăng ký Admin của class SystemMailTemplateImportData
admin.site.register(SystemMailTemplateImportData, SystemMailTemplateImportDataAdmin)
  

# Định nghĩa Resource của class SystemMailTemplateImportStatus : Trạng thái tải lên Mẫu email
class SystemMailTemplateImportStatusResource(resources.ModelResource):
    # uuid_field = fields.Field(
    #     column_name='uuid',
    #     attribute='uuid',
    #     widget=ForeignKeyWidget(
    #         SystemMailTemplateImportStatus,
    #         'uuid',
    #         )
    #     )
    class Meta:
        # fields = (
        #     'uuid_field',
        # )
        model = SystemMailTemplateImportStatus

# Định nghĩa Admin của class SystemMailTemplateImportStatus : Trạng thái tải lên Mẫu email
class SystemMailTemplateImportStatusAdmin(ImportExportModelAdmin):
    resource_class = SystemMailTemplateImportStatusResource
    list_display = (
        #'name',
        
            'name',
                    
            'friendly_code',
                    
            'icon_class',
                    
            'color_class',
                    
    )
    search_fields = (

        #'name',

        'uuid',

        
            'name',
                    
            'friendly_code',
                    
            'icon_class',
                    
            'color_class',
                    
     )
    fieldsets = (
        
        (None, {
            'fields': (

            #'name',

            'uuid',

            
            'name',
                    
            'friendly_code',
                    
            'icon_class',
                    
            'color_class',
                    
            )
        }),

        ('Advanced options', {

            'classes': ('collapse',),

            'fields': (
              
            'code',
                    
            'created_by',
                    
            'created_at',
                    
            'updated_by',
                    
            'updated_at',
                    
            ),
        }),
    )
    list_display_links = (
        'name',
    )
    date_hierarchy = 'updated_at'
    ordering = (
        'updated_at',
    )
    readonly_fields = (
        'uuid',
        'created_at',
        'updated_at',
        'created_by',
        'updated_by',
        
            'code',
                    
            'created_by',
                    
            'created_at',
                    
            'updated_by',
                    
            'updated_at',
                    
    )
    class Media:
        js = ('Website/admin/js/test.js',)
        css = {
             'all': ('Website/admin/css/test.css',)
        }
    def name_link(self, obj):
        return format_html(str('<a href="%s" target="_self">%s</a>' % (obj.name, obj.updated_at)))
    name_link.short_description = 'Name Link'
    name_link.allow_tags = True
    def save_model(self, request, instance, form, change):
        user = request.user
        instance = form.save(commit=False)
        instance.save()
        form.save_m2m()
        return instance
# Đăng ký Admin của class SystemMailTemplateImportStatus
admin.site.register(SystemMailTemplateImportStatus, SystemMailTemplateImportStatusAdmin)
  
