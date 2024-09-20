
/**
 *  SystemMailServerConfigSentMailManagementClasses.js created by @truongnv(truongg.nv@gmail.com) 
 *  Cấu hình email server
 *  Định nghĩa, xử lý các sự kiện và các thông tin liên quan đến Cấu hình email server
 *  Tạo bởi @truongnv on 24/8/2023
 *  Model : SystemMailServerConfig ($app_name_verbose)
 */


var SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_LOAD_LIST_MEMCACHE = false;
class SystemMailServerConfigSentMailManagement_ListItem {

    
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
var SystemMailServerConfigSentMailManagementList_CACHE = [];
// ########## Get List Class ##############
class SystemMailServerConfigSentMailManagementList {
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
        var CRR_SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_LIST_MEDIUM_URL = SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_LIST_MEDIUM_URL
        if (SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_LOAD_LIST_MEMCACHE == true){
            CRR_SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_LIST_MEDIUM_URL = SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_LIST_MEDIUM_URL_OPT
        }
        this.callAjax = $.ajax({
            url: SYSTEMMAILSERVERCONFIGSENTMAILMANAGEMENT_LIST_MEDIUM_URL,
            type: "GET",
            async: true,
            cache: false,
            timeout: 30000,

            success: function(data) {
                SystemMailServerConfigSentMailManagementList_CACHE = []
                console.log(data);
                if (data.hasOwnProperty('results')) {
                    for (var i = 0; i < data.results.length; i++) {
                        var x = new SystemMailServerConfigSentMailManagement_ListItem(data.results[i]);
                        SystemMailServerConfigSentMailManagementList_CACHE.push(x);
                    }
                } else {
                    for (var i = 0; i < data.length; i++) {
                        var x = new SystemMailServerConfigSentMailManagement_ListItem(data[i]);
                        SystemMailServerConfigSentMailManagementList_CACHE.push(x);
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
        return SystemMailServerConfigSentMailManagementList_CACHE;
    }

}


// ########## [Get List, push options to Select] Handle Event function ##############
function LoadSystemMailServerConfigSentMailManagementList() {

    if ($(".sentmailmanagement-systemmailserverconfig-select").length > 0) {
        var obj = new SystemMailServerConfigSentMailManagementList();
        SystemMailServerConfigSentMailManagementList_CACHE = obj.getListApi();
        
        
        obj.callAjax.then(function(data) {
            if (data.hasOwnProperty('results')) {

                    for (var i = 0; i < data.results.length; i++) {
                        var x = new SystemMailServerConfigSentMailManagement_ListItem(data.results[i]);
                        $(".sentmailmanagement-systemmailserverconfig-select").append(new Option(x.name, x.uuid));
                    }
                } else {
                    for (var i = 0; i < data.length; i++) {
                        var x = new SystemMailServerConfigSentMailManagement_ListItem(data[i]);
                        $(".sentmailmanagement-systemmailserverconfig-select").append(new Option(x.name, x.uuid));
                    }
                    $(".sentmailmanagement-systemmailserverconfig-select").select2();
            }
        })
        
    }
}
$(document).ready(function() {
    LoadSystemMailServerConfigSentMailManagementList();
})
