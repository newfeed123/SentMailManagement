

var MPSSystemMailTemplateSentMailManagementAddSystemMailTemplate_ckeditor_list = {}
"use strict";

// Class definition
var MPSSystemMailTemplateSentMailManagementAddSystemMailTemplate = function () {
    // Shared variables
    const element = document.getElementById('SystemMailTemplateSentMailManagementCreateModalId');
    const form = element.querySelector('#SystemMailTemplateSentMailManagementCreateModalId_form');
    const modal = new bootstrap.Modal(element);

    // Init ck editor
    const initCKEditor = () => {
        // Define all elements for ck editor
        const elements = [
            // '#contentSystemMailTemplateSentMailManagementCreateModalInputId', 
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
                .create(ck_editor, {
                    dataProcessor: data => data,
                    basicEntities: false,
                    entities: false,
                })
                .then(editor => {
                    MPSSystemMailTemplateSentMailManagementAddSystemMailTemplate_ckeditor_list[element] = editor;
                    const toolbarContainer = ck_editor_toolbar;
                    toolbarContainer.appendChild( editor.ui.view.toolbar.element );
                    editor.model.document.on( 'change', () => {
                        var crr_content = editor.getData();
                        $(element + "_textareaId").val(crr_content);
                        
                        // Chuỗi HTML entities cần giải mã
                        var htmlString = editor.getData();

                        // // Tạo một phần tử HTML ẩn
                        // var tempElement = document.createElement('div');
                        // tempElement.style.display = 'none';
                        // $(document.body).one(tempElement);

                        // // Gán chuỗi HTML entities vào phần tử ẩn và lấy nội dung đã giải mã
                        // tempElement.innerHTML = htmlString;
                        // var decodedHTML = tempElement.textContent;

                        // // Loại bỏ phần tử ẩn sau khi đã sử dụng xong
                        // document.body.removeChild(tempElement);
                        // document.getElementById("displaySystemMailTemplateSentMailManagementCreateModalInputId_textareaId").innerHTML = decodedHTML;

                        // var newDiv = $('<div>');
                        // newDiv.css('display', 'none');
                        // $('body').append(newDiv);
                        // newDiv.html(htmlString)
                        // var decodedHTML = newDiv.text();
                        // newDiv.remove()
                        // $("#displaySystemMailTemplateSentMailManagementCreateModalInputId_textareaId").html(decodedHTML);
                    } );
                    // console.log('Danh sách plugins:', editor.plugins.getAll().map(plugin => plugin.pluginName));
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
                        // max: 2000,
                        // message: 'Tên tối đa 2000 ký tự',
                    },
                    
                }
            },
            'subject_of_template': {
                validators: {
                    
                    notEmpty: {
                        message: 'Tiêu đề mẫu mail bắt buộc điền'

                    },
                    
                    stringLength: {
                        // max: 2000,
                        // message: 'Tên tối đa 2000 ký tự',
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
                        message: 'Mã tối đa 100 ký tự',
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
                        message: 'Mã tối đa 100 ký tự',
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
                            locale: defaultLocale,
                            dateFormat: "d/m/Y H:i",
                            defaultDate:strftime(new Date(),"DD/MM/YYYY HH:mm")
                        });
                    }
                    
                    // created_at field init flatpickr
                    const created_at_ele = form.querySelector('[name="created_at"]');
                    if (created_at_ele !== null){
                        $(created_at_ele).flatpickr({
                            enableTime: true,
                            locale: defaultLocale,
                            dateFormat: "d/m/Y H:i",
                            defaultDate:strftime(new Date(),"DD/MM/YYYY HH:mm")
                        });
                    }
                    
        // Submit button handler
        const submitButton = element.querySelector('[systemmailtemplatesentmailmanagement-add-modal-action="submit"]');
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
                        systemmailtemplatesentmailmanagement_is_continue_modal=true;
                        obj.tCreateNewPostFormApi('SystemMailTemplateSentMailManagementCreateModalId_form');
                        
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
                                    confirmButtonText: "Ok",
                                    customClass: {
                                        confirmButton: "btn btn-primary"
                                    }
                                }).then(function (result) {
                                    if (result.isConfirmed) {
                                        modal.hide();
                                        form.reset();
                                        handleResetForm();
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
        const cancelButton = element.querySelector('[systemmailtemplatesentmailmanagement-add-modal-action="cancel"]');
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
                    cancelButton: "btn btn-light"
                }
            }).then(function (result) {
                if (result.value) {
                    form.reset(); // Reset form			
                    modal.hide();	
                    handleResetForm();
                }
            });
        });

        // Close button handler
        const closeButton = element.querySelector('[systemmailtemplatesentmailmanagement-add-modal-action="close"]');
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
                    cancelButton: "btn btn-light"
                }
            }).then(function (result) {
                if (result.value) {
                    form.reset(); // Reset form			
                    modal.hide();	
                    handleResetForm();
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

        // Reset text areas
        const textAreas = form.querySelectorAll('textarea');
        textAreas.forEach(textArea => {
            textArea.value = ''; // Gán giá trị rỗng cho text area
        });
    
        // Reset CKEditor instances
        const ckeditorContainers = form.querySelectorAll('.ck-editor__editable');
        ckeditorContainers.forEach(container => {
            const editor = container.ckeditorInstance; // Lấy đối tượng CKEditor từ container
        
            if (editor) {
                editor.setData(''); // Đặt nội dung của CKEditor thành chuỗi rỗng
            }
        });
    }
    return {
        // Public functions
        init: function () {
            initAddSystemMailTemplate();
            initCKEditor();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    MPSSystemMailTemplateSentMailManagementAddSystemMailTemplate.init();
});

$(document).ready(function() {
    $('#contentSystemMailTemplateSentMailManagementCreateModalInputId').on('input', function() {
        var inputContent = $(this).val();
        var iframeContent = $('#displaySystemMailTemplateSentMailManagementCreateModalInputId_textareaId')[0].contentDocument;
        iframeContent.open();
        iframeContent.write(inputContent);
        iframeContent.close();
    });
});




