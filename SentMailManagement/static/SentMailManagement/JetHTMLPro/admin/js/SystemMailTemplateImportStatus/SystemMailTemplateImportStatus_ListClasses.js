
/**
 *  SystemMailTemplateImportStatusSentMailManagementClasses.js created by @truongnv(truongg.nv@gmail.com) 
 *  Quản lý trạng thái tải lên Mẫu email
 *  Định nghĩa, xử lý các sự kiện và các thông tin liên quan đến Trạng thái tải lên Mẫu email
 *  Tạo bởi @truongnv on 24/8/2023
 *  Model : SystemMailTemplateImportStatus ($app_name_verbose)
 */


var SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_LOAD_LIST_MEMCACHE = false;
class SystemMailTemplateImportStatusSentMailManagement_ListItem {

    
    constructor(data){
        if (data != null){
            this.id = data.id;
            this.uuid = data.uuid;
            this.name = data.name;
            this.code = data.code;
        }
        else{
            this.uuid = null;
            this.id = null;
            this.name = null;
            this.code = null;
        }
    }
        
        

}
var SystemMailTemplateImportStatusSentMailManagementList_CACHE = [];
// ########## Get List Class ##############
class SystemMailTemplateImportStatusSentMailManagementList {
    // ########## Init Objects ##############
    

    getListApi() {
        this.callAjax = null ;
        $.ajaxSetup({
            headers: {
                'CSRFToken': getCSRFTokenValue(),
                'X-CSRFToken': getCSRFTokenValue(), // for --> SessionAuthentication
            },
            tryCount: 0,
            retryLimit: 3,
        });
        var CRR_SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_LIST_MEDIUM_URL = SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_LIST_MEDIUM_URL
        if (SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_LOAD_LIST_MEMCACHE == true){
            CRR_SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_LIST_MEDIUM_URL = SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_LIST_MEDIUM_URL_OPT
        }
        this.callAjax = $.ajax({
            url: SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_LIST_MEDIUM_URL,
            type: "GET",
            async: true,
            cache: false,
            timeout: 30000,

            success: function(data) {
                SystemMailTemplateImportStatusSentMailManagementList_CACHE = []
                console.log(data);
                if (data.hasOwnProperty('results')) {
                    for (var i = 0; i < data.results.length; i++) {
                        var x = new SystemMailTemplateImportStatusSentMailManagement_ListItem(data.results[i]);
                        SystemMailTemplateImportStatusSentMailManagementList_CACHE.push(x);
                    }
                } else {
                    for (var i = 0; i < data.length; i++) {
                        var x = new SystemMailTemplateImportStatusSentMailManagement_ListItem(data[i]);
                        SystemMailTemplateImportStatusSentMailManagementList_CACHE.push(x);
                    }
                }
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
                if (xhr.textStatus == 'timeout') {
                    this.tryCount++;
                    if (this.tryCount <= this.retryLimit) {
                        //try again
                        $.ajax(this);
                        return;
                    }
                    return;
                }

                
                return null;
            },
        });
        return SystemMailTemplateImportStatusSentMailManagementList_CACHE;
    }

}


// ########## [Get List, push options to Select] Handle Event function ##############
function LoadSystemMailTemplateImportStatusSentMailManagementList() {

    if ($(".sentmailmanagement-systemmailtemplateimportstatus-select").length > 0) {
        var obj = new SystemMailTemplateImportStatusSentMailManagementList();
        SystemMailTemplateImportStatusSentMailManagementList_CACHE = obj.getListApi();
        
        
        obj.callAjax.then(function(data) {
            if (data.hasOwnProperty('results')) {

                    for (var i = 0; i < data.results.length; i++) {
                        var x = new SystemMailTemplateImportStatusSentMailManagement_ListItem(data.results[i]);
                        $(".sentmailmanagement-systemmailtemplateimportstatus-select").append(new Option(x.name, x.uuid));
                    }
                } else {
                    for (var i = 0; i < data.length; i++) {
                        var x = new SystemMailTemplateImportStatusSentMailManagement_ListItem(data[i]);
                        $(".sentmailmanagement-systemmailtemplateimportstatus-select").append(new Option(x.name, x.uuid));
                    }
                    $(".sentmailmanagement-systemmailtemplateimportstatus-select").select2();
            }
        })
        
    }
}
$(document).ready(function() {
    LoadSystemMailTemplateImportStatusSentMailManagementList();
})
