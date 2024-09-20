
var MPSSystemMailTemplateImportDataSentMailManagementAddSystemMailTemplateImportData_ckeditor_list = {}
"use strict";

// Class definition
var MPSSystemMailTemplateImportDataSentMailManagementAddSystemMailTemplateImportData = function () {
    // Shared variables
    const element = document.getElementById('SystemMailTemplateImportDataSentMailManagementCreateModalId');
    const form = element.querySelector('#SystemMailTemplateImportDataSentMailManagementCreateModalId_form');
    const modal = new bootstrap.Modal(element);

    // Init ck editor
    const initCKEditor = () => {
        // Define all elements for ck editor
        const elements = [
            '#json_import_dataSystemMailTemplateImportDataSentMailManagementCreateModalInputId','#json_check_validationSystemMailTemplateImportDataSentMailManagementCreateModalInputId','#json_fail_dataSystemMailTemplateImportDataSentMailManagementCreateModalInputId', 
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
                    MPSSystemMailTemplateImportDataSentMailManagementAddSystemMailTemplateImportData_ckeditor_list[element] = editor;
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
    // Init add schedule modal
    var initAddSystemMailTemplateImportData = () => {

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
                    
        // Submit button handler
        const submitButton = element.querySelector('[systemmailtemplateimportdatasentmailmanagement-add-modal-action="submit"]');
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
                        systemmailtemplateimportdatasentmailmanagement_is_continue_modal=true;
                        obj.tCreateNewPostFormApi('SystemMailTemplateImportDataSentMailManagementCreateModalId_form');
                        
                        obj.callAjax.then(function(data) {
                            submitButton.removeAttribute('data-kt-indicator');

                            // Enable button
                            submitButton.disabled = false;
                            console.log("data.status = ",data.status)
                            if (data.status == 200){
                                // Show popup confirmation 
                                Swal.fire({
                                    html: `Thêm mới <b>${data.name}</b> thành công!`,
                                    icon: "success",
                                    buttonsStyling: false,
                                    confirmButtonText: "Ok",
                                    customClass: {
                                        confirmButton: "btn btn-primary"
                                    }
                                }).then(function (result) {
                                    if (result.isConfirmed) {
                                        modal.hide();
                                        form.reset();
                                    }
                                });
                            }
                            

                            
                        })  
                    //    // Show loading indication
                    //    submitButton.setAttribute('data-kt-indicator', 'on');
//
                    //    // Disable button to avoid multiple click 
                    //    submitButton.disabled = true;
//
                    //    // Simulate form submission. For more info check the plugin's official documentation: https://sweetalert2.github.io/
                    //    setTimeout(function () {
                    //        // Remove loading indication
                    //        submitButton.removeAttribute('data-kt-indicator');
//
                    //        // Enable button
                    //        submitButton.disabled = false;
//
                    //        // Show popup confirmation 
                    //        Swal.fire({
                    //            text: "Form has been successfully submitted!",
                    //            icon: "success",
                    //            buttonsStyling: false,
                    //            confirmButtonText: "Ok",
                    //            customClass: {
                    //                confirmButton: "btn btn-primary"
                    //            }
                    //        }).then(function (result) {
                    //            if (result.isConfirmed) {
                    //                modal.hide();
                    //            }
                    //        });
//
                    //        //form.submit(); // Submit form
                    //    }, 2000);
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
        const cancelButton = element.querySelector('[systemmailtemplateimportdatasentmailmanagement-add-modal-action="cancel"]');
        cancelButton.addEventListener('click', e => {
            e.preventDefault();

            Swal.fire({
                text: "Bạn có chắc muốn hủy?",
                icon: "warning",
                showCancelButton: true,
                buttonsStyling: false,
                confirmButtonText: "Đồng ý",
                cancelButtonText: "Không",
                customClass: {
                    confirmButton: "btn btn-primary",
                    cancelButton: "btn btn-active-light"
                }
            }).then(function (result) {
                if (result.value) {
                    form.reset(); // Reset form			
                    modal.hide();	
                    handleResetForm();
                } else if (result.dismiss === 'cancel') {
                    Swal.fire({
                        text: "Thông tin của bạn không bị hủy!.",
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

        // Close button handler
        const closeButton = element.querySelector('[systemmailtemplateimportdatasentmailmanagement-add-modal-action="close"]');
        closeButton.addEventListener('click', e => {
            e.preventDefault();

            Swal.fire({
                text: "Bạn có chắc muốn hủy?",
                icon: "warning",
                showCancelButton: true,
                buttonsStyling: false,
                confirmButtonText: "Đồng ý",
                cancelButtonText: "Không",
                customClass: {
                    confirmButton: "btn btn-primary",
                    cancelButton: "btn btn-active-light"
                }
            }).then(function (result) {
                if (result.value) {
                    form.reset(); // Reset form			
                    modal.hide();	
                    handleResetForm();
                } else if (result.dismiss === 'cancel') {
                    Swal.fire({
                        text: "Thông tin của bạn không bị hủy!.",
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

    // Reset Filter
    var handleResetForm = () => {
        // Select filter options
        const selectOptions = form.querySelectorAll('select');

        // Reset select2 values -- more info: https://select2.org/programmatic-control/add-select-clear-items
        selectOptions.forEach(select => {
            $(select).val('').trigger('change');
        });

    }
    return {
        // Public functions
        init: function () {
            initAddSystemMailTemplateImportData();
            initCKEditor();

        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    MPSSystemMailTemplateImportDataSentMailManagementAddSystemMailTemplateImportData.init();
});

