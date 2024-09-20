
/**
 *  SystemMailTargetSentMailManagementClasses.js created by @truongnv(truongg.nv@gmail.com) 
 *  Cá nhân/nhóm nhận mail
 *  Định nghĩa, xử lý các sự kiện và các thông tin liên quan đến Cá nhân/nhóm nhận mail
 *  Tạo bởi @truongnv on 8/8/2023
 *  Model : SystemMailTarget ($app_name_verbose)
 */


var SYSTEMMAILTARGETSENTMAILMANAGEMENT_LOAD_LIST_MEMCACHE = false;
class SystemMailTargetSentMailManagement_ListItem {

    
    constructor(data){
        if (data != null){
            this.id = data.id;
            this.uuid = data.uuid;
            this.name = data.name;
            this.code = data.code;
            if (data.hasOwnProperty("email_template")) {
                this.email_template_uuid = data.email_template["uuid"];
            }
            else {
                this.email_template_uuid = "";
            }
        }
        else{
            this.uuid = null;
            this.id = null;
            this.name = null;
            this.code = null;
        }
    }
        
        

}
var SystemMailTargetSentMailManagementList_CACHE = [];
// ########## Get List Class ##############
class SystemMailTargetSentMailManagementList {
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
        var CRR_SYSTEMMAILTARGETSENTMAILMANAGEMENT_LIST_MEDIUM_URL = SYSTEMMAILTARGETSENTMAILMANAGEMENT_LIST_MEDIUM_URL
        if (SYSTEMMAILTARGETSENTMAILMANAGEMENT_LOAD_LIST_MEMCACHE == true){
            CRR_SYSTEMMAILTARGETSENTMAILMANAGEMENT_LIST_MEDIUM_URL = SYSTEMMAILTARGETSENTMAILMANAGEMENT_LIST_MEDIUM_URL_OPT
        }
        this.callAjax = $.ajax({
            url: SYSTEMMAILTARGETSENTMAILMANAGEMENT_LIST_MEDIUM_URL,
            type: "GET",
            async: true,
            cache: false,
            timeout: 30000,

            success: function(data) {
                SystemMailTargetSentMailManagementList_CACHE = []
                // console.log(data);
                if (data.hasOwnProperty('results')) {
                    for (var i = 0; i < data.results.length; i++) {
                        var x = new SystemMailTargetSentMailManagement_ListItem(data.results[i]);
                        SystemMailTargetSentMailManagementList_CACHE.push(x);
                    }
                } else {
                    for (var i = 0; i < data.length; i++) {
                        var x = new SystemMailTargetSentMailManagement_ListItem(data[i]);
                        SystemMailTargetSentMailManagementList_CACHE.push(x);
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
        return SystemMailTargetSentMailManagementList_CACHE;
    }

}


// ########## [Get List, push options to Select] Handle Event function ##############
function LoadSystemMailTargetSentMailManagementList() {

    if ($(".sentmailmanagement-systemmailtarget-select").length > 0) {
        var obj = new SystemMailTargetSentMailManagementList();
        SystemMailTargetSentMailManagementList_CACHE = obj.getListApi();
        
        // List lưu giá trị hiện tại của obj
        var listObjValue = []
        obj.callAjax.then(function(data) {
            // Lấy giá trị của thuộc tính 'value' và lưu vào list
            $(".sentmailmanagement-systemmailtarget-select option").each(function() {
                var optionValue = $(this).val();
                if ($(this).closest('table').length != true && optionValue !== undefined && optionValue !== null && optionValue !== "") { 
                    if (listObjValue.includes(optionValue) !== true) {
                        listObjValue.push(optionValue);
                    }
                }
            });

            if (data.hasOwnProperty('results')) {

                    for (var i = 0; i < data.results.length; i++) {
                        var x = new SystemMailTargetSentMailManagement_ListItem(data.results[i]);
                        if (x.uuid in listObjValue) {
                            continue;
                        }
                        $(".sentmailmanagement-systemmailtarget-select").append(new Option(x.name, x.uuid));
                    }
                } else {
                    for (var i = 0; i < data.length; i++) {
                        var x = new SystemMailTargetSentMailManagement_ListItem(data[i]);
                        var defalutSelected = false;
                        var selected = false;
                        if (listObjValue.includes(x.uuid)) {
                            defalutSelected = true;
                            selected = true;
                            // continue;

                            // Sử dụng jQuery để tìm select theo class
                            var select = $(".sentmailmanagement-systemmailtarget-select");
                            // Sử dụng phương thức filter để lọc ra option cần xóa
                            var optionDel = select.find("option[value='" + x.uuid + "']");
                            // Xóa option khỏi danh sách
                            optionDel.remove();
                        }
                        var newOption = new Option(x.name, x.uuid, defalutSelected, selected);
                        $(newOption).attr("email_template_uuid", x.email_template_uuid);
                        $(".sentmailmanagement-systemmailtarget-select").append(newOption).trigger('change')
                    }
                    $(".sentmailmanagement-systemmailtarget-select").select2();
            }
        })
        
    }
}
$(document).ready(function() {
    LoadSystemMailTargetSentMailManagementList();
})
