
/**
 *  SystemMailSentMailSentMailManagementClasses.js created by @truongnv(truongg.nv@gmail.com) 
 *  Mail đã gửi
 *  Định nghĩa, xử lý các sự kiện và các thông tin liên quan đến Mail đã gửi
 *  Tạo bởi @truongnv on 24/8/2023
 *  Model : SystemMailSentMail ($app_name_verbose)
 */


var SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_LOAD_LIST_MEMCACHE = false;
class SystemMailSentMailSentMailManagement_ListItem {

    
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
var SystemMailSentMailSentMailManagementList_CACHE = [];
// ########## Get List Class ##############
class SystemMailSentMailSentMailManagementList {
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
        var CRR_SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_LIST_MEDIUM_URL = SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_LIST_MEDIUM_URL
        if (SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_LOAD_LIST_MEMCACHE == true){
            CRR_SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_LIST_MEDIUM_URL = SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_LIST_MEDIUM_URL_OPT
        }
        this.callAjax = $.ajax({
            url: SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_LIST_MEDIUM_URL,
            type: "GET",
            async: true,
            cache: false,
            timeout: 30000,

            success: function(data) {
                SystemMailSentMailSentMailManagementList_CACHE = []
                console.log(data);
                if (data.hasOwnProperty('results')) {
                    for (var i = 0; i < data.results.length; i++) {
                        var x = new SystemMailSentMailSentMailManagement_ListItem(data.results[i]);
                        SystemMailSentMailSentMailManagementList_CACHE.push(x);
                    }
                } else {
                    for (var i = 0; i < data.length; i++) {
                        var x = new SystemMailSentMailSentMailManagement_ListItem(data[i]);
                        SystemMailSentMailSentMailManagementList_CACHE.push(x);
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
        return SystemMailSentMailSentMailManagementList_CACHE;
    }

}


// ########## [Get List, push options to Select] Handle Event function ##############
function LoadSystemMailSentMailSentMailManagementList() {

    if ($(".sentmailmanagement-systemmailsentmail-select").length > 0) {
        var obj = new SystemMailSentMailSentMailManagementList();
        SystemMailSentMailSentMailManagementList_CACHE = obj.getListApi();
        
        
        obj.callAjax.then(function(data) {
            if (data.hasOwnProperty('results')) {

                    for (var i = 0; i < data.results.length; i++) {
                        var x = new SystemMailSentMailSentMailManagement_ListItem(data.results[i]);
                        $(".sentmailmanagement-systemmailsentmail-select").append(new Option(x.name, x.uuid));
                    }
                } else {
                    for (var i = 0; i < data.length; i++) {
                        var x = new SystemMailSentMailSentMailManagement_ListItem(data[i]);
                        $(".sentmailmanagement-systemmailsentmail-select").append(new Option(x.name, x.uuid));
                    }
                    $(".sentmailmanagement-systemmailsentmail-select").select2();
            }
        })
        
    }
}
$(document).ready(function() {
    LoadSystemMailSentMailSentMailManagementList();
})
