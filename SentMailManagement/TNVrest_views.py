

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

from django.http import Http404
from rest_framework import viewsets, status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication, SessionAuthentication, BasicAuthentication
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.parsers import FileUploadParser
from rest_framework.exceptions import ParseError
            
from rest_framework import generics
from rest_framework import filters
# from .models import *
from Router.models import *
from functools import reduce
import operator

from django.db.models import Q
from .TNVserializers import *


        
class SystemMailSenderConfigStandardListRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailSenderConfigListSerializer

    queryset = SystemMailSenderConfig.objects.all().order_by("-created_at")
    
    # queryset = SystemMailSenderConfig.objects.all().order_by("-created_at")
    # pagination_class = StandardResultsSetPagination
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailSenderConfig.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     self.perform_destroy(instance)
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    #
    # def perform_destroy(self, instance):
    #     instance.delete()
        
class SystemMailSenderConfigMediumListRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailSenderConfigListSerializer

    queryset = SystemMailSenderConfig.objects.all().order_by("-created_at")
    
    # queryset = SystemMailSenderConfig.objects.all().order_by("-created_at")
    # pagination_class = MediumResultsSetPagination
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailSenderConfig.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     self.perform_destroy(instance)
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    #
    # def perform_destroy(self, instance):
    #     instance.delete()
        
class SystemMailSenderConfigLargeListRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailSenderConfigListSerializer

    queryset = SystemMailSenderConfig.objects.all().order_by("-created_at")
    
    # queryset = SystemMailSenderConfig.objects.all().order_by("-created_at")
    # pagination_class = LargeResultsSetPagination
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailSenderConfig.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     self.perform_destroy(instance)
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    #
    # def perform_destroy(self, instance):
    #     instance.delete()


            
class SystemMailSenderConfigStandardTableRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailSenderConfigOnlyViewsSerializer

    queryset = SystemMailSenderConfig.objects.all().order_by("-created_at")
    
    # queryset = SystemMailSenderConfig.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailSenderConfig.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailSenderConfig.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailSenderConfig.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailSenderConfigMediumTableRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailSenderConfigOnlyViewsSerializer

    queryset = SystemMailSenderConfig.objects.all().order_by("-created_at")
    
    # queryset = SystemMailSenderConfig.objects.all().order_by("-created_at")
    pagination_class = MediumResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailSenderConfig.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set
        
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailSenderConfig.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailSenderConfig.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailSenderConfigLargeTableRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailSenderConfigOnlyViewsSerializer

    queryset = SystemMailSenderConfig.objects.all().order_by("-created_at")
    
    # queryset = SystemMailSenderConfig.objects.all().order_by("-created_at")
    pagination_class = LargeResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailSenderConfig.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailSenderConfig.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailSenderConfig.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()



class SystemMailSenderConfigDetailRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailSenderConfigDetailsSerializer

    queryset = SystemMailSenderConfig.objects.all().order_by("-created_at")
    
    # queryset = SystemMailSenderConfig.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailSenderConfig.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailSenderConfig.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailSenderConfig.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailSenderConfigMediumDetailRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailSenderConfigDetailsSerializer

    queryset = SystemMailSenderConfig.objects.all().order_by("-created_at")
    
    # queryset = SystemMailSenderConfig.objects.all().order_by("-created_at")
    pagination_class = MediumResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailSenderConfig.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailSenderConfig.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailSenderConfig.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailSenderConfigLargeDetailRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailSenderConfigDetailsSerializer

    queryset = SystemMailSenderConfig.objects.all().order_by("-created_at")
    
    # queryset = SystemMailSenderConfig.objects.all().order_by("-created_at")
    pagination_class = LargeResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailSenderConfig.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailSenderConfig.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailSenderConfig.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()



class SystemMailSenderConfigCreateRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailSenderConfigCreateSerializer

    queryset = SystemMailSenderConfig.objects.all().order_by("-created_at")
    
    # queryset = SystemMailSenderConfig.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailSenderConfig.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailSenderConfig.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailSenderConfig.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()



class SystemMailSenderConfigUpdateRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailSenderConfigUpdateSerializer

    queryset = SystemMailSenderConfig.objects.all().order_by("-created_at")
    
    # queryset = SystemMailSenderConfig.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailSenderConfig.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailSenderConfig.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailSenderConfig.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()


           
class SystemMailSenderConfigDeleteRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailSenderConfigDeleteSerializer

    queryset = SystemMailSenderConfig.objects.all().order_by("-created_at")
    
    #queryset = SystemMailSenderConfig.objects.all().order_by("-created_at")
    # pagination_class = StandardResultsSetPagination
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailSenderConfig.objects.filter(author=user)

    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     self.perform_destroy(instance)
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    #
    # def perform_destroy(self, instance):
    #     instance.delete()

     


class SystemMailSenderConfigStandardSearchRestApiView(generics.ListCreateAPIView):
    serializer_class = SystemMailSenderConfigOnlyViewsSerializer

    queryset = SystemMailSenderConfig.objects.all()
    
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'uuid'
    search_fields = [
        
            'name',
                    
            'friendly_code',
                    
            'organization__name',
                    
            'email_server__name',
                    
            'email',
                    
            'password',
                    
            'app_password',
                    
            'hr_created_by__name',
                    
            'hr_updated_by__name',
                    
        ]
    # search_fields = ['name']

    filter_backends = (filters.SearchFilter,)
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailSenderConfig.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailSenderConfigMediumSearchRestApiView(generics.ListCreateAPIView):
    serializer_class = SystemMailSenderConfigOnlyViewsSerializer

    queryset = SystemMailSenderConfig.objects.all().order_by("-created_at")
    
    pagination_class = MediumResultsSetPagination
    # lookup_field = 'uuid'
    search_fields = [
        
            'name',
                    
            'friendly_code',
                    
            'organization__name',
                    
            'email_server__name',
                    
            'email',
                    
            'password',
                    
            'app_password',
                    
            'hr_created_by__name',
                    
            'hr_updated_by__name',
                    
        ]
    # search_fields = ['name']

    filter_backends = (filters.SearchFilter,)
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailSenderConfig.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailSenderConfigLargeSearchRestApiView(generics.ListCreateAPIView):
    serializer_class = SystemMailSenderConfigOnlyViewsSerializer

    queryset = SystemMailSenderConfig.objects.all().order_by("-created_at")
    
    pagination_class = LargeResultsSetPagination
    # lookup_field = 'uuid'

    search_fields = [
        
            'name',
                    
            'friendly_code',
                    
            'organization__name',
                    
            'email_server__name',
                    
            'email',
                    
            'password',
                    
            'app_password',
                    
            'hr_created_by__name',
                    
            'hr_updated_by__name',
                    
        ]
    # search_fields = ['name']

    filter_backends = (filters.SearchFilter,)
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     return SystemMailSenderConfig.objects.all().order_by("-created_at")

    def get_queryset(self):
        query_set = SystemMailSenderConfig.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()


                        
class SystemMailSenderConfigStandardFilterRestApiView(generics.ListAPIView):
    serializer_class = SystemMailSenderConfigDetailsSerializer

    # queryset = SystemMailSenderConfig.objects.all().order_by("-created_at")
    
    # queryset = SystemMailSenderConfig.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'uuid'
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):

        queryset = SystemMailSenderConfig.objects.all().order_by("-created_at")
    
        # queryset =  SystemMailSenderConfig.objects.all().order_by("-created_at")
        query_params = self.request.query_params
        if '_' in query_params:
            query_params._mutable=True
            print(query_params['_'])
            query_params.pop('_')
            query_params._mutable=False

        if 'page' in query_params:
            query_params._mutable=True
            print(query_params['page'])
            query_params.pop('page')
            query_params._mutable=False

        if 'start_date__gte' in query_params:
            query_params._mutable=True
            print(query_params['start_date__gte'])
            start_date = str(query_params.pop('start_date__gte')[0])
            query_params._mutable=False

        if 'end_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['end_date__lte'])
            end_date = str(query_params.pop('end_date__lte')[0])
            query_params._mutable=False
            
        if 'expriry_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['expriry_date__lte'])
            expriry_date = str(query_params.pop('expriry_date__lte')[0])
            query_params._mutable=False
        try:
            if 'start_date' in locals():
                if 'expriry_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(start_date__gte=start_date)

            elif 'end_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,end_date__lte=end_date)
                else:
                    queryset = queryset.filter(end_date__lte=end_date)

            elif 'expriry_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(expriry_date__lte=expriry_date)
        except Exception as xx:
            print("[sFilterRestApiView] Error: %s" % str(xx))
            pass
            
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        
        for query_key in query_params.dict().keys():
            query_params._mutable=True
            if hasattr(self.serializer_class.Meta.model,query_key) and  isinstance(self.serializer_class.Meta.model._meta.get_field(query_key),models.BooleanField):
                if str(query_params[query_key]).lower() == "true":
                    query_params[query_key] = True
                elif str(query_params[query_key]).lower() == "false":
                    query_params[query_key] = False
                else:
                    query_params.pop(query_key)
        query_params._mutable=False          
        if len(query_params)>0:
            # return queryset.filter(**query_params.dict())
            return queryset.filter(reduce(operator.and_, 
                                    (Q(**d) for d in (dict([i]) for i in query_params.dict().items()))))
        else:
            return queryset

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

                        
class SystemMailSenderConfigMediumFilterRestApiView(generics.ListAPIView):
    serializer_class = SystemMailSenderConfigDetailsSerializer

    # queryset = SystemMailSenderConfig.objects.all().order_by("created_at")
    
    # queryset = SystemMailSenderConfig.objects.all().order_by("created_at")
    pagination_class = MediumResultsSetPagination
    # lookup_field = 'uuid'
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):

        queryset = SystemMailSenderConfig.objects.all().order_by("created_at")
    
        # queryset =  SystemMailSenderConfig.objects.all().order_by("created_at")
        query_params = self.request.query_params
        if '_' in query_params:
            query_params._mutable=True
            print(query_params['_'])
            query_params.pop('_')
            query_params._mutable=False

        if 'page' in query_params:
            query_params._mutable=True
            print(query_params['page'])
            query_params.pop('page')
            query_params._mutable=False

        if 'start_date__gte' in query_params:
            query_params._mutable=True
            print(query_params['start_date__gte'])
            start_date = str(query_params.pop('start_date__gte')[0])
            query_params._mutable=False

        if 'end_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['end_date__lte'])
            end_date = str(query_params.pop('end_date__lte')[0])
            query_params._mutable=False
            
        if 'expriry_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['expriry_date__lte'])
            expriry_date = str(query_params.pop('expriry_date__lte')[0])
            query_params._mutable=False
        try:
            if 'start_date' in locals():
                if 'expriry_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(start_date__gte=start_date)

            elif 'end_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,end_date__lte=end_date)
                else:
                    queryset = queryset.filter(end_date__lte=end_date)

            elif 'expriry_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(expriry_date__lte=expriry_date)
        except Exception as xx:
            print("[sFilterRestApiView] Error: %s" % str(xx))
            pass
            
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        
        for query_key in query_params.dict().keys():
            query_params._mutable=True
            if hasattr(self.serializer_class.Meta.model,query_key) and  isinstance(self.serializer_class.Meta.model._meta.get_field(query_key),models.BooleanField):
                if str(query_params[query_key]).lower() == "true":
                    query_params[query_key] = True
                elif str(query_params[query_key]).lower() == "false":
                    query_params[query_key] = False
                else:
                    query_params.pop(query_key)
        query_params._mutable=False          
        
        if len(query_params)>0:
            # return queryset.filter(**query_params.dict())
            return queryset.filter(reduce(operator.and_, 
                                    (Q(**d) for d in (dict([i]) for i in query_params.dict().items()))))
        else:
            return queryset

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()
                        
class SystemMailSenderConfigLargeFilterRestApiView(generics.ListAPIView):
    serializer_class = SystemMailSenderConfigDetailsSerializer

    # queryset = SystemMailSenderConfig.objects.all().order_by("created_at")
    
    # queryset = SystemMailSenderConfig.objects.all().order_by("created_at")
    pagination_class = LargeResultsSetPagination
    # lookup_field = 'uuid'
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):

        queryset = SystemMailSenderConfig.objects.all().order_by("created_at")
    
        # queryset =  SystemMailSenderConfig.objects.all().order_by("created_at")
        query_params = self.request.query_params
        if '_' in query_params:
            query_params._mutable=True
            print(query_params['_'])
            query_params.pop('_')
            query_params._mutable=False

        if 'page' in query_params:
            query_params._mutable=True
            print(query_params['page'])
            query_params.pop('page')
            query_params._mutable=False

        if 'start_date__gte' in query_params:
            query_params._mutable=True
            print(query_params['start_date__gte'])
            start_date = str(query_params.pop('start_date__gte')[0])
            query_params._mutable=False

        if 'end_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['end_date__lte'])
            end_date = str(query_params.pop('end_date__lte')[0])
            query_params._mutable=False
            
        if 'expriry_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['expriry_date__lte'])
            expriry_date = str(query_params.pop('expriry_date__lte')[0])
            query_params._mutable=False
        try:
            if 'start_date' in locals():
                if 'expriry_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(start_date__gte=start_date)

            elif 'end_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,end_date__lte=end_date)
                else:
                    queryset = queryset.filter(end_date__lte=end_date)

            elif 'expriry_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(expriry_date__lte=expriry_date)
        except Exception as xx:
            print("[sFilterRestApiView] Error: %s" % str(xx))
            pass
            
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        
        for query_key in query_params.dict().keys():
            query_params._mutable=True
            if hasattr(self.serializer_class.Meta.model,query_key) and  isinstance(self.serializer_class.Meta.model._meta.get_field(query_key),models.BooleanField):
                if str(query_params[query_key]).lower() == "true":
                    query_params[query_key] = True
                elif str(query_params[query_key]).lower() == "false":
                    query_params[query_key] = False
                else:
                    query_params.pop(query_key)
        query_params._mutable=False          
        if len(query_params)>0:
            # return queryset.filter(**query_params.dict())
            return queryset.filter(reduce(operator.and_, 
                                    (Q(**d) for d in (dict([i]) for i in query_params.dict().items()))))
        else:
            return queryset

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()



            
class SystemMailSenderConfigRemoveFileRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailSenderConfigRemoveFileSerializer

    queryset = SystemMailSenderConfig.objects.all().order_by("-created_at")
    
    # queryset = SystemMailSenderConfig.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailSenderConfig.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailSenderConfig.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailSenderConfig.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

    

        
class SystemMailTargetStandardListRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTargetListSerializer

    queryset = SystemMailTarget.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTarget.objects.all().order_by("-created_at")
    # pagination_class = StandardResultsSetPagination
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailTarget.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     self.perform_destroy(instance)
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    #
    # def perform_destroy(self, instance):
    #     instance.delete()
        
class SystemMailTargetMediumListRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTargetListSerializer

    queryset = SystemMailTarget.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTarget.objects.all().order_by("-created_at")
    # pagination_class = MediumResultsSetPagination
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailTarget.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     self.perform_destroy(instance)
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    #
    # def perform_destroy(self, instance):
    #     instance.delete()
        
class SystemMailTargetLargeListRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTargetListSerializer

    queryset = SystemMailTarget.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTarget.objects.all().order_by("-created_at")
    # pagination_class = LargeResultsSetPagination
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailTarget.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     self.perform_destroy(instance)
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    #
    # def perform_destroy(self, instance):
    #     instance.delete()


            
class SystemMailTargetStandardTableRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTargetOnlyViewsSerializer

    queryset = SystemMailTarget.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTarget.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailTarget.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailTarget.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailTarget.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailTargetMediumTableRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTargetOnlyViewsSerializer

    queryset = SystemMailTarget.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTarget.objects.all().order_by("-created_at")
    pagination_class = MediumResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailTarget.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set
        
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailTarget.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailTarget.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailTargetLargeTableRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTargetOnlyViewsSerializer

    queryset = SystemMailTarget.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTarget.objects.all().order_by("-created_at")
    pagination_class = LargeResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailTarget.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailTarget.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailTarget.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()



class SystemMailTargetDetailRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTargetDetailsSerializer

    queryset = SystemMailTarget.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTarget.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailTarget.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailTarget.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailTarget.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailTargetMediumDetailRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTargetDetailsSerializer

    queryset = SystemMailTarget.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTarget.objects.all().order_by("-created_at")
    pagination_class = MediumResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailTarget.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailTarget.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailTarget.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailTargetLargeDetailRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTargetDetailsSerializer

    queryset = SystemMailTarget.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTarget.objects.all().order_by("-created_at")
    pagination_class = LargeResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailTarget.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailTarget.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailTarget.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()



class SystemMailTargetCreateRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTargetCreateSerializer

    queryset = SystemMailTarget.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTarget.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailTarget.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailTarget.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailTarget.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()



class SystemMailTargetUpdateRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTargetUpdateSerializer

    queryset = SystemMailTarget.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTarget.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailTarget.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailTarget.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailTarget.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()


           
class SystemMailTargetDeleteRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTargetDeleteSerializer

    queryset = SystemMailTarget.objects.all().order_by("-created_at")
    
    #queryset = SystemMailTarget.objects.all().order_by("-created_at")
    # pagination_class = StandardResultsSetPagination
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailTarget.objects.filter(author=user)

    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     self.perform_destroy(instance)
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    #
    # def perform_destroy(self, instance):
    #     instance.delete()

     


class SystemMailTargetStandardSearchRestApiView(generics.ListCreateAPIView):
    serializer_class = SystemMailTargetOnlyViewsSerializer

    queryset = SystemMailTarget.objects.all()
    
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'uuid'
    search_fields = [
        
            'name',
                    
            'friendly_code',
                    
            'email_template__name',
                    
            'content',
                    
            'status_code',
                    
            'status_text',
                    
            'organization__name',
                    
            'hr_created_by__name',
                    
            'hr_updated_by__name',
                    
        ]
    # search_fields = ['name']

    filter_backends = (filters.SearchFilter,)
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailTarget.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailTargetMediumSearchRestApiView(generics.ListCreateAPIView):
    serializer_class = SystemMailTargetOnlyViewsSerializer

    queryset = SystemMailTarget.objects.all().order_by("-created_at")
    
    pagination_class = MediumResultsSetPagination
    # lookup_field = 'uuid'
    search_fields = [
        
            'name',
                    
            'friendly_code',
                    
            'email_template__name',
                    
            'content',
                    
            'status_code',
                    
            'status_text',
                    
            'organization__name',
                    
            'hr_created_by__name',
                    
            'hr_updated_by__name',
                    
        ]
    # search_fields = ['name']

    filter_backends = (filters.SearchFilter,)
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailTarget.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailTargetLargeSearchRestApiView(generics.ListCreateAPIView):
    serializer_class = SystemMailTargetOnlyViewsSerializer

    queryset = SystemMailTarget.objects.all().order_by("-created_at")
    
    pagination_class = LargeResultsSetPagination
    # lookup_field = 'uuid'

    search_fields = [
        
            'name',
                    
            'friendly_code',
                    
            'email_template__name',
                    
            'content',
                    
            'status_code',
                    
            'status_text',
                    
            'organization__name',
                    
            'hr_created_by__name',
                    
            'hr_updated_by__name',
                    
        ]
    # search_fields = ['name']

    filter_backends = (filters.SearchFilter,)
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     return SystemMailTarget.objects.all().order_by("-created_at")

    def get_queryset(self):
        query_set = SystemMailTarget.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()


                        
class SystemMailTargetStandardFilterRestApiView(generics.ListAPIView):
    serializer_class = SystemMailTargetDetailsSerializer

    # queryset = SystemMailTarget.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTarget.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'uuid'
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):

        queryset = SystemMailTarget.objects.all().order_by("-created_at")
    
        # queryset =  SystemMailTarget.objects.all().order_by("-created_at")
        query_params = self.request.query_params
        if '_' in query_params:
            query_params._mutable=True
            print(query_params['_'])
            query_params.pop('_')
            query_params._mutable=False

        if 'page' in query_params:
            query_params._mutable=True
            print(query_params['page'])
            query_params.pop('page')
            query_params._mutable=False

        if 'start_date__gte' in query_params:
            query_params._mutable=True
            print(query_params['start_date__gte'])
            start_date = str(query_params.pop('start_date__gte')[0])
            query_params._mutable=False

        if 'end_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['end_date__lte'])
            end_date = str(query_params.pop('end_date__lte')[0])
            query_params._mutable=False
            
        if 'expriry_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['expriry_date__lte'])
            expriry_date = str(query_params.pop('expriry_date__lte')[0])
            query_params._mutable=False
        try:
            if 'start_date' in locals():
                if 'expriry_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(start_date__gte=start_date)

            elif 'end_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,end_date__lte=end_date)
                else:
                    queryset = queryset.filter(end_date__lte=end_date)

            elif 'expriry_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(expriry_date__lte=expriry_date)
        except Exception as xx:
            print("[sFilterRestApiView] Error: %s" % str(xx))
            pass
            
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        
        for query_key in query_params.dict().keys():
            query_params._mutable=True
            if hasattr(self.serializer_class.Meta.model,query_key) and  isinstance(self.serializer_class.Meta.model._meta.get_field(query_key),models.BooleanField):
                if str(query_params[query_key]).lower() == "true":
                    query_params[query_key] = True
                elif str(query_params[query_key]).lower() == "false":
                    query_params[query_key] = False
                else:
                    query_params.pop(query_key)
        query_params._mutable=False          
        if len(query_params)>0:
            # return queryset.filter(**query_params.dict())
            return queryset.filter(reduce(operator.and_, 
                                    (Q(**d) for d in (dict([i]) for i in query_params.dict().items()))))
        else:
            return queryset

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

                        
class SystemMailTargetMediumFilterRestApiView(generics.ListAPIView):
    serializer_class = SystemMailTargetDetailsSerializer

    # queryset = SystemMailTarget.objects.all().order_by("created_at")
    
    # queryset = SystemMailTarget.objects.all().order_by("created_at")
    pagination_class = MediumResultsSetPagination
    # lookup_field = 'uuid'
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):

        queryset = SystemMailTarget.objects.all().order_by("created_at")
    
        # queryset =  SystemMailTarget.objects.all().order_by("created_at")
        query_params = self.request.query_params
        if '_' in query_params:
            query_params._mutable=True
            print(query_params['_'])
            query_params.pop('_')
            query_params._mutable=False

        if 'page' in query_params:
            query_params._mutable=True
            print(query_params['page'])
            query_params.pop('page')
            query_params._mutable=False

        if 'start_date__gte' in query_params:
            query_params._mutable=True
            print(query_params['start_date__gte'])
            start_date = str(query_params.pop('start_date__gte')[0])
            query_params._mutable=False

        if 'end_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['end_date__lte'])
            end_date = str(query_params.pop('end_date__lte')[0])
            query_params._mutable=False
            
        if 'expriry_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['expriry_date__lte'])
            expriry_date = str(query_params.pop('expriry_date__lte')[0])
            query_params._mutable=False
        try:
            if 'start_date' in locals():
                if 'expriry_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(start_date__gte=start_date)

            elif 'end_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,end_date__lte=end_date)
                else:
                    queryset = queryset.filter(end_date__lte=end_date)

            elif 'expriry_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(expriry_date__lte=expriry_date)
        except Exception as xx:
            print("[sFilterRestApiView] Error: %s" % str(xx))
            pass
            
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        
        for query_key in query_params.dict().keys():
            query_params._mutable=True
            if hasattr(self.serializer_class.Meta.model,query_key) and  isinstance(self.serializer_class.Meta.model._meta.get_field(query_key),models.BooleanField):
                if str(query_params[query_key]).lower() == "true":
                    query_params[query_key] = True
                elif str(query_params[query_key]).lower() == "false":
                    query_params[query_key] = False
                else:
                    query_params.pop(query_key)
        query_params._mutable=False          
        
        if len(query_params)>0:
            # return queryset.filter(**query_params.dict())
            return queryset.filter(reduce(operator.and_, 
                                    (Q(**d) for d in (dict([i]) for i in query_params.dict().items()))))
        else:
            return queryset

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()
                        
class SystemMailTargetLargeFilterRestApiView(generics.ListAPIView):
    serializer_class = SystemMailTargetDetailsSerializer

    # queryset = SystemMailTarget.objects.all().order_by("created_at")
    
    # queryset = SystemMailTarget.objects.all().order_by("created_at")
    pagination_class = LargeResultsSetPagination
    # lookup_field = 'uuid'
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):

        queryset = SystemMailTarget.objects.all().order_by("created_at")
    
        # queryset =  SystemMailTarget.objects.all().order_by("created_at")
        query_params = self.request.query_params
        if '_' in query_params:
            query_params._mutable=True
            print(query_params['_'])
            query_params.pop('_')
            query_params._mutable=False

        if 'page' in query_params:
            query_params._mutable=True
            print(query_params['page'])
            query_params.pop('page')
            query_params._mutable=False

        if 'start_date__gte' in query_params:
            query_params._mutable=True
            print(query_params['start_date__gte'])
            start_date = str(query_params.pop('start_date__gte')[0])
            query_params._mutable=False

        if 'end_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['end_date__lte'])
            end_date = str(query_params.pop('end_date__lte')[0])
            query_params._mutable=False
            
        if 'expriry_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['expriry_date__lte'])
            expriry_date = str(query_params.pop('expriry_date__lte')[0])
            query_params._mutable=False
        try:
            if 'start_date' in locals():
                if 'expriry_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(start_date__gte=start_date)

            elif 'end_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,end_date__lte=end_date)
                else:
                    queryset = queryset.filter(end_date__lte=end_date)

            elif 'expriry_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(expriry_date__lte=expriry_date)
        except Exception as xx:
            print("[sFilterRestApiView] Error: %s" % str(xx))
            pass
            
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        
        for query_key in query_params.dict().keys():
            query_params._mutable=True
            if hasattr(self.serializer_class.Meta.model,query_key) and  isinstance(self.serializer_class.Meta.model._meta.get_field(query_key),models.BooleanField):
                if str(query_params[query_key]).lower() == "true":
                    query_params[query_key] = True
                elif str(query_params[query_key]).lower() == "false":
                    query_params[query_key] = False
                else:
                    query_params.pop(query_key)
        query_params._mutable=False          
        if len(query_params)>0:
            # return queryset.filter(**query_params.dict())
            return queryset.filter(reduce(operator.and_, 
                                    (Q(**d) for d in (dict([i]) for i in query_params.dict().items()))))
        else:
            return queryset

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()



            
class SystemMailTargetRemoveFileRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTargetRemoveFileSerializer

    queryset = SystemMailTarget.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTarget.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailTarget.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailTarget.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailTarget.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

    

        
class SystemMailMailStandardListRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailMailListSerializer

    queryset = SystemMailMail.objects.all().order_by("-created_at")
    
    # queryset = SystemMailMail.objects.all().order_by("-created_at")
    # pagination_class = StandardResultsSetPagination
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailMail.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     self.perform_destroy(instance)
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    #
    # def perform_destroy(self, instance):
    #     instance.delete()
        
class SystemMailMailMediumListRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailMailListSerializer

    queryset = SystemMailMail.objects.all().order_by("-created_at")
    
    # queryset = SystemMailMail.objects.all().order_by("-created_at")
    # pagination_class = MediumResultsSetPagination
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailMail.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     self.perform_destroy(instance)
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    #
    # def perform_destroy(self, instance):
    #     instance.delete()
        
class SystemMailMailLargeListRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailMailListSerializer

    queryset = SystemMailMail.objects.all().order_by("-created_at")
    
    # queryset = SystemMailMail.objects.all().order_by("-created_at")
    # pagination_class = LargeResultsSetPagination
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailMail.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     self.perform_destroy(instance)
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    #
    # def perform_destroy(self, instance):
    #     instance.delete()


            
class SystemMailMailStandardTableRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailMailOnlyViewsSerializer

    queryset = SystemMailMail.objects.all().order_by("-created_at")
    
    # queryset = SystemMailMail.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailMail.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailMail.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailMail.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailMailMediumTableRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailMailOnlyViewsSerializer

    queryset = SystemMailMail.objects.all().order_by("-created_at")
    
    # queryset = SystemMailMail.objects.all().order_by("-created_at")
    pagination_class = MediumResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailMail.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set
        
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailMail.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailMail.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailMailLargeTableRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailMailOnlyViewsSerializer

    queryset = SystemMailMail.objects.all().order_by("-created_at")
    
    # queryset = SystemMailMail.objects.all().order_by("-created_at")
    pagination_class = LargeResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailMail.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailMail.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailMail.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()



class SystemMailMailDetailRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailMailDetailsSerializer

    queryset = SystemMailMail.objects.all().order_by("-created_at")
    
    # queryset = SystemMailMail.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailMail.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailMail.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailMail.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailMailMediumDetailRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailMailDetailsSerializer

    queryset = SystemMailMail.objects.all().order_by("-created_at")
    
    # queryset = SystemMailMail.objects.all().order_by("-created_at")
    pagination_class = MediumResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailMail.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailMail.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailMail.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailMailLargeDetailRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailMailDetailsSerializer

    queryset = SystemMailMail.objects.all().order_by("-created_at")
    
    # queryset = SystemMailMail.objects.all().order_by("-created_at")
    pagination_class = LargeResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailMail.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailMail.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailMail.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()



class SystemMailMailCreateRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailMailCreateSerializer

    queryset = SystemMailMail.objects.all().order_by("-created_at")
    
    # queryset = SystemMailMail.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailMail.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailMail.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailMail.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailMailCreateRestApiView_ComposeMail(viewsets.ModelViewSet):
    serializer_class = SystemMailMailCreateSerializer_ComposeMail

    queryset = SystemMailMail.objects.all().order_by("-created_at")
    
    # queryset = SystemMailMail.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailMail.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailMail.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailMail.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailMailUpdateRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailMailUpdateSerializer

    queryset = SystemMailMail.objects.all().order_by("-created_at")
    
    # queryset = SystemMailMail.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailMail.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailMail.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailMail.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()


           
class SystemMailMailDeleteRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailMailDeleteSerializer

    queryset = SystemMailMail.objects.all().order_by("-created_at")
    
    #queryset = SystemMailMail.objects.all().order_by("-created_at")
    # pagination_class = StandardResultsSetPagination
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailMail.objects.filter(author=user)

    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     self.perform_destroy(instance)
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    #
    # def perform_destroy(self, instance):
    #     instance.delete()

     


class SystemMailMailStandardSearchRestApiView(generics.ListCreateAPIView):
    serializer_class = SystemMailMailOnlyViewsSerializer

    queryset = SystemMailMail.objects.all()
    
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'uuid'
    search_fields = [
        
            'name',
                    
            'friendly_code',
                    
            'organization__name',
                    
            'mail_sender__name',
                    
            'email_template__name',
                    
            'mail_target__name',
                    
            'addressee__name',
                    
            'content',
                    
            'status_code',
                    
            'status_text',
                    
            'hr_created_by__name',
                    
            'hr_updated_by__name',
                    
        ]
    # search_fields = ['name']

    filter_backends = (filters.SearchFilter,)
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailMail.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailMailMediumSearchRestApiView(generics.ListCreateAPIView):
    serializer_class = SystemMailMailOnlyViewsSerializer

    queryset = SystemMailMail.objects.all().order_by("-created_at")
    
    pagination_class = MediumResultsSetPagination
    # lookup_field = 'uuid'
    search_fields = [
        
            'name',
                    
            'friendly_code',
                    
            'organization__name',
                    
            'mail_sender__name',
                    
            'email_template__name',
                    
            'mail_target__name',
                    
            'addressee__name',
                    
            'content',
                    
            'status_code',
                    
            'status_text',
                    
            'hr_created_by__name',
                    
            'hr_updated_by__name',
                    
        ]
    # search_fields = ['name']

    filter_backends = (filters.SearchFilter,)
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailMail.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailMailLargeSearchRestApiView(generics.ListCreateAPIView):
    serializer_class = SystemMailMailOnlyViewsSerializer

    queryset = SystemMailMail.objects.all().order_by("-created_at")
    
    pagination_class = LargeResultsSetPagination
    # lookup_field = 'uuid'

    search_fields = [
        
            'name',
                    
            'friendly_code',
                    
            'organization__name',
                    
            'mail_sender__name',
                    
            'email_template__name',
                    
            'mail_target__name',
                    
            'addressee__name',
                    
            'content',
                    
            'status_code',
                    
            'status_text',
                    
            'hr_created_by__name',
                    
            'hr_updated_by__name',
                    
        ]
    # search_fields = ['name']

    filter_backends = (filters.SearchFilter,)
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     return SystemMailMail.objects.all().order_by("-created_at")

    def get_queryset(self):
        query_set = SystemMailMail.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()


                        
class SystemMailMailStandardFilterRestApiView(generics.ListAPIView):
    serializer_class = SystemMailMailDetailsSerializer

    # queryset = SystemMailMail.objects.all().order_by("-created_at")
    
    # queryset = SystemMailMail.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'uuid'
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):

        queryset = SystemMailMail.objects.all().order_by("-created_at")
    
        # queryset =  SystemMailMail.objects.all().order_by("-created_at")
        query_params = self.request.query_params
        if '_' in query_params:
            query_params._mutable=True
            print(query_params['_'])
            query_params.pop('_')
            query_params._mutable=False

        if 'page' in query_params:
            query_params._mutable=True
            print(query_params['page'])
            query_params.pop('page')
            query_params._mutable=False

        if 'start_date__gte' in query_params:
            query_params._mutable=True
            print(query_params['start_date__gte'])
            start_date = str(query_params.pop('start_date__gte')[0])
            query_params._mutable=False

        if 'end_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['end_date__lte'])
            end_date = str(query_params.pop('end_date__lte')[0])
            query_params._mutable=False
            
        if 'expriry_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['expriry_date__lte'])
            expriry_date = str(query_params.pop('expriry_date__lte')[0])
            query_params._mutable=False
        try:
            if 'start_date' in locals():
                if 'expriry_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(start_date__gte=start_date)

            elif 'end_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,end_date__lte=end_date)
                else:
                    queryset = queryset.filter(end_date__lte=end_date)

            elif 'expriry_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(expriry_date__lte=expriry_date)
        except Exception as xx:
            print("[sFilterRestApiView] Error: %s" % str(xx))
            pass
            
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        
        for query_key in query_params.dict().keys():
            query_params._mutable=True
            if hasattr(self.serializer_class.Meta.model,query_key) and  isinstance(self.serializer_class.Meta.model._meta.get_field(query_key),models.BooleanField):
                if str(query_params[query_key]).lower() == "true":
                    query_params[query_key] = True
                elif str(query_params[query_key]).lower() == "false":
                    query_params[query_key] = False
                else:
                    query_params.pop(query_key)
        query_params._mutable=False          
        if len(query_params)>0:
            # return queryset.filter(**query_params.dict())
            return queryset.filter(reduce(operator.and_, 
                                    (Q(**d) for d in (dict([i]) for i in query_params.dict().items()))))
        else:
            return queryset

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

                        
class SystemMailMailMediumFilterRestApiView(generics.ListAPIView):
    serializer_class = SystemMailMailDetailsSerializer

    # queryset = SystemMailMail.objects.all().order_by("created_at")
    
    # queryset = SystemMailMail.objects.all().order_by("created_at")
    pagination_class = MediumResultsSetPagination
    # lookup_field = 'uuid'
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):

        queryset = SystemMailMail.objects.all().order_by("created_at")
    
        # queryset =  SystemMailMail.objects.all().order_by("created_at")
        query_params = self.request.query_params
        if '_' in query_params:
            query_params._mutable=True
            print(query_params['_'])
            query_params.pop('_')
            query_params._mutable=False

        if 'page' in query_params:
            query_params._mutable=True
            print(query_params['page'])
            query_params.pop('page')
            query_params._mutable=False

        if 'start_date__gte' in query_params:
            query_params._mutable=True
            print(query_params['start_date__gte'])
            start_date = str(query_params.pop('start_date__gte')[0])
            query_params._mutable=False

        if 'end_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['end_date__lte'])
            end_date = str(query_params.pop('end_date__lte')[0])
            query_params._mutable=False
            
        if 'expriry_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['expriry_date__lte'])
            expriry_date = str(query_params.pop('expriry_date__lte')[0])
            query_params._mutable=False
        try:
            if 'start_date' in locals():
                if 'expriry_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(start_date__gte=start_date)

            elif 'end_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,end_date__lte=end_date)
                else:
                    queryset = queryset.filter(end_date__lte=end_date)

            elif 'expriry_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(expriry_date__lte=expriry_date)
        except Exception as xx:
            print("[sFilterRestApiView] Error: %s" % str(xx))
            pass
            
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        
        for query_key in query_params.dict().keys():
            query_params._mutable=True
            if hasattr(self.serializer_class.Meta.model,query_key) and  isinstance(self.serializer_class.Meta.model._meta.get_field(query_key),models.BooleanField):
                if str(query_params[query_key]).lower() == "true":
                    query_params[query_key] = True
                elif str(query_params[query_key]).lower() == "false":
                    query_params[query_key] = False
                else:
                    query_params.pop(query_key)
        query_params._mutable=False          
        
        if len(query_params)>0:
            # return queryset.filter(**query_params.dict())
            return queryset.filter(reduce(operator.and_, 
                                    (Q(**d) for d in (dict([i]) for i in query_params.dict().items()))))
        else:
            return queryset

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()
                        
class SystemMailMailLargeFilterRestApiView(generics.ListAPIView):
    serializer_class = SystemMailMailDetailsSerializer

    # queryset = SystemMailMail.objects.all().order_by("created_at")
    
    # queryset = SystemMailMail.objects.all().order_by("created_at")
    pagination_class = LargeResultsSetPagination
    # lookup_field = 'uuid'
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):

        queryset = SystemMailMail.objects.all().order_by("created_at")
    
        # queryset =  SystemMailMail.objects.all().order_by("created_at")
        query_params = self.request.query_params
        if '_' in query_params:
            query_params._mutable=True
            print(query_params['_'])
            query_params.pop('_')
            query_params._mutable=False

        if 'page' in query_params:
            query_params._mutable=True
            print(query_params['page'])
            query_params.pop('page')
            query_params._mutable=False

        if 'start_date__gte' in query_params:
            query_params._mutable=True
            print(query_params['start_date__gte'])
            start_date = str(query_params.pop('start_date__gte')[0])
            query_params._mutable=False

        if 'end_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['end_date__lte'])
            end_date = str(query_params.pop('end_date__lte')[0])
            query_params._mutable=False
            
        if 'expriry_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['expriry_date__lte'])
            expriry_date = str(query_params.pop('expriry_date__lte')[0])
            query_params._mutable=False
        try:
            if 'start_date' in locals():
                if 'expriry_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(start_date__gte=start_date)

            elif 'end_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,end_date__lte=end_date)
                else:
                    queryset = queryset.filter(end_date__lte=end_date)

            elif 'expriry_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(expriry_date__lte=expriry_date)
        except Exception as xx:
            print("[sFilterRestApiView] Error: %s" % str(xx))
            pass
            
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        
        for query_key in query_params.dict().keys():
            query_params._mutable=True
            if hasattr(self.serializer_class.Meta.model,query_key) and  isinstance(self.serializer_class.Meta.model._meta.get_field(query_key),models.BooleanField):
                if str(query_params[query_key]).lower() == "true":
                    query_params[query_key] = True
                elif str(query_params[query_key]).lower() == "false":
                    query_params[query_key] = False
                else:
                    query_params.pop(query_key)
        query_params._mutable=False          
        if len(query_params)>0:
            # return queryset.filter(**query_params.dict())
            return queryset.filter(reduce(operator.and_, 
                                    (Q(**d) for d in (dict([i]) for i in query_params.dict().items()))))
        else:
            return queryset

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()



            
class SystemMailMailRemoveFileRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailMailRemoveFileSerializer

    queryset = SystemMailMail.objects.all().order_by("-created_at")
    
    # queryset = SystemMailMail.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailMail.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailMail.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailMail.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

    

        
class SystemMailSentMailStandardListRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailSentMailListSerializer

    queryset = SystemMailSentMail.objects.all().order_by("-created_at")
    
    # queryset = SystemMailSentMail.objects.all().order_by("-created_at")
    # pagination_class = StandardResultsSetPagination
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailSentMail.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     self.perform_destroy(instance)
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    #
    # def perform_destroy(self, instance):
    #     instance.delete()
        
class SystemMailSentMailMediumListRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailSentMailListSerializer

    queryset = SystemMailSentMail.objects.all().order_by("-created_at")
    
    # queryset = SystemMailSentMail.objects.all().order_by("-created_at")
    # pagination_class = MediumResultsSetPagination
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailSentMail.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     self.perform_destroy(instance)
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    #
    # def perform_destroy(self, instance):
    #     instance.delete()
        
class SystemMailSentMailLargeListRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailSentMailListSerializer

    queryset = SystemMailSentMail.objects.all().order_by("-created_at")
    
    # queryset = SystemMailSentMail.objects.all().order_by("-created_at")
    # pagination_class = LargeResultsSetPagination
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailSentMail.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     self.perform_destroy(instance)
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    #
    # def perform_destroy(self, instance):
    #     instance.delete()


            
class SystemMailSentMailStandardTableRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailSentMailOnlyViewsSerializer

    queryset = SystemMailSentMail.objects.all().order_by("-created_at")
    
    # queryset = SystemMailSentMail.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailSentMail.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailSentMail.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailSentMail.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailSentMailMediumTableRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailSentMailOnlyViewsSerializer

    queryset = SystemMailSentMail.objects.all().order_by("-created_at")
    
    # queryset = SystemMailSentMail.objects.all().order_by("-created_at")
    pagination_class = MediumResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailSentMail.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set
        
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailSentMail.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailSentMail.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailSentMailLargeTableRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailSentMailOnlyViewsSerializer

    queryset = SystemMailSentMail.objects.all().order_by("-created_at")
    
    # queryset = SystemMailSentMail.objects.all().order_by("-created_at")
    pagination_class = LargeResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailSentMail.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailSentMail.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailSentMail.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()



class SystemMailSentMailDetailRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailSentMailDetailsSerializer

    queryset = SystemMailSentMail.objects.all().order_by("-created_at")
    
    # queryset = SystemMailSentMail.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailSentMail.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailSentMail.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailSentMail.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailSentMailMediumDetailRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailSentMailDetailsSerializer

    queryset = SystemMailSentMail.objects.all().order_by("-created_at")
    
    # queryset = SystemMailSentMail.objects.all().order_by("-created_at")
    pagination_class = MediumResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailSentMail.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailSentMail.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailSentMail.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailSentMailLargeDetailRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailSentMailDetailsSerializer

    queryset = SystemMailSentMail.objects.all().order_by("-created_at")
    
    # queryset = SystemMailSentMail.objects.all().order_by("-created_at")
    pagination_class = LargeResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailSentMail.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailSentMail.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailSentMail.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()



class SystemMailSentMailCreateRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailSentMailCreateSerializer

    queryset = SystemMailSentMail.objects.all().order_by("-created_at")
    
    # queryset = SystemMailSentMail.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailSentMail.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailSentMail.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailSentMail.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()



class SystemMailSentMailUpdateRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailSentMailUpdateSerializer

    queryset = SystemMailSentMail.objects.all().order_by("-created_at")
    
    # queryset = SystemMailSentMail.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailSentMail.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailSentMail.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailSentMail.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()


           
class SystemMailSentMailDeleteRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailSentMailDeleteSerializer

    queryset = SystemMailSentMail.objects.all().order_by("-created_at")
    
    #queryset = SystemMailSentMail.objects.all().order_by("-created_at")
    # pagination_class = StandardResultsSetPagination
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailSentMail.objects.filter(author=user)

    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     self.perform_destroy(instance)
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    #
    # def perform_destroy(self, instance):
    #     instance.delete()

     


class SystemMailSentMailStandardSearchRestApiView(generics.ListCreateAPIView):
    serializer_class = SystemMailSentMailOnlyViewsSerializer

    queryset = SystemMailSentMail.objects.all()
    
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'uuid'
    search_fields = [
        
            'name',
                    
            'friendly_code',
                    
            'organization__name',
                    
            'addressee__name',
                    
            'mail__name',
                    
            'mail_sender',
                    
            'to_email',
                    
            'status_code',
                    
            'status_text',
                    
            'hr_created_by__name',
                    
            'hr_updated_by__name',
                    
            'content',
                    
        ]
    # search_fields = ['name']

    filter_backends = (filters.SearchFilter,)
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailSentMail.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailSentMailMediumSearchRestApiView(generics.ListCreateAPIView):
    serializer_class = SystemMailSentMailOnlyViewsSerializer

    queryset = SystemMailSentMail.objects.all().order_by("-created_at")
    
    pagination_class = MediumResultsSetPagination
    # lookup_field = 'uuid'
    search_fields = [
        
            'name',
                    
            'friendly_code',
                    
            'organization__name',
                    
            'addressee__name',
                    
            'mail__name',
                    
            'mail_sender',
                    
            'to_email',
                    
            'status_code',
                    
            'status_text',
                    
            'hr_created_by__name',
                    
            'hr_updated_by__name',
                    
            'content',
                    
        ]
    # search_fields = ['name']

    filter_backends = (filters.SearchFilter,)
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailSentMail.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailSentMailLargeSearchRestApiView(generics.ListCreateAPIView):
    serializer_class = SystemMailSentMailOnlyViewsSerializer

    queryset = SystemMailSentMail.objects.all().order_by("-created_at")
    
    pagination_class = LargeResultsSetPagination
    # lookup_field = 'uuid'

    search_fields = [
        
            'name',
                    
            'friendly_code',
                    
            'organization__name',
                    
            'addressee__name',
                    
            'mail__name',
                    
            'mail_sender',
                    
            'to_email',
                    
            'status_code',
                    
            'status_text',
                    
            'hr_created_by__name',
                    
            'hr_updated_by__name',
                    
            'content',
                    
        ]
    # search_fields = ['name']

    filter_backends = (filters.SearchFilter,)
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     return SystemMailSentMail.objects.all().order_by("-created_at")

    def get_queryset(self):
        query_set = SystemMailSentMail.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()


                        
class SystemMailSentMailStandardFilterRestApiView(generics.ListAPIView):
    serializer_class = SystemMailSentMailDetailsSerializer

    # queryset = SystemMailSentMail.objects.all().order_by("-created_at")
    
    # queryset = SystemMailSentMail.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'uuid'
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):

        queryset = SystemMailSentMail.objects.all().order_by("-created_at")
    
        # queryset =  SystemMailSentMail.objects.all().order_by("-created_at")
        query_params = self.request.query_params
        if '_' in query_params:
            query_params._mutable=True
            print(query_params['_'])
            query_params.pop('_')
            query_params._mutable=False

        if 'page' in query_params:
            query_params._mutable=True
            print(query_params['page'])
            query_params.pop('page')
            query_params._mutable=False

        if 'start_date__gte' in query_params:
            query_params._mutable=True
            print(query_params['start_date__gte'])
            start_date = str(query_params.pop('start_date__gte')[0])
            query_params._mutable=False

        if 'end_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['end_date__lte'])
            end_date = str(query_params.pop('end_date__lte')[0])
            query_params._mutable=False
            
        if 'expriry_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['expriry_date__lte'])
            expriry_date = str(query_params.pop('expriry_date__lte')[0])
            query_params._mutable=False
        try:
            if 'start_date' in locals():
                if 'expriry_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(start_date__gte=start_date)

            elif 'end_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,end_date__lte=end_date)
                else:
                    queryset = queryset.filter(end_date__lte=end_date)

            elif 'expriry_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(expriry_date__lte=expriry_date)
        except Exception as xx:
            print("[sFilterRestApiView] Error: %s" % str(xx))
            pass
            
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        
        for query_key in query_params.dict().keys():
            query_params._mutable=True
            if hasattr(self.serializer_class.Meta.model,query_key) and  isinstance(self.serializer_class.Meta.model._meta.get_field(query_key),models.BooleanField):
                if str(query_params[query_key]).lower() == "true":
                    query_params[query_key] = True
                elif str(query_params[query_key]).lower() == "false":
                    query_params[query_key] = False
                else:
                    query_params.pop(query_key)
        query_params._mutable=False          
        if len(query_params)>0:
            # return queryset.filter(**query_params.dict())
            return queryset.filter(reduce(operator.and_, 
                                    (Q(**d) for d in (dict([i]) for i in query_params.dict().items()))))
        else:
            return queryset

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

                        
class SystemMailSentMailMediumFilterRestApiView(generics.ListAPIView):
    serializer_class = SystemMailSentMailDetailsSerializer

    # queryset = SystemMailSentMail.objects.all().order_by("created_at")
    
    # queryset = SystemMailSentMail.objects.all().order_by("created_at")
    pagination_class = MediumResultsSetPagination
    # lookup_field = 'uuid'
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):

        queryset = SystemMailSentMail.objects.all().order_by("created_at")
    
        # queryset =  SystemMailSentMail.objects.all().order_by("created_at")
        query_params = self.request.query_params
        if '_' in query_params:
            query_params._mutable=True
            print(query_params['_'])
            query_params.pop('_')
            query_params._mutable=False

        if 'page' in query_params:
            query_params._mutable=True
            print(query_params['page'])
            query_params.pop('page')
            query_params._mutable=False

        if 'start_date__gte' in query_params:
            query_params._mutable=True
            print(query_params['start_date__gte'])
            start_date = str(query_params.pop('start_date__gte')[0])
            query_params._mutable=False

        if 'end_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['end_date__lte'])
            end_date = str(query_params.pop('end_date__lte')[0])
            query_params._mutable=False
            
        if 'expriry_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['expriry_date__lte'])
            expriry_date = str(query_params.pop('expriry_date__lte')[0])
            query_params._mutable=False
        try:
            if 'start_date' in locals():
                if 'expriry_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(start_date__gte=start_date)

            elif 'end_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,end_date__lte=end_date)
                else:
                    queryset = queryset.filter(end_date__lte=end_date)

            elif 'expriry_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(expriry_date__lte=expriry_date)
        except Exception as xx:
            print("[sFilterRestApiView] Error: %s" % str(xx))
            pass
            
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        
        for query_key in query_params.dict().keys():
            query_params._mutable=True
            if hasattr(self.serializer_class.Meta.model,query_key) and  isinstance(self.serializer_class.Meta.model._meta.get_field(query_key),models.BooleanField):
                if str(query_params[query_key]).lower() == "true":
                    query_params[query_key] = True
                elif str(query_params[query_key]).lower() == "false":
                    query_params[query_key] = False
                else:
                    query_params.pop(query_key)
        query_params._mutable=False          
        
        if len(query_params)>0:
            # return queryset.filter(**query_params.dict())
            return queryset.filter(reduce(operator.and_, 
                                    (Q(**d) for d in (dict([i]) for i in query_params.dict().items()))))
        else:
            return queryset

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()
                        
class SystemMailSentMailLargeFilterRestApiView(generics.ListAPIView):
    serializer_class = SystemMailSentMailDetailsSerializer

    # queryset = SystemMailSentMail.objects.all().order_by("created_at")
    
    # queryset = SystemMailSentMail.objects.all().order_by("created_at")
    pagination_class = LargeResultsSetPagination
    # lookup_field = 'uuid'
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):

        queryset = SystemMailSentMail.objects.all().order_by("created_at")
    
        # queryset =  SystemMailSentMail.objects.all().order_by("created_at")
        query_params = self.request.query_params
        if '_' in query_params:
            query_params._mutable=True
            print(query_params['_'])
            query_params.pop('_')
            query_params._mutable=False

        if 'page' in query_params:
            query_params._mutable=True
            print(query_params['page'])
            query_params.pop('page')
            query_params._mutable=False

        if 'start_date__gte' in query_params:
            query_params._mutable=True
            print(query_params['start_date__gte'])
            start_date = str(query_params.pop('start_date__gte')[0])
            query_params._mutable=False

        if 'end_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['end_date__lte'])
            end_date = str(query_params.pop('end_date__lte')[0])
            query_params._mutable=False
            
        if 'expriry_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['expriry_date__lte'])
            expriry_date = str(query_params.pop('expriry_date__lte')[0])
            query_params._mutable=False
        try:
            if 'start_date' in locals():
                if 'expriry_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(start_date__gte=start_date)

            elif 'end_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,end_date__lte=end_date)
                else:
                    queryset = queryset.filter(end_date__lte=end_date)

            elif 'expriry_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(expriry_date__lte=expriry_date)
        except Exception as xx:
            print("[sFilterRestApiView] Error: %s" % str(xx))
            pass
            
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        
        for query_key in query_params.dict().keys():
            query_params._mutable=True
            if hasattr(self.serializer_class.Meta.model,query_key) and  isinstance(self.serializer_class.Meta.model._meta.get_field(query_key),models.BooleanField):
                if str(query_params[query_key]).lower() == "true":
                    query_params[query_key] = True
                elif str(query_params[query_key]).lower() == "false":
                    query_params[query_key] = False
                else:
                    query_params.pop(query_key)
        query_params._mutable=False          
        if len(query_params)>0:
            # return queryset.filter(**query_params.dict())
            return queryset.filter(reduce(operator.and_, 
                                    (Q(**d) for d in (dict([i]) for i in query_params.dict().items()))))
        else:
            return queryset

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()



            
class SystemMailSentMailRemoveFileRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailSentMailRemoveFileSerializer

    queryset = SystemMailSentMail.objects.all().order_by("-created_at")
    
    # queryset = SystemMailSentMail.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailSentMail.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailSentMail.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailSentMail.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

    

        
class SystemMailServerConfigStandardListRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailServerConfigListSerializer

    queryset = SystemMailServerConfig.objects.all().order_by("-created_at")
    
    # queryset = SystemMailServerConfig.objects.all().order_by("-created_at")
    # pagination_class = StandardResultsSetPagination
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailServerConfig.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     self.perform_destroy(instance)
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    #
    # def perform_destroy(self, instance):
    #     instance.delete()
        
class SystemMailServerConfigMediumListRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailServerConfigListSerializer

    queryset = SystemMailServerConfig.objects.all().order_by("-created_at")
    
    # queryset = SystemMailServerConfig.objects.all().order_by("-created_at")
    # pagination_class = MediumResultsSetPagination
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailServerConfig.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     self.perform_destroy(instance)
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    #
    # def perform_destroy(self, instance):
    #     instance.delete()
        
class SystemMailServerConfigLargeListRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailServerConfigListSerializer

    queryset = SystemMailServerConfig.objects.all().order_by("-created_at")
    
    # queryset = SystemMailServerConfig.objects.all().order_by("-created_at")
    # pagination_class = LargeResultsSetPagination
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailServerConfig.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     self.perform_destroy(instance)
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    #
    # def perform_destroy(self, instance):
    #     instance.delete()


            
class SystemMailServerConfigStandardTableRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailServerConfigOnlyViewsSerializer

    queryset = SystemMailServerConfig.objects.all().order_by("-created_at")
    
    # queryset = SystemMailServerConfig.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailServerConfig.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailServerConfig.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailServerConfig.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailServerConfigMediumTableRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailServerConfigOnlyViewsSerializer

    queryset = SystemMailServerConfig.objects.all().order_by("-created_at")
    
    # queryset = SystemMailServerConfig.objects.all().order_by("-created_at")
    pagination_class = MediumResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailServerConfig.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set
        
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailServerConfig.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailServerConfig.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailServerConfigLargeTableRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailServerConfigOnlyViewsSerializer

    queryset = SystemMailServerConfig.objects.all().order_by("-created_at")
    
    # queryset = SystemMailServerConfig.objects.all().order_by("-created_at")
    pagination_class = LargeResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailServerConfig.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailServerConfig.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailServerConfig.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()



class SystemMailServerConfigDetailRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailServerConfigDetailsSerializer

    queryset = SystemMailServerConfig.objects.all().order_by("-created_at")
    
    # queryset = SystemMailServerConfig.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailServerConfig.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailServerConfig.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailServerConfig.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailServerConfigMediumDetailRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailServerConfigDetailsSerializer

    queryset = SystemMailServerConfig.objects.all().order_by("-created_at")
    
    # queryset = SystemMailServerConfig.objects.all().order_by("-created_at")
    pagination_class = MediumResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailServerConfig.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailServerConfig.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailServerConfig.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailServerConfigLargeDetailRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailServerConfigDetailsSerializer

    queryset = SystemMailServerConfig.objects.all().order_by("-created_at")
    
    # queryset = SystemMailServerConfig.objects.all().order_by("-created_at")
    pagination_class = LargeResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailServerConfig.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailServerConfig.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailServerConfig.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()



class SystemMailServerConfigCreateRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailServerConfigCreateSerializer

    queryset = SystemMailServerConfig.objects.all().order_by("-created_at")
    
    # queryset = SystemMailServerConfig.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailServerConfig.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailServerConfig.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailServerConfig.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()



class SystemMailServerConfigUpdateRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailServerConfigUpdateSerializer

    queryset = SystemMailServerConfig.objects.all().order_by("-created_at")
    
    # queryset = SystemMailServerConfig.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailServerConfig.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailServerConfig.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailServerConfig.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()


           
class SystemMailServerConfigDeleteRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailServerConfigDeleteSerializer

    queryset = SystemMailServerConfig.objects.all().order_by("-created_at")
    
    #queryset = SystemMailServerConfig.objects.all().order_by("-created_at")
    # pagination_class = StandardResultsSetPagination
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailServerConfig.objects.filter(author=user)

    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     self.perform_destroy(instance)
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    #
    # def perform_destroy(self, instance):
    #     instance.delete()

     


class SystemMailServerConfigStandardSearchRestApiView(generics.ListCreateAPIView):
    serializer_class = SystemMailServerConfigOnlyViewsSerializer

    queryset = SystemMailServerConfig.objects.all()
    
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'uuid'
    search_fields = [
        
            'name',
                    
            'friendly_code',
                    
            'host',
                    
            'port',
                    
            # 'port_smtp',
                    
            # 'is_ssl',
                    
            'limit_sending',
                    
            # 'is_default',
                    
            # 'hr_created_by__name',
                    
            # 'active',
                    
            # 'organization__name',
                    
            # 'hr_updated_by__name',
                    
        ]
    # search_fields = ['name']

    filter_backends = (filters.SearchFilter,)
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailServerConfig.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailServerConfigMediumSearchRestApiView(generics.ListCreateAPIView):
    serializer_class = SystemMailServerConfigOnlyViewsSerializer

    queryset = SystemMailServerConfig.objects.all().order_by("-created_at")
    
    pagination_class = MediumResultsSetPagination
    # lookup_field = 'uuid'
    search_fields = [
        
            'name',
                    
            'friendly_code',
                    
            'host',
                    
            'port',
                    
            'port_smtp',
                    
            'is_ssl',
                    
            'limit_sending',
                    
            'is_default',
                    
            'hr_created_by__name',
                    
            'active',
                    
            'organization__name',
                    
            'hr_updated_by__name',
                    
        ]
    # search_fields = ['name']

    filter_backends = (filters.SearchFilter,)
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailServerConfig.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailServerConfigLargeSearchRestApiView(generics.ListCreateAPIView):
    serializer_class = SystemMailServerConfigOnlyViewsSerializer

    queryset = SystemMailServerConfig.objects.all().order_by("-created_at")
    
    pagination_class = LargeResultsSetPagination
    # lookup_field = 'uuid'

    search_fields = [
        
            'name',
                    
            'friendly_code',
                    
            'host',
                    
            'port',
                    
            'port_smtp',
                    
            'is_ssl',
                    
            'limit_sending',
                    
            'is_default',
                    
            'hr_created_by__name',
                    
            'active',
                    
            'organization__name',
                    
            'hr_updated_by__name',
                    
        ]
    # search_fields = ['name']

    filter_backends = (filters.SearchFilter,)
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     return SystemMailServerConfig.objects.all().order_by("-created_at")

    def get_queryset(self):
        query_set = SystemMailServerConfig.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()


                        
class SystemMailServerConfigStandardFilterRestApiView(generics.ListAPIView):
    serializer_class = SystemMailServerConfigDetailsSerializer

    # queryset = SystemMailServerConfig.objects.all().order_by("-created_at")
    
    # queryset = SystemMailServerConfig.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'uuid'
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):

        queryset = SystemMailServerConfig.objects.all().order_by("-created_at")
    
        # queryset =  SystemMailServerConfig.objects.all().order_by("-created_at")
        query_params = self.request.query_params
        if '_' in query_params:
            query_params._mutable=True
            print(query_params['_'])
            query_params.pop('_')
            query_params._mutable=False

        if 'page' in query_params:
            query_params._mutable=True
            print(query_params['page'])
            query_params.pop('page')
            query_params._mutable=False

        if 'start_date__gte' in query_params:
            query_params._mutable=True
            print(query_params['start_date__gte'])
            start_date = str(query_params.pop('start_date__gte')[0])
            query_params._mutable=False

        if 'end_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['end_date__lte'])
            end_date = str(query_params.pop('end_date__lte')[0])
            query_params._mutable=False
            
        if 'expriry_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['expriry_date__lte'])
            expriry_date = str(query_params.pop('expriry_date__lte')[0])
            query_params._mutable=False
        try:
            if 'start_date' in locals():
                if 'expriry_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(start_date__gte=start_date)

            elif 'end_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,end_date__lte=end_date)
                else:
                    queryset = queryset.filter(end_date__lte=end_date)

            elif 'expriry_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(expriry_date__lte=expriry_date)
        except Exception as xx:
            print("[sFilterRestApiView] Error: %s" % str(xx))
            pass
            
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        
        for query_key in query_params.dict().keys():
            query_params._mutable=True
            if hasattr(self.serializer_class.Meta.model,query_key) and  isinstance(self.serializer_class.Meta.model._meta.get_field(query_key),models.BooleanField):
                if str(query_params[query_key]).lower() == "true":
                    query_params[query_key] = True
                elif str(query_params[query_key]).lower() == "false":
                    query_params[query_key] = False
                else:
                    query_params.pop(query_key)
        query_params._mutable=False          
        if len(query_params)>0:
            # return queryset.filter(**query_params.dict())
            return queryset.filter(reduce(operator.and_, 
                                    (Q(**d) for d in (dict([i]) for i in query_params.dict().items()))))
        else:
            return queryset

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

                        
class SystemMailServerConfigMediumFilterRestApiView(generics.ListAPIView):
    serializer_class = SystemMailServerConfigDetailsSerializer

    # queryset = SystemMailServerConfig.objects.all().order_by("created_at")
    
    # queryset = SystemMailServerConfig.objects.all().order_by("created_at")
    pagination_class = MediumResultsSetPagination
    # lookup_field = 'uuid'
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):

        queryset = SystemMailServerConfig.objects.all().order_by("created_at")
    
        # queryset =  SystemMailServerConfig.objects.all().order_by("created_at")
        query_params = self.request.query_params
        if '_' in query_params:
            query_params._mutable=True
            print(query_params['_'])
            query_params.pop('_')
            query_params._mutable=False

        if 'page' in query_params:
            query_params._mutable=True
            print(query_params['page'])
            query_params.pop('page')
            query_params._mutable=False

        if 'start_date__gte' in query_params:
            query_params._mutable=True
            print(query_params['start_date__gte'])
            start_date = str(query_params.pop('start_date__gte')[0])
            query_params._mutable=False

        if 'end_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['end_date__lte'])
            end_date = str(query_params.pop('end_date__lte')[0])
            query_params._mutable=False
            
        if 'expriry_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['expriry_date__lte'])
            expriry_date = str(query_params.pop('expriry_date__lte')[0])
            query_params._mutable=False
        try:
            if 'start_date' in locals():
                if 'expriry_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(start_date__gte=start_date)

            elif 'end_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,end_date__lte=end_date)
                else:
                    queryset = queryset.filter(end_date__lte=end_date)

            elif 'expriry_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(expriry_date__lte=expriry_date)
        except Exception as xx:
            print("[sFilterRestApiView] Error: %s" % str(xx))
            pass
            
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        
        for query_key in query_params.dict().keys():
            query_params._mutable=True
            if hasattr(self.serializer_class.Meta.model,query_key) and  isinstance(self.serializer_class.Meta.model._meta.get_field(query_key),models.BooleanField):
                if str(query_params[query_key]).lower() == "true":
                    query_params[query_key] = True
                elif str(query_params[query_key]).lower() == "false":
                    query_params[query_key] = False
                else:
                    query_params.pop(query_key)
        query_params._mutable=False          
        
        if len(query_params)>0:
            # return queryset.filter(**query_params.dict())
            return queryset.filter(reduce(operator.and_, 
                                    (Q(**d) for d in (dict([i]) for i in query_params.dict().items()))))
        else:
            return queryset

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()
                        
class SystemMailServerConfigLargeFilterRestApiView(generics.ListAPIView):
    serializer_class = SystemMailServerConfigDetailsSerializer

    # queryset = SystemMailServerConfig.objects.all().order_by("created_at")
    
    # queryset = SystemMailServerConfig.objects.all().order_by("created_at")
    pagination_class = LargeResultsSetPagination
    # lookup_field = 'uuid'
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):

        queryset = SystemMailServerConfig.objects.all().order_by("created_at")
    
        # queryset =  SystemMailServerConfig.objects.all().order_by("created_at")
        query_params = self.request.query_params
        if '_' in query_params:
            query_params._mutable=True
            print(query_params['_'])
            query_params.pop('_')
            query_params._mutable=False

        if 'page' in query_params:
            query_params._mutable=True
            print(query_params['page'])
            query_params.pop('page')
            query_params._mutable=False

        if 'start_date__gte' in query_params:
            query_params._mutable=True
            print(query_params['start_date__gte'])
            start_date = str(query_params.pop('start_date__gte')[0])
            query_params._mutable=False

        if 'end_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['end_date__lte'])
            end_date = str(query_params.pop('end_date__lte')[0])
            query_params._mutable=False
            
        if 'expriry_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['expriry_date__lte'])
            expriry_date = str(query_params.pop('expriry_date__lte')[0])
            query_params._mutable=False
        try:
            if 'start_date' in locals():
                if 'expriry_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(start_date__gte=start_date)

            elif 'end_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,end_date__lte=end_date)
                else:
                    queryset = queryset.filter(end_date__lte=end_date)

            elif 'expriry_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(expriry_date__lte=expriry_date)
        except Exception as xx:
            print("[sFilterRestApiView] Error: %s" % str(xx))
            pass
            
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        
        for query_key in query_params.dict().keys():
            query_params._mutable=True
            if hasattr(self.serializer_class.Meta.model,query_key) and  isinstance(self.serializer_class.Meta.model._meta.get_field(query_key),models.BooleanField):
                if str(query_params[query_key]).lower() == "true":
                    query_params[query_key] = True
                elif str(query_params[query_key]).lower() == "false":
                    query_params[query_key] = False
                else:
                    query_params.pop(query_key)
        query_params._mutable=False          
        if len(query_params)>0:
            # return queryset.filter(**query_params.dict())
            return queryset.filter(reduce(operator.and_, 
                                    (Q(**d) for d in (dict([i]) for i in query_params.dict().items()))))
        else:
            return queryset

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()



            
class SystemMailServerConfigRemoveFileRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailServerConfigRemoveFileSerializer

    queryset = SystemMailServerConfig.objects.all().order_by("-created_at")
    
    # queryset = SystemMailServerConfig.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailServerConfig.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailServerConfig.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailServerConfig.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

    

        
class SystemMailTemplateStandardListRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTemplateListSerializer

    queryset = SystemMailTemplate.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTemplate.objects.all().order_by("-created_at")
    # pagination_class = StandardResultsSetPagination
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailTemplate.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     self.perform_destroy(instance)
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    #
    # def perform_destroy(self, instance):
    #     instance.delete()
        
class SystemMailTemplateMediumListRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTemplateListSerializer

    queryset = SystemMailTemplate.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTemplate.objects.all().order_by("-created_at")
    # pagination_class = MediumResultsSetPagination
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailTemplate.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     self.perform_destroy(instance)
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    #
    # def perform_destroy(self, instance):
    #     instance.delete()
        
class SystemMailTemplateLargeListRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTemplateListSerializer

    queryset = SystemMailTemplate.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTemplate.objects.all().order_by("-created_at")
    # pagination_class = LargeResultsSetPagination
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailTemplate.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     self.perform_destroy(instance)
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    #
    # def perform_destroy(self, instance):
    #     instance.delete()


            
class SystemMailTemplateStandardTableRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTemplateOnlyViewsSerializer

    queryset = SystemMailTemplate.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTemplate.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailTemplate.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailTemplate.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailTemplate.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailTemplateMediumTableRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTemplateOnlyViewsSerializer

    queryset = SystemMailTemplate.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTemplate.objects.all().order_by("-created_at")
    pagination_class = MediumResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailTemplate.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set
        
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailTemplate.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailTemplate.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailTemplateLargeTableRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTemplateOnlyViewsSerializer

    queryset = SystemMailTemplate.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTemplate.objects.all().order_by("-created_at")
    pagination_class = LargeResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailTemplate.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailTemplate.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailTemplate.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()



class SystemMailTemplateDetailRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTemplateDetailsSerializer

    queryset = SystemMailTemplate.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTemplate.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailTemplate.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailTemplate.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailTemplate.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailTemplateMediumDetailRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTemplateDetailsSerializer

    queryset = SystemMailTemplate.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTemplate.objects.all().order_by("-created_at")
    pagination_class = MediumResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailTemplate.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailTemplate.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailTemplate.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailTemplateLargeDetailRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTemplateDetailsSerializer

    queryset = SystemMailTemplate.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTemplate.objects.all().order_by("-created_at")
    pagination_class = LargeResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailTemplate.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailTemplate.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailTemplate.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()



class SystemMailTemplateCreateRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTemplateCreateSerializer

    queryset = SystemMailTemplate.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTemplate.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailTemplate.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailTemplate.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailTemplate.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()



class SystemMailTemplateUpdateRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTemplateUpdateSerializer

    queryset = SystemMailTemplate.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTemplate.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailTemplate.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailTemplate.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailTemplate.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()


           
class SystemMailTemplateDeleteRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTemplateDeleteSerializer

    queryset = SystemMailTemplate.objects.all().order_by("-created_at")
    
    #queryset = SystemMailTemplate.objects.all().order_by("-created_at")
    # pagination_class = StandardResultsSetPagination
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailTemplate.objects.filter(author=user)

    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     self.perform_destroy(instance)
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    #
    # def perform_destroy(self, instance):
    #     instance.delete()

     


class SystemMailTemplateStandardSearchRestApiView(generics.ListCreateAPIView):
    serializer_class = SystemMailTemplateOnlyViewsSerializer

    queryset = SystemMailTemplate.objects.all()
    
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'uuid'
    search_fields = [
        
            'name',
                    
            'friendly_code',
                    
            'email_type__name',
                    
            'content',
                    
            'is_default',
                    
            'organization__name',
                    
            'hr_created_by__name',
                    
            'hr_updated_by__name',
                    
        ]
    # search_fields = ['name']

    filter_backends = (filters.SearchFilter,)
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailTemplate.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailTemplateMediumSearchRestApiView(generics.ListCreateAPIView):
    serializer_class = SystemMailTemplateOnlyViewsSerializer

    queryset = SystemMailTemplate.objects.all().order_by("-created_at")
    
    pagination_class = MediumResultsSetPagination
    # lookup_field = 'uuid'
    search_fields = [
        
            'name',
                    
            'friendly_code',
                    
            'email_type__name',
                    
            'content',
                    
            'is_default',
                    
            'organization__name',
                    
            'hr_created_by__name',
                    
            'hr_updated_by__name',
                    
        ]
    # search_fields = ['name']

    filter_backends = (filters.SearchFilter,)
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailTemplate.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailTemplateLargeSearchRestApiView(generics.ListCreateAPIView):
    serializer_class = SystemMailTemplateOnlyViewsSerializer

    queryset = SystemMailTemplate.objects.all().order_by("-created_at")
    
    pagination_class = LargeResultsSetPagination
    # lookup_field = 'uuid'

    search_fields = [
        
            'name',
                    
            'friendly_code',
                    
            'email_type__name',
                    
            'content',
                    
            'is_default',
                    
            'organization__name',
                    
            'hr_created_by__name',
                    
            'hr_updated_by__name',
                    
        ]
    # search_fields = ['name']

    filter_backends = (filters.SearchFilter,)
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     return SystemMailTemplate.objects.all().order_by("-created_at")

    def get_queryset(self):
        query_set = SystemMailTemplate.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()


                        
class SystemMailTemplateStandardFilterRestApiView(generics.ListAPIView):
    serializer_class = SystemMailTemplateDetailsSerializer

    # queryset = SystemMailTemplate.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTemplate.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'uuid'
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):

        queryset = SystemMailTemplate.objects.all().order_by("-created_at")
    
        # queryset =  SystemMailTemplate.objects.all().order_by("-created_at")
        query_params = self.request.query_params
        if '_' in query_params:
            query_params._mutable=True
            print(query_params['_'])
            query_params.pop('_')
            query_params._mutable=False

        if 'page' in query_params:
            query_params._mutable=True
            print(query_params['page'])
            query_params.pop('page')
            query_params._mutable=False

        if 'start_date__gte' in query_params:
            query_params._mutable=True
            print(query_params['start_date__gte'])
            start_date = str(query_params.pop('start_date__gte')[0])
            query_params._mutable=False

        if 'end_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['end_date__lte'])
            end_date = str(query_params.pop('end_date__lte')[0])
            query_params._mutable=False
            
        if 'expriry_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['expriry_date__lte'])
            expriry_date = str(query_params.pop('expriry_date__lte')[0])
            query_params._mutable=False
        try:
            if 'start_date' in locals():
                if 'expriry_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(start_date__gte=start_date)

            elif 'end_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,end_date__lte=end_date)
                else:
                    queryset = queryset.filter(end_date__lte=end_date)

            elif 'expriry_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(expriry_date__lte=expriry_date)
        except Exception as xx:
            print("[sFilterRestApiView] Error: %s" % str(xx))
            pass
            
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        
        for query_key in query_params.dict().keys():
            query_params._mutable=True
            if hasattr(self.serializer_class.Meta.model,query_key) and  isinstance(self.serializer_class.Meta.model._meta.get_field(query_key),models.BooleanField):
                if str(query_params[query_key]).lower() == "true":
                    query_params[query_key] = True
                elif str(query_params[query_key]).lower() == "false":
                    query_params[query_key] = False
                else:
                    query_params.pop(query_key)
        query_params._mutable=False          
        if len(query_params)>0:
            # return queryset.filter(**query_params.dict())
            return queryset.filter(reduce(operator.and_, 
                                    (Q(**d) for d in (dict([i]) for i in query_params.dict().items()))))
        else:
            return queryset

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

                        
class SystemMailTemplateMediumFilterRestApiView(generics.ListAPIView):
    serializer_class = SystemMailTemplateDetailsSerializer

    # queryset = SystemMailTemplate.objects.all().order_by("created_at")
    
    # queryset = SystemMailTemplate.objects.all().order_by("created_at")
    pagination_class = MediumResultsSetPagination
    # lookup_field = 'uuid'
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):

        queryset = SystemMailTemplate.objects.all().order_by("created_at")
    
        # queryset =  SystemMailTemplate.objects.all().order_by("created_at")
        query_params = self.request.query_params
        if '_' in query_params:
            query_params._mutable=True
            print(query_params['_'])
            query_params.pop('_')
            query_params._mutable=False

        if 'page' in query_params:
            query_params._mutable=True
            print(query_params['page'])
            query_params.pop('page')
            query_params._mutable=False

        if 'start_date__gte' in query_params:
            query_params._mutable=True
            print(query_params['start_date__gte'])
            start_date = str(query_params.pop('start_date__gte')[0])
            query_params._mutable=False

        if 'end_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['end_date__lte'])
            end_date = str(query_params.pop('end_date__lte')[0])
            query_params._mutable=False
            
        if 'expriry_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['expriry_date__lte'])
            expriry_date = str(query_params.pop('expriry_date__lte')[0])
            query_params._mutable=False
        try:
            if 'start_date' in locals():
                if 'expriry_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(start_date__gte=start_date)

            elif 'end_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,end_date__lte=end_date)
                else:
                    queryset = queryset.filter(end_date__lte=end_date)

            elif 'expriry_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(expriry_date__lte=expriry_date)
        except Exception as xx:
            print("[sFilterRestApiView] Error: %s" % str(xx))
            pass
            
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        
        for query_key in query_params.dict().keys():
            query_params._mutable=True
            if hasattr(self.serializer_class.Meta.model,query_key) and  isinstance(self.serializer_class.Meta.model._meta.get_field(query_key),models.BooleanField):
                if str(query_params[query_key]).lower() == "true":
                    query_params[query_key] = True
                elif str(query_params[query_key]).lower() == "false":
                    query_params[query_key] = False
                else:
                    query_params.pop(query_key)
        query_params._mutable=False          
        
        if len(query_params)>0:
            # return queryset.filter(**query_params.dict())
            return queryset.filter(reduce(operator.and_, 
                                    (Q(**d) for d in (dict([i]) for i in query_params.dict().items()))))
        else:
            return queryset

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()
                        
class SystemMailTemplateLargeFilterRestApiView(generics.ListAPIView):
    serializer_class = SystemMailTemplateDetailsSerializer

    # queryset = SystemMailTemplate.objects.all().order_by("created_at")
    
    # queryset = SystemMailTemplate.objects.all().order_by("created_at")
    pagination_class = LargeResultsSetPagination
    # lookup_field = 'uuid'
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):

        queryset = SystemMailTemplate.objects.all().order_by("created_at")
    
        # queryset =  SystemMailTemplate.objects.all().order_by("created_at")
        query_params = self.request.query_params
        if '_' in query_params:
            query_params._mutable=True
            print(query_params['_'])
            query_params.pop('_')
            query_params._mutable=False

        if 'page' in query_params:
            query_params._mutable=True
            print(query_params['page'])
            query_params.pop('page')
            query_params._mutable=False

        if 'start_date__gte' in query_params:
            query_params._mutable=True
            print(query_params['start_date__gte'])
            start_date = str(query_params.pop('start_date__gte')[0])
            query_params._mutable=False

        if 'end_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['end_date__lte'])
            end_date = str(query_params.pop('end_date__lte')[0])
            query_params._mutable=False
            
        if 'expriry_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['expriry_date__lte'])
            expriry_date = str(query_params.pop('expriry_date__lte')[0])
            query_params._mutable=False
        try:
            if 'start_date' in locals():
                if 'expriry_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(start_date__gte=start_date)

            elif 'end_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,end_date__lte=end_date)
                else:
                    queryset = queryset.filter(end_date__lte=end_date)

            elif 'expriry_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(expriry_date__lte=expriry_date)
        except Exception as xx:
            print("[sFilterRestApiView] Error: %s" % str(xx))
            pass
            
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        
        for query_key in query_params.dict().keys():
            query_params._mutable=True
            if hasattr(self.serializer_class.Meta.model,query_key) and  isinstance(self.serializer_class.Meta.model._meta.get_field(query_key),models.BooleanField):
                if str(query_params[query_key]).lower() == "true":
                    query_params[query_key] = True
                elif str(query_params[query_key]).lower() == "false":
                    query_params[query_key] = False
                else:
                    query_params.pop(query_key)
        query_params._mutable=False          
        if len(query_params)>0:
            # return queryset.filter(**query_params.dict())
            return queryset.filter(reduce(operator.and_, 
                                    (Q(**d) for d in (dict([i]) for i in query_params.dict().items()))))
        else:
            return queryset

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()



            
class SystemMailTemplateRemoveFileRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTemplateRemoveFileSerializer

    queryset = SystemMailTemplate.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTemplate.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailTemplate.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailTemplate.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailTemplate.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

    

        
class SystemMailTypeStandardListRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTypeListSerializer

    queryset = SystemMailType.objects.all().order_by("-created_at")
    
    # queryset = SystemMailType.objects.all().order_by("-created_at")
    # pagination_class = StandardResultsSetPagination
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailType.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     self.perform_destroy(instance)
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    #
    # def perform_destroy(self, instance):
    #     instance.delete()
        
class SystemMailTypeMediumListRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTypeListSerializer

    queryset = SystemMailType.objects.all().order_by("-created_at")
    
    # queryset = SystemMailType.objects.all().order_by("-created_at")
    # pagination_class = MediumResultsSetPagination
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailType.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     self.perform_destroy(instance)
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    #
    # def perform_destroy(self, instance):
    #     instance.delete()
        
class SystemMailTypeLargeListRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTypeListSerializer

    queryset = SystemMailType.objects.all().order_by("-created_at")
    
    # queryset = SystemMailType.objects.all().order_by("-created_at")
    # pagination_class = LargeResultsSetPagination
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailType.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     self.perform_destroy(instance)
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    #
    # def perform_destroy(self, instance):
    #     instance.delete()


            
class SystemMailTypeStandardTableRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTypeOnlyViewsSerializer

    queryset = SystemMailType.objects.all().order_by("-created_at")
    
    # queryset = SystemMailType.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailType.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailType.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailType.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailTypeMediumTableRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTypeOnlyViewsSerializer

    queryset = SystemMailType.objects.all().order_by("-created_at")
    
    # queryset = SystemMailType.objects.all().order_by("-created_at")
    pagination_class = MediumResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailType.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set
        
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailType.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailType.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailTypeLargeTableRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTypeOnlyViewsSerializer

    queryset = SystemMailType.objects.all().order_by("-created_at")
    
    # queryset = SystemMailType.objects.all().order_by("-created_at")
    pagination_class = LargeResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailType.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailType.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailType.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()



class SystemMailTypeDetailRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTypeDetailsSerializer

    queryset = SystemMailType.objects.all().order_by("-created_at")
    
    # queryset = SystemMailType.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailType.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailType.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailType.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailTypeMediumDetailRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTypeDetailsSerializer

    queryset = SystemMailType.objects.all().order_by("-created_at")
    
    # queryset = SystemMailType.objects.all().order_by("-created_at")
    pagination_class = MediumResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailType.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailType.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailType.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailTypeLargeDetailRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTypeDetailsSerializer

    queryset = SystemMailType.objects.all().order_by("-created_at")
    
    # queryset = SystemMailType.objects.all().order_by("-created_at")
    pagination_class = LargeResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailType.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailType.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailType.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()



class SystemMailTypeCreateRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTypeCreateSerializer

    queryset = SystemMailType.objects.all().order_by("-created_at")
    
    # queryset = SystemMailType.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailType.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailType.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailType.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()



class SystemMailTypeUpdateRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTypeUpdateSerializer

    queryset = SystemMailType.objects.all().order_by("-created_at")
    
    # queryset = SystemMailType.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailType.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailType.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailType.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()


           
class SystemMailTypeDeleteRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTypeDeleteSerializer

    queryset = SystemMailType.objects.all().order_by("-created_at")
    
    #queryset = SystemMailType.objects.all().order_by("-created_at")
    # pagination_class = StandardResultsSetPagination
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailType.objects.filter(author=user)

    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     self.perform_destroy(instance)
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    #
    # def perform_destroy(self, instance):
    #     instance.delete()

     


class SystemMailTypeStandardSearchRestApiView(generics.ListCreateAPIView):
    serializer_class = SystemMailTypeOnlyViewsSerializer

    queryset = SystemMailType.objects.all()
    
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'uuid'
    search_fields = [
        
            'organization__name',
                    
            'hr_created_by__name',
                    
            'hr_updated_by__name',
                    
            'name',
                    
            'friendly_code',
                    
            'is_default',
                    
        ]
    # search_fields = ['name']

    filter_backends = (filters.SearchFilter,)
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailType.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailTypeMediumSearchRestApiView(generics.ListCreateAPIView):
    serializer_class = SystemMailTypeOnlyViewsSerializer

    queryset = SystemMailType.objects.all().order_by("-created_at")
    
    pagination_class = MediumResultsSetPagination
    # lookup_field = 'uuid'
    search_fields = [
        
            'organization__name',
                    
            'hr_created_by__name',
                    
            'hr_updated_by__name',
                    
            'name',
                    
            'friendly_code',
                    
            'is_default',
                    
        ]
    # search_fields = ['name']

    filter_backends = (filters.SearchFilter,)
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailType.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailTypeLargeSearchRestApiView(generics.ListCreateAPIView):
    serializer_class = SystemMailTypeOnlyViewsSerializer

    queryset = SystemMailType.objects.all().order_by("-created_at")
    
    pagination_class = LargeResultsSetPagination
    # lookup_field = 'uuid'

    search_fields = [
        
            'organization__name',
                    
            'hr_created_by__name',
                    
            'hr_updated_by__name',
                    
            'name',
                    
            'friendly_code',
                    
            'is_default',
                    
        ]
    # search_fields = ['name']

    filter_backends = (filters.SearchFilter,)
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     return SystemMailType.objects.all().order_by("-created_at")

    def get_queryset(self):
        query_set = SystemMailType.objects.all().order_by("-created_at")
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        return query_set

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()


                        
class SystemMailTypeStandardFilterRestApiView(generics.ListAPIView):
    serializer_class = SystemMailTypeDetailsSerializer

    # queryset = SystemMailType.objects.all().order_by("-created_at")
    
    # queryset = SystemMailType.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'uuid'
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):

        queryset = SystemMailType.objects.all().order_by("-created_at")
    
        # queryset =  SystemMailType.objects.all().order_by("-created_at")
        query_params = self.request.query_params
        if '_' in query_params:
            query_params._mutable=True
            print(query_params['_'])
            query_params.pop('_')
            query_params._mutable=False

        if 'page' in query_params:
            query_params._mutable=True
            print(query_params['page'])
            query_params.pop('page')
            query_params._mutable=False

        if 'start_date__gte' in query_params:
            query_params._mutable=True
            print(query_params['start_date__gte'])
            start_date = str(query_params.pop('start_date__gte')[0])
            query_params._mutable=False

        if 'end_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['end_date__lte'])
            end_date = str(query_params.pop('end_date__lte')[0])
            query_params._mutable=False
            
        if 'expriry_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['expriry_date__lte'])
            expriry_date = str(query_params.pop('expriry_date__lte')[0])
            query_params._mutable=False
        try:
            if 'start_date' in locals():
                if 'expriry_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(start_date__gte=start_date)

            elif 'end_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,end_date__lte=end_date)
                else:
                    queryset = queryset.filter(end_date__lte=end_date)

            elif 'expriry_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(expriry_date__lte=expriry_date)
        except Exception as xx:
            print("[sFilterRestApiView] Error: %s" % str(xx))
            pass
            
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        
        for query_key in query_params.dict().keys():
            query_params._mutable=True
            if hasattr(self.serializer_class.Meta.model,query_key) and  isinstance(self.serializer_class.Meta.model._meta.get_field(query_key),models.BooleanField):
                if str(query_params[query_key]).lower() == "true":
                    query_params[query_key] = True
                elif str(query_params[query_key]).lower() == "false":
                    query_params[query_key] = False
                else:
                    query_params.pop(query_key)
        query_params._mutable=False          
        if len(query_params)>0:
            # return queryset.filter(**query_params.dict())
            return queryset.filter(reduce(operator.and_, 
                                    (Q(**d) for d in (dict([i]) for i in query_params.dict().items()))))
        else:
            return queryset

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

                        
class SystemMailTypeMediumFilterRestApiView(generics.ListAPIView):
    serializer_class = SystemMailTypeDetailsSerializer

    # queryset = SystemMailType.objects.all().order_by("created_at")
    
    # queryset = SystemMailType.objects.all().order_by("created_at")
    pagination_class = MediumResultsSetPagination
    # lookup_field = 'uuid'
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):

        queryset = SystemMailType.objects.all().order_by("created_at")
    
        # queryset =  SystemMailType.objects.all().order_by("created_at")
        query_params = self.request.query_params
        if '_' in query_params:
            query_params._mutable=True
            print(query_params['_'])
            query_params.pop('_')
            query_params._mutable=False

        if 'page' in query_params:
            query_params._mutable=True
            print(query_params['page'])
            query_params.pop('page')
            query_params._mutable=False

        if 'start_date__gte' in query_params:
            query_params._mutable=True
            print(query_params['start_date__gte'])
            start_date = str(query_params.pop('start_date__gte')[0])
            query_params._mutable=False

        if 'end_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['end_date__lte'])
            end_date = str(query_params.pop('end_date__lte')[0])
            query_params._mutable=False
            
        if 'expriry_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['expriry_date__lte'])
            expriry_date = str(query_params.pop('expriry_date__lte')[0])
            query_params._mutable=False
        try:
            if 'start_date' in locals():
                if 'expriry_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(start_date__gte=start_date)

            elif 'end_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,end_date__lte=end_date)
                else:
                    queryset = queryset.filter(end_date__lte=end_date)

            elif 'expriry_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(expriry_date__lte=expriry_date)
        except Exception as xx:
            print("[sFilterRestApiView] Error: %s" % str(xx))
            pass
            
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        
        for query_key in query_params.dict().keys():
            query_params._mutable=True
            if hasattr(self.serializer_class.Meta.model,query_key) and  isinstance(self.serializer_class.Meta.model._meta.get_field(query_key),models.BooleanField):
                if str(query_params[query_key]).lower() == "true":
                    query_params[query_key] = True
                elif str(query_params[query_key]).lower() == "false":
                    query_params[query_key] = False
                else:
                    query_params.pop(query_key)
        query_params._mutable=False          
        
        if len(query_params)>0:
            # return queryset.filter(**query_params.dict())
            return queryset.filter(reduce(operator.and_, 
                                    (Q(**d) for d in (dict([i]) for i in query_params.dict().items()))))
        else:
            return queryset

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()
                        
class SystemMailTypeLargeFilterRestApiView(generics.ListAPIView):
    serializer_class = SystemMailTypeDetailsSerializer

    # queryset = SystemMailType.objects.all().order_by("created_at")
    
    # queryset = SystemMailType.objects.all().order_by("created_at")
    pagination_class = LargeResultsSetPagination
    # lookup_field = 'uuid'
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):

        queryset = SystemMailType.objects.all().order_by("created_at")
    
        # queryset =  SystemMailType.objects.all().order_by("created_at")
        query_params = self.request.query_params
        if '_' in query_params:
            query_params._mutable=True
            print(query_params['_'])
            query_params.pop('_')
            query_params._mutable=False

        if 'page' in query_params:
            query_params._mutable=True
            print(query_params['page'])
            query_params.pop('page')
            query_params._mutable=False

        if 'start_date__gte' in query_params:
            query_params._mutable=True
            print(query_params['start_date__gte'])
            start_date = str(query_params.pop('start_date__gte')[0])
            query_params._mutable=False

        if 'end_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['end_date__lte'])
            end_date = str(query_params.pop('end_date__lte')[0])
            query_params._mutable=False
            
        if 'expriry_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['expriry_date__lte'])
            expriry_date = str(query_params.pop('expriry_date__lte')[0])
            query_params._mutable=False
        try:
            if 'start_date' in locals():
                if 'expriry_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(start_date__gte=start_date)

            elif 'end_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,end_date__lte=end_date)
                else:
                    queryset = queryset.filter(end_date__lte=end_date)

            elif 'expriry_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(expriry_date__lte=expriry_date)
        except Exception as xx:
            print("[sFilterRestApiView] Error: %s" % str(xx))
            pass
            
        
        # if 'org_id' in self.kwargs and hasattr(self.serializer_class.Meta.model, 'organization'):
        #     query_set = query_set.filter(organization__code=self.kwargs['org_id']).all()
                                
        
        for query_key in query_params.dict().keys():
            query_params._mutable=True
            if hasattr(self.serializer_class.Meta.model,query_key) and  isinstance(self.serializer_class.Meta.model._meta.get_field(query_key),models.BooleanField):
                if str(query_params[query_key]).lower() == "true":
                    query_params[query_key] = True
                elif str(query_params[query_key]).lower() == "false":
                    query_params[query_key] = False
                else:
                    query_params.pop(query_key)
        query_params._mutable=False          
        if len(query_params)>0:
            # return queryset.filter(**query_params.dict())
            return queryset.filter(reduce(operator.and_, 
                                    (Q(**d) for d in (dict([i]) for i in query_params.dict().items()))))
        else:
            return queryset

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()



            
class SystemMailTypeRemoveFileRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTypeRemoveFileSerializer

    queryset = SystemMailType.objects.all().order_by("-created_at")
    
    # queryset = SystemMailType.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailType.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailType.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailType.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

    

        
class SystemMailTemplateImportDataStandardListRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTemplateImportDataListSerializer

    queryset = SystemMailTemplateImportData.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTemplateImportData.objects.all().order_by("-created_at")
    # pagination_class = StandardResultsSetPagination
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailTemplateImportData.objects.all().order_by("-created_at")
        
        return query_set

    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     self.perform_destroy(instance)
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    #
    # def perform_destroy(self, instance):
    #     instance.delete()
        
class SystemMailTemplateImportDataMediumListRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTemplateImportDataListSerializer

    queryset = SystemMailTemplateImportData.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTemplateImportData.objects.all().order_by("-created_at")
    # pagination_class = MediumResultsSetPagination
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailTemplateImportData.objects.all().order_by("-created_at")
        
        return query_set

    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     self.perform_destroy(instance)
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    #
    # def perform_destroy(self, instance):
    #     instance.delete()
        
class SystemMailTemplateImportDataLargeListRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTemplateImportDataListSerializer

    queryset = SystemMailTemplateImportData.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTemplateImportData.objects.all().order_by("-created_at")
    # pagination_class = LargeResultsSetPagination
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailTemplateImportData.objects.all().order_by("-created_at")
        
        return query_set

    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     self.perform_destroy(instance)
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    #
    # def perform_destroy(self, instance):
    #     instance.delete()


            
class SystemMailTemplateImportDataStandardTableRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTemplateImportDataOnlyViewsSerializer

    queryset = SystemMailTemplateImportData.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTemplateImportData.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailTemplateImportData.objects.all().order_by("-created_at")
        
        return query_set

    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailTemplateImportData.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailTemplateImportData.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailTemplateImportDataMediumTableRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTemplateImportDataOnlyViewsSerializer

    queryset = SystemMailTemplateImportData.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTemplateImportData.objects.all().order_by("-created_at")
    pagination_class = MediumResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailTemplateImportData.objects.all().order_by("-created_at")
        
        return query_set
        
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailTemplateImportData.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailTemplateImportData.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailTemplateImportDataLargeTableRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTemplateImportDataOnlyViewsSerializer

    queryset = SystemMailTemplateImportData.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTemplateImportData.objects.all().order_by("-created_at")
    pagination_class = LargeResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailTemplateImportData.objects.all().order_by("-created_at")
        
        return query_set

    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailTemplateImportData.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailTemplateImportData.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()



class SystemMailTemplateImportDataDetailRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTemplateImportDataDetailsSerializer

    queryset = SystemMailTemplateImportData.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTemplateImportData.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailTemplateImportData.objects.all().order_by("-created_at")
        
        return query_set
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailTemplateImportData.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailTemplateImportData.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailTemplateImportDataMediumDetailRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTemplateImportDataDetailsSerializer

    queryset = SystemMailTemplateImportData.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTemplateImportData.objects.all().order_by("-created_at")
    pagination_class = MediumResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailTemplateImportData.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailTemplateImportData.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailTemplateImportData.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailTemplateImportDataLargeDetailRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTemplateImportDataDetailsSerializer

    queryset = SystemMailTemplateImportData.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTemplateImportData.objects.all().order_by("-created_at")
    pagination_class = LargeResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailTemplateImportData.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailTemplateImportData.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailTemplateImportData.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()



class SystemMailTemplateImportDataCreateRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTemplateImportDataCreateSerializer

    queryset = SystemMailTemplateImportData.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTemplateImportData.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailTemplateImportData.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailTemplateImportData.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailTemplateImportData.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()



class SystemMailTemplateImportDataUpdateRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTemplateImportDataUpdateSerializer

    queryset = SystemMailTemplateImportData.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTemplateImportData.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailTemplateImportData.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailTemplateImportData.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailTemplateImportData.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()


           
class SystemMailTemplateImportDataDeleteRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTemplateImportDataDeleteSerializer

    queryset = SystemMailTemplateImportData.objects.all().order_by("-created_at")
    
    #queryset = SystemMailTemplateImportData.objects.all().order_by("-created_at")
    # pagination_class = StandardResultsSetPagination
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailTemplateImportData.objects.filter(author=user)

    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     self.perform_destroy(instance)
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    #
    # def perform_destroy(self, instance):
    #     instance.delete()

     


class SystemMailTemplateImportDataStandardSearchRestApiView(generics.ListCreateAPIView):
    serializer_class = SystemMailTemplateImportDataOnlyViewsSerializer

    queryset = SystemMailTemplateImportData.objects.all()
    
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'uuid'
    search_fields = [
        
            'name',
                    
            'friendly_code',
                    
            'file',
                    
            'total_record_number',
                    
            'import_status__name',
                    
        ]
    # search_fields = ['name']

    filter_backends = (filters.SearchFilter,)
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailTemplateImportData.objects.all().order_by("-created_at")
        
        return query_set

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailTemplateImportDataMediumSearchRestApiView(generics.ListCreateAPIView):
    serializer_class = SystemMailTemplateImportDataOnlyViewsSerializer

    queryset = SystemMailTemplateImportData.objects.all().order_by("-created_at")
    
    pagination_class = MediumResultsSetPagination
    # lookup_field = 'uuid'
    search_fields = [
        
            'name',
                    
            'friendly_code',
                    
            'file',
                    
            'total_record_number',
                    
            'import_status__name',
                    
        ]
    # search_fields = ['name']

    filter_backends = (filters.SearchFilter,)
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailTemplateImportData.objects.all().order_by("-created_at")
        
        return query_set

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailTemplateImportDataLargeSearchRestApiView(generics.ListCreateAPIView):
    serializer_class = SystemMailTemplateImportDataOnlyViewsSerializer

    queryset = SystemMailTemplateImportData.objects.all().order_by("-created_at")
    
    pagination_class = LargeResultsSetPagination
    # lookup_field = 'uuid'

    search_fields = [
        
            'name',
                    
            'friendly_code',
                    
            'file',
                    
            'total_record_number',
                    
            'import_status__name',
                    
        ]
    # search_fields = ['name']

    filter_backends = (filters.SearchFilter,)
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     return SystemMailTemplateImportData.objects.all().order_by("-created_at")

    def get_queryset(self):
        query_set = SystemMailTemplateImportData.objects.all().order_by("-created_at")
        
        return query_set

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()


                        
class SystemMailTemplateImportDataStandardFilterRestApiView(generics.ListAPIView):
    serializer_class = SystemMailTemplateImportDataDetailsSerializer

    # queryset = SystemMailTemplateImportData.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTemplateImportData.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'uuid'
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):

        queryset = SystemMailTemplateImportData.objects.all().order_by("-created_at")
    
        # queryset =  SystemMailTemplateImportData.objects.all().order_by("-created_at")
        query_params = self.request.query_params
        if '_' in query_params:
            query_params._mutable=True
            print(query_params['_'])
            query_params.pop('_')
            query_params._mutable=False

        if 'page' in query_params:
            query_params._mutable=True
            print(query_params['page'])
            query_params.pop('page')
            query_params._mutable=False

        if 'start_date__gte' in query_params:
            query_params._mutable=True
            print(query_params['start_date__gte'])
            start_date = str(query_params.pop('start_date__gte')[0])
            query_params._mutable=False

        if 'end_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['end_date__lte'])
            end_date = str(query_params.pop('end_date__lte')[0])
            query_params._mutable=False
            
        if 'expriry_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['expriry_date__lte'])
            expriry_date = str(query_params.pop('expriry_date__lte')[0])
            query_params._mutable=False
        try:
            if 'start_date' in locals():
                if 'expriry_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(start_date__gte=start_date)

            elif 'end_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,end_date__lte=end_date)
                else:
                    queryset = queryset.filter(end_date__lte=end_date)

            elif 'expriry_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(expriry_date__lte=expriry_date)
        except Exception as xx:
            print("[sFilterRestApiView] Error: %s" % str(xx))
            pass
            
        
        
        for query_key in query_params.dict().keys():
            query_params._mutable=True
            if hasattr(self.serializer_class.Meta.model,query_key) and  isinstance(self.serializer_class.Meta.model._meta.get_field(query_key),models.BooleanField):
                if str(query_params[query_key]).lower() == "true":
                    query_params[query_key] = True
                elif str(query_params[query_key]).lower() == "false":
                    query_params[query_key] = False
                else:
                    query_params.pop(query_key)
        query_params._mutable=False          
        if len(query_params)>0:
            # return queryset.filter(**query_params.dict())
            return queryset.filter(reduce(operator.and_, 
                                    (Q(**d) for d in (dict([i]) for i in query_params.dict().items()))))
        else:
            return queryset

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

                        
class SystemMailTemplateImportDataMediumFilterRestApiView(generics.ListAPIView):
    serializer_class = SystemMailTemplateImportDataDetailsSerializer

    # queryset = SystemMailTemplateImportData.objects.all().order_by("created_at")
    
    # queryset = SystemMailTemplateImportData.objects.all().order_by("created_at")
    pagination_class = MediumResultsSetPagination
    # lookup_field = 'uuid'
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):

        queryset = SystemMailTemplateImportData.objects.all().order_by("created_at")
    
        # queryset =  SystemMailTemplateImportData.objects.all().order_by("created_at")
        query_params = self.request.query_params
        if '_' in query_params:
            query_params._mutable=True
            print(query_params['_'])
            query_params.pop('_')
            query_params._mutable=False

        if 'page' in query_params:
            query_params._mutable=True
            print(query_params['page'])
            query_params.pop('page')
            query_params._mutable=False

        if 'start_date__gte' in query_params:
            query_params._mutable=True
            print(query_params['start_date__gte'])
            start_date = str(query_params.pop('start_date__gte')[0])
            query_params._mutable=False

        if 'end_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['end_date__lte'])
            end_date = str(query_params.pop('end_date__lte')[0])
            query_params._mutable=False
            
        if 'expriry_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['expriry_date__lte'])
            expriry_date = str(query_params.pop('expriry_date__lte')[0])
            query_params._mutable=False
        try:
            if 'start_date' in locals():
                if 'expriry_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(start_date__gte=start_date)

            elif 'end_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,end_date__lte=end_date)
                else:
                    queryset = queryset.filter(end_date__lte=end_date)

            elif 'expriry_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(expriry_date__lte=expriry_date)
        except Exception as xx:
            print("[sFilterRestApiView] Error: %s" % str(xx))
            pass
            
        
        
        for query_key in query_params.dict().keys():
            query_params._mutable=True
            if hasattr(self.serializer_class.Meta.model,query_key) and  isinstance(self.serializer_class.Meta.model._meta.get_field(query_key),models.BooleanField):
                if str(query_params[query_key]).lower() == "true":
                    query_params[query_key] = True
                elif str(query_params[query_key]).lower() == "false":
                    query_params[query_key] = False
                else:
                    query_params.pop(query_key)
        query_params._mutable=False          
        
        if len(query_params)>0:
            # return queryset.filter(**query_params.dict())
            return queryset.filter(reduce(operator.and_, 
                                    (Q(**d) for d in (dict([i]) for i in query_params.dict().items()))))
        else:
            return queryset

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()
                        
class SystemMailTemplateImportDataLargeFilterRestApiView(generics.ListAPIView):
    serializer_class = SystemMailTemplateImportDataDetailsSerializer

    # queryset = SystemMailTemplateImportData.objects.all().order_by("created_at")
    
    # queryset = SystemMailTemplateImportData.objects.all().order_by("created_at")
    pagination_class = LargeResultsSetPagination
    # lookup_field = 'uuid'
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):

        queryset = SystemMailTemplateImportData.objects.all().order_by("created_at")
    
        # queryset =  SystemMailTemplateImportData.objects.all().order_by("created_at")
        query_params = self.request.query_params
        if '_' in query_params:
            query_params._mutable=True
            print(query_params['_'])
            query_params.pop('_')
            query_params._mutable=False

        if 'page' in query_params:
            query_params._mutable=True
            print(query_params['page'])
            query_params.pop('page')
            query_params._mutable=False

        if 'start_date__gte' in query_params:
            query_params._mutable=True
            print(query_params['start_date__gte'])
            start_date = str(query_params.pop('start_date__gte')[0])
            query_params._mutable=False

        if 'end_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['end_date__lte'])
            end_date = str(query_params.pop('end_date__lte')[0])
            query_params._mutable=False
            
        if 'expriry_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['expriry_date__lte'])
            expriry_date = str(query_params.pop('expriry_date__lte')[0])
            query_params._mutable=False
        try:
            if 'start_date' in locals():
                if 'expriry_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(start_date__gte=start_date)

            elif 'end_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,end_date__lte=end_date)
                else:
                    queryset = queryset.filter(end_date__lte=end_date)

            elif 'expriry_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(expriry_date__lte=expriry_date)
        except Exception as xx:
            print("[sFilterRestApiView] Error: %s" % str(xx))
            pass
            
        
        
        for query_key in query_params.dict().keys():
            query_params._mutable=True
            if hasattr(self.serializer_class.Meta.model,query_key) and  isinstance(self.serializer_class.Meta.model._meta.get_field(query_key),models.BooleanField):
                if str(query_params[query_key]).lower() == "true":
                    query_params[query_key] = True
                elif str(query_params[query_key]).lower() == "false":
                    query_params[query_key] = False
                else:
                    query_params.pop(query_key)
        query_params._mutable=False          
        if len(query_params)>0:
            # return queryset.filter(**query_params.dict())
            return queryset.filter(reduce(operator.and_, 
                                    (Q(**d) for d in (dict([i]) for i in query_params.dict().items()))))
        else:
            return queryset

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()



            
class SystemMailTemplateImportDataRemoveFileRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTemplateImportDataRemoveFileSerializer

    queryset = SystemMailTemplateImportData.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTemplateImportData.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailTemplateImportData.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailTemplateImportData.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailTemplateImportData.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

    

        
class SystemMailTemplateImportStatusStandardListRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTemplateImportStatusListSerializer

    queryset = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
    # pagination_class = StandardResultsSetPagination
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
        
        return query_set

    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     self.perform_destroy(instance)
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    #
    # def perform_destroy(self, instance):
    #     instance.delete()
        
class SystemMailTemplateImportStatusMediumListRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTemplateImportStatusListSerializer

    queryset = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
    # pagination_class = MediumResultsSetPagination
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
        
        return query_set

    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     self.perform_destroy(instance)
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    #
    # def perform_destroy(self, instance):
    #     instance.delete()
        
class SystemMailTemplateImportStatusLargeListRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTemplateImportStatusListSerializer

    queryset = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
    # pagination_class = LargeResultsSetPagination
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
        
        return query_set

    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     self.perform_destroy(instance)
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    #
    # def perform_destroy(self, instance):
    #     instance.delete()


            
class SystemMailTemplateImportStatusStandardTableRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTemplateImportStatusOnlyViewsSerializer

    queryset = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
        
        return query_set

    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailTemplateImportStatus.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailTemplateImportStatusMediumTableRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTemplateImportStatusOnlyViewsSerializer

    queryset = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
    pagination_class = MediumResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
        
        return query_set
        
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailTemplateImportStatus.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailTemplateImportStatusLargeTableRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTemplateImportStatusOnlyViewsSerializer

    queryset = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
    pagination_class = LargeResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
        
        return query_set

    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailTemplateImportStatus.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()



class SystemMailTemplateImportStatusDetailRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTemplateImportStatusDetailsSerializer

    queryset = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
        
        return query_set
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailTemplateImportStatus.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailTemplateImportStatusMediumDetailRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTemplateImportStatusDetailsSerializer

    queryset = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
    pagination_class = MediumResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailTemplateImportStatus.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailTemplateImportStatus.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailTemplateImportStatusLargeDetailRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTemplateImportStatusDetailsSerializer

    queryset = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
    pagination_class = LargeResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailTemplateImportStatus.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailTemplateImportStatus.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()



class SystemMailTemplateImportStatusCreateRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTemplateImportStatusCreateSerializer

    queryset = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailTemplateImportStatus.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailTemplateImportStatus.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()



class SystemMailTemplateImportStatusUpdateRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTemplateImportStatusUpdateSerializer

    queryset = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailTemplateImportStatus.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailTemplateImportStatus.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()


           
class SystemMailTemplateImportStatusDeleteRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTemplateImportStatusDeleteSerializer

    queryset = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
    
    #queryset = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
    # pagination_class = StandardResultsSetPagination
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailTemplateImportStatus.objects.filter(author=user)

    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     self.perform_destroy(instance)
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    #
    # def perform_destroy(self, instance):
    #     instance.delete()

     


class SystemMailTemplateImportStatusStandardSearchRestApiView(generics.ListCreateAPIView):
    serializer_class = SystemMailTemplateImportStatusOnlyViewsSerializer

    queryset = SystemMailTemplateImportStatus.objects.all()
    
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'uuid'
    search_fields = [
        
            'name',
                    
            'friendly_code',
                    
            'icon_class',
                    
            'color_class',
                    
        ]
    # search_fields = ['name']

    filter_backends = (filters.SearchFilter,)
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
        
        return query_set

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailTemplateImportStatusMediumSearchRestApiView(generics.ListCreateAPIView):
    serializer_class = SystemMailTemplateImportStatusOnlyViewsSerializer

    queryset = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
    
    pagination_class = MediumResultsSetPagination
    # lookup_field = 'uuid'
    search_fields = [
        
            'name',
                    
            'friendly_code',
                    
            'icon_class',
                    
            'color_class',
                    
        ]
    # search_fields = ['name']

    filter_backends = (filters.SearchFilter,)
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):
        query_set = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
        
        return query_set

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

class SystemMailTemplateImportStatusLargeSearchRestApiView(generics.ListCreateAPIView):
    serializer_class = SystemMailTemplateImportStatusOnlyViewsSerializer

    queryset = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
    
    pagination_class = LargeResultsSetPagination
    # lookup_field = 'uuid'

    search_fields = [
        
            'name',
                    
            'friendly_code',
                    
            'icon_class',
                    
            'color_class',
                    
        ]
    # search_fields = ['name']

    filter_backends = (filters.SearchFilter,)
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     return SystemMailTemplateImportStatus.objects.all().order_by("-created_at")

    def get_queryset(self):
        query_set = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
        
        return query_set

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()


                        
class SystemMailTemplateImportStatusStandardFilterRestApiView(generics.ListAPIView):
    serializer_class = SystemMailTemplateImportStatusDetailsSerializer

    # queryset = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'uuid'
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):

        queryset = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
    
        # queryset =  SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
        query_params = self.request.query_params
        if '_' in query_params:
            query_params._mutable=True
            print(query_params['_'])
            query_params.pop('_')
            query_params._mutable=False

        if 'page' in query_params:
            query_params._mutable=True
            print(query_params['page'])
            query_params.pop('page')
            query_params._mutable=False

        if 'start_date__gte' in query_params:
            query_params._mutable=True
            print(query_params['start_date__gte'])
            start_date = str(query_params.pop('start_date__gte')[0])
            query_params._mutable=False

        if 'end_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['end_date__lte'])
            end_date = str(query_params.pop('end_date__lte')[0])
            query_params._mutable=False
            
        if 'expriry_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['expriry_date__lte'])
            expriry_date = str(query_params.pop('expriry_date__lte')[0])
            query_params._mutable=False
        try:
            if 'start_date' in locals():
                if 'expriry_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(start_date__gte=start_date)

            elif 'end_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,end_date__lte=end_date)
                else:
                    queryset = queryset.filter(end_date__lte=end_date)

            elif 'expriry_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(expriry_date__lte=expriry_date)
        except Exception as xx:
            print("[sFilterRestApiView] Error: %s" % str(xx))
            pass
            
        
        
        for query_key in query_params.dict().keys():
            query_params._mutable=True
            if hasattr(self.serializer_class.Meta.model,query_key) and  isinstance(self.serializer_class.Meta.model._meta.get_field(query_key),models.BooleanField):
                if str(query_params[query_key]).lower() == "true":
                    query_params[query_key] = True
                elif str(query_params[query_key]).lower() == "false":
                    query_params[query_key] = False
                else:
                    query_params.pop(query_key)
        query_params._mutable=False          
        if len(query_params)>0:
            # return queryset.filter(**query_params.dict())
            return queryset.filter(reduce(operator.and_, 
                                    (Q(**d) for d in (dict([i]) for i in query_params.dict().items()))))
        else:
            return queryset

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

                        
class SystemMailTemplateImportStatusMediumFilterRestApiView(generics.ListAPIView):
    serializer_class = SystemMailTemplateImportStatusDetailsSerializer

    # queryset = SystemMailTemplateImportStatus.objects.all().order_by("created_at")
    
    # queryset = SystemMailTemplateImportStatus.objects.all().order_by("created_at")
    pagination_class = MediumResultsSetPagination
    # lookup_field = 'uuid'
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):

        queryset = SystemMailTemplateImportStatus.objects.all().order_by("created_at")
    
        # queryset =  SystemMailTemplateImportStatus.objects.all().order_by("created_at")
        query_params = self.request.query_params
        if '_' in query_params:
            query_params._mutable=True
            print(query_params['_'])
            query_params.pop('_')
            query_params._mutable=False

        if 'page' in query_params:
            query_params._mutable=True
            print(query_params['page'])
            query_params.pop('page')
            query_params._mutable=False

        if 'start_date__gte' in query_params:
            query_params._mutable=True
            print(query_params['start_date__gte'])
            start_date = str(query_params.pop('start_date__gte')[0])
            query_params._mutable=False

        if 'end_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['end_date__lte'])
            end_date = str(query_params.pop('end_date__lte')[0])
            query_params._mutable=False
            
        if 'expriry_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['expriry_date__lte'])
            expriry_date = str(query_params.pop('expriry_date__lte')[0])
            query_params._mutable=False
        try:
            if 'start_date' in locals():
                if 'expriry_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(start_date__gte=start_date)

            elif 'end_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,end_date__lte=end_date)
                else:
                    queryset = queryset.filter(end_date__lte=end_date)

            elif 'expriry_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(expriry_date__lte=expriry_date)
        except Exception as xx:
            print("[sFilterRestApiView] Error: %s" % str(xx))
            pass
            
        
        
        for query_key in query_params.dict().keys():
            query_params._mutable=True
            if hasattr(self.serializer_class.Meta.model,query_key) and  isinstance(self.serializer_class.Meta.model._meta.get_field(query_key),models.BooleanField):
                if str(query_params[query_key]).lower() == "true":
                    query_params[query_key] = True
                elif str(query_params[query_key]).lower() == "false":
                    query_params[query_key] = False
                else:
                    query_params.pop(query_key)
        query_params._mutable=False          
        
        if len(query_params)>0:
            # return queryset.filter(**query_params.dict())
            return queryset.filter(reduce(operator.and_, 
                                    (Q(**d) for d in (dict([i]) for i in query_params.dict().items()))))
        else:
            return queryset

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()
                        
class SystemMailTemplateImportStatusLargeFilterRestApiView(generics.ListAPIView):
    serializer_class = SystemMailTemplateImportStatusDetailsSerializer

    # queryset = SystemMailTemplateImportStatus.objects.all().order_by("created_at")
    
    # queryset = SystemMailTemplateImportStatus.objects.all().order_by("created_at")
    pagination_class = LargeResultsSetPagination
    # lookup_field = 'uuid'
    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    def get_queryset(self):

        queryset = SystemMailTemplateImportStatus.objects.all().order_by("created_at")
    
        # queryset =  SystemMailTemplateImportStatus.objects.all().order_by("created_at")
        query_params = self.request.query_params
        if '_' in query_params:
            query_params._mutable=True
            print(query_params['_'])
            query_params.pop('_')
            query_params._mutable=False

        if 'page' in query_params:
            query_params._mutable=True
            print(query_params['page'])
            query_params.pop('page')
            query_params._mutable=False

        if 'start_date__gte' in query_params:
            query_params._mutable=True
            print(query_params['start_date__gte'])
            start_date = str(query_params.pop('start_date__gte')[0])
            query_params._mutable=False

        if 'end_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['end_date__lte'])
            end_date = str(query_params.pop('end_date__lte')[0])
            query_params._mutable=False
            
        if 'expriry_date__lte' in query_params:
            query_params._mutable=True
            print(query_params['expriry_date__lte'])
            expriry_date = str(query_params.pop('expriry_date__lte')[0])
            query_params._mutable=False
        try:
            if 'start_date' in locals():
                if 'expriry_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(start_date__gte=start_date)

            elif 'end_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,end_date__lte=end_date)
                else:
                    queryset = queryset.filter(end_date__lte=end_date)

            elif 'expriry_date' in locals():
                if 'start_date' in locals():
                    queryset = queryset.filter(start_date__gte=start_date,expriry_date__lte=expriry_date)
                else:
                    queryset = queryset.filter(expriry_date__lte=expriry_date)
        except Exception as xx:
            print("[sFilterRestApiView] Error: %s" % str(xx))
            pass
            
        
        
        for query_key in query_params.dict().keys():
            query_params._mutable=True
            if hasattr(self.serializer_class.Meta.model,query_key) and  isinstance(self.serializer_class.Meta.model._meta.get_field(query_key),models.BooleanField):
                if str(query_params[query_key]).lower() == "true":
                    query_params[query_key] = True
                elif str(query_params[query_key]).lower() == "false":
                    query_params[query_key] = False
                else:
                    query_params.pop(query_key)
        query_params._mutable=False          
        if len(query_params)>0:
            # return queryset.filter(**query_params.dict())
            return queryset.filter(reduce(operator.and_, 
                                    (Q(**d) for d in (dict([i]) for i in query_params.dict().items()))))
        else:
            return queryset

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()



            
class SystemMailTemplateImportStatusRemoveFileRestApiView(viewsets.ModelViewSet):
    serializer_class = SystemMailTemplateImportStatusRemoveFileSerializer

    queryset = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
    
    # queryset = SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
    pagination_class = StandardResultsSetPagination
    # lookup_field = 'name'
    lookup_field = 'uuid'

    # authentication_classes = [
    #     JWTAuthentication,
    #     JSONWebTokenAuthentication,
    #     TokenAuthentication,
    #     SessionAuthentication,
    #     BasicAuthentication,
    # ]
    # permission_classes = [IsAuthenticated]
    permission_classes = [AllowAny,]
    #
    # def get(self, request, format=None):
    #     content = {
    #         'user': str(request.user),  # `django.contrib.auth.User` instance.
    #         'auth': str(request.auth),  # None
    #     }
    #     return Response(content)
    #
    # def put(self, request, filename, format=None):
    #     file_obj = request.FILES['file']
    #     # do some stuff with uploaded file
    #     return Response(status=204)

    # def perform_create(self, serializer):
    #     serializer.save(author=self.request.user)

    # def get_queryset(self):
    #     user = self.request.user
    #     return models.SystemMailTemplateImportStatus.objects.filter(author=user)
    # def get_queryset(self):
    #     # user = self.request.name
    #     if 'name' in self.kwargs:
    #         return SystemMailTemplateImportStatus.objects.filter(name=self.kwargs["name"]).order_by("-created_at")
    #     else:
    #         return SystemMailTemplateImportStatus.objects.all().order_by("-created_at")
    # def retrieve(self, request, *args, **kwargs): # Change is here <<
    #     serializer = self.get_serializer(self.get_queryset(), many=True)
    #     return Response(data=serializer.data)
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

    def perform_destroy(self, instance):
        instance.delete()

    
