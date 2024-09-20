
"use strict";
var systemmailtemplatesentmailmanagement_exportdatatable;

// Class definition
var MPSSystemMailTemplateSentMailManagementExportSystemMailTemplate = function () {
    // Shared variables
    var systemmailtemplatesentmailmanagement_export_table;
    const element = document.getElementById('mps_modal_export_systemmailtemplatesentmailmanagement');
    const modal = new bootstrap.Modal(element);
    const form = element.querySelector('#SystemMailTemplateSentMailManagementExportFilterId_form');

    // Private functions
    var initDatatable = function () {
        // Init datatable --- more info on datatables: https://datatables.net/manual/
        systemmailtemplatesentmailmanagement_exportdatatable = $(systemmailtemplatesentmailmanagement_export_table).DataTable({
            "info": false,
            "paging": false,
            "lengthChange": false,
        });
    }

    // Hook export buttons
    var exportButtons = () => {

        var validator = FormValidation.formValidation(
            form,
            {
                fields: {
                    'system_format': {
                        validators: {
                            notEmpty: {
                                message: 'Định dạng file không được trống'
                            }
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
        const documentTitle = 'Mẫu email';
        var buttons = new $.fn.dataTable.Buttons(systemmailtemplatesentmailmanagement_export_table, {
            buttons: [
                {
                    extend: 'copyHtml5',
                    title: documentTitle
                },
                {
                    extend: 'excelHtml5',
                    title: documentTitle
                },
                {
                    extend: 'csvHtml5',
                    title: documentTitle
                },
                {
                    extend: 'pdfHtml5',
                    title: documentTitle
                }
            ]
        }).container().appendTo($('#systemmailtemplatesentmailmanagement_export_buttons'));

        // Hook dropdown menu click event to datatable export buttons
        const exportButton = element.querySelector('[systemmailtemplatesentmailmanagement-export-modal-action="submit"]');
        exportButton.addEventListener('click', function (e) {
            e.preventDefault();

            // Validate form before submit
            if (validator) {
                validator.validate().then(async function (status) {
                    console.log('validated!');

                    if (status == 'Valid') {
                        exportButton.setAttribute('data-kt-indicator', 'on');

                        // Disable submit button whilst loading
                        exportButton.disabled = true;
                        // Filter datatable
                        systemmailtemplatesentmailmanagement_exportdatatable.clear().draw();
                        //asyncCallSystemMailTemplateSentMailManagementExcelLargeFilterData();
                        let is_has_data_export = await CallPromiseSystemMailTemplateSentMailManagementExcelLargeFilterData();
                        if(is_has_data_export){
                            // Get clicked export value
                            const exportValue = $(form).find('.systemmailtemplatesentmailmanagement-export-format').val();
                            const target = document.querySelector('.dt-buttons .buttons-' + exportValue);

                            // Trigger click event on hidden datatable export buttons
                            target.click();
                            setTimeout(function () {
                                exportButton.removeAttribute('data-kt-indicator');

                                Swal.fire({
                                    text: "Tải xuống thành công danh sách Mẫu email!",
                                    icon: "success",
                                    buttonsStyling: false,
                                    confirmButtonText: "Ok",
                                    customClass: {
                                        confirmButton: "btn btn-primary"
                                    }
                                }).then(function (result) {
                                    if (result.isConfirmed) {
                                        modal.hide();

                                        // Enable submit button after loading
                                        exportButton.disabled = false;
                                    }
                                });

                                //form.submit(); // Submit form
                            }, 1000);
                        }
                        else{
                            Swal.fire({
                                    text: "Rất tiếc, Không có dữ liệu!",
                                    icon: "error",
                                    buttonsStyling: false,
                                    confirmButtonText: "Ok",
                                    customClass: {
                                        confirmButton: "btn btn-primary"
                                    }
                                });
                            exportButton.removeAttribute('data-kt-indicator');
                            exportButton.disabled = false;
                            
                        }
                        
                    } else {
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
        const cancelButton = element.querySelector('[systemmailtemplatesentmailmanagement-export-modal-action="cancel"]');
        cancelButton.addEventListener('click', function (e) {
            e.preventDefault();

            Swal.fire({
                text: "Bạn có chắc muốn hủy?",
                icon: "warning",
                showCancelButton: true,
                buttonsStyling: false,
                confirmButtonText: "Ok",
                cancelButtonText: "Không",
                customClass: {
                    confirmButton: "btn btn-primary",
                    cancelButton: "btn btn-light"
                }
            }).then(function (result) {
                if (result.value) {
                    form.reset(); // Reset form	
                    modal.hide(); // Hide modal
                    handleResetForm();
                    exportButton.removeAttribute('data-kt-indicator');
                    exportButton.disabled = false;				
                }
            });
        });

        // Close button handler
        const closeButton = element.querySelector('[systemmailtemplatesentmailmanagement-export-modal-action="close"]');
        closeButton.addEventListener('click', function (e) {
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
                    modal.hide(); // Hide modal				
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

    // Search Datatable --- official docs reference: https://datatables.net/reference/api/search()
    // Public methods
    return {
        init: function () {
            systemmailtemplatesentmailmanagement_export_table = document.querySelector('#SystemMailTemplateSentMailManagementExportTableId');

            if (!systemmailtemplatesentmailmanagement_export_table) {
                return;
            }

            initDatatable();
            exportButtons();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    MPSSystemMailTemplateSentMailManagementExportSystemMailTemplate.init();
});
