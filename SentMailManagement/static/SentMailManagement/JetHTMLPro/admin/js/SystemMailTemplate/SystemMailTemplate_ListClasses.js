
/**
 *  SystemMailTemplateSentMailManagementClasses.js created by @truongnv(truongg.nv@gmail.com) 
 *  Mẫu email
 *  Định nghĩa, xử lý các sự kiện và các thông tin liên quan đến Mẫu email
 *  Tạo bởi @truongnv on 24/8/2023
 *  Model : SystemMailTemplate ($app_name_verbose)
 */


var SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_LOAD_LIST_MEMCACHE = false;
class SystemMailTemplateSentMailManagement_ListItem {

    
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
var SystemMailTemplateSentMailManagementList_CACHE = [];
// ########## Get List Class ##############
class SystemMailTemplateSentMailManagementList {
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
        var CRR_SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_LIST_MEDIUM_URL = SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_LIST_MEDIUM_URL
        if (SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_LOAD_LIST_MEMCACHE == true){
            CRR_SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_LIST_MEDIUM_URL = SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_LIST_MEDIUM_URL_OPT
        }
        this.callAjax = $.ajax({
            url: SYSTEMMAILTEMPLATESENTMAILMANAGEMENT_LIST_MEDIUM_URL,
            type: "GET",
            async: true,
            cache: false,
            timeout: 30000,

            success: function(data) {
                SystemMailTemplateSentMailManagementList_CACHE = []
                console.log(data);
                if (data.hasOwnProperty('results')) {
                    for (var i = 0; i < data.results.length; i++) {
                        var x = new SystemMailTemplateSentMailManagement_ListItem(data.results[i]);
                        SystemMailTemplateSentMailManagementList_CACHE.push(x);
                    }
                } else {
                    for (var i = 0; i < data.length; i++) {
                        var x = new SystemMailTemplateSentMailManagement_ListItem(data[i]);
                        SystemMailTemplateSentMailManagementList_CACHE.push(x);
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
        return SystemMailTemplateSentMailManagementList_CACHE;
    }

}


// ########## [Get List, push options to Select] Handle Event function ##############
function LoadSystemMailTemplateSentMailManagementList() {

    if ($(".sentmailmanagement-systemmailtemplate-select").length > 0) {
        var obj = new SystemMailTemplateSentMailManagementList();
        SystemMailTemplateSentMailManagementList_CACHE = obj.getListApi();
        
        
        obj.callAjax.then(function(data) {
            if (data.hasOwnProperty('results')) {

                    for (var i = 0; i < data.results.length; i++) {
                        var x = new SystemMailTemplateSentMailManagement_ListItem(data.results[i]);
                        $(".sentmailmanagement-systemmailtemplate-select").append(new Option(x.name, x.uuid));
                    }
                } else {
                    for (var i = 0; i < data.length; i++) {
                        var x = new SystemMailTemplateSentMailManagement_ListItem(data[i]);
                        $(".sentmailmanagement-systemmailtemplate-select").append(new Option(x.name, x.uuid));
                    }
                    $(".sentmailmanagement-systemmailtemplate-select").select2();
            }
        })
        
    }
}
$(document).ready(function() {
    LoadSystemMailTemplateSentMailManagementList();
})
