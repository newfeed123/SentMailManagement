

"use strict";

// Class definition
var MPSSystemMailTemplateImportDataSentMailManagementDetailSystemMailTemplateImportData = function () {
    // Shared variables
    const form = document.getElementById('SystemMailTemplateImportDataSentMailManagementDetailId_form');

    // Init add schedule modal
    var initDetailSystemMailTemplateImportData = () => {

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
                            locale: defaultLocale,
                            dateFormat: "d/m/Y H:i",
                            defaultDate:strftime(new Date(),"DD/MM/YYYY HH:mm")
                        });
                    }
                    
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
                    
        // get value form 
        const obj_uuid = $(form).attr('obj_uuid');
        if(obj_uuid != null && obj_uuid != undefined && obj_uuid != ""){
            var obj=new SystemMailTemplateImportDataSentMailManagement();
            obj.tGetObjApi(obj_uuid);
            obj.callAjax.then(function(data) {
                new SystemMailTemplateImportDataSentMailManagement(data).tFillDetailForm('SystemMailTemplateImportDataSentMailManagementDetailId_form');
            })
        }
        // Cancel button handler
        const cancelButton = form.querySelector('[systemmailtemplateimportdatasentmailmanagement-detail-action="cancel"]');
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
                    handleResetForm();
                    var org_app_prefixId = ""
                    if($("#org_app_prefixId").length > 0){
                        org_app_prefixId = $("#org_app_prefixId").val();
                    }
                    $(location).prop('href', `${org_app_prefixId}/SentMailManagement/SystemMailTemplateImportData/`);
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
            initDetailSystemMailTemplateImportData();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    MPSSystemMailTemplateImportDataSentMailManagementDetailSystemMailTemplateImportData.init();
});

