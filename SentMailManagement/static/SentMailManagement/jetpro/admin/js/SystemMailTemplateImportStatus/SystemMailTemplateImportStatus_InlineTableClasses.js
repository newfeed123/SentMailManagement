
/**
 *  SystemMailTemplateImportStatusSentMailManagementClasses.js created by @truongnv(truongg.nv@gmail.com) 
 *  Quản lý trạng thái tải lên Mẫu email
 *  Định nghĩa, xử lý các sự kiện và các thông tin liên quan đến Trạng thái tải lên Mẫu email
 *  Tạo bởi @truongnv on 8/8/2023
 *  Model : SystemMailTemplateImportStatus ($app_name_verbose)
 */

class SystemMailTemplateImportStatusSentMailManagementTnvRow {

    constructor($this) {
        this.row = $($this);
        this.order = parseInt($($this).find(".stt-systemmailtemplateimportstatus").html());
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
        new SystemMailTemplateImportStatusSentMailManagementTnvTable(table.$this).reOrder();

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
                        var nameDeleteActions = type + "SystemMailTemplateImportStatusSentMailManagementInlineDeletedAttacthment"
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
                            if (type == "checkbox") {
                                if (data[property] == true) {
                                    ele.attr("checked", true);
                                }
                                else if (data[property] == false){
                                    ele.removeAttr("checked");
                                }
                            }
                            ele.val(data[property]);
                            
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
        this.row.find('.stt-systemmailtemplateimportstatus').html(number);
    }
}

class SystemMailTemplateImportStatusSentMailManagementTnvColumn {

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
class SystemMailTemplateImportStatusSentMailManagementTnvTable {
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
            var column = new SystemMailTemplateImportStatusSentMailManagementTnvColumn(this);
            console.log(column);
            columns.push(column);
        })
        this.columns = columns;
        var template;
        this.tbody.find("tr").each(function() {
            if ($(this).attr("is-new") == "template") {
                template = new SystemMailTemplateImportStatusSentMailManagementTnvRow(this);
            } else {
                var row = new SystemMailTemplateImportStatusSentMailManagementTnvRow(this);
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
                        locale: defaultLocale,
                    });
                }else if (crr_format == "DD/MM/YYYY HH:mm:ss"){
                    $(this).flatpickr({
                        enableTime: true,
                        dateFormat: "d/m/Y H:i",
                    });
                }else if(crr_format == "HH:mm"){
                    $(this).flatpickr({
                            enableTime: true,
                            locale: defaultLocale,
                            noCalendar: true,
                            dateFormat: "H:i",
                            time_24hr: true
                    });
                }
            }
        })
        new_row.find(".stt-systemmailtemplateimportstatus").html(this.current_num);
        var this_table = this;
        new_row.delegate('.SystemMailTemplateImportStatus-SentMailManagement--DeleteRowBtnId', 'click', function() {
            var crr_delte_row = $(this).closest("tr");
            var delete_row = new SystemMailTemplateImportStatusSentMailManagementTnvRow(crr_delte_row);
            var table = new SystemMailTemplateImportStatusSentMailManagementTnvTable(this_table.$this);
            table.deleteRow(delete_row);
        });
        new_row.delegate('.SystemMailTemplateImportStatus-SentMailManagement--CloneRowBtnId', 'click', function() {
            var crr_clone_row = $(this).closest("tr");
            var clone_row = crr_clone_row.clone(true).attr("is-new", "true").attr("status", "new");
            clone_row.appendTo(this_table.tbody);
            clone_row.find("input").change();
            var table = new SystemMailTemplateImportStatusSentMailManagementTnvTable(this_table.$this);
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
        html: "Bạn chắc muốn xóa Trạng thái tải lên Mẫu email <b>" + obj_name + "</b>?",
        icon: "warning",
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonText: "Đồng ý",
        cancelButtonText: "Hủy bỏ",
        customClass: {
            confirmButton: "btn fw-bold btn-danger",
            cancelButton: "btn fw-bold btn-light"
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
                var empty_row = new SystemMailTemplateImportStatusSentMailManagementTnvRow(table.addRow());
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
    $(".SystemMailTemplateImportStatusSentMailManagement-createAddInlineTableBtnId").click(function() {
        var table = new SystemMailTemplateImportStatusSentMailManagementTnvTable($("#SystemMailTemplateImportStatusSentMailManagementCreateInlineTableId"));
        table.addRow();
    });
});

// ########## [Edit New Row] Clicked Handle function ##############
$(document).ready(function() {
    $(".SystemMailTemplateImportStatusSentMailManagement-editAddInlineTableBtnId").click(function() {
        var table = new SystemMailTemplateImportStatusSentMailManagementTnvTable($("#SystemMailTemplateImportStatusSentMailManagementEditInlineTableId"));
        table.addRow();
    });
});


function SystemMailTemplateImportStatusSaveInlineTable(TableId = 'SystemMailTemplateImportStatusSentMailManagementcreateInlineTableTableId', parent_name = null, parent_value = null, form_data_parent = null) {
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
            if (SystemMailTemplateImportStatusvalidate(this)) {
                var obj = new SystemMailTemplateImportStatusSentMailManagement();
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
            if (SystemMailTemplateImportStatusvalidate(this)) {
                var obj = new SystemMailTemplateImportStatusSentMailManagement();
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
            if (SystemMailTemplateImportStatusvalidate(this)) {
                var uuid = $(this).attr("uuid");
                var obj = new SystemMailTemplateImportStatusSentMailManagement();
                obj.tDeleteApi(uuid);
                $(this).remove();
            }
        })
    }
    // $("#"+TableId).find("tr[is-new=true]").length ;

}



// ########## [Fill Table bySearch] Handle Event function ##############
var SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_INLINE_TABLE_COUNT;
function SystemMailTemplateImportStatusSentMailManagementFillTableInForm(page=1,search_data=null,tableId=null,action="detail"){
        var obj = new SystemMailTemplateImportStatusSentMailManagement();
        var results = obj.tFilterDataLargeApi(page,"&" + search_data);
        obj.callAjax.then(function(data) {
            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_INLINE_TABLE_COUNT = 1;

            if(page > 1){
            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_INLINE_TABLE_COUNT = 1 + record_in_page*page - record_in_page;
            }
            if(action=="detail"){
                $("#"+tableId).find('tbody').empty();
                for (var i = 0; i < results.length; i++){
                try{
                    console.log('results[i] = ', results[i]);
                    results[i].tFillTable4(tableId,SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_INLINE_TABLE_COUNT,action);
                    SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_INLINE_TABLE_COUNT++;
                }
                catch(err){
                    console.log(err);
                }
                }
            }
            else if(action=="edit"){
                var table = new SystemMailTemplateImportStatusSentMailManagementTnvTable($("#"+tableId)[0]);
                table.bindRows(results);
            }
        })
        

}
// ########## [Event Validate Info] Clicked Handle function ##############

function SystemMailTemplateImportStatusvalidate($this) {
    var is_ok = true;

    console.log($($this).find(".name-SystemMailTemplateImportStatus-SentMailManagement").val());
    var name = $($this).find(".name-SystemMailTemplateImportStatus-SentMailManagement").val()
    if (!SystemMailTemplateImportStatusStringType(name) && !SystemMailTemplateImportStatusCheckNull(name)) {
        toastr.warning('"tên Cách hiển thị thao tác": Sai định dạng hoặc chưa điền đầy đủ thông tin! ');
        is_ok = false;
    }

    console.log($($this).find(".code-SystemMailTemplateImportStatus-SentMailManagement").val());
    var code = $($this).find(".code-SystemMailTemplateImportStatus-SentMailManagement").val()
    if (!SystemMailTemplateImportStatusStringType(code) && !SystemMailTemplateImportStatusCheckNull(code)) {
        toastr.warning('"mã Cách hiển thị thao tác tự sinh": Sai định dạng hoặc chưa điền đầy đủ thông tin! ');
        is_ok = false;
    }

    console.log($($this).find(".friendly_code-SystemMailTemplateImportStatus-SentMailManagement").val());
    var friendly_code = $($this).find(".friendly_code-SystemMailTemplateImportStatus-SentMailManagement").val()
    if (!SystemMailTemplateImportStatusStringType(friendly_code) && !SystemMailTemplateImportStatusCheckNull(friendly_code)) {
        toastr.warning('"mã người dùng cấu hình": Sai định dạng hoặc chưa điền đầy đủ thông tin! ');
        is_ok = false;
    }

    console.log($($this).find(".descriptions-SystemMailTemplateImportStatus-SentMailManagement").val());
    var descriptions = $($this).find(".descriptions-SystemMailTemplateImportStatus-SentMailManagement").val()
    if (!SystemMailTemplateImportStatusStringType(descriptions) && !SystemMailTemplateImportStatusCheckNull(descriptions)) {
        toastr.warning('"mô tả": Sai định dạng hoặc chưa điền đầy đủ thông tin! ');
        is_ok = false;
    }

    return is_ok;

}



// ########## [ReDraw Order] Clicked Handle function ##############
function SystemMailTemplateImportStatusReDrawOrder(table) {
    var count = 0;
    $(table + ' > tr').each(function() {
        $(this).find(".stt-systemmailtemplateimportstatus").html(count);
        count += 1;
    });
    //count_row_SystemMailTemplateImportStatus=$(table+'> tr').length-1;
}




// ########## [Validate for SomeType] ##############
function SystemMailTemplateImportStatusIsUUID(uuid) {
    let s = "" + uuid;

    s = s.match('^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$');
    if (s === null) {
        return false;
    }
    return true;
}

function SystemMailTemplateImportStatusDateType(value) {
    if (SystemMailTemplateImportStatusCheckNull(value)) {
        return false;
    }
    var value = new Date(moment(value, "DD/MM/YYYY"));
    console.log(time instanceof Date && !isNaN(time))
    if (time instanceof Date && !isNaN(time)) {
        return false;
    }
    return true;
}

function SystemMailTemplateImportStatusStringType(value) {
    if (SystemMailTemplateImportStatusCheckNull(value)) {
        return false;
    }
    return true;
}

function SystemMailTemplateImportStatusIntegerType(value) {
    return $.isNumeric(value);
}

function SystemMailTemplateImportStatusCheckNull(value) {
    is_valid = false;
    if (value == null) return true;
    value = value.trim();
    if (value === undefined || value === "" || value === " ") {
        is_valid = true;
    }
    return is_valid;
}

