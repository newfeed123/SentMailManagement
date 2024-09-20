
var MPSComposeEmailSentMailManagementAddComposeEmail_ckeditor_list = {}
"use strict";

// Class definition
var MPSComposeEmailSentMailManagementAddComposeEmail = function () {
    // Shared variables
    // const element = document.getElementById('ComposeEmailSentMailManagementCreateModalId');
    // const form = element.querySelector('#ComposeEmailSentMailManagementCreateModalId_form');
    const form = document.getElementById('ComposeEmailSentMailManagementCreateId_form');
    // const modal = new bootstrap.Modal(element);

    // // Init ck editor
    const initCKEditor = () => {
        // Define all elements for ck editor
        const elements = [
            '#contentComposeEmailSentMailManagementCreateInputId', 
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
                    MPSComposeEmailSentMailManagementAddComposeEmail_ckeditor_list[element] = editor;
                    const toolbarContainer = ck_editor_toolbar;
                    toolbarContainer.appendChild( editor.ui.view.toolbar.element );
                    // console.log("huy---------------->",editor.ui.view.toolbar.element);
                    // editor.ui.registry.addButton('sourceEditing', {
                    //     icon: '<svg><use xlink:href="#sourceEditing"/></svg>', // Thay đổi icon theo ý muốn của bạn
                    //     tooltip: 'Edit Source Code', // Tooltip khi di chuột qua nút
                    //     onAction: function () {
                    //         // Xử lý sự kiện khi nút được nhấn
                    //         // Ví dụ: mở một modal hiển thị mã nguồn HTML hoặc CSS
                    //         console.log('Edit Source Code button clicked');
                    //     }
                    // });
                    editor.setData("");
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
    var initAddComposeEmail = () => {

        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        // var validator = FormValidation.formValidation(
        //     form,
        //     {
        //         fields: {
                    
        //     'name': {
        //         validators: {
                    
        //             notEmpty: {
        //                 message: 'Tên bắt buộc điền'

        //             },
                    
        //             stringLength: {
        //                 max: 2000,
        //                 message: 'Tên tối đa 2000 ký tự',
        //             },
                    
        //         }
        //     },
                    
        //     'code': {
        //         validators: {
                    
        //             notEmpty: {
        //                 message: 'Mã bắt buộc điền'

        //             },
                    
        //             stringLength: {
        //                 max: 100,
        //                 message: 'Mã tối đa 100 ký tự',
        //             },
                    
        //         }
        //     },
                    
        //     'friendly_code': {
        //         validators: {
                    
        //             notEmpty: {
        //                 message: 'Mã bắt buộc điền'

        //             },
                    
        //             stringLength: {
        //                 max: 100,
        //                 message: 'Mã tối đa 100 ký tự',
        //             },
                    
        //         }
        //     },
                    
        //     'created_by': {
        //         validators: {
                    
        //             notEmpty: {
        //                 message: 'Người tạo bắt buộc điền'

        //             },
                    
        //         }
        //     },
                    
        //     'created_at': {
        //         validators: {
                    
        //             notEmpty: {
        //                 message: 'Thời điểm tạo bắt buộc điền'

        //             },
                    
        //         }
        //     },
                    
        //     'updated_by': {
        //         validators: {
                    
        //             notEmpty: {
        //                 message: 'Người cập nhật bắt buộc điền'

        //             },
                    
        //         }
        //     },
                    
        //     'organization': {
        //         validators: {
                    
        //         }
        //     },
                    
        //     'mail_sender': {
        //         validators: {
                    
        //         }
        //     },
                    
        //     'email_template': {
        //         validators: {
                    
        //         }
        //     },
                    
        //     'mail_target': {
        //         validators: {
                    
        //         }
        //     },
                    
        //     'addressee': {
        //         validators: {
                    
        //         }
        //     },
                    
        //     'content': {
        //         validators: {
                    
        //             stringLength: {
        //                 max: 50000,
        //                 message: 'Nội dung tối đa 50000 ký tự',
        //             },
                    
        //         }
        //     },
                    
        //     'status_code': {
        //         validators: {
                    
        //             stringLength: {
        //                 max: 500,
        //                 message: 'Mã trạng thái tối đa 500 ký tự',
        //             },
                    
        //         }
        //     },
                    
        //     'status_text': {
        //         validators: {
                    
        //             stringLength: {
        //                 max: 500,
        //                 message: 'Trạng thái tối đa 500 ký tự',
        //             },
                    
        //         }
        //     },
                    
        //     'hr_created_by': {
        //         validators: {
                    
        //         }
        //     },
                    
        //     'updated_at': {
        //         validators: {
                    
        //             notEmpty: {
        //                 message: 'Thời điểm cập nhật bắt buộc điền'

        //             },
                    
        //         }
        //     },
                    
        //     'hr_updated_by': {
        //         validators: {
                    
        //         }
        //     },
                    
        //         },

        //         plugins: {
        //             trigger: new FormValidation.plugins.Trigger(),
        //             bootstrap: new FormValidation.plugins.Bootstrap5({
        //                 rowSelector: '.fv-row',
        //                 eleInvalidClass: '',
        //                 eleValidClass: ''
        //             })
        //         }
        //     }
        // );
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
                }
            }
        );
        // init special field 
        
                    // created_at field init flatpickr
                    // const created_at_ele = form.querySelector('[name="created_at"]');
                    // if (created_at_ele !== null){
                    //     $(created_at_ele).flatpickr({
                    //         enableTime: true,
                    //         dateFormat: "d/m/Y H:i",
                    //         defaultDate:strftime(new Date(),"DD/MM/YYYY HH:mm")
                    //     });
                    // }
                    
                    // updated_at field init flatpickr
                    // const updated_at_ele = form.querySelector('[name="updated_at"]');
                    // if (updated_at_ele !== null){
                    //     $(updated_at_ele).flatpickr({
                    //         enableTime: true,
                    //         dateFormat: "d/m/Y H:i",
                    //         defaultDate:strftime(new Date(),"DD/MM/YYYY HH:mm")
                    //     });
                    // }
                    
        // Submit button handler
        
        // const submitButton = element.querySelector('[systemmailmailsentmailmanagement-add-modal-action="submit"]');
        const submitButton = form.querySelector('[compose-email-systemmailmailsentmailmanagement-add-modal-action="submit"]');
        // const submitButton = form.querySelector('#ComposeEmailSentMailManagementCreateId_submit');
        submitButton.addEventListener('click', e => {
            e.preventDefault();
            // alert("ok chưa ")
            // console.log("huy---->123")
            // Validate form before submit
            // var obj = new SystemMailMailSentMailManagement();
            // console.log('Huy ------> Save obj and create new, obj = ', obj);
            // obj.tCreateNewPostFormApi('ComposeEmailSentMailManagementCreateId_form');
            if (validator) {
                validator.validate().then(function (status) {
                    console.log('validated!');
                    if (status == 'Valid') {
                        console.log('validated!');
                        // Show loading indication
                        submitButton.setAttribute('data-kt-indicator', 'on');
                        // Disable button to avoid multiple click 
                        submitButton.disabled = true;
                        setTimeout(function() {
                            var obj = new SystemMailMailSentMailManagement();
                            console.log('Huy ------> Save obj and create new, obj = ', obj);
                            obj.tCreateNewPostFormApi('ComposeEmailSentMailManagementCreateId_form');
                            obj.callAjax.then(function(data) {
                                submitButton.removeAttribute('data-kt-indicator');
                                // Enable button
                                submitButton.disabled = false;
                                if (data.uuid != undefined && data.uuid != null && data.uuid != ""){
                                    // Show popup confirmation 
                                    Swal.fire({
                                        html: `Gửi Mail <b>${data.name}</b> thành công!`,
                                        icon: "success",
                                        buttonsStyling: false,
                                        confirmButtonText: "OK",
                                        customClass: {
                                            confirmButton: "btn btn-primary"
                                        }
                                    }).then(function (result) {
                                        if (result.isConfirmed) {
                                            form.reset(); // Reset form
                                            handleResetForm();
                                            // indicatorProgress.style.display = 'none';
                                        }
                                    });
                                }
                            })
                        }, 0)
                    } else{
                        console.log('un validated!');

                    }

                })
            }
//             if (validator) {
//                 validator.validate().then(function (status) {
//                     console.log('validated!');

//                     if (status == 'Valid') {

//                         // Show loading indication
//                         submitButton.setAttribute('data-kt-indicator', 'on');

//                         // Disable button to avoid multiple click 
//                         submitButton.disabled = true;
//                         var obj = new SystemMailMailSentMailManagement();
//                         console.log('Huy ------> Save obj and create new, obj = ', obj);
//                         systemmailmailsentmailmanagement_is_continue_modal=true;
//                         obj.tCreateNewPostFormApi('ComposeEmailSentMailManagementCreateModalId_form');
                        
//                         obj.callAjax.then(function(data) {
//                             submitButton.removeAttribute('data-kt-indicator');

//                             // Enable button
//                             submitButton.disabled = false;
//                             if (data.uuid != undefined && data.uuid != null && data.uuid != ""){
//                                 // Show popup confirmation 
//                                 Swal.fire({
//                                     html: `Thêm mới <b>${data.name}</b> thành công!`,
//                                     icon: "success",
//                                     buttonsStyling: false,
//                                     confirmButtonText: "Ok",
//                                     customClass: {
//                                         confirmButton: "btn btn-primary"
//                                     }
//                                 }).then(function (result) {
//                                     if (result.isConfirmed) {
//                                         modal.hide();
//                                         form.reset();
//                                         handleResetForm();
//                                     }
//                                 });
//                             }
                            

                            
//                         })  
//                     //    // Show loading indication
//                     //    submitButton.setAttribute('data-kt-indicator', 'on');
// //
//                     //    // Disable button to avoid multiple click 
//                     //    submitButton.disabled = true;
// //
//                     //    // Simulate form submission. For more info check the plugin's official documentation: https://sweetalert2.github.io/
//                     //    setTimeout(function () {
//                     //        // Remove loading indication
//                     //        submitButton.removeAttribute('data-kt-indicator');
// //
//                     //        // Enable button
//                     //        submitButton.disabled = false;
// //
//                     //        // Show popup confirmation 
//                     //        Swal.fire({
//                     //            text: "Form has been successfully submitted!",
//                     //            icon: "success",
//                     //            buttonsStyling: false,
//                     //            confirmButtonText: "Ok",
//                     //            customClass: {
//                     //                confirmButton: "btn btn-primary"
//                     //            }
//                     //        }).then(function (result) {
//                     //            if (result.isConfirmed) {
//                     //                modal.hide();
//                     //            }
//                     //        });
// //
//                     //        //form.submit(); // Submit form
//                     //    }, 2000);
//                     } else {
//                         // Show popup warning. For more info check the plugin's official documentation: https://sweetalert2.github.io/
//                         Swal.fire({
//                             text: "Rất tiếc, thông tin bạn nhập chưa chính xác, hãy kiểm tra lại nhé!.",
//                             icon: "error",
//                             buttonsStyling: false,
//                             confirmButtonText: "Ok",
//                             customClass: {
//                                 confirmButton: "btn btn-primary"
//                             }
//                         });
//                     }
//                 });
//             }
        });

        // Cancel button handler
        // const cancelButton = element.querySelector('[systemmailmailsentmailmanagement-add-modal-action="cancel"]');
        // cancelButton.addEventListener('click', e => {
        //     e.preventDefault();

        //     Swal.fire({
        //         text: "Bạn có chắc muốn hủy?",
        //         icon: "warning",
        //         showCancelButton: true,
        //         buttonsStyling: false,
        //         confirmButtonText: "Đồng ý",
        //         cancelButtonText: "Không",
        //         customClass: {
        //             confirmButton: "btn btn-primary",
        //             cancelButton: "btn btn-light"
        //         }
        //     }).then(function (result) {
        //         if (result.value) {
        //             form.reset(); // Reset form			
        //             modal.hide();	
        //             handleResetForm();
        //         }
        //     });
        // });

        // // Close button handler
        // const closeButton = element.querySelector('[systemmailmailsentmailmanagement-add-modal-action="close"]');
        // closeButton.addEventListener('click', e => {
        //     e.preventDefault();

        //     Swal.fire({
        //         text: "Bạn có chắc muốn hủy?",
        //         icon: "warning",
        //         showCancelButton: true,
        //         buttonsStyling: false,
        //         confirmButtonText: "Đồng ý",
        //         cancelButtonText: "Không",
        //         customClass: {
        //             confirmButton: "btn btn-primary",
        //             cancelButton: "btn btn-light"
        //         }
        //     }).then(function (result) {
        //         if (result.value) {
        //             form.reset(); // Reset form			
        //             modal.hide();	
        //             handleResetForm();
        //         }
        //     });
        // });
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

        // Reset input
        const inputs = form.querySelectorAll('input');
        inputs.forEach(input => {
            input.value = ''; // Gán giá trị rỗng cho text area
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
            initAddComposeEmail();
            initCKEditor();

        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    MPSComposeEmailSentMailManagementAddComposeEmail.init();
});

// function ChangeEmailTemplateSelect(){
//     $(".sentmailmanagement-systemmailtemplate-select").on("change", function() {
//         var selectedValueEmailTemplate = $("#email_templateComposeEmailSentMailManagementCreateModalInputId").val();

//         var contentTemplateMail = $(`[value="${selectedValueEmailTemplate}"]`).attr('content_email_template')

//         var newDiv = $('<div>');
//         newDiv.css('display', 'none');
//         $('body').append(newDiv);
//         newDiv.html(contentTemplateMail)
//         var decodedHTML = newDiv.text();
//         newDiv.remove()

//         // Lấy ra trình soạn thảo CKEditor bằng ID của nó
//         const element = document.getElementById('ComposeEmailSentMailManagementCreateModalId');
//         const form = element.querySelector('#ComposeEmailSentMailManagementCreateModalId_form');
//         const ckeditorContainers = form.querySelectorAll('.ck-editor__editable');
//         ckeditorContainers.forEach(container => {
//             const editor = container.ckeditorInstance; // Lấy đối tượng CKEditor từ container
//             if (editor) {
//                 editor.setData(`${decodedHTML}`);
//             }
//         });
//     });
// }
// function ChangeEmailTargetSelect(){
//     $(".sentmailmanagement-systemmailtarget-select").on("change", function() {
//         var selectedValueEmailTarget = $("#mail_targetComposeEmailSentMailManagementCreateModalInputId").val();
//         var emailTemplateUUID = $("#mail_targetComposeEmailSentMailManagementCreateModalInputId").find('option:selected').attr('email_template_uuid')

//         console.log("Giá trị đã chọn: ", selectedValueEmailTarget);

//         var j_ele_email_template = $("#email_templateComposeEmailSentMailManagementCreateModalInputId");
//         if (j_ele_email_template.length > 0) {
//             var j_ele_email_template_value = emailTemplateUUID;
//             j_ele_email_template.val(j_ele_email_template_value).change();
//         }
//     });
// }
// $(document).ready(function(){
//     ChangeEmailTemplateSelect()
//     ChangeEmailTargetSelect()
// })
//end

function ChangeEmailTemplateSelect(){
    $(".sentmailmanagement-systemmailtemplate-select").on("change", function() {
        var selectedValueEmailTemplate = $("#email_templateComposeEmailSentMailManagementCreateInputId").val();

        var contentTemplateMail = $(`[value="${selectedValueEmailTemplate}"]`).attr('content_email_template')

        // console.log("huy---> ComposeEmail --> contentTemplateMail", contentTemplateMail);
        // var newDiv = $('<div>');
        // newDiv.css('display', 'none');
        // $('body').append(newDiv);
        // newDiv.html(contentTemplateMail)
        // var decodedHTML = newDiv.text();
        // newDiv.remove()

        // Lấy ra trình soạn thảo CKEditor bằng ID của nó
        const form = document.getElementById('ComposeEmailSentMailManagementCreateId_form');
        const ckeditorContainers = form.querySelectorAll('.ck-editor__editable');
        ckeditorContainers.forEach(container => {
            const editor = container.ckeditorInstance; // Lấy đối tượng CKEditor từ container

            if (editor && contentTemplateMail) {
                editor.setData(`${contentTemplateMail}`);
                // console.log("huy---> ComposeEmail --> contentTemplateMail sau khi setData()", editor.getData());
            }
        });
    });
}
$(document).ready(function(){
    ChangeEmailTemplateSelect()
    // alert("ok add")
})