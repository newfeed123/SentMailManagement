

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

from django.urls import path
from . import TNVviews
from . import TNVrest_views
app_name = 'SentMailManagement'


urlpatterns = [
    
    path('', TNVviews.Index, name='Index'),

    # Url for SystemMailSenderConfig
    path('SystemMailSenderConfig/', TNVviews.SystemMailSenderConfigView, name='SystemMailSenderConfigView'),
    
    # duong dan danh cho trang danh sach cua Quản trị viên voi trang Cấu hình email gửi đi
    path('SystemMailSenderConfig/manager/', TNVviews.SystemMailSenderConfigView, name='SystemMailSenderConfigView'),

    # duong dan danh cho trang danh sach cua Quản lý nhân sự voi trang Cấu hình email gửi đi
    path('SystemMailSenderConfig/hr-manager/', TNVviews.SystemMailSenderConfig_QLNSView, name='SystemMailSenderConfigView'),

    # duong dan danh cho trang danh sach cua của tôi voi trang Cấu hình email gửi đi
    path('SystemMailSenderConfig/my/', TNVviews.SystemMailSenderConfigView, name='SystemMailSenderConfigView'),

    path('SystemMailSenderConfig/create/', TNVviews.SystemMailSenderConfig_CreateView, name='SystemMailSenderConfig_CreateView'),
    
    # duong dan danh cho trang them moi cua Quản trị viên voi trang Cấu hình email gửi đi
    path('SystemMailSenderConfig/manager/create/', TNVviews.SystemMailSenderConfig_CreateView, name='SystemMailSenderConfigCreateView'),

    # duong dan danh cho trang them moi cua Quản lý nhân sự voi trang Cấu hình email gửi đi
    path('SystemMailSenderConfig/hr-manager/create/', TNVviews.SystemMailSenderConfig_QLNSCreateView, name='SystemMailSenderConfigCreateView'),

    # duong dan danh cho trang them moi cua của tôi voi trang Cấu hình email gửi đi
    path('SystemMailSenderConfig/my/create/', TNVviews.SystemMailSenderConfig_CreateView, name='SystemMailSenderConfigCreateView'),

    path('SystemMailSenderConfig/detail/<slug>/', TNVviews.SystemMailSenderConfig_DetailView, name='SystemMailSenderConfig_DetailView'),
    
    # duong dan danh cho trang xem chi tiet cua Quản trị viên voi trang Cấu hình email gửi đi
    path('SystemMailSenderConfig/manager/detail/<slug>/', TNVviews.SystemMailSenderConfig_DetailView, name='SystemMailSenderConfigDetailView'),

    # duong dan danh cho trang xem chi tiet cua Quản lý nhân sự voi trang Cấu hình email gửi đi
    path('SystemMailSenderConfig/hr-manager/detail/<slug>/', TNVviews.SystemMailSenderConfig_QLNSDetailView, name='SystemMailSenderConfigDetailView'),

    # duong dan danh cho trang xem chi tiet cua của tôi voi trang Cấu hình email gửi đi
    path('SystemMailSenderConfig/my/detail/<slug>/', TNVviews.SystemMailSenderConfig_DetailView, name='SystemMailSenderConfigDetailView'),

    path('SystemMailSenderConfig/edit/<slug>/', TNVviews.SystemMailSenderConfig_EditView, name='SystemMailSenderConfig_EditView'),
    
    # duong dan danh cho trang chinh sua cua Quản trị viên voi trang Cấu hình email gửi đi
    path('SystemMailSenderConfig/manager/edit/<slug>', TNVviews.SystemMailSenderConfig_EditView, name='SystemMailSenderConfigEditView'),

    # duong dan danh cho trang chinh sua cua Quản lý nhân sự voi trang Cấu hình email gửi đi
    path('SystemMailSenderConfig/hr-manager/edit/<slug>', TNVviews.SystemMailSenderConfig_EditView, name='SystemMailSenderConfigEditView'),

    # duong dan danh cho trang chinh sua cua của tôi voi trang Cấu hình email gửi đi
    path('SystemMailSenderConfig/my/edit/<slug>', TNVviews.SystemMailSenderConfig_EditView, name='SystemMailSenderConfigEditView'),

    
    # Check trùng giá trị
    path('SystemMailSenderConfig/check-code/create/exist/<field_value>/', TNVviews.SystemMailSenderConfig_AddingCheckExist, name='SystemMailSenderConfig_AddingCheckExist'),
    path('SystemMailSenderConfig/check-code/update/<obj_uuid>/exist/<field_value>/', TNVviews.SystemMailSenderConfig_UpdateCheckExist, name='SystemMailSenderConfig_UpdateCheckExist'),

    # Tìm kiếm nhanh
    path('SystemMailSenderConfig/search/standard/', TNVrest_views.SystemMailSenderConfigStandardSearchRestApiView.as_view(), name='SystemMailSenderConfigStandardSearchRestApiView'),
    path('SystemMailSenderConfig/search/medium/', TNVrest_views.SystemMailSenderConfigMediumSearchRestApiView.as_view(), name='SystemMailSenderConfigMediumSearchRestApiView'),
    path('SystemMailSenderConfig/search/large/', TNVrest_views.SystemMailSenderConfigLargeSearchRestApiView.as_view(), name='SystemMailSenderConfigLargeSearchRestApiView'),
    # tìm kiếm theo bộ lọc
    path('SystemMailSenderConfig/filter/standard/', TNVrest_views.SystemMailSenderConfigStandardFilterRestApiView.as_view(), name='SystemMailSenderConfigFilterRestApiView'),
    path('SystemMailSenderConfig/filter/medium/', TNVrest_views.SystemMailSenderConfigMediumFilterRestApiView.as_view(), name='SystemMailSenderConfigMediumFilterRestApiView'),
    path('SystemMailSenderConfig/filter/large/', TNVrest_views.SystemMailSenderConfigLargeFilterRestApiView.as_view(), name='SystemMailSenderConfigLargeFilterRestApiView'),
                
    path('', TNVviews.Index, name='Index'),

    # Url for SystemMailTarget
    path('SystemMailTarget/', TNVviews.SystemMailTargetView, name='SystemMailTargetView'),
    
    # duong dan danh cho trang danh sach cua Quản trị viên voi trang Cá nhân/nhóm nhận mail
    path('SystemMailTarget/manager/', TNVviews.SystemMailTargetView, name='SystemMailTargetView'),

    # duong dan danh cho trang danh sach cua Quản lý nhân sự voi trang Cá nhân/nhóm nhận mail
    path('SystemMailTarget/hr-manager/', TNVviews.SystemMailTarget_QLNSView, name='SystemMailTargetView'),

    # duong dan danh cho trang danh sach cua của tôi voi trang Cá nhân/nhóm nhận mail
    path('SystemMailTarget/my/', TNVviews.SystemMailTargetView, name='SystemMailTargetView'),

    path('SystemMailTarget/create/', TNVviews.SystemMailTarget_CreateView, name='SystemMailTarget_CreateView'),
    
    # duong dan danh cho trang them moi cua Quản trị viên voi trang Cá nhân/nhóm nhận mail
    path('SystemMailTarget/manager/create/', TNVviews.SystemMailTarget_CreateView, name='SystemMailTargetCreateView'),

    # duong dan danh cho trang them moi cua Quản lý nhân sự voi trang Cá nhân/nhóm nhận mail
    path('SystemMailTarget/hr-manager/create/', TNVviews.SystemMailTarget_QLNSCreateView, name='SystemMailTargetCreateView'),

    # duong dan danh cho trang them moi cua của tôi voi trang Cá nhân/nhóm nhận mail
    path('SystemMailTarget/my/create/', TNVviews.SystemMailTarget_CreateView, name='SystemMailTargetCreateView'),

    path('SystemMailTarget/detail/<slug>/', TNVviews.SystemMailTarget_DetailView, name='SystemMailTarget_DetailView'),
    
    # duong dan danh cho trang xem chi tiet cua Quản trị viên voi trang Cá nhân/nhóm nhận mail
    path('SystemMailTarget/manager/detail/<slug>/', TNVviews.SystemMailTarget_DetailView, name='SystemMailTargetDetailView'),

    # duong dan danh cho trang xem chi tiet cua Quản lý nhân sự voi trang Cá nhân/nhóm nhận mail
    path('SystemMailTarget/hr-manager/detail/<slug>/', TNVviews.SystemMailTarget_QLNSDetailView, name='SystemMailTargetDetailView'),

    # duong dan danh cho trang xem chi tiet cua của tôi voi trang Cá nhân/nhóm nhận mail
    path('SystemMailTarget/my/detail/<slug>/', TNVviews.SystemMailTarget_DetailView, name='SystemMailTargetDetailView'),

    path('SystemMailTarget/edit/<slug>/', TNVviews.SystemMailTarget_EditView, name='SystemMailTarget_EditView'),
    
    # duong dan danh cho trang chinh sua cua Quản trị viên voi trang Cá nhân/nhóm nhận mail
    path('SystemMailTarget/manager/edit/<slug>', TNVviews.SystemMailTarget_EditView, name='SystemMailTargetEditView'),

    # duong dan danh cho trang chinh sua cua Quản lý nhân sự voi trang Cá nhân/nhóm nhận mail
    path('SystemMailTarget/hr-manager/edit/<slug>', TNVviews.SystemMailTarget_EditView, name='SystemMailTargetEditView'),

    # duong dan danh cho trang chinh sua cua của tôi voi trang Cá nhân/nhóm nhận mail
    path('SystemMailTarget/my/edit/<slug>', TNVviews.SystemMailTarget_EditView, name='SystemMailTargetEditView'),

    
    # Check trùng giá trị
    path('SystemMailTarget/check-code/create/exist/<field_value>/', TNVviews.SystemMailTarget_AddingCheckExist, name='SystemMailTarget_AddingCheckExist'),
    path('SystemMailTarget/check-code/update/<obj_uuid>/exist/<field_value>/', TNVviews.SystemMailTarget_UpdateCheckExist, name='SystemMailTarget_UpdateCheckExist'),

    # Tìm kiếm nhanh
    path('SystemMailTarget/search/standard/', TNVrest_views.SystemMailTargetStandardSearchRestApiView.as_view(), name='SystemMailTargetStandardSearchRestApiView'),
    path('SystemMailTarget/search/medium/', TNVrest_views.SystemMailTargetMediumSearchRestApiView.as_view(), name='SystemMailTargetMediumSearchRestApiView'),
    path('SystemMailTarget/search/large/', TNVrest_views.SystemMailTargetLargeSearchRestApiView.as_view(), name='SystemMailTargetLargeSearchRestApiView'),
    # tìm kiếm theo bộ lọc
    path('SystemMailTarget/filter/standard/', TNVrest_views.SystemMailTargetStandardFilterRestApiView.as_view(), name='SystemMailTargetFilterRestApiView'),
    path('SystemMailTarget/filter/medium/', TNVrest_views.SystemMailTargetMediumFilterRestApiView.as_view(), name='SystemMailTargetMediumFilterRestApiView'),
    path('SystemMailTarget/filter/large/', TNVrest_views.SystemMailTargetLargeFilterRestApiView.as_view(), name='SystemMailTargetLargeFilterRestApiView'),
                
    path('', TNVviews.Index, name='Index'),

    # Url for SystemMailMail
    path('SystemMailMail/', TNVviews.SystemMailMailView, name='SystemMailMailView'),
    
    # duong dan danh cho trang danh sach cua Quản trị viên voi trang Mail cần gửi
    path('SystemMailMail/manager/', TNVviews.SystemMailMailView, name='SystemMailMailView'),

    # duong dan danh cho trang danh sach cua Quản lý nhân sự voi trang Mail cần gửi
    path('SystemMailMail/hr-manager/', TNVviews.SystemMailMail_QLNSView, name='SystemMailMailView'),

    # duong dan danh cho trang danh sach cua của tôi voi trang Mail cần gửi
    path('SystemMailMail/my/', TNVviews.SystemMailMailView, name='SystemMailMailView'),

    path('SystemMailMail/create/', TNVviews.SystemMailMail_CreateView, name='SystemMailMail_CreateView'),
    
    # duong dan danh cho trang them moi cua Quản trị viên voi trang Mail cần gửi
    path('SystemMailMail/manager/create/', TNVviews.SystemMailMail_CreateView, name='SystemMailMailCreateView'),

    # duong dan danh cho trang them moi cua Quản lý nhân sự voi trang Mail cần gửi
    path('SystemMailMail/hr-manager/create/', TNVviews.SystemMailMail_QLNSCreateView, name='SystemMailMailCreateView'),

    # duong dan danh cho trang them moi cua của tôi voi trang Mail cần gửi
    path('SystemMailMail/my/create/', TNVviews.SystemMailMail_CreateView, name='SystemMailMailCreateView'),

    path('SystemMailMail/detail/<slug>/', TNVviews.SystemMailMail_DetailView, name='SystemMailMail_DetailView'),
    
    # duong dan danh cho trang xem chi tiet cua Quản trị viên voi trang Mail cần gửi
    path('SystemMailMail/manager/detail/<slug>/', TNVviews.SystemMailMail_DetailView, name='SystemMailMailDetailView'),

    # duong dan danh cho trang xem chi tiet cua Quản lý nhân sự voi trang Mail cần gửi
    path('SystemMailMail/hr-manager/detail/<slug>/', TNVviews.SystemMailMail_QLNSDetailView, name='SystemMailMailDetailView'),

    # duong dan danh cho trang xem chi tiet cua của tôi voi trang Mail cần gửi
    path('SystemMailMail/my/detail/<slug>/', TNVviews.SystemMailMail_DetailView, name='SystemMailMailDetailView'),

    path('SystemMailMail/edit/<slug>/', TNVviews.SystemMailMail_EditView, name='SystemMailMail_EditView'),
    
    # duong dan danh cho trang chinh sua cua Quản trị viên voi trang Mail cần gửi
    path('SystemMailMail/manager/edit/<slug>', TNVviews.SystemMailMail_EditView, name='SystemMailMailEditView'),

    # duong dan danh cho trang chinh sua cua Quản lý nhân sự voi trang Mail cần gửi
    path('SystemMailMail/hr-manager/edit/<slug>', TNVviews.SystemMailMail_EditView, name='SystemMailMailEditView'),

    # duong dan danh cho trang chinh sua cua của tôi voi trang Mail cần gửi
    path('SystemMailMail/my/edit/<slug>', TNVviews.SystemMailMail_EditView, name='SystemMailMailEditView'),

    
    # Check trùng giá trị
    path('SystemMailMail/check-code/create/exist/<field_value>/', TNVviews.SystemMailMail_AddingCheckExist, name='SystemMailMail_AddingCheckExist'),
    path('SystemMailMail/check-code/update/<obj_uuid>/exist/<field_value>/', TNVviews.SystemMailMail_UpdateCheckExist, name='SystemMailMail_UpdateCheckExist'),

    # Tìm kiếm nhanh
    path('SystemMailMail/search/standard/', TNVrest_views.SystemMailMailStandardSearchRestApiView.as_view(), name='SystemMailMailStandardSearchRestApiView'),
    path('SystemMailMail/search/medium/', TNVrest_views.SystemMailMailMediumSearchRestApiView.as_view(), name='SystemMailMailMediumSearchRestApiView'),
    path('SystemMailMail/search/large/', TNVrest_views.SystemMailMailLargeSearchRestApiView.as_view(), name='SystemMailMailLargeSearchRestApiView'),
    # tìm kiếm theo bộ lọc
    path('SystemMailMail/filter/standard/', TNVrest_views.SystemMailMailStandardFilterRestApiView.as_view(), name='SystemMailMailFilterRestApiView'),
    path('SystemMailMail/filter/medium/', TNVrest_views.SystemMailMailMediumFilterRestApiView.as_view(), name='SystemMailMailMediumFilterRestApiView'),
    path('SystemMailMail/filter/large/', TNVrest_views.SystemMailMailLargeFilterRestApiView.as_view(), name='SystemMailMailLargeFilterRestApiView'),
                
    path('', TNVviews.Index, name='Index'),

    # Url for SystemMailSentMail
    path('SystemMailSentMail/', TNVviews.SystemMailSentMailView, name='SystemMailSentMailView'),
    
    # duong dan danh cho trang danh sach cua Quản trị viên voi trang Mail đã gửi
    path('SystemMailSentMail/manager/', TNVviews.SystemMailSentMailView, name='SystemMailSentMailView'),

    # duong dan danh cho trang danh sach cua Quản lý nhân sự voi trang Mail đã gửi
    path('SystemMailSentMail/hr-manager/', TNVviews.SystemMailSentMail_QLNSView, name='SystemMailSentMailView'),

    # duong dan danh cho trang danh sach cua của tôi voi trang Mail đã gửi
    path('SystemMailSentMail/my/', TNVviews.SystemMailSentMailView, name='SystemMailSentMailView'),

    path('SystemMailSentMail/create/', TNVviews.SystemMailSentMail_CreateView, name='SystemMailSentMail_CreateView'),
    
    # duong dan danh cho trang them moi cua Quản trị viên voi trang Mail đã gửi
    path('SystemMailSentMail/manager/create/', TNVviews.SystemMailSentMail_CreateView, name='SystemMailSentMailCreateView'),

    # duong dan danh cho trang them moi cua Quản lý nhân sự voi trang Mail đã gửi
    path('SystemMailSentMail/hr-manager/create/', TNVviews.SystemMailSentMail_QLNSCreateView, name='SystemMailSentMailCreateView'),

    # duong dan danh cho trang them moi cua của tôi voi trang Mail đã gửi
    path('SystemMailSentMail/my/create/', TNVviews.SystemMailSentMail_CreateView, name='SystemMailSentMailCreateView'),

    path('SystemMailSentMail/detail/<slug>/', TNVviews.SystemMailSentMail_DetailView, name='SystemMailSentMail_DetailView'),
    
    # duong dan danh cho trang xem chi tiet cua Quản trị viên voi trang Mail đã gửi
    path('SystemMailSentMail/manager/detail/<slug>/', TNVviews.SystemMailSentMail_DetailView, name='SystemMailSentMailDetailView'),

    # duong dan danh cho trang xem chi tiet cua Quản lý nhân sự voi trang Mail đã gửi
    path('SystemMailSentMail/hr-manager/detail/<slug>/', TNVviews.SystemMailSentMail_QLNSDetailView, name='SystemMailSentMailDetailView'),

    # duong dan danh cho trang xem chi tiet cua của tôi voi trang Mail đã gửi
    path('SystemMailSentMail/my/detail/<slug>/', TNVviews.SystemMailSentMail_DetailView, name='SystemMailSentMailDetailView'),

    path('SystemMailSentMail/edit/<slug>/', TNVviews.SystemMailSentMail_EditView, name='SystemMailSentMail_EditView'),
    
    # duong dan danh cho trang chinh sua cua Quản trị viên voi trang Mail đã gửi
    path('SystemMailSentMail/manager/edit/<slug>', TNVviews.SystemMailSentMail_EditView, name='SystemMailSentMailEditView'),

    # duong dan danh cho trang chinh sua cua Quản lý nhân sự voi trang Mail đã gửi
    path('SystemMailSentMail/hr-manager/edit/<slug>', TNVviews.SystemMailSentMail_EditView, name='SystemMailSentMailEditView'),

    # duong dan danh cho trang chinh sua cua của tôi voi trang Mail đã gửi
    path('SystemMailSentMail/my/edit/<slug>', TNVviews.SystemMailSentMail_EditView, name='SystemMailSentMailEditView'),

    
    # Check trùng giá trị
    path('SystemMailSentMail/check-code/create/exist/<field_value>/', TNVviews.SystemMailSentMail_AddingCheckExist, name='SystemMailSentMail_AddingCheckExist'),
    path('SystemMailSentMail/check-code/update/<obj_uuid>/exist/<field_value>/', TNVviews.SystemMailSentMail_UpdateCheckExist, name='SystemMailSentMail_UpdateCheckExist'),

    # Tìm kiếm nhanh
    path('SystemMailSentMail/search/standard/', TNVrest_views.SystemMailSentMailStandardSearchRestApiView.as_view(), name='SystemMailSentMailStandardSearchRestApiView'),
    path('SystemMailSentMail/search/medium/', TNVrest_views.SystemMailSentMailMediumSearchRestApiView.as_view(), name='SystemMailSentMailMediumSearchRestApiView'),
    path('SystemMailSentMail/search/large/', TNVrest_views.SystemMailSentMailLargeSearchRestApiView.as_view(), name='SystemMailSentMailLargeSearchRestApiView'),
    # tìm kiếm theo bộ lọc
    path('SystemMailSentMail/filter/standard/', TNVrest_views.SystemMailSentMailStandardFilterRestApiView.as_view(), name='SystemMailSentMailFilterRestApiView'),
    path('SystemMailSentMail/filter/medium/', TNVrest_views.SystemMailSentMailMediumFilterRestApiView.as_view(), name='SystemMailSentMailMediumFilterRestApiView'),
    path('SystemMailSentMail/filter/large/', TNVrest_views.SystemMailSentMailLargeFilterRestApiView.as_view(), name='SystemMailSentMailLargeFilterRestApiView'),
                
    path('', TNVviews.Index, name='Index'),

    # Url for SystemMailServerConfig
    path('SystemMailServerConfig/', TNVviews.SystemMailServerConfigView, name='SystemMailServerConfigView'),
    
    # duong dan danh cho trang danh sach cua Quản trị viên voi trang Cấu hình email server
    path('SystemMailServerConfig/manager/', TNVviews.SystemMailServerConfigView, name='SystemMailServerConfigView'),

    # duong dan danh cho trang danh sach cua Quản lý nhân sự voi trang Cấu hình email server
    path('SystemMailServerConfig/hr-manager/', TNVviews.SystemMailServerConfig_QLNSView, name='SystemMailServerConfigView'),

    # duong dan danh cho trang danh sach cua của tôi voi trang Cấu hình email server
    path('SystemMailServerConfig/my/', TNVviews.SystemMailServerConfigView, name='SystemMailServerConfigView'),

    path('SystemMailServerConfig/create/', TNVviews.SystemMailServerConfig_CreateView, name='SystemMailServerConfig_CreateView'),
    
    # duong dan danh cho trang them moi cua Quản trị viên voi trang Cấu hình email server
    path('SystemMailServerConfig/manager/create/', TNVviews.SystemMailServerConfig_CreateView, name='SystemMailServerConfigCreateView'),

    # duong dan danh cho trang them moi cua Quản lý nhân sự voi trang Cấu hình email server
    path('SystemMailServerConfig/hr-manager/create/', TNVviews.SystemMailServerConfig_QLNSCreateView, name='SystemMailServerConfigCreateView'),

    # duong dan danh cho trang them moi cua của tôi voi trang Cấu hình email server
    path('SystemMailServerConfig/my/create/', TNVviews.SystemMailServerConfig_CreateView, name='SystemMailServerConfigCreateView'),

    path('SystemMailServerConfig/detail/<slug>/', TNVviews.SystemMailServerConfig_DetailView, name='SystemMailServerConfig_DetailView'),
    
    # duong dan danh cho trang xem chi tiet cua Quản trị viên voi trang Cấu hình email server
    path('SystemMailServerConfig/manager/detail/<slug>/', TNVviews.SystemMailServerConfig_DetailView, name='SystemMailServerConfigDetailView'),

    # duong dan danh cho trang xem chi tiet cua Quản lý nhân sự voi trang Cấu hình email server
    path('SystemMailServerConfig/hr-manager/detail/<slug>/', TNVviews.SystemMailServerConfig_QLNSDetailView, name='SystemMailServerConfigDetailView'),

    # duong dan danh cho trang xem chi tiet cua của tôi voi trang Cấu hình email server
    path('SystemMailServerConfig/my/detail/<slug>/', TNVviews.SystemMailServerConfig_DetailView, name='SystemMailServerConfigDetailView'),

    path('SystemMailServerConfig/edit/<slug>/', TNVviews.SystemMailServerConfig_EditView, name='SystemMailServerConfig_EditView'),
    
    # duong dan danh cho trang chinh sua cua Quản trị viên voi trang Cấu hình email server
    path('SystemMailServerConfig/manager/edit/<slug>', TNVviews.SystemMailServerConfig_EditView, name='SystemMailServerConfigEditView'),

    # duong dan danh cho trang chinh sua cua Quản lý nhân sự voi trang Cấu hình email server
    path('SystemMailServerConfig/hr-manager/edit/<slug>', TNVviews.SystemMailServerConfig_EditView, name='SystemMailServerConfigEditView'),

    # duong dan danh cho trang chinh sua cua của tôi voi trang Cấu hình email server
    path('SystemMailServerConfig/my/edit/<slug>', TNVviews.SystemMailServerConfig_EditView, name='SystemMailServerConfigEditView'),

    
    # Check trùng giá trị
    path('SystemMailServerConfig/check-code/create/exist/<field_value>/', TNVviews.SystemMailServerConfig_AddingCheckExist, name='SystemMailServerConfig_AddingCheckExist'),
    path('SystemMailServerConfig/check-code/update/<obj_uuid>/exist/<field_value>/', TNVviews.SystemMailServerConfig_UpdateCheckExist, name='SystemMailServerConfig_UpdateCheckExist'),

    # Tìm kiếm nhanh
    path('SystemMailServerConfig/search/standard/', TNVrest_views.SystemMailServerConfigStandardSearchRestApiView.as_view(), name='SystemMailServerConfigStandardSearchRestApiView'),
    path('SystemMailServerConfig/search/medium/', TNVrest_views.SystemMailServerConfigMediumSearchRestApiView.as_view(), name='SystemMailServerConfigMediumSearchRestApiView'),
    path('SystemMailServerConfig/search/large/', TNVrest_views.SystemMailServerConfigLargeSearchRestApiView.as_view(), name='SystemMailServerConfigLargeSearchRestApiView'),
    # tìm kiếm theo bộ lọc
    path('SystemMailServerConfig/filter/standard/', TNVrest_views.SystemMailServerConfigStandardFilterRestApiView.as_view(), name='SystemMailServerConfigFilterRestApiView'),
    path('SystemMailServerConfig/filter/medium/', TNVrest_views.SystemMailServerConfigMediumFilterRestApiView.as_view(), name='SystemMailServerConfigMediumFilterRestApiView'),
    path('SystemMailServerConfig/filter/large/', TNVrest_views.SystemMailServerConfigLargeFilterRestApiView.as_view(), name='SystemMailServerConfigLargeFilterRestApiView'),
                
    path('', TNVviews.Index, name='Index'),
    # Url import for SystemMailTemplate
    path('SystemMailTemplate/import-file/', TNVviews.SystemMailTemplate_ImportFileView, name='SystemMailTemplate_ImportFileView'),
    path('SystemMailTemplate/import-file-template/download/', TNVviews.SystemMailTemplate_ImportFileTemplateView, name='SystemMailTemplate_ImportFileTemplateView'),
    

    # Url for SystemMailTemplate
    path('SystemMailTemplate/', TNVviews.SystemMailTemplateView, name='SystemMailTemplateView'),
    
    # duong dan danh cho trang danh sach cua Quản trị viên voi trang Mẫu email
    path('SystemMailTemplate/manager/', TNVviews.SystemMailTemplateView, name='SystemMailTemplateView'),

    # duong dan danh cho trang danh sach cua Quản lý nhân sự voi trang Mẫu email
    path('SystemMailTemplate/hr-manager/', TNVviews.SystemMailTemplate_QLNSView, name='SystemMailTemplateView'),

    # duong dan danh cho trang danh sach cua của tôi voi trang Mẫu email
    path('SystemMailTemplate/my/', TNVviews.SystemMailTemplateView, name='SystemMailTemplateView'),

    path('SystemMailTemplate/create/', TNVviews.SystemMailTemplate_CreateView, name='SystemMailTemplate_CreateView'),
    
    # duong dan danh cho trang them moi cua Quản trị viên voi trang Mẫu email
    path('SystemMailTemplate/manager/create/', TNVviews.SystemMailTemplate_CreateView, name='SystemMailTemplateCreateView'),

    # duong dan danh cho trang them moi cua Quản lý nhân sự voi trang Mẫu email
    path('SystemMailTemplate/hr-manager/create/', TNVviews.SystemMailTemplate_QLNSCreateView, name='SystemMailTemplateCreateView'),

    # duong dan danh cho trang them moi cua của tôi voi trang Mẫu email
    path('SystemMailTemplate/my/create/', TNVviews.SystemMailTemplate_CreateView, name='SystemMailTemplateCreateView'),

    path('SystemMailTemplate/detail/<slug>/', TNVviews.SystemMailTemplate_DetailView, name='SystemMailTemplate_DetailView'),
    
    # duong dan danh cho trang xem chi tiet cua Quản trị viên voi trang Mẫu email
    path('SystemMailTemplate/manager/detail/<slug>/', TNVviews.SystemMailTemplate_DetailView, name='SystemMailTemplateDetailView'),

    # duong dan danh cho trang xem chi tiet cua Quản lý nhân sự voi trang Mẫu email
    path('SystemMailTemplate/hr-manager/detail/<slug>/', TNVviews.SystemMailTemplate_QLNSDetailView, name='SystemMailTemplateDetailView'),

    # duong dan danh cho trang xem chi tiet cua của tôi voi trang Mẫu email
    path('SystemMailTemplate/my/detail/<slug>/', TNVviews.SystemMailTemplate_DetailView, name='SystemMailTemplateDetailView'),

    path('SystemMailTemplate/edit/<slug>/', TNVviews.SystemMailTemplate_EditView, name='SystemMailTemplate_EditView'),
    
    # duong dan danh cho trang chinh sua cua Quản trị viên voi trang Mẫu email
    path('SystemMailTemplate/manager/edit/<slug>', TNVviews.SystemMailTemplate_EditView, name='SystemMailTemplateEditView'),

    # duong dan danh cho trang chinh sua cua Quản lý nhân sự voi trang Mẫu email
    path('SystemMailTemplate/hr-manager/edit/<slug>', TNVviews.SystemMailTemplate_EditView, name='SystemMailTemplateEditView'),

    # duong dan danh cho trang chinh sua cua của tôi voi trang Mẫu email
    path('SystemMailTemplate/my/edit/<slug>', TNVviews.SystemMailTemplate_EditView, name='SystemMailTemplateEditView'),

    
    # Check trùng giá trị
    path('SystemMailTemplate/check-code/create/exist/<field_value>/', TNVviews.SystemMailTemplate_AddingCheckExist, name='SystemMailTemplate_AddingCheckExist'),
    path('SystemMailTemplate/check-code/update/<obj_uuid>/exist/<field_value>/', TNVviews.SystemMailTemplate_UpdateCheckExist, name='SystemMailTemplate_UpdateCheckExist'),

    # Tìm kiếm nhanh
    path('SystemMailTemplate/search/standard/', TNVrest_views.SystemMailTemplateStandardSearchRestApiView.as_view(), name='SystemMailTemplateStandardSearchRestApiView'),
    path('SystemMailTemplate/search/medium/', TNVrest_views.SystemMailTemplateMediumSearchRestApiView.as_view(), name='SystemMailTemplateMediumSearchRestApiView'),
    path('SystemMailTemplate/search/large/', TNVrest_views.SystemMailTemplateLargeSearchRestApiView.as_view(), name='SystemMailTemplateLargeSearchRestApiView'),
    # tìm kiếm theo bộ lọc
    path('SystemMailTemplate/filter/standard/', TNVrest_views.SystemMailTemplateStandardFilterRestApiView.as_view(), name='SystemMailTemplateFilterRestApiView'),
    path('SystemMailTemplate/filter/medium/', TNVrest_views.SystemMailTemplateMediumFilterRestApiView.as_view(), name='SystemMailTemplateMediumFilterRestApiView'),
    path('SystemMailTemplate/filter/large/', TNVrest_views.SystemMailTemplateLargeFilterRestApiView.as_view(), name='SystemMailTemplateLargeFilterRestApiView'),
                
    path('', TNVviews.Index, name='Index'),

    #huytn Url for Soạn Mail
    path('ComposeEmail/', TNVviews.ComposeEmailView, name='ComposeEmailView'),


    # Url for SystemMailType
    path('SystemMailType/', TNVviews.SystemMailTypeView, name='SystemMailTypeView'),
    
    # duong dan danh cho trang danh sach cua Quản trị viên voi trang Loại email
    path('SystemMailType/manager/', TNVviews.SystemMailTypeView, name='SystemMailTypeView'),

    # duong dan danh cho trang danh sach cua Quản lý nhân sự voi trang Loại email
    path('SystemMailType/hr-manager/', TNVviews.SystemMailType_QLNSView, name='SystemMailTypeView'),

    # duong dan danh cho trang danh sach cua của tôi voi trang Loại email
    path('SystemMailType/my/', TNVviews.SystemMailTypeView, name='SystemMailTypeView'),

    path('SystemMailType/create/', TNVviews.SystemMailType_CreateView, name='SystemMailType_CreateView'),
    
    # duong dan danh cho trang them moi cua Quản trị viên voi trang Loại email
    path('SystemMailType/manager/create/', TNVviews.SystemMailType_CreateView, name='SystemMailTypeCreateView'),

    # duong dan danh cho trang them moi cua Quản lý nhân sự voi trang Loại email
    path('SystemMailType/hr-manager/create/', TNVviews.SystemMailType_QLNSCreateView, name='SystemMailTypeCreateView'),

    # duong dan danh cho trang them moi cua của tôi voi trang Loại email
    path('SystemMailType/my/create/', TNVviews.SystemMailType_CreateView, name='SystemMailTypeCreateView'),

    path('SystemMailType/detail/<slug>/', TNVviews.SystemMailType_DetailView, name='SystemMailType_DetailView'),
    
    # duong dan danh cho trang xem chi tiet cua Quản trị viên voi trang Loại email
    path('SystemMailType/manager/detail/<slug>/', TNVviews.SystemMailType_DetailView, name='SystemMailTypeDetailView'),

    # duong dan danh cho trang xem chi tiet cua Quản lý nhân sự voi trang Loại email
    path('SystemMailType/hr-manager/detail/<slug>/', TNVviews.SystemMailType_QLNSDetailView, name='SystemMailTypeDetailView'),

    # duong dan danh cho trang xem chi tiet cua của tôi voi trang Loại email
    path('SystemMailType/my/detail/<slug>/', TNVviews.SystemMailType_DetailView, name='SystemMailTypeDetailView'),

    path('SystemMailType/edit/<slug>/', TNVviews.SystemMailType_EditView, name='SystemMailType_EditView'),
    
    # duong dan danh cho trang chinh sua cua Quản trị viên voi trang Loại email
    path('SystemMailType/manager/edit/<slug>', TNVviews.SystemMailType_EditView, name='SystemMailTypeEditView'),

    # duong dan danh cho trang chinh sua cua Quản lý nhân sự voi trang Loại email
    path('SystemMailType/hr-manager/edit/<slug>', TNVviews.SystemMailType_EditView, name='SystemMailTypeEditView'),

    # duong dan danh cho trang chinh sua cua của tôi voi trang Loại email
    path('SystemMailType/my/edit/<slug>', TNVviews.SystemMailType_EditView, name='SystemMailTypeEditView'),

    
    # Check trùng giá trị
    path('SystemMailType/check-code/create/exist/<field_value>/', TNVviews.SystemMailType_AddingCheckExist, name='SystemMailType_AddingCheckExist'),
    path('SystemMailType/check-code/update/<obj_uuid>/exist/<field_value>/', TNVviews.SystemMailType_UpdateCheckExist, name='SystemMailType_UpdateCheckExist'),

    # Tìm kiếm nhanh
    path('SystemMailType/search/standard/', TNVrest_views.SystemMailTypeStandardSearchRestApiView.as_view(), name='SystemMailTypeStandardSearchRestApiView'),
    path('SystemMailType/search/medium/', TNVrest_views.SystemMailTypeMediumSearchRestApiView.as_view(), name='SystemMailTypeMediumSearchRestApiView'),
    path('SystemMailType/search/large/', TNVrest_views.SystemMailTypeLargeSearchRestApiView.as_view(), name='SystemMailTypeLargeSearchRestApiView'),
    # tìm kiếm theo bộ lọc
    path('SystemMailType/filter/standard/', TNVrest_views.SystemMailTypeStandardFilterRestApiView.as_view(), name='SystemMailTypeFilterRestApiView'),
    path('SystemMailType/filter/medium/', TNVrest_views.SystemMailTypeMediumFilterRestApiView.as_view(), name='SystemMailTypeMediumFilterRestApiView'),
    path('SystemMailType/filter/large/', TNVrest_views.SystemMailTypeLargeFilterRestApiView.as_view(), name='SystemMailTypeLargeFilterRestApiView'),
                
    path('', TNVviews.Index, name='Index'),

    # Url for SystemMailTemplateImportData
    path('SystemMailTemplateImportData/', TNVviews.SystemMailTemplateImportDataView, name='SystemMailTemplateImportDataView'),
    
    # duong dan danh cho trang danh sach cua Quản trị viên voi trang Tải lên Mẫu email
    path('SystemMailTemplateImportData/manager/', TNVviews.SystemMailTemplateImportDataView, name='SystemMailTemplateImportDataView'),

    # duong dan danh cho trang danh sach cua Quản lý nhân sự voi trang Tải lên Mẫu email
    path('SystemMailTemplateImportData/hr-manager/', TNVviews.SystemMailTemplateImportData_QLNSView, name='SystemMailTemplateImportDataView'),

    # duong dan danh cho trang danh sach cua của tôi voi trang Tải lên Mẫu email
    path('SystemMailTemplateImportData/my/', TNVviews.SystemMailTemplateImportDataView, name='SystemMailTemplateImportDataView'),

    path('SystemMailTemplateImportData/create/', TNVviews.SystemMailTemplateImportData_CreateView, name='SystemMailTemplateImportData_CreateView'),
    
    # duong dan danh cho trang them moi cua Quản trị viên voi trang Tải lên Mẫu email
    path('SystemMailTemplateImportData/manager/create/', TNVviews.SystemMailTemplateImportData_CreateView, name='SystemMailTemplateImportDataCreateView'),

    # duong dan danh cho trang them moi cua Quản lý nhân sự voi trang Tải lên Mẫu email
    path('SystemMailTemplateImportData/hr-manager/create/', TNVviews.SystemMailTemplateImportData_QLNSCreateView, name='SystemMailTemplateImportDataCreateView'),

    # duong dan danh cho trang them moi cua của tôi voi trang Tải lên Mẫu email
    path('SystemMailTemplateImportData/my/create/', TNVviews.SystemMailTemplateImportData_CreateView, name='SystemMailTemplateImportDataCreateView'),

    path('SystemMailTemplateImportData/detail/<slug>/', TNVviews.SystemMailTemplateImportData_DetailView, name='SystemMailTemplateImportData_DetailView'),
    
    # duong dan danh cho trang xem chi tiet cua Quản trị viên voi trang Tải lên Mẫu email
    path('SystemMailTemplateImportData/manager/detail/<slug>/', TNVviews.SystemMailTemplateImportData_DetailView, name='SystemMailTemplateImportDataDetailView'),

    # duong dan danh cho trang xem chi tiet cua Quản lý nhân sự voi trang Tải lên Mẫu email
    path('SystemMailTemplateImportData/hr-manager/detail/<slug>/', TNVviews.SystemMailTemplateImportData_QLNSDetailView, name='SystemMailTemplateImportDataDetailView'),

    # duong dan danh cho trang xem chi tiet cua của tôi voi trang Tải lên Mẫu email
    path('SystemMailTemplateImportData/my/detail/<slug>/', TNVviews.SystemMailTemplateImportData_DetailView, name='SystemMailTemplateImportDataDetailView'),

    path('SystemMailTemplateImportData/edit/<slug>/', TNVviews.SystemMailTemplateImportData_EditView, name='SystemMailTemplateImportData_EditView'),
    
    # duong dan danh cho trang chinh sua cua Quản trị viên voi trang Tải lên Mẫu email
    path('SystemMailTemplateImportData/manager/edit/<slug>', TNVviews.SystemMailTemplateImportData_EditView, name='SystemMailTemplateImportDataEditView'),

    # duong dan danh cho trang chinh sua cua Quản lý nhân sự voi trang Tải lên Mẫu email
    path('SystemMailTemplateImportData/hr-manager/edit/<slug>', TNVviews.SystemMailTemplateImportData_EditView, name='SystemMailTemplateImportDataEditView'),

    # duong dan danh cho trang chinh sua cua của tôi voi trang Tải lên Mẫu email
    path('SystemMailTemplateImportData/my/edit/<slug>', TNVviews.SystemMailTemplateImportData_EditView, name='SystemMailTemplateImportDataEditView'),

    
    # Check trùng giá trị
    path('SystemMailTemplateImportData/check-code/create/exist/<field_value>/', TNVviews.SystemMailTemplateImportData_AddingCheckExist, name='SystemMailTemplateImportData_AddingCheckExist'),
    path('SystemMailTemplateImportData/check-code/update/<obj_uuid>/exist/<field_value>/', TNVviews.SystemMailTemplateImportData_UpdateCheckExist, name='SystemMailTemplateImportData_UpdateCheckExist'),

    # Tìm kiếm nhanh
    path('SystemMailTemplateImportData/search/standard/', TNVrest_views.SystemMailTemplateImportDataStandardSearchRestApiView.as_view(), name='SystemMailTemplateImportDataStandardSearchRestApiView'),
    path('SystemMailTemplateImportData/search/medium/', TNVrest_views.SystemMailTemplateImportDataMediumSearchRestApiView.as_view(), name='SystemMailTemplateImportDataMediumSearchRestApiView'),
    path('SystemMailTemplateImportData/search/large/', TNVrest_views.SystemMailTemplateImportDataLargeSearchRestApiView.as_view(), name='SystemMailTemplateImportDataLargeSearchRestApiView'),
    # tìm kiếm theo bộ lọc
    path('SystemMailTemplateImportData/filter/standard/', TNVrest_views.SystemMailTemplateImportDataStandardFilterRestApiView.as_view(), name='SystemMailTemplateImportDataFilterRestApiView'),
    path('SystemMailTemplateImportData/filter/medium/', TNVrest_views.SystemMailTemplateImportDataMediumFilterRestApiView.as_view(), name='SystemMailTemplateImportDataMediumFilterRestApiView'),
    path('SystemMailTemplateImportData/filter/large/', TNVrest_views.SystemMailTemplateImportDataLargeFilterRestApiView.as_view(), name='SystemMailTemplateImportDataLargeFilterRestApiView'),
                
    path('', TNVviews.Index, name='Index'),

    # Url for SystemMailTemplateImportStatus
    path('SystemMailTemplateImportStatus/', TNVviews.SystemMailTemplateImportStatusView, name='SystemMailTemplateImportStatusView'),
    
    # duong dan danh cho trang danh sach cua Quản trị viên voi trang Trạng thái tải lên Mẫu email
    path('SystemMailTemplateImportStatus/manager/', TNVviews.SystemMailTemplateImportStatusView, name='SystemMailTemplateImportStatusView'),

    # duong dan danh cho trang danh sach cua Quản lý nhân sự voi trang Trạng thái tải lên Mẫu email
    path('SystemMailTemplateImportStatus/hr-manager/', TNVviews.SystemMailTemplateImportStatus_QLNSView, name='SystemMailTemplateImportStatusView'),

    # duong dan danh cho trang danh sach cua của tôi voi trang Trạng thái tải lên Mẫu email
    path('SystemMailTemplateImportStatus/my/', TNVviews.SystemMailTemplateImportStatusView, name='SystemMailTemplateImportStatusView'),

    path('SystemMailTemplateImportStatus/create/', TNVviews.SystemMailTemplateImportStatus_CreateView, name='SystemMailTemplateImportStatus_CreateView'),
    
    # duong dan danh cho trang them moi cua Quản trị viên voi trang Trạng thái tải lên Mẫu email
    path('SystemMailTemplateImportStatus/manager/create/', TNVviews.SystemMailTemplateImportStatus_CreateView, name='SystemMailTemplateImportStatusCreateView'),

    # duong dan danh cho trang them moi cua Quản lý nhân sự voi trang Trạng thái tải lên Mẫu email
    path('SystemMailTemplateImportStatus/hr-manager/create/', TNVviews.SystemMailTemplateImportStatus_QLNSCreateView, name='SystemMailTemplateImportStatusCreateView'),

    # duong dan danh cho trang them moi cua của tôi voi trang Trạng thái tải lên Mẫu email
    path('SystemMailTemplateImportStatus/my/create/', TNVviews.SystemMailTemplateImportStatus_CreateView, name='SystemMailTemplateImportStatusCreateView'),

    path('SystemMailTemplateImportStatus/detail/<slug>/', TNVviews.SystemMailTemplateImportStatus_DetailView, name='SystemMailTemplateImportStatus_DetailView'),
    
    # duong dan danh cho trang xem chi tiet cua Quản trị viên voi trang Trạng thái tải lên Mẫu email
    path('SystemMailTemplateImportStatus/manager/detail/<slug>/', TNVviews.SystemMailTemplateImportStatus_DetailView, name='SystemMailTemplateImportStatusDetailView'),

    # duong dan danh cho trang xem chi tiet cua Quản lý nhân sự voi trang Trạng thái tải lên Mẫu email
    path('SystemMailTemplateImportStatus/hr-manager/detail/<slug>/', TNVviews.SystemMailTemplateImportStatus_QLNSDetailView, name='SystemMailTemplateImportStatusDetailView'),

    # duong dan danh cho trang xem chi tiet cua của tôi voi trang Trạng thái tải lên Mẫu email
    path('SystemMailTemplateImportStatus/my/detail/<slug>/', TNVviews.SystemMailTemplateImportStatus_DetailView, name='SystemMailTemplateImportStatusDetailView'),

    path('SystemMailTemplateImportStatus/edit/<slug>/', TNVviews.SystemMailTemplateImportStatus_EditView, name='SystemMailTemplateImportStatus_EditView'),
    
    # duong dan danh cho trang chinh sua cua Quản trị viên voi trang Trạng thái tải lên Mẫu email
    path('SystemMailTemplateImportStatus/manager/edit/<slug>', TNVviews.SystemMailTemplateImportStatus_EditView, name='SystemMailTemplateImportStatusEditView'),

    # duong dan danh cho trang chinh sua cua Quản lý nhân sự voi trang Trạng thái tải lên Mẫu email
    path('SystemMailTemplateImportStatus/hr-manager/edit/<slug>', TNVviews.SystemMailTemplateImportStatus_EditView, name='SystemMailTemplateImportStatusEditView'),

    # duong dan danh cho trang chinh sua cua của tôi voi trang Trạng thái tải lên Mẫu email
    path('SystemMailTemplateImportStatus/my/edit/<slug>', TNVviews.SystemMailTemplateImportStatus_EditView, name='SystemMailTemplateImportStatusEditView'),

    
    # Check trùng giá trị
    path('SystemMailTemplateImportStatus/check-code/create/exist/<field_value>/', TNVviews.SystemMailTemplateImportStatus_AddingCheckExist, name='SystemMailTemplateImportStatus_AddingCheckExist'),
    path('SystemMailTemplateImportStatus/check-code/update/<obj_uuid>/exist/<field_value>/', TNVviews.SystemMailTemplateImportStatus_UpdateCheckExist, name='SystemMailTemplateImportStatus_UpdateCheckExist'),

    # Tìm kiếm nhanh
    path('SystemMailTemplateImportStatus/search/standard/', TNVrest_views.SystemMailTemplateImportStatusStandardSearchRestApiView.as_view(), name='SystemMailTemplateImportStatusStandardSearchRestApiView'),
    path('SystemMailTemplateImportStatus/search/medium/', TNVrest_views.SystemMailTemplateImportStatusMediumSearchRestApiView.as_view(), name='SystemMailTemplateImportStatusMediumSearchRestApiView'),
    path('SystemMailTemplateImportStatus/search/large/', TNVrest_views.SystemMailTemplateImportStatusLargeSearchRestApiView.as_view(), name='SystemMailTemplateImportStatusLargeSearchRestApiView'),
    # tìm kiếm theo bộ lọc
    path('SystemMailTemplateImportStatus/filter/standard/', TNVrest_views.SystemMailTemplateImportStatusStandardFilterRestApiView.as_view(), name='SystemMailTemplateImportStatusFilterRestApiView'),
    path('SystemMailTemplateImportStatus/filter/medium/', TNVrest_views.SystemMailTemplateImportStatusMediumFilterRestApiView.as_view(), name='SystemMailTemplateImportStatusMediumFilterRestApiView'),
    path('SystemMailTemplateImportStatus/filter/large/', TNVrest_views.SystemMailTemplateImportStatusLargeFilterRestApiView.as_view(), name='SystemMailTemplateImportStatusLargeFilterRestApiView'),
                
]
