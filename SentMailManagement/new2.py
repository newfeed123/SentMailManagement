

#!/usr/bin/env python
# -*- coding: utf-8 -*-
# region Description
__author__ = 'TruongNV - NGUYEN VAN TRUONG'
__copyright__ = "Copyright ©2023 TruongNV <truongg.nv@gmail.com>"
__maintainer__ = "TruongNV"
__email__ = "truongg.nv@gmail.com"
__status__ = "Production"
__date__ = 8/8/2023
# endregion
# __init__.py
import sys
import os
import time
import datetime
import uuid
from operator import itemgetter
from collections import OrderedDict
from rest_framework import serializers
from .models import *

# from SystemOrganizationManagement.TNVserializers import OrganizationListSerializer
                    
# from HRAccountManagement.TNVserializers import HRAccountListSerializer
                    
           
class SystemMailSenderConfigListSerializer(serializers.ModelSerializer):
    class Meta:
        model = SystemMailSenderConfig
        fields = (
                    
                'uuid',
                'name',
                'code',
        
                    )
        # #fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data

    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        return SystemMailSenderConfig.objects.create(**validated_data)

    def update(self, instance, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        super(SystemMailSenderConfigListSerializer, self).update(instance, validated_data)
        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            



           
class SystemMailTargetListSerializer(serializers.ModelSerializer):
    class Meta:
        model = SystemMailTarget
        fields = (
                    
                'uuid',
                'name',
                'code',
                'email_template',
                    )
        # #fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data

    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        return SystemMailTarget.objects.create(**validated_data)

    def update(self, instance, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        super(SystemMailTargetListSerializer, self).update(instance, validated_data)
        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            



           
class SystemMailMailListSerializer(serializers.ModelSerializer):
    class Meta:
        model = SystemMailMail
        fields = (
                    
                'uuid',
                'name',
                'code',
        
                    )
        # #fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data

    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        return SystemMailMail.objects.create(**validated_data)

    def update(self, instance, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        super(SystemMailMailListSerializer, self).update(instance, validated_data)
        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            



           
class SystemMailSentMailListSerializer(serializers.ModelSerializer):
    class Meta:
        model = SystemMailSentMail
        fields = (
                    
                'uuid',
                'name',
                'code',
        
                    )
        # #fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data

    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        return SystemMailSentMail.objects.create(**validated_data)

    def update(self, instance, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        super(SystemMailSentMailListSerializer, self).update(instance, validated_data)
        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            



           
class SystemMailServerConfigListSerializer(serializers.ModelSerializer):
    class Meta:
        model = SystemMailServerConfig
        fields = (
                    
                'uuid',
                'name',
                'code',
        
                    )
        # #fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data

    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        return SystemMailServerConfig.objects.create(**validated_data)

    def update(self, instance, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        super(SystemMailServerConfigListSerializer, self).update(instance, validated_data)
        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            



           
class SystemMailTemplateListSerializer(serializers.ModelSerializer):
    class Meta:
        model = SystemMailTemplate
        fields = (
                    
                'uuid',
                'name',
                'code',
                'content'
                    )
        # #fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data

    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        return SystemMailTemplate.objects.create(**validated_data)

    def update(self, instance, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        super(SystemMailTemplateListSerializer, self).update(instance, validated_data)
        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            



           
class SystemMailTypeListSerializer(serializers.ModelSerializer):
    class Meta:
        model = SystemMailType
        fields = (
                    
                'uuid',
                'name',
                'code',
        
                    )
        # #fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data

    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        return SystemMailType.objects.create(**validated_data)

    def update(self, instance, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        super(SystemMailTypeListSerializer, self).update(instance, validated_data)
        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            



           
class SystemMailTemplateImportDataListSerializer(serializers.ModelSerializer):
    class Meta:
        model = SystemMailTemplateImportData
        fields = (
                    
                'uuid',
                'name',
                'code',
        
                    )
        # #fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data

    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        return SystemMailTemplateImportData.objects.create(**validated_data)

    def update(self, instance, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        super(SystemMailTemplateImportDataListSerializer, self).update(instance, validated_data)
        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            



           
class SystemMailTemplateImportStatusListSerializer(serializers.ModelSerializer):
    class Meta:
        model = SystemMailTemplateImportStatus
        fields = (
                    
                'uuid',
                'name',
                'code',
        
                    )
        # #fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data

    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        return SystemMailTemplateImportStatus.objects.create(**validated_data)

    def update(self, instance, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        super(SystemMailTemplateImportStatusListSerializer, self).update(instance, validated_data)
        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            





class SystemMailSenderConfigCreateSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SystemMailSenderConfig
        fields = (
                
                'uuid',
                    
                'name',
                    
                'code',
                    
                'created_by',
                    
                'created_at',
                    
                'updated_by',
                    
                'updated_at',
                    
                  'name',
                        
                  'code',
                        
                  'friendly_code',
                        
                  'created_by',
                        
                  'created_at',
                        
                  'updated_by',
                        
                  'updated_at',
                        
                  'organization',
                        
                    #'get_organization_obj',
                            
                  'email_server',
                        
                    #'get_email_server_obj',
                            
                  'email',
                        
                  'password',
                        
                  'app_password',

                  'number_sent',

                  'active',

                        
                  'hr_created_by',
                        
                    #'get_hr_created_by_obj',
                            
                  'hr_updated_by',
                        
                    #'get_hr_updated_by_obj',
                            
                )
        #fields = '__all__'
        #depth = 1
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
        # extra_fields = ['author_all']
        # def get_field_names(self, declared_fields, info):
    #     expanded_fields = super(NewspaperSerializer, self).get_field_names(declared_fields, info)

    #     if getattr(self.Meta, 'extra_fields', None):
    #         return expanded_fields + self.Meta.extra_fields
    #     else:
    #         return expanded_fields
    def get_serializer_context(self):
        return self.context['request'].data
    def get_request_user(self):
        return self.context['request'].user
    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (email_server) ForeignKey POST #############
            # Lấy pk code của email_server từ request_data
            if "email_server" in validated_data:
                email_server = validated_data.pop('email_server')
            if "email_server" in request_data:
                email_server = request_data.pop('email_server')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
            instance = SystemMailSenderConfig.objects.create(**validated_data)
            ################################################
            
            
            # Lấy obj của organization lưu vào SystemMailSenderConfig
            if "organization" in validated_data:
                for obj in validated_data["organization"]:
                    if obj is not None and isinstance(obj,Organization):
                        validated_data["organization"] = obj
            else:
                if "organization" in locals():
                    for obj_id in organization:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_organization_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["organization"] = obj
                            # instance.save()
                            break
                
                if 'org_id' in self.context['request'].parser_context['kwargs']:
                    try:
                        workspace_org_id_val = self.context['request'].parser_context['kwargs']['org_id']
                        # TH day la uuid
                        if isinstance(uuid.UUID(workspace_org_id_val),uuid.UUID):
                            instance.set_organization_values(workspace_org_id_val)
                            instance.save()
                        else:
                            # neu TH la uuid k xay ra thi se vao day
                            # nhung no se vao ngoai le
                            org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                            if org_id_obj_uuid is not None:
                                instance.set_organization_values(org_id_obj_uuid)
                                instance.save()
                    except Exception as xx:
                        print(xx)
                        # ngoai le nay xay ra khi workspace_org_id_val khong phai uuid
                        # thu tim workspace_org_id_val qua truong friendly_code
                        org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                        if org_id_obj_uuid is not None:
                            instance.set_organization_values(org_id_obj_uuid)
                            instance.save()
                                
                                
            # Lấy obj của email_server lưu vào SystemMailSenderConfig
            if "email_server" in validated_data:
                for obj in validated_data["email_server"]:
                    if obj is not None and isinstance(obj,SystemMailServerConfig):
                        validated_data["email_server"] = obj
            else:
                if "email_server" in locals():
                    for obj_id in email_server:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_email_server_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["email_server"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_created_by lưu vào SystemMailSenderConfig
            if "hr_created_by" in validated_data:
                for obj in validated_data["hr_created_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_created_by"] = obj
            else:
                if "hr_created_by" in locals():
                    for obj_id in hr_created_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_created_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_created_by"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_updated_by lưu vào SystemMailSenderConfig
            if "hr_updated_by" in validated_data:
                for obj in validated_data["hr_updated_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_updated_by"] = obj
            else:
                if "hr_updated_by" in locals():
                    for obj_id in hr_updated_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_updated_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_updated_by"] = obj
                            # instance.save()
                            break
                
                                

            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailSenderConfig.objects.none()
 
    def update(self, instance, validated_data):
        try:
            for attr_name in validated_data:
                print('%s = %s' % (attr_name, validated_data[attr_name]))
            request_data = dict(self.get_serializer_context())
            #  validated_data["updated_by"]=self.get_request_user()
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        try:
            
            

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (email_server) ForeignKey POST #############
            # Lấy pk code của email_server từ request_data
            if "email_server" in validated_data:
                email_server = validated_data.pop('email_server')
            if "email_server" in request_data:
                email_server = request_data.pop('email_server')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
            super(SystemMailSenderConfigCreateSerializer, self).update(instance, validated_data)
            
            
            # Lấy obj của organization lưu vào SystemMailSenderConfig
            if "organization" in validated_data:
                for obj in validated_data["organization"]:
                    if obj is not None and isinstance(obj,Organization):
                        validated_data["organization"] = obj
            else:
                if "organization" in locals():
                    for obj_id in organization:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_organization_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["organization"] = obj
                            # instance.save()
                            break
                
                if 'org_id' in self.context['request'].parser_context['kwargs']:
                    try:
                        workspace_org_id_val = self.context['request'].parser_context['kwargs']['org_id']
                        # TH day la uuid
                        if isinstance(uuid.UUID(workspace_org_id_val),uuid.UUID):
                            instance.set_organization_values(workspace_org_id_val)
                            instance.save()
                        else:
                            # neu TH la uuid k xay ra thi se vao day
                            # nhung no se vao ngoai le
                            org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                            if org_id_obj_uuid is not None:
                                instance.set_organization_values(org_id_obj_uuid)
                                instance.save()
                    except Exception as xx:
                        print(xx)
                        # ngoai le nay xay ra khi workspace_org_id_val khong phai uuid
                        # thu tim workspace_org_id_val qua truong friendly_code
                        org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                        if org_id_obj_uuid is not None:
                            instance.set_organization_values(org_id_obj_uuid)
                            instance.save()
                                
                                
            # Lấy obj của email_server lưu vào SystemMailSenderConfig
            if "email_server" in validated_data:
                for obj in validated_data["email_server"]:
                    if obj is not None and isinstance(obj,SystemMailServerConfig):
                        validated_data["email_server"] = obj
            else:
                if "email_server" in locals():
                    for obj_id in email_server:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_email_server_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["email_server"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_created_by lưu vào SystemMailSenderConfig
            if "hr_created_by" in validated_data:
                for obj in validated_data["hr_created_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_created_by"] = obj
            else:
                if "hr_created_by" in locals():
                    for obj_id in hr_created_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_created_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_created_by"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_updated_by lưu vào SystemMailSenderConfig
            if "hr_updated_by" in validated_data:
                for obj in validated_data["hr_updated_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_updated_by"] = obj
            else:
                if "hr_updated_by" in locals():
                    for obj_id in hr_updated_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_updated_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_updated_by"] = obj
                            # instance.save()
                            break
                
                                

            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailSenderConfig.objects.none()
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            


            
class SystemMailSenderConfigUpdateSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SystemMailSenderConfig
        fields = (
                
                'uuid',
                    
                'name',
                    
                'code',
                    
                'created_by',
                    
                'created_at',
                    
                'updated_by',
                    
                'updated_at',
                    
                  'name',
                        
                  'code',
                        
                  'friendly_code',
                        
                  'created_by',
                        
                  'created_at',
                        
                  'updated_by',
                        
                  'updated_at',
                        
                  'organization',
                        
                    #'get_organization_obj',
                            
                  'email_server',
                        
                    #'get_email_server_obj',
                            
                  'email',
                        
                  'password',
                        
                  'app_password',

                    'active',
                    
                    'hr_created_by',
                        
                    #'get_hr_created_by_obj',
                            
                  'hr_updated_by',
                        
                    #'get_hr_updated_by_obj',
                            

                )
        # #fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data

    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (email_server) ForeignKey POST #############
            # Lấy pk code của email_server từ request_data
            if "email_server" in validated_data:
                email_server = validated_data.pop('email_server')
            if "email_server" in request_data:
                email_server = request_data.pop('email_server')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
            instance = SystemMailSenderConfig.objects.create(**validated_data)
            
            
            # Lấy obj của organization lưu vào SystemMailSenderConfig
            if "organization" in validated_data:
                for obj in validated_data["organization"]:
                    if obj is not None and isinstance(obj,Organization):
                        validated_data["organization"] = obj
            else:
                if "organization" in locals():
                    for obj_id in organization:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_organization_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["organization"] = obj
                            # instance.save()
                            break
                
                if 'org_id' in self.context['request'].parser_context['kwargs']:
                    try:
                        workspace_org_id_val = self.context['request'].parser_context['kwargs']['org_id']
                        # TH day la uuid
                        if isinstance(uuid.UUID(workspace_org_id_val),uuid.UUID):
                            instance.set_organization_values(workspace_org_id_val)
                            instance.save()
                        else:
                            # neu TH la uuid k xay ra thi se vao day
                            # nhung no se vao ngoai le
                            org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                            if org_id_obj_uuid is not None:
                                instance.set_organization_values(org_id_obj_uuid)
                                instance.save()
                    except Exception as xx:
                        print(xx)
                        # ngoai le nay xay ra khi workspace_org_id_val khong phai uuid
                        # thu tim workspace_org_id_val qua truong friendly_code
                        org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                        if org_id_obj_uuid is not None:
                            instance.set_organization_values(org_id_obj_uuid)
                            instance.save()
                                
                                
            # Lấy obj của email_server lưu vào SystemMailSenderConfig
            if "email_server" in validated_data:
                for obj in validated_data["email_server"]:
                    if obj is not None and isinstance(obj,SystemMailServerConfig):
                        validated_data["email_server"] = obj
            else:
                if "email_server" in locals():
                    for obj_id in email_server:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_email_server_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["email_server"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_created_by lưu vào SystemMailSenderConfig
            if "hr_created_by" in validated_data:
                for obj in validated_data["hr_created_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_created_by"] = obj
            else:
                if "hr_created_by" in locals():
                    for obj_id in hr_created_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_created_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_created_by"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_updated_by lưu vào SystemMailSenderConfig
            if "hr_updated_by" in validated_data:
                for obj in validated_data["hr_updated_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_updated_by"] = obj
            else:
                if "hr_updated_by" in locals():
                    for obj_id in hr_updated_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_updated_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_updated_by"] = obj
                            # instance.save()
                            break
                
                                

            return instance

        except Exception as xx:
            print(str(xx))

    def update(self, instance, validated_data):
        try:
            
            request_data = dict(self.get_serializer_context())
            

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (email_server) ForeignKey POST #############
            # Lấy pk code của email_server từ request_data
            if "email_server" in validated_data:
                email_server = validated_data.pop('email_server')
            if "email_server" in request_data:
                email_server = request_data.pop('email_server')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
            super(SystemMailSenderConfigUpdateSerializer, self).update(instance, validated_data)
            
            
            # Lấy obj của organization lưu vào SystemMailSenderConfig
            if "organization" in validated_data:
                for obj in validated_data["organization"]:
                    if obj is not None and isinstance(obj,Organization):
                        validated_data["organization"] = obj
            else:
                if "organization" in locals():
                    for obj_id in organization:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_organization_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["organization"] = obj
                            # instance.save()
                            break
                
                if 'org_id' in self.context['request'].parser_context['kwargs']:
                    try:
                        workspace_org_id_val = self.context['request'].parser_context['kwargs']['org_id']
                        # TH day la uuid
                        if isinstance(uuid.UUID(workspace_org_id_val),uuid.UUID):
                            instance.set_organization_values(workspace_org_id_val)
                            instance.save()
                        else:
                            # neu TH la uuid k xay ra thi se vao day
                            # nhung no se vao ngoai le
                            org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                            if org_id_obj_uuid is not None:
                                instance.set_organization_values(org_id_obj_uuid)
                                instance.save()
                    except Exception as xx:
                        print(xx)
                        # ngoai le nay xay ra khi workspace_org_id_val khong phai uuid
                        # thu tim workspace_org_id_val qua truong friendly_code
                        org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                        if org_id_obj_uuid is not None:
                            instance.set_organization_values(org_id_obj_uuid)
                            instance.save()
                                
                                
            # Lấy obj của email_server lưu vào SystemMailSenderConfig
            if "email_server" in validated_data:
                for obj in validated_data["email_server"]:
                    if obj is not None and isinstance(obj,SystemMailServerConfig):
                        validated_data["email_server"] = obj
            else:
                if "email_server" in locals():
                    for obj_id in email_server:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_email_server_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["email_server"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_created_by lưu vào SystemMailSenderConfig
            if "hr_created_by" in validated_data:
                for obj in validated_data["hr_created_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_created_by"] = obj
            else:
                if "hr_created_by" in locals():
                    for obj_id in hr_created_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_created_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_created_by"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_updated_by lưu vào SystemMailSenderConfig
            if "hr_updated_by" in validated_data:
                for obj in validated_data["hr_updated_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_updated_by"] = obj
            else:
                if "hr_updated_by" in locals():
                    for obj_id in hr_updated_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_updated_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_updated_by"] = obj
                            # instance.save()
                            break
                
                                

            return instance
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        # super(SystemMailSenderConfigUpdateSerializer, self).update(instance, validated_data)

        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            

            
class SystemMailSenderConfigDetailsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SystemMailSenderConfig
        # fields = (
        #             
                #'uuid',
                    
                #'name',
                    
                #'code',
                    
                #'created_by',
                    
                #'created_at',
                    
                #'updated_by',
                    
                #'updated_at',
                    
                  #'name',
                        
                  #'code',
                        
                  #'friendly_code',
                        
                  #'created_by',
                        
                  #'created_at',
                        
                  #'updated_by',
                        
                  #'updated_at',
                        
                  #'organization',
                        
                    #'get_organization_obj',
                            
                  #'email_server',
                        
                    #'get_email_server_obj',
                            
                  #'email',
                        
                  #'password',
                        
                  #'app_password',
                        
                  #'hr_created_by',
                        
                    #'get_hr_created_by_obj',
                            
                  #'hr_updated_by',
                        
                    #'get_hr_updated_by_obj',
                            

        #         )
        fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data

    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        return SystemMailSenderConfig.objects.create(**validated_data)

    def update(self, instance, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (email_server) ForeignKey POST #############
            # Lấy pk code của email_server từ request_data
            if "email_server" in validated_data:
                email_server = validated_data.pop('email_server')
            if "email_server" in request_data:
                email_server = request_data.pop('email_server')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
            super(SystemMailSenderConfigDetailsSerializer, self).update(instance, validated_data)
            

            return instance
        except Exception as xx:
            print(str(xx))
        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            



class SystemMailSenderConfigDeleteSerializer(serializers.ModelSerializer):
    class Meta:
        model = SystemMailSenderConfig
        fields = (  
                    'uuid',
                    'name',
                    )
        # #fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data

    def create(self, validated_data):
        try:
            
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            
            

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (email_server) ForeignKey POST #############
            # Lấy pk code của email_server từ request_data
            if "email_server" in validated_data:
                email_server = validated_data.pop('email_server')
            if "email_server" in request_data:
                email_server = request_data.pop('email_server')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
                        
            instance = SystemMailSenderConfig.objects.create(**validated_data)
            

            return instance
        except Exception as xx:
            print(str(xx))
        return SystemMailSenderConfig.objects.create(**validated_data)

    def update(self, instance, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (email_server) ForeignKey POST #############
            # Lấy pk code của email_server từ request_data
            if "email_server" in validated_data:
                email_server = validated_data.pop('email_server')
            if "email_server" in request_data:
                email_server = request_data.pop('email_server')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
            super(SystemMailSenderConfigDeleteSerializer, self).update(instance, validated_data)
            
            return instance
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        # 
        # super(SystemMailSenderConfigDeleteSerializer, self).update(instance, validated_data)
        

        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            


# Serializer trả về những thông cần thiết cho việc hiển thị ra danh sách.
class SystemMailSenderConfigOnlyViewsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SystemMailSenderConfig
        fields = (
                
                'uuid',
                    
                'name',
                    
                'code',
                    
                'created_by',
                    
                'created_at',
                    
                'updated_by',
                    
                'updated_at',
                    
                  'name',
                        
                  #'name',

                        
                  #'code',

                        
                  'friendly_code',
                        
                  #'friendly_code',

                        
                  #'created_by',

                        
                  #'created_at',

                        
                  #'updated_by',

                        
                  #'updated_at',

                        
                  'organization',
                        
                    #'get_organization_obj',
                            
                  'email_server',
                        
                    #'get_email_server_obj',
                            
                  'email',
                        
                  #'email',

                        
                  'password',
                        
                  #'password',

                  'number_sent',
                        
                  'app_password',
                        
                  #'app_password',

                        
                  'hr_created_by',
                        
                    #'get_hr_created_by_obj',
                            
                  'hr_updated_by',
                        
                    #'get_hr_updated_by_obj',
                            
                  'email_server',
                        
                  'email',
                    'active',
                  )
        ##fields = '__all__'
        #depth = 1
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
        # extra_fields = ['author_all']
        # def get_field_names(self, declared_fields, info):
    #     expanded_fields = super(NewspaperSerializer, self).get_field_names(declared_fields, info)

    #     if getattr(self.Meta, 'extra_fields', None):
    #         return expanded_fields + self.Meta.extra_fields
    #     else:
    #         return expanded_fields
    def get_serializer_context(self):
        return self.context['request'].data
    def get_request_user(self):
        return self.context['request'].user
    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            
            

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (email_server) ForeignKey POST #############
            # Lấy pk code của email_server từ request_data
            if "email_server" in validated_data:
                email_server = validated_data.pop('email_server')
            if "email_server" in request_data:
                email_server = request_data.pop('email_server')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
                        
            instance = SystemMailSenderConfig.objects.create(**validated_data)
            return instance
            ################################################
            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailSenderConfig.objects.none()
 
    def update(self, instance, validated_data):
        try:
            for attr_name in validated_data:
                print('%s = %s' % (attr_name, validated_data[attr_name]))
            request_data = dict(self.get_serializer_context())
            #  validated_data["updated_by"]=self.get_request_user()
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        try:
            
            super(SystemMailSenderConfigOnlyViewsSerializer, self).update(instance, validated_data)
            
            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailSenderConfig.objects.none()
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            



class SystemMailSenderConfigRemoveFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = SystemMailSenderConfig
        fields = (
                  'name',
                  'uuid',
                  'code',)
        # fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data
    def get_request_user(self):
        return self.context['request'].user
    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            
            instance = SystemMailSenderConfig.objects.create(**validated_data)
            
            ################################################
            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailSenderConfig.objects.none()
            
    def update(self, instance, validated_data):
        try:
            for attr_name in validated_data:
                print('%s = %s' % (attr_name, validated_data[attr_name]))
            request_data = dict(self.get_serializer_context())
            # validated_data["updated_by"]=self.get_request_user()
            if 'attach-field' in request_data:
                validated_data[request_data["attach-field"][0]]=None
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        
        SystemMailSenderConfig.objects.filter(uuid=instance.uuid).update(**validated_data)
        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret



class SystemMailTargetCreateSerializer(serializers.ModelSerializer):
    
    target = serializers.CharField()

                        
    class Meta:
        model = SystemMailTarget
        fields = (
                
                'uuid',
                    
                'name',
                    
                'code',
                    
                'created_by',
                    
                'created_at',
                    
                'updated_by',
                    
                'updated_at',
                    
                  'name',
                        
                  'code',
                        
                  'friendly_code',
                        
                  'created_by',
                        
                  'created_at',
                        
                  'updated_by',
                        
                  'updated_at',
                        
                  'email_template',
                        
                    #'get_email_template_obj',
                            
                  'target',
                        
                    #'get_count_target_obj',
                    #'get_list_target_obj',
                            
                  'content',
                        
                  'status_code',
                        
                  'status_text',
                        
                  'organization',
                        
                    #'get_organization_obj',
                            
                  'hr_created_by',
                        
                    #'get_hr_created_by_obj',
                            
                  'hr_updated_by',
                        
                    #'get_hr_updated_by_obj',
                            
                )
        #fields = '__all__'
        #depth = 1
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
        # extra_fields = ['author_all']
        # def get_field_names(self, declared_fields, info):
    #     expanded_fields = super(NewspaperSerializer, self).get_field_names(declared_fields, info)

    #     if getattr(self.Meta, 'extra_fields', None):
    #         return expanded_fields + self.Meta.extra_fields
    #     else:
    #         return expanded_fields
    def get_serializer_context(self):
        return self.context['request'].data
    def get_request_user(self):
        return self.context['request'].user
    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            

            ########### Process (email_template) ForeignKey POST #############
            # Lấy pk code của email_template từ request_data
            if "email_template" in validated_data:
                email_template = validated_data.pop('email_template')
            if "email_template" in request_data:
                email_template = request_data.pop('email_template')
             
                                

            ########### Process (target)Many2Many POST #############
            if "target" in validated_data:
                target = validated_data.pop('target')
            if "target" in request_data:
                target = request_data.pop('target')
             

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
            instance = SystemMailTarget.objects.create(**validated_data)
            ################################################
            

            if "target" in locals():
                # instance.target.clear()
                # clear value not exist in "target":
                crr_target_list = instance.target
                if crr_target_list:
                    instance.target = []
                    for crr_target in crr_target_list:
                        if crr_target["uuid"] not in target:
                            instance.delete_target_values(crr_target["uuid"])
                        else:
                            # update if exist in "target"
                            instance.update_target_values(crr_target["uuid"])
                
                for obj in target:
                    if crr_target_list and obj not in crr_target_list:
                        instance.add_target_values(obj)
                    else:
                        instance.add_target_values(obj)
                    
                instance.save()
                                    
            
            # Lấy obj của email_template lưu vào SystemMailTarget
            if "email_template" in validated_data:
                for obj in validated_data["email_template"]:
                    if obj is not None and isinstance(obj,SystemMailTemplate):
                        validated_data["email_template"] = obj
            else:
                if "email_template" in locals():
                    for obj_id in email_template:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_email_template_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["email_template"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của organization lưu vào SystemMailTarget
            if "organization" in validated_data:
                for obj in validated_data["organization"]:
                    if obj is not None and isinstance(obj,Organization):
                        validated_data["organization"] = obj
            else:
                if "organization" in locals():
                    for obj_id in organization:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_organization_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["organization"] = obj
                            # instance.save()
                            break
                
                if 'org_id' in self.context['request'].parser_context['kwargs']:
                    try:
                        workspace_org_id_val = self.context['request'].parser_context['kwargs']['org_id']
                        # TH day la uuid
                        if isinstance(uuid.UUID(workspace_org_id_val),uuid.UUID):
                            instance.set_organization_values(workspace_org_id_val)
                            instance.save()
                        else:
                            # neu TH la uuid k xay ra thi se vao day
                            # nhung no se vao ngoai le
                            org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                            if org_id_obj_uuid is not None:
                                instance.set_organization_values(org_id_obj_uuid)
                                instance.save()
                    except Exception as xx:
                        print(xx)
                        # ngoai le nay xay ra khi workspace_org_id_val khong phai uuid
                        # thu tim workspace_org_id_val qua truong friendly_code
                        org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                        if org_id_obj_uuid is not None:
                            instance.set_organization_values(org_id_obj_uuid)
                            instance.save()
                                
                                
            # Lấy obj của hr_created_by lưu vào SystemMailTarget
            if "hr_created_by" in validated_data:
                for obj in validated_data["hr_created_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_created_by"] = obj
            else:
                if "hr_created_by" in locals():
                    for obj_id in hr_created_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_created_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_created_by"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_updated_by lưu vào SystemMailTarget
            if "hr_updated_by" in validated_data:
                for obj in validated_data["hr_updated_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_updated_by"] = obj
            else:
                if "hr_updated_by" in locals():
                    for obj_id in hr_updated_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_updated_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_updated_by"] = obj
                            # instance.save()
                            break
                
                                

            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailTarget.objects.none()
 
    def update(self, instance, validated_data):
        try:
            for attr_name in validated_data:
                print('%s = %s' % (attr_name, validated_data[attr_name]))
            request_data = dict(self.get_serializer_context())
            #  validated_data["updated_by"]=self.get_request_user()
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        try:
            
            

            ########### Process (email_template) ForeignKey POST #############
            # Lấy pk code của email_template từ request_data
            if "email_template" in validated_data:
                email_template = validated_data.pop('email_template')
            if "email_template" in request_data:
                email_template = request_data.pop('email_template')
             
                                
                                

            ########### Process (target)Many2Many POST #############
            if "target" in validated_data:
                target = validated_data.pop('target')
            if "target" in request_data:
                target = request_data.pop('target')
             

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
            super(SystemMailTargetCreateSerializer, self).update(instance, validated_data)
            
            if "target" in locals():
                # instance.target.clear()
                # clear value not exist in "target":
                crr_target_list = instance.target
                if crr_target_list:
                    instance.target = []
                    for crr_target in crr_target_list:
                        if crr_target["uuid"] not in target:
                            instance.delete_target_values(crr_target["uuid"])
                        else:
                            # update if exist in "target"
                            instance.update_target_values(crr_target["uuid"])
                # else:
                #     instance.target = []
                for obj in target:
                    if crr_target_list and obj not in crr_target_list:
                        instance.add_target_values(obj)
                    else:
                        instance.add_target_values(obj)
                instance.save()
                                    
            
            # Lấy obj của email_template lưu vào SystemMailTarget
            if "email_template" in validated_data:
                for obj in validated_data["email_template"]:
                    if obj is not None and isinstance(obj,SystemMailTemplate):
                        validated_data["email_template"] = obj
            else:
                if "email_template" in locals():
                    for obj_id in email_template:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_email_template_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["email_template"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của organization lưu vào SystemMailTarget
            if "organization" in validated_data:
                for obj in validated_data["organization"]:
                    if obj is not None and isinstance(obj,Organization):
                        validated_data["organization"] = obj
            else:
                if "organization" in locals():
                    for obj_id in organization:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_organization_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["organization"] = obj
                            # instance.save()
                            break
                
                if 'org_id' in self.context['request'].parser_context['kwargs']:
                    try:
                        workspace_org_id_val = self.context['request'].parser_context['kwargs']['org_id']
                        # TH day la uuid
                        if isinstance(uuid.UUID(workspace_org_id_val),uuid.UUID):
                            instance.set_organization_values(workspace_org_id_val)
                            instance.save()
                        else:
                            # neu TH la uuid k xay ra thi se vao day
                            # nhung no se vao ngoai le
                            org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                            if org_id_obj_uuid is not None:
                                instance.set_organization_values(org_id_obj_uuid)
                                instance.save()
                    except Exception as xx:
                        print(xx)
                        # ngoai le nay xay ra khi workspace_org_id_val khong phai uuid
                        # thu tim workspace_org_id_val qua truong friendly_code
                        org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                        if org_id_obj_uuid is not None:
                            instance.set_organization_values(org_id_obj_uuid)
                            instance.save()
                                
                                
            # Lấy obj của hr_created_by lưu vào SystemMailTarget
            if "hr_created_by" in validated_data:
                for obj in validated_data["hr_created_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_created_by"] = obj
            else:
                if "hr_created_by" in locals():
                    for obj_id in hr_created_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_created_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_created_by"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_updated_by lưu vào SystemMailTarget
            if "hr_updated_by" in validated_data:
                for obj in validated_data["hr_updated_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_updated_by"] = obj
            else:
                if "hr_updated_by" in locals():
                    for obj_id in hr_updated_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_updated_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_updated_by"] = obj
                            # instance.save()
                            break
                
                                

            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailTarget.objects.none()
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            


            
class SystemMailTargetUpdateSerializer(serializers.ModelSerializer):
    
    target = serializers.CharField()

                        
    class Meta:
        model = SystemMailTarget
        fields = (
                
                'uuid',
                    
                'name',
                    
                'code',
                    
                'created_by',
                    
                'created_at',
                    
                'updated_by',
                    
                'updated_at',
                    
                  'name',
                        
                  'code',
                        
                  'friendly_code',
                        
                  'created_by',
                        
                  'created_at',
                        
                  'updated_by',
                        
                  'updated_at',
                        
                  'email_template',
                        
                    #'get_email_template_obj',
                            
                  'target',
                        
                    #'get_count_target_obj',
                    #'get_list_target_obj',
                            
                  'content',
                        
                  'status_code',
                        
                  'status_text',
                        
                  'organization',
                        
                    #'get_organization_obj',
                            
                  'hr_created_by',
                        
                    #'get_hr_created_by_obj',
                            
                  'hr_updated_by',
                        
                    #'get_hr_updated_by_obj',
                            

                )
        # #fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data

    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            

            ########### Process (email_template) ForeignKey POST #############
            # Lấy pk code của email_template từ request_data
            if "email_template" in validated_data:
                email_template = validated_data.pop('email_template')
            if "email_template" in request_data:
                email_template = request_data.pop('email_template')
             
                                

            ########### Process (target)Many2Many POST #############
            if "target" in validated_data:
                target = validated_data.pop('target')
            if "target" in request_data:
                target = request_data.pop('target')
             

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
            instance = SystemMailTarget.objects.create(**validated_data)
            

            if "target" in locals():
                # instance.target.clear()
                # clear value not exist in "target":
                crr_target_list = instance.target
                if crr_target_list:
                    instance.target = []
                    for crr_target in crr_target_list:
                        if crr_target["uuid"] not in target:
                            instance.delete_target_values(crr_target["uuid"])
                        else:
                            # update if exist in "target"
                            instance.update_target_values(crr_target["uuid"])
                
                for obj in target:
                    if crr_target_list and obj not in crr_target_list:
                        instance.add_target_values(obj)
                    else:
                        instance.add_target_values(obj)
                    
                instance.save()
                                    
            
            # Lấy obj của email_template lưu vào SystemMailTarget
            if "email_template" in validated_data:
                for obj in validated_data["email_template"]:
                    if obj is not None and isinstance(obj,SystemMailTemplate):
                        validated_data["email_template"] = obj
            else:
                if "email_template" in locals():
                    for obj_id in email_template:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_email_template_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["email_template"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của organization lưu vào SystemMailTarget
            if "organization" in validated_data:
                for obj in validated_data["organization"]:
                    if obj is not None and isinstance(obj,Organization):
                        validated_data["organization"] = obj
            else:
                if "organization" in locals():
                    for obj_id in organization:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_organization_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["organization"] = obj
                            # instance.save()
                            break
                
                if 'org_id' in self.context['request'].parser_context['kwargs']:
                    try:
                        workspace_org_id_val = self.context['request'].parser_context['kwargs']['org_id']
                        # TH day la uuid
                        if isinstance(uuid.UUID(workspace_org_id_val),uuid.UUID):
                            instance.set_organization_values(workspace_org_id_val)
                            instance.save()
                        else:
                            # neu TH la uuid k xay ra thi se vao day
                            # nhung no se vao ngoai le
                            org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                            if org_id_obj_uuid is not None:
                                instance.set_organization_values(org_id_obj_uuid)
                                instance.save()
                    except Exception as xx:
                        print(xx)
                        # ngoai le nay xay ra khi workspace_org_id_val khong phai uuid
                        # thu tim workspace_org_id_val qua truong friendly_code
                        org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                        if org_id_obj_uuid is not None:
                            instance.set_organization_values(org_id_obj_uuid)
                            instance.save()
                                
                                
            # Lấy obj của hr_created_by lưu vào SystemMailTarget
            if "hr_created_by" in validated_data:
                for obj in validated_data["hr_created_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_created_by"] = obj
            else:
                if "hr_created_by" in locals():
                    for obj_id in hr_created_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_created_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_created_by"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_updated_by lưu vào SystemMailTarget
            if "hr_updated_by" in validated_data:
                for obj in validated_data["hr_updated_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_updated_by"] = obj
            else:
                if "hr_updated_by" in locals():
                    for obj_id in hr_updated_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_updated_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_updated_by"] = obj
                            # instance.save()
                            break
                
                                

            return instance

        except Exception as xx:
            print(str(xx))

    def update(self, instance, validated_data):
        try:
            
            request_data = dict(self.get_serializer_context())
            

            ########### Process (email_template) ForeignKey POST #############
            # Lấy pk code của email_template từ request_data
            if "email_template" in validated_data:
                email_template = validated_data.pop('email_template')
            if "email_template" in request_data:
                email_template = request_data.pop('email_template')
             
                                
                                

            ########### Process (target)Many2Many POST #############
            if "target" in validated_data:
                target = validated_data.pop('target')
            if "target" in request_data:
                target = request_data.pop('target')
             

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
            super(SystemMailTargetUpdateSerializer, self).update(instance, validated_data)
            
            if "target" in locals():
                # instance.target.clear()
                # clear value not exist in "target":
                crr_target_list = instance.target
                if crr_target_list:
                    instance.target = []
                    for crr_target in crr_target_list:
                        if crr_target["uuid"] not in target:
                            instance.delete_target_values(crr_target["uuid"])
                        else:
                            # update if exist in "target"
                            instance.update_target_values(crr_target["uuid"])
                # else:
                #     instance.target = []
                for obj in target:
                    if crr_target_list and obj not in crr_target_list:
                        instance.add_target_values(obj)
                    else:
                        instance.add_target_values(obj)
                instance.save()
                                    
            
            # Lấy obj của email_template lưu vào SystemMailTarget
            if "email_template" in validated_data:
                for obj in validated_data["email_template"]:
                    if obj is not None and isinstance(obj,SystemMailTemplate):
                        validated_data["email_template"] = obj
            else:
                if "email_template" in locals():
                    for obj_id in email_template:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_email_template_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["email_template"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của organization lưu vào SystemMailTarget
            if "organization" in validated_data:
                for obj in validated_data["organization"]:
                    if obj is not None and isinstance(obj,Organization):
                        validated_data["organization"] = obj
            else:
                if "organization" in locals():
                    for obj_id in organization:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_organization_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["organization"] = obj
                            # instance.save()
                            break
                
                if 'org_id' in self.context['request'].parser_context['kwargs']:
                    try:
                        workspace_org_id_val = self.context['request'].parser_context['kwargs']['org_id']
                        # TH day la uuid
                        if isinstance(uuid.UUID(workspace_org_id_val),uuid.UUID):
                            instance.set_organization_values(workspace_org_id_val)
                            instance.save()
                        else:
                            # neu TH la uuid k xay ra thi se vao day
                            # nhung no se vao ngoai le
                            org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                            if org_id_obj_uuid is not None:
                                instance.set_organization_values(org_id_obj_uuid)
                                instance.save()
                    except Exception as xx:
                        print(xx)
                        # ngoai le nay xay ra khi workspace_org_id_val khong phai uuid
                        # thu tim workspace_org_id_val qua truong friendly_code
                        org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                        if org_id_obj_uuid is not None:
                            instance.set_organization_values(org_id_obj_uuid)
                            instance.save()
                                
                                
            # Lấy obj của hr_created_by lưu vào SystemMailTarget
            if "hr_created_by" in validated_data:
                for obj in validated_data["hr_created_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_created_by"] = obj
            else:
                if "hr_created_by" in locals():
                    for obj_id in hr_created_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_created_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_created_by"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_updated_by lưu vào SystemMailTarget
            if "hr_updated_by" in validated_data:
                for obj in validated_data["hr_updated_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_updated_by"] = obj
            else:
                if "hr_updated_by" in locals():
                    for obj_id in hr_updated_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_updated_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_updated_by"] = obj
                            # instance.save()
                            break
                
                                

            return instance
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        # super(SystemMailTargetUpdateSerializer, self).update(instance, validated_data)

        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            

            
class SystemMailTargetDetailsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SystemMailTarget
        # fields = (
        #             
                #'uuid',
                    
                #'name',
                    
                #'code',
                    
                #'created_by',
                    
                #'created_at',
                    
                #'updated_by',
                    
                #'updated_at',
                    
                  #'name',
                        
                  #'code',
                        
                  #'friendly_code',
                        
                  #'created_by',
                        
                  #'created_at',
                        
                  #'updated_by',
                        
                  #'updated_at',
                        
                  #'email_template',
                        
                    #'get_email_template_obj',
                            
                  #'target',
                        
                    #'get_count_target_obj',
                    #'get_list_target_obj',
                            
                  #'content',
                        
                  #'status_code',
                        
                  #'status_text',
                        
                  #'organization',
                        
                    #'get_organization_obj',
                            
                  #'hr_created_by',
                        
                    #'get_hr_created_by_obj',
                            
                  #'hr_updated_by',
                        
                    #'get_hr_updated_by_obj',
                            

        #         )
        fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data

    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        return SystemMailTarget.objects.create(**validated_data)

    def update(self, instance, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            

            ########### Process (email_template) ForeignKey POST #############
            # Lấy pk code của email_template từ request_data
            if "email_template" in validated_data:
                email_template = validated_data.pop('email_template')
            if "email_template" in request_data:
                email_template = request_data.pop('email_template')
             
                                
                                

            ########### Process (target)Many2Many POST #############
            if "target" in validated_data:
                target = validated_data.pop('target')
            if "target" in request_data:
                target = request_data.pop('target')
             

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
            super(SystemMailTargetDetailsSerializer, self).update(instance, validated_data)
            
            if "target" in locals():
                # instance.target.clear()
                # clear value not exist in "target":
                crr_target_list = instance.target
                if crr_target_list:
                    instance.target = []
                    for crr_target in crr_target_list:
                        if crr_target["uuid"] not in target:
                            instance.delete_target_values(crr_target["uuid"])
                        else:
                            # update if exist in "target"
                            instance.update_target_values(crr_target["uuid"])
                # else:
                #     instance.target = []
                for obj in target:
                    if crr_target_list and obj not in crr_target_list:
                        instance.add_target_values(obj)
                    else:
                        instance.add_target_values(obj)
                instance.save()
                                    

            return instance
        except Exception as xx:
            print(str(xx))
        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            



class SystemMailTargetDeleteSerializer(serializers.ModelSerializer):
    class Meta:
        model = SystemMailTarget
        fields = (  
                    'uuid',
                    'name',
                    )
        # #fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data

    def create(self, validated_data):
        try:
            
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            
            

            ########### Process (email_template) ForeignKey POST #############
            # Lấy pk code của email_template từ request_data
            if "email_template" in validated_data:
                email_template = validated_data.pop('email_template')
            if "email_template" in request_data:
                email_template = request_data.pop('email_template')
             
                                

            ########### Process (target)Many2Many POST #############
            if "target" in validated_data:
                target = validated_data.pop('target')
            if "target" in request_data:
                target = request_data.pop('target')
             

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
                        
            instance = SystemMailTarget.objects.create(**validated_data)
            

            if "target" in locals():
                # instance.target.clear()
                # clear value not exist in "target":
                crr_target_list = instance.target
                if crr_target_list:
                    instance.target = []
                    for crr_target in crr_target_list:
                        if crr_target["uuid"] not in target:
                            instance.delete_target_values(crr_target["uuid"])
                        else:
                            # update if exist in "target"
                            instance.update_target_values(crr_target["uuid"])
                
                for obj in target:
                    if crr_target_list and obj not in crr_target_list:
                        instance.add_target_values(obj)
                    else:
                        instance.add_target_values(obj)
                    
                instance.save()
                                    

            return instance
        except Exception as xx:
            print(str(xx))
        return SystemMailTarget.objects.create(**validated_data)

    def update(self, instance, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            

            ########### Process (email_template) ForeignKey POST #############
            # Lấy pk code của email_template từ request_data
            if "email_template" in validated_data:
                email_template = validated_data.pop('email_template')
            if "email_template" in request_data:
                email_template = request_data.pop('email_template')
             
                                
                                

            ########### Process (target)Many2Many POST #############
            if "target" in validated_data:
                target = validated_data.pop('target')
            if "target" in request_data:
                target = request_data.pop('target')
             

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
            super(SystemMailTargetDeleteSerializer, self).update(instance, validated_data)
            
            return instance
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        # 
        # super(SystemMailTargetDeleteSerializer, self).update(instance, validated_data)
        
            if "target" in locals():
                # instance.target.clear()
                # clear value not exist in "target":
                crr_target_list = instance.target
                if crr_target_list:
                    instance.target = []
                    for crr_target in crr_target_list:
                        if crr_target["uuid"] not in target:
                            instance.delete_target_values(crr_target["uuid"])
                        else:
                            # update if exist in "target"
                            instance.update_target_values(crr_target["uuid"])
                # else:
                #     instance.target = []
                for obj in target:
                    if crr_target_list and obj not in crr_target_list:
                        instance.add_target_values(obj)
                    else:
                        instance.add_target_values(obj)
                instance.save()
                                    

        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            


# Serializer trả về những thông cần thiết cho việc hiển thị ra danh sách.
class SystemMailTargetOnlyViewsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SystemMailTarget
        fields = (
                
                'uuid',
                    
                'name',
                    
                'code',
                    
                'created_by',
                    
                'created_at',
                    
                'updated_by',
                    
                'updated_at',
                    
                  'name',
                        
                  #'name',

                        
                  #'code',

                        
                  'friendly_code',
                        
                  #'friendly_code',

                        
                  #'created_by',

                        
                  #'created_at',

                        
                  #'updated_by',

                        
                  #'updated_at',

                        
                  'email_template',
                        
                    #'get_email_template_obj',
                            
                  'target',
                        
                    #'get_count_target_obj',
                    #'get_list_target_obj',
                            
                  'content',
                        
                  #'content',

                        
                  'status_code',
                        
                  #'status_code',

                        
                  'status_text',
                        
                  #'status_text',

                        
                  'organization',
                        
                    #'get_organization_obj',
                            
                  'hr_created_by',
                        
                    #'get_hr_created_by_obj',
                            
                  'hr_updated_by',
                        
                    #'get_hr_updated_by_obj',
                            
                  )
        ##fields = '__all__'
        #depth = 1
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
        # extra_fields = ['author_all']
        # def get_field_names(self, declared_fields, info):
    #     expanded_fields = super(NewspaperSerializer, self).get_field_names(declared_fields, info)

    #     if getattr(self.Meta, 'extra_fields', None):
    #         return expanded_fields + self.Meta.extra_fields
    #     else:
    #         return expanded_fields
    def get_serializer_context(self):
        return self.context['request'].data
    def get_request_user(self):
        return self.context['request'].user
    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            
            

            ########### Process (email_template) ForeignKey POST #############
            # Lấy pk code của email_template từ request_data
            if "email_template" in validated_data:
                email_template = validated_data.pop('email_template')
            if "email_template" in request_data:
                email_template = request_data.pop('email_template')
             
                                

            ########### Process (target)Many2Many POST #############
            if "target" in validated_data:
                target = validated_data.pop('target')
            if "target" in request_data:
                target = request_data.pop('target')
             

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
                        
            instance = SystemMailTarget.objects.create(**validated_data)
            return instance
            ################################################
            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailTarget.objects.none()
 
    def update(self, instance, validated_data):
        try:
            for attr_name in validated_data:
                print('%s = %s' % (attr_name, validated_data[attr_name]))
            request_data = dict(self.get_serializer_context())
            #  validated_data["updated_by"]=self.get_request_user()
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        try:
            
            super(SystemMailTargetOnlyViewsSerializer, self).update(instance, validated_data)
            
            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailTarget.objects.none()
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            



class SystemMailTargetRemoveFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = SystemMailTarget
        fields = (
                  'name',
                  'uuid',
                  'code',)
        # fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data
    def get_request_user(self):
        return self.context['request'].user
    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            
            instance = SystemMailTarget.objects.create(**validated_data)
            
            ################################################
            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailTarget.objects.none()
            
    def update(self, instance, validated_data):
        try:
            for attr_name in validated_data:
                print('%s = %s' % (attr_name, validated_data[attr_name]))
            request_data = dict(self.get_serializer_context())
            # validated_data["updated_by"]=self.get_request_user()
            if 'attach-field' in request_data:
                validated_data[request_data["attach-field"][0]]=None
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        
        SystemMailTarget.objects.filter(uuid=instance.uuid).update(**validated_data)
        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret



class SystemMailMailCreateSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SystemMailMail
        fields = (
                
                'uuid',
                    
                'name',
                    
                'code',
                    
                'created_by',
                    
                'created_at',
                    
                'updated_by',
                    
                'updated_at',
                    
                  'name',
                        
                  'code',
                        
                  'friendly_code',
                        
                  'created_by',
                        
                  'created_at',
                        
                  'updated_by',
                        
                  'organization',
                        
                    #'get_organization_obj',
                            
                  'mail_sender',
                        
                    #'get_mail_sender_obj',
                            
                  'email_template',
                        
                    #'get_email_template_obj',
                            
                  'mail_target',
                        
                    #'get_mail_target_obj',
                            
                  'addressee',
                        
                    #'get_addressee_obj',
                            
                  'content',

                  'mail_to',
                        
                  'status_code',
                        
                  'status_text',
                        
                  'hr_created_by',
                        
                    #'get_hr_created_by_obj',
                            
                  'updated_at',
                        
                  'hr_updated_by',
                        
                    #'get_hr_updated_by_obj',
                            
                )
        #fields = '__all__'
        #depth = 1
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
        # extra_fields = ['author_all']
        # def get_field_names(self, declared_fields, info):
    #     expanded_fields = super(NewspaperSerializer, self).get_field_names(declared_fields, info)

    #     if getattr(self.Meta, 'extra_fields', None):
    #         return expanded_fields + self.Meta.extra_fields
    #     else:
    #         return expanded_fields
    def get_serializer_context(self):
        return self.context['request'].data
    def get_request_user(self):
        return self.context['request'].user
    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            
            list_uuid_target = request_data["target"]

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (mail_sender) ForeignKey POST #############
            # Lấy pk code của mail_sender từ request_data
            if "mail_sender" in validated_data:
                mail_sender = validated_data.pop('mail_sender')
            if "mail_sender" in request_data:
                mail_sender = request_data.pop('mail_sender')
             

            ########### Process (email_template) ForeignKey POST #############
            # Lấy pk code của email_template từ request_data
            if "email_template" in validated_data:
                email_template = validated_data.pop('email_template')
            if "email_template" in request_data:
                email_template = request_data.pop('email_template')
             

            ########### Process (mail_target) ForeignKey POST #############
            # Lấy pk code của mail_target từ request_data
            if "mail_target" in validated_data:
                mail_target = validated_data.pop('mail_target')
            if "mail_target" in request_data:
                mail_target = request_data.pop('mail_target')
             

            ########### Process (addressee) ForeignKey POST #############
            # Lấy pk code của addressee từ request_data
            if "addressee" in validated_data:
                addressee = validated_data.pop('addressee')
            if "addressee" in request_data:
                addressee = request_data.pop('addressee')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
            instance = SystemMailMail.objects.create(**validated_data)
            ################################################
            
            
            # Lấy obj của organization lưu vào SystemMailMail
            if "organization" in validated_data:
                for obj in validated_data["organization"]:
                    if obj is not None and isinstance(obj,Organization):
                        validated_data["organization"] = obj
            else:
                if "organization" in locals():
                    for obj_id in organization:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_organization_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["organization"] = obj
                            # instance.save()
                            break
                
                if 'org_id' in self.context['request'].parser_context['kwargs']:
                    try:
                        workspace_org_id_val = self.context['request'].parser_context['kwargs']['org_id']
                        # TH day la uuid
                        if isinstance(uuid.UUID(workspace_org_id_val),uuid.UUID):
                            instance.set_organization_values(workspace_org_id_val)
                            instance.save()
                        else:
                            # neu TH la uuid k xay ra thi se vao day
                            # nhung no se vao ngoai le
                            org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                            if org_id_obj_uuid is not None:
                                instance.set_organization_values(org_id_obj_uuid)
                                instance.save()
                    except Exception as xx:
                        print(xx)
                        # ngoai le nay xay ra khi workspace_org_id_val khong phai uuid
                        # thu tim workspace_org_id_val qua truong friendly_code
                        org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                        if org_id_obj_uuid is not None:
                            instance.set_organization_values(org_id_obj_uuid)
                            instance.save()
                                
                                
            # Lấy obj của mail_sender lưu vào SystemMailMail
            if "mail_sender" in validated_data:
                for obj in validated_data["mail_sender"]:
                    if obj is not None and isinstance(obj,SystemMailSenderConfig):
                        validated_data["mail_sender"] = obj
            else:
                if "mail_sender" in locals():
                    for obj_id in mail_sender:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_mail_sender_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["mail_sender"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của email_template lưu vào SystemMailMail
            if "email_template" in validated_data:
                for obj in validated_data["email_template"]:
                    if obj is not None and isinstance(obj,SystemMailTemplate):
                        validated_data["email_template"] = obj
            else:
                if "email_template" in locals():
                    for obj_id in email_template:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_email_template_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["email_template"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của mail_target lưu vào SystemMailMail
            if "mail_target" in validated_data:
                for obj in validated_data["mail_target"]:
                    if obj is not None and isinstance(obj,SystemMailTarget):
                        validated_data["mail_target"] = obj
            else:
                if "mail_target" in locals():
                    for obj_id in mail_target:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_mail_target_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["mail_target"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của addressee lưu vào SystemMailMail
            if "addressee" in validated_data:
                for obj in validated_data["addressee"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["addressee"] = obj
            else:
                if "addressee" in locals():
                    for obj_id in addressee:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_addressee_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["addressee"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_created_by lưu vào SystemMailMail
            if "hr_created_by" in validated_data:
                for obj in validated_data["hr_created_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_created_by"] = obj
            else:
                if "hr_created_by" in locals():
                    for obj_id in hr_created_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_created_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_created_by"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_updated_by lưu vào SystemMailMail
            if "hr_updated_by" in validated_data:
                for obj in validated_data["hr_updated_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_updated_by"] = obj
            else:
                if "hr_updated_by" in locals():
                    for obj_id in hr_updated_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_updated_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_updated_by"] = obj
                            # instance.save()
                            break
                
                                
            # instance.send_mail_front_end(instance.mail_to, instance.mail_sender["uuid"], instance.content)
            uuid_mail_target = instance.mail_target["uuid"]
            if uuid_mail_target is not None:
                instance.send_mail_front_end_to_many_people(uuid_mail_target, instance.mail_sender["uuid"], instance.content)
                        
            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailMail.objects.none()

    def update(self, instance, validated_data):
        try:
            for attr_name in validated_data:
                print('%s = %s' % (attr_name, validated_data[attr_name]))
            request_data = dict(self.get_serializer_context())
            #  validated_data["updated_by"]=self.get_request_user()
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        try:
            
            

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (mail_sender) ForeignKey POST #############
            # Lấy pk code của mail_sender từ request_data
            if "mail_sender" in validated_data:
                mail_sender = validated_data.pop('mail_sender')
            if "mail_sender" in request_data:
                mail_sender = request_data.pop('mail_sender')
             

            ########### Process (email_template) ForeignKey POST #############
            # Lấy pk code của email_template từ request_data
            if "email_template" in validated_data:
                email_template = validated_data.pop('email_template')
            if "email_template" in request_data:
                email_template = request_data.pop('email_template')
             

            ########### Process (mail_target) ForeignKey POST #############
            # Lấy pk code của mail_target từ request_data
            if "mail_target" in validated_data:
                mail_target = validated_data.pop('mail_target')
            if "mail_target" in request_data:
                mail_target = request_data.pop('mail_target')
             

            ########### Process (addressee) ForeignKey POST #############
            # Lấy pk code của addressee từ request_data
            if "addressee" in validated_data:
                addressee = validated_data.pop('addressee')
            if "addressee" in request_data:
                addressee = request_data.pop('addressee')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
            super(SystemMailMailCreateSerializer, self).update(instance, validated_data)
            
            
            # Lấy obj của organization lưu vào SystemMailMail
            if "organization" in validated_data:
                for obj in validated_data["organization"]:
                    if obj is not None and isinstance(obj,Organization):
                        validated_data["organization"] = obj
            else:
                if "organization" in locals():
                    for obj_id in organization:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_organization_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["organization"] = obj
                            # instance.save()
                            break
                
                if 'org_id' in self.context['request'].parser_context['kwargs']:
                    try:
                        workspace_org_id_val = self.context['request'].parser_context['kwargs']['org_id']
                        # TH day la uuid
                        if isinstance(uuid.UUID(workspace_org_id_val),uuid.UUID):
                            instance.set_organization_values(workspace_org_id_val)
                            instance.save()
                        else:
                            # neu TH la uuid k xay ra thi se vao day
                            # nhung no se vao ngoai le
                            org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                            if org_id_obj_uuid is not None:
                                instance.set_organization_values(org_id_obj_uuid)
                                instance.save()
                    except Exception as xx:
                        print(xx)
                        # ngoai le nay xay ra khi workspace_org_id_val khong phai uuid
                        # thu tim workspace_org_id_val qua truong friendly_code
                        org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                        if org_id_obj_uuid is not None:
                            instance.set_organization_values(org_id_obj_uuid)
                            instance.save()
                                
                                
            # Lấy obj của mail_sender lưu vào SystemMailMail
            if "mail_sender" in validated_data:
                for obj in validated_data["mail_sender"]:
                    if obj is not None and isinstance(obj,SystemMailSenderConfig):
                        validated_data["mail_sender"] = obj
            else:
                if "mail_sender" in locals():
                    for obj_id in mail_sender:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_mail_sender_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["mail_sender"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của email_template lưu vào SystemMailMail
            if "email_template" in validated_data:
                for obj in validated_data["email_template"]:
                    if obj is not None and isinstance(obj,SystemMailTemplate):
                        validated_data["email_template"] = obj
            else:
                if "email_template" in locals():
                    for obj_id in email_template:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_email_template_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["email_template"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của mail_target lưu vào SystemMailMail
            if "mail_target" in validated_data:
                for obj in validated_data["mail_target"]:
                    if obj is not None and isinstance(obj,SystemMailTarget):
                        validated_data["mail_target"] = obj
            else:
                if "mail_target" in locals():
                    for obj_id in mail_target:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_mail_target_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["mail_target"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của addressee lưu vào SystemMailMail
            if "addressee" in validated_data:
                for obj in validated_data["addressee"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["addressee"] = obj
            else:
                if "addressee" in locals():
                    for obj_id in addressee:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_addressee_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["addressee"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_created_by lưu vào SystemMailMail
            if "hr_created_by" in validated_data:
                for obj in validated_data["hr_created_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_created_by"] = obj
            else:
                if "hr_created_by" in locals():
                    for obj_id in hr_created_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_created_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_created_by"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_updated_by lưu vào SystemMailMail
            if "hr_updated_by" in validated_data:
                for obj in validated_data["hr_updated_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_updated_by"] = obj
            else:
                if "hr_updated_by" in locals():
                    for obj_id in hr_updated_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_updated_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_updated_by"] = obj
                            # instance.save()
                            break
                
                                

            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailMail.objects.none()
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            

class SystemMailMailCreateSerializer_ComposeMail(serializers.ModelSerializer):
    
    class Meta:
        model = SystemMailMail
        fields = (
                
                'uuid',
                    
                'name',
                    
                'code',
                    
                'created_by',
                    
                'created_at',
                    
                'updated_by',
                    
                'updated_at',
                    
                  'name',
                        
                  'code',
                        
                  'friendly_code',
                        
                  'created_by',
                        
                  'created_at',
                        
                  'updated_by',
                        
                  'organization',
                        
                    #'get_organization_obj',
                            
                  'mail_sender',
                        
                    #'get_mail_sender_obj',
                            
                  'email_template',
                        
                    #'get_email_template_obj',
                            
                  'mail_target',
                        
                    #'get_mail_target_obj',
                            
                  'addressee',
                        
                    #'get_addressee_obj',
                            
                  'content',

                  'mail_to',
                        
                  'status_code',
                        
                  'status_text',
                        
                  'hr_created_by',
                        
                    #'get_hr_created_by_obj',
                            
                  'updated_at',
                        
                  'hr_updated_by',
                        
                    #'get_hr_updated_by_obj',
                            
                )
        #fields = '__all__'
        #depth = 1
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
        # extra_fields = ['author_all']
        # def get_field_names(self, declared_fields, info):
    #     expanded_fields = super(NewspaperSerializer, self).get_field_names(declared_fields, info)

    #     if getattr(self.Meta, 'extra_fields', None):
    #         return expanded_fields + self.Meta.extra_fields
    #     else:
    #         return expanded_fields
    def get_serializer_context(self):
        return self.context['request'].data
    def get_request_user(self):
        return self.context['request'].user
    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            
            list_uuid_target = request_data["target"]

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (mail_sender) ForeignKey POST #############
            # Lấy pk code của mail_sender từ request_data
            if "mail_sender" in validated_data:
                mail_sender = validated_data.pop('mail_sender')
            if "mail_sender" in request_data:
                mail_sender = request_data.pop('mail_sender')
             

            ########### Process (email_template) ForeignKey POST #############
            # Lấy pk code của email_template từ request_data
            if "email_template" in validated_data:
                email_template = validated_data.pop('email_template')
            if "email_template" in request_data:
                email_template = request_data.pop('email_template')
             

            ########### Process (mail_target) ForeignKey POST #############
            # Lấy pk code của mail_target từ request_data
            if "mail_target" in validated_data:
                mail_target = validated_data.pop('mail_target')
            if "mail_target" in request_data:
                mail_target = request_data.pop('mail_target')
             

            ########### Process (addressee) ForeignKey POST #############
            # Lấy pk code của addressee từ request_data
            if "addressee" in validated_data:
                addressee = validated_data.pop('addressee')
            if "addressee" in request_data:
                addressee = request_data.pop('addressee')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
            instance = SystemMailMail.objects.create(**validated_data)
            ################################################
            
            
            # Lấy obj của organization lưu vào SystemMailMail
            if "organization" in validated_data:
                for obj in validated_data["organization"]:
                    if obj is not None and isinstance(obj,Organization):
                        validated_data["organization"] = obj
            else:
                if "organization" in locals():
                    for obj_id in organization:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_organization_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["organization"] = obj
                            # instance.save()
                            break
                
                if 'org_id' in self.context['request'].parser_context['kwargs']:
                    try:
                        workspace_org_id_val = self.context['request'].parser_context['kwargs']['org_id']
                        # TH day la uuid
                        if isinstance(uuid.UUID(workspace_org_id_val),uuid.UUID):
                            instance.set_organization_values(workspace_org_id_val)
                            instance.save()
                        else:
                            # neu TH la uuid k xay ra thi se vao day
                            # nhung no se vao ngoai le
                            org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                            if org_id_obj_uuid is not None:
                                instance.set_organization_values(org_id_obj_uuid)
                                instance.save()
                    except Exception as xx:
                        print(xx)
                        # ngoai le nay xay ra khi workspace_org_id_val khong phai uuid
                        # thu tim workspace_org_id_val qua truong friendly_code
                        org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                        if org_id_obj_uuid is not None:
                            instance.set_organization_values(org_id_obj_uuid)
                            instance.save()
                                
                                
            # Lấy obj của mail_sender lưu vào SystemMailMail
            if "mail_sender" in validated_data:
                for obj in validated_data["mail_sender"]:
                    if obj is not None and isinstance(obj,SystemMailSenderConfig):
                        validated_data["mail_sender"] = obj
            else:
                if "mail_sender" in locals():
                    for obj_id in mail_sender:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_mail_sender_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["mail_sender"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của email_template lưu vào SystemMailMail
            if "email_template" in validated_data:
                for obj in validated_data["email_template"]:
                    if obj is not None and isinstance(obj,SystemMailTemplate):
                        validated_data["email_template"] = obj
            else:
                if "email_template" in locals():
                    for obj_id in email_template:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_email_template_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["email_template"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của mail_target lưu vào SystemMailMail
            if "mail_target" in validated_data:
                for obj in validated_data["mail_target"]:
                    if obj is not None and isinstance(obj,SystemMailTarget):
                        validated_data["mail_target"] = obj
            else:
                if "mail_target" in locals():
                    for obj_id in mail_target:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_mail_target_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["mail_target"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của addressee lưu vào SystemMailMail
            if "addressee" in validated_data:
                for obj in validated_data["addressee"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["addressee"] = obj
            else:
                if "addressee" in locals():
                    for obj_id in addressee:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_addressee_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["addressee"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_created_by lưu vào SystemMailMail
            if "hr_created_by" in validated_data:
                for obj in validated_data["hr_created_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_created_by"] = obj
            else:
                if "hr_created_by" in locals():
                    for obj_id in hr_created_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_created_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_created_by"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_updated_by lưu vào SystemMailMail
            if "hr_updated_by" in validated_data:
                for obj in validated_data["hr_updated_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_updated_by"] = obj
            else:
                if "hr_updated_by" in locals():
                    for obj_id in hr_updated_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_updated_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_updated_by"] = obj
                            # instance.save()
                            break
                        
                instance.compose_mail_front_end_to_many_people(list_uuid_target, None, instance.content)
                
            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailMail.objects.none()

    def update(self, instance, validated_data):
        try:
            for attr_name in validated_data:
                print('%s = %s' % (attr_name, validated_data[attr_name]))
            request_data = dict(self.get_serializer_context())
            #  validated_data["updated_by"]=self.get_request_user()
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        try:
            
            

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (mail_sender) ForeignKey POST #############
            # Lấy pk code của mail_sender từ request_data
            if "mail_sender" in validated_data:
                mail_sender = validated_data.pop('mail_sender')
            if "mail_sender" in request_data:
                mail_sender = request_data.pop('mail_sender')
             

            ########### Process (email_template) ForeignKey POST #############
            # Lấy pk code của email_template từ request_data
            if "email_template" in validated_data:
                email_template = validated_data.pop('email_template')
            if "email_template" in request_data:
                email_template = request_data.pop('email_template')
             

            ########### Process (mail_target) ForeignKey POST #############
            # Lấy pk code của mail_target từ request_data
            if "mail_target" in validated_data:
                mail_target = validated_data.pop('mail_target')
            if "mail_target" in request_data:
                mail_target = request_data.pop('mail_target')
             

            ########### Process (addressee) ForeignKey POST #############
            # Lấy pk code của addressee từ request_data
            if "addressee" in validated_data:
                addressee = validated_data.pop('addressee')
            if "addressee" in request_data:
                addressee = request_data.pop('addressee')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
            super(SystemMailMailCreateSerializer, self).update(instance, validated_data)
            
            
            # Lấy obj của organization lưu vào SystemMailMail
            if "organization" in validated_data:
                for obj in validated_data["organization"]:
                    if obj is not None and isinstance(obj,Organization):
                        validated_data["organization"] = obj
            else:
                if "organization" in locals():
                    for obj_id in organization:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_organization_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["organization"] = obj
                            # instance.save()
                            break
                
                if 'org_id' in self.context['request'].parser_context['kwargs']:
                    try:
                        workspace_org_id_val = self.context['request'].parser_context['kwargs']['org_id']
                        # TH day la uuid
                        if isinstance(uuid.UUID(workspace_org_id_val),uuid.UUID):
                            instance.set_organization_values(workspace_org_id_val)
                            instance.save()
                        else:
                            # neu TH la uuid k xay ra thi se vao day
                            # nhung no se vao ngoai le
                            org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                            if org_id_obj_uuid is not None:
                                instance.set_organization_values(org_id_obj_uuid)
                                instance.save()
                    except Exception as xx:
                        print(xx)
                        # ngoai le nay xay ra khi workspace_org_id_val khong phai uuid
                        # thu tim workspace_org_id_val qua truong friendly_code
                        org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                        if org_id_obj_uuid is not None:
                            instance.set_organization_values(org_id_obj_uuid)
                            instance.save()
                                
                                
            # Lấy obj của mail_sender lưu vào SystemMailMail
            if "mail_sender" in validated_data:
                for obj in validated_data["mail_sender"]:
                    if obj is not None and isinstance(obj,SystemMailSenderConfig):
                        validated_data["mail_sender"] = obj
            else:
                if "mail_sender" in locals():
                    for obj_id in mail_sender:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_mail_sender_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["mail_sender"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của email_template lưu vào SystemMailMail
            if "email_template" in validated_data:
                for obj in validated_data["email_template"]:
                    if obj is not None and isinstance(obj,SystemMailTemplate):
                        validated_data["email_template"] = obj
            else:
                if "email_template" in locals():
                    for obj_id in email_template:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_email_template_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["email_template"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của mail_target lưu vào SystemMailMail
            if "mail_target" in validated_data:
                for obj in validated_data["mail_target"]:
                    if obj is not None and isinstance(obj,SystemMailTarget):
                        validated_data["mail_target"] = obj
            else:
                if "mail_target" in locals():
                    for obj_id in mail_target:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_mail_target_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["mail_target"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của addressee lưu vào SystemMailMail
            if "addressee" in validated_data:
                for obj in validated_data["addressee"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["addressee"] = obj
            else:
                if "addressee" in locals():
                    for obj_id in addressee:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_addressee_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["addressee"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_created_by lưu vào SystemMailMail
            if "hr_created_by" in validated_data:
                for obj in validated_data["hr_created_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_created_by"] = obj
            else:
                if "hr_created_by" in locals():
                    for obj_id in hr_created_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_created_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_created_by"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_updated_by lưu vào SystemMailMail
            if "hr_updated_by" in validated_data:
                for obj in validated_data["hr_updated_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_updated_by"] = obj
            else:
                if "hr_updated_by" in locals():
                    for obj_id in hr_updated_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_updated_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_updated_by"] = obj
                            # instance.save()
                            break
                
                                

            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailMail.objects.none()
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret

            
class SystemMailMailUpdateSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SystemMailMail
        fields = (
                
                'uuid',
                    
                'name',
                    
                'code',
                    
                'created_by',
                    
                'created_at',
                    
                'updated_by',
                    
                'updated_at',
                    
                  'name',
                        
                  'code',
                        
                  'friendly_code',
                        
                  'created_by',
                        
                  'created_at',
                        
                  'updated_by',
                        
                  'organization',
                        
                    #'get_organization_obj',
                            
                  'mail_sender',
                        
                    #'get_mail_sender_obj',
                            
                  'email_template',
                        
                    #'get_email_template_obj',
                            
                  'mail_target',
                        
                    #'get_mail_target_obj',
                            
                  'addressee',
                        
                    #'get_addressee_obj',
                            
                  'content',
                        
                  'status_code',
                        
                  'status_text',
                        
                  'hr_created_by',
                        
                    #'get_hr_created_by_obj',
                            
                  'updated_at',
                        
                  'hr_updated_by',
                        
                    #'get_hr_updated_by_obj',
                            

                )
        # #fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data

    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (mail_sender) ForeignKey POST #############
            # Lấy pk code của mail_sender từ request_data
            if "mail_sender" in validated_data:
                mail_sender = validated_data.pop('mail_sender')
            if "mail_sender" in request_data:
                mail_sender = request_data.pop('mail_sender')
             

            ########### Process (email_template) ForeignKey POST #############
            # Lấy pk code của email_template từ request_data
            if "email_template" in validated_data:
                email_template = validated_data.pop('email_template')
            if "email_template" in request_data:
                email_template = request_data.pop('email_template')
             

            ########### Process (mail_target) ForeignKey POST #############
            # Lấy pk code của mail_target từ request_data
            if "mail_target" in validated_data:
                mail_target = validated_data.pop('mail_target')
            if "mail_target" in request_data:
                mail_target = request_data.pop('mail_target')
             

            ########### Process (addressee) ForeignKey POST #############
            # Lấy pk code của addressee từ request_data
            if "addressee" in validated_data:
                addressee = validated_data.pop('addressee')
            if "addressee" in request_data:
                addressee = request_data.pop('addressee')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
            instance = SystemMailMail.objects.create(**validated_data)
            
            
            # Lấy obj của organization lưu vào SystemMailMail
            if "organization" in validated_data:
                for obj in validated_data["organization"]:
                    if obj is not None and isinstance(obj,Organization):
                        validated_data["organization"] = obj
            else:
                if "organization" in locals():
                    for obj_id in organization:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_organization_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["organization"] = obj
                            # instance.save()
                            break
                
                if 'org_id' in self.context['request'].parser_context['kwargs']:
                    try:
                        workspace_org_id_val = self.context['request'].parser_context['kwargs']['org_id']
                        # TH day la uuid
                        if isinstance(uuid.UUID(workspace_org_id_val),uuid.UUID):
                            instance.set_organization_values(workspace_org_id_val)
                            instance.save()
                        else:
                            # neu TH la uuid k xay ra thi se vao day
                            # nhung no se vao ngoai le
                            org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                            if org_id_obj_uuid is not None:
                                instance.set_organization_values(org_id_obj_uuid)
                                instance.save()
                    except Exception as xx:
                        print(xx)
                        # ngoai le nay xay ra khi workspace_org_id_val khong phai uuid
                        # thu tim workspace_org_id_val qua truong friendly_code
                        org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                        if org_id_obj_uuid is not None:
                            instance.set_organization_values(org_id_obj_uuid)
                            instance.save()
                                
                                
            # Lấy obj của mail_sender lưu vào SystemMailMail
            if "mail_sender" in validated_data:
                for obj in validated_data["mail_sender"]:
                    if obj is not None and isinstance(obj,SystemMailSenderConfig):
                        validated_data["mail_sender"] = obj
            else:
                if "mail_sender" in locals():
                    for obj_id in mail_sender:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_mail_sender_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["mail_sender"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của email_template lưu vào SystemMailMail
            if "email_template" in validated_data:
                for obj in validated_data["email_template"]:
                    if obj is not None and isinstance(obj,SystemMailTemplate):
                        validated_data["email_template"] = obj
            else:
                if "email_template" in locals():
                    for obj_id in email_template:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_email_template_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["email_template"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của mail_target lưu vào SystemMailMail
            if "mail_target" in validated_data:
                for obj in validated_data["mail_target"]:
                    if obj is not None and isinstance(obj,SystemMailTarget):
                        validated_data["mail_target"] = obj
            else:
                if "mail_target" in locals():
                    for obj_id in mail_target:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_mail_target_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["mail_target"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của addressee lưu vào SystemMailMail
            if "addressee" in validated_data:
                for obj in validated_data["addressee"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["addressee"] = obj
            else:
                if "addressee" in locals():
                    for obj_id in addressee:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_addressee_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["addressee"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_created_by lưu vào SystemMailMail
            if "hr_created_by" in validated_data:
                for obj in validated_data["hr_created_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_created_by"] = obj
            else:
                if "hr_created_by" in locals():
                    for obj_id in hr_created_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_created_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_created_by"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_updated_by lưu vào SystemMailMail
            if "hr_updated_by" in validated_data:
                for obj in validated_data["hr_updated_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_updated_by"] = obj
            else:
                if "hr_updated_by" in locals():
                    for obj_id in hr_updated_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_updated_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_updated_by"] = obj
                            # instance.save()
                            break
                
                                

            return instance

        except Exception as xx:
            print(str(xx))

    def update(self, instance, validated_data):
        try:
            
            request_data = dict(self.get_serializer_context())
            

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (mail_sender) ForeignKey POST #############
            # Lấy pk code của mail_sender từ request_data
            if "mail_sender" in validated_data:
                mail_sender = validated_data.pop('mail_sender')
            if "mail_sender" in request_data:
                mail_sender = request_data.pop('mail_sender')
             

            ########### Process (email_template) ForeignKey POST #############
            # Lấy pk code của email_template từ request_data
            if "email_template" in validated_data:
                email_template = validated_data.pop('email_template')
            if "email_template" in request_data:
                email_template = request_data.pop('email_template')
             

            ########### Process (mail_target) ForeignKey POST #############
            # Lấy pk code của mail_target từ request_data
            if "mail_target" in validated_data:
                mail_target = validated_data.pop('mail_target')
            if "mail_target" in request_data:
                mail_target = request_data.pop('mail_target')
             

            ########### Process (addressee) ForeignKey POST #############
            # Lấy pk code của addressee từ request_data
            if "addressee" in validated_data:
                addressee = validated_data.pop('addressee')
            if "addressee" in request_data:
                addressee = request_data.pop('addressee')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
            super(SystemMailMailUpdateSerializer, self).update(instance, validated_data)
            
            
            # Lấy obj của organization lưu vào SystemMailMail
            if "organization" in validated_data:
                for obj in validated_data["organization"]:
                    if obj is not None and isinstance(obj,Organization):
                        validated_data["organization"] = obj
            else:
                if "organization" in locals():
                    for obj_id in organization:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_organization_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["organization"] = obj
                            # instance.save()
                            break
                
                if 'org_id' in self.context['request'].parser_context['kwargs']:
                    try:
                        workspace_org_id_val = self.context['request'].parser_context['kwargs']['org_id']
                        # TH day la uuid
                        if isinstance(uuid.UUID(workspace_org_id_val),uuid.UUID):
                            instance.set_organization_values(workspace_org_id_val)
                            instance.save()
                        else:
                            # neu TH la uuid k xay ra thi se vao day
                            # nhung no se vao ngoai le
                            org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                            if org_id_obj_uuid is not None:
                                instance.set_organization_values(org_id_obj_uuid)
                                instance.save()
                    except Exception as xx:
                        print(xx)
                        # ngoai le nay xay ra khi workspace_org_id_val khong phai uuid
                        # thu tim workspace_org_id_val qua truong friendly_code
                        org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                        if org_id_obj_uuid is not None:
                            instance.set_organization_values(org_id_obj_uuid)
                            instance.save()
                                
                                
            # Lấy obj của mail_sender lưu vào SystemMailMail
            if "mail_sender" in validated_data:
                for obj in validated_data["mail_sender"]:
                    if obj is not None and isinstance(obj,SystemMailSenderConfig):
                        validated_data["mail_sender"] = obj
            else:
                if "mail_sender" in locals():
                    for obj_id in mail_sender:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_mail_sender_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["mail_sender"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của email_template lưu vào SystemMailMail
            if "email_template" in validated_data:
                for obj in validated_data["email_template"]:
                    if obj is not None and isinstance(obj,SystemMailTemplate):
                        validated_data["email_template"] = obj
            else:
                if "email_template" in locals():
                    for obj_id in email_template:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_email_template_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["email_template"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của mail_target lưu vào SystemMailMail
            if "mail_target" in validated_data:
                for obj in validated_data["mail_target"]:
                    if obj is not None and isinstance(obj,SystemMailTarget):
                        validated_data["mail_target"] = obj
            else:
                if "mail_target" in locals():
                    for obj_id in mail_target:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_mail_target_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["mail_target"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của addressee lưu vào SystemMailMail
            if "addressee" in validated_data:
                for obj in validated_data["addressee"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["addressee"] = obj
            else:
                if "addressee" in locals():
                    for obj_id in addressee:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_addressee_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["addressee"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_created_by lưu vào SystemMailMail
            if "hr_created_by" in validated_data:
                for obj in validated_data["hr_created_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_created_by"] = obj
            else:
                if "hr_created_by" in locals():
                    for obj_id in hr_created_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_created_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_created_by"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_updated_by lưu vào SystemMailMail
            if "hr_updated_by" in validated_data:
                for obj in validated_data["hr_updated_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_updated_by"] = obj
            else:
                if "hr_updated_by" in locals():
                    for obj_id in hr_updated_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_updated_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_updated_by"] = obj
                            # instance.save()
                            break
                
                                

            return instance
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        # super(SystemMailMailUpdateSerializer, self).update(instance, validated_data)

        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            

            
class SystemMailMailDetailsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SystemMailMail
        # fields = (
        #             
                #'uuid',
                    
                #'name',
                    
                #'code',
                    
                #'created_by',
                    
                #'created_at',
                    
                #'updated_by',
                    
                #'updated_at',
                    
                  #'name',
                        
                  #'code',
                        
                  #'friendly_code',
                        
                  #'created_by',
                        
                  #'created_at',
                        
                  #'updated_by',
                        
                  #'organization',
                        
                    #'get_organization_obj',
                            
                  #'mail_sender',
                        
                    #'get_mail_sender_obj',
                            
                  #'email_template',
                        
                    #'get_email_template_obj',
                            
                  #'mail_target',
                        
                    #'get_mail_target_obj',
                            
                  #'addressee',
                        
                    #'get_addressee_obj',
                            
                  #'content',
                        
                  #'status_code',
                        
                  #'status_text',
                        
                  #'hr_created_by',
                        
                    #'get_hr_created_by_obj',
                            
                  #'updated_at',
                        
                  #'hr_updated_by',
                        
                    #'get_hr_updated_by_obj',
                            

        #         )
        fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data

    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        return SystemMailMail.objects.create(**validated_data)

    def update(self, instance, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (mail_sender) ForeignKey POST #############
            # Lấy pk code của mail_sender từ request_data
            if "mail_sender" in validated_data:
                mail_sender = validated_data.pop('mail_sender')
            if "mail_sender" in request_data:
                mail_sender = request_data.pop('mail_sender')
             

            ########### Process (email_template) ForeignKey POST #############
            # Lấy pk code của email_template từ request_data
            if "email_template" in validated_data:
                email_template = validated_data.pop('email_template')
            if "email_template" in request_data:
                email_template = request_data.pop('email_template')
             

            ########### Process (mail_target) ForeignKey POST #############
            # Lấy pk code của mail_target từ request_data
            if "mail_target" in validated_data:
                mail_target = validated_data.pop('mail_target')
            if "mail_target" in request_data:
                mail_target = request_data.pop('mail_target')
             

            ########### Process (addressee) ForeignKey POST #############
            # Lấy pk code của addressee từ request_data
            if "addressee" in validated_data:
                addressee = validated_data.pop('addressee')
            if "addressee" in request_data:
                addressee = request_data.pop('addressee')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
            super(SystemMailMailDetailsSerializer, self).update(instance, validated_data)
            

            return instance
        except Exception as xx:
            print(str(xx))
        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            



class SystemMailMailDeleteSerializer(serializers.ModelSerializer):
    class Meta:
        model = SystemMailMail
        fields = (  
                    'uuid',
                    'name',
                    )
        # #fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data

    def create(self, validated_data):
        try:
            
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            
            

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (mail_sender) ForeignKey POST #############
            # Lấy pk code của mail_sender từ request_data
            if "mail_sender" in validated_data:
                mail_sender = validated_data.pop('mail_sender')
            if "mail_sender" in request_data:
                mail_sender = request_data.pop('mail_sender')
             

            ########### Process (email_template) ForeignKey POST #############
            # Lấy pk code của email_template từ request_data
            if "email_template" in validated_data:
                email_template = validated_data.pop('email_template')
            if "email_template" in request_data:
                email_template = request_data.pop('email_template')
             

            ########### Process (mail_target) ForeignKey POST #############
            # Lấy pk code của mail_target từ request_data
            if "mail_target" in validated_data:
                mail_target = validated_data.pop('mail_target')
            if "mail_target" in request_data:
                mail_target = request_data.pop('mail_target')
             

            ########### Process (addressee) ForeignKey POST #############
            # Lấy pk code của addressee từ request_data
            if "addressee" in validated_data:
                addressee = validated_data.pop('addressee')
            if "addressee" in request_data:
                addressee = request_data.pop('addressee')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
                        
            instance = SystemMailMail.objects.create(**validated_data)
            

            return instance
        except Exception as xx:
            print(str(xx))
        return SystemMailMail.objects.create(**validated_data)

    def update(self, instance, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (mail_sender) ForeignKey POST #############
            # Lấy pk code của mail_sender từ request_data
            if "mail_sender" in validated_data:
                mail_sender = validated_data.pop('mail_sender')
            if "mail_sender" in request_data:
                mail_sender = request_data.pop('mail_sender')
             

            ########### Process (email_template) ForeignKey POST #############
            # Lấy pk code của email_template từ request_data
            if "email_template" in validated_data:
                email_template = validated_data.pop('email_template')
            if "email_template" in request_data:
                email_template = request_data.pop('email_template')
             

            ########### Process (mail_target) ForeignKey POST #############
            # Lấy pk code của mail_target từ request_data
            if "mail_target" in validated_data:
                mail_target = validated_data.pop('mail_target')
            if "mail_target" in request_data:
                mail_target = request_data.pop('mail_target')
             

            ########### Process (addressee) ForeignKey POST #############
            # Lấy pk code của addressee từ request_data
            if "addressee" in validated_data:
                addressee = validated_data.pop('addressee')
            if "addressee" in request_data:
                addressee = request_data.pop('addressee')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
            super(SystemMailMailDeleteSerializer, self).update(instance, validated_data)
            
            return instance
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        # 
        # super(SystemMailMailDeleteSerializer, self).update(instance, validated_data)
        

        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            


# Serializer trả về những thông cần thiết cho việc hiển thị ra danh sách.
class SystemMailMailOnlyViewsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SystemMailMail
        fields = (
                
                'uuid',
                    
                'name',
                    
                'code',
                    
                'created_by',
                    
                'created_at',
                    
                'updated_by',
                    
                'updated_at',
                    
                  'name',
                        
                  #'name',

                        
                  #'code',

                        
                  'friendly_code',
                        
                  #'friendly_code',

                        
                  #'created_by',

                        
                  #'created_at',

                        
                  #'updated_by',

                        
                  'organization',
                        
                    #'get_organization_obj',
                            
                  'mail_sender',
                        
                    #'get_mail_sender_obj',
                            
                  'email_template',
                        
                    #'get_email_template_obj',
                            
                  'mail_target',
                        
                    #'get_mail_target_obj',
                            
                  'addressee',
                        
                    #'get_addressee_obj',
                            
                  'content',
                        
                  #'content',
                
                  'mail_to',
                
                        
                  'status_code',
                        
                  #'status_code',

                        
                  'status_text',
                        
                  #'status_text',

                        
                  'hr_created_by',
                        
                    #'get_hr_created_by_obj',
                            
                  #'updated_at',

                        
                  'hr_updated_by',
                        
                    #'get_hr_updated_by_obj',
                            
                  'name',
                        
                  'mail_sender',
                        
                  'email_template',
                        
                  'mail_target',
                        
                  'addressee',
                        
                  'status_code',
                        
                  'status_text',
                        
                  )
        ##fields = '__all__'
        #depth = 1
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
        # extra_fields = ['author_all']
        # def get_field_names(self, declared_fields, info):
    #     expanded_fields = super(NewspaperSerializer, self).get_field_names(declared_fields, info)

    #     if getattr(self.Meta, 'extra_fields', None):
    #         return expanded_fields + self.Meta.extra_fields
    #     else:
    #         return expanded_fields
    def get_serializer_context(self):
        return self.context['request'].data
    def get_request_user(self):
        return self.context['request'].user
    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            
            

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (mail_sender) ForeignKey POST #############
            # Lấy pk code của mail_sender từ request_data
            if "mail_sender" in validated_data:
                mail_sender = validated_data.pop('mail_sender')
            if "mail_sender" in request_data:
                mail_sender = request_data.pop('mail_sender')
             

            ########### Process (email_template) ForeignKey POST #############
            # Lấy pk code của email_template từ request_data
            if "email_template" in validated_data:
                email_template = validated_data.pop('email_template')
            if "email_template" in request_data:
                email_template = request_data.pop('email_template')
             

            ########### Process (mail_target) ForeignKey POST #############
            # Lấy pk code của mail_target từ request_data
            if "mail_target" in validated_data:
                mail_target = validated_data.pop('mail_target')
            if "mail_target" in request_data:
                mail_target = request_data.pop('mail_target')
             

            ########### Process (addressee) ForeignKey POST #############
            # Lấy pk code của addressee từ request_data
            if "addressee" in validated_data:
                addressee = validated_data.pop('addressee')
            if "addressee" in request_data:
                addressee = request_data.pop('addressee')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
                        
            instance = SystemMailMail.objects.create(**validated_data)
            return instance
            ################################################
            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailMail.objects.none()
 
    def update(self, instance, validated_data):
        try:
            for attr_name in validated_data:
                print('%s = %s' % (attr_name, validated_data[attr_name]))
            request_data = dict(self.get_serializer_context())
            #  validated_data["updated_by"]=self.get_request_user()
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        try:
            
            super(SystemMailMailOnlyViewsSerializer, self).update(instance, validated_data)
            
            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailMail.objects.none()
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            



class SystemMailMailRemoveFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = SystemMailMail
        fields = (
                  'name',
                  'uuid',
                  'code',)
        # fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data
    def get_request_user(self):
        return self.context['request'].user
    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            
            instance = SystemMailMail.objects.create(**validated_data)
            
            ################################################
            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailMail.objects.none()
            
    def update(self, instance, validated_data):
        try:
            for attr_name in validated_data:
                print('%s = %s' % (attr_name, validated_data[attr_name]))
            request_data = dict(self.get_serializer_context())
            # validated_data["updated_by"]=self.get_request_user()
            if 'attach-field' in request_data:
                validated_data[request_data["attach-field"][0]]=None
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        
        SystemMailMail.objects.filter(uuid=instance.uuid).update(**validated_data)
        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret



class SystemMailSentMailCreateSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SystemMailSentMail
        fields = (
                
                'uuid',
                    
                'name',
                    
                'code',
                    
                'created_by',
                    
                'created_at',
                    
                'updated_by',
                    
                'updated_at',
                    
                  'name',
                        
                  'code',
                        
                  'friendly_code',
                        
                  'created_by',
                        
                  'created_at',
                        
                  'updated_by',
                        
                  'updated_at',
                        
                  'organization',
                        
                    #'get_organization_obj',
                            
                  'addressee',
                        
                    #'get_addressee_obj',
                            
                  'mail',
                        
                    #'get_mail_obj',
                            
                  'mail_sender',
                        
                  'to_email',
                        
                  'status_code',
                        
                  'status_text',
                        
                  'hr_created_by',
                        
                    #'get_hr_created_by_obj',
                            
                  'hr_updated_by',
                        
                    #'get_hr_updated_by_obj',
                            
                  'content',
                        
                )
        #fields = '__all__'
        #depth = 1
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
        # extra_fields = ['author_all']
        # def get_field_names(self, declared_fields, info):
    #     expanded_fields = super(NewspaperSerializer, self).get_field_names(declared_fields, info)

    #     if getattr(self.Meta, 'extra_fields', None):
    #         return expanded_fields + self.Meta.extra_fields
    #     else:
    #         return expanded_fields
    def get_serializer_context(self):
        return self.context['request'].data
    def get_request_user(self):
        return self.context['request'].user
    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (addressee) ForeignKey POST #############
            # Lấy pk code của addressee từ request_data
            if "addressee" in validated_data:
                addressee = validated_data.pop('addressee')
            if "addressee" in request_data:
                addressee = request_data.pop('addressee')
             

            ########### Process (mail) ForeignKey POST #############
            # Lấy pk code của mail từ request_data
            if "mail" in validated_data:
                mail = validated_data.pop('mail')
            if "mail" in request_data:
                mail = request_data.pop('mail')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
            instance = SystemMailSentMail.objects.create(**validated_data)
            ################################################
            
            
            # Lấy obj của organization lưu vào SystemMailSentMail
            if "organization" in validated_data:
                for obj in validated_data["organization"]:
                    if obj is not None and isinstance(obj,Organization):
                        validated_data["organization"] = obj
            else:
                if "organization" in locals():
                    for obj_id in organization:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_organization_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["organization"] = obj
                            # instance.save()
                            break
                
                if 'org_id' in self.context['request'].parser_context['kwargs']:
                    try:
                        workspace_org_id_val = self.context['request'].parser_context['kwargs']['org_id']
                        # TH day la uuid
                        if isinstance(uuid.UUID(workspace_org_id_val),uuid.UUID):
                            instance.set_organization_values(workspace_org_id_val)
                            instance.save()
                        else:
                            # neu TH la uuid k xay ra thi se vao day
                            # nhung no se vao ngoai le
                            org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                            if org_id_obj_uuid is not None:
                                instance.set_organization_values(org_id_obj_uuid)
                                instance.save()
                    except Exception as xx:
                        print(xx)
                        # ngoai le nay xay ra khi workspace_org_id_val khong phai uuid
                        # thu tim workspace_org_id_val qua truong friendly_code
                        org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                        if org_id_obj_uuid is not None:
                            instance.set_organization_values(org_id_obj_uuid)
                            instance.save()
                                
                                
            # Lấy obj của addressee lưu vào SystemMailSentMail
            if "addressee" in validated_data:
                for obj in validated_data["addressee"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["addressee"] = obj
            else:
                if "addressee" in locals():
                    for obj_id in addressee:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_addressee_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["addressee"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của mail lưu vào SystemMailSentMail
            if "mail" in validated_data:
                for obj in validated_data["mail"]:
                    if obj is not None and isinstance(obj,SystemMailMail):
                        validated_data["mail"] = obj
            else:
                if "mail" in locals():
                    for obj_id in mail:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_mail_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["mail"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_created_by lưu vào SystemMailSentMail
            if "hr_created_by" in validated_data:
                for obj in validated_data["hr_created_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_created_by"] = obj
            else:
                if "hr_created_by" in locals():
                    for obj_id in hr_created_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_created_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_created_by"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_updated_by lưu vào SystemMailSentMail
            if "hr_updated_by" in validated_data:
                for obj in validated_data["hr_updated_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_updated_by"] = obj
            else:
                if "hr_updated_by" in locals():
                    for obj_id in hr_updated_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_updated_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_updated_by"] = obj
                            # instance.save()
                            break
                
                                

            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailSentMail.objects.none()
 
    def update(self, instance, validated_data):
        try:
            for attr_name in validated_data:
                print('%s = %s' % (attr_name, validated_data[attr_name]))
            request_data = dict(self.get_serializer_context())
            #  validated_data["updated_by"]=self.get_request_user()
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        try:
            
            

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (addressee) ForeignKey POST #############
            # Lấy pk code của addressee từ request_data
            if "addressee" in validated_data:
                addressee = validated_data.pop('addressee')
            if "addressee" in request_data:
                addressee = request_data.pop('addressee')
             

            ########### Process (mail) ForeignKey POST #############
            # Lấy pk code của mail từ request_data
            if "mail" in validated_data:
                mail = validated_data.pop('mail')
            if "mail" in request_data:
                mail = request_data.pop('mail')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
            super(SystemMailSentMailCreateSerializer, self).update(instance, validated_data)
            
            
            # Lấy obj của organization lưu vào SystemMailSentMail
            if "organization" in validated_data:
                for obj in validated_data["organization"]:
                    if obj is not None and isinstance(obj,Organization):
                        validated_data["organization"] = obj
            else:
                if "organization" in locals():
                    for obj_id in organization:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_organization_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["organization"] = obj
                            # instance.save()
                            break
                
                if 'org_id' in self.context['request'].parser_context['kwargs']:
                    try:
                        workspace_org_id_val = self.context['request'].parser_context['kwargs']['org_id']
                        # TH day la uuid
                        if isinstance(uuid.UUID(workspace_org_id_val),uuid.UUID):
                            instance.set_organization_values(workspace_org_id_val)
                            instance.save()
                        else:
                            # neu TH la uuid k xay ra thi se vao day
                            # nhung no se vao ngoai le
                            org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                            if org_id_obj_uuid is not None:
                                instance.set_organization_values(org_id_obj_uuid)
                                instance.save()
                    except Exception as xx:
                        print(xx)
                        # ngoai le nay xay ra khi workspace_org_id_val khong phai uuid
                        # thu tim workspace_org_id_val qua truong friendly_code
                        org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                        if org_id_obj_uuid is not None:
                            instance.set_organization_values(org_id_obj_uuid)
                            instance.save()
                                
                                
            # Lấy obj của addressee lưu vào SystemMailSentMail
            if "addressee" in validated_data:
                for obj in validated_data["addressee"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["addressee"] = obj
            else:
                if "addressee" in locals():
                    for obj_id in addressee:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_addressee_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["addressee"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của mail lưu vào SystemMailSentMail
            if "mail" in validated_data:
                for obj in validated_data["mail"]:
                    if obj is not None and isinstance(obj,SystemMailMail):
                        validated_data["mail"] = obj
            else:
                if "mail" in locals():
                    for obj_id in mail:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_mail_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["mail"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_created_by lưu vào SystemMailSentMail
            if "hr_created_by" in validated_data:
                for obj in validated_data["hr_created_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_created_by"] = obj
            else:
                if "hr_created_by" in locals():
                    for obj_id in hr_created_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_created_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_created_by"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_updated_by lưu vào SystemMailSentMail
            if "hr_updated_by" in validated_data:
                for obj in validated_data["hr_updated_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_updated_by"] = obj
            else:
                if "hr_updated_by" in locals():
                    for obj_id in hr_updated_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_updated_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_updated_by"] = obj
                            # instance.save()
                            break
                
                                

            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailSentMail.objects.none()
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            


            
class SystemMailSentMailUpdateSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SystemMailSentMail
        fields = (
                
                'uuid',
                    
                'name',
                    
                'code',
                    
                'created_by',
                    
                'created_at',
                    
                'updated_by',
                    
                'updated_at',
                    
                  'name',
                        
                  'code',
                        
                  'friendly_code',
                        
                  'created_by',
                        
                  'created_at',
                        
                  'updated_by',
                        
                  'updated_at',
                        
                  'organization',
                        
                    #'get_organization_obj',
                            
                  'addressee',
                        
                    #'get_addressee_obj',
                            
                  'mail',
                        
                    #'get_mail_obj',
                            
                  'mail_sender',
                        
                  'to_email',
                        
                  'status_code',
                        
                  'status_text',
                        
                  'hr_created_by',
                        
                    #'get_hr_created_by_obj',
                            
                  'hr_updated_by',
                        
                    #'get_hr_updated_by_obj',
                            
                  'content',
                        

                )
        # #fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data

    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (addressee) ForeignKey POST #############
            # Lấy pk code của addressee từ request_data
            if "addressee" in validated_data:
                addressee = validated_data.pop('addressee')
            if "addressee" in request_data:
                addressee = request_data.pop('addressee')
             

            ########### Process (mail) ForeignKey POST #############
            # Lấy pk code của mail từ request_data
            if "mail" in validated_data:
                mail = validated_data.pop('mail')
            if "mail" in request_data:
                mail = request_data.pop('mail')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
            instance = SystemMailSentMail.objects.create(**validated_data)
            
            
            # Lấy obj của organization lưu vào SystemMailSentMail
            if "organization" in validated_data:
                for obj in validated_data["organization"]:
                    if obj is not None and isinstance(obj,Organization):
                        validated_data["organization"] = obj
            else:
                if "organization" in locals():
                    for obj_id in organization:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_organization_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["organization"] = obj
                            # instance.save()
                            break
                
                if 'org_id' in self.context['request'].parser_context['kwargs']:
                    try:
                        workspace_org_id_val = self.context['request'].parser_context['kwargs']['org_id']
                        # TH day la uuid
                        if isinstance(uuid.UUID(workspace_org_id_val),uuid.UUID):
                            instance.set_organization_values(workspace_org_id_val)
                            instance.save()
                        else:
                            # neu TH la uuid k xay ra thi se vao day
                            # nhung no se vao ngoai le
                            org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                            if org_id_obj_uuid is not None:
                                instance.set_organization_values(org_id_obj_uuid)
                                instance.save()
                    except Exception as xx:
                        print(xx)
                        # ngoai le nay xay ra khi workspace_org_id_val khong phai uuid
                        # thu tim workspace_org_id_val qua truong friendly_code
                        org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                        if org_id_obj_uuid is not None:
                            instance.set_organization_values(org_id_obj_uuid)
                            instance.save()
                                
                                
            # Lấy obj của addressee lưu vào SystemMailSentMail
            if "addressee" in validated_data:
                for obj in validated_data["addressee"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["addressee"] = obj
            else:
                if "addressee" in locals():
                    for obj_id in addressee:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_addressee_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["addressee"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của mail lưu vào SystemMailSentMail
            if "mail" in validated_data:
                for obj in validated_data["mail"]:
                    if obj is not None and isinstance(obj,SystemMailMail):
                        validated_data["mail"] = obj
            else:
                if "mail" in locals():
                    for obj_id in mail:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_mail_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["mail"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_created_by lưu vào SystemMailSentMail
            if "hr_created_by" in validated_data:
                for obj in validated_data["hr_created_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_created_by"] = obj
            else:
                if "hr_created_by" in locals():
                    for obj_id in hr_created_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_created_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_created_by"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_updated_by lưu vào SystemMailSentMail
            if "hr_updated_by" in validated_data:
                for obj in validated_data["hr_updated_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_updated_by"] = obj
            else:
                if "hr_updated_by" in locals():
                    for obj_id in hr_updated_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_updated_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_updated_by"] = obj
                            # instance.save()
                            break
                
                                

            return instance

        except Exception as xx:
            print(str(xx))

    def update(self, instance, validated_data):
        try:
            
            request_data = dict(self.get_serializer_context())
            

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (addressee) ForeignKey POST #############
            # Lấy pk code của addressee từ request_data
            if "addressee" in validated_data:
                addressee = validated_data.pop('addressee')
            if "addressee" in request_data:
                addressee = request_data.pop('addressee')
             

            ########### Process (mail) ForeignKey POST #############
            # Lấy pk code của mail từ request_data
            if "mail" in validated_data:
                mail = validated_data.pop('mail')
            if "mail" in request_data:
                mail = request_data.pop('mail')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
            super(SystemMailSentMailUpdateSerializer, self).update(instance, validated_data)
            
            
            # Lấy obj của organization lưu vào SystemMailSentMail
            if "organization" in validated_data:
                for obj in validated_data["organization"]:
                    if obj is not None and isinstance(obj,Organization):
                        validated_data["organization"] = obj
            else:
                if "organization" in locals():
                    for obj_id in organization:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_organization_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["organization"] = obj
                            # instance.save()
                            break
                
                if 'org_id' in self.context['request'].parser_context['kwargs']:
                    try:
                        workspace_org_id_val = self.context['request'].parser_context['kwargs']['org_id']
                        # TH day la uuid
                        if isinstance(uuid.UUID(workspace_org_id_val),uuid.UUID):
                            instance.set_organization_values(workspace_org_id_val)
                            instance.save()
                        else:
                            # neu TH la uuid k xay ra thi se vao day
                            # nhung no se vao ngoai le
                            org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                            if org_id_obj_uuid is not None:
                                instance.set_organization_values(org_id_obj_uuid)
                                instance.save()
                    except Exception as xx:
                        print(xx)
                        # ngoai le nay xay ra khi workspace_org_id_val khong phai uuid
                        # thu tim workspace_org_id_val qua truong friendly_code
                        org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                        if org_id_obj_uuid is not None:
                            instance.set_organization_values(org_id_obj_uuid)
                            instance.save()
                                
                                
            # Lấy obj của addressee lưu vào SystemMailSentMail
            if "addressee" in validated_data:
                for obj in validated_data["addressee"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["addressee"] = obj
            else:
                if "addressee" in locals():
                    for obj_id in addressee:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_addressee_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["addressee"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của mail lưu vào SystemMailSentMail
            if "mail" in validated_data:
                for obj in validated_data["mail"]:
                    if obj is not None and isinstance(obj,SystemMailMail):
                        validated_data["mail"] = obj
            else:
                if "mail" in locals():
                    for obj_id in mail:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_mail_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["mail"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_created_by lưu vào SystemMailSentMail
            if "hr_created_by" in validated_data:
                for obj in validated_data["hr_created_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_created_by"] = obj
            else:
                if "hr_created_by" in locals():
                    for obj_id in hr_created_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_created_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_created_by"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_updated_by lưu vào SystemMailSentMail
            if "hr_updated_by" in validated_data:
                for obj in validated_data["hr_updated_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_updated_by"] = obj
            else:
                if "hr_updated_by" in locals():
                    for obj_id in hr_updated_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_updated_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_updated_by"] = obj
                            # instance.save()
                            break
                
                                

            return instance
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        # super(SystemMailSentMailUpdateSerializer, self).update(instance, validated_data)

        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            

            
class SystemMailSentMailDetailsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SystemMailSentMail
        # fields = (
        #             
                #'uuid',
                    
                #'name',
                    
                #'code',
                    
                #'created_by',
                    
                #'created_at',
                    
                #'updated_by',
                    
                #'updated_at',
                    
                  #'name',
                        
                  #'code',
                        
                  #'friendly_code',
                        
                  #'created_by',
                        
                  #'created_at',
                        
                  #'updated_by',
                        
                  #'updated_at',
                        
                  #'organization',
                        
                    #'get_organization_obj',
                            
                  #'addressee',
                        
                    #'get_addressee_obj',
                            
                  #'mail',
                        
                    #'get_mail_obj',
                            
                  #'mail_sender',
                        
                  #'to_email',
                        
                  #'status_code',
                        
                  #'status_text',
                        
                  #'hr_created_by',
                        
                    #'get_hr_created_by_obj',
                            
                  #'hr_updated_by',
                        
                    #'get_hr_updated_by_obj',
                            
                  #'content',
                        

        #         )
        fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data

    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        return SystemMailSentMail.objects.create(**validated_data)

    def update(self, instance, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (addressee) ForeignKey POST #############
            # Lấy pk code của addressee từ request_data
            if "addressee" in validated_data:
                addressee = validated_data.pop('addressee')
            if "addressee" in request_data:
                addressee = request_data.pop('addressee')
             

            ########### Process (mail) ForeignKey POST #############
            # Lấy pk code của mail từ request_data
            if "mail" in validated_data:
                mail = validated_data.pop('mail')
            if "mail" in request_data:
                mail = request_data.pop('mail')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
            super(SystemMailSentMailDetailsSerializer, self).update(instance, validated_data)
            

            return instance
        except Exception as xx:
            print(str(xx))
        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            



class SystemMailSentMailDeleteSerializer(serializers.ModelSerializer):
    class Meta:
        model = SystemMailSentMail
        fields = (  
                    'uuid',
                    'name',
                    )
        # #fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data

    def create(self, validated_data):
        try:
            
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            
            

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (addressee) ForeignKey POST #############
            # Lấy pk code của addressee từ request_data
            if "addressee" in validated_data:
                addressee = validated_data.pop('addressee')
            if "addressee" in request_data:
                addressee = request_data.pop('addressee')
             

            ########### Process (mail) ForeignKey POST #############
            # Lấy pk code của mail từ request_data
            if "mail" in validated_data:
                mail = validated_data.pop('mail')
            if "mail" in request_data:
                mail = request_data.pop('mail')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
                        
            instance = SystemMailSentMail.objects.create(**validated_data)
            

            return instance
        except Exception as xx:
            print(str(xx))
        return SystemMailSentMail.objects.create(**validated_data)

    def update(self, instance, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (addressee) ForeignKey POST #############
            # Lấy pk code của addressee từ request_data
            if "addressee" in validated_data:
                addressee = validated_data.pop('addressee')
            if "addressee" in request_data:
                addressee = request_data.pop('addressee')
             

            ########### Process (mail) ForeignKey POST #############
            # Lấy pk code của mail từ request_data
            if "mail" in validated_data:
                mail = validated_data.pop('mail')
            if "mail" in request_data:
                mail = request_data.pop('mail')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
            super(SystemMailSentMailDeleteSerializer, self).update(instance, validated_data)
            
            return instance
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        # 
        # super(SystemMailSentMailDeleteSerializer, self).update(instance, validated_data)
        

        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            


# Serializer trả về những thông cần thiết cho việc hiển thị ra danh sách.
class SystemMailSentMailOnlyViewsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SystemMailSentMail
        fields = (
                
                'uuid',
                    
                'name',
                    
                'code',
                    
                'created_by',
                    
                'created_at',
                    
                'updated_by',
                    
                'updated_at',
                    
                  'name',
                        
                  #'name',

                        
                  #'code',

                        
                  'friendly_code',
                        
                  #'friendly_code',

                        
                  #'created_by',

                        
                  #'created_at',

                        
                  #'updated_by',

                        
                  #'updated_at',

                        
                  'organization',
                        
                    #'get_organization_obj',
                            
                  'addressee',
                        
                    #'get_addressee_obj',
                            
                  'mail',
                        
                    #'get_mail_obj',
                            
                  'mail_sender',
                        
                  #'mail_sender',

                        
                  'to_email',
                        
                  #'to_email',

                        
                  'status_code',
                        
                  #'status_code',

                        
                  'status_text',
                        
                  #'status_text',

                        
                  'hr_created_by',
                        
                    #'get_hr_created_by_obj',
                            
                  'hr_updated_by',
                        
                    #'get_hr_updated_by_obj',
                            
                  'content',
                        
                  #'content',

                        
                  'name',
                        
                  'mail',
                        
                  'addressee',
                        
                  'to_email',
                        
                  'status_code',
                        
                  'status_text',
                        
                  )
        ##fields = '__all__'
        #depth = 1
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
        # extra_fields = ['author_all']
        # def get_field_names(self, declared_fields, info):
    #     expanded_fields = super(NewspaperSerializer, self).get_field_names(declared_fields, info)

    #     if getattr(self.Meta, 'extra_fields', None):
    #         return expanded_fields + self.Meta.extra_fields
    #     else:
    #         return expanded_fields
    def get_serializer_context(self):
        return self.context['request'].data
    def get_request_user(self):
        return self.context['request'].user
    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            
            

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (addressee) ForeignKey POST #############
            # Lấy pk code của addressee từ request_data
            if "addressee" in validated_data:
                addressee = validated_data.pop('addressee')
            if "addressee" in request_data:
                addressee = request_data.pop('addressee')
             

            ########### Process (mail) ForeignKey POST #############
            # Lấy pk code của mail từ request_data
            if "mail" in validated_data:
                mail = validated_data.pop('mail')
            if "mail" in request_data:
                mail = request_data.pop('mail')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
                        
            instance = SystemMailSentMail.objects.create(**validated_data)
            return instance
            ################################################
            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailSentMail.objects.none()
 
    def update(self, instance, validated_data):
        try:
            for attr_name in validated_data:
                print('%s = %s' % (attr_name, validated_data[attr_name]))
            request_data = dict(self.get_serializer_context())
            #  validated_data["updated_by"]=self.get_request_user()
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        try:
            
            super(SystemMailSentMailOnlyViewsSerializer, self).update(instance, validated_data)
            
            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailSentMail.objects.none()
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            



class SystemMailSentMailRemoveFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = SystemMailSentMail
        fields = (
                  'name',
                  'uuid',
                  'code',)
        # fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data
    def get_request_user(self):
        return self.context['request'].user
    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            
            instance = SystemMailSentMail.objects.create(**validated_data)
            
            ################################################
            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailSentMail.objects.none()
            
    def update(self, instance, validated_data):
        try:
            for attr_name in validated_data:
                print('%s = %s' % (attr_name, validated_data[attr_name]))
            request_data = dict(self.get_serializer_context())
            # validated_data["updated_by"]=self.get_request_user()
            if 'attach-field' in request_data:
                validated_data[request_data["attach-field"][0]]=None
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        
        SystemMailSentMail.objects.filter(uuid=instance.uuid).update(**validated_data)
        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret



class SystemMailServerConfigCreateSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SystemMailServerConfig
        fields = (
                
                'uuid',
                    
                'name',
                    
                'code',
                    
                'created_by',
                    
                'created_at',
                    
                'updated_by',
                    
                'updated_at',
                                            
                'host',
                    
                'port',
                    
                'port_smtp',
                    
                'is_ssl',
                    
                'limit_sending',
                        
                #   'active',
                        
                'is_default',
                    
                'hr_created_by',
                    
                #'get_hr_created_by_obj',
                        
                'hr_updated_by',
                    
                #'get_hr_updated_by_obj',
                        
                'updated_at',
                    
                'organization',
                    
                #'get_organization_obj',
                            
                )
        #fields = '__all__'
        #depth = 1
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
        # extra_fields = ['author_all']
        # def get_field_names(self, declared_fields, info):
    #     expanded_fields = super(NewspaperSerializer, self).get_field_names(declared_fields, info)

    #     if getattr(self.Meta, 'extra_fields', None):
    #         return expanded_fields + self.Meta.extra_fields
    #     else:
    #         return expanded_fields
    def get_serializer_context(self):
        return self.context['request'].data
    def get_request_user(self):
        return self.context['request'].user
    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            

            ########### Process (is_ssl) BooleanField POST #############
            if "is_ssl" not in validated_data and "is_ssl" in request_data:
                if request_data['is_ssl'][0] == "true":
                    validated_data["is_ssl"] = True
                elif  request_data['is_ssl'][0] == "false":
                    validated_data["is_ssl"] = False
            elif "is_ssl" not in request_data:
                validated_data["is_ssl"] = None
                            

            ########### Process (is_default) BooleanField POST #############
            if "is_default" not in validated_data and "is_default" in request_data:
                if request_data['is_default'][0] == "true":
                    validated_data["is_default"] = True
                elif  request_data['is_default'][0] == "false":
                    validated_data["is_default"] = False
            elif "is_default" not in request_data:
                validated_data["is_default"] = True


            ########### Process (is_ssl) BooleanField POST #############
            if "is_ssl" not in validated_data and "is_ssl" in request_data:
                if request_data['is_ssl'][0] == "true":
                    validated_data["is_ssl"] = True
                elif  request_data['is_ssl'][0] == "false":
                    validated_data["is_ssl"] = False
            elif "is_ssl" not in request_data:
                validated_data["is_ssl"] = True
                            

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             
            instance = SystemMailServerConfig.objects.create(**validated_data)
            ################################################
            
            
            # Lấy obj của hr_created_by lưu vào SystemMailServerConfig
            if "hr_created_by" in validated_data:
                for obj in validated_data["hr_created_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_created_by"] = obj
            else:
                if "hr_created_by" in locals():
                    for obj_id in hr_created_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_created_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_created_by"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_updated_by lưu vào SystemMailServerConfig
            if "hr_updated_by" in validated_data:
                for obj in validated_data["hr_updated_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_updated_by"] = obj
            else:
                if "hr_updated_by" in locals():
                    for obj_id in hr_updated_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_updated_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_updated_by"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của organization lưu vào SystemMailServerConfig
            if "organization" in validated_data:
                for obj in validated_data["organization"]:
                    if obj is not None and isinstance(obj,Organization):
                        validated_data["organization"] = obj
            else:
                if "organization" in locals():
                    for obj_id in organization:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_organization_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["organization"] = obj
                            # instance.save()
                            break
                
                if 'org_id' in self.context['request'].parser_context['kwargs']:
                    try:
                        workspace_org_id_val = self.context['request'].parser_context['kwargs']['org_id']
                        # TH day la uuid
                        if isinstance(uuid.UUID(workspace_org_id_val),uuid.UUID):
                            instance.set_organization_values(workspace_org_id_val)
                            instance.save()
                        else:
                            # neu TH la uuid k xay ra thi se vao day
                            # nhung no se vao ngoai le
                            org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                            if org_id_obj_uuid is not None:
                                instance.set_organization_values(org_id_obj_uuid)
                                instance.save()
                    except Exception as xx:
                        print(xx)
                        # ngoai le nay xay ra khi workspace_org_id_val khong phai uuid
                        # thu tim workspace_org_id_val qua truong friendly_code
                        org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                        if org_id_obj_uuid is not None:
                            instance.set_organization_values(org_id_obj_uuid)
                            instance.save()
                                
                                
            all_systemcserverconfigs = SystemMailServerConfig.objects.filter(is_default=True)
            for systemserverconfig in all_systemcserverconfigs:
                if instance != systemserverconfig:
                    systemserverconfig.is_default = False
                    systemserverconfig.save()
            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailServerConfig.objects.none()
 
    def update(self, instance, validated_data):
        try:
            for attr_name in validated_data:
                print('%s = %s' % (attr_name, validated_data[attr_name]))
            request_data = dict(self.get_serializer_context())
            #  validated_data["updated_by"]=self.get_request_user()
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        try:
            
            

            ########### Process (is_ssl) BooleanField POST #############
            if "is_ssl" not in validated_data and "is_ssl" in request_data:
                if  request_data['is_ssl'][0] == "true":
                    validated_data["is_ssl"] = True
                elif  request_data['is_ssl'][0] == "false":
                    validated_data["is_ssl"] = False
            elif "is_ssl" not in request_data:
                validated_data["is_ssl"] = None
                            

            ########### Process (is_default) BooleanField POST #############
            if "is_default" not in validated_data and "is_default" in request_data:
                if  request_data['is_default'][0] == "true":
                    validated_data["is_default"] = True
                elif  request_data['is_default'][0] == "false":
                    validated_data["is_default"] = False
            elif "is_default" not in request_data:
                validated_data["is_default"] = True
                            

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             
            super(SystemMailServerConfigCreateSerializer, self).update(instance, validated_data)
            
            
            # Lấy obj của hr_created_by lưu vào SystemMailServerConfig
            if "hr_created_by" in validated_data:
                for obj in validated_data["hr_created_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_created_by"] = obj
            else:
                if "hr_created_by" in locals():
                    for obj_id in hr_created_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_created_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_created_by"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_updated_by lưu vào SystemMailServerConfig
            if "hr_updated_by" in validated_data:
                for obj in validated_data["hr_updated_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_updated_by"] = obj
            else:
                if "hr_updated_by" in locals():
                    for obj_id in hr_updated_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_updated_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_updated_by"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của organization lưu vào SystemMailServerConfig
            if "organization" in validated_data:
                for obj in validated_data["organization"]:
                    if obj is not None and isinstance(obj,Organization):
                        validated_data["organization"] = obj
            else:
                if "organization" in locals():
                    for obj_id in organization:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_organization_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["organization"] = obj
                            # instance.save()
                            break
                
                if 'org_id' in self.context['request'].parser_context['kwargs']:
                    try:
                        workspace_org_id_val = self.context['request'].parser_context['kwargs']['org_id']
                        # TH day la uuid
                        if isinstance(uuid.UUID(workspace_org_id_val),uuid.UUID):
                            instance.set_organization_values(workspace_org_id_val)
                            instance.save()
                        else:
                            # neu TH la uuid k xay ra thi se vao day
                            # nhung no se vao ngoai le
                            org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                            if org_id_obj_uuid is not None:
                                instance.set_organization_values(org_id_obj_uuid)
                                instance.save()
                    except Exception as xx:
                        print(xx)
                        # ngoai le nay xay ra khi workspace_org_id_val khong phai uuid
                        # thu tim workspace_org_id_val qua truong friendly_code
                        org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                        if org_id_obj_uuid is not None:
                            instance.set_organization_values(org_id_obj_uuid)
                            instance.save()
                                
                                

            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailServerConfig.objects.none()
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            


            
class SystemMailServerConfigUpdateSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SystemMailServerConfig
        fields = (
                
                'uuid',
                    
                'name',
                    
                'code',
                    
                'created_by',
                    
                'created_at',
                    
                'updated_by',
                    
                'updated_at',
                    
                  'name',
                        
                  'code',
                        
                  'friendly_code',
                        
                  'created_by',
                        
                  'created_at',
                        
                  'updated_by',
                        
                  'host',
                        
                  'port',
                        
                  'port_smtp',
                        
                  'is_ssl',
                        
                  'limit_sending',
                                                
                  'is_default',
                        
                  'hr_created_by',
                        
                    #'get_hr_created_by_obj',
                            
                  'hr_updated_by',
                        
                    #'get_hr_updated_by_obj',
                            
                  'updated_at',
                        
                  'organization',
                        
                    #'get_organization_obj',
                            

                )
        # #fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data

    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            

            ########### Process (is_ssl) BooleanField POST #############
            if "is_ssl" not in validated_data and "is_ssl" in request_data:
                if request_data['is_ssl'][0] == "true":
                    validated_data["is_ssl"] = True
                elif  request_data['is_ssl'][0] == "false":
                    validated_data["is_ssl"] = False
            elif "is_ssl" not in request_data:
                validated_data["is_ssl"] = None
                            

            ########### Process (is_default) BooleanField POST #############
            if "is_default" not in validated_data and "is_default" in request_data:
                if request_data['is_default'][0] == "true":
                    validated_data["is_default"] = True
                elif  request_data['is_default'][0] == "false":
                    validated_data["is_default"] = False
            elif "is_default" not in request_data:
                validated_data["is_default"] = True
                            

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             
            instance = SystemMailServerConfig.objects.create(**validated_data)
            
            
            # Lấy obj của hr_created_by lưu vào SystemMailServerConfig
            if "hr_created_by" in validated_data:
                for obj in validated_data["hr_created_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_created_by"] = obj
            else:
                if "hr_created_by" in locals():
                    for obj_id in hr_created_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_created_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_created_by"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_updated_by lưu vào SystemMailServerConfig
            if "hr_updated_by" in validated_data:
                for obj in validated_data["hr_updated_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_updated_by"] = obj
            else:
                if "hr_updated_by" in locals():
                    for obj_id in hr_updated_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_updated_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_updated_by"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của organization lưu vào SystemMailServerConfig
            if "organization" in validated_data:
                for obj in validated_data["organization"]:
                    if obj is not None and isinstance(obj,Organization):
                        validated_data["organization"] = obj
            else:
                if "organization" in locals():
                    for obj_id in organization:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_organization_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["organization"] = obj
                            # instance.save()
                            break
                
                if 'org_id' in self.context['request'].parser_context['kwargs']:
                    try:
                        workspace_org_id_val = self.context['request'].parser_context['kwargs']['org_id']
                        # TH day la uuid
                        if isinstance(uuid.UUID(workspace_org_id_val),uuid.UUID):
                            instance.set_organization_values(workspace_org_id_val)
                            instance.save()
                        else:
                            # neu TH la uuid k xay ra thi se vao day
                            # nhung no se vao ngoai le
                            org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                            if org_id_obj_uuid is not None:
                                instance.set_organization_values(org_id_obj_uuid)
                                instance.save()
                    except Exception as xx:
                        print(xx)
                        # ngoai le nay xay ra khi workspace_org_id_val khong phai uuid
                        # thu tim workspace_org_id_val qua truong friendly_code
                        org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                        if org_id_obj_uuid is not None:
                            instance.set_organization_values(org_id_obj_uuid)
                            instance.save()
                                
                                

            return instance

        except Exception as xx:
            print(str(xx))

    def update(self, instance, validated_data):
        try:
            
            request_data = dict(self.get_serializer_context())
            

            ########### Process (is_ssl) BooleanField POST #############
            if "is_ssl" not in validated_data and "is_ssl" in request_data:
                if  request_data['is_ssl'][0] == "true":
                    validated_data["is_ssl"] = True
                elif  request_data['is_ssl'][0] == "false":
                    validated_data["is_ssl"] = False
            elif "is_ssl" not in request_data:
                validated_data["is_ssl"] = None
                            

            ########### Process (is_default) BooleanField POST #############
            if "is_default" not in validated_data and "is_default" in request_data:
                if  request_data['is_default'][0] == "true":
                    validated_data["is_default"] = True
                elif  request_data['is_default'][0] == "false":
                    validated_data["is_default"] = False
            elif "is_default" not in request_data:
                validated_data["is_default"] = True
                            

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             
            super(SystemMailServerConfigUpdateSerializer, self).update(instance, validated_data)
            
            
            # Lấy obj của hr_created_by lưu vào SystemMailServerConfig
            if "hr_created_by" in validated_data:
                for obj in validated_data["hr_created_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_created_by"] = obj
            else:
                if "hr_created_by" in locals():
                    for obj_id in hr_created_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_created_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_created_by"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_updated_by lưu vào SystemMailServerConfig
            if "hr_updated_by" in validated_data:
                for obj in validated_data["hr_updated_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_updated_by"] = obj
            else:
                if "hr_updated_by" in locals():
                    for obj_id in hr_updated_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_updated_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_updated_by"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của organization lưu vào SystemMailServerConfig
            if "organization" in validated_data:
                for obj in validated_data["organization"]:
                    if obj is not None and isinstance(obj,Organization):
                        validated_data["organization"] = obj
            else:
                if "organization" in locals():
                    for obj_id in organization:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_organization_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["organization"] = obj
                            # instance.save()
                            break
                
                if 'org_id' in self.context['request'].parser_context['kwargs']:
                    try:
                        workspace_org_id_val = self.context['request'].parser_context['kwargs']['org_id']
                        # TH day la uuid
                        if isinstance(uuid.UUID(workspace_org_id_val),uuid.UUID):
                            instance.set_organization_values(workspace_org_id_val)
                            instance.save()
                        else:
                            # neu TH la uuid k xay ra thi se vao day
                            # nhung no se vao ngoai le
                            org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                            if org_id_obj_uuid is not None:
                                instance.set_organization_values(org_id_obj_uuid)
                                instance.save()
                    except Exception as xx:
                        print(xx)
                        # ngoai le nay xay ra khi workspace_org_id_val khong phai uuid
                        # thu tim workspace_org_id_val qua truong friendly_code
                        org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                        if org_id_obj_uuid is not None:
                            instance.set_organization_values(org_id_obj_uuid)
                            instance.save()
                                
            all_systemcserverconfigs = SystemMailServerConfig.objects.filter(is_default=True)
            for systemserverconfig in all_systemcserverconfigs:
                if instance != systemserverconfig:
                    systemserverconfig.is_default = False
                    systemserverconfig.save()
            # self.is_default = True

            return instance
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        # super(SystemMailServerConfigUpdateSerializer, self).update(instance, validated_data)

        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            

            
class SystemMailServerConfigDetailsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SystemMailServerConfig
        # fields = (
        #             
                #'uuid',
                    
                #'name',
                    
                #'code',
                    
                #'created_by',
                    
                #'created_at',
                    
                #'updated_by',
                    
                #'updated_at',
                    
                  #'name',
                        
                  #'code',
                        
                  #'friendly_code',
                        
                  #'created_by',
                        
                  #'created_at',
                        
                  #'updated_by',
                        
                  #'host',
                        
                  #'port',
                        
                  #'port_smtp',
                        
                  #'is_ssl',
                        
                  #'limit_sending',
                        
                  #'active',
                        
                  #'is_default',
                        
                  #'hr_created_by',
                        
                    #'get_hr_created_by_obj',
                            
                  #'hr_updated_by',
                        
                    #'get_hr_updated_by_obj',
                            
                  #'updated_at',
                        
                  #'organization',
                        
                    #'get_organization_obj',
                            

        #         )
        fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data

    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        return SystemMailServerConfig.objects.create(**validated_data)

    def update(self, instance, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            

            ########### Process (is_ssl) BooleanField POST #############
            if "is_ssl" not in validated_data and "is_ssl" in request_data:
                if  request_data['is_ssl'][0] == "true":
                    validated_data["is_ssl"] = True
                elif  request_data['is_ssl'][0] == "false":
                    validated_data["is_ssl"] = False
            elif "is_ssl" not in request_data:
                validated_data["is_ssl"] = None
                            

            ########### Process (is_default) BooleanField POST #############
            if "is_default" not in validated_data and "is_default" in request_data:
                if  request_data['is_default'][0] == "true":
                    validated_data["is_default"] = True
                elif  request_data['is_default'][0] == "false":
                    validated_data["is_default"] = False
            elif "is_default" not in request_data:
                validated_data["is_default"] = True
                            

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             
            super(SystemMailServerConfigDetailsSerializer, self).update(instance, validated_data)
            

            return instance
        except Exception as xx:
            print(str(xx))
        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            



class SystemMailServerConfigDeleteSerializer(serializers.ModelSerializer):
    class Meta:
        model = SystemMailServerConfig
        fields = (  
                    'uuid',
                    'name',
                    )
        # #fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data

    def create(self, validated_data):
        try:
            
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            
            

            ########### Process (is_ssl) BooleanField POST #############
            if "is_ssl" not in validated_data and "is_ssl" in request_data:
                if request_data['is_ssl'][0] == "true":
                    validated_data["is_ssl"] = True
                elif  request_data['is_ssl'][0] == "false":
                    validated_data["is_ssl"] = False
            elif "is_ssl" not in request_data:
                validated_data["is_ssl"] = None
                            

            ########### Process (is_default) BooleanField POST #############
            if "is_default" not in validated_data and "is_default" in request_data:
                if request_data['is_default'][0] == "true":
                    validated_data["is_default"] = True
                elif  request_data['is_default'][0] == "false":
                    validated_data["is_default"] = False
            elif "is_default" not in request_data:
                validated_data["is_default"] = True
                            

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             
                        
            instance = SystemMailServerConfig.objects.create(**validated_data)
            

            return instance
        except Exception as xx:
            print(str(xx))
        return SystemMailServerConfig.objects.create(**validated_data)

    def update(self, instance, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            

            ########### Process (is_ssl) BooleanField POST #############
            if "is_ssl" not in validated_data and "is_ssl" in request_data:
                if  request_data['is_ssl'][0] == "true":
                    validated_data["is_ssl"] = True
                elif  request_data['is_ssl'][0] == "false":
                    validated_data["is_ssl"] = False
            elif "is_ssl" not in request_data:
                validated_data["is_ssl"] = None
                            

            ########### Process (is_default) BooleanField POST #############
            if "is_default" not in validated_data and "is_default" in request_data:
                if  request_data['is_default'][0] == "true":
                    validated_data["is_default"] = True
                elif  request_data['is_default'][0] == "false":
                    validated_data["is_default"] = False
            elif "is_default" not in request_data:
                validated_data["is_default"] = True
                            

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             
            super(SystemMailServerConfigDeleteSerializer, self).update(instance, validated_data)
            
            return instance
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        # 
        # super(SystemMailServerConfigDeleteSerializer, self).update(instance, validated_data)
        

        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            


# Serializer trả về những thông cần thiết cho việc hiển thị ra danh sách.
class SystemMailServerConfigOnlyViewsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SystemMailServerConfig
        fields = (
                
                'uuid',
                    
                'name',
                    
                'code',
                    
                'created_by',
                    
                'created_at',
                    
                'updated_by',
                    
                'updated_at',
                    
                  'name',
                        
                  #'name',

                        
                  #'code',

                        
                  'friendly_code',
                        
                  #'friendly_code',

                        
                  #'created_by',

                        
                  #'created_at',

                        
                  #'updated_by',

                        
                  'host',
                        
                  #'host',

                        
                  'port',
                        
                  #'port',

                        
                  'port_smtp',
                        
                  #'port_smtp',

                        
                  'is_ssl',
                        
                  #'is_ssl',

                        
                  'limit_sending',
                        
                  #'limit_sending',

                        
                  #'active',

                        
                  'is_default',
                        
                  #'is_default',

                        
                  'hr_created_by',
                        
                    #'get_hr_created_by_obj',
                            
                  'hr_updated_by',
                        
                    #'get_hr_updated_by_obj',
                            
                  #'updated_at',

                        
                  'organization',
                        
                    #'get_organization_obj',
                            
                  )
        ##fields = '__all__'
        #depth = 1
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
        # extra_fields = ['author_all']
        # def get_field_names(self, declared_fields, info):
    #     expanded_fields = super(NewspaperSerializer, self).get_field_names(declared_fields, info)

    #     if getattr(self.Meta, 'extra_fields', None):
    #         return expanded_fields + self.Meta.extra_fields
    #     else:
    #         return expanded_fields
    def get_serializer_context(self):
        return self.context['request'].data
    def get_request_user(self):
        return self.context['request'].user
    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            
            

            ########### Process (is_ssl) BooleanField POST #############
            if "is_ssl" not in validated_data and "is_ssl" in request_data:
                if request_data['is_ssl'][0] == "true":
                    validated_data["is_ssl"] = True
                elif  request_data['is_ssl'][0] == "false":
                    validated_data["is_ssl"] = False
            elif "is_ssl" not in request_data:
                validated_data["is_ssl"] = None
                            

            ########### Process (is_default) BooleanField POST #############
            if "is_default" not in validated_data and "is_default" in request_data:
                if request_data['is_default'][0] == "true":
                    validated_data["is_default"] = True
                elif  request_data['is_default'][0] == "false":
                    validated_data["is_default"] = False
            elif "is_default" not in request_data:
                validated_data["is_default"] = True
                            

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             
                        
            instance = SystemMailServerConfig.objects.create(**validated_data)
            return instance
            ################################################
            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailServerConfig.objects.none()
 
    def update(self, instance, validated_data):
        try:
            for attr_name in validated_data:
                print('%s = %s' % (attr_name, validated_data[attr_name]))
            request_data = dict(self.get_serializer_context())
            #  validated_data["updated_by"]=self.get_request_user()
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        try:
            
            super(SystemMailServerConfigOnlyViewsSerializer, self).update(instance, validated_data)
            
            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailServerConfig.objects.none()
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            



class SystemMailServerConfigRemoveFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = SystemMailServerConfig
        fields = (
                  'name',
                  'uuid',
                  'code',)
        # fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data
    def get_request_user(self):
        return self.context['request'].user
    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            
            instance = SystemMailServerConfig.objects.create(**validated_data)
            
            ################################################
            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailServerConfig.objects.none()
            
    def update(self, instance, validated_data):
        try:
            for attr_name in validated_data:
                print('%s = %s' % (attr_name, validated_data[attr_name]))
            request_data = dict(self.get_serializer_context())
            # validated_data["updated_by"]=self.get_request_user()
            if 'attach-field' in request_data:
                validated_data[request_data["attach-field"][0]]=None
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        
        SystemMailServerConfig.objects.filter(uuid=instance.uuid).update(**validated_data)
        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret



class SystemMailTemplateCreateSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SystemMailTemplate
        fields = (
                
                'uuid',
                    
                'name',
                    
                'code',
                    
                'created_by',
                    
                'created_at',
                    
                'updated_by',
                    
                'updated_at',
                    
                  'name',
                        
                  'code',
                        
                  'friendly_code',
                        
                  'created_by',
                        
                  'updated_by',
                        
                  'updated_at',
                        
                  'email_type',
                        
                    #'get_email_type_obj',
                            
                  'content',
                        
                  'is_default',
                        
                  'organization',
                        
                    #'get_organization_obj',
                            
                  'hr_created_by',
                        
                    #'get_hr_created_by_obj',
                            
                  'hr_updated_by',
                        
                    #'get_hr_updated_by_obj',
                            
                  'created_at',
                        
                )
        #fields = '__all__'
        #depth = 1
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
        # extra_fields = ['author_all']
        # def get_field_names(self, declared_fields, info):
    #     expanded_fields = super(NewspaperSerializer, self).get_field_names(declared_fields, info)

    #     if getattr(self.Meta, 'extra_fields', None):
    #         return expanded_fields + self.Meta.extra_fields
    #     else:
    #         return expanded_fields
    def get_serializer_context(self):
        return self.context['request'].data
    def get_request_user(self):
        return self.context['request'].user
    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            

            ########### Process (email_type) ForeignKey POST #############
            # Lấy pk code của email_type từ request_data
            if "email_type" in validated_data:
                email_type = validated_data.pop('email_type')
            if "email_type" in request_data:
                email_type = request_data.pop('email_type')
             

            ########### Process (is_default) BooleanField POST #############
            if "is_default" not in validated_data and "is_default" in request_data:
                if request_data['is_default'][0] == "true":
                    validated_data["is_default"] = True
                elif  request_data['is_default'][0] == "false":
                    validated_data["is_default"] = False
            elif "is_default" not in request_data:
                validated_data["is_default"] = None
                            

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
            instance = SystemMailTemplate.objects.create(**validated_data)
            ################################################
            
            
            # Lấy obj của email_type lưu vào SystemMailTemplate
            if "email_type" in validated_data:
                for obj in validated_data["email_type"]:
                    if obj is not None and isinstance(obj,SystemMailType):
                        validated_data["email_type"] = obj
            else:
                if "email_type" in locals():
                    for obj_id in email_type:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_email_type_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["email_type"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của organization lưu vào SystemMailTemplate
            if "organization" in validated_data:
                for obj in validated_data["organization"]:
                    if obj is not None and isinstance(obj,Organization):
                        validated_data["organization"] = obj
            else:
                if "organization" in locals():
                    for obj_id in organization:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_organization_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["organization"] = obj
                            # instance.save()
                            break
                
                if 'org_id' in self.context['request'].parser_context['kwargs']:
                    try:
                        workspace_org_id_val = self.context['request'].parser_context['kwargs']['org_id']
                        # TH day la uuid
                        if isinstance(uuid.UUID(workspace_org_id_val),uuid.UUID):
                            instance.set_organization_values(workspace_org_id_val)
                            instance.save()
                        else:
                            # neu TH la uuid k xay ra thi se vao day
                            # nhung no se vao ngoai le
                            org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                            if org_id_obj_uuid is not None:
                                instance.set_organization_values(org_id_obj_uuid)
                                instance.save()
                    except Exception as xx:
                        print(xx)
                        # ngoai le nay xay ra khi workspace_org_id_val khong phai uuid
                        # thu tim workspace_org_id_val qua truong friendly_code
                        org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                        if org_id_obj_uuid is not None:
                            instance.set_organization_values(org_id_obj_uuid)
                            instance.save()
                                
                                
            # Lấy obj của hr_created_by lưu vào SystemMailTemplate
            if "hr_created_by" in validated_data:
                for obj in validated_data["hr_created_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_created_by"] = obj
            else:
                if "hr_created_by" in locals():
                    for obj_id in hr_created_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_created_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_created_by"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_updated_by lưu vào SystemMailTemplate
            if "hr_updated_by" in validated_data:
                for obj in validated_data["hr_updated_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_updated_by"] = obj
            else:
                if "hr_updated_by" in locals():
                    for obj_id in hr_updated_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_updated_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_updated_by"] = obj
                            # instance.save()
                            break
                
                                

            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailTemplate.objects.none()
 
    def update(self, instance, validated_data):
        try:
            for attr_name in validated_data:
                print('%s = %s' % (attr_name, validated_data[attr_name]))
            request_data = dict(self.get_serializer_context())
            #  validated_data["updated_by"]=self.get_request_user()
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        try:
            
            

            ########### Process (email_type) ForeignKey POST #############
            # Lấy pk code của email_type từ request_data
            if "email_type" in validated_data:
                email_type = validated_data.pop('email_type')
            if "email_type" in request_data:
                email_type = request_data.pop('email_type')
             

            ########### Process (is_default) BooleanField POST #############
            if "is_default" not in validated_data and "is_default" in request_data:
                if  request_data['is_default'][0] == "true":
                    validated_data["is_default"] = True
                elif  request_data['is_default'][0] == "false":
                    validated_data["is_default"] = False
            elif "is_default" not in request_data:
                validated_data["is_default"] = None
                            

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
            super(SystemMailTemplateCreateSerializer, self).update(instance, validated_data)
            
            
            # Lấy obj của email_type lưu vào SystemMailTemplate
            if "email_type" in validated_data:
                for obj in validated_data["email_type"]:
                    if obj is not None and isinstance(obj,SystemMailType):
                        validated_data["email_type"] = obj
            else:
                if "email_type" in locals():
                    for obj_id in email_type:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_email_type_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["email_type"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của organization lưu vào SystemMailTemplate
            if "organization" in validated_data:
                for obj in validated_data["organization"]:
                    if obj is not None and isinstance(obj,Organization):
                        validated_data["organization"] = obj
            else:
                if "organization" in locals():
                    for obj_id in organization:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_organization_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["organization"] = obj
                            # instance.save()
                            break
                
                if 'org_id' in self.context['request'].parser_context['kwargs']:
                    try:
                        workspace_org_id_val = self.context['request'].parser_context['kwargs']['org_id']
                        # TH day la uuid
                        if isinstance(uuid.UUID(workspace_org_id_val),uuid.UUID):
                            instance.set_organization_values(workspace_org_id_val)
                            instance.save()
                        else:
                            # neu TH la uuid k xay ra thi se vao day
                            # nhung no se vao ngoai le
                            org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                            if org_id_obj_uuid is not None:
                                instance.set_organization_values(org_id_obj_uuid)
                                instance.save()
                    except Exception as xx:
                        print(xx)
                        # ngoai le nay xay ra khi workspace_org_id_val khong phai uuid
                        # thu tim workspace_org_id_val qua truong friendly_code
                        org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                        if org_id_obj_uuid is not None:
                            instance.set_organization_values(org_id_obj_uuid)
                            instance.save()
                                
                                
            # Lấy obj của hr_created_by lưu vào SystemMailTemplate
            if "hr_created_by" in validated_data:
                for obj in validated_data["hr_created_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_created_by"] = obj
            else:
                if "hr_created_by" in locals():
                    for obj_id in hr_created_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_created_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_created_by"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_updated_by lưu vào SystemMailTemplate
            if "hr_updated_by" in validated_data:
                for obj in validated_data["hr_updated_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_updated_by"] = obj
            else:
                if "hr_updated_by" in locals():
                    for obj_id in hr_updated_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_updated_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_updated_by"] = obj
                            # instance.save()
                            break
                
                                

            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailTemplate.objects.none()
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            


            
class SystemMailTemplateUpdateSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SystemMailTemplate
        fields = (
                
                'uuid',
                    
                'name',
                    
                'code',
                    
                'created_by',
                    
                'created_at',
                    
                'updated_by',
                    
                'updated_at',
                    
                  'name',
                        
                  'code',
                        
                  'friendly_code',
                        
                  'created_by',
                        
                  'updated_by',
                        
                  'updated_at',
                        
                  'email_type',
                        
                    #'get_email_type_obj',
                            
                  'content',
                        
                  'is_default',
                        
                  'organization',
                        
                    #'get_organization_obj',
                            
                  'hr_created_by',
                        
                    #'get_hr_created_by_obj',
                            
                  'hr_updated_by',
                        
                    #'get_hr_updated_by_obj',
                            
                  'created_at',
                        

                )
        # #fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data

    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            

            ########### Process (email_type) ForeignKey POST #############
            # Lấy pk code của email_type từ request_data
            if "email_type" in validated_data:
                email_type = validated_data.pop('email_type')
            if "email_type" in request_data:
                email_type = request_data.pop('email_type')
             

            ########### Process (is_default) BooleanField POST #############
            if "is_default" not in validated_data and "is_default" in request_data:
                if request_data['is_default'][0] == "true":
                    validated_data["is_default"] = True
                elif  request_data['is_default'][0] == "false":
                    validated_data["is_default"] = False
            elif "is_default" not in request_data:
                validated_data["is_default"] = None
                            

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
            instance = SystemMailTemplate.objects.create(**validated_data)
            
            
            # Lấy obj của email_type lưu vào SystemMailTemplate
            if "email_type" in validated_data:
                for obj in validated_data["email_type"]:
                    if obj is not None and isinstance(obj,SystemMailType):
                        validated_data["email_type"] = obj
            else:
                if "email_type" in locals():
                    for obj_id in email_type:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_email_type_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["email_type"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của organization lưu vào SystemMailTemplate
            if "organization" in validated_data:
                for obj in validated_data["organization"]:
                    if obj is not None and isinstance(obj,Organization):
                        validated_data["organization"] = obj
            else:
                if "organization" in locals():
                    for obj_id in organization:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_organization_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["organization"] = obj
                            # instance.save()
                            break
                
                if 'org_id' in self.context['request'].parser_context['kwargs']:
                    try:
                        workspace_org_id_val = self.context['request'].parser_context['kwargs']['org_id']
                        # TH day la uuid
                        if isinstance(uuid.UUID(workspace_org_id_val),uuid.UUID):
                            instance.set_organization_values(workspace_org_id_val)
                            instance.save()
                        else:
                            # neu TH la uuid k xay ra thi se vao day
                            # nhung no se vao ngoai le
                            org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                            if org_id_obj_uuid is not None:
                                instance.set_organization_values(org_id_obj_uuid)
                                instance.save()
                    except Exception as xx:
                        print(xx)
                        # ngoai le nay xay ra khi workspace_org_id_val khong phai uuid
                        # thu tim workspace_org_id_val qua truong friendly_code
                        org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                        if org_id_obj_uuid is not None:
                            instance.set_organization_values(org_id_obj_uuid)
                            instance.save()
                                
                                
            # Lấy obj của hr_created_by lưu vào SystemMailTemplate
            if "hr_created_by" in validated_data:
                for obj in validated_data["hr_created_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_created_by"] = obj
            else:
                if "hr_created_by" in locals():
                    for obj_id in hr_created_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_created_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_created_by"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_updated_by lưu vào SystemMailTemplate
            if "hr_updated_by" in validated_data:
                for obj in validated_data["hr_updated_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_updated_by"] = obj
            else:
                if "hr_updated_by" in locals():
                    for obj_id in hr_updated_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_updated_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_updated_by"] = obj
                            # instance.save()
                            break
                
                                

            return instance

        except Exception as xx:
            print(str(xx))

    def update(self, instance, validated_data):
        try:
            
            request_data = dict(self.get_serializer_context())
            

            ########### Process (email_type) ForeignKey POST #############
            # Lấy pk code của email_type từ request_data
            if "email_type" in validated_data:
                email_type = validated_data.pop('email_type')
            if "email_type" in request_data:
                email_type = request_data.pop('email_type')
             

            ########### Process (is_default) BooleanField POST #############
            if "is_default" not in validated_data and "is_default" in request_data:
                if  request_data['is_default'][0] == "true":
                    validated_data["is_default"] = True
                elif  request_data['is_default'][0] == "false":
                    validated_data["is_default"] = False
            elif "is_default" not in request_data:
                validated_data["is_default"] = None
                            

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
            super(SystemMailTemplateUpdateSerializer, self).update(instance, validated_data)
            
            
            # Lấy obj của email_type lưu vào SystemMailTemplate
            if "email_type" in validated_data:
                for obj in validated_data["email_type"]:
                    if obj is not None and isinstance(obj,SystemMailType):
                        validated_data["email_type"] = obj
            else:
                if "email_type" in locals():
                    for obj_id in email_type:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_email_type_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["email_type"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của organization lưu vào SystemMailTemplate
            if "organization" in validated_data:
                for obj in validated_data["organization"]:
                    if obj is not None and isinstance(obj,Organization):
                        validated_data["organization"] = obj
            else:
                if "organization" in locals():
                    for obj_id in organization:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_organization_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["organization"] = obj
                            # instance.save()
                            break
                
                if 'org_id' in self.context['request'].parser_context['kwargs']:
                    try:
                        workspace_org_id_val = self.context['request'].parser_context['kwargs']['org_id']
                        # TH day la uuid
                        if isinstance(uuid.UUID(workspace_org_id_val),uuid.UUID):
                            instance.set_organization_values(workspace_org_id_val)
                            instance.save()
                        else:
                            # neu TH la uuid k xay ra thi se vao day
                            # nhung no se vao ngoai le
                            org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                            if org_id_obj_uuid is not None:
                                instance.set_organization_values(org_id_obj_uuid)
                                instance.save()
                    except Exception as xx:
                        print(xx)
                        # ngoai le nay xay ra khi workspace_org_id_val khong phai uuid
                        # thu tim workspace_org_id_val qua truong friendly_code
                        org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                        if org_id_obj_uuid is not None:
                            instance.set_organization_values(org_id_obj_uuid)
                            instance.save()
                                
                                
            # Lấy obj của hr_created_by lưu vào SystemMailTemplate
            if "hr_created_by" in validated_data:
                for obj in validated_data["hr_created_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_created_by"] = obj
            else:
                if "hr_created_by" in locals():
                    for obj_id in hr_created_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_created_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_created_by"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_updated_by lưu vào SystemMailTemplate
            if "hr_updated_by" in validated_data:
                for obj in validated_data["hr_updated_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_updated_by"] = obj
            else:
                if "hr_updated_by" in locals():
                    for obj_id in hr_updated_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_updated_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_updated_by"] = obj
                            # instance.save()
                            break
                
                                

            return instance
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        # super(SystemMailTemplateUpdateSerializer, self).update(instance, validated_data)

        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            

            
class SystemMailTemplateDetailsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SystemMailTemplate
        # fields = (
        #             
                #'uuid',
                    
                #'name',
                    
                #'code',
                    
                #'created_by',
                    
                #'created_at',
                    
                #'updated_by',
                    
                #'updated_at',
                    
                  #'name',
                        
                  #'code',
                        
                  #'friendly_code',
                        
                  #'created_by',
                        
                  #'updated_by',
                        
                  #'updated_at',
                        
                  #'email_type',
                        
                    #'get_email_type_obj',
                            
                  #'content',
                        
                  #'is_default',
                        
                  #'organization',
                        
                    #'get_organization_obj',
                            
                  #'hr_created_by',
                        
                    #'get_hr_created_by_obj',
                            
                  #'hr_updated_by',
                        
                    #'get_hr_updated_by_obj',
                            
                  #'created_at',
                        

        #         )
        fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data

    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        return SystemMailTemplate.objects.create(**validated_data)

    def update(self, instance, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            

            ########### Process (email_type) ForeignKey POST #############
            # Lấy pk code của email_type từ request_data
            if "email_type" in validated_data:
                email_type = validated_data.pop('email_type')
            if "email_type" in request_data:
                email_type = request_data.pop('email_type')
             

            ########### Process (is_default) BooleanField POST #############
            if "is_default" not in validated_data and "is_default" in request_data:
                if  request_data['is_default'][0] == "true":
                    validated_data["is_default"] = True
                elif  request_data['is_default'][0] == "false":
                    validated_data["is_default"] = False
            elif "is_default" not in request_data:
                validated_data["is_default"] = None
                            

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
            super(SystemMailTemplateDetailsSerializer, self).update(instance, validated_data)
            

            return instance
        except Exception as xx:
            print(str(xx))
        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            



class SystemMailTemplateDeleteSerializer(serializers.ModelSerializer):
    class Meta:
        model = SystemMailTemplate
        fields = (  
                    'uuid',
                    'name',
                    )
        # #fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data

    def create(self, validated_data):
        try:
            
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            
            

            ########### Process (email_type) ForeignKey POST #############
            # Lấy pk code của email_type từ request_data
            if "email_type" in validated_data:
                email_type = validated_data.pop('email_type')
            if "email_type" in request_data:
                email_type = request_data.pop('email_type')
             

            ########### Process (is_default) BooleanField POST #############
            if "is_default" not in validated_data and "is_default" in request_data:
                if request_data['is_default'][0] == "true":
                    validated_data["is_default"] = True
                elif  request_data['is_default'][0] == "false":
                    validated_data["is_default"] = False
            elif "is_default" not in request_data:
                validated_data["is_default"] = None
                            

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
                        
            instance = SystemMailTemplate.objects.create(**validated_data)
            

            return instance
        except Exception as xx:
            print(str(xx))
        return SystemMailTemplate.objects.create(**validated_data)

    def update(self, instance, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            

            ########### Process (email_type) ForeignKey POST #############
            # Lấy pk code của email_type từ request_data
            if "email_type" in validated_data:
                email_type = validated_data.pop('email_type')
            if "email_type" in request_data:
                email_type = request_data.pop('email_type')
             

            ########### Process (is_default) BooleanField POST #############
            if "is_default" not in validated_data and "is_default" in request_data:
                if  request_data['is_default'][0] == "true":
                    validated_data["is_default"] = True
                elif  request_data['is_default'][0] == "false":
                    validated_data["is_default"] = False
            elif "is_default" not in request_data:
                validated_data["is_default"] = None
                            

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
            super(SystemMailTemplateDeleteSerializer, self).update(instance, validated_data)
            
            return instance
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        # 
        # super(SystemMailTemplateDeleteSerializer, self).update(instance, validated_data)
        

        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            


# Serializer trả về những thông cần thiết cho việc hiển thị ra danh sách.
class SystemMailTemplateOnlyViewsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SystemMailTemplate
        fields = (
                
                'uuid',
                    
                'name',
                    
                'code',
                    
                'created_by',
                    
                'created_at',
                    
                'updated_by',
                    
                'updated_at',
                    
                  'name',
                        
                  #'name',

                        
                  #'code',

                        
                  'friendly_code',
                        
                  #'friendly_code',

                        
                  #'created_by',

                        
                  #'updated_by',

                        
                  #'updated_at',

                        
                  'email_type',
                        
                    #'get_email_type_obj',
                            
                  'content',
                        
                  #'content',

                        
                  'is_default',
                        
                  #'is_default',

                        
                  'organization',
                        
                    #'get_organization_obj',
                            
                  'hr_created_by',
                        
                    #'get_hr_created_by_obj',
                            
                  'hr_updated_by',
                        
                    #'get_hr_updated_by_obj',
                            
                  #'created_at',

                        
                  'friendly_code',
                        
                  'name',
                        
                  'email_type',
                        
                  'is_default',
                        
                  )
        ##fields = '__all__'
        #depth = 1
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
        # extra_fields = ['author_all']
        # def get_field_names(self, declared_fields, info):
    #     expanded_fields = super(NewspaperSerializer, self).get_field_names(declared_fields, info)

    #     if getattr(self.Meta, 'extra_fields', None):
    #         return expanded_fields + self.Meta.extra_fields
    #     else:
    #         return expanded_fields
    def get_serializer_context(self):
        return self.context['request'].data
    def get_request_user(self):
        return self.context['request'].user
    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            
            

            ########### Process (email_type) ForeignKey POST #############
            # Lấy pk code của email_type từ request_data
            if "email_type" in validated_data:
                email_type = validated_data.pop('email_type')
            if "email_type" in request_data:
                email_type = request_data.pop('email_type')
             

            ########### Process (is_default) BooleanField POST #############
            if "is_default" not in validated_data and "is_default" in request_data:
                if request_data['is_default'][0] == "true":
                    validated_data["is_default"] = True
                elif  request_data['is_default'][0] == "false":
                    validated_data["is_default"] = False
            elif "is_default" not in request_data:
                validated_data["is_default"] = None
                            

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             
                        
            instance = SystemMailTemplate.objects.create(**validated_data)
            return instance
            ################################################
            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailTemplate.objects.none()
 
    def update(self, instance, validated_data):
        try:
            for attr_name in validated_data:
                print('%s = %s' % (attr_name, validated_data[attr_name]))
            request_data = dict(self.get_serializer_context())
            #  validated_data["updated_by"]=self.get_request_user()
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        try:
            
            super(SystemMailTemplateOnlyViewsSerializer, self).update(instance, validated_data)
            
            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailTemplate.objects.none()
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            



class SystemMailTemplateRemoveFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = SystemMailTemplate
        fields = (
                  'name',
                  'uuid',
                  'code',)
        # fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data
    def get_request_user(self):
        return self.context['request'].user
    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            
            instance = SystemMailTemplate.objects.create(**validated_data)
            
            ################################################
            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailTemplate.objects.none()
            
    def update(self, instance, validated_data):
        try:
            for attr_name in validated_data:
                print('%s = %s' % (attr_name, validated_data[attr_name]))
            request_data = dict(self.get_serializer_context())
            # validated_data["updated_by"]=self.get_request_user()
            if 'attach-field' in request_data:
                validated_data[request_data["attach-field"][0]]=None
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        
        SystemMailTemplate.objects.filter(uuid=instance.uuid).update(**validated_data)
        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret



class SystemMailTypeCreateSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SystemMailType
        fields = (
                
                'uuid',
                    
                'name',
                    
                'code',
                    
                'created_by',
                    
                'created_at',
                    
                'updated_by',
                    
                'updated_at',
                    
                  'code',
                        
                  'created_by',
                        
                  'created_at',
                        
                  'updated_by',
                        
                  'updated_at',
                        
                  'organization',
                        
                    #'get_organization_obj',
                            
                  'hr_created_by',
                        
                    #'get_hr_created_by_obj',
                            
                  'hr_updated_by',
                        
                    #'get_hr_updated_by_obj',
                            
                  'name',
                        
                  'friendly_code',
                        
                  'is_default',
                        
                )
        #fields = '__all__'
        #depth = 1
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
        # extra_fields = ['author_all']
        # def get_field_names(self, declared_fields, info):
    #     expanded_fields = super(NewspaperSerializer, self).get_field_names(declared_fields, info)

    #     if getattr(self.Meta, 'extra_fields', None):
    #         return expanded_fields + self.Meta.extra_fields
    #     else:
    #         return expanded_fields
    def get_serializer_context(self):
        return self.context['request'].data
    def get_request_user(self):
        return self.context['request'].user
    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             

            ########### Process (is_default) BooleanField POST #############
            if "is_default" not in validated_data and "is_default" in request_data:
                if request_data['is_default'][0] == "true":
                    validated_data["is_default"] = True
                elif  request_data['is_default'][0] == "false":
                    validated_data["is_default"] = False
            elif "is_default" not in request_data:
                validated_data["is_default"] = True
                            
            instance = SystemMailType.objects.create(**validated_data)
            ################################################
            
            
            # Lấy obj của organization lưu vào SystemMailType
            if "organization" in validated_data:
                for obj in validated_data["organization"]:
                    if obj is not None and isinstance(obj,Organization):
                        validated_data["organization"] = obj
            else:
                if "organization" in locals():
                    for obj_id in organization:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_organization_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["organization"] = obj
                            # instance.save()
                            break
                
                if 'org_id' in self.context['request'].parser_context['kwargs']:
                    try:
                        workspace_org_id_val = self.context['request'].parser_context['kwargs']['org_id']
                        # TH day la uuid
                        if isinstance(uuid.UUID(workspace_org_id_val),uuid.UUID):
                            instance.set_organization_values(workspace_org_id_val)
                            instance.save()
                        else:
                            # neu TH la uuid k xay ra thi se vao day
                            # nhung no se vao ngoai le
                            org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                            if org_id_obj_uuid is not None:
                                instance.set_organization_values(org_id_obj_uuid)
                                instance.save()
                    except Exception as xx:
                        print(xx)
                        # ngoai le nay xay ra khi workspace_org_id_val khong phai uuid
                        # thu tim workspace_org_id_val qua truong friendly_code
                        org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                        if org_id_obj_uuid is not None:
                            instance.set_organization_values(org_id_obj_uuid)
                            instance.save()
                                
                                
            # Lấy obj của hr_created_by lưu vào SystemMailType
            if "hr_created_by" in validated_data:
                for obj in validated_data["hr_created_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_created_by"] = obj
            else:
                if "hr_created_by" in locals():
                    for obj_id in hr_created_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_created_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_created_by"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_updated_by lưu vào SystemMailType
            if "hr_updated_by" in validated_data:
                for obj in validated_data["hr_updated_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_updated_by"] = obj
            else:
                if "hr_updated_by" in locals():
                    for obj_id in hr_updated_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_updated_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_updated_by"] = obj
                            # instance.save()
                            break
                
                                

            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailType.objects.none()
 
    def update(self, instance, validated_data):
        try:
            for attr_name in validated_data:
                print('%s = %s' % (attr_name, validated_data[attr_name]))
            request_data = dict(self.get_serializer_context())
            #  validated_data["updated_by"]=self.get_request_user()
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        try:
            
            

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             

            ########### Process (is_default) BooleanField POST #############
            if "is_default" not in validated_data and "is_default" in request_data:
                if  request_data['is_default'][0] == "true":
                    validated_data["is_default"] = True
                elif  request_data['is_default'][0] == "false":
                    validated_data["is_default"] = False
            elif "is_default" not in request_data:
                validated_data["is_default"] = True
                            
            super(SystemMailTypeCreateSerializer, self).update(instance, validated_data)
            
            
            # Lấy obj của organization lưu vào SystemMailType
            if "organization" in validated_data:
                for obj in validated_data["organization"]:
                    if obj is not None and isinstance(obj,Organization):
                        validated_data["organization"] = obj
            else:
                if "organization" in locals():
                    for obj_id in organization:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_organization_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["organization"] = obj
                            # instance.save()
                            break
                
                if 'org_id' in self.context['request'].parser_context['kwargs']:
                    try:
                        workspace_org_id_val = self.context['request'].parser_context['kwargs']['org_id']
                        # TH day la uuid
                        if isinstance(uuid.UUID(workspace_org_id_val),uuid.UUID):
                            instance.set_organization_values(workspace_org_id_val)
                            instance.save()
                        else:
                            # neu TH la uuid k xay ra thi se vao day
                            # nhung no se vao ngoai le
                            org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                            if org_id_obj_uuid is not None:
                                instance.set_organization_values(org_id_obj_uuid)
                                instance.save()
                    except Exception as xx:
                        print(xx)
                        # ngoai le nay xay ra khi workspace_org_id_val khong phai uuid
                        # thu tim workspace_org_id_val qua truong friendly_code
                        org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                        if org_id_obj_uuid is not None:
                            instance.set_organization_values(org_id_obj_uuid)
                            instance.save()
                                
                                
            # Lấy obj của hr_created_by lưu vào SystemMailType
            if "hr_created_by" in validated_data:
                for obj in validated_data["hr_created_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_created_by"] = obj
            else:
                if "hr_created_by" in locals():
                    for obj_id in hr_created_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_created_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_created_by"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_updated_by lưu vào SystemMailType
            if "hr_updated_by" in validated_data:
                for obj in validated_data["hr_updated_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_updated_by"] = obj
            else:
                if "hr_updated_by" in locals():
                    for obj_id in hr_updated_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_updated_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_updated_by"] = obj
                            # instance.save()
                            break
                
                                

            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailType.objects.none()
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            


            
class SystemMailTypeUpdateSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SystemMailType
        fields = (
                
                'uuid',
                    
                'name',
                    
                'code',
                    
                'created_by',
                    
                'created_at',
                    
                'updated_by',
                    
                'updated_at',
                    
                  'code',
                        
                  'created_by',
                        
                  'created_at',
                        
                  'updated_by',
                        
                  'updated_at',
                        
                  'organization',
                        
                    #'get_organization_obj',
                            
                  'hr_created_by',
                        
                    #'get_hr_created_by_obj',
                            
                  'hr_updated_by',
                        
                    #'get_hr_updated_by_obj',
                            
                  'name',
                        
                  'friendly_code',
                        
                  'is_default',
                        

                )
        # #fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data

    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             

            ########### Process (is_default) BooleanField POST #############
            if "is_default" not in validated_data and "is_default" in request_data:
                if request_data['is_default'][0] == "true":
                    validated_data["is_default"] = True
                elif  request_data['is_default'][0] == "false":
                    validated_data["is_default"] = False
            elif "is_default" not in request_data:
                validated_data["is_default"] = True
                            
            instance = SystemMailType.objects.create(**validated_data)
            
            
            # Lấy obj của organization lưu vào SystemMailType
            if "organization" in validated_data:
                for obj in validated_data["organization"]:
                    if obj is not None and isinstance(obj,Organization):
                        validated_data["organization"] = obj
            else:
                if "organization" in locals():
                    for obj_id in organization:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_organization_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["organization"] = obj
                            # instance.save()
                            break
                
                if 'org_id' in self.context['request'].parser_context['kwargs']:
                    try:
                        workspace_org_id_val = self.context['request'].parser_context['kwargs']['org_id']
                        # TH day la uuid
                        if isinstance(uuid.UUID(workspace_org_id_val),uuid.UUID):
                            instance.set_organization_values(workspace_org_id_val)
                            instance.save()
                        else:
                            # neu TH la uuid k xay ra thi se vao day
                            # nhung no se vao ngoai le
                            org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                            if org_id_obj_uuid is not None:
                                instance.set_organization_values(org_id_obj_uuid)
                                instance.save()
                    except Exception as xx:
                        print(xx)
                        # ngoai le nay xay ra khi workspace_org_id_val khong phai uuid
                        # thu tim workspace_org_id_val qua truong friendly_code
                        org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                        if org_id_obj_uuid is not None:
                            instance.set_organization_values(org_id_obj_uuid)
                            instance.save()
                                
                                
            # Lấy obj của hr_created_by lưu vào SystemMailType
            if "hr_created_by" in validated_data:
                for obj in validated_data["hr_created_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_created_by"] = obj
            else:
                if "hr_created_by" in locals():
                    for obj_id in hr_created_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_created_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_created_by"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_updated_by lưu vào SystemMailType
            if "hr_updated_by" in validated_data:
                for obj in validated_data["hr_updated_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_updated_by"] = obj
            else:
                if "hr_updated_by" in locals():
                    for obj_id in hr_updated_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_updated_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_updated_by"] = obj
                            # instance.save()
                            break
                
                                

            return instance

        except Exception as xx:
            print(str(xx))

    def update(self, instance, validated_data):
        try:
            
            request_data = dict(self.get_serializer_context())
            

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             

            ########### Process (is_default) BooleanField POST #############
            if "is_default" not in validated_data and "is_default" in request_data:
                if  request_data['is_default'][0] == "true":
                    validated_data["is_default"] = True
                elif  request_data['is_default'][0] == "false":
                    validated_data["is_default"] = False
            elif "is_default" not in request_data:
                validated_data["is_default"] = True
                            
            super(SystemMailTypeUpdateSerializer, self).update(instance, validated_data)
            
            
            # Lấy obj của organization lưu vào SystemMailType
            if "organization" in validated_data:
                for obj in validated_data["organization"]:
                    if obj is not None and isinstance(obj,Organization):
                        validated_data["organization"] = obj
            else:
                if "organization" in locals():
                    for obj_id in organization:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_organization_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["organization"] = obj
                            # instance.save()
                            break
                
                if 'org_id' in self.context['request'].parser_context['kwargs']:
                    try:
                        workspace_org_id_val = self.context['request'].parser_context['kwargs']['org_id']
                        # TH day la uuid
                        if isinstance(uuid.UUID(workspace_org_id_val),uuid.UUID):
                            instance.set_organization_values(workspace_org_id_val)
                            instance.save()
                        else:
                            # neu TH la uuid k xay ra thi se vao day
                            # nhung no se vao ngoai le
                            org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                            if org_id_obj_uuid is not None:
                                instance.set_organization_values(org_id_obj_uuid)
                                instance.save()
                    except Exception as xx:
                        print(xx)
                        # ngoai le nay xay ra khi workspace_org_id_val khong phai uuid
                        # thu tim workspace_org_id_val qua truong friendly_code
                        org_id_obj_uuid = Organization.objects.filter(friendly_code=workspace_org_id_val).values_list("uuid",flat=True).first()
                        if org_id_obj_uuid is not None:
                            instance.set_organization_values(org_id_obj_uuid)
                            instance.save()
                                
                                
            # Lấy obj của hr_created_by lưu vào SystemMailType
            if "hr_created_by" in validated_data:
                for obj in validated_data["hr_created_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_created_by"] = obj
            else:
                if "hr_created_by" in locals():
                    for obj_id in hr_created_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_created_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_created_by"] = obj
                            # instance.save()
                            break
                
                                
            # Lấy obj của hr_updated_by lưu vào SystemMailType
            if "hr_updated_by" in validated_data:
                for obj in validated_data["hr_updated_by"]:
                    if obj is not None and isinstance(obj,HRAccount):
                        validated_data["hr_updated_by"] = obj
            else:
                if "hr_updated_by" in locals():
                    for obj_id in hr_updated_by:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_hr_updated_by_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["hr_updated_by"] = obj
                            # instance.save()
                            break
                
                                

            return instance
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        # super(SystemMailTypeUpdateSerializer, self).update(instance, validated_data)

        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            

            
class SystemMailTypeDetailsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SystemMailType
        # fields = (
        #             
                #'uuid',
                    
                #'name',
                    
                #'code',
                    
                #'created_by',
                    
                #'created_at',
                    
                #'updated_by',
                    
                #'updated_at',
                    
                  #'code',
                        
                  #'created_by',
                        
                  #'created_at',
                        
                  #'updated_by',
                        
                  #'updated_at',
                        
                  #'organization',
                        
                    #'get_organization_obj',
                            
                  #'hr_created_by',
                        
                    #'get_hr_created_by_obj',
                            
                  #'hr_updated_by',
                        
                    #'get_hr_updated_by_obj',
                            
                  #'name',
                        
                  #'friendly_code',
                        
                  #'is_default',
                        

        #         )
        fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data

    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        return SystemMailType.objects.create(**validated_data)

    def update(self, instance, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             

            ########### Process (is_default) BooleanField POST #############
            if "is_default" not in validated_data and "is_default" in request_data:
                if  request_data['is_default'][0] == "true":
                    validated_data["is_default"] = True
                elif  request_data['is_default'][0] == "false":
                    validated_data["is_default"] = False
            elif "is_default" not in request_data:
                validated_data["is_default"] = True
                            
            super(SystemMailTypeDetailsSerializer, self).update(instance, validated_data)
            

            return instance
        except Exception as xx:
            print(str(xx))
        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            



class SystemMailTypeDeleteSerializer(serializers.ModelSerializer):
    class Meta:
        model = SystemMailType
        fields = (  
                    'uuid',
                    'name',
                    )
        # #fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data

    def create(self, validated_data):
        try:
            
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            
            

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             

            ########### Process (is_default) BooleanField POST #############
            if "is_default" not in validated_data and "is_default" in request_data:
                if request_data['is_default'][0] == "true":
                    validated_data["is_default"] = True
                elif  request_data['is_default'][0] == "false":
                    validated_data["is_default"] = False
            elif "is_default" not in request_data:
                validated_data["is_default"] = True
                            
                        
            instance = SystemMailType.objects.create(**validated_data)
            

            return instance
        except Exception as xx:
            print(str(xx))
        return SystemMailType.objects.create(**validated_data)

    def update(self, instance, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             

            ########### Process (is_default) BooleanField POST #############
            if "is_default" not in validated_data and "is_default" in request_data:
                if  request_data['is_default'][0] == "true":
                    validated_data["is_default"] = True
                elif  request_data['is_default'][0] == "false":
                    validated_data["is_default"] = False
            elif "is_default" not in request_data:
                validated_data["is_default"] = True
                            
            super(SystemMailTypeDeleteSerializer, self).update(instance, validated_data)
            
            return instance
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        # 
        # super(SystemMailTypeDeleteSerializer, self).update(instance, validated_data)
        

        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            


# Serializer trả về những thông cần thiết cho việc hiển thị ra danh sách.
class SystemMailTypeOnlyViewsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SystemMailType
        fields = (
                
                'uuid',
                    
                'name',
                    
                'code',
                    
                'created_by',
                    
                'created_at',
                    
                'updated_by',
                    
                'updated_at',
                    
                  #'code',

                        
                  #'created_by',

                        
                  #'created_at',

                        
                  #'updated_by',

                        
                  #'updated_at',

                        
                  'organization',
                        
                    #'get_organization_obj',
                            
                  'hr_created_by',
                        
                    #'get_hr_created_by_obj',
                            
                  'hr_updated_by',
                        
                    #'get_hr_updated_by_obj',
                            
                  'name',
                        
                  #'name',

                        
                  'friendly_code',
                        
                  #'friendly_code',

                        
                  'is_default',
                        
                  #'is_default',

                        
                  'friendly_code',
                        
                  'name',
                        
                  'is_default',
                        
                  )
        ##fields = '__all__'
        #depth = 1
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
        # extra_fields = ['author_all']
        # def get_field_names(self, declared_fields, info):
    #     expanded_fields = super(NewspaperSerializer, self).get_field_names(declared_fields, info)

    #     if getattr(self.Meta, 'extra_fields', None):
    #         return expanded_fields + self.Meta.extra_fields
    #     else:
    #         return expanded_fields
    def get_serializer_context(self):
        return self.context['request'].data
    def get_request_user(self):
        return self.context['request'].user
    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            
            

            ########### Process (organization) ForeignKey POST #############
            # Lấy pk code của organization từ request_data
            if "organization" in validated_data:
                organization = validated_data.pop('organization')
            if "organization" in request_data:
                organization = request_data.pop('organization')
             

            ########### Process (hr_created_by) ForeignKey POST #############
            # Lấy pk code của hr_created_by từ request_data
            if "hr_created_by" in validated_data:
                hr_created_by = validated_data.pop('hr_created_by')
            if "hr_created_by" in request_data:
                hr_created_by = request_data.pop('hr_created_by')
             

            ########### Process (hr_updated_by) ForeignKey POST #############
            # Lấy pk code của hr_updated_by từ request_data
            if "hr_updated_by" in validated_data:
                hr_updated_by = validated_data.pop('hr_updated_by')
            if "hr_updated_by" in request_data:
                hr_updated_by = request_data.pop('hr_updated_by')
             

            ########### Process (is_default) BooleanField POST #############
            if "is_default" not in validated_data and "is_default" in request_data:
                if request_data['is_default'][0] == "true":
                    validated_data["is_default"] = True
                elif  request_data['is_default'][0] == "false":
                    validated_data["is_default"] = False
            elif "is_default" not in request_data:
                validated_data["is_default"] = True
                            
                        
            instance = SystemMailType.objects.create(**validated_data)
            return instance
            ################################################
            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailType.objects.none()
 
    def update(self, instance, validated_data):
        try:
            for attr_name in validated_data:
                print('%s = %s' % (attr_name, validated_data[attr_name]))
            request_data = dict(self.get_serializer_context())
            #  validated_data["updated_by"]=self.get_request_user()
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        try:
            
            super(SystemMailTypeOnlyViewsSerializer, self).update(instance, validated_data)
            
            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailType.objects.none()
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            



class SystemMailTypeRemoveFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = SystemMailType
        fields = (
                  'name',
                  'uuid',
                  'code',)
        # fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data
    def get_request_user(self):
        return self.context['request'].user
    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            
            instance = SystemMailType.objects.create(**validated_data)
            
            ################################################
            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailType.objects.none()
            
    def update(self, instance, validated_data):
        try:
            for attr_name in validated_data:
                print('%s = %s' % (attr_name, validated_data[attr_name]))
            request_data = dict(self.get_serializer_context())
            # validated_data["updated_by"]=self.get_request_user()
            if 'attach-field' in request_data:
                validated_data[request_data["attach-field"][0]]=None
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        
        SystemMailType.objects.filter(uuid=instance.uuid).update(**validated_data)
        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret



class SystemMailTemplateImportDataCreateSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SystemMailTemplateImportData
        fields = (
                
                'uuid',
                    
                'name',
                    
                'code',
                    
                'created_by',
                    
                'created_at',
                    
                'updated_by',
                    
                'updated_at',
                    
                  'name',
                        
                  'code',
                        
                  'friendly_code',
                        
                  'created_by',
                        
                  'created_at',
                        
                  'updated_by',
                        
                  'updated_at',
                        
                  'file',
                        
                  'total_record_number',
                        
                  'is_import_failed',
                        
                  'is_import_success',
                        
                  'json_import_data',
                        
                  'json_check_validation',
                        
                  'json_fail_data',
                        
                  'import_status',
                        
                    #'get_import_status_obj',
                            
                )
        #fields = '__all__'
        #depth = 1
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
        # extra_fields = ['author_all']
        # def get_field_names(self, declared_fields, info):
    #     expanded_fields = super(NewspaperSerializer, self).get_field_names(declared_fields, info)

    #     if getattr(self.Meta, 'extra_fields', None):
    #         return expanded_fields + self.Meta.extra_fields
    #     else:
    #         return expanded_fields
    def get_serializer_context(self):
        return self.context['request'].data
    def get_request_user(self):
        return self.context['request'].user
    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            

            ########### Process (is_import_failed) BooleanField POST #############
            if "is_import_failed" not in validated_data and "is_import_failed" in request_data:
                if request_data['is_import_failed'][0] == "true":
                    validated_data["is_import_failed"] = True
                elif  request_data['is_import_failed'][0] == "false":
                    validated_data["is_import_failed"] = False
            elif "is_import_failed" not in request_data:
                validated_data["is_import_failed"] = False
                            

            ########### Process (is_import_success) BooleanField POST #############
            if "is_import_success" not in validated_data and "is_import_success" in request_data:
                if request_data['is_import_success'][0] == "true":
                    validated_data["is_import_success"] = True
                elif  request_data['is_import_success'][0] == "false":
                    validated_data["is_import_success"] = False
            elif "is_import_success" not in request_data:
                validated_data["is_import_success"] = True
                            

            ########### Process (import_status) ForeignKey POST #############
            # Lấy pk code của import_status từ request_data
            if "import_status" in validated_data:
                import_status = validated_data.pop('import_status')
            if "import_status" in request_data:
                import_status = request_data.pop('import_status')
             
            instance = SystemMailTemplateImportData.objects.create(**validated_data)
            ################################################
            
            
            # Lấy obj của import_status lưu vào SystemMailTemplateImportData
            if "import_status" in validated_data:
                for obj in validated_data["import_status"]:
                    if obj is not None and isinstance(obj,SystemMailTemplateImportStatus):
                        validated_data["import_status"] = obj
            else:
                if "import_status" in locals():
                    for obj_id in import_status:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_import_status_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["import_status"] = obj
                            # instance.save()
                            break
                
                                

            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailTemplateImportData.objects.none()
 
    def update(self, instance, validated_data):
        try:
            for attr_name in validated_data:
                print('%s = %s' % (attr_name, validated_data[attr_name]))
            request_data = dict(self.get_serializer_context())
            #  validated_data["updated_by"]=self.get_request_user()
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        try:
            
            

            ########### Process (is_import_failed) BooleanField POST #############
            if "is_import_failed" not in validated_data and "is_import_failed" in request_data:
                if  request_data['is_import_failed'][0] == "true":
                    validated_data["is_import_failed"] = True
                elif  request_data['is_import_failed'][0] == "false":
                    validated_data["is_import_failed"] = False
            elif "is_import_failed" not in request_data:
                validated_data["is_import_failed"] = False
                            

            ########### Process (is_import_success) BooleanField POST #############
            if "is_import_success" not in validated_data and "is_import_success" in request_data:
                if  request_data['is_import_success'][0] == "true":
                    validated_data["is_import_success"] = True
                elif  request_data['is_import_success'][0] == "false":
                    validated_data["is_import_success"] = False
            elif "is_import_success" not in request_data:
                validated_data["is_import_success"] = True
                            

            ########### Process (import_status) ForeignKey POST #############
            # Lấy pk code của import_status từ request_data
            if "import_status" in validated_data:
                import_status = validated_data.pop('import_status')
            if "import_status" in request_data:
                import_status = request_data.pop('import_status')
             
            super(SystemMailTemplateImportDataCreateSerializer, self).update(instance, validated_data)
            
            
            # Lấy obj của import_status lưu vào SystemMailTemplateImportData
            if "import_status" in validated_data:
                for obj in validated_data["import_status"]:
                    if obj is not None and isinstance(obj,SystemMailTemplateImportStatus):
                        validated_data["import_status"] = obj
            else:
                if "import_status" in locals():
                    for obj_id in import_status:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_import_status_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["import_status"] = obj
                            # instance.save()
                            break
                
                                

            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailTemplateImportData.objects.none()
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            


            
class SystemMailTemplateImportDataUpdateSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SystemMailTemplateImportData
        fields = (
                
                'uuid',
                    
                'name',
                    
                'code',
                    
                'created_by',
                    
                'created_at',
                    
                'updated_by',
                    
                'updated_at',
                    
                  'name',
                        
                  'code',
                        
                  'friendly_code',
                        
                  'created_by',
                        
                  'created_at',
                        
                  'updated_by',
                        
                  'updated_at',
                        
                  'file',
                        
                  'total_record_number',
                        
                  'is_import_failed',
                        
                  'is_import_success',
                        
                  'json_import_data',
                        
                  'json_check_validation',
                        
                  'json_fail_data',
                        
                  'import_status',
                        
                    #'get_import_status_obj',
                            

                )
        # #fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data

    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            

            ########### Process (is_import_failed) BooleanField POST #############
            if "is_import_failed" not in validated_data and "is_import_failed" in request_data:
                if request_data['is_import_failed'][0] == "true":
                    validated_data["is_import_failed"] = True
                elif  request_data['is_import_failed'][0] == "false":
                    validated_data["is_import_failed"] = False
            elif "is_import_failed" not in request_data:
                validated_data["is_import_failed"] = False
                            

            ########### Process (is_import_success) BooleanField POST #############
            if "is_import_success" not in validated_data and "is_import_success" in request_data:
                if request_data['is_import_success'][0] == "true":
                    validated_data["is_import_success"] = True
                elif  request_data['is_import_success'][0] == "false":
                    validated_data["is_import_success"] = False
            elif "is_import_success" not in request_data:
                validated_data["is_import_success"] = True
                            

            ########### Process (import_status) ForeignKey POST #############
            # Lấy pk code của import_status từ request_data
            if "import_status" in validated_data:
                import_status = validated_data.pop('import_status')
            if "import_status" in request_data:
                import_status = request_data.pop('import_status')
             
            instance = SystemMailTemplateImportData.objects.create(**validated_data)
            
            
            # Lấy obj của import_status lưu vào SystemMailTemplateImportData
            if "import_status" in validated_data:
                for obj in validated_data["import_status"]:
                    if obj is not None and isinstance(obj,SystemMailTemplateImportStatus):
                        validated_data["import_status"] = obj
            else:
                if "import_status" in locals():
                    for obj_id in import_status:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_import_status_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["import_status"] = obj
                            # instance.save()
                            break
                
                                

            return instance

        except Exception as xx:
            print(str(xx))

    def update(self, instance, validated_data):
        try:
            
            request_data = dict(self.get_serializer_context())
            

            ########### Process (is_import_failed) BooleanField POST #############
            if "is_import_failed" not in validated_data and "is_import_failed" in request_data:
                if  request_data['is_import_failed'][0] == "true":
                    validated_data["is_import_failed"] = True
                elif  request_data['is_import_failed'][0] == "false":
                    validated_data["is_import_failed"] = False
            elif "is_import_failed" not in request_data:
                validated_data["is_import_failed"] = False
                            

            ########### Process (is_import_success) BooleanField POST #############
            if "is_import_success" not in validated_data and "is_import_success" in request_data:
                if  request_data['is_import_success'][0] == "true":
                    validated_data["is_import_success"] = True
                elif  request_data['is_import_success'][0] == "false":
                    validated_data["is_import_success"] = False
            elif "is_import_success" not in request_data:
                validated_data["is_import_success"] = True
                            

            ########### Process (import_status) ForeignKey POST #############
            # Lấy pk code của import_status từ request_data
            if "import_status" in validated_data:
                import_status = validated_data.pop('import_status')
            if "import_status" in request_data:
                import_status = request_data.pop('import_status')
             
            super(SystemMailTemplateImportDataUpdateSerializer, self).update(instance, validated_data)
            
            
            # Lấy obj của import_status lưu vào SystemMailTemplateImportData
            if "import_status" in validated_data:
                for obj in validated_data["import_status"]:
                    if obj is not None and isinstance(obj,SystemMailTemplateImportStatus):
                        validated_data["import_status"] = obj
            else:
                if "import_status" in locals():
                    for obj_id in import_status:
                        obj = None
                        if obj_id is '' or obj_id is None:
                            break
                        try:
                            instance.set_import_status_values(obj_id)
                            instance.save()
                        except Exception as xx:
                            print(xx)
                        if obj is not None:
                            
                            validated_data["import_status"] = obj
                            # instance.save()
                            break
                
                                

            return instance
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        # super(SystemMailTemplateImportDataUpdateSerializer, self).update(instance, validated_data)

        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            

            
class SystemMailTemplateImportDataDetailsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SystemMailTemplateImportData
        # fields = (
        #             
                #'uuid',
                    
                #'name',
                    
                #'code',
                    
                #'created_by',
                    
                #'created_at',
                    
                #'updated_by',
                    
                #'updated_at',
                    
                  #'name',
                        
                  #'code',
                        
                  #'friendly_code',
                        
                  #'created_by',
                        
                  #'created_at',
                        
                  #'updated_by',
                        
                  #'updated_at',
                        
                  #'file',
                        
                  #'total_record_number',
                        
                  #'is_import_failed',
                        
                  #'is_import_success',
                        
                  #'json_import_data',
                        
                  #'json_check_validation',
                        
                  #'json_fail_data',
                        
                  #'import_status',
                        
                    #'get_import_status_obj',
                            

        #         )
        fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data

    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        return SystemMailTemplateImportData.objects.create(**validated_data)

    def update(self, instance, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            

            ########### Process (is_import_failed) BooleanField POST #############
            if "is_import_failed" not in validated_data and "is_import_failed" in request_data:
                if  request_data['is_import_failed'][0] == "true":
                    validated_data["is_import_failed"] = True
                elif  request_data['is_import_failed'][0] == "false":
                    validated_data["is_import_failed"] = False
            elif "is_import_failed" not in request_data:
                validated_data["is_import_failed"] = False
                            

            ########### Process (is_import_success) BooleanField POST #############
            if "is_import_success" not in validated_data and "is_import_success" in request_data:
                if  request_data['is_import_success'][0] == "true":
                    validated_data["is_import_success"] = True
                elif  request_data['is_import_success'][0] == "false":
                    validated_data["is_import_success"] = False
            elif "is_import_success" not in request_data:
                validated_data["is_import_success"] = True
                            

            ########### Process (import_status) ForeignKey POST #############
            # Lấy pk code của import_status từ request_data
            if "import_status" in validated_data:
                import_status = validated_data.pop('import_status')
            if "import_status" in request_data:
                import_status = request_data.pop('import_status')
             
            super(SystemMailTemplateImportDataDetailsSerializer, self).update(instance, validated_data)
            

            return instance
        except Exception as xx:
            print(str(xx))
        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            



class SystemMailTemplateImportDataDeleteSerializer(serializers.ModelSerializer):
    class Meta:
        model = SystemMailTemplateImportData
        fields = (  
                    'uuid',
                    'name',
                    )
        # #fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data

    def create(self, validated_data):
        try:
            
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            
            

            ########### Process (is_import_failed) BooleanField POST #############
            if "is_import_failed" not in validated_data and "is_import_failed" in request_data:
                if request_data['is_import_failed'][0] == "true":
                    validated_data["is_import_failed"] = True
                elif  request_data['is_import_failed'][0] == "false":
                    validated_data["is_import_failed"] = False
            elif "is_import_failed" not in request_data:
                validated_data["is_import_failed"] = False
                            

            ########### Process (is_import_success) BooleanField POST #############
            if "is_import_success" not in validated_data and "is_import_success" in request_data:
                if request_data['is_import_success'][0] == "true":
                    validated_data["is_import_success"] = True
                elif  request_data['is_import_success'][0] == "false":
                    validated_data["is_import_success"] = False
            elif "is_import_success" not in request_data:
                validated_data["is_import_success"] = True
                            

            ########### Process (import_status) ForeignKey POST #############
            # Lấy pk code của import_status từ request_data
            if "import_status" in validated_data:
                import_status = validated_data.pop('import_status')
            if "import_status" in request_data:
                import_status = request_data.pop('import_status')
             
                        
            instance = SystemMailTemplateImportData.objects.create(**validated_data)
            

            return instance
        except Exception as xx:
            print(str(xx))
        return SystemMailTemplateImportData.objects.create(**validated_data)

    def update(self, instance, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            

            ########### Process (is_import_failed) BooleanField POST #############
            if "is_import_failed" not in validated_data and "is_import_failed" in request_data:
                if  request_data['is_import_failed'][0] == "true":
                    validated_data["is_import_failed"] = True
                elif  request_data['is_import_failed'][0] == "false":
                    validated_data["is_import_failed"] = False
            elif "is_import_failed" not in request_data:
                validated_data["is_import_failed"] = False
                            

            ########### Process (is_import_success) BooleanField POST #############
            if "is_import_success" not in validated_data and "is_import_success" in request_data:
                if  request_data['is_import_success'][0] == "true":
                    validated_data["is_import_success"] = True
                elif  request_data['is_import_success'][0] == "false":
                    validated_data["is_import_success"] = False
            elif "is_import_success" not in request_data:
                validated_data["is_import_success"] = True
                            

            ########### Process (import_status) ForeignKey POST #############
            # Lấy pk code của import_status từ request_data
            if "import_status" in validated_data:
                import_status = validated_data.pop('import_status')
            if "import_status" in request_data:
                import_status = request_data.pop('import_status')
             
            super(SystemMailTemplateImportDataDeleteSerializer, self).update(instance, validated_data)
            
            return instance
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        # 
        # super(SystemMailTemplateImportDataDeleteSerializer, self).update(instance, validated_data)
        

        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            


# Serializer trả về những thông cần thiết cho việc hiển thị ra danh sách.
class SystemMailTemplateImportDataOnlyViewsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SystemMailTemplateImportData
        fields = (
                
                'uuid',
                    
                'name',
                    
                'code',
                    
                'created_by',
                    
                'created_at',
                    
                'updated_by',
                    
                'updated_at',
                    
                  'name',
                        
                  #'name',

                        
                  #'code',

                        
                  'friendly_code',
                        
                  #'friendly_code',

                        
                  #'created_by',

                        
                  #'created_at',

                        
                  #'updated_by',

                        
                  #'updated_at',

                        
                  'file',
                        
                  #'file',

                        
                  'total_record_number',
                        
                  #'total_record_number',

                        
                  #'is_import_failed',

                        
                  #'is_import_success',

                        
                  #'json_import_data',

                        
                  'json_check_validation',
                        
                  #'json_check_validation',

                        
                  'json_fail_data',
                        
                  #'json_fail_data',

                        
                  'import_status',
                        
                    #'get_import_status_obj',
                            
                  )
        ##fields = '__all__'
        #depth = 1
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
        # extra_fields = ['author_all']
        # def get_field_names(self, declared_fields, info):
    #     expanded_fields = super(NewspaperSerializer, self).get_field_names(declared_fields, info)

    #     if getattr(self.Meta, 'extra_fields', None):
    #         return expanded_fields + self.Meta.extra_fields
    #     else:
    #         return expanded_fields
    def get_serializer_context(self):
        return self.context['request'].data
    def get_request_user(self):
        return self.context['request'].user
    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            
            

            ########### Process (is_import_failed) BooleanField POST #############
            if "is_import_failed" not in validated_data and "is_import_failed" in request_data:
                if request_data['is_import_failed'][0] == "true":
                    validated_data["is_import_failed"] = True
                elif  request_data['is_import_failed'][0] == "false":
                    validated_data["is_import_failed"] = False
            elif "is_import_failed" not in request_data:
                validated_data["is_import_failed"] = False
                            

            ########### Process (is_import_success) BooleanField POST #############
            if "is_import_success" not in validated_data and "is_import_success" in request_data:
                if request_data['is_import_success'][0] == "true":
                    validated_data["is_import_success"] = True
                elif  request_data['is_import_success'][0] == "false":
                    validated_data["is_import_success"] = False
            elif "is_import_success" not in request_data:
                validated_data["is_import_success"] = True
                            

            ########### Process (import_status) ForeignKey POST #############
            # Lấy pk code của import_status từ request_data
            if "import_status" in validated_data:
                import_status = validated_data.pop('import_status')
            if "import_status" in request_data:
                import_status = request_data.pop('import_status')
             
                        
            instance = SystemMailTemplateImportData.objects.create(**validated_data)
            return instance
            ################################################
            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailTemplateImportData.objects.none()
 
    def update(self, instance, validated_data):
        try:
            for attr_name in validated_data:
                print('%s = %s' % (attr_name, validated_data[attr_name]))
            request_data = dict(self.get_serializer_context())
            #  validated_data["updated_by"]=self.get_request_user()
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        try:
            
            super(SystemMailTemplateImportDataOnlyViewsSerializer, self).update(instance, validated_data)
            
            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailTemplateImportData.objects.none()
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            



class SystemMailTemplateImportDataRemoveFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = SystemMailTemplateImportData
        fields = (
                  'name',
                  'uuid',
                  'code',)
        # fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data
    def get_request_user(self):
        return self.context['request'].user
    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            
            instance = SystemMailTemplateImportData.objects.create(**validated_data)
            
            ################################################
            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailTemplateImportData.objects.none()
            
    def update(self, instance, validated_data):
        try:
            for attr_name in validated_data:
                print('%s = %s' % (attr_name, validated_data[attr_name]))
            request_data = dict(self.get_serializer_context())
            # validated_data["updated_by"]=self.get_request_user()
            if 'attach-field' in request_data:
                validated_data[request_data["attach-field"][0]]=None
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        
        SystemMailTemplateImportData.objects.filter(uuid=instance.uuid).update(**validated_data)
        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret



class SystemMailTemplateImportStatusCreateSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SystemMailTemplateImportStatus
        fields = (
                
                'uuid',
                    
                'name',
                    
                'code',
                    
                'created_by',
                    
                'created_at',
                    
                'updated_by',
                    
                'updated_at',
                    
                  'name',
                        
                  'code',
                        
                  'friendly_code',
                        
                  'created_by',
                        
                  'created_at',
                        
                  'updated_by',
                        
                  'updated_at',
                        
                  'icon_class',
                        
                  'color_class',
                        
                )
        #fields = '__all__'
        #depth = 1
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
        # extra_fields = ['author_all']
        # def get_field_names(self, declared_fields, info):
    #     expanded_fields = super(NewspaperSerializer, self).get_field_names(declared_fields, info)

    #     if getattr(self.Meta, 'extra_fields', None):
    #         return expanded_fields + self.Meta.extra_fields
    #     else:
    #         return expanded_fields
    def get_serializer_context(self):
        return self.context['request'].data
    def get_request_user(self):
        return self.context['request'].user
    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            
            instance = SystemMailTemplateImportStatus.objects.create(**validated_data)
            ################################################
            
            

            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailTemplateImportStatus.objects.none()
 
    def update(self, instance, validated_data):
        try:
            for attr_name in validated_data:
                print('%s = %s' % (attr_name, validated_data[attr_name]))
            request_data = dict(self.get_serializer_context())
            #  validated_data["updated_by"]=self.get_request_user()
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        try:
            
            
            super(SystemMailTemplateImportStatusCreateSerializer, self).update(instance, validated_data)
            
            

            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailTemplateImportStatus.objects.none()
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            


            
class SystemMailTemplateImportStatusUpdateSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SystemMailTemplateImportStatus
        fields = (
                
                'uuid',
                    
                'name',
                    
                'code',
                    
                'created_by',
                    
                'created_at',
                    
                'updated_by',
                    
                'updated_at',
                    
                  'name',
                        
                  'code',
                        
                  'friendly_code',
                        
                  'created_by',
                        
                  'created_at',
                        
                  'updated_by',
                        
                  'updated_at',
                        
                  'icon_class',
                        
                  'color_class',
                        

                )
        # #fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data

    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            
            instance = SystemMailTemplateImportStatus.objects.create(**validated_data)
            
            

            return instance

        except Exception as xx:
            print(str(xx))

    def update(self, instance, validated_data):
        try:
            
            request_data = dict(self.get_serializer_context())
            
            super(SystemMailTemplateImportStatusUpdateSerializer, self).update(instance, validated_data)
            
            

            return instance
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        # super(SystemMailTemplateImportStatusUpdateSerializer, self).update(instance, validated_data)

        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            

            
class SystemMailTemplateImportStatusDetailsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SystemMailTemplateImportStatus
        # fields = (
        #             
                #'uuid',
                    
                #'name',
                    
                #'code',
                    
                #'created_by',
                    
                #'created_at',
                    
                #'updated_by',
                    
                #'updated_at',
                    
                  #'name',
                        
                  #'code',
                        
                  #'friendly_code',
                        
                  #'created_by',
                        
                  #'created_at',
                        
                  #'updated_by',
                        
                  #'updated_at',
                        
                  #'icon_class',
                        
                  #'color_class',
                        

        #         )
        fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data

    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        return SystemMailTemplateImportStatus.objects.create(**validated_data)

    def update(self, instance, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            
            super(SystemMailTemplateImportStatusDetailsSerializer, self).update(instance, validated_data)
            

            return instance
        except Exception as xx:
            print(str(xx))
        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            



class SystemMailTemplateImportStatusDeleteSerializer(serializers.ModelSerializer):
    class Meta:
        model = SystemMailTemplateImportStatus
        fields = (  
                    'uuid',
                    'name',
                    )
        # #fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data

    def create(self, validated_data):
        try:
            
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            
            
                        
            instance = SystemMailTemplateImportStatus.objects.create(**validated_data)
            

            return instance
        except Exception as xx:
            print(str(xx))
        return SystemMailTemplateImportStatus.objects.create(**validated_data)

    def update(self, instance, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            
            super(SystemMailTemplateImportStatusDeleteSerializer, self).update(instance, validated_data)
            
            return instance
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        # 
        # super(SystemMailTemplateImportStatusDeleteSerializer, self).update(instance, validated_data)
        

        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            


# Serializer trả về những thông cần thiết cho việc hiển thị ra danh sách.
class SystemMailTemplateImportStatusOnlyViewsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SystemMailTemplateImportStatus
        fields = (
                
                'uuid',
                    
                'name',
                    
                'code',
                    
                'created_by',
                    
                'created_at',
                    
                'updated_by',
                    
                'updated_at',
                    
                  'name',
                        
                  #'name',

                        
                  #'code',

                        
                  'friendly_code',
                        
                  #'friendly_code',

                        
                  #'created_by',

                        
                  #'created_at',

                        
                  #'updated_by',

                        
                  #'updated_at',

                        
                  'icon_class',
                        
                  #'icon_class',

                        
                  'color_class',
                        
                  #'color_class',

                        
                  )
        ##fields = '__all__'
        #depth = 1
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
        # extra_fields = ['author_all']
        # def get_field_names(self, declared_fields, info):
    #     expanded_fields = super(NewspaperSerializer, self).get_field_names(declared_fields, info)

    #     if getattr(self.Meta, 'extra_fields', None):
    #         return expanded_fields + self.Meta.extra_fields
    #     else:
    #         return expanded_fields
    def get_serializer_context(self):
        return self.context['request'].data
    def get_request_user(self):
        return self.context['request'].user
    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            
            
                        
            instance = SystemMailTemplateImportStatus.objects.create(**validated_data)
            return instance
            ################################################
            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailTemplateImportStatus.objects.none()
 
    def update(self, instance, validated_data):
        try:
            for attr_name in validated_data:
                print('%s = %s' % (attr_name, validated_data[attr_name]))
            request_data = dict(self.get_serializer_context())
            #  validated_data["updated_by"]=self.get_request_user()
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        #instance.save(**validated_data)
        try:
            
            super(SystemMailTemplateImportStatusOnlyViewsSerializer, self).update(instance, validated_data)
            
            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailTemplateImportStatus.objects.none()
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
            



class SystemMailTemplateImportStatusRemoveFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = SystemMailTemplateImportStatus
        fields = (
                  'name',
                  'uuid',
                  'code',)
        # fields = '__all__'
        lookup_field = 'uuid'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'uuid'}
        # }
    def get_serializer_context(self):
        return self.context['request'].data
    def get_request_user(self):
        return self.context['request'].user
    def create(self, validated_data):
        try:
            request_data = dict(self.get_serializer_context())
            print('request_data = %s' % request_data)
            #  validated_data["created_by"]=self.get_request_user()
            
            instance = SystemMailTemplateImportStatus.objects.create(**validated_data)
            
            ################################################
            return instance
        except Exception as xx:
            print(str(xx))
            return SystemMailTemplateImportStatus.objects.none()
            
    def update(self, instance, validated_data):
        try:
            for attr_name in validated_data:
                print('%s = %s' % (attr_name, validated_data[attr_name]))
            request_data = dict(self.get_serializer_context())
            # validated_data["updated_by"]=self.get_request_user()
            if 'attach-field' in request_data:
                validated_data[request_data["attach-field"][0]]=None
            print('request_data = %s' % request_data)
        except Exception as xx:
            print(str(xx))
        
        SystemMailTemplateImportStatus.objects.filter(uuid=instance.uuid).update(**validated_data)
        return instance
    def to_representation(self, instance):
        ret = super().to_representation(instance)
        # Here we filter the null values and creates a new dictionary
        # We use OrderedDict like in original method
        ret = OrderedDict(filter(itemgetter(1), ret.items()))
        return ret
