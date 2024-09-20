

"use strict";
var MPSSystemMailTemplateImportDataSentMailManagementEditSystemMailTemplateImportData_ckeditor_list = {}

// Class definition
var MPSSystemMailTemplateImportDataSentMailManagementEditSystemMailTemplateImportData = function () {
    // Shared variables
    const form = document.getElementById('SystemMailTemplateImportDataSentMailManagementEditId_form');
    
    // Init ck editor
    const initCKEditor = () => {
        // Define all elements for ck editor
        const elements = [
            '#json_import_dataSystemMailTemplateImportDataSentMailManagementEditInputId','#json_check_validationSystemMailTemplateImportDataSentMailManagementEditInputId','#json_fail_dataSystemMailTemplateImportDataSentMailManagementEditInputId', 
        ];

        // Loop all elements
        elements.forEach(element => {
            // Get ck_editor element
            let ck_editor = document.querySelector(element);
            let ck_editor_toolbar = document.querySelector(`${element}_toolbar`);

            // Break if element not found
            if (!ck_editor) {
                return;
            }
            // Break if element not found
            if (!ck_editor_toolbar) {
                return;
            }

            // Init ck_editor
            DecoupledEditor
                .create(ck_editor)
                .then(editor => {
                    MPSSystemMailTemplateImportDataSentMailManagementEditSystemMailTemplateImportData_ckeditor_list[element] = editor;
                    const toolbarContainer = ck_editor_toolbar;

                    toolbarContainer.appendChild( editor.ui.view.toolbar.element );
                    editor.model.document.on( 'change', () => {
                        var crr_content = editor.getData();
                        $(element + "_textareaId").val(crr_content);
                        //console.log( editor.getData() );
                        
                    } );
                })
                .catch(error => {
                    console.error(error);
                });
        });
    }
    // Reset Filter
    var handleResetForm = () => {
        // Select filter options
        const selectOptions = form.querySelectorAll('select');

        // Reset select2 values -- more info: https://select2.org/programmatic-control/add-select-clear-items
        selectOptions.forEach(select => {
            $(select).val('').trigger('change');
        });

    }
    // Init add schedule modal
    var initEditSystemMailTemplateImportData = () => {

        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        var validator = FormValidation.formValidation(
            form,
            {
                fields: {
                    
            'name': {
                validators: {
                    
                    notEmpty: {
                        message: 'Tên bắt buộc điền'

                    },
                    
                    stringLength: {
                        max: 2000,
                        message: 'Tên tối đa 2000 ký tự',
                    },
                    
                }
            },
                    
            'code': {
                validators: {
                    
                    notEmpty: {
                        message: 'Mã bắt buộc điền'

                    },
                    
                    stringLength: {
                        max: 100,
                        message: 'Mã tối đa None ký tự',
                    },
                    
                }
            },
                    
            'friendly_code': {
                validators: {
                    
                    notEmpty: {
                        message: 'Mã bắt buộc điền'

                    },
                    
                    stringLength: {
                        max: 100,
                        message: 'Mã tối đa None ký tự',
                    },
                    
                }
            },
                    
            'created_by': {
                validators: {
                    
                    notEmpty: {
                        message: 'Người tạo bắt buộc điền'

                    },
                    
                }
            },
                    
            'created_at': {
                validators: {
                    
                    notEmpty: {
                        message: 'Thời điểm tạo bắt buộc điền'

                    },
                    
                }
            },
                    
            'updated_by': {
                validators: {
                    
                    notEmpty: {
                        message: 'Người cập nhật bắt buộc điền'

                    },
                    
                }
            },
                    
            'updated_at': {
                validators: {
                    
                    notEmpty: {
                        message: 'Thời điểm cập nhật bắt buộc điền'

                    },
                    
                }
            },
                    
            'file': {
                validators: {
                    
                    notEmpty: {
                        message: 'Tệp dữ liệu bắt buộc điền'

                    },
                    
                }
            },
                    
            'total_record_number': {
                validators: {
                    
                    notEmpty: {
                        message: 'Số lượng dữ liệu tải lên bắt buộc điền'

                    },
                    
                }
            },
                    
            'is_import_failed': {
                validators: {
                    
                    notEmpty: {
                        message: 'Tải lên lỗi bắt buộc điền'

                    },
                    
                }
            },
                    
            'is_import_success': {
                validators: {
                    
                    notEmpty: {
                        message: 'Tải thành công bắt buộc điền'

                    },
                    
                }
            },
                    
            'json_import_data': {
                validators: {
                    
                    notEmpty: {
                        message: 'dữ liệu tải lên(json) bắt buộc điền'

                    },
                    
                    stringLength: {
                        max: 50000,
                        message: 'dữ liệu tải lên(json) tối đa 50000 ký tự',
                    },
                    
                }
            },
                    
            'json_check_validation': {
                validators: {
                    
                    notEmpty: {
                        message: 'dữ liệu không thỏa mãn yêu cầu bắt buộc điền'

                    },
                    
                    stringLength: {
                        max: 50000,
                        message: 'dữ liệu không thỏa mãn yêu cầu tối đa 50000 ký tự',
                    },
                    
                }
            },
                    
            'json_fail_data': {
                validators: {
                    
                    notEmpty: {
                        message: 'dữ liệu bị lỗi bắt buộc điền'

                    },
                    
                    stringLength: {
                        max: 50000,
                        message: 'dữ liệu bị lỗi tối đa 50000 ký tự',
                    },
                    
                }
            },
                    
            'import_status': {
                validators: {
                    
                    notEmpty: {
                        message: 'Trạng thái tải lên bắt buộc điền'

                    },
                    
                }
            },
                    
                },

                plugins: {
                    trigger: new FormValidation.plugins.Trigger(),
                    bootstrap: new FormValidation.plugins.Bootstrap5({
                        rowSelector: '.fv-row',
                        eleInvalidClass: '',
                        eleValidClass: ''
                    })
                }
            }
        );
        // init special field 
        
                    // created_at field init flatpickr
                    const created_at_ele = form.querySelector('[name="created_at"]');
                    if (created_at_ele !== null){
                        $(created_at_ele).flatpickr({
                            enableTime: true,
                            dateFormat: "d/m/Y H:i",
                            defaultDate:strftime(new Date(),"DD/MM/YYYY HH:mm")
                        });
                    }
                    
                    // updated_at field init flatpickr
                    const updated_at_ele = form.querySelector('[name="updated_at"]');
                    if (updated_at_ele !== null){
                        $(updated_at_ele).flatpickr({
                            enableTime: true,
                            dateFormat: "d/m/Y H:i",
                            defaultDate:strftime(new Date(),"DD/MM/YYYY HH:mm")
                        });
                    }
                    
        // get value form 
        const obj_uuid = $(form).attr('obj_uuid');
        if(obj_uuid != null && obj_uuid != undefined && obj_uuid != ""){
            var obj=new SystemMailTemplateImportDataSentMailManagement();
            obj.tGetObjApi(obj_uuid);
            obj.callAjax.then(function(data) {
                new SystemMailTemplateImportDataSentMailManagement(data).tFillEditForm('SystemMailTemplateImportDataSentMailManagementEditId_form');
            })
        }
        // Submit button handler
        const submitButton = form.querySelector('[systemmailtemplateimportdatasentmailmanagement-edit-action="submit"]');
        submitButton.addEventListener('click', e => {
            e.preventDefault();

            // Validate form before submit
            if (validator) {
                validator.validate().then(function (status) {
                    console.log('validated!');

                    if (status == 'Valid') {

                        // Show loading indication
                        submitButton.setAttribute('data-kt-indicator', 'on');

                        // Disable button to avoid multiple click 
                        submitButton.disabled = true;
                        var obj = new SystemMailTemplateImportDataSentMailManagement();
                        console.log('Save obj and create new, obj = ', obj);
                        systemmailtemplateimportdatasentmailmanagement_is_continue_form=true;
                        obj.tUpdatePostApi('SystemMailTemplateImportDataSentMailManagementEditId_form');
                        
                        obj.callAjax.then(function(data) {
                            submitButton.removeAttribute('data-kt-indicator');
                            
                            // Enable button
                            submitButton.disabled = false;
                            if (data.uuid != undefined && data.uuid != null && data.uuid != ""){
                                // Show popup confirmation 
                                Swal.fire({
                                    html: `Đã cập nhật thông tin của <b>${data.name}<b> thành công!`,
                                    icon: "success",
                                    buttonsStyling: false,
                                    confirmButtonText: "Ok",
                                    customClass: {
                                        confirmButton: "btn btn-primary"
                                    }
                                }).then(function (result) {
                                    if (result.isConfirmed) {
                                        var org_app_prefixId = ""
                                        if($("#org_app_prefixId").length > 0){
                                            org_app_prefixId = $("#org_app_prefixId").val();
                                        }
                                        $(location).prop('href', `${org_app_prefixId}/SentMailManagement/SystemMailTemplateImportData/detail/${self.uuid}/`);
                                    }
                                });
                            }
                            
                        })  
                    } else {
                        // Show popup warning. For more info check the plugin's official documentation: https://sweetalert2.github.io/
                        Swal.fire({
                            text: "Rất tiếc, thông tin bạn nhập chưa chính xác, hãy kiểm tra lại nhé!.",
                            icon: "error",
                            buttonsStyling: false,
                            confirmButtonText: "Ok",
                            customClass: {
                                confirmButton: "btn btn-primary"
                            }
                        });
                    }
                });
            }
        });

        // Cancel button handler
        const cancelButton = form.querySelector('[systemmailtemplateimportdatasentmailmanagement-edit-action="cancel"]');
        cancelButton.addEventListener('click', e => {
            e.preventDefault();

            Swal.fire({
                text: "Bạn có chắc muốn hủy ?",
                icon: "warning",
                showCancelButton: true,
                buttonsStyling: false,
                confirmButtonText: "Ok, về trang danh sách!",
                cancelButtonText: "Không",
                customClass: {
                    confirmButton: "btn btn-primary",
                    cancelButton: "btn btn-active-light"
                }
            }).then(function (result) {
                if (result.value) {
                    form.reset(); // Reset form			
                    handleResetForm();
                    var org_app_prefixId = ""
                    if($("#org_app_prefixId").length > 0){
                        org_app_prefixId = $("#org_app_prefixId").val();
                    }
                    $(location).prop('href', `${org_app_prefixId}/SentMailManagement/SystemMailTemplateImportData/`);

                } else if (result.dismiss === 'cancel') {
                    Swal.fire({
                        text: "Hủy thành công.",
                        icon: "error",
                        buttonsStyling: false,
                        confirmButtonText: "Ok",
                        customClass: {
                            confirmButton: "btn btn-primary",
                        }
                    });
                }
            });
        });
        
    }

    return {
        // Public functions
        init: function () {
            initEditSystemMailTemplateImportData();
            initCKEditor();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    MPSSystemMailTemplateImportDataSentMailManagementEditSystemMailTemplateImportData.init();
});

