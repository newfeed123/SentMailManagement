
/**
 *  SystemMailTypeSentMailManagementClasses.js created by @truongnv(truongg.nv@gmail.com) 
 *  Loại email
 *  Định nghĩa, xử lý các sự kiện và các thông tin liên quan đến Loại email
 *  Tạo bởi @truongnv on 24/8/2023
 *  Model : SystemMailType ($app_name_verbose)
 */


var SYSTEMMAILTYPESENTMAILMANAGEMENT_LOAD_LIST_MEMCACHE = false;
class SystemMailTypeSentMailManagement_ListItem {

    
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
var SystemMailTypeSentMailManagementList_CACHE = [];
// ########## Get List Class ##############
class SystemMailTypeSentMailManagementList {
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
        var CRR_SYSTEMMAILTYPESENTMAILMANAGEMENT_LIST_MEDIUM_URL = SYSTEMMAILTYPESENTMAILMANAGEMENT_LIST_MEDIUM_URL
        if (SYSTEMMAILTYPESENTMAILMANAGEMENT_LOAD_LIST_MEMCACHE == true){
            CRR_SYSTEMMAILTYPESENTMAILMANAGEMENT_LIST_MEDIUM_URL = SYSTEMMAILTYPESENTMAILMANAGEMENT_LIST_MEDIUM_URL_OPT
        }
        this.callAjax = $.ajax({
            url: SYSTEMMAILTYPESENTMAILMANAGEMENT_LIST_MEDIUM_URL,
            type: "GET",
            async: true,
            cache: false,
            timeout: 30000,

            success: function(data) {
                SystemMailTypeSentMailManagementList_CACHE = []
                console.log(data);
                if (data.hasOwnProperty('results')) {
                    for (var i = 0; i < data.results.length; i++) {
                        var x = new SystemMailTypeSentMailManagement_ListItem(data.results[i]);
                        SystemMailTypeSentMailManagementList_CACHE.push(x);
                    }
                } else {
                    for (var i = 0; i < data.length; i++) {
                        var x = new SystemMailTypeSentMailManagement_ListItem(data[i]);
                        SystemMailTypeSentMailManagementList_CACHE.push(x);
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
        return SystemMailTypeSentMailManagementList_CACHE;
    }

}


// ########## [Get List, push options to Select] Handle Event function ##############
function LoadSystemMailTypeSentMailManagementList() {

    if ($(".sentmailmanagement-systemmailtype-select").length > 0) {
        var obj = new SystemMailTypeSentMailManagementList();
        SystemMailTypeSentMailManagementList_CACHE = obj.getListApi();
        
        
        obj.callAjax.then(function(data) {
            if (data.hasOwnProperty('results')) {

                    for (var i = 0; i < data.results.length; i++) {
                        var x = new SystemMailTypeSentMailManagement_ListItem(data.results[i]);
                        $(".sentmailmanagement-systemmailtype-select").append(new Option(x.name, x.uuid));
                    }
                } else {
                    for (var i = 0; i < data.length; i++) {
                        var x = new SystemMailTypeSentMailManagement_ListItem(data[i]);
                        $(".sentmailmanagement-systemmailtype-select").append(new Option(x.name, x.uuid));
                    }
                    $(".sentmailmanagement-systemmailtype-select").select2();
            }
        })
        
    }
}
$(document).ready(function() {
    LoadSystemMailTypeSentMailManagementList();
})
