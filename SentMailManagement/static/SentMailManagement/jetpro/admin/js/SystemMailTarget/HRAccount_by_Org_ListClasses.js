/**
 *  HRAccountHRAccountManagementClasses.js created by @truongnv(truongg.nv@gmail.com) 
 *  Quản lý tài khoản HR
 *  Định nghĩa, xử lý các sự kiện và các thông tin liên quan đến Tài khoản HR
 *  Tạo bởi @truongnv on 28/7/2023
 *  Model : HRAccount ($app_name_verbose)
 */


var HRACCOUNTHRACCOUNTMANAGEMENT_LOAD_LIST_MEMCACHE = true;
class HRAccountHRAccountManagement_ListItem {

    
    constructor(data){
        if (data != null){
            this.id = data.id;
            this.uuid = data.uuid;
            this.name = data.name;
            this.code = data.code;
            this.email = data.email;
        }
        else{
            this.uuid = null;
            this.id = null;
            this.name = null;
            this.code = null;
            this.email = null;
        }
    }
        
        
}
var HRAccountHRAccountManagementList_CACHE = [];
// ########## Get List Class ##############
class HRAccountHRAccountManagementList {
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
        var CRR_HRACCOUNTHRACCOUNTMANAGEMENT_LIST_MEDIUM_URL = SYSTEMMAILTARGETSENTMAILMANAGEMENT_HRAccount_by_Organization
        if (HRACCOUNTHRACCOUNTMANAGEMENT_LOAD_LIST_MEMCACHE == true){
            CRR_HRACCOUNTHRACCOUNTMANAGEMENT_LIST_MEDIUM_URL = HRACCOUNTHRACCOUNTMANAGEMENT_LIST_MEDIUM_URL_OPT
        }
        this.callAjax = $.ajax({
            url: SYSTEMMAILTARGETSENTMAILMANAGEMENT_HRAccount_by_Organization,
            type: "GET",
            async: true,
            cache: false,
            timeout: 30000,
            success: function(data) {
                HRAccountHRAccountManagementList_CACHE = []
                // console.log(data);
                if (data.hasOwnProperty('results')) {
                    for (var i = 0; i < data.results.length; i++) {
                        var x = new HRAccountHRAccountManagement_ListItem(data.results[i]);
                        HRAccountHRAccountManagementList_CACHE.push(x);
                    }
                } else {
                    for (var i = 0; i < data.length; i++) {
                        var x = new HRAccountHRAccountManagement_ListItem(data[i]);
                        HRAccountHRAccountManagementList_CACHE.push(x);
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
        return HRAccountHRAccountManagementList_CACHE;
    }

}


// ########## [Get List, push options to Select] Handle Event function ##############
function LoadHRAccountHRAccountManagementList() {

    if ($(".hraccountmanagement-hraccount-select").length > 0) {
        var obj = new HRAccountHRAccountManagementList();
        HRAccountHRAccountManagementList_CACHE = obj.getListApi();
        
        // List lưu giá trị hiện tại của obj
        var listObjValue = []
        obj.callAjax.then(function(data) {
            // Lấy giá trị của thuộc tính 'value' và lưu vào list
            $(".hraccountmanagement-hraccount-select option").each(function() {
                var optionValue = $(this).val();
                if ($(this).closest('table').length != true && optionValue !== undefined && optionValue !== null && optionValue !== "") { 
                    if (listObjValue.includes(optionValue) !== true) {
                        listObjValue.push(optionValue);
                    }
                }
            });

            if (data.hasOwnProperty('results')) {

                    for (var i = 0; i < data.results.length; i++) {
                        var x = new HRAccountHRAccountManagement_ListItem(data.results[i]);
                        if (x.uuid in listObjValue) {
                            continue;
                        }
                        $(".hraccountmanagement-hraccount-select").append(new Option(x.name, x.uuid));
                    }
                } else {
                    for (var i = 0; i < data.length; i++) {
                        var x = new HRAccountHRAccountManagement_ListItem(data[i]);
                        if (listObjValue.includes(x.uuid)) {
                            continue;
                        }
                        $(".hraccountmanagement-hraccount-select").append(new Option(x.name, x.uuid));
                    }
                    $(".hraccountmanagement-hraccount-select").select2();
            }
        })
        
    }
}
function formatHRAccountListEmail(option) {
    if (!option.id) {
        return option.text; 
    }
    valEmail = option.text;
    valName = option.element.getAttribute("name")
    if (valName === null || valName === undefined) {
        valName = "Tất cả";
    }
    valDes = ""
    if(valEmail != ""){
        valDes = valEmail
    }
    if(valEmail == "Tất cả")
        valDes = ""
    var value = `
    <div class="d-flex align-items-center">
        <!--begin::Username-->
        <div class="d-flex flex-column">
            <div class="fw-semibold align-items-center fs-6">${valName}</div>
            <div class="text-muted fs-7">${valDes}</div>
        </div>
        <!--end::Username-->
    </div>
    `
    return value;
};

// ########## [Get List, push options to Select] Handle Event function ##############
function LoadHRAccountHRAccountManagementListEmail() {

    if ($(".hraccountmanagement-hraccount-select-email").length > 0) {
        var obj = new HRAccountHRAccountManagementList();
        HRAccountHRAccountManagementList_CACHE = obj.getListApi();
        
        // List lưu giá trị hiện tại của obj
        var listObjValue = []
        obj.callAjax.then(function(data) {
            // Lấy giá trị của thuộc tính 'value' và lưu vào list
            $(".hraccountmanagement-hraccount-select-email option").each(function() {
                var optionValue = $(this).val();
                if ($(this).closest('table').length != true && optionValue !== undefined && optionValue !== null && optionValue !== "") { 
                    if (listObjValue.includes(optionValue) !== true) {
                        listObjValue.push(optionValue);
                    }
                }
            });

            if (data.hasOwnProperty('results')) {

                    for (var i = 0; i < data.results.length; i++) {
                        var x = new HRAccountHRAccountManagement_ListItem(data.results[i]);
                        if (x.uuid in listObjValue) {
                            continue;
                        }
                        $(".hraccountmanagement-hraccount-select-email").append(new Option(x.name, x.uuid));
                    }
                } else {
                    for (var i = 0; i < data.length; i++) {
                        var x = new HRAccountHRAccountManagement_ListItem(data[i]);
                        var defalutSelected = false;
                        var selected = false;
                        if (listObjValue.includes(x.uuid)) {
                            // continue;
                            defalutSelected = true;
                            selected = true;
                            // Sử dụng jQuery để tìm select theo class
                            var select = $(".hraccountmanagement-hraccount-select-email");
                            // Sử dụng phương thức filter để lọc ra option cần xóa
                            var optionDel = select.find("option[value='" + x.uuid + "']");
                            // Xóa option khỏi danh sách
                            optionDel.remove();
                            // console.log("huy---->", optionDel)
                        }

                        var newOption = new Option(x.email, x.uuid, defalutSelected, selected);
                        $(newOption).attr("email", x.email);
                        $(newOption).attr("name", x.name);

                        $(".hraccountmanagement-hraccount-select-email").append(newOption).trigger('change');
                    }
                    $(".hraccountmanagement-hraccount-select-email").select2({
                        templateResult: formatHRAccountListEmail,
                        // templateSelection: formatEmployeeList,
                        escapeMarkup: function (m) {
                            return m;
                        }
                    });
            }
        })
        
    }
}
$(document).ready(function() {
    // LoadHRAccountHRAccountManagementList();
    LoadHRAccountHRAccountManagementListEmail();
    $(".hraccountmanagement-hraccount-select-email").on("select2:unselect", function (e) {
        var removedValue = e.params.data.text; // Lấy giá trị của option bị xóa
        console.log("Giá trị bị xóa:", removedValue);
        
        if (removedValue !== 'Tất cả') { // Thay 'your_all_option_value' bằng giá trị uuid của option "Tất cả"
            $(".select2-selection__choice[title='Tất cả']").css("display", "none");
        }
    });
})
