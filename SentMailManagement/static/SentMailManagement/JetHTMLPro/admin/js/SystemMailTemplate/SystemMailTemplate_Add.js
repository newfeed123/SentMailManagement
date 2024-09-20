

"use strict";
var MPSSystemMailTemplateSentMailManagementAddSystemMailTemplate_ckeditor_list = {}

// Class definition
var MPSSystemMailTemplateSentMailManagementAddSystemMailTemplate = function () {
    // Shared variables
    const form = document.getElementById('SystemMailTemplateSentMailManagementCreateId_form');

    // Init ck editor
    const initCKEditor = () => {
        // Define all elements for ck editor
        const elements = [
            '#contentSystemMailTemplateSentMailManagementCreateInputId', 
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
                    MPSSystemMailTemplateSentMailManagementAddSystemMailTemplate_ckeditor_list[element] = editor;
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
    var initAddSystemMailTemplate = () => {

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
                        message: 'Mã tối đa  ký tự',
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
                        message: 'Mã tối đa  ký tự',
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
                    
            'email_type': {
                validators: {
                    
                }
            },
                    
            'content': {
                validators: {
                    
                    stringLength: {
                        max: 50000,
                        message: 'Nội dung tối đa 50000 ký tự',
                    },
                    
                }
            },
                    
            'is_default': {
                validators: {
                    
                }
            },
                    
            'organization': {
                validators: {
                    
                }
            },
                    
            'hr_created_by': {
                validators: {
                    
                }
            },
                    
            'hr_updated_by': {
                validators: {
                    
                }
            },
                    
            'created_at': {
                validators: {
                    
                    notEmpty: {
                        message: 'Thời điểm tạo bắt buộc điền'

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
        
                    // updated_at field init flatpickr
                    const updated_at_ele = form.querySelector('[name="updated_at"]');
                    if (updated_at_ele !== null){
                        $(updated_at_ele).flatpickr({
                            enableTime: true,
                            dateFormat: "d/m/Y H:i",
                            defaultDate:strftime(new Date(),"DD/MM/YYYY HH:mm")
                        });
                    }
                    
                    // created_at field init flatpickr
                    const created_at_ele = form.querySelector('[name="created_at"]');
                    if (created_at_ele !== null){
                        $(created_at_ele).flatpickr({
                            enableTime: true,
                            dateFormat: "d/m/Y H:i",
                            defaultDate:strftime(new Date(),"DD/MM/YYYY HH:mm")
                        });
                    }
                    
        // Submit button handler
        const submitButton = form.querySelector('[systemmailtemplatesentmailmanagement-add-action="submit"]');
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
                        var obj = new SystemMailTemplateSentMailManagement();
                        console.log('Save obj and create new, obj = ', obj);
                        systemmailtemplatesentmailmanagement_is_continue_form=true;
                        obj.tCreateNewPostFormApi('SystemMailTemplateSentMailManagementCreateId_form');
                        
                        obj.callAjax.then(function(data) {
                            submitButton.removeAttribute('data-kt-indicator');
                            // Enable button
                            submitButton.disabled = false;
                            if (data.uuid != undefined && data.uuid != null && data.uuid != ""){
                                // Show popup confirmation 
                                Swal.fire({
                                    html: `Thêm mới <b>${data.name}</b> thành công!`,
                                    icon: "success",
                                    buttonsStyling: false,
                                    confirmButtonText: "OK",
                                    customClass: {
                                        confirmButton: "btn btn-primary"
                                    }
                                }).then(function (result) {
                                    if (result.isConfirmed) {
                                        var org_app_prefixId = ""
                                        if($("#org_app_prefixId").length > 0){
                                            org_app_prefixId = $("#org_app_prefixId").val();
                                        }
                                        $(location).prop('href', `${org_app_prefixId}/SentMailManagement/SystemMailTemplate/detail/${self.uuid}/`);
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
                            text: "Rất tiếc, thông tin bạn nhập chưa chính xác, hãy kiểm tra lại nhé!",
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
        const cancelButton = form.querySelector('[systemmailtemplatesentmailmanagement-add-action="cancel"]');
        cancelButton.addEventListener('click', e => {
            e.preventDefault();

            Swal.fire({
                html: "Bạn có chắc muốn hủy quá trình thêm mới <b>Mẫu email</b> này?",
                icon: "warning",
                showCancelButton: true,
                buttonsStyling: false,
                confirmButtonText: "Đồng ý, về danh sách!",
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
                    $(location).prop('href', `${org_app_prefixId}/SentMailManagement/SystemMailTemplate/`);
                } else if (result.dismiss === 'cancel') {
                    Swal.fire({
                        text: "Bạn vẫn có thể tiếp tục thêm mới Mẫu email!.",
                        icon: "error",
                        buttonsStyling: false,
                        confirmButtonText: "OK",
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
            initCKEditor();
            initAddSystemMailTemplate();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    MPSSystemMailTemplateSentMailManagementAddSystemMailTemplate.init();
});

