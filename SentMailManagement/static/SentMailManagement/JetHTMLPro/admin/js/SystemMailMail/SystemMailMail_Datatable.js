


"use strict";
var SystemMailMailSentMailManagementdatatable;
var MPSSystemMailMailSentMailManagementList = function () {
    // Define shared variables
    var table = document.getElementById('SystemMailMailSentMailManagementTableId');
    //var datatable;
    var toolbarBase;
    var toolbarSelected;
    var selectedCount;

    // Private functions
    var initSystemMailMailTable = function () {
        // Set date data order
        const tableRows = table.querySelectorAll('tbody tr');

        // Init datatable --- more info on datatables: https://datatables.net/manual/
        SystemMailMailSentMailManagementdatatable = $(table).DataTable({
            "info": false,
            'order': [],
            //"pageLength": 10,
            "paging": false,
            "lengthChange": false,
            'columnDefs': [
                { orderable: false, targets: 0 }, // Disable ordering on column 0 (checkbox)
                //{ orderable: false, targets: 6 }, // Disable ordering on column 6 (actions)                
            ]
        });

        // Re-init functions on every table re-draw -- more info: https://datatables.net/reference/event/draw
        SystemMailMailSentMailManagementdatatable.on('draw', function () {
            initToggleToolbar();
            handleDeleteRows();
            toggleToolbars();
        });
    }
    // Search Datatable --- official docs reference: https://datatables.net/reference/api/search()
    var handleSearchDatatable = () => {
        const filterSearch = document.querySelector('[systemmailmailsentmailmanagement-table-filter="search"]');
        filterSearch.addEventListener('keyup', function (e) {
            var crr_search_str = $(filterSearch);

            if(crr_search_str.length > 3){
                SystemMailMailSentMailManagementdatatable.clear().draw();
                LoadSearchSystemMailMailSentMailManagementTableDataList();
            }
            else
            if (e.key === 'Enter' || e.keyCode === 13) {
                SystemMailMailSentMailManagementdatatable.clear().draw();
                LoadSearchSystemMailMailSentMailManagementTableDataList();

            }

            //datatable.search(e.target.value).draw();
        });
    }

    // Filter Datatable
    var handleFilterDatatable = () => {
        // Select filter options
        const filterForm = document.querySelector('[systemmailmailsentmailmanagement-table-filter="form"]');
        const filterButton = filterForm.querySelector('[systemmailmailsentmailmanagement-table-filter="filter"]');
        const selectOptions = filterForm.querySelectorAll('select');

        // Filter datatable on submit
        filterButton.addEventListener('click', function () {
            // Filter datatable
            SystemMailMailSentMailManagementdatatable.clear().draw();
            LoadFilterSystemMailMailSentMailManagementTableDataList();
            //var filterString = '';

            // Get filter values
            //selectOptions.forEach((item, index) => {
            //    if (item.value && item.value !== '') {
            //        if (index !== 0) {
            //            filterString += ' ';
            //        }

                    // Build filter value options
            //        filterString += item.value;
            //    }
            //});

            // Filter datatable --- official docs reference: https://datatables.net/reference/api/search()
            //SystemMailMailSentMailManagementdatatable.search(filterString).draw();
        });
    }

    // Reset Filter
    var handleResetForm = () => {
        // Select reset button
        const resetButton = document.querySelector('[systemmailmailsentmailmanagement-table-filter="reset"]');

        // Reset datatable
        resetButton.addEventListener('click', function () {
            // Select filter options
            const filterForm = document.querySelector('[systemmailmailsentmailmanagement-table-filter="form"]');
            const selectOptions = filterForm.querySelectorAll('select');

            // Reset select2 values -- more info: https://select2.org/programmatic-control/add-select-clear-items
            selectOptions.forEach(select => {
                $(select).val('').trigger('change');
            });

            // Reset datatable --- official docs reference: https://datatables.net/reference/api/search()
            SystemMailMailSentMailManagementdatatable.search('').draw();
        });
    }


    // Delete subscirption
    var handleDeleteRows = () => {
        // Select all delete buttons
        const deleteButtons = table.querySelectorAll('[data-kt-users-table-filter="delete_row"]');

        deleteButtons.forEach(d => {
            // Delete button on click
            d.addEventListener('click', function (e) {
                e.preventDefault();

                // Select parent row
                const parent = e.target.closest('tr');

                // Get user name
                const userName = parent.querySelectorAll('td')[1].querySelectorAll('a')[1].innerText;

                // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/
                Swal.fire({
                    text: "Bạn cho chắc chắn muốn xóa " + userName + "?",
                    icon: "warning",
                    showCancelButton: true,
                    buttonsStyling: false,
                    confirmButtonText: "Đồng ý",
                    cancelButtonText: "Hủy bỏ",
                    customClass: {
                        confirmButton: "btn fw-bold btn-danger",
                        cancelButton: "btn fw-bold btn-active-light-primary"
                    }
                }).then(function (result) {
                    if (result.value) {
                        Swal.fire({
                            text: "Bạn đã xóa " + userName + "!.",
                            icon: "success",
                            buttonsStyling: false,
                            confirmButtonText: "Ok",
                            customClass: {
                                confirmButton: "btn fw-bold btn-primary",
                            }
                        }).then(function () {
                            // Remove current row
                            SystemMailMailSentMailManagementdatatable.row($(parent)).remove().draw();
                            var crr_delete_uuid = $(parent).attr("id");
                            var obj=new SystemMailMailSentMailManagement();
                            obj.tDeleteApi(crr_delete_uuid);
                        }).then(function () {
                            // Detect checked checkboxes
                            toggleToolbars();
                        });
                    } else if (result.dismiss === 'cancel') {
                        Swal.fire({
                            text: "Đã hủy xóa" + customerName + ".",
                            icon: "error",
                            buttonsStyling: false,
                            confirmButtonText: "Ok",
                            customClass: {
                                confirmButton: "btn fw-bold btn-primary",
                            }
                        });
                    }
                });
            })
        });
    }

    // Init toggle toolbar
    var initToggleToolbar = () => {
        // Toggle selected action toolbar
        // Select all checkboxes
        const checkboxes = table.querySelectorAll('[name="checkbox-choice"]');

        // Select elements
        toolbarBase = document.querySelector('[SystemMailMailSentMailManagement-table-toolbar="base"]');
        toolbarSelected = document.querySelector('[SystemMailMailSentMailManagement-table-toolbar="selected"]');
        selectedCount = document.querySelector('[systemmailmailsentmailmanagement-table-select="selected_count"]');
        const deleteSelected = document.querySelector('[systemmailmailsentmailmanagement-table-select="delete_selected"]');

        // Toggle delete selected toolbar
        checkboxes.forEach(c => {
            // Checkbox on click event
            c.addEventListener('click', function () {
                setTimeout(function () {
                    toggleToolbars();
                }, 50);
            });
        });

        // Deleted selected rows
        deleteSelected.addEventListener('click', function () {
            // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/
            Swal.fire({
                html: "Bạn có chắc muốn xóa những bản ghi <b>Mail cần gửi</b> đã chọn?",
                icon: "warning",
                showCancelButton: true,
                buttonsStyling: false,
                confirmButtonText: "Đúng, xóa chúng!",
                cancelButtonText: "Không, hủy bỏ",
                customClass: {
                    confirmButton: "btn fw-bold btn-danger",
                    cancelButton: "btn fw-bold btn-active-light-primary"
                }
            }).then(function (result) {
                if (result.value) {
                    Swal.fire({
                        html: "Bạn đã xóa thành công những bản ghi <b>Mail cần gửi</b> đã chọn!.",
                        icon: "success",
                        buttonsStyling: false,
                        confirmButtonText: "OK",
                        customClass: {
                            confirmButton: "btn fw-bold btn-primary",
                        }
                    }).then(function () {
                        // Remove all selected customers
                        checkboxes.forEach(c => {
                            if (c.checked) {
                                var crr_tr = $(c.closest('tbody tr'))
                                if (crr_tr.length > 0){
                                    var crr_delete_uuid = crr_tr.attr("id");
                                    var obj=new SystemMailMailSentMailManagement();
                                    obj.tDeleteApi(crr_delete_uuid);
                                    SystemMailMailSentMailManagementdatatable.row(crr_tr).remove().draw();
                                }
                            }
                        });

                        // Remove header checked box
                        const headerCheckbox = table.querySelectorAll('[type="checkbox"]')[0];
                        headerCheckbox.checked = false;
                    }).then(function () {
                        toggleToolbars(); // Detect checked checkboxes
                        initToggleToolbar(); // Re-init toolbar to recalculate checkboxes
                    });
                } else if (result.dismiss === 'cancel') {
                    Swal.fire({
                        text: "Đã hủy tiến trình xóa những bản ghi đã chọn.",
                        icon: "error",
                        buttonsStyling: false,
                        confirmButtonText: "Ok",
                        customClass: {
                            confirmButton: "btn fw-bold btn-primary",
                        }
                    });
                }
            });
        });
    }

    // Toggle toolbars
    const toggleToolbars = () => {
        // Select refreshed checkbox DOM elements 
        const allCheckboxes = table.querySelectorAll('tbody [name="checkbox-choice"]');

        // Detect checkboxes state & count
        let checkedState = false;
        let count = 0;

        // Count checked boxes
        allCheckboxes.forEach(c => {
            if (c.checked) {
                checkedState = true;
                count++;
            }
        });

        // Toggle toolbars
        if (checkedState) {
            selectedCount.innerHTML = count;
            toolbarBase.classList.add('d-none');
            toolbarSelected.classList.remove('d-none');
        } else {
            toolbarBase.classList.remove('d-none');
            toolbarSelected.classList.add('d-none');
        }
    }

    return {
        // Public functions  
        init: function () {
            if (!table) {
                return;
            }

            initSystemMailMailTable();
            initToggleToolbar();
            handleSearchDatatable();
            handleResetForm();
            handleDeleteRows();
            handleFilterDatatable();

        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    MPSSystemMailMailSentMailManagementList.init();
});
