
/**
 *  SystemMailTargetSentMailManagementClasses.js created by @truongnv(truongg.nv@gmail.com) 
 *  Cá nhân/nhóm nhận mail
 *  Định nghĩa, xử lý các sự kiện và các thông tin liên quan đến Cá nhân/nhóm nhận mail
 *  Tạo bởi @truongnv on 24/8/2023
 *  Model : SystemMailTarget ($app_name_verbose)
 */

class SystemMailTargetSentMailManagementTnvRow {

    constructor($this) {
        this.row = $($this);
        this.order = parseInt($($this).find(".stt-systemmailtarget").html());
        this.status = $($this).attr("status");
        this.is_new = $($this).attr("is-new");
        this.uuid = $($this).attr("uuid");
        // this.name = $this;
    }
    delete(table) {
        var is_delete = false;
        if (this.is_new == "true") {
            this.row.remove();
            //$model_notice_delete_success
            this.order -= 1;
            is_delete = true;
        } else if (this.is_new == "template") {
            toastr.warning('Bạn không thể xóa dòng này, đây là dòng mẫu!');
        } else {
            this.order -= 1;
            is_delete = true;
            this.row.attr("status", "deleted");
            this.row.hide();
        }
        new SystemMailTargetSentMailManagementTnvTable(table.$this).reOrder();

        return is_delete;

    }
    remove() {
        this.row.remove();
    }
    get() {
        var obj = new Object();
        var formData = new FormData();
        $(this.row).find(':input').each(function() {
            var attr = $(this).attr('name');
            var type = $(this).attr('type');
            var date = $(this).attr('data-datepicker');
            if (typeof attr !== 'undefined' && attr !== false) {
                if (typeof date !== 'undefined' && date !== false) {
                    var datetime_format = $(this).attr("format");
                    var dateVal = strptime($(this).val(), datetime_format);
                    formData.append(attr, dateVal);
                    obj[attr] = dateVal;
                } else {

                    if (type == 'file') {
                        var files = $(this)[0].files;
                        // Check file selected or not
                        if (files.length > 0) {
                            formData.append($(this).attr('name'), files[0]);
                        }
                    } else if (type == 'checkbox') {
                        formData.append($(this).attr('name'), $(this).is(":checked"));
                        obj[attr] = $(this).is(":checked");
                    } else if (type == 'radio') {
                        if ($(this).is(":checked")) {
                            //# formData.set($(this).attr('name'),  $(this).val());
                            obj[attr] = $(this).val();
                        }
                    } else {
                        obj[attr] = $(this).val();
                    }
                }
            }
        });
        return obj;
    }

    getFormData() {
        // var obj = new Object();
        var formData = new FormData();
        $(this.row).find(':input').each(function() {
            var attr = $(this).attr('inline_field_name');
            var type = $(this).attr('type');
            var date = $(this).attr('data-datepicker');
            if (typeof attr !== 'undefined' && attr !== false) {
                if (typeof date !== 'undefined' && date !== false) {
                    var datetime_format = $(this).attr("format");
                    formData.append($(this).attr('inline_field_name'), strptime($(this).val(), datetime_format));
                } else {
                    if (type == 'file') {
                        var files = $(this)[0].files;
                        // Check file selected or not
                        if (files.length > 0) {
                            formData.append($(this).attr('inline_field_name'), files[0]);
                        }
                    } else if (type == 'checkbox') {
                        formData.append($(this).attr('inline_field_name'), $(this).is(":checked"));
                    } else if (type == 'radio') {

                        if ($(this).is(":checked")) {
                            formData.set($(this).attr('inline_field_name'), $(this).val());
                        }
                    } else {
                        formData.append($(this).attr('inline_field_name'), $(this).val());
                    }
                }
            }
        });
        return formData;
    }
    set(data) {

        var $this = this;
        $this.row.attr("status", "added");
        $this.row.attr("is-new", "false");
        $this.row.attr("uuid", data["uuid"]);
        for (const property in data) {
            console.log(`property = ` + property + ": " + data[property]);
            if ($this.row.find("[inline_field_name=" + property + "]").length > 0) {
                console.log("founded " + property);
                var ele = $this.row.find("[inline_field_name=" + property + "]");
                if (ele.length > 0) {
                    
                    var type = ele.attr("type");
                    if (type == "file") {
                        ele.hide();
                        var value = data[property];
                        var filename = value.split('/')[value.split('/').length - 1]
                        var file_html = "";
                        var nameDeleteActions = type + "SystemMailTargetSentMailManagementInlineDeletedAttacthment"
                        file_html += `
                                <div class="form-group row col-xl-8 table-hover mt-1" style="background-color:gainsboro;height: 25px;" id="` + data["uuid"] + `AttachmentDivId">
                                    <div class="col-xl-10 view-attachment-class text-break text-truncate" >
                                        <span><a style="color:cornflowerblue" href="` + value + `"><p><b>` + filename + `</b></p></a></span>
                                    </div>
                                    <div class="col-xl-2 text-end">
                                        <i class="fas fa-times" style="color:gray" file-uuid="` + data["uuid"] + `" id="` + data["uuid"] + `btnDeleteId" onclick="` + nameDeleteActions + `(this)"></i>
                                    </div>
                                </div>
                            `;
                        ele.closest("td").append(file_html);
                    } 
                    else {
                        if (ele.attr("data-datepicker") != null) {
                            var crr_format = ele.attr("format");
                        
                            ele.val(strftime(data[property], crr_format));
                        } else {
                            ele.val(data[property]);
                            
                        if(property == "email_template")
                        try{
                                var ele_email_template = $this.row.find("[inline_field_name=" + property + "]");

                                var email_template_value = data["email_template"]["uuid"];
                                ele_email_template.val(email_template_value).change();

                                var email_template_select_value = ele.val();

                                if(email_template_select_value == undefined || email_template_select_value == null){
                                    var email_template_name = data["email_template"]["name"];
                                    ele_email_template.append(new Option(email_template_name + "(đã lưu)", email_template_value,true,true));
                                }
                        }
                        catch(err) {
                            console.log('err = ', err);
                        }
                    
                        if(property == "target")
                        try{
                            
                                var ele_target = $this.row.find("[inline_field_name=" + property + "]");
                                var arr_value = [];
                                for(var i in data["target"]){
                                    arr_value.push(data["target"][i]["uuid"]);
                                }
                                ele_target.val(arr_value).change();
                                var target_select_value = ele.val();

                                if(target_select_value == undefined || target_select_value == null || target_select_value.length == 0){
                                    for(var i in data["target"]){
                                    
                                        arr_value.push(data["target"][i]["uuid"]);
                                        var target_value = data["target"][i]["uuid"];
                                        var target_name = data["target"][i]["name"];
                                        ele_target.append(new Option(target_name + "(đã lưu)", target_value,true,true));
                                    }
                                    
                                }
                        }
                        catch(err) {
                            console.log('err = ', err);
                        }
                    
                        if(property == "organization")
                        try{
                                var ele_organization = $this.row.find("[inline_field_name=" + property + "]");

                                var organization_value = data["organization"]["uuid"];
                                ele_organization.val(organization_value).change();

                                var organization_select_value = ele.val();

                                if(organization_select_value == undefined || organization_select_value == null){
                                    var organization_name = data["organization"]["name"];
                                    ele_organization.append(new Option(organization_name + "(đã lưu)", organization_value,true,true));
                                }
                        }
                        catch(err) {
                            console.log('err = ', err);
                        }
                    
                        if(property == "hr_created_by")
                        try{
                                var ele_hr_created_by = $this.row.find("[inline_field_name=" + property + "]");

                                var hr_created_by_value = data["hr_created_by"]["uuid"];
                                ele_hr_created_by.val(hr_created_by_value).change();

                                var hr_created_by_select_value = ele.val();

                                if(hr_created_by_select_value == undefined || hr_created_by_select_value == null){
                                    var hr_created_by_name = data["hr_created_by"]["name"];
                                    ele_hr_created_by.append(new Option(hr_created_by_name + "(đã lưu)", hr_created_by_value,true,true));
                                }
                        }
                        catch(err) {
                            console.log('err = ', err);
                        }
                    
                        if(property == "hr_updated_by")
                        try{
                                var ele_hr_updated_by = $this.row.find("[inline_field_name=" + property + "]");

                                var hr_updated_by_value = data["hr_updated_by"]["uuid"];
                                ele_hr_updated_by.val(hr_updated_by_value).change();

                                var hr_updated_by_select_value = ele.val();

                                if(hr_updated_by_select_value == undefined || hr_updated_by_select_value == null){
                                    var hr_updated_by_name = data["hr_updated_by"]["name"];
                                    ele_hr_updated_by.append(new Option(hr_updated_by_name + "(đã lưu)", hr_updated_by_value,true,true));
                                }
                        }
                        catch(err) {
                            console.log('err = ', err);
                        }
                    
                        }
                        console.log("set value for name: " + property + " value: " + data[property]);
                    }

        
                }

            }
        }
        $this.row.find(":input").change(function(){
            var ccr_status = $(this).closest("tr").attr("status");
            if(ccr_status == "added"){
                 $(this).closest("tr").attr("status","changed");
            }
        })
    }
    add() {

    }
    setOrder(number) {
        this.row.find('.stt-systemmailtarget').html(number);
    }
}

class SystemMailTargetSentMailManagementTnvColumn {

    constructor($this) {
        this.name = $($this).attr("attr-name");
    }
    delete() {

    }
    get() {

    }
    set() {

    }
    add() {

    }
}
class SystemMailTargetSentMailManagementTnvTable {
    totalRow;
    columns = [];
    rows = [];
    current_num = 0;
    constructor($this) {
        this.$this = $this;
        this.tableId = $this.id;
        this.table = $($this);
        var columns = new Array();
        var rows = new Array();
        this.thead = $($this).find("thead");
        this.tbody = $($this).find("tbody");
        this.thead.find("th").each(function() {
            var column = new SystemMailTargetSentMailManagementTnvColumn(this);
            console.log(column);
            columns.push(column);
        })
        this.columns = columns;
        var template;
        this.tbody.find("tr").each(function() {
            if ($(this).attr("is-new") == "template") {
                template = new SystemMailTargetSentMailManagementTnvRow(this);
            } else {
                var row = new SystemMailTargetSentMailManagementTnvRow(this);
                console.log(row);
                rows.push(row);
            }

        })
        this.template = template;
        this.rows = rows;
        this.current_num = this.rows.length;


    }
    //làm tươi bảng
    refresh() {
        this.rows.forEach(row => {
            console.log(row);
            row.remove();
        })
        this.current_num = 0;
        this.table.attr("parent-attr-uuid", "");
    }
    // thêm dòng trắng
    addRow() {
        // Xóa select2 ở thẻ mẫu
        this.template.row.find("select").each(function(){
            if ($(this).hasClass("select2-hidden-accessible")) {
                $(this).select2('destroy');         
                $(this).removeAttr('data-select2-id');         
            }
        })
        var new_row = this.template.row.clone(true);
        new_row = new_row.removeClass("d-none").attr("is-new", "true").attr("status", "new");
        new_row.appendTo(this.tbody);
        // Đăng ký cho phép sử dụng select2
        new_row.find("select").select2()
        // Đăng ký sự kiện cho
        this.current_num += 1;
        // var datepickers = [].slice.call(d.querySelectorAll('[data-datepicker]'))
        // var datepickersList = datepickers.map(function(el) {
        //     return new Datepicker(el, {
        //         buttonClass: 'btn',
        //         format: 'dd/mm/yyyy'
        //     });
        // })
        // đăng ký sử dụng datetime
        new_row.find("[data-datepicker]").each(function(){
            var crr_format = $(this).attr("format");
            if (crr_format !== null && crr_format !== "" && crr_format !== undefined){
                if(crr_format == "DD/MM/YYYY"){
                
                    $(this).flatpickr({
                        dateFormat: "d/m/Y",
                    });
                }else if (crr_format == "DD/MM/YYYY HH:mm"){
                    $(this).flatpickr({
                        enableTime: true,
                        dateFormat: "d/m/Y H:i",
                    });
                }else if(crr_format == "HH:mm"){
                    $(this).flatpickr({
                            enableTime: true,
                            noCalendar: true,
                            dateFormat: "H:i",
                            time_24hr: true
                    });
                }
            }
        })
        new_row.find(".stt-systemmailtarget").html(this.current_num);
        var this_table = this;
        new_row.delegate('.SystemMailTarget-SentMailManagement--DeleteRowBtnId', 'click', function() {
            var crr_delte_row = $(this).closest("tr");
            var delete_row = new SystemMailTargetSentMailManagementTnvRow(crr_delte_row);
            var table = new SystemMailTargetSentMailManagementTnvTable(this_table.$this);
            table.deleteRow(delete_row);
        });
        new_row.delegate('.SystemMailTarget-SentMailManagement--CloneRowBtnId', 'click', function() {
            var crr_clone_row = $(this).closest("tr");
            var clone_row = crr_clone_row.clone(true).attr("is-new", "true").attr("status", "new");
            clone_row.appendTo(this_table.tbody);
            clone_row.find("input").change();
            var table = new SystemMailTargetSentMailManagementTnvTable(this_table.$this);
            table.reOrder();

        });

        return new_row;
    }
    // xóa dòng
    deleteRow(thisRow) {
        var row = thisRow;
        var table = this;
        var obj_name = "dòng " + row.order
        Swal.fire({
        html: "Bạn chắc muốn xóa Cá nhân/nhóm nhận mail <b>" + obj_name + "</b>?",
        icon: "warning",
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonText: "Đồng ý",
        cancelButtonText: "Hủy bỏ",
        customClass: {
            confirmButton: "btn fw-bold btn-danger",
            cancelButton: "btn fw-bold btn-active-light-primary"
        }
    }).then(function (result) {
        if (result.value) {
            row.delete(table)

            Swal.fire({
                html: "Bạn đã xóa <b>" + obj_name + "</b>!.",
                icon: "success",
                buttonsStyling: false,
                confirmButtonText: "Ok",
                customClass: {
                    confirmButton: "btn fw-bold btn-primary",
                }
            })
        } else if (result.dismiss === 'cancel') {
            Swal.fire({
                html: "Hủy xóa <b>" + obj_name + "</b>.",
                icon: "error",
                buttonsStyling: false,
                confirmButtonText: "Ok",
                customClass: {
                    confirmButton: "btn fw-bold btn-primary",
                }
            });
        }
    });
    }
    getFormDataRows() {
        var lstFormData = [];
        this.rows.forEach(row => {
            var obj = row.getFormData();
            lstFormData.push(obj);
        })
        return lstFormData;
    }
    getObjectRows() {
        var lst = [];
        this.rows.forEach(row => {
            var obj = row.get();
            lst.push(obj);
        })
        return lst;
    }
    // list danh sách
    bindRows(lstData = null) {
        this.refresh();
        var table = this;
        if (lstData != null) {
            lstData.forEach(data => {
                var empty_row = new SystemMailTargetSentMailManagementTnvRow(table.addRow());
                empty_row.set(data);
            });
        } else {
            console.log("list Empty");
        }

    }

    reOrder() {
        this.rows.forEach(row => {
            var order = this.rows.indexOf(row) + 1;
            console.log(row);
            row.setOrder(order);
        })
        this.current_num = this.rows.length;
    }

}


// ########## [Create New Row] Clicked Handle function ##############
$(document).ready(function() {
    $(".SystemMailTargetSentMailManagement-createAddInlineTableBtnId").click(function() {
        var table = new SystemMailTargetSentMailManagementTnvTable($("#SystemMailTargetSentMailManagementCreateInlineTableId"));
        table.addRow();
    });
});

// ########## [Edit New Row] Clicked Handle function ##############
$(document).ready(function() {
    $(".SystemMailTargetSentMailManagement-editAddInlineTableBtnId").click(function() {
        var table = new SystemMailTargetSentMailManagementTnvTable($("#SystemMailTargetSentMailManagementEditInlineTableId"));
        table.addRow();
    });
});


function SystemMailTargetSaveInlineTable(TableId = 'SystemMailTargetSentMailManagementcreateInlineTableTableId', parent_name = null, parent_value = null, form_data_parent = null) {
    console.log("tableBody: " + TableId);

    var depend = $("#" + TableId).attr("depend");
    var parent_attr_name = $("#" + TableId).attr("parent-attr-name");
    var parent_attr_uuid = $("#" + TableId).attr("parent-attr-uuid");
    if (parent_name != null) {
        parent_attr_name = parent_name
    }
    if (parent_value != null) {
        parent_attr_uuid = parent_value
    }
    var add = $("#" + TableId).find("tr[status=new]").length;
    console.log("New TableOject: " + add);
    if (add > 0) {
        $("#" + TableId).find("tr[status=new]").each(function() {
            $(this).attr("parent-attr-name", parent_attr_name);
            $(this).attr("parent-attr-uuid", parent_attr_uuid);
            $(this).attr("depend", depend);
            if (SystemMailTargetvalidate(this)) {
                var obj = new SystemMailTargetSentMailManagement();
                obj.tCreateNewPostRowApi(this, form_data_parent);
                $(this).css("background-color", "green");
            }
        })
    }
    var update = $("#" + TableId).find("tr[status=changed]").length;
    console.log("Update TableOject: " + update);
    if (update > 0) {
        $("#" + TableId).find("tr[status=changed]").each(function() {
            $(this).attr("parent-attr-name", parent_attr_name);
            $(this).attr("parent-attr-uuid", parent_attr_uuid);
            $(this).attr("depend", depend);
            if (SystemMailTargetvalidate(this)) {
                var obj = new SystemMailTargetSentMailManagement();
                obj.tUpdateNewPostRowApi(this, form_data_parent);
                $(this).css("background-color", "green");
            }
        })
    }
    var deleted = $("#" + TableId).find("tr[status=deleted]").length;
    console.log("Deleted TableOject: " + deleted);
    if (deleted > 0) {
        $("#" + TableId).find("tr[status=deleted]").each(function() {
            $(this).attr("parent-attr-name", parent_attr_name);
            $(this).attr("parent-attr-uuid", parent_attr_uuid);
            $(this).attr("depend", depend);
            if (SystemMailTargetvalidate(this)) {
                var uuid = $(this).attr("uuid");
                var obj = new SystemMailTargetSentMailManagement();
                obj.tDeleteApi(uuid);
                $(this).remove();
            }
        })
    }
    // $("#"+TableId).find("tr[is-new=true]").length ;

}



// ########## [Fill Table bySearch] Handle Event function ##############
var SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_INLINE_TABLE_COUNT;
function SystemMailTargetSentMailManagementFillTableInForm(page=1,search_data=null,tableId=null,action="detail"){
        var obj = new SystemMailTargetSentMailManagement();
        var results = obj.tFilterDataLargeApi(page,"&" + search_data);
        obj.callAjax.then(function(data) {
            SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_INLINE_TABLE_COUNT = 1;

            if(page > 1){
            SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_INLINE_TABLE_COUNT = 1 + record_in_page*page - record_in_page;
            }
            if(action=="detail"){
                $("#"+tableId).find('tbody').empty();
                for (var i = 0; i < results.length; i++){
                try{
                    console.log('results[i] = ', results[i]);
                    results[i].tFillTable4(tableId,SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_INLINE_TABLE_COUNT,action);
                    SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_INLINE_TABLE_COUNT++;
                }
                catch(err){
                    console.log(err);
                }
                }
            }
            else if(action=="edit"){
                var table = new SystemMailTargetSentMailManagementTnvTable($("#"+tableId)[0]);
                table.bindRows(results);
            }
        })
        

}
// ########## [Event Validate Info] Clicked Handle function ##############

function SystemMailTargetvalidate($this) {
    var is_ok = true;

    console.log($($this).find(".name-SystemMailTarget-SentMailManagement").val());
    var name = $($this).find(".name-SystemMailTarget-SentMailManagement").val()
    if (!SystemMailTargetStringType(name) && !SystemMailTargetCheckNull(name)) {
        toastr.warning('"tên Cách hiển thị thao tác": Sai định dạng hoặc chưa điền đầy đủ thông tin! ');
        is_ok = false;
    }

    console.log($($this).find(".code-SystemMailTarget-SentMailManagement").val());
    var code = $($this).find(".code-SystemMailTarget-SentMailManagement").val()
    if (!SystemMailTargetStringType(code) && !SystemMailTargetCheckNull(code)) {
        toastr.warning('"mã Cách hiển thị thao tác tự sinh": Sai định dạng hoặc chưa điền đầy đủ thông tin! ');
        is_ok = false;
    }

    console.log($($this).find(".friendly_code-SystemMailTarget-SentMailManagement").val());
    var friendly_code = $($this).find(".friendly_code-SystemMailTarget-SentMailManagement").val()
    if (!SystemMailTargetStringType(friendly_code) && !SystemMailTargetCheckNull(friendly_code)) {
        toastr.warning('"mã người dùng cấu hình": Sai định dạng hoặc chưa điền đầy đủ thông tin! ');
        is_ok = false;
    }

    console.log($($this).find(".descriptions-SystemMailTarget-SentMailManagement").val());
    var descriptions = $($this).find(".descriptions-SystemMailTarget-SentMailManagement").val()
    if (!SystemMailTargetStringType(descriptions) && !SystemMailTargetCheckNull(descriptions)) {
        toastr.warning('"mô tả": Sai định dạng hoặc chưa điền đầy đủ thông tin! ');
        is_ok = false;
    }

    return is_ok;

}



// ########## [ReDraw Order] Clicked Handle function ##############
function SystemMailTargetReDrawOrder(table) {
    var count = 0;
    $(table + ' > tr').each(function() {
        $(this).find(".stt-systemmailtarget").html(count);
        count += 1;
    });
    //count_row_SystemMailTarget=$(table+'> tr').length-1;
}




// ########## [Validate for SomeType] ##############
function SystemMailTargetIsUUID(uuid) {
    let s = "" + uuid;

    s = s.match('^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$');
    if (s === null) {
        return false;
    }
    return true;
}

function SystemMailTargetDateType(value) {
    if (SystemMailTargetCheckNull(value)) {
        return false;
    }
    var value = new Date(moment(value, "DD/MM/YYYY"));
    console.log(time instanceof Date && !isNaN(time))
    if (time instanceof Date && !isNaN(time)) {
        return false;
    }
    return true;
}

function SystemMailTargetStringType(value) {
    if (SystemMailTargetCheckNull(value)) {
        return false;
    }
    return true;
}

function SystemMailTargetIntegerType(value) {
    return $.isNumeric(value);
}

function SystemMailTargetCheckNull(value) {
    is_valid = false;
    if (value == null) return true;
    value = value.trim();
    if (value === undefined || value === "" || value === " ") {
        is_valid = true;
    }
    return is_valid;
}

