
"use strict";
var systemmailsentmailsentmailmanagement_exportdatatable;

// Class definition
var MPSSystemMailSentMailSentMailManagementExportSystemMailSentMail = function () {
    // Shared variables
    var systemmailsentmailsentmailmanagement_export_table;
    const element = document.getElementById('mps_modal_export_systemmailsentmailsentmailmanagement');
    const modal = new bootstrap.Modal(element);
    const form = element.querySelector('#SystemMailSentMailSentMailManagementExportFilterId_form');

    // Private functions
    var initDatatable = function () {
        // Init datatable --- more info on datatables: https://datatables.net/manual/
        systemmailsentmailsentmailmanagement_exportdatatable = $(systemmailsentmailsentmailmanagement_export_table).DataTable({
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
                                message: 'File format is required'
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
        const documentTitle = 'Mail đã gửi';
        var buttons = new $.fn.dataTable.Buttons(systemmailsentmailsentmailmanagement_export_table, {
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
        }).container().appendTo($('#systemmailsentmailsentmailmanagement_export_buttons'));

        // Hook dropdown menu click event to datatable export buttons
        const exportButton = element.querySelector('[systemmailsentmailsentmailmanagement-export-modal-action="submit"]');
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
                        systemmailsentmailsentmailmanagement_exportdatatable.clear().draw();
                        //asyncCallSystemMailSentMailSentMailManagementExcelLargeFilterData();
                        let is_has_data_export = await CallPromiseSystemMailSentMailSentMailManagementExcelLargeFilterData();
                        if(is_has_data_export){
                            // Get clicked export value
                            const exportValue = $(form).find('.systemmailsentmailsentmailmanagement-export-format').val();
                            const target = document.querySelector('.dt-buttons .buttons-' + exportValue);

                            // Trigger click event on hidden datatable export buttons
                            target.click();
                            setTimeout(function () {
                                exportButton.removeAttribute('data-kt-indicator');

                                Swal.fire({
                                    text: "Tải xuống thành công danh sách Mail đã gửi!",
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
        const cancelButton = element.querySelector('[systemmailsentmailsentmailmanagement-export-modal-action="cancel"]');
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
                    cancelButton: "btn btn-active-light"
                }
            }).then(function (result) {
                if (result.value) {
                    form.reset(); // Reset form	
                    modal.hide(); // Hide modal
                    handleResetForm();
                    exportButton.removeAttribute('data-kt-indicator');
                    exportButton.disabled = false;				
                } else if (result.dismiss === 'cancel') {
                    Swal.fire({
                        text: "Thông tin của bạn không bị hủy!",
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
        const closeButton = element.querySelector('[systemmailsentmailsentmailmanagement-export-modal-action="close"]');
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
                    cancelButton: "btn btn-active-light"
                }
            }).then(function (result) {
                if (result.value) {
                    form.reset(); // Reset form	
                    modal.hide(); // Hide modal				
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
    // Search Datatable --- official docs reference: https://datatables.net/reference/api/search()
    // Public methods
    return {
        init: function () {
            systemmailsentmailsentmailmanagement_export_table = document.querySelector('#SystemMailSentMailSentMailManagementExportTableId');

            if (!systemmailsentmailsentmailmanagement_export_table) {
                return;
            }

            initDatatable();
            exportButtons();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    MPSSystemMailSentMailSentMailManagementExportSystemMailSentMail.init();
});
