

/**
 *  SentMailManagementConst.js created by @truongnv(truongg.nv@gmail.com) 
 *  $app_descriptions
 *  Định nghĩa các thông Url Quản lý email
 *  Tạo bởi @truongnv on 24/8/2023
 *  App : SentMailManagement (Quản lý email)
 */
var SERVER="";
if($("#org_app_prefixId").length > 0){
    SERVER = $("#org_app_prefixId").val();
}


//////////////////////////////###################################---TABLE DATABASE---##################################////////////////////////////////////////////

                       
// Lấy danh sách hiển thị trên bảng 100 bản ghi / trang
const SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_GET_DATATABLE_STANDARD_URL = SERVER + "/api/v1/sentmailmanagement/systemmailsenderconfig/data-table/standard/";

// Lấy danh sách hiển thị trên bảng 1000 bản ghi / trang
const SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_GET_DATATABLE_MEDIUM_URL = SERVER + "/api/v1/sentmailmanagement/systemmailsenderconfig/data-table/medium/";

// Lấy danh sách hiển thị trên bảng 10000 bản ghi / trang
const SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_GET_DATATABLE_LARGE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailsenderconfig/data-table/large/";

//////////////////////////////################################---TABLE MEMCACHE---#####################################////////////////////////////////////////////
// Lấy danh sách hiển thị trên bảng 100 bản ghi / trang
const SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_GET_DATATABLE_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailsenderconfig/data-table/standard/";

// Lấy danh sách hiển thị trên bảng 1000 bản ghi / trang
const SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_GET_DATATABLE_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailsenderconfig/data-table/medium/";

// Lấy danh sách hiển thị trên bảng 10000 bản ghi / trang
const SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_GET_DATATABLE_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailsenderconfig/data-table/large/";

//////////////////////////////##################################---LIST DATABASE---################################////////////////////////////////////////////

// Lấy danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_LIST_STANDARD_URL = SERVER + "/api/v1/sentmailmanagement/systemmailsenderconfig/list/standard/";

// Lấy danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_LIST_MEDIUM_URL = SERVER + "/api/v1/sentmailmanagement/systemmailsenderconfig/list/medium/";

// Lấy danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_LIST_LARGE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailsenderconfig/list/large/";

// Lấy danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_LIST_FILTER_STANDARD_URL = SERVER + "/api/v1/sentmailmanagement/systemmailsenderconfig/list/filter/standard/";

// Lấy danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_LIST_FILTER_MEDIUM_URL = SERVER + "/api/v1/sentmailmanagement/systemmailsenderconfig/list/filter/medium/";

// Lấy danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_LIST_FILTER_LARGE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailsenderconfig/list/filter/large/";

//////////////////////////////##################################---LIST MEMCACHE---#################################////////////////////////////////////////////

// Lấy danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_LIST_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailsenderconfig/list/standard/";

// Lấy danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_LIST_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailsenderconfig/list/medium/";

// Lấy danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_LIST_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailsenderconfig/list/large/";

// tìm kiếm trong danh sách

// Lấy danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_LIST_FILTER_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailsenderconfig/list/filter/standard/";

// Lấy danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_LIST_FILTER_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailsenderconfig/list/filter/medium/";

// Lấy danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_LIST_FILTER_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailsenderconfig/list/filter/large/";


//////////////////////////////##################################---DETAIL---#################################////////////////////////////////////////////

// Lấy chi tiết (uuid) /danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_GET_DETAIL_STANDARD_URL = SERVER + "/api/v1/sentmailmanagement/systemmailsenderconfig/detail/standard/";

// Lấy chi tiết (uuid) /danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_GET_DETAIL_MEDIUM_URL = SERVER + "/api/v1/sentmailmanagement/systemmailsenderconfig/detail/medium/";

// Lấy chi tiết (uuid) /danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_GET_DETAIL_LARGE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailsenderconfig/detail/large/";

// Thêm mới bản ghi
const SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_CREATE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailsenderconfig/create/";

// cập nhật/ chỉnh sửa bản ghi
const SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_UPDATE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailsenderconfig/update/";

// Xóa bản ghi
const SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_DELETE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailsenderconfig/delete/";

// Import dữ liệu
const SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_IMPORT_URL = SERVER + "/SentMailManagement/SystemMailSenderConfig/import-file/";

// Xóa file đính kèm
const SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_REMOVEFILE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailsenderconfig/remove-file/";

//////////////////////////////##################################---SEARCH DATABASE---################################////////////////////////////////////////////

// Tìm kiếm nhanh trả về 100 bản ghi / trang
const SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_SEARCH_STANDARD_URL = SERVER + "/SentMailManagement/SystemMailSenderConfig/search/standard/";

// Tìm kiếm nhanh trả về 1000 bản ghi / trang
const SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_SEARCH_MEDIUM_URL = SERVER + "/SentMailManagement/SystemMailSenderConfig/search/medium/";

// Tìm kiếm nhanh trả về 10000 bản ghi / trang
const SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_SEARCH_LARGE_URL = SERVER + "/SentMailManagement/SystemMailSenderConfig/search/large/";

//////////////////////////////##################################---SEARCH MEMCACHE---################################////////////////////////////////////////////

// Tìm kiếm nhanh trả về 100 bản ghi / trang
const SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_SEARCH_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailsenderconfig/search/standard/";

// Tìm kiếm nhanh trả về 1000 bản ghi / trang
const SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_SEARCH_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailsenderconfig/search/medium/";

// Tìm kiếm nhanh trả về 10000 bản ghi / trang
const SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_SEARCH_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailsenderconfig/search/large/";

//////////////////////////////##################################---FILTER DATABASE---################################////////////////////////////////////////////

// Tìm kiếm bộ lọc trả về 100 bản ghi / trang
const SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_FILTER_STANDARD_URL = SERVER + "/SentMailManagement/SystemMailSenderConfig/filter/standard/";

// Tìm kiếm bộ lọc trả về 1000 bản ghi / trang
const SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_FILTER_MEDIUM_URL = SERVER + "/SentMailManagement/SystemMailSenderConfig/filter/medium/";

// Tìm kiếm bộ lọc trả về 10000 bản ghi / trang
const SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_FILTER_LARGE_URL = SERVER + "/SentMailManagement/SystemMailSenderConfig/filter/large/";

//////////////////////////////##################################---FILTER MEMCACHE---################################////////////////////////////////////////////

// Tìm kiếm bộ lọc trả về 100 bản ghi / trang
const SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_FILTER_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailsenderconfig/filter/standard/";

// Tìm kiếm bộ lọc trả về 1000 bản ghi / trang
const SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_FILTER_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailsenderconfig/filter/medium/";

// Tìm kiếm bộ lọc trả về 10000 bản ghi / trang
const SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_FILTER_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailsenderconfig/filter/large/";

// Check trùng mã code
//  1.thêm mới
const SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_CREATE_CHECK_EXIST_CODE_URL =  SERVER + "/SentMailManagement/SystemMailSenderConfig/check-code/create/exist/";
//  2.cập nhật
const SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_UPDATE_CHECK_EXIST_CODE_URL =  SERVER + "/SentMailManagement/SystemMailSenderConfig/check-code/update/<uuid>/exist/";


//////////////////////////////###################################---TABLE DATABASE---##################################////////////////////////////////////////////

                       
// Lấy danh sách hiển thị trên bảng 100 bản ghi / trang
const SYSTEMMAILTARGETSENTMAILMANAGEMENT_GET_DATATABLE_STANDARD_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtarget/data-table/standard/";

// Lấy danh sách hiển thị trên bảng 1000 bản ghi / trang
const SYSTEMMAILTARGETSENTMAILMANAGEMENT_GET_DATATABLE_MEDIUM_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtarget/data-table/medium/";

// Lấy danh sách hiển thị trên bảng 10000 bản ghi / trang
const SYSTEMMAILTARGETSENTMAILMANAGEMENT_GET_DATATABLE_LARGE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtarget/data-table/large/";

//////////////////////////////################################---TABLE MEMCACHE---#####################################////////////////////////////////////////////
// Lấy danh sách hiển thị trên bảng 100 bản ghi / trang
const SYSTEMMAILTARGETSENTMAILMANAGEMENT_GET_DATATABLE_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtarget/data-table/standard/";

// Lấy danh sách hiển thị trên bảng 1000 bản ghi / trang
const SYSTEMMAILTARGETSENTMAILMANAGEMENT_GET_DATATABLE_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtarget/data-table/medium/";

// Lấy danh sách hiển thị trên bảng 10000 bản ghi / trang
const SYSTEMMAILTARGETSENTMAILMANAGEMENT_GET_DATATABLE_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtarget/data-table/large/";

//////////////////////////////##################################---LIST DATABASE---################################////////////////////////////////////////////

// Lấy danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILTARGETSENTMAILMANAGEMENT_LIST_STANDARD_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtarget/list/standard/";

// Lấy danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILTARGETSENTMAILMANAGEMENT_LIST_MEDIUM_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtarget/list/medium/";

// Lấy danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILTARGETSENTMAILMANAGEMENT_LIST_LARGE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtarget/list/large/";

// Lấy danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILTARGETSENTMAILMANAGEMENT_LIST_FILTER_STANDARD_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtarget/list/filter/standard/";

// Lấy danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILTARGETSENTMAILMANAGEMENT_LIST_FILTER_MEDIUM_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtarget/list/filter/medium/";

// Lấy danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILTARGETSENTMAILMANAGEMENT_LIST_FILTER_LARGE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtarget/list/filter/large/";

//////////////////////////////##################################---LIST MEMCACHE---#################################////////////////////////////////////////////

// Lấy danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILTARGETSENTMAILMANAGEMENT_LIST_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtarget/list/standard/";

// Lấy danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILTARGETSENTMAILMANAGEMENT_LIST_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtarget/list/medium/";

// Lấy danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILTARGETSENTMAILMANAGEMENT_LIST_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtarget/list/large/";

// tìm kiếm trong danh sách

// Lấy danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILTARGETSENTMAILMANAGEMENT_LIST_FILTER_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtarget/list/filter/standard/";

// Lấy danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILTARGETSENTMAILMANAGEMENT_LIST_FILTER_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtarget/list/filter/medium/";

// Lấy danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILTARGETSENTMAILMANAGEMENT_LIST_FILTER_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtarget/list/filter/large/";


//////////////////////////////##################################---DETAIL---#################################////////////////////////////////////////////

// Lấy chi tiết (uuid) /danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILTARGETSENTMAILMANAGEMENT_GET_DETAIL_STANDARD_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtarget/detail/standard/";

// Lấy chi tiết (uuid) /danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILTARGETSENTMAILMANAGEMENT_GET_DETAIL_MEDIUM_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtarget/detail/medium/";

// Lấy chi tiết (uuid) /danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILTARGETSENTMAILMANAGEMENT_GET_DETAIL_LARGE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtarget/detail/large/";

// Thêm mới bản ghi
const SYSTEMMAILTARGETSENTMAILMANAGEMENT_CREATE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtarget/create/";

// cập nhật/ chỉnh sửa bản ghi
const SYSTEMMAILTARGETSENTMAILMANAGEMENT_UPDATE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtarget/update/";

// Xóa bản ghi
const SYSTEMMAILTARGETSENTMAILMANAGEMENT_DELETE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtarget/delete/";

// Import dữ liệu
const SYSTEMMAILTARGETSENTMAILMANAGEMENT_IMPORT_URL = SERVER + "/SentMailManagement/SystemMailTarget/import-file/";

// Xóa file đính kèm
const SYSTEMMAILTARGETSENTMAILMANAGEMENT_REMOVEFILE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtarget/remove-file/";

//////////////////////////////##################################---SEARCH DATABASE---################################////////////////////////////////////////////

// Tìm kiếm nhanh trả về 100 bản ghi / trang
const SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_STANDARD_URL = SERVER + "/SentMailManagement/SystemMailTarget/search/standard/";

// Tìm kiếm nhanh trả về 1000 bản ghi / trang
const SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_MEDIUM_URL = SERVER + "/SentMailManagement/SystemMailTarget/search/medium/";

// Tìm kiếm nhanh trả về 10000 bản ghi / trang
const SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LARGE_URL = SERVER + "/SentMailManagement/SystemMailTarget/search/large/";

//////////////////////////////##################################---SEARCH MEMCACHE---################################////////////////////////////////////////////

// Tìm kiếm nhanh trả về 100 bản ghi / trang
const SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtarget/search/standard/";

// Tìm kiếm nhanh trả về 1000 bản ghi / trang
const SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtarget/search/medium/";

// Tìm kiếm nhanh trả về 10000 bản ghi / trang
const SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtarget/search/large/";

//////////////////////////////##################################---FILTER DATABASE---################################////////////////////////////////////////////

// Tìm kiếm bộ lọc trả về 100 bản ghi / trang
const SYSTEMMAILTARGETSENTMAILMANAGEMENT_FILTER_STANDARD_URL = SERVER + "/SentMailManagement/SystemMailTarget/filter/standard/";

// Tìm kiếm bộ lọc trả về 1000 bản ghi / trang
const SYSTEMMAILTARGETSENTMAILMANAGEMENT_FILTER_MEDIUM_URL = SERVER + "/SentMailManagement/SystemMailTarget/filter/medium/";

// Tìm kiếm bộ lọc trả về 10000 bản ghi / trang
const SYSTEMMAILTARGETSENTMAILMANAGEMENT_FILTER_LARGE_URL = SERVER + "/SentMailManagement/SystemMailTarget/filter/large/";

//////////////////////////////##################################---FILTER MEMCACHE---################################////////////////////////////////////////////

// Tìm kiếm bộ lọc trả về 100 bản ghi / trang
const SYSTEMMAILTARGETSENTMAILMANAGEMENT_FILTER_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtarget/filter/standard/";

// Tìm kiếm bộ lọc trả về 1000 bản ghi / trang
const SYSTEMMAILTARGETSENTMAILMANAGEMENT_FILTER_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtarget/filter/medium/";

// Tìm kiếm bộ lọc trả về 10000 bản ghi / trang
const SYSTEMMAILTARGETSENTMAILMANAGEMENT_FILTER_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtarget/filter/large/";

// Check trùng mã code
//  1.thêm mới
const SYSTEMMAILTARGETSENTMAILMANAGEMENT_CREATE_CHECK_EXIST_CODE_URL =  SERVER + "/SentMailManagement/SystemMailTarget/check-code/create/exist/";
//  2.cập nhật
const SYSTEMMAILTARGETSENTMAILMANAGEMENT_UPDATE_CHECK_EXIST_CODE_URL =  SERVER + "/SentMailManagement/SystemMailTarget/check-code/update/<uuid>/exist/";


//////////////////////////////###################################---TABLE DATABASE---##################################////////////////////////////////////////////

                       
// Lấy danh sách hiển thị trên bảng 100 bản ghi / trang
const SYSTEMMAILMAILSENTMAILMANAGEMENT_GET_DATATABLE_STANDARD_URL = SERVER + "/api/v1/sentmailmanagement/systemmailmail/data-table/standard/";

// Lấy danh sách hiển thị trên bảng 1000 bản ghi / trang
const SYSTEMMAILMAILSENTMAILMANAGEMENT_GET_DATATABLE_MEDIUM_URL = SERVER + "/api/v1/sentmailmanagement/systemmailmail/data-table/medium/";

// Lấy danh sách hiển thị trên bảng 10000 bản ghi / trang
const SYSTEMMAILMAILSENTMAILMANAGEMENT_GET_DATATABLE_LARGE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailmail/data-table/large/";

//////////////////////////////################################---TABLE MEMCACHE---#####################################////////////////////////////////////////////
// Lấy danh sách hiển thị trên bảng 100 bản ghi / trang
const SYSTEMMAILMAILSENTMAILMANAGEMENT_GET_DATATABLE_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailmail/data-table/standard/";

// Lấy danh sách hiển thị trên bảng 1000 bản ghi / trang
const SYSTEMMAILMAILSENTMAILMANAGEMENT_GET_DATATABLE_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailmail/data-table/medium/";

// Lấy danh sách hiển thị trên bảng 10000 bản ghi / trang
const SYSTEMMAILMAILSENTMAILMANAGEMENT_GET_DATATABLE_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailmail/data-table/large/";

//////////////////////////////##################################---LIST DATABASE---################################////////////////////////////////////////////

// Lấy danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILMAILSENTMAILMANAGEMENT_LIST_STANDARD_URL = SERVER + "/api/v1/sentmailmanagement/systemmailmail/list/standard/";

// Lấy danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILMAILSENTMAILMANAGEMENT_LIST_MEDIUM_URL = SERVER + "/api/v1/sentmailmanagement/systemmailmail/list/medium/";

// Lấy danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILMAILSENTMAILMANAGEMENT_LIST_LARGE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailmail/list/large/";

// Lấy danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILMAILSENTMAILMANAGEMENT_LIST_FILTER_STANDARD_URL = SERVER + "/api/v1/sentmailmanagement/systemmailmail/list/filter/standard/";

// Lấy danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILMAILSENTMAILMANAGEMENT_LIST_FILTER_MEDIUM_URL = SERVER + "/api/v1/sentmailmanagement/systemmailmail/list/filter/medium/";

// Lấy danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILMAILSENTMAILMANAGEMENT_LIST_FILTER_LARGE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailmail/list/filter/large/";

//////////////////////////////##################################---LIST MEMCACHE---#################################////////////////////////////////////////////

// Lấy danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILMAILSENTMAILMANAGEMENT_LIST_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailmail/list/standard/";

// Lấy danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILMAILSENTMAILMANAGEMENT_LIST_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailmail/list/medium/";

// Lấy danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILMAILSENTMAILMANAGEMENT_LIST_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailmail/list/large/";

// tìm kiếm trong danh sách

// Lấy danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILMAILSENTMAILMANAGEMENT_LIST_FILTER_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailmail/list/filter/standard/";

// Lấy danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILMAILSENTMAILMANAGEMENT_LIST_FILTER_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailmail/list/filter/medium/";

// Lấy danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILMAILSENTMAILMANAGEMENT_LIST_FILTER_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailmail/list/filter/large/";


//////////////////////////////##################################---DETAIL---#################################////////////////////////////////////////////

// Lấy chi tiết (uuid) /danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILMAILSENTMAILMANAGEMENT_GET_DETAIL_STANDARD_URL = SERVER + "/api/v1/sentmailmanagement/systemmailmail/detail/standard/";

// Lấy chi tiết (uuid) /danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILMAILSENTMAILMANAGEMENT_GET_DETAIL_MEDIUM_URL = SERVER + "/api/v1/sentmailmanagement/systemmailmail/detail/medium/";

// Lấy chi tiết (uuid) /danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILMAILSENTMAILMANAGEMENT_GET_DETAIL_LARGE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailmail/detail/large/";

// Thêm mới bản ghi
const SYSTEMMAILMAILSENTMAILMANAGEMENT_CREATE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailmail/create/";

// cập nhật/ chỉnh sửa bản ghi
const SYSTEMMAILMAILSENTMAILMANAGEMENT_UPDATE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailmail/update/";

// Xóa bản ghi
const SYSTEMMAILMAILSENTMAILMANAGEMENT_DELETE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailmail/delete/";

// Import dữ liệu
const SYSTEMMAILMAILSENTMAILMANAGEMENT_IMPORT_URL = SERVER + "/SentMailManagement/SystemMailMail/import-file/";

// Xóa file đính kèm
const SYSTEMMAILMAILSENTMAILMANAGEMENT_REMOVEFILE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailmail/remove-file/";

//////////////////////////////##################################---SEARCH DATABASE---################################////////////////////////////////////////////

// Tìm kiếm nhanh trả về 100 bản ghi / trang
const SYSTEMMAILMAILSENTMAILMANAGEMENT_SEARCH_STANDARD_URL = SERVER + "/SentMailManagement/SystemMailMail/search/standard/";

// Tìm kiếm nhanh trả về 1000 bản ghi / trang
const SYSTEMMAILMAILSENTMAILMANAGEMENT_SEARCH_MEDIUM_URL = SERVER + "/SentMailManagement/SystemMailMail/search/medium/";

// Tìm kiếm nhanh trả về 10000 bản ghi / trang
const SYSTEMMAILMAILSENTMAILMANAGEMENT_SEARCH_LARGE_URL = SERVER + "/SentMailManagement/SystemMailMail/search/large/";

//////////////////////////////##################################---SEARCH MEMCACHE---################################////////////////////////////////////////////

// Tìm kiếm nhanh trả về 100 bản ghi / trang
const SYSTEMMAILMAILSENTMAILMANAGEMENT_SEARCH_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailmail/search/standard/";

// Tìm kiếm nhanh trả về 1000 bản ghi / trang
const SYSTEMMAILMAILSENTMAILMANAGEMENT_SEARCH_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailmail/search/medium/";

// Tìm kiếm nhanh trả về 10000 bản ghi / trang
const SYSTEMMAILMAILSENTMAILMANAGEMENT_SEARCH_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailmail/search/large/";

//////////////////////////////##################################---FILTER DATABASE---################################////////////////////////////////////////////

// Tìm kiếm bộ lọc trả về 100 bản ghi / trang
const SYSTEMMAILMAILSENTMAILMANAGEMENT_FILTER_STANDARD_URL = SERVER + "/SentMailManagement/SystemMailMail/filter/standard/";

// Tìm kiếm bộ lọc trả về 1000 bản ghi / trang
const SYSTEMMAILMAILSENTMAILMANAGEMENT_FILTER_MEDIUM_URL = SERVER + "/SentMailManagement/SystemMailMail/filter/medium/";

// Tìm kiếm bộ lọc trả về 10000 bản ghi / trang
const SYSTEMMAILMAILSENTMAILMANAGEMENT_FILTER_LARGE_URL = SERVER + "/SentMailManagement/SystemMailMail/filter/large/";

//////////////////////////////##################################---FILTER MEMCACHE---################################////////////////////////////////////////////

// Tìm kiếm bộ lọc trả về 100 bản ghi / trang
const SYSTEMMAILMAILSENTMAILMANAGEMENT_FILTER_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailmail/filter/standard/";

// Tìm kiếm bộ lọc trả về 1000 bản ghi / trang
const SYSTEMMAILMAILSENTMAILMANAGEMENT_FILTER_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailmail/filter/medium/";

// Tìm kiếm bộ lọc trả về 10000 bản ghi / trang
const SYSTEMMAILMAILSENTMAILMANAGEMENT_FILTER_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailmail/filter/large/";

// Check trùng mã code
//  1.thêm mới
const SYSTEMMAILMAILSENTMAILMANAGEMENT_CREATE_CHECK_EXIST_CODE_URL =  SERVER + "/SentMailManagement/SystemMailMail/check-code/create/exist/";
//  2.cập nhật
const SYSTEMMAILMAILSENTMAILMANAGEMENT_UPDATE_CHECK_EXIST_CODE_URL =  SERVER + "/SentMailManagement/SystemMailMail/check-code/update/<uuid>/exist/";


//////////////////////////////###################################---TABLE DATABASE---##################################////////////////////////////////////////////

                       
// Lấy danh sách hiển thị trên bảng 100 bản ghi / trang
const SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_GET_DATATABLE_STANDARD_URL = SERVER + "/api/v1/sentmailmanagement/systemmailsentmail/data-table/standard/";

// Lấy danh sách hiển thị trên bảng 1000 bản ghi / trang
const SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_GET_DATATABLE_MEDIUM_URL = SERVER + "/api/v1/sentmailmanagement/systemmailsentmail/data-table/medium/";

// Lấy danh sách hiển thị trên bảng 10000 bản ghi / trang
const SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_GET_DATATABLE_LARGE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailsentmail/data-table/large/";

//////////////////////////////################################---TABLE MEMCACHE---#####################################////////////////////////////////////////////
// Lấy danh sách hiển thị trên bảng 100 bản ghi / trang
const SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_GET_DATATABLE_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailsentmail/data-table/standard/";

// Lấy danh sách hiển thị trên bảng 1000 bản ghi / trang
const SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_GET_DATATABLE_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailsentmail/data-table/medium/";

// Lấy danh sách hiển thị trên bảng 10000 bản ghi / trang
const SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_GET_DATATABLE_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailsentmail/data-table/large/";

//////////////////////////////##################################---LIST DATABASE---################################////////////////////////////////////////////

// Lấy danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_LIST_STANDARD_URL = SERVER + "/api/v1/sentmailmanagement/systemmailsentmail/list/standard/";

// Lấy danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_LIST_MEDIUM_URL = SERVER + "/api/v1/sentmailmanagement/systemmailsentmail/list/medium/";

// Lấy danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_LIST_LARGE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailsentmail/list/large/";

// Lấy danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_LIST_FILTER_STANDARD_URL = SERVER + "/api/v1/sentmailmanagement/systemmailsentmail/list/filter/standard/";

// Lấy danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_LIST_FILTER_MEDIUM_URL = SERVER + "/api/v1/sentmailmanagement/systemmailsentmail/list/filter/medium/";

// Lấy danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_LIST_FILTER_LARGE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailsentmail/list/filter/large/";

//////////////////////////////##################################---LIST MEMCACHE---#################################////////////////////////////////////////////

// Lấy danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_LIST_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailsentmail/list/standard/";

// Lấy danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_LIST_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailsentmail/list/medium/";

// Lấy danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_LIST_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailsentmail/list/large/";

// tìm kiếm trong danh sách

// Lấy danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_LIST_FILTER_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailsentmail/list/filter/standard/";

// Lấy danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_LIST_FILTER_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailsentmail/list/filter/medium/";

// Lấy danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_LIST_FILTER_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailsentmail/list/filter/large/";


//////////////////////////////##################################---DETAIL---#################################////////////////////////////////////////////

// Lấy chi tiết (uuid) /danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_GET_DETAIL_STANDARD_URL = SERVER + "/api/v1/sentmailmanagement/systemmailsentmail/detail/standard/";

// Lấy chi tiết (uuid) /danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_GET_DETAIL_MEDIUM_URL = SERVER + "/api/v1/sentmailmanagement/systemmailsentmail/detail/medium/";

// Lấy chi tiết (uuid) /danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_GET_DETAIL_LARGE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailsentmail/detail/large/";

// Thêm mới bản ghi
const SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_CREATE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailsentmail/create/";

// cập nhật/ chỉnh sửa bản ghi
const SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_UPDATE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailsentmail/update/";

// Xóa bản ghi
const SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_DELETE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailsentmail/delete/";

// Import dữ liệu
const SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_IMPORT_URL = SERVER + "/SentMailManagement/SystemMailSentMail/import-file/";

// Xóa file đính kèm
const SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_REMOVEFILE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailsentmail/remove-file/";

//////////////////////////////##################################---SEARCH DATABASE---################################////////////////////////////////////////////

// Tìm kiếm nhanh trả về 100 bản ghi / trang
const SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_STANDARD_URL = SERVER + "/SentMailManagement/SystemMailSentMail/search/standard/";

// Tìm kiếm nhanh trả về 1000 bản ghi / trang
const SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_MEDIUM_URL = SERVER + "/SentMailManagement/SystemMailSentMail/search/medium/";

// Tìm kiếm nhanh trả về 10000 bản ghi / trang
const SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LARGE_URL = SERVER + "/SentMailManagement/SystemMailSentMail/search/large/";

//////////////////////////////##################################---SEARCH MEMCACHE---################################////////////////////////////////////////////

// Tìm kiếm nhanh trả về 100 bản ghi / trang
const SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailsentmail/search/standard/";

// Tìm kiếm nhanh trả về 1000 bản ghi / trang
const SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailsentmail/search/medium/";

// Tìm kiếm nhanh trả về 10000 bản ghi / trang
const SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailsentmail/search/large/";

//////////////////////////////##################################---FILTER DATABASE---################################////////////////////////////////////////////

// Tìm kiếm bộ lọc trả về 100 bản ghi / trang
const SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_FILTER_STANDARD_URL = SERVER + "/SentMailManagement/SystemMailSentMail/filter/standard/";

// Tìm kiếm bộ lọc trả về 1000 bản ghi / trang
const SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_FILTER_MEDIUM_URL = SERVER + "/SentMailManagement/SystemMailSentMail/filter/medium/";

// Tìm kiếm bộ lọc trả về 10000 bản ghi / trang
const SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_FILTER_LARGE_URL = SERVER + "/SentMailManagement/SystemMailSentMail/filter/large/";

//////////////////////////////##################################---FILTER MEMCACHE---################################////////////////////////////////////////////

// Tìm kiếm bộ lọc trả về 100 bản ghi / trang
const SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_FILTER_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailsentmail/filter/standard/";

// Tìm kiếm bộ lọc trả về 1000 bản ghi / trang
const SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_FILTER_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailsentmail/filter/medium/";

// Tìm kiếm bộ lọc trả về 10000 bản ghi / trang
const SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_FILTER_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailsentmail/filter/large/";

// Check trùng mã code
//  1.thêm mới
const SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_CREATE_CHECK_EXIST_CODE_URL =  SERVER + "/SentMailManagement/SystemMailSentMail/check-code/create/exist/";
//  2.cập nhật
const SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_UPDATE_CHECK_EXIST_CODE_URL =  SERVER + "/SentMailManagement/SystemMailSentMail/check-code/update/<uuid>/exist/";


//////////////////////////////###################################---TABLE DATABASE---##################################////////////////////////////////////////////

                       
// Lấy danh sách hiển thị trên bảng 100 bản ghi / trang
const SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_GET_DATATABLE_STANDARD_URL = SERVER + "/api/v1/sentmailmanagement/systemmailserverconfig/data-table/standard/";

// Lấy danh sách hiển thị trên bảng 1000 bản ghi / trang
const SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_GET_DATATABLE_MEDIUM_URL = SERVER + "/api/v1/sentmailmanagement/systemmailserverconfig/data-table/medium/";

// Lấy danh sách hiển thị trên bảng 10000 bản ghi / trang
const SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_GET_DATATABLE_LARGE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailserverconfig/data-table/large/";

//////////////////////////////################################---TABLE MEMCACHE---#####################################////////////////////////////////////////////
// Lấy danh sách hiển thị trên bảng 100 bản ghi / trang
const SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_GET_DATATABLE_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailserverconfig/data-table/standard/";

// Lấy danh sách hiển thị trên bảng 1000 bản ghi / trang
const SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_GET_DATATABLE_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailserverconfig/data-table/medium/";

// Lấy danh sách hiển thị trên bảng 10000 bản ghi / trang
const SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_GET_DATATABLE_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailserverconfig/data-table/large/";

//////////////////////////////##################################---LIST DATABASE---################################////////////////////////////////////////////

// Lấy danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_LIST_STANDARD_URL = SERVER + "/api/v1/sentmailmanagement/systemmailserverconfig/list/standard/";

// Lấy danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_LIST_MEDIUM_URL = SERVER + "/api/v1/sentmailmanagement/systemmailserverconfig/list/medium/";

// Lấy danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_LIST_LARGE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailserverconfig/list/large/";

// Lấy danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_LIST_FILTER_STANDARD_URL = SERVER + "/api/v1/sentmailmanagement/systemmailserverconfig/list/filter/standard/";

// Lấy danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_LIST_FILTER_MEDIUM_URL = SERVER + "/api/v1/sentmailmanagement/systemmailserverconfig/list/filter/medium/";

// Lấy danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_LIST_FILTER_LARGE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailserverconfig/list/filter/large/";

//////////////////////////////##################################---LIST MEMCACHE---#################################////////////////////////////////////////////

// Lấy danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_LIST_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailserverconfig/list/standard/";

// Lấy danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_LIST_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailserverconfig/list/medium/";

// Lấy danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_LIST_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailserverconfig/list/large/";

// tìm kiếm trong danh sách

// Lấy danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_LIST_FILTER_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailserverconfig/list/filter/standard/";

// Lấy danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_LIST_FILTER_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailserverconfig/list/filter/medium/";

// Lấy danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_LIST_FILTER_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailserverconfig/list/filter/large/";


//////////////////////////////##################################---DETAIL---#################################////////////////////////////////////////////

// Lấy chi tiết (uuid) /danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_GET_DETAIL_STANDARD_URL = SERVER + "/api/v1/sentmailmanagement/systemmailserverconfig/detail/standard/";

// Lấy chi tiết (uuid) /danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_GET_DETAIL_MEDIUM_URL = SERVER + "/api/v1/sentmailmanagement/systemmailserverconfig/detail/medium/";

// Lấy chi tiết (uuid) /danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_GET_DETAIL_LARGE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailserverconfig/detail/large/";

// Thêm mới bản ghi
const SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_CREATE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailserverconfig/create/";

// cập nhật/ chỉnh sửa bản ghi
const SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_UPDATE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailserverconfig/update/";

// Xóa bản ghi
const SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_DELETE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailserverconfig/delete/";

// Import dữ liệu
const SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_IMPORT_URL = SERVER + "/SentMailManagement/SystemMailServerConfig/import-file/";

// Xóa file đính kèm
const SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_REMOVEFILE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailserverconfig/remove-file/";

//////////////////////////////##################################---SEARCH DATABASE---################################////////////////////////////////////////////

// Tìm kiếm nhanh trả về 100 bản ghi / trang
const SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_SEARCH_STANDARD_URL = SERVER + "/SentMailManagement/SystemMailServerConfig/search/standard/";

// Tìm kiếm nhanh trả về 1000 bản ghi / trang
const SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_SEARCH_MEDIUM_URL = SERVER + "/SentMailManagement/SystemMailServerConfig/search/medium/";

// Tìm kiếm nhanh trả về 10000 bản ghi / trang
const SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_SEARCH_LARGE_URL = SERVER + "/SentMailManagement/SystemMailServerConfig/search/large/";

//////////////////////////////##################################---SEARCH MEMCACHE---################################////////////////////////////////////////////

// Tìm kiếm nhanh trả về 100 bản ghi / trang
const SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_SEARCH_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailserverconfig/search/standard/";

// Tìm kiếm nhanh trả về 1000 bản ghi / trang
const SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_SEARCH_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailserverconfig/search/medium/";

// Tìm kiếm nhanh trả về 10000 bản ghi / trang
const SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_SEARCH_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailserverconfig/search/large/";

//////////////////////////////##################################---FILTER DATABASE---################################////////////////////////////////////////////

// Tìm kiếm bộ lọc trả về 100 bản ghi / trang
const SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_FILTER_STANDARD_URL = SERVER + "/SentMailManagement/SystemMailServerConfig/filter/standard/";

// Tìm kiếm bộ lọc trả về 1000 bản ghi / trang
const SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_FILTER_MEDIUM_URL = SERVER + "/SentMailManagement/SystemMailServerConfig/filter/medium/";

// Tìm kiếm bộ lọc trả về 10000 bản ghi / trang
const SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_FILTER_LARGE_URL = SERVER + "/SentMailManagement/SystemMailServerConfig/filter/large/";

//////////////////////////////##################################---FILTER MEMCACHE---################################////////////////////////////////////////////

// Tìm kiếm bộ lọc trả về 100 bản ghi / trang
const SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_FILTER_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailserverconfig/filter/standard/";

// Tìm kiếm bộ lọc trả về 1000 bản ghi / trang
const SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_FILTER_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailserverconfig/filter/medium/";

// Tìm kiếm bộ lọc trả về 10000 bản ghi / trang
const SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_FILTER_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailserverconfig/filter/large/";

// Check trùng mã code
//  1.thêm mới
const SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_CREATE_CHECK_EXIST_CODE_URL =  SERVER + "/SentMailManagement/SystemMailServerConfig/check-code/create/exist/";
//  2.cập nhật
const SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_UPDATE_CHECK_EXIST_CODE_URL =  SERVER + "/SentMailManagement/SystemMailServerConfig/check-code/update/<uuid>/exist/";


//////////////////////////////###################################---TABLE DATABASE---##################################////////////////////////////////////////////

                       
// Lấy danh sách hiển thị trên bảng 100 bản ghi / trang
const SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_GET_DATATABLE_STANDARD_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplate/data-table/standard/";

// Lấy danh sách hiển thị trên bảng 1000 bản ghi / trang
const SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_GET_DATATABLE_MEDIUM_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplate/data-table/medium/";

// Lấy danh sách hiển thị trên bảng 10000 bản ghi / trang
const SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_GET_DATATABLE_LARGE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplate/data-table/large/";

//////////////////////////////################################---TABLE MEMCACHE---#####################################////////////////////////////////////////////
// Lấy danh sách hiển thị trên bảng 100 bản ghi / trang
const SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_GET_DATATABLE_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplate/data-table/standard/";

// Lấy danh sách hiển thị trên bảng 1000 bản ghi / trang
const SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_GET_DATATABLE_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplate/data-table/medium/";

// Lấy danh sách hiển thị trên bảng 10000 bản ghi / trang
const SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_GET_DATATABLE_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplate/data-table/large/";

//////////////////////////////##################################---LIST DATABASE---################################////////////////////////////////////////////

// Lấy danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_LIST_STANDARD_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplate/list/standard/";

// Lấy danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_LIST_MEDIUM_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplate/list/medium/";

// Lấy danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_LIST_LARGE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplate/list/large/";

// Lấy danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_LIST_FILTER_STANDARD_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplate/list/filter/standard/";

// Lấy danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_LIST_FILTER_MEDIUM_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplate/list/filter/medium/";

// Lấy danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_LIST_FILTER_LARGE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplate/list/filter/large/";

//////////////////////////////##################################---LIST MEMCACHE---#################################////////////////////////////////////////////

// Lấy danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_LIST_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplate/list/standard/";

// Lấy danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_LIST_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplate/list/medium/";

// Lấy danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_LIST_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplate/list/large/";

// tìm kiếm trong danh sách

// Lấy danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_LIST_FILTER_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplate/list/filter/standard/";

// Lấy danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_LIST_FILTER_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplate/list/filter/medium/";

// Lấy danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_LIST_FILTER_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplate/list/filter/large/";


//////////////////////////////##################################---DETAIL---#################################////////////////////////////////////////////

// Lấy chi tiết (uuid) /danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_GET_DETAIL_STANDARD_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplate/detail/standard/";

// Lấy chi tiết (uuid) /danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_GET_DETAIL_MEDIUM_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplate/detail/medium/";

// Lấy chi tiết (uuid) /danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_GET_DETAIL_LARGE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplate/detail/large/";

// Thêm mới bản ghi
const SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_CREATE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplate/create/";

// cập nhật/ chỉnh sửa bản ghi
const SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_UPDATE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplate/update/";

// Xóa bản ghi
const SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_DELETE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplate/delete/";

// Import dữ liệu
const SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_IMPORT_URL = SERVER + "/SentMailManagement/SystemMailTemplate/import-file/";

// Xóa file đính kèm
const SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_REMOVEFILE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplate/remove-file/";

//////////////////////////////##################################---SEARCH DATABASE---################################////////////////////////////////////////////

// Tìm kiếm nhanh trả về 100 bản ghi / trang
const SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_SEARCH_STANDARD_URL = SERVER + "/SentMailManagement/SystemMailTemplate/search/standard/";

// Tìm kiếm nhanh trả về 1000 bản ghi / trang
const SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_SEARCH_MEDIUM_URL = SERVER + "/SentMailManagement/SystemMailTemplate/search/medium/";

// Tìm kiếm nhanh trả về 10000 bản ghi / trang
const SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_SEARCH_LARGE_URL = SERVER + "/SentMailManagement/SystemMailTemplate/search/large/";

//////////////////////////////##################################---SEARCH MEMCACHE---################################////////////////////////////////////////////

// Tìm kiếm nhanh trả về 100 bản ghi / trang
const SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_SEARCH_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplate/search/standard/";

// Tìm kiếm nhanh trả về 1000 bản ghi / trang
const SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_SEARCH_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplate/search/medium/";

// Tìm kiếm nhanh trả về 10000 bản ghi / trang
const SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_SEARCH_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplate/search/large/";

//////////////////////////////##################################---FILTER DATABASE---################################////////////////////////////////////////////

// Tìm kiếm bộ lọc trả về 100 bản ghi / trang
const SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_FILTER_STANDARD_URL = SERVER + "/SentMailManagement/SystemMailTemplate/filter/standard/";

// Tìm kiếm bộ lọc trả về 1000 bản ghi / trang
const SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_FILTER_MEDIUM_URL = SERVER + "/SentMailManagement/SystemMailTemplate/filter/medium/";

// Tìm kiếm bộ lọc trả về 10000 bản ghi / trang
const SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_FILTER_LARGE_URL = SERVER + "/SentMailManagement/SystemMailTemplate/filter/large/";

//////////////////////////////##################################---FILTER MEMCACHE---################################////////////////////////////////////////////

// Tìm kiếm bộ lọc trả về 100 bản ghi / trang
const SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_FILTER_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplate/filter/standard/";

// Tìm kiếm bộ lọc trả về 1000 bản ghi / trang
const SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_FILTER_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplate/filter/medium/";

// Tìm kiếm bộ lọc trả về 10000 bản ghi / trang
const SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_FILTER_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplate/filter/large/";

// Check trùng mã code
//  1.thêm mới
const SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_CREATE_CHECK_EXIST_CODE_URL =  SERVER + "/SentMailManagement/SystemMailTemplate/check-code/create/exist/";
//  2.cập nhật
const SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_UPDATE_CHECK_EXIST_CODE_URL =  SERVER + "/SentMailManagement/SystemMailTemplate/check-code/update/<uuid>/exist/";


//////////////////////////////###################################---TABLE DATABASE---##################################////////////////////////////////////////////

                       
// Lấy danh sách hiển thị trên bảng 100 bản ghi / trang
const SYSTEMMAILTYPESENTMAILMANAGEMENT_GET_DATATABLE_STANDARD_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtype/data-table/standard/";

// Lấy danh sách hiển thị trên bảng 1000 bản ghi / trang
const SYSTEMMAILTYPESENTMAILMANAGEMENT_GET_DATATABLE_MEDIUM_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtype/data-table/medium/";

// Lấy danh sách hiển thị trên bảng 10000 bản ghi / trang
const SYSTEMMAILTYPESENTMAILMANAGEMENT_GET_DATATABLE_LARGE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtype/data-table/large/";

//////////////////////////////################################---TABLE MEMCACHE---#####################################////////////////////////////////////////////
// Lấy danh sách hiển thị trên bảng 100 bản ghi / trang
const SYSTEMMAILTYPESENTMAILMANAGEMENT_GET_DATATABLE_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtype/data-table/standard/";

// Lấy danh sách hiển thị trên bảng 1000 bản ghi / trang
const SYSTEMMAILTYPESENTMAILMANAGEMENT_GET_DATATABLE_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtype/data-table/medium/";

// Lấy danh sách hiển thị trên bảng 10000 bản ghi / trang
const SYSTEMMAILTYPESENTMAILMANAGEMENT_GET_DATATABLE_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtype/data-table/large/";

//////////////////////////////##################################---LIST DATABASE---################################////////////////////////////////////////////

// Lấy danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILTYPESENTMAILMANAGEMENT_LIST_STANDARD_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtype/list/standard/";

// Lấy danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILTYPESENTMAILMANAGEMENT_LIST_MEDIUM_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtype/list/medium/";

// Lấy danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILTYPESENTMAILMANAGEMENT_LIST_LARGE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtype/list/large/";

// Lấy danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILTYPESENTMAILMANAGEMENT_LIST_FILTER_STANDARD_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtype/list/filter/standard/";

// Lấy danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILTYPESENTMAILMANAGEMENT_LIST_FILTER_MEDIUM_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtype/list/filter/medium/";

// Lấy danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILTYPESENTMAILMANAGEMENT_LIST_FILTER_LARGE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtype/list/filter/large/";

//////////////////////////////##################################---LIST MEMCACHE---#################################////////////////////////////////////////////

// Lấy danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILTYPESENTMAILMANAGEMENT_LIST_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtype/list/standard/";

// Lấy danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILTYPESENTMAILMANAGEMENT_LIST_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtype/list/medium/";

// Lấy danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILTYPESENTMAILMANAGEMENT_LIST_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtype/list/large/";

// tìm kiếm trong danh sách

// Lấy danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILTYPESENTMAILMANAGEMENT_LIST_FILTER_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtype/list/filter/standard/";

// Lấy danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILTYPESENTMAILMANAGEMENT_LIST_FILTER_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtype/list/filter/medium/";

// Lấy danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILTYPESENTMAILMANAGEMENT_LIST_FILTER_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtype/list/filter/large/";


//////////////////////////////##################################---DETAIL---#################################////////////////////////////////////////////

// Lấy chi tiết (uuid) /danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILTYPESENTMAILMANAGEMENT_GET_DETAIL_STANDARD_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtype/detail/standard/";

// Lấy chi tiết (uuid) /danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILTYPESENTMAILMANAGEMENT_GET_DETAIL_MEDIUM_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtype/detail/medium/";

// Lấy chi tiết (uuid) /danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILTYPESENTMAILMANAGEMENT_GET_DETAIL_LARGE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtype/detail/large/";

// Thêm mới bản ghi
const SYSTEMMAILTYPESENTMAILMANAGEMENT_CREATE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtype/create/";

// cập nhật/ chỉnh sửa bản ghi
const SYSTEMMAILTYPESENTMAILMANAGEMENT_UPDATE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtype/update/";

// Xóa bản ghi
const SYSTEMMAILTYPESENTMAILMANAGEMENT_DELETE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtype/delete/";

// Import dữ liệu
const SYSTEMMAILTYPESENTMAILMANAGEMENT_IMPORT_URL = SERVER + "/SentMailManagement/SystemMailType/import-file/";

// Xóa file đính kèm
const SYSTEMMAILTYPESENTMAILMANAGEMENT_REMOVEFILE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtype/remove-file/";

//////////////////////////////##################################---SEARCH DATABASE---################################////////////////////////////////////////////

// Tìm kiếm nhanh trả về 100 bản ghi / trang
const SYSTEMMAILTYPESENTMAILMANAGEMENT_SEARCH_STANDARD_URL = SERVER + "/SentMailManagement/SystemMailType/search/standard/";

// Tìm kiếm nhanh trả về 1000 bản ghi / trang
const SYSTEMMAILTYPESENTMAILMANAGEMENT_SEARCH_MEDIUM_URL = SERVER + "/SentMailManagement/SystemMailType/search/medium/";

// Tìm kiếm nhanh trả về 10000 bản ghi / trang
const SYSTEMMAILTYPESENTMAILMANAGEMENT_SEARCH_LARGE_URL = SERVER + "/SentMailManagement/SystemMailType/search/large/";

//////////////////////////////##################################---SEARCH MEMCACHE---################################////////////////////////////////////////////

// Tìm kiếm nhanh trả về 100 bản ghi / trang
const SYSTEMMAILTYPESENTMAILMANAGEMENT_SEARCH_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtype/search/standard/";

// Tìm kiếm nhanh trả về 1000 bản ghi / trang
const SYSTEMMAILTYPESENTMAILMANAGEMENT_SEARCH_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtype/search/medium/";

// Tìm kiếm nhanh trả về 10000 bản ghi / trang
const SYSTEMMAILTYPESENTMAILMANAGEMENT_SEARCH_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtype/search/large/";

//////////////////////////////##################################---FILTER DATABASE---################################////////////////////////////////////////////

// Tìm kiếm bộ lọc trả về 100 bản ghi / trang
const SYSTEMMAILTYPESENTMAILMANAGEMENT_FILTER_STANDARD_URL = SERVER + "/SentMailManagement/SystemMailType/filter/standard/";

// Tìm kiếm bộ lọc trả về 1000 bản ghi / trang
const SYSTEMMAILTYPESENTMAILMANAGEMENT_FILTER_MEDIUM_URL = SERVER + "/SentMailManagement/SystemMailType/filter/medium/";

// Tìm kiếm bộ lọc trả về 10000 bản ghi / trang
const SYSTEMMAILTYPESENTMAILMANAGEMENT_FILTER_LARGE_URL = SERVER + "/SentMailManagement/SystemMailType/filter/large/";

//////////////////////////////##################################---FILTER MEMCACHE---################################////////////////////////////////////////////

// Tìm kiếm bộ lọc trả về 100 bản ghi / trang
const SYSTEMMAILTYPESENTMAILMANAGEMENT_FILTER_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtype/filter/standard/";

// Tìm kiếm bộ lọc trả về 1000 bản ghi / trang
const SYSTEMMAILTYPESENTMAILMANAGEMENT_FILTER_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtype/filter/medium/";

// Tìm kiếm bộ lọc trả về 10000 bản ghi / trang
const SYSTEMMAILTYPESENTMAILMANAGEMENT_FILTER_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtype/filter/large/";

// Check trùng mã code
//  1.thêm mới
const SYSTEMMAILTYPESENTMAILMANAGEMENT_CREATE_CHECK_EXIST_CODE_URL =  SERVER + "/SentMailManagement/SystemMailType/check-code/create/exist/";
//  2.cập nhật
const SYSTEMMAILTYPESENTMAILMANAGEMENT_UPDATE_CHECK_EXIST_CODE_URL =  SERVER + "/SentMailManagement/SystemMailType/check-code/update/<uuid>/exist/";


//////////////////////////////###################################---TABLE DATABASE---##################################////////////////////////////////////////////

                       
// Lấy danh sách hiển thị trên bảng 100 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTDATASENTMAILMANAGEMENT_GET_DATATABLE_STANDARD_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplateimportdata/data-table/standard/";

// Lấy danh sách hiển thị trên bảng 1000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTDATASENTMAILMANAGEMENT_GET_DATATABLE_MEDIUM_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplateimportdata/data-table/medium/";

// Lấy danh sách hiển thị trên bảng 10000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTDATASENTMAILMANAGEMENT_GET_DATATABLE_LARGE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplateimportdata/data-table/large/";

//////////////////////////////################################---TABLE MEMCACHE---#####################################////////////////////////////////////////////
// Lấy danh sách hiển thị trên bảng 100 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTDATASENTMAILMANAGEMENT_GET_DATATABLE_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplateimportdata/data-table/standard/";

// Lấy danh sách hiển thị trên bảng 1000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTDATASENTMAILMANAGEMENT_GET_DATATABLE_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplateimportdata/data-table/medium/";

// Lấy danh sách hiển thị trên bảng 10000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTDATASENTMAILMANAGEMENT_GET_DATATABLE_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplateimportdata/data-table/large/";

//////////////////////////////##################################---LIST DATABASE---################################////////////////////////////////////////////

// Lấy danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTDATASENTMAILMANAGEMENT_LIST_STANDARD_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplateimportdata/list/standard/";

// Lấy danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTDATASENTMAILMANAGEMENT_LIST_MEDIUM_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplateimportdata/list/medium/";

// Lấy danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTDATASENTMAILMANAGEMENT_LIST_LARGE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplateimportdata/list/large/";

// Lấy danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTDATASENTMAILMANAGEMENT_LIST_FILTER_STANDARD_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplateimportdata/list/filter/standard/";

// Lấy danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTDATASENTMAILMANAGEMENT_LIST_FILTER_MEDIUM_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplateimportdata/list/filter/medium/";

// Lấy danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTDATASENTMAILMANAGEMENT_LIST_FILTER_LARGE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplateimportdata/list/filter/large/";

//////////////////////////////##################################---LIST MEMCACHE---#################################////////////////////////////////////////////

// Lấy danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTDATASENTMAILMANAGEMENT_LIST_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplateimportdata/list/standard/";

// Lấy danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTDATASENTMAILMANAGEMENT_LIST_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplateimportdata/list/medium/";

// Lấy danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTDATASENTMAILMANAGEMENT_LIST_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplateimportdata/list/large/";

// tìm kiếm trong danh sách

// Lấy danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTDATASENTMAILMANAGEMENT_LIST_FILTER_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplateimportdata/list/filter/standard/";

// Lấy danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTDATASENTMAILMANAGEMENT_LIST_FILTER_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplateimportdata/list/filter/medium/";

// Lấy danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTDATASENTMAILMANAGEMENT_LIST_FILTER_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplateimportdata/list/filter/large/";


//////////////////////////////##################################---DETAIL---#################################////////////////////////////////////////////

// Lấy chi tiết (uuid) /danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTDATASENTMAILMANAGEMENT_GET_DETAIL_STANDARD_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplateimportdata/detail/standard/";

// Lấy chi tiết (uuid) /danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTDATASENTMAILMANAGEMENT_GET_DETAIL_MEDIUM_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplateimportdata/detail/medium/";

// Lấy chi tiết (uuid) /danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTDATASENTMAILMANAGEMENT_GET_DETAIL_LARGE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplateimportdata/detail/large/";

// Thêm mới bản ghi
const SYSTEMMAILTEMPLATEIMPORTDATASENTMAILMANAGEMENT_CREATE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplateimportdata/create/";

// cập nhật/ chỉnh sửa bản ghi
const SYSTEMMAILTEMPLATEIMPORTDATASENTMAILMANAGEMENT_UPDATE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplateimportdata/update/";

// Xóa bản ghi
const SYSTEMMAILTEMPLATEIMPORTDATASENTMAILMANAGEMENT_DELETE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplateimportdata/delete/";

// Import dữ liệu
const SYSTEMMAILTEMPLATEIMPORTDATASENTMAILMANAGEMENT_IMPORT_URL = SERVER + "/SentMailManagement/SystemMailTemplateImportData/import-file/";

// Xóa file đính kèm
const SYSTEMMAILTEMPLATEIMPORTDATASENTMAILMANAGEMENT_REMOVEFILE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplateimportdata/remove-file/";

//////////////////////////////##################################---SEARCH DATABASE---################################////////////////////////////////////////////

// Tìm kiếm nhanh trả về 100 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTDATASENTMAILMANAGEMENT_SEARCH_STANDARD_URL = SERVER + "/SentMailManagement/SystemMailTemplateImportData/search/standard/";

// Tìm kiếm nhanh trả về 1000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTDATASENTMAILMANAGEMENT_SEARCH_MEDIUM_URL = SERVER + "/SentMailManagement/SystemMailTemplateImportData/search/medium/";

// Tìm kiếm nhanh trả về 10000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTDATASENTMAILMANAGEMENT_SEARCH_LARGE_URL = SERVER + "/SentMailManagement/SystemMailTemplateImportData/search/large/";

//////////////////////////////##################################---SEARCH MEMCACHE---################################////////////////////////////////////////////

// Tìm kiếm nhanh trả về 100 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTDATASENTMAILMANAGEMENT_SEARCH_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplateimportdata/search/standard/";

// Tìm kiếm nhanh trả về 1000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTDATASENTMAILMANAGEMENT_SEARCH_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplateimportdata/search/medium/";

// Tìm kiếm nhanh trả về 10000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTDATASENTMAILMANAGEMENT_SEARCH_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplateimportdata/search/large/";

//////////////////////////////##################################---FILTER DATABASE---################################////////////////////////////////////////////

// Tìm kiếm bộ lọc trả về 100 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTDATASENTMAILMANAGEMENT_FILTER_STANDARD_URL = SERVER + "/SentMailManagement/SystemMailTemplateImportData/filter/standard/";

// Tìm kiếm bộ lọc trả về 1000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTDATASENTMAILMANAGEMENT_FILTER_MEDIUM_URL = SERVER + "/SentMailManagement/SystemMailTemplateImportData/filter/medium/";

// Tìm kiếm bộ lọc trả về 10000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTDATASENTMAILMANAGEMENT_FILTER_LARGE_URL = SERVER + "/SentMailManagement/SystemMailTemplateImportData/filter/large/";

//////////////////////////////##################################---FILTER MEMCACHE---################################////////////////////////////////////////////

// Tìm kiếm bộ lọc trả về 100 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTDATASENTMAILMANAGEMENT_FILTER_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplateimportdata/filter/standard/";

// Tìm kiếm bộ lọc trả về 1000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTDATASENTMAILMANAGEMENT_FILTER_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplateimportdata/filter/medium/";

// Tìm kiếm bộ lọc trả về 10000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTDATASENTMAILMANAGEMENT_FILTER_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplateimportdata/filter/large/";

// Check trùng mã code
//  1.thêm mới
const SYSTEMMAILTEMPLATEIMPORTDATASENTMAILMANAGEMENT_CREATE_CHECK_EXIST_CODE_URL =  SERVER + "/SentMailManagement/SystemMailTemplateImportData/check-code/create/exist/";
//  2.cập nhật
const SYSTEMMAILTEMPLATEIMPORTDATASENTMAILMANAGEMENT_UPDATE_CHECK_EXIST_CODE_URL =  SERVER + "/SentMailManagement/SystemMailTemplateImportData/check-code/update/<uuid>/exist/";


//////////////////////////////###################################---TABLE DATABASE---##################################////////////////////////////////////////////

                       
// Lấy danh sách hiển thị trên bảng 100 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_GET_DATATABLE_STANDARD_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplateimportstatus/data-table/standard/";

// Lấy danh sách hiển thị trên bảng 1000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_GET_DATATABLE_MEDIUM_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplateimportstatus/data-table/medium/";

// Lấy danh sách hiển thị trên bảng 10000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_GET_DATATABLE_LARGE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplateimportstatus/data-table/large/";

//////////////////////////////################################---TABLE MEMCACHE---#####################################////////////////////////////////////////////
// Lấy danh sách hiển thị trên bảng 100 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_GET_DATATABLE_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplateimportstatus/data-table/standard/";

// Lấy danh sách hiển thị trên bảng 1000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_GET_DATATABLE_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplateimportstatus/data-table/medium/";

// Lấy danh sách hiển thị trên bảng 10000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_GET_DATATABLE_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplateimportstatus/data-table/large/";

//////////////////////////////##################################---LIST DATABASE---################################////////////////////////////////////////////

// Lấy danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_LIST_STANDARD_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplateimportstatus/list/standard/";

// Lấy danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_LIST_MEDIUM_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplateimportstatus/list/medium/";

// Lấy danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_LIST_LARGE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplateimportstatus/list/large/";

// Lấy danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_LIST_FILTER_STANDARD_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplateimportstatus/list/filter/standard/";

// Lấy danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_LIST_FILTER_MEDIUM_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplateimportstatus/list/filter/medium/";

// Lấy danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_LIST_FILTER_LARGE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplateimportstatus/list/filter/large/";

//////////////////////////////##################################---LIST MEMCACHE---#################################////////////////////////////////////////////

// Lấy danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_LIST_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplateimportstatus/list/standard/";

// Lấy danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_LIST_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplateimportstatus/list/medium/";

// Lấy danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_LIST_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplateimportstatus/list/large/";

// tìm kiếm trong danh sách

// Lấy danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_LIST_FILTER_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplateimportstatus/list/filter/standard/";

// Lấy danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_LIST_FILTER_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplateimportstatus/list/filter/medium/";

// Lấy danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_LIST_FILTER_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplateimportstatus/list/filter/large/";


//////////////////////////////##################################---DETAIL---#################################////////////////////////////////////////////

// Lấy chi tiết (uuid) /danh sách cho selection 100 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_GET_DETAIL_STANDARD_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplateimportstatus/detail/standard/";

// Lấy chi tiết (uuid) /danh sách cho selection 1000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_GET_DETAIL_MEDIUM_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplateimportstatus/detail/medium/";

// Lấy chi tiết (uuid) /danh sách cho selection 10000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_GET_DETAIL_LARGE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplateimportstatus/detail/large/";

// Thêm mới bản ghi
const SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_CREATE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplateimportstatus/create/";

// cập nhật/ chỉnh sửa bản ghi
const SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_UPDATE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplateimportstatus/update/";

// Xóa bản ghi
const SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_DELETE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplateimportstatus/delete/";

// Import dữ liệu
const SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_IMPORT_URL = SERVER + "/SentMailManagement/SystemMailTemplateImportStatus/import-file/";

// Xóa file đính kèm
const SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_REMOVEFILE_URL = SERVER + "/api/v1/sentmailmanagement/systemmailtemplateimportstatus/remove-file/";

//////////////////////////////##################################---SEARCH DATABASE---################################////////////////////////////////////////////

// Tìm kiếm nhanh trả về 100 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_STANDARD_URL = SERVER + "/SentMailManagement/SystemMailTemplateImportStatus/search/standard/";

// Tìm kiếm nhanh trả về 1000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_MEDIUM_URL = SERVER + "/SentMailManagement/SystemMailTemplateImportStatus/search/medium/";

// Tìm kiếm nhanh trả về 10000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LARGE_URL = SERVER + "/SentMailManagement/SystemMailTemplateImportStatus/search/large/";

//////////////////////////////##################################---SEARCH MEMCACHE---################################////////////////////////////////////////////

// Tìm kiếm nhanh trả về 100 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplateimportstatus/search/standard/";

// Tìm kiếm nhanh trả về 1000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplateimportstatus/search/medium/";

// Tìm kiếm nhanh trả về 10000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplateimportstatus/search/large/";

//////////////////////////////##################################---FILTER DATABASE---################################////////////////////////////////////////////

// Tìm kiếm bộ lọc trả về 100 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_FILTER_STANDARD_URL = SERVER + "/SentMailManagement/SystemMailTemplateImportStatus/filter/standard/";

// Tìm kiếm bộ lọc trả về 1000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_FILTER_MEDIUM_URL = SERVER + "/SentMailManagement/SystemMailTemplateImportStatus/filter/medium/";

// Tìm kiếm bộ lọc trả về 10000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_FILTER_LARGE_URL = SERVER + "/SentMailManagement/SystemMailTemplateImportStatus/filter/large/";

//////////////////////////////##################################---FILTER MEMCACHE---################################////////////////////////////////////////////

// Tìm kiếm bộ lọc trả về 100 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_FILTER_STANDARD_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplateimportstatus/filter/standard/";

// Tìm kiếm bộ lọc trả về 1000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_FILTER_MEDIUM_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplateimportstatus/filter/medium/";

// Tìm kiếm bộ lọc trả về 10000 bản ghi / trang
const SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_FILTER_LARGE_URL_OPT = SERVER + "/api/opt/v1/sentmailmanagement/systemmailtemplateimportstatus/filter/large/";

// Check trùng mã code
//  1.thêm mới
const SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_CREATE_CHECK_EXIST_CODE_URL =  SERVER + "/SentMailManagement/SystemMailTemplateImportStatus/check-code/create/exist/";
//  2.cập nhật
const SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_UPDATE_CHECK_EXIST_CODE_URL =  SERVER + "/SentMailManagement/SystemMailTemplateImportStatus/check-code/update/<uuid>/exist/";
