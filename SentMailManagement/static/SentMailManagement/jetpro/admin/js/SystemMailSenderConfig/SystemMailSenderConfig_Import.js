
"use strict";

// Class definition
var MPSSystemMailSenderConfigSentMailManagementImportSystemMailSenderConfig = function () {
    // Shared variables
    const element = document.getElementById('mps_modal_import_systemmailsenderconfigsentmailmanagement');
    const form = element.querySelector('#SystemMailSenderConfigSentMailManagementImport_form');
    const submitButton = element.querySelector('[systemmailsenderconfigsentmailmanagement-import-modal-action="submit"]');
    const modal = new bootstrap.Modal(element);
    var myDropzone;
    // Init dropzone
    const initDropzone = (el) => {
        // set the dropzone container id
        const id = '#SystemMailSenderConfigSentMailManagementUploadFiles';
        const dropzone = el.querySelector(id);
        const uploadButton = el.querySelector('[systemmailsenderconfigsentmailmanagement-import-modal-action="submit"]');

        //// set the preview element template
        //var previewNode = dropzone.querySelector(".dropzone-item");
        //previewNode.id = "";
        //var previewTemplate = previewNode.parentNode.innerHTML;
        //previewNode.parentNode.removeChild(previewNode);

        myDropzone = new Dropzone(id, { // Make the whole body a dropzone
            url: SYSTEMMAILSENDERCONFIGSENTMAILMANAGEMENT_IMPORT_URL, // Set the url for your upload script location
            parallelUploads: 20,
            maxFiles: 1,
            maxFilesize: 100, // Max filesize in MB
            autoQueue: false, // Make sure the files aren't queued until manually added
            acceptedFiles:".xls,.xlsx",
            headers : {
                'CSRFToken' : getCSRFTokenValue(),
                'X-CSRFToken' : getCSRFTokenValue(), // for --> SessionAuthentication
            }

        });


        myDropzone.on("addedfile", function (file) {
            // Hookup the start button
            const dropzoneItems = dropzone.querySelectorAll('.dropzone-item');
            if (this.files.length > 1) {
                this.removeFile(this.files[0]);
            }
            dropzoneItems.forEach(dropzoneItem => {
                dropzoneItem.style.display = '';
            });
        });

        // Update the total progress bar
        myDropzone.on("totaluploadprogress", function (progress) {
            const progressBars = dropzone.querySelectorAll('.progress-bar');
            progressBars.forEach(progressBar => {
                progressBar.style.width = progress + "%";
            });
        });

        myDropzone.on("sending", function (file) {
            // Show the total progress bar when upload starts
            const progressBars = dropzone.querySelectorAll('.progress-bar');
            progressBars.forEach(progressBar => {
                progressBar.style.opacity = "1";
            });
        });

        // Hide the total progress bar when nothing"s uploading anymore
        myDropzone.on("complete", function (progress) {
            submitButton.removeAttribute('data-kt-indicator');
            if(progress.xhr.status == 200){
                Swal.fire({
                    text: "Danh sách Cấu hình email gửi đi đã tải lên thành công!",
                    icon: "success",
                    buttonsStyling: false,
                    confirmButtonText: "Ok",
                    customClass: {
                        confirmButton: "btn btn-primary"
                    }
                }).then(function (result) {
                    if (result.isConfirmed) {
                        modal.hide();
                        myDropzone.removeFile(progress);
                        LoadSystemMailSenderConfigSentMailManagementTableDataList();
                        // Enable submit button after loading
                        submitButton.disabled = false;
                    }
                });
            }
            else{
            Swal.fire({
                    text: "Tải lên danh sách Cấu hình email gửi đi thất bại!",
                    icon: "error",
                    buttonsStyling: false,
                    confirmButtonText: "Ok",
                    customClass: {
                        confirmButton: "btn btn-primary"
                    }
                }).then(function (result) {
                    if (result.isConfirmed) {
                        myDropzone.removeFile(progress);
                        // Enable submit button after loading
                        submitButton.disabled = false;
                    }
                });
            }
            
        });
    }
    // Init form inputs
    var initForm = function () {

        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
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

        // Submit button handler
        submitButton.addEventListener('click', function (e) {
            e.preventDefault();

            // Validate form before submit
            if (validator) {
                validator.validate().then(function (status) {
                    console.log('validated!');
                    if (status == 'Valid') {
                        submitButton.setAttribute('data-kt-indicator', 'on');

                        // Disable submit button whilst loading
                        submitButton.disabled = true;
                        myDropzone.enqueueFiles(myDropzone.getFilesWithStatus(Dropzone.ADDED));
                    } else {
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
        const cancelButton = element.querySelector('[systemmailsenderconfigsentmailmanagement-import-modal-action="cancel"]');
        cancelButton.addEventListener('click', function (e) {
            e.preventDefault();

            Swal.fire({
                text: "Bạn có chắc muốn hủy?",
                icon: "warning",
                showCancelButton: true,
                buttonsStyling: false,
                confirmButtonText: "Ok",
                cancelButtonText: "Hủy",
                customClass: {
                    confirmButton: "btn btn-primary",
                    cancelButton: "btn btn-light"
                }
            }).then(function (result) {
                if (result.value) {
                    form.reset(); // Reset form	
                    modal.hide(); // Hide modal		
                    handleResetForm();
                    // submitButton.setAttribute('data-kt-indicator', 'on');
                    // submitButton.disabled = false;
                }
            });
        });

        // Close button handler
        const closeButton = element.querySelector('[systemmailsenderconfigsentmailmanagement-import-modal-action="close"]');
        closeButton.addEventListener('click', function (e) {
            e.preventDefault();

            Swal.fire({
                text: "Bạn có chắc muốn hủy?",
                icon: "warning",
                showCancelButton: true,
                buttonsStyling: false,
                confirmButtonText: "Ok",
                cancelButtonText: "Hủy bỏ",
                customClass: {
                    confirmButton: "btn btn-primary",
                    cancelButton: "btn btn-light"
                }
            }).then(function (result) {
                if (result.value) {
                    form.reset(); // Reset form	
                    modal.hide(); // Hide modal	
                    handleResetForm();
                    // submitButton.setAttribute('data-kt-indicator', 'on');
                    // submitButton.disabled = false;			
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
            if (select.value != "excel") {   
                $(select).val('').trigger('change');
            }
        });
        
        // Reset Dropzone
        myDropzone.removeAllFiles(true);

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
            initForm();
            initDropzone(form);
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    MPSSystemMailSenderConfigSentMailManagementImportSystemMailSenderConfig.init();
});
