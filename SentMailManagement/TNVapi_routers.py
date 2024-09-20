

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
from .TNVrest_views import *
from Router.models import SharedAPIRootRouter

router = SharedAPIRootRouter().shared_router


# router for SystemMailSenderConfig

# Danh cho hiển thị trên bảng SystemMailSenderConfig(chỉ xem)
router.register(r'sentmailmanagement/systemmailsenderconfig/data-table/standard', SystemMailSenderConfigStandardTableRestApiView, basename='SystemMailSenderConfigStandardTableRestApiView')
router.register(r'sentmailmanagement/systemmailsenderconfig/data-table/medium', SystemMailSenderConfigMediumTableRestApiView, basename='SystemMailSenderConfigMediumTableRestApiView')
router.register(r'sentmailmanagement/systemmailsenderconfig/data-table/large', SystemMailSenderConfigLargeTableRestApiView, basename='SystemMailSenderConfigLargeTableRestApiView')

# Lấy danh sách cho selection của SystemMailSenderConfig 
router.register(r'sentmailmanagement/systemmailsenderconfig/list/standard', SystemMailSenderConfigStandardListRestApiView, basename='SystemMailSenderConfigStandardListRestApiView')
router.register(r'sentmailmanagement/systemmailsenderconfig/list/medium', SystemMailSenderConfigMediumListRestApiView, basename='SystemMailSenderConfigMediumListRestApiView')
router.register(r'sentmailmanagement/systemmailsenderconfig/list/large', SystemMailSenderConfigLargeListRestApiView, basename='SystemMailSenderConfigLargeListRestApiView')

# Lấy chi tiết/danh sách cho SystemMailSenderConfig(xem,sửa)
router.register(r'sentmailmanagement/systemmailsenderconfig/detail/standard', SystemMailSenderConfigDetailRestApiView, basename='SystemMailSenderConfigDetailRestApiView')
router.register(r'sentmailmanagement/systemmailsenderconfig/detail/medium', SystemMailSenderConfigMediumDetailRestApiView, basename='SystemMailSenderConfigMediumDetailRestApiView')
router.register(r'sentmailmanagement/systemmailsenderconfig/detail/large', SystemMailSenderConfigLargeDetailRestApiView, basename='SystemMailSenderConfigLargeDetailRestApiView')

# Lấy thêm/cập nhật/xóa/xóa file đính kèm cho SystemMailSenderConfig
router.register(r'sentmailmanagement/systemmailsenderconfig/create', SystemMailSenderConfigCreateRestApiView, basename='SystemMailSenderConfigCreateRestApiView')
router.register(r'sentmailmanagement/systemmailsenderconfig/update', SystemMailSenderConfigUpdateRestApiView, basename='SystemMailSenderConfigUpdateRestApiView')
router.register(r'sentmailmanagement/systemmailsenderconfig/delete', SystemMailSenderConfigDeleteRestApiView, basename='SystemMailSenderConfigDeleteRestApiView')
router.register(r'sentmailmanagement/systemmailsenderconfig/remove-file', SystemMailSenderConfigRemoveFileRestApiView, basename='SystemMailSenderConfigRemoveFileRestApiView')

# # tìm kiếm nhanh danh sách cho SystemMailSenderConfig
# router.register(r'sentmailmanagement/systemmailsenderconfig/search/standard', SystemMailSenderConfigSearchRestApiView, basename='SystemMailSenderConfigSearchRestApiView')
# router.register(r'sentmailmanagement/systemmailsenderconfig/search/medium', SystemMailSenderConfigMediumSearchRestApiView, basename='SystemMailSenderConfigMediumSearchRestApiView')
# router.register(r'sentmailmanagement/systemmailsenderconfig/search/large', SystemMailSenderConfigLargeSearchRestApiView, basename='SystemMailSenderConfigLargeSearchRestApiView')

# # tìm kiếm bộ lọc danh sách cho SystemMailSenderConfig
# router.register(r'sentmailmanagement/systemmailsenderconfig/filter/standard', SystemMailSenderConfigFilterRestApiView, basename='SystemMailSenderConfigFilterRestApiView')
# router.register(r'sentmailmanagement/systemmailsenderconfig/filter/medium', SystemMailSenderConfigMediumFilterRestApiView, basename='SystemMailSenderConfigMediumFilterRestApiView')
# router.register(r'sentmailmanagement/systemmailsenderconfig/filter/large', SystemMailSenderConfigLargeFilterRestApiView, basename='SystemMailSenderConfigLargeFilterRestApiView')

             

# router for SystemMailTarget

# Danh cho hiển thị trên bảng SystemMailTarget(chỉ xem)
router.register(r'sentmailmanagement/systemmailtarget/data-table/standard', SystemMailTargetStandardTableRestApiView, basename='SystemMailTargetStandardTableRestApiView')
router.register(r'sentmailmanagement/systemmailtarget/data-table/medium', SystemMailTargetMediumTableRestApiView, basename='SystemMailTargetMediumTableRestApiView')
router.register(r'sentmailmanagement/systemmailtarget/data-table/large', SystemMailTargetLargeTableRestApiView, basename='SystemMailTargetLargeTableRestApiView')

# Lấy danh sách cho selection của SystemMailTarget 
router.register(r'sentmailmanagement/systemmailtarget/list/standard', SystemMailTargetStandardListRestApiView, basename='SystemMailTargetStandardListRestApiView')
router.register(r'sentmailmanagement/systemmailtarget/list/medium', SystemMailTargetMediumListRestApiView, basename='SystemMailTargetMediumListRestApiView')
router.register(r'sentmailmanagement/systemmailtarget/list/large', SystemMailTargetLargeListRestApiView, basename='SystemMailTargetLargeListRestApiView')

# Lấy chi tiết/danh sách cho SystemMailTarget(xem,sửa)
router.register(r'sentmailmanagement/systemmailtarget/detail/standard', SystemMailTargetDetailRestApiView, basename='SystemMailTargetDetailRestApiView')
router.register(r'sentmailmanagement/systemmailtarget/detail/medium', SystemMailTargetMediumDetailRestApiView, basename='SystemMailTargetMediumDetailRestApiView')
router.register(r'sentmailmanagement/systemmailtarget/detail/large', SystemMailTargetLargeDetailRestApiView, basename='SystemMailTargetLargeDetailRestApiView')

# Lấy thêm/cập nhật/xóa/xóa file đính kèm cho SystemMailTarget
router.register(r'sentmailmanagement/systemmailtarget/create', SystemMailTargetCreateRestApiView, basename='SystemMailTargetCreateRestApiView')
router.register(r'sentmailmanagement/systemmailtarget/update', SystemMailTargetUpdateRestApiView, basename='SystemMailTargetUpdateRestApiView')
router.register(r'sentmailmanagement/systemmailtarget/delete', SystemMailTargetDeleteRestApiView, basename='SystemMailTargetDeleteRestApiView')
router.register(r'sentmailmanagement/systemmailtarget/remove-file', SystemMailTargetRemoveFileRestApiView, basename='SystemMailTargetRemoveFileRestApiView')

# # tìm kiếm nhanh danh sách cho SystemMailTarget
# router.register(r'sentmailmanagement/systemmailtarget/search/standard', SystemMailTargetSearchRestApiView, basename='SystemMailTargetSearchRestApiView')
# router.register(r'sentmailmanagement/systemmailtarget/search/medium', SystemMailTargetMediumSearchRestApiView, basename='SystemMailTargetMediumSearchRestApiView')
# router.register(r'sentmailmanagement/systemmailtarget/search/large', SystemMailTargetLargeSearchRestApiView, basename='SystemMailTargetLargeSearchRestApiView')

# # tìm kiếm bộ lọc danh sách cho SystemMailTarget
# router.register(r'sentmailmanagement/systemmailtarget/filter/standard', SystemMailTargetFilterRestApiView, basename='SystemMailTargetFilterRestApiView')
# router.register(r'sentmailmanagement/systemmailtarget/filter/medium', SystemMailTargetMediumFilterRestApiView, basename='SystemMailTargetMediumFilterRestApiView')
# router.register(r'sentmailmanagement/systemmailtarget/filter/large', SystemMailTargetLargeFilterRestApiView, basename='SystemMailTargetLargeFilterRestApiView')

             

# router for SystemMailMail

# Danh cho hiển thị trên bảng SystemMailMail(chỉ xem)
router.register(r'sentmailmanagement/systemmailmail/data-table/standard', SystemMailMailStandardTableRestApiView, basename='SystemMailMailStandardTableRestApiView')
router.register(r'sentmailmanagement/systemmailmail/data-table/medium', SystemMailMailMediumTableRestApiView, basename='SystemMailMailMediumTableRestApiView')
router.register(r'sentmailmanagement/systemmailmail/data-table/large', SystemMailMailLargeTableRestApiView, basename='SystemMailMailLargeTableRestApiView')

# Lấy danh sách cho selection của SystemMailMail 
router.register(r'sentmailmanagement/systemmailmail/list/standard', SystemMailMailStandardListRestApiView, basename='SystemMailMailStandardListRestApiView')
router.register(r'sentmailmanagement/systemmailmail/list/medium', SystemMailMailMediumListRestApiView, basename='SystemMailMailMediumListRestApiView')
router.register(r'sentmailmanagement/systemmailmail/list/large', SystemMailMailLargeListRestApiView, basename='SystemMailMailLargeListRestApiView')

# Lấy chi tiết/danh sách cho SystemMailMail(xem,sửa)
router.register(r'sentmailmanagement/systemmailmail/detail/standard', SystemMailMailDetailRestApiView, basename='SystemMailMailDetailRestApiView')
router.register(r'sentmailmanagement/systemmailmail/detail/medium', SystemMailMailMediumDetailRestApiView, basename='SystemMailMailMediumDetailRestApiView')
router.register(r'sentmailmanagement/systemmailmail/detail/large', SystemMailMailLargeDetailRestApiView, basename='SystemMailMailLargeDetailRestApiView')

# Lấy thêm/cập nhật/xóa/xóa file đính kèm cho SystemMailMail
router.register(r'sentmailmanagement/systemmailmail/create', SystemMailMailCreateRestApiView, basename='SystemMailMailCreateRestApiView')
router.register(r'sentmailmanagement/systemmailmail/compose-email/create', SystemMailMailCreateRestApiView_ComposeMail, basename='SystemMailMailCreateRestApiView_ComposeMail')
router.register(r'sentmailmanagement/systemmailmail/update', SystemMailMailUpdateRestApiView, basename='SystemMailMailUpdateRestApiView')
router.register(r'sentmailmanagement/systemmailmail/delete', SystemMailMailDeleteRestApiView, basename='SystemMailMailDeleteRestApiView')
router.register(r'sentmailmanagement/systemmailmail/remove-file', SystemMailMailRemoveFileRestApiView, basename='SystemMailMailRemoveFileRestApiView')

# # tìm kiếm nhanh danh sách cho SystemMailMail
# router.register(r'sentmailmanagement/systemmailmail/search/standard', SystemMailMailSearchRestApiView, basename='SystemMailMailSearchRestApiView')
# router.register(r'sentmailmanagement/systemmailmail/search/medium', SystemMailMailMediumSearchRestApiView, basename='SystemMailMailMediumSearchRestApiView')
# router.register(r'sentmailmanagement/systemmailmail/search/large', SystemMailMailLargeSearchRestApiView, basename='SystemMailMailLargeSearchRestApiView')

# # tìm kiếm bộ lọc danh sách cho SystemMailMail
# router.register(r'sentmailmanagement/systemmailmail/filter/standard', SystemMailMailFilterRestApiView, basename='SystemMailMailFilterRestApiView')
# router.register(r'sentmailmanagement/systemmailmail/filter/medium', SystemMailMailMediumFilterRestApiView, basename='SystemMailMailMediumFilterRestApiView')
# router.register(r'sentmailmanagement/systemmailmail/filter/large', SystemMailMailLargeFilterRestApiView, basename='SystemMailMailLargeFilterRestApiView')

             

# router for SystemMailSentMail

# Danh cho hiển thị trên bảng SystemMailSentMail(chỉ xem)
router.register(r'sentmailmanagement/systemmailsentmail/data-table/standard', SystemMailSentMailStandardTableRestApiView, basename='SystemMailSentMailStandardTableRestApiView')
router.register(r'sentmailmanagement/systemmailsentmail/data-table/medium', SystemMailSentMailMediumTableRestApiView, basename='SystemMailSentMailMediumTableRestApiView')
router.register(r'sentmailmanagement/systemmailsentmail/data-table/large', SystemMailSentMailLargeTableRestApiView, basename='SystemMailSentMailLargeTableRestApiView')

# Lấy danh sách cho selection của SystemMailSentMail 
router.register(r'sentmailmanagement/systemmailsentmail/list/standard', SystemMailSentMailStandardListRestApiView, basename='SystemMailSentMailStandardListRestApiView')
router.register(r'sentmailmanagement/systemmailsentmail/list/medium', SystemMailSentMailMediumListRestApiView, basename='SystemMailSentMailMediumListRestApiView')
router.register(r'sentmailmanagement/systemmailsentmail/list/large', SystemMailSentMailLargeListRestApiView, basename='SystemMailSentMailLargeListRestApiView')

# Lấy chi tiết/danh sách cho SystemMailSentMail(xem,sửa)
router.register(r'sentmailmanagement/systemmailsentmail/detail/standard', SystemMailSentMailDetailRestApiView, basename='SystemMailSentMailDetailRestApiView')
router.register(r'sentmailmanagement/systemmailsentmail/detail/medium', SystemMailSentMailMediumDetailRestApiView, basename='SystemMailSentMailMediumDetailRestApiView')
router.register(r'sentmailmanagement/systemmailsentmail/detail/large', SystemMailSentMailLargeDetailRestApiView, basename='SystemMailSentMailLargeDetailRestApiView')

# Lấy thêm/cập nhật/xóa/xóa file đính kèm cho SystemMailSentMail
router.register(r'sentmailmanagement/systemmailsentmail/create', SystemMailSentMailCreateRestApiView, basename='SystemMailSentMailCreateRestApiView')
router.register(r'sentmailmanagement/systemmailsentmail/update', SystemMailSentMailUpdateRestApiView, basename='SystemMailSentMailUpdateRestApiView')
router.register(r'sentmailmanagement/systemmailsentmail/delete', SystemMailSentMailDeleteRestApiView, basename='SystemMailSentMailDeleteRestApiView')
router.register(r'sentmailmanagement/systemmailsentmail/remove-file', SystemMailSentMailRemoveFileRestApiView, basename='SystemMailSentMailRemoveFileRestApiView')

# # tìm kiếm nhanh danh sách cho SystemMailSentMail
# router.register(r'sentmailmanagement/systemmailsentmail/search/standard', SystemMailSentMailSearchRestApiView, basename='SystemMailSentMailSearchRestApiView')
# router.register(r'sentmailmanagement/systemmailsentmail/search/medium', SystemMailSentMailMediumSearchRestApiView, basename='SystemMailSentMailMediumSearchRestApiView')
# router.register(r'sentmailmanagement/systemmailsentmail/search/large', SystemMailSentMailLargeSearchRestApiView, basename='SystemMailSentMailLargeSearchRestApiView')

# # tìm kiếm bộ lọc danh sách cho SystemMailSentMail
# router.register(r'sentmailmanagement/systemmailsentmail/filter/standard', SystemMailSentMailFilterRestApiView, basename='SystemMailSentMailFilterRestApiView')
# router.register(r'sentmailmanagement/systemmailsentmail/filter/medium', SystemMailSentMailMediumFilterRestApiView, basename='SystemMailSentMailMediumFilterRestApiView')
# router.register(r'sentmailmanagement/systemmailsentmail/filter/large', SystemMailSentMailLargeFilterRestApiView, basename='SystemMailSentMailLargeFilterRestApiView')

             

# router for SystemMailServerConfig

# Danh cho hiển thị trên bảng SystemMailServerConfig(chỉ xem)
router.register(r'sentmailmanagement/systemmailserverconfig/data-table/standard', SystemMailServerConfigStandardTableRestApiView, basename='SystemMailServerConfigStandardTableRestApiView')
router.register(r'sentmailmanagement/systemmailserverconfig/data-table/medium', SystemMailServerConfigMediumTableRestApiView, basename='SystemMailServerConfigMediumTableRestApiView')
router.register(r'sentmailmanagement/systemmailserverconfig/data-table/large', SystemMailServerConfigLargeTableRestApiView, basename='SystemMailServerConfigLargeTableRestApiView')

# Lấy danh sách cho selection của SystemMailServerConfig 
router.register(r'sentmailmanagement/systemmailserverconfig/list/standard', SystemMailServerConfigStandardListRestApiView, basename='SystemMailServerConfigStandardListRestApiView')
router.register(r'sentmailmanagement/systemmailserverconfig/list/medium', SystemMailServerConfigMediumListRestApiView, basename='SystemMailServerConfigMediumListRestApiView')
router.register(r'sentmailmanagement/systemmailserverconfig/list/large', SystemMailServerConfigLargeListRestApiView, basename='SystemMailServerConfigLargeListRestApiView')

# Lấy chi tiết/danh sách cho SystemMailServerConfig(xem,sửa)
router.register(r'sentmailmanagement/systemmailserverconfig/detail/standard', SystemMailServerConfigDetailRestApiView, basename='SystemMailServerConfigDetailRestApiView')
router.register(r'sentmailmanagement/systemmailserverconfig/detail/medium', SystemMailServerConfigMediumDetailRestApiView, basename='SystemMailServerConfigMediumDetailRestApiView')
router.register(r'sentmailmanagement/systemmailserverconfig/detail/large', SystemMailServerConfigLargeDetailRestApiView, basename='SystemMailServerConfigLargeDetailRestApiView')

# Lấy thêm/cập nhật/xóa/xóa file đính kèm cho SystemMailServerConfig
router.register(r'sentmailmanagement/systemmailserverconfig/create', SystemMailServerConfigCreateRestApiView, basename='SystemMailServerConfigCreateRestApiView')
router.register(r'sentmailmanagement/systemmailserverconfig/update', SystemMailServerConfigUpdateRestApiView, basename='SystemMailServerConfigUpdateRestApiView')
router.register(r'sentmailmanagement/systemmailserverconfig/delete', SystemMailServerConfigDeleteRestApiView, basename='SystemMailServerConfigDeleteRestApiView')
router.register(r'sentmailmanagement/systemmailserverconfig/remove-file', SystemMailServerConfigRemoveFileRestApiView, basename='SystemMailServerConfigRemoveFileRestApiView')

# # tìm kiếm nhanh danh sách cho SystemMailServerConfig
# router.register(r'sentmailmanagement/systemmailserverconfig/search/standard', SystemMailServerConfigSearchRestApiView, basename='SystemMailServerConfigSearchRestApiView')
# router.register(r'sentmailmanagement/systemmailserverconfig/search/medium', SystemMailServerConfigMediumSearchRestApiView, basename='SystemMailServerConfigMediumSearchRestApiView')
# router.register(r'sentmailmanagement/systemmailserverconfig/search/large', SystemMailServerConfigLargeSearchRestApiView, basename='SystemMailServerConfigLargeSearchRestApiView')

# # tìm kiếm bộ lọc danh sách cho SystemMailServerConfig
# router.register(r'sentmailmanagement/systemmailserverconfig/filter/standard', SystemMailServerConfigFilterRestApiView, basename='SystemMailServerConfigFilterRestApiView')
# router.register(r'sentmailmanagement/systemmailserverconfig/filter/medium', SystemMailServerConfigMediumFilterRestApiView, basename='SystemMailServerConfigMediumFilterRestApiView')
# router.register(r'sentmailmanagement/systemmailserverconfig/filter/large', SystemMailServerConfigLargeFilterRestApiView, basename='SystemMailServerConfigLargeFilterRestApiView')

             

# router for SystemMailTemplate

# Danh cho hiển thị trên bảng SystemMailTemplate(chỉ xem)
router.register(r'sentmailmanagement/systemmailtemplate/data-table/standard', SystemMailTemplateStandardTableRestApiView, basename='SystemMailTemplateStandardTableRestApiView')
router.register(r'sentmailmanagement/systemmailtemplate/data-table/medium', SystemMailTemplateMediumTableRestApiView, basename='SystemMailTemplateMediumTableRestApiView')
router.register(r'sentmailmanagement/systemmailtemplate/data-table/large', SystemMailTemplateLargeTableRestApiView, basename='SystemMailTemplateLargeTableRestApiView')

# Lấy danh sách cho selection của SystemMailTemplate 
router.register(r'sentmailmanagement/systemmailtemplate/list/standard', SystemMailTemplateStandardListRestApiView, basename='SystemMailTemplateStandardListRestApiView')
router.register(r'sentmailmanagement/systemmailtemplate/list/medium', SystemMailTemplateMediumListRestApiView, basename='SystemMailTemplateMediumListRestApiView')
router.register(r'sentmailmanagement/systemmailtemplate/list/large', SystemMailTemplateLargeListRestApiView, basename='SystemMailTemplateLargeListRestApiView')

# Lấy chi tiết/danh sách cho SystemMailTemplate(xem,sửa)
router.register(r'sentmailmanagement/systemmailtemplate/detail/standard', SystemMailTemplateDetailRestApiView, basename='SystemMailTemplateDetailRestApiView')
router.register(r'sentmailmanagement/systemmailtemplate/detail/medium', SystemMailTemplateMediumDetailRestApiView, basename='SystemMailTemplateMediumDetailRestApiView')
router.register(r'sentmailmanagement/systemmailtemplate/detail/large', SystemMailTemplateLargeDetailRestApiView, basename='SystemMailTemplateLargeDetailRestApiView')

# Lấy thêm/cập nhật/xóa/xóa file đính kèm cho SystemMailTemplate
router.register(r'sentmailmanagement/systemmailtemplate/create', SystemMailTemplateCreateRestApiView, basename='SystemMailTemplateCreateRestApiView')
router.register(r'sentmailmanagement/systemmailtemplate/update', SystemMailTemplateUpdateRestApiView, basename='SystemMailTemplateUpdateRestApiView')
router.register(r'sentmailmanagement/systemmailtemplate/delete', SystemMailTemplateDeleteRestApiView, basename='SystemMailTemplateDeleteRestApiView')
router.register(r'sentmailmanagement/systemmailtemplate/remove-file', SystemMailTemplateRemoveFileRestApiView, basename='SystemMailTemplateRemoveFileRestApiView')

# # tìm kiếm nhanh danh sách cho SystemMailTemplate
# router.register(r'sentmailmanagement/systemmailtemplate/search/standard', SystemMailTemplateSearchRestApiView, basename='SystemMailTemplateSearchRestApiView')
# router.register(r'sentmailmanagement/systemmailtemplate/search/medium', SystemMailTemplateMediumSearchRestApiView, basename='SystemMailTemplateMediumSearchRestApiView')
# router.register(r'sentmailmanagement/systemmailtemplate/search/large', SystemMailTemplateLargeSearchRestApiView, basename='SystemMailTemplateLargeSearchRestApiView')

# # tìm kiếm bộ lọc danh sách cho SystemMailTemplate
# router.register(r'sentmailmanagement/systemmailtemplate/filter/standard', SystemMailTemplateFilterRestApiView, basename='SystemMailTemplateFilterRestApiView')
# router.register(r'sentmailmanagement/systemmailtemplate/filter/medium', SystemMailTemplateMediumFilterRestApiView, basename='SystemMailTemplateMediumFilterRestApiView')
# router.register(r'sentmailmanagement/systemmailtemplate/filter/large', SystemMailTemplateLargeFilterRestApiView, basename='SystemMailTemplateLargeFilterRestApiView')

             

# router for SystemMailType

# Danh cho hiển thị trên bảng SystemMailType(chỉ xem)
router.register(r'sentmailmanagement/systemmailtype/data-table/standard', SystemMailTypeStandardTableRestApiView, basename='SystemMailTypeStandardTableRestApiView')
router.register(r'sentmailmanagement/systemmailtype/data-table/medium', SystemMailTypeMediumTableRestApiView, basename='SystemMailTypeMediumTableRestApiView')
router.register(r'sentmailmanagement/systemmailtype/data-table/large', SystemMailTypeLargeTableRestApiView, basename='SystemMailTypeLargeTableRestApiView')

# Lấy danh sách cho selection của SystemMailType 
router.register(r'sentmailmanagement/systemmailtype/list/standard', SystemMailTypeStandardListRestApiView, basename='SystemMailTypeStandardListRestApiView')
router.register(r'sentmailmanagement/systemmailtype/list/medium', SystemMailTypeMediumListRestApiView, basename='SystemMailTypeMediumListRestApiView')
router.register(r'sentmailmanagement/systemmailtype/list/large', SystemMailTypeLargeListRestApiView, basename='SystemMailTypeLargeListRestApiView')

# Lấy chi tiết/danh sách cho SystemMailType(xem,sửa)
router.register(r'sentmailmanagement/systemmailtype/detail/standard', SystemMailTypeDetailRestApiView, basename='SystemMailTypeDetailRestApiView')
router.register(r'sentmailmanagement/systemmailtype/detail/medium', SystemMailTypeMediumDetailRestApiView, basename='SystemMailTypeMediumDetailRestApiView')
router.register(r'sentmailmanagement/systemmailtype/detail/large', SystemMailTypeLargeDetailRestApiView, basename='SystemMailTypeLargeDetailRestApiView')

# Lấy thêm/cập nhật/xóa/xóa file đính kèm cho SystemMailType
router.register(r'sentmailmanagement/systemmailtype/create', SystemMailTypeCreateRestApiView, basename='SystemMailTypeCreateRestApiView')
router.register(r'sentmailmanagement/systemmailtype/update', SystemMailTypeUpdateRestApiView, basename='SystemMailTypeUpdateRestApiView')
router.register(r'sentmailmanagement/systemmailtype/delete', SystemMailTypeDeleteRestApiView, basename='SystemMailTypeDeleteRestApiView')
router.register(r'sentmailmanagement/systemmailtype/remove-file', SystemMailTypeRemoveFileRestApiView, basename='SystemMailTypeRemoveFileRestApiView')

# # tìm kiếm nhanh danh sách cho SystemMailType
# router.register(r'sentmailmanagement/systemmailtype/search/standard', SystemMailTypeSearchRestApiView, basename='SystemMailTypeSearchRestApiView')
# router.register(r'sentmailmanagement/systemmailtype/search/medium', SystemMailTypeMediumSearchRestApiView, basename='SystemMailTypeMediumSearchRestApiView')
# router.register(r'sentmailmanagement/systemmailtype/search/large', SystemMailTypeLargeSearchRestApiView, basename='SystemMailTypeLargeSearchRestApiView')

# # tìm kiếm bộ lọc danh sách cho SystemMailType
# router.register(r'sentmailmanagement/systemmailtype/filter/standard', SystemMailTypeFilterRestApiView, basename='SystemMailTypeFilterRestApiView')
# router.register(r'sentmailmanagement/systemmailtype/filter/medium', SystemMailTypeMediumFilterRestApiView, basename='SystemMailTypeMediumFilterRestApiView')
# router.register(r'sentmailmanagement/systemmailtype/filter/large', SystemMailTypeLargeFilterRestApiView, basename='SystemMailTypeLargeFilterRestApiView')

             

# router for SystemMailTemplateImportData

# Danh cho hiển thị trên bảng SystemMailTemplateImportData(chỉ xem)
router.register(r'sentmailmanagement/systemmailtemplateimportdata/data-table/standard', SystemMailTemplateImportDataStandardTableRestApiView, basename='SystemMailTemplateImportDataStandardTableRestApiView')
router.register(r'sentmailmanagement/systemmailtemplateimportdata/data-table/medium', SystemMailTemplateImportDataMediumTableRestApiView, basename='SystemMailTemplateImportDataMediumTableRestApiView')
router.register(r'sentmailmanagement/systemmailtemplateimportdata/data-table/large', SystemMailTemplateImportDataLargeTableRestApiView, basename='SystemMailTemplateImportDataLargeTableRestApiView')

# Lấy danh sách cho selection của SystemMailTemplateImportData 
router.register(r'sentmailmanagement/systemmailtemplateimportdata/list/standard', SystemMailTemplateImportDataStandardListRestApiView, basename='SystemMailTemplateImportDataStandardListRestApiView')
router.register(r'sentmailmanagement/systemmailtemplateimportdata/list/medium', SystemMailTemplateImportDataMediumListRestApiView, basename='SystemMailTemplateImportDataMediumListRestApiView')
router.register(r'sentmailmanagement/systemmailtemplateimportdata/list/large', SystemMailTemplateImportDataLargeListRestApiView, basename='SystemMailTemplateImportDataLargeListRestApiView')

# Lấy chi tiết/danh sách cho SystemMailTemplateImportData(xem,sửa)
router.register(r'sentmailmanagement/systemmailtemplateimportdata/detail/standard', SystemMailTemplateImportDataDetailRestApiView, basename='SystemMailTemplateImportDataDetailRestApiView')
router.register(r'sentmailmanagement/systemmailtemplateimportdata/detail/medium', SystemMailTemplateImportDataMediumDetailRestApiView, basename='SystemMailTemplateImportDataMediumDetailRestApiView')
router.register(r'sentmailmanagement/systemmailtemplateimportdata/detail/large', SystemMailTemplateImportDataLargeDetailRestApiView, basename='SystemMailTemplateImportDataLargeDetailRestApiView')

# Lấy thêm/cập nhật/xóa/xóa file đính kèm cho SystemMailTemplateImportData
router.register(r'sentmailmanagement/systemmailtemplateimportdata/create', SystemMailTemplateImportDataCreateRestApiView, basename='SystemMailTemplateImportDataCreateRestApiView')
router.register(r'sentmailmanagement/systemmailtemplateimportdata/update', SystemMailTemplateImportDataUpdateRestApiView, basename='SystemMailTemplateImportDataUpdateRestApiView')
router.register(r'sentmailmanagement/systemmailtemplateimportdata/delete', SystemMailTemplateImportDataDeleteRestApiView, basename='SystemMailTemplateImportDataDeleteRestApiView')
router.register(r'sentmailmanagement/systemmailtemplateimportdata/remove-file', SystemMailTemplateImportDataRemoveFileRestApiView, basename='SystemMailTemplateImportDataRemoveFileRestApiView')

# # tìm kiếm nhanh danh sách cho SystemMailTemplateImportData
# router.register(r'sentmailmanagement/systemmailtemplateimportdata/search/standard', SystemMailTemplateImportDataSearchRestApiView, basename='SystemMailTemplateImportDataSearchRestApiView')
# router.register(r'sentmailmanagement/systemmailtemplateimportdata/search/medium', SystemMailTemplateImportDataMediumSearchRestApiView, basename='SystemMailTemplateImportDataMediumSearchRestApiView')
# router.register(r'sentmailmanagement/systemmailtemplateimportdata/search/large', SystemMailTemplateImportDataLargeSearchRestApiView, basename='SystemMailTemplateImportDataLargeSearchRestApiView')

# # tìm kiếm bộ lọc danh sách cho SystemMailTemplateImportData
# router.register(r'sentmailmanagement/systemmailtemplateimportdata/filter/standard', SystemMailTemplateImportDataFilterRestApiView, basename='SystemMailTemplateImportDataFilterRestApiView')
# router.register(r'sentmailmanagement/systemmailtemplateimportdata/filter/medium', SystemMailTemplateImportDataMediumFilterRestApiView, basename='SystemMailTemplateImportDataMediumFilterRestApiView')
# router.register(r'sentmailmanagement/systemmailtemplateimportdata/filter/large', SystemMailTemplateImportDataLargeFilterRestApiView, basename='SystemMailTemplateImportDataLargeFilterRestApiView')

             

# router for SystemMailTemplateImportStatus

# Danh cho hiển thị trên bảng SystemMailTemplateImportStatus(chỉ xem)
router.register(r'sentmailmanagement/systemmailtemplateimportstatus/data-table/standard', SystemMailTemplateImportStatusStandardTableRestApiView, basename='SystemMailTemplateImportStatusStandardTableRestApiView')
router.register(r'sentmailmanagement/systemmailtemplateimportstatus/data-table/medium', SystemMailTemplateImportStatusMediumTableRestApiView, basename='SystemMailTemplateImportStatusMediumTableRestApiView')
router.register(r'sentmailmanagement/systemmailtemplateimportstatus/data-table/large', SystemMailTemplateImportStatusLargeTableRestApiView, basename='SystemMailTemplateImportStatusLargeTableRestApiView')

# Lấy danh sách cho selection của SystemMailTemplateImportStatus 
router.register(r'sentmailmanagement/systemmailtemplateimportstatus/list/standard', SystemMailTemplateImportStatusStandardListRestApiView, basename='SystemMailTemplateImportStatusStandardListRestApiView')
router.register(r'sentmailmanagement/systemmailtemplateimportstatus/list/medium', SystemMailTemplateImportStatusMediumListRestApiView, basename='SystemMailTemplateImportStatusMediumListRestApiView')
router.register(r'sentmailmanagement/systemmailtemplateimportstatus/list/large', SystemMailTemplateImportStatusLargeListRestApiView, basename='SystemMailTemplateImportStatusLargeListRestApiView')

# Lấy chi tiết/danh sách cho SystemMailTemplateImportStatus(xem,sửa)
router.register(r'sentmailmanagement/systemmailtemplateimportstatus/detail/standard', SystemMailTemplateImportStatusDetailRestApiView, basename='SystemMailTemplateImportStatusDetailRestApiView')
router.register(r'sentmailmanagement/systemmailtemplateimportstatus/detail/medium', SystemMailTemplateImportStatusMediumDetailRestApiView, basename='SystemMailTemplateImportStatusMediumDetailRestApiView')
router.register(r'sentmailmanagement/systemmailtemplateimportstatus/detail/large', SystemMailTemplateImportStatusLargeDetailRestApiView, basename='SystemMailTemplateImportStatusLargeDetailRestApiView')

# Lấy thêm/cập nhật/xóa/xóa file đính kèm cho SystemMailTemplateImportStatus
router.register(r'sentmailmanagement/systemmailtemplateimportstatus/create', SystemMailTemplateImportStatusCreateRestApiView, basename='SystemMailTemplateImportStatusCreateRestApiView')
router.register(r'sentmailmanagement/systemmailtemplateimportstatus/update', SystemMailTemplateImportStatusUpdateRestApiView, basename='SystemMailTemplateImportStatusUpdateRestApiView')
router.register(r'sentmailmanagement/systemmailtemplateimportstatus/delete', SystemMailTemplateImportStatusDeleteRestApiView, basename='SystemMailTemplateImportStatusDeleteRestApiView')
router.register(r'sentmailmanagement/systemmailtemplateimportstatus/remove-file', SystemMailTemplateImportStatusRemoveFileRestApiView, basename='SystemMailTemplateImportStatusRemoveFileRestApiView')

# # tìm kiếm nhanh danh sách cho SystemMailTemplateImportStatus
# router.register(r'sentmailmanagement/systemmailtemplateimportstatus/search/standard', SystemMailTemplateImportStatusSearchRestApiView, basename='SystemMailTemplateImportStatusSearchRestApiView')
# router.register(r'sentmailmanagement/systemmailtemplateimportstatus/search/medium', SystemMailTemplateImportStatusMediumSearchRestApiView, basename='SystemMailTemplateImportStatusMediumSearchRestApiView')
# router.register(r'sentmailmanagement/systemmailtemplateimportstatus/search/large', SystemMailTemplateImportStatusLargeSearchRestApiView, basename='SystemMailTemplateImportStatusLargeSearchRestApiView')

# # tìm kiếm bộ lọc danh sách cho SystemMailTemplateImportStatus
# router.register(r'sentmailmanagement/systemmailtemplateimportstatus/filter/standard', SystemMailTemplateImportStatusFilterRestApiView, basename='SystemMailTemplateImportStatusFilterRestApiView')
# router.register(r'sentmailmanagement/systemmailtemplateimportstatus/filter/medium', SystemMailTemplateImportStatusMediumFilterRestApiView, basename='SystemMailTemplateImportStatusMediumFilterRestApiView')
# router.register(r'sentmailmanagement/systemmailtemplateimportstatus/filter/large', SystemMailTemplateImportStatusLargeFilterRestApiView, basename='SystemMailTemplateImportStatusLargeFilterRestApiView')

             


