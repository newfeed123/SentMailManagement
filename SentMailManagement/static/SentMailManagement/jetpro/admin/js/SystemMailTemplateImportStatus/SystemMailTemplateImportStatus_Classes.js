
/**
 *  SystemMailTemplateImportStatusSentMailManagementClasses.js created by @truongnv(truongg.nv@gmail.com) 
 *  Quản lý trạng thái tải lên Mẫu email
 *  Định nghĩa, xử lý các sự kiện và các thông tin liên quan đến Trạng thái tải lên Mẫu email
 *  Tạo bởi @truongnv on 8/8/2023
 *  Model : SystemMailTemplateImportStatus ($app_name_verbose)
 */

var SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_LOAD_MEMCACHE = false;

class SystemMailTemplateImportStatusSentMailManagement {
    // ########## Init Objects ##############
    constructor(data = null) {
        if (data != null) {
            if (data.hasOwnProperty('id')) {
                this.id = data.id;
            } else {
                this.id = null;
            }

            this.__app_name__ = "SentMailManagement";

            this.__model_name__ = "SystemMailTemplateImportStatus";

            if (data.hasOwnProperty('uuid')) {
                this.uuid = data.uuid;
                this.editUrl = '/SentMailManagement/SystemMailTemplateImportStatus/edit/' + this.uuid + '/';
                this.detailUrl = '/SentMailManagement/SystemMailTemplateImportStatus/detail/' + this.uuid + '/';
            } else {
                // this.uuid = null;
            }

            

            if (data.hasOwnProperty('name')) {
                this.name = data.name;
            }
                

            if (data.hasOwnProperty('code')) {
                this.code = data.code;
            }
                

            if (data.hasOwnProperty('friendly_code')) {
                this.friendly_code = data.friendly_code;
            }
                

            if (data.hasOwnProperty('created_by')) {
                this.created_by = data.created_by;
            }
                

            if (data.hasOwnProperty('created_at')) {
                this.created_at = data.created_at;
            }
                

            if (data.hasOwnProperty('updated_by')) {
                this.updated_by = data.updated_by;
            }
                

            if (data.hasOwnProperty('updated_at')) {
                this.updated_at = data.updated_at;
            }
                

            if (data.hasOwnProperty('icon_class')) {
                this.icon_class = data.icon_class;
            }
                

            if (data.hasOwnProperty('color_class')) {
                this.color_class = data.color_class;
            }
                

        }
    }
    tGetFormData(formId = null) {
        var formEle = $("#" + formId);
        if (formEle.length > 0) {
            var chEle = formEle.find("#uuidSystemMailTemplateImportStatusSentMailManagementInputId");
            if (chEle.length > 0) {
                this.uuid = chEle.val();
            } else {
                // this.uuid = null;
            }
            

            var chEle_name = formEle.find("#nameSystemMailTemplateImportStatusSentMailManagementInputId");
            if (chEle_name.length > 0) {
                this.name = chEle_name.val();
            } 
                

            var chEle_code = formEle.find("#codeSystemMailTemplateImportStatusSentMailManagementInputId");
            if (chEle_code.length > 0) {
                this.code = chEle_code.val();
            } 
                

            var chEle_friendly_code = formEle.find("#friendly_codeSystemMailTemplateImportStatusSentMailManagementInputId");
            if (chEle_friendly_code.length > 0) {
                this.friendly_code = chEle_friendly_code.val();
            } 
                

            var chEle_created_by = formEle.find("#created_bySystemMailTemplateImportStatusSentMailManagementInputId");
            if (chEle_created_by.length > 0) {
                this.created_by = chEle_created_by.val();
            } 
                

            var chEle_created_at = formEle.find("#created_atSystemMailTemplateImportStatusSentMailManagementInputId");
            if (chEle_created_at.length > 0) {
                this.created_at = chEle_created_at.val();
            } 
                

            var chEle_updated_by = formEle.find("#updated_bySystemMailTemplateImportStatusSentMailManagementInputId");
            if (chEle_updated_by.length > 0) {
                this.updated_by = chEle_updated_by.val();
            } 
                

            var chEle_updated_at = formEle.find("#updated_atSystemMailTemplateImportStatusSentMailManagementInputId");
            if (chEle_updated_at.length > 0) {
                this.updated_at = chEle_updated_at.val();
            } 
                

            var chEle_icon_class = formEle.find("#icon_classSystemMailTemplateImportStatusSentMailManagementInputId");
            if (chEle_icon_class.length > 0) {
                this.icon_class = chEle_icon_class.val();
            } 
                

            var chEle_color_class = formEle.find("#color_classSystemMailTemplateImportStatusSentMailManagementInputId");
            if (chEle_color_class.length > 0) {
                this.color_class = chEle_color_class.val();
            } 
                
        }
        else {
            

            var chEle_name = $("#nameSystemMailTemplateImportStatusSentMailManagementInputId");
            if (chEle_name.length > 0) {
                this.name = chEle_name.val();
            } 
                

            var chEle_code = $("#codeSystemMailTemplateImportStatusSentMailManagementInputId");
            if (chEle_code.length > 0) {
                this.code = chEle_code.val();
            } 
                

            var chEle_friendly_code = $("#friendly_codeSystemMailTemplateImportStatusSentMailManagementInputId");
            if (chEle_friendly_code.length > 0) {
                this.friendly_code = chEle_friendly_code.val();
            } 
                

            var chEle_created_by = $("#created_bySystemMailTemplateImportStatusSentMailManagementInputId");
            if (chEle_created_by.length > 0) {
                this.created_by = chEle_created_by.val();
            } 
                

            var chEle_created_at = $("#created_atSystemMailTemplateImportStatusSentMailManagementInputId");
            if (chEle_created_at.length > 0) {
                this.created_at = chEle_created_at.val();
            } 
                

            var chEle_updated_by = $("#updated_bySystemMailTemplateImportStatusSentMailManagementInputId");
            if (chEle_updated_by.length > 0) {
                this.updated_by = chEle_updated_by.val();
            } 
                

            var chEle_updated_at = $("#updated_atSystemMailTemplateImportStatusSentMailManagementInputId");
            if (chEle_updated_at.length > 0) {
                this.updated_at = chEle_updated_at.val();
            } 
                

            var chEle_icon_class = $("#icon_classSystemMailTemplateImportStatusSentMailManagementInputId");
            if (chEle_icon_class.length > 0) {
                this.icon_class = chEle_icon_class.val();
            } 
                

            var chEle_color_class = $("#color_classSystemMailTemplateImportStatusSentMailManagementInputId");
            if (chEle_color_class.length > 0) {
                this.color_class = chEle_color_class.val();
            } 
                


        }
    }

    // ########## [FILL FORM] Objects to FRONT END ##############
    tFillForm() {
        var self = this;
        
            try{
                var j_ele_name = $("#nameSystemMailTemplateImportStatusSentMailManagementInputId");
                if (j_ele_name.length > 0){
                    if (j_ele_name.attr('name') != 'uuid'){
                        j_ele_name.val(self.name).change();
                    }
                }
                else{
                    // j_ele_name.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_code = $("#codeSystemMailTemplateImportStatusSentMailManagementInputId");
                if (j_ele_code.length > 0){
                    if (j_ele_code.attr('name') != 'uuid'){
                        j_ele_code.val(self.code).change();
                    }
                }
                else{
                    // j_ele_code.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_friendly_code = $("#friendly_codeSystemMailTemplateImportStatusSentMailManagementInputId");
                if (j_ele_friendly_code.length > 0){
                    if (j_ele_friendly_code.attr('name') != 'uuid'){
                        j_ele_friendly_code.val(self.friendly_code).change();
                    }
                }
                else{
                    // j_ele_friendly_code.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_created_by = $("#created_bySystemMailTemplateImportStatusSentMailManagementInputId");
                if (j_ele_created_by.length > 0){
                    if (j_ele_created_by.attr('name') != 'uuid'){
                        j_ele_created_by.val(self.created_by).change();
                    }
                }
                else{
                    // j_ele_created_by.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_created_at = $("#created_atSystemMailTemplateImportStatusSentMailManagementInputId");
                if (j_ele_created_at.length > 0){
                    var dateObj = new Date(Date.parse(self.created_at)); 
                    if (dateObj != "Invalid Date"){
                        var newdate = strftime(dateObj,'DD/MM/YYYY HH:mm');
                        console.log('newdate = ', newdate);
                        j_ele_created_at.val(newdate).change();
                    }
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_updated_by = $("#updated_bySystemMailTemplateImportStatusSentMailManagementInputId");
                if (j_ele_updated_by.length > 0){
                    if (j_ele_updated_by.attr('name') != 'uuid'){
                        j_ele_updated_by.val(self.updated_by).change();
                    }
                }
                else{
                    // j_ele_updated_by.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_updated_at = $("#updated_atSystemMailTemplateImportStatusSentMailManagementInputId");
                if (j_ele_updated_at.length > 0){
                    var dateObj = new Date(Date.parse(self.updated_at)); 
                    if (dateObj != "Invalid Date"){
                        var newdate = strftime(dateObj,'DD/MM/YYYY HH:mm');
                        console.log('newdate = ', newdate);
                        j_ele_updated_at.val(newdate).change();
                    }
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_icon_class = $("#icon_classSystemMailTemplateImportStatusSentMailManagementInputId");
                if (j_ele_icon_class.length > 0){
                    if (j_ele_icon_class.attr('name') != 'uuid'){
                        j_ele_icon_class.val(self.icon_class).change();
                    }
                }
                else{
                    // j_ele_icon_class.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_color_class = $("#color_classSystemMailTemplateImportStatusSentMailManagementInputId");
                if (j_ele_color_class.length > 0){
                    if (j_ele_color_class.attr('name') != 'uuid'){
                        j_ele_color_class.val(self.color_class).change();
                    }
                }
                else{
                    // j_ele_color_class.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
        return self;
    }

    // ########## [FILL FORM] Objects to FRONT END ##############
    tFillCreateForm(formId = null) {
        
        
            try{
                var j_ele_name = $("#nameSystemMailTemplateImportStatusSentMailManagementCreateInputId");
                if (j_ele_name.length > 0){
                    if (j_ele_name.attr('name') != 'uuid'){
                        j_ele_name.val(self.name).change();
                    }
                }
                else{
                    // j_ele_name.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_code = $("#codeSystemMailTemplateImportStatusSentMailManagementCreateInputId");
                if (j_ele_code.length > 0){
                    if (j_ele_code.attr('name') != 'uuid'){
                        j_ele_code.val(self.code).change();
                    }
                }
                else{
                    // j_ele_code.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_friendly_code = $("#friendly_codeSystemMailTemplateImportStatusSentMailManagementCreateInputId");
                if (j_ele_friendly_code.length > 0){
                    if (j_ele_friendly_code.attr('name') != 'uuid'){
                        j_ele_friendly_code.val(self.friendly_code).change();
                    }
                }
                else{
                    // j_ele_friendly_code.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_created_by = $("#created_bySystemMailTemplateImportStatusSentMailManagementCreateInputId");
                if (j_ele_created_by.length > 0){
                    if (j_ele_created_by.attr('name') != 'uuid'){
                        j_ele_created_by.val(self.created_by).change();
                    }
                }
                else{
                    // j_ele_created_by.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_created_at = $("#created_atSystemMailTemplateImportStatusSentMailManagementCreateInputId");
                if (j_ele_created_at.length > 0){
                    var dateObj = new Date(Date.parse(self.created_at)); 
                    if (dateObj != "Invalid Date"){
                        var newdate = strftime(dateObj,'DD/MM/YYYY HH:mm');
                        console.log('newdate = ', newdate);
                        j_ele_created_at.val(newdate).change();
                    }
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_updated_by = $("#updated_bySystemMailTemplateImportStatusSentMailManagementCreateInputId");
                if (j_ele_updated_by.length > 0){
                    if (j_ele_updated_by.attr('name') != 'uuid'){
                        j_ele_updated_by.val(self.updated_by).change();
                    }
                }
                else{
                    // j_ele_updated_by.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_updated_at = $("#updated_atSystemMailTemplateImportStatusSentMailManagementCreateInputId");
                if (j_ele_updated_at.length > 0){
                    var dateObj = new Date(Date.parse(self.updated_at)); 
                    if (dateObj != "Invalid Date"){
                        var newdate = strftime(dateObj,'DD/MM/YYYY HH:mm');
                        console.log('newdate = ', newdate);
                        j_ele_updated_at.val(newdate).change();
                    }
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_icon_class = $("#icon_classSystemMailTemplateImportStatusSentMailManagementCreateInputId");
                if (j_ele_icon_class.length > 0){
                    if (j_ele_icon_class.attr('name') != 'uuid'){
                        j_ele_icon_class.val(self.icon_class).change();
                    }
                }
                else{
                    // j_ele_icon_class.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_color_class = $("#color_classSystemMailTemplateImportStatusSentMailManagementCreateInputId");
                if (j_ele_color_class.length > 0){
                    if (j_ele_color_class.attr('name') != 'uuid'){
                        j_ele_color_class.val(self.color_class).change();
                    }
                }
                else{
                    // j_ele_color_class.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
        if (formId != null) {

            var arr_create_table = [];
            var form = $('#' + formId);
            if (form.length > 0) {
                form.find("table").each(function() {
                    console.log("table in form" + $(this));
                    var obj = $(this);
                    arr_create_table.push(obj);
                })
            }
            if (arr_create_table.length > 0) {
                arr_create_table.forEach(element => {
                    var JS_MODEL_APPNAME = element.attr("app-model-name");
                    var search_data = element.attr("parent-attr-name") + "__uuid=" + self.uuid;
                    window[JS_MODEL_APPNAME + "FillTableInForm"](1, search_data, element.attr("id"), "Create".toLowerCase());
                });
            }
        }




        return self;
    }
    
    // ########## [FILL FORM] Objects to FRONT END ##############
    tFillEditForm(formId = null) {
        self = this
        
            try{
                var j_ele_name = $("#nameSystemMailTemplateImportStatusSentMailManagementEditInputId");
                if (j_ele_name.length > 0){
                    j_ele_name.attr("allow_tracker_change","false");
                    if (j_ele_name.attr('name') != 'uuid'){
                        j_ele_name.val(self.name).change();
                        j_ele_name.attr("allow_tracker_change","true");
                    }
                }
                else{
                    // j_ele_name.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_code = $("#codeSystemMailTemplateImportStatusSentMailManagementEditInputId");
                if (j_ele_code.length > 0){
                    j_ele_code.attr("allow_tracker_change","false");
                    if (j_ele_code.attr('name') != 'uuid'){
                        j_ele_code.val(self.code).change();
                        j_ele_code.attr("allow_tracker_change","true");
                    }
                }
                else{
                    // j_ele_code.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_friendly_code = $("#friendly_codeSystemMailTemplateImportStatusSentMailManagementEditInputId");
                if (j_ele_friendly_code.length > 0){
                    j_ele_friendly_code.attr("allow_tracker_change","false");
                    if (j_ele_friendly_code.attr('name') != 'uuid'){
                        j_ele_friendly_code.val(self.friendly_code).change();
                        j_ele_friendly_code.attr("allow_tracker_change","true");
                    }
                }
                else{
                    // j_ele_friendly_code.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_created_by = $("#created_bySystemMailTemplateImportStatusSentMailManagementEditInputId");
                if (j_ele_created_by.length > 0){
                    j_ele_created_by.attr("allow_tracker_change","false");
                    if (j_ele_created_by.attr('name') != 'uuid'){
                        j_ele_created_by.val(self.created_by).change();
                        j_ele_created_by.attr("allow_tracker_change","true");
                    }
                }
                else{
                    // j_ele_created_by.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_created_at = $("#created_atSystemMailTemplateImportStatusSentMailManagementEditInputId");
                if (j_ele_created_at.length > 0){
                    var dateObj = new Date(Date.parse(self.created_at)); 
                    if (dateObj != "Invalid Date"){
                        var newdate = strftime(dateObj,'DD/MM/YYYY HH:mm');
                        console.log('newdate = ', newdate);
                        j_ele_created_at.val(newdate).change();
                    }
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_updated_by = $("#updated_bySystemMailTemplateImportStatusSentMailManagementEditInputId");
                if (j_ele_updated_by.length > 0){
                    j_ele_updated_by.attr("allow_tracker_change","false");
                    if (j_ele_updated_by.attr('name') != 'uuid'){
                        j_ele_updated_by.val(self.updated_by).change();
                        j_ele_updated_by.attr("allow_tracker_change","true");
                    }
                }
                else{
                    // j_ele_updated_by.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_updated_at = $("#updated_atSystemMailTemplateImportStatusSentMailManagementEditInputId");
                if (j_ele_updated_at.length > 0){
                    var dateObj = new Date(Date.parse(self.updated_at)); 
                    if (dateObj != "Invalid Date"){
                        var newdate = strftime(dateObj,'DD/MM/YYYY HH:mm');
                        console.log('newdate = ', newdate);
                        j_ele_updated_at.val(newdate).change();
                    }
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_icon_class = $("#icon_classSystemMailTemplateImportStatusSentMailManagementEditInputId");
                if (j_ele_icon_class.length > 0){
                    j_ele_icon_class.attr("allow_tracker_change","false");
                    if (j_ele_icon_class.attr('name') != 'uuid'){
                        j_ele_icon_class.val(self.icon_class).change();
                        j_ele_icon_class.attr("allow_tracker_change","true");
                    }
                }
                else{
                    // j_ele_icon_class.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_color_class = $("#color_classSystemMailTemplateImportStatusSentMailManagementEditInputId");
                if (j_ele_color_class.length > 0){
                    j_ele_color_class.attr("allow_tracker_change","false");
                    if (j_ele_color_class.attr('name') != 'uuid'){
                        j_ele_color_class.val(self.color_class).change();
                        j_ele_color_class.attr("allow_tracker_change","true");
                    }
                }
                else{
                    // j_ele_color_class.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
        if (formId != null) {

            var arr_edit_table = [];
            var form = $('#' + formId);
            if (form.length > 0) {
                form.find("table").each(function() {
                    console.log("table in form" + $(this));
                    var obj = $(this);
                    arr_edit_table.push(obj);
                })
            }
            if (arr_edit_table.length > 0) {
                arr_edit_table.forEach(element => {
                    var JS_MODEL_APPNAME = element.attr("app-model-name");
                    var search_data = element.attr("parent-attr-name") + "__uuid=" + self.uuid;
                    window[JS_MODEL_APPNAME + "FillTableInForm"](1, search_data, element.attr("id"), "Edit".toLowerCase());
                });
            }
        }




        return self;
    }

    // ########## [FILL FORM] Objects to FRONT END ##############
    tFillEditModalForm(formId = null) {
        self = this
                            
        
            try{
                var j_ele_name = $("#nameSystemMailTemplateImportStatusSentMailManagementEditModalInputId");
                if (j_ele_name.length > 0){
                    j_ele_name.attr("allow_tracker_change","false");
                    if (j_ele_name.attr('name') != 'uuid'){
                        j_ele_name.val(self.name).change();
                        j_ele_name.attr("allow_tracker_change","true");
                        
                    }
                }
                else{
                    // j_ele_name.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_code = $("#codeSystemMailTemplateImportStatusSentMailManagementEditModalInputId");
                if (j_ele_code.length > 0){
                    j_ele_code.attr("allow_tracker_change","false");
                    if (j_ele_code.attr('name') != 'uuid'){
                        j_ele_code.val(self.code).change();
                        j_ele_code.attr("allow_tracker_change","true");
                        
                    }
                }
                else{
                    // j_ele_code.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_friendly_code = $("#friendly_codeSystemMailTemplateImportStatusSentMailManagementEditModalInputId");
                if (j_ele_friendly_code.length > 0){
                    j_ele_friendly_code.attr("allow_tracker_change","false");
                    if (j_ele_friendly_code.attr('name') != 'uuid'){
                        j_ele_friendly_code.val(self.friendly_code).change();
                        j_ele_friendly_code.attr("allow_tracker_change","true");
                        
                    }
                }
                else{
                    // j_ele_friendly_code.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_created_by = $("#created_bySystemMailTemplateImportStatusSentMailManagementEditModalInputId");
                if (j_ele_created_by.length > 0){
                    j_ele_created_by.attr("allow_tracker_change","false");
                    if (j_ele_created_by.attr('name') != 'uuid'){
                        j_ele_created_by.val(self.created_by).change();
                        j_ele_created_by.attr("allow_tracker_change","true");
                        
                    }
                }
                else{
                    // j_ele_created_by.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_created_at = $("#created_atSystemMailTemplateImportStatusSentMailManagementEditModalInputId");
                if (j_ele_created_at.length > 0){
                    var dateObj = new Date(Date.parse(self.created_at)); 
                    if (dateObj != "Invalid Date"){
                        var newdate = strftime(dateObj,'DD/MM/YYYY HH:mm');
                        console.log('newdate = ', newdate);
                        j_ele_created_at.val(newdate).change();
                    }
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_updated_by = $("#updated_bySystemMailTemplateImportStatusSentMailManagementEditModalInputId");
                if (j_ele_updated_by.length > 0){
                    j_ele_updated_by.attr("allow_tracker_change","false");
                    if (j_ele_updated_by.attr('name') != 'uuid'){
                        j_ele_updated_by.val(self.updated_by).change();
                        j_ele_updated_by.attr("allow_tracker_change","true");
                        
                    }
                }
                else{
                    // j_ele_updated_by.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_updated_at = $("#updated_atSystemMailTemplateImportStatusSentMailManagementEditModalInputId");
                if (j_ele_updated_at.length > 0){
                    var dateObj = new Date(Date.parse(self.updated_at)); 
                    if (dateObj != "Invalid Date"){
                        var newdate = strftime(dateObj,'DD/MM/YYYY HH:mm');
                        console.log('newdate = ', newdate);
                        j_ele_updated_at.val(newdate).change();
                    }
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_icon_class = $("#icon_classSystemMailTemplateImportStatusSentMailManagementEditModalInputId");
                if (j_ele_icon_class.length > 0){
                    j_ele_icon_class.attr("allow_tracker_change","false");
                    if (j_ele_icon_class.attr('name') != 'uuid'){
                        j_ele_icon_class.val(self.icon_class).change();
                        j_ele_icon_class.attr("allow_tracker_change","true");
                        
                    }
                }
                else{
                    // j_ele_icon_class.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_color_class = $("#color_classSystemMailTemplateImportStatusSentMailManagementEditModalInputId");
                if (j_ele_color_class.length > 0){
                    j_ele_color_class.attr("allow_tracker_change","false");
                    if (j_ele_color_class.attr('name') != 'uuid'){
                        j_ele_color_class.val(self.color_class).change();
                        j_ele_color_class.attr("allow_tracker_change","true");
                        
                    }
                }
                else{
                    // j_ele_color_class.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
        if (formId != null) {

            var arr_edit_table = [];
            var form = $('#' + formId);
            // update uuid
            form.attr("obj_uuid",self["uuid"]);         
            if (form.length > 0) {
                form.find("table").each(function() {
                    console.log("table in form" + $(this));
                    var obj = $(this);
                    arr_edit_table.push(obj);
                })
            }
            if (arr_edit_table.length > 0) {
                arr_edit_table.forEach(element => {
                    var JS_MODEL_APPNAME = element.attr("app-model-name");
                    var search_data = element.attr("parent-attr-name") + "__uuid=" + self.uuid;
                    window[JS_MODEL_APPNAME + "FillTableInForm"](1, search_data, element.attr("id"), "Edit".toLowerCase());
                });
            }
        }




        return self;
    }

    // ########## [FILL FORM] Objects to FRONT END ##############
    tFillDetailForm(formId = null) {
        self = this
        
            try{
                var j_ele_name = $("#nameSystemMailTemplateImportStatusSentMailManagementDetailInputId");
                if (j_ele_name.length > 0){
                    if (j_ele_name.attr('name') != 'uuid'){
                        j_ele_name.html(self.name).change();
                    }
                }
                else{
                    // j_ele_name.html(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_code = $("#codeSystemMailTemplateImportStatusSentMailManagementDetailInputId");
                if (j_ele_code.length > 0){
                    if (j_ele_code.attr('name') != 'uuid'){
                        j_ele_code.html(self.code).change();
                    }
                }
                else{
                    // j_ele_code.html(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_friendly_code = $("#friendly_codeSystemMailTemplateImportStatusSentMailManagementDetailInputId");
                if (j_ele_friendly_code.length > 0){
                    if (j_ele_friendly_code.attr('name') != 'uuid'){
                        j_ele_friendly_code.html(self.friendly_code).change();
                    }
                }
                else{
                    // j_ele_friendly_code.html(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_created_by = $("#created_bySystemMailTemplateImportStatusSentMailManagementDetailInputId");
                if (j_ele_created_by.length > 0){
                    if (j_ele_created_by.attr('name') != 'uuid'){
                        j_ele_created_by.html(self.created_by).change();
                    }
                }
                else{
                    // j_ele_created_by.html(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_created_at = $("#created_atSystemMailTemplateImportStatusSentMailManagementDetailInputId");
                if (j_ele_created_at.length > 0){
                    var dateObj = new Date(Date.parse(self.created_at)); 
                    if (dateObj != "Invalid Date"){
                        var newdate = strftime(dateObj,'DD/MM/YYYY HH:mm');
                        console.log('newdate = ', newdate);
                        j_ele_created_at.html(newdate).change();
                    }
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_updated_by = $("#updated_bySystemMailTemplateImportStatusSentMailManagementDetailInputId");
                if (j_ele_updated_by.length > 0){
                    if (j_ele_updated_by.attr('name') != 'uuid'){
                        j_ele_updated_by.html(self.updated_by).change();
                    }
                }
                else{
                    // j_ele_updated_by.html(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_updated_at = $("#updated_atSystemMailTemplateImportStatusSentMailManagementDetailInputId");
                if (j_ele_updated_at.length > 0){
                    var dateObj = new Date(Date.parse(self.updated_at)); 
                    if (dateObj != "Invalid Date"){
                        var newdate = strftime(dateObj,'DD/MM/YYYY HH:mm');
                        console.log('newdate = ', newdate);
                        j_ele_updated_at.html(newdate).change();
                    }
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_icon_class = $("#icon_classSystemMailTemplateImportStatusSentMailManagementDetailInputId");
                if (j_ele_icon_class.length > 0){
                    if (j_ele_icon_class.attr('name') != 'uuid'){
                        j_ele_icon_class.html(self.icon_class).change();
                    }
                }
                else{
                    // j_ele_icon_class.html(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_color_class = $("#color_classSystemMailTemplateImportStatusSentMailManagementDetailInputId");
                if (j_ele_color_class.length > 0){
                    if (j_ele_color_class.attr('name') != 'uuid'){
                        j_ele_color_class.html(self.color_class).change();
                    }
                }
                else{
                    // j_ele_color_class.html(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
        if (formId != null) {

            var arr_detail_table = [];
            var form = $('#' + formId);
            if (form.length > 0) {
                form.find("table").each(function() {
                    console.log("table in form" + $(this));
                    var obj = $(this);
                    arr_detail_table.push(obj);
                })
            }
            
            if (arr_detail_table.length > 0) {
                arr_detail_table.forEach(element => {
                    var JS_MODEL_APPNAME = element.attr("app-model-name");
                    var search_data = element.attr("parent-attr-name") + "__uuid=" + self.uuid;
                    window[JS_MODEL_APPNAME + "FillTableInForm"](1, search_data, element.attr("id"), "Detail".toLowerCase());
                });
            }
        }




        return self;
    }
    
    // ########## [FILL FORM] Objects to FRONT END ##############
    tFillDetailModalForm(formId = null) {
        self = this
        
            try{
                var j_ele_name = $("#nameSystemMailTemplateImportStatusSentMailManagementDetailModalInputId");
                if (j_ele_name.length > 0){
                    if (j_ele_name.attr('name') != 'uuid'){
                        j_ele_name.html(self.name).change();
                    }
                }
                else{
                    // j_ele_name.html(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_code = $("#codeSystemMailTemplateImportStatusSentMailManagementDetailModalInputId");
                if (j_ele_code.length > 0){
                    if (j_ele_code.attr('name') != 'uuid'){
                        j_ele_code.html(self.code).change();
                    }
                }
                else{
                    // j_ele_code.html(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_friendly_code = $("#friendly_codeSystemMailTemplateImportStatusSentMailManagementDetailModalInputId");
                if (j_ele_friendly_code.length > 0){
                    if (j_ele_friendly_code.attr('name') != 'uuid'){
                        j_ele_friendly_code.html(self.friendly_code).change();
                    }
                }
                else{
                    // j_ele_friendly_code.html(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_created_by = $("#created_bySystemMailTemplateImportStatusSentMailManagementDetailModalInputId");
                if (j_ele_created_by.length > 0){
                    if (j_ele_created_by.attr('name') != 'uuid'){
                        j_ele_created_by.html(self.created_by).change();
                    }
                }
                else{
                    // j_ele_created_by.html(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_created_at = $("#created_atSystemMailTemplateImportStatusSentMailManagementDetailModalInputId");
                if (j_ele_created_at.length > 0){
                    var dateObj = new Date(Date.parse(self.created_at)); 
                    if (dateObj != "Invalid Date"){
                        var newdate = strftime(dateObj,'DD/MM/YYYY HH:mm');
                        console.log('newdate = ', newdate);
                        j_ele_created_at.html(newdate).change();
                    }
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_updated_by = $("#updated_bySystemMailTemplateImportStatusSentMailManagementDetailModalInputId");
                if (j_ele_updated_by.length > 0){
                    if (j_ele_updated_by.attr('name') != 'uuid'){
                        j_ele_updated_by.html(self.updated_by).change();
                    }
                }
                else{
                    // j_ele_updated_by.html(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_updated_at = $("#updated_atSystemMailTemplateImportStatusSentMailManagementDetailModalInputId");
                if (j_ele_updated_at.length > 0){
                    var dateObj = new Date(Date.parse(self.updated_at)); 
                    if (dateObj != "Invalid Date"){
                        var newdate = strftime(dateObj,'DD/MM/YYYY HH:mm');
                        console.log('newdate = ', newdate);
                        j_ele_updated_at.html(newdate).change();
                    }
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_icon_class = $("#icon_classSystemMailTemplateImportStatusSentMailManagementDetailModalInputId");
                if (j_ele_icon_class.length > 0){
                    if (j_ele_icon_class.attr('name') != 'uuid'){
                        j_ele_icon_class.html(self.icon_class).change();
                    }
                }
                else{
                    // j_ele_icon_class.html(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_color_class = $("#color_classSystemMailTemplateImportStatusSentMailManagementDetailModalInputId");
                if (j_ele_color_class.length > 0){
                    if (j_ele_color_class.attr('name') != 'uuid'){
                        j_ele_color_class.html(self.color_class).change();
                    }
                }
                else{
                    // j_ele_color_class.html(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
        if (formId != null) {

            var arr_detail_table = [];
            var form = $('#' + formId);
            if (form.length > 0) {
                form.find("table").each(function() {
                    console.log("table in form" + $(this));
                    var obj = $(this);
                    arr_detail_table.push(obj);
                })
            }
            
            if (arr_detail_table.length > 0) {
                arr_detail_table.forEach(element => {
                    var JS_MODEL_APPNAME = element.attr("app-model-name");
                    var search_data = element.attr("parent-attr-name") + "__uuid=" + self.uuid;
                    window[JS_MODEL_APPNAME + "FillTableInForm"](1, search_data, element.attr("id"), "Detail".toLowerCase());
                });
            }
        }




        return self;
    }
    


    // ########## [UPDATE] post Objects to REST API --> return object if success ##############
    tUpdatePostApi(formId = null) {
        this.callAjax = null ;

        $.ajaxSetup({
            headers: {
                'CSRFToken': getCSRFTokenValue(),
                'X-CSRFToken': getCSRFTokenValue(), // for --> SessionAuthentication
            },
            tryCount: 0,
            retryLimit: 3,

        });
        var self = this;
        var formData;
        var form;
        var arr_table = [];
        if (formId == null) {
            formData = new FormData($('#SystemMailTemplateImportStatusSentMailManagementCreateFormId')[0]);
            form = $('#SystemMailTemplateImportStatusSentMailManagementCreateFormId');

        } else {
            form = $('#' + formId);
            if (form.length > 0) {
                form.find("table").each(function() {
                    console.log("table in form" + $(this));
                    var obj = $(this);
                    arr_table.push(obj);

                })
            }
            formData = new FormData();
            form.find(':input').each(function() {
                var attr = $(this).attr('name');
                var type = $(this).attr('type');
                var data_type = $(this).attr('data-type');
                var date = $(this).attr('data-datepicker');
                if (($(this).closest("table").length > 0 && $(this).closest("table").closest("form").attr("id") == formId) || ($(this).closest("form").length > 0 && $(this).closest("form").attr("id") != formId)) {
                    return;
                }
                if (typeof attr !== 'undefined' && attr !== false) {
                    if (typeof date !== 'undefined' && date !== false) {
                        var datetime_format = $(this).attr("format");
                        formData.append($(this).attr('name'), strptime($(this).val(), datetime_format));
                    } else {
                        if (type == 'file') {
                            var files = $(this)[0].files;
                            // Check file selected or not
                            if (files.length > 0) {
                                formData.append($(this).attr('name'), files[0]);
                            }
                        } else if (type == 'checkbox') {
                            formData.append($(this).attr('name'), $(this).is(":checked"));
                        } else if (type == 'radio') {

                            if ($(this).is(":checked")) {
                                formData.set($(this).attr('name'), $(this).val());
                            }
                        } else {

                            if (Array.isArray($(this).val())) {
                                var arr = $(this).val();
                                for (var i in arr)
                                    formData.append($(this).attr('name'), arr[i]);
                            } else {
                                if (data_type == "currency") {
                                    var currency_value = formatNumber($(this).val());
                                    currency_value = currency_value.replaceAll(",", "");
                                    formData.append($(this).attr('name'), currency_value);

                                } else {
                                    formData.append($(this).attr('name'), $(this).val());
                                }
                            }
                        }
                    }
                }
            });
        }
        if (formData.get('uuid') == null || formData.get('uuid') == '' || formData.get('uuid') == null) {
            this.uuid = form.attr("obj_uuid");
            if(this.uuid == undefined){
                return;
            }
        } else {
            this.uuid = formData.get('uuid');
        }

        var file_eles = $(".SystemMailTemplateImportStatus-SentMailManagement");
        for (var i = 0; i < file_eles.length; i++) {
            console.log('file_eles[i] = ', file_eles[i]);
            var files = file_eles[i].files;
            // Check file selected or not
            if (files.length > 0) {
                formData.append(file_eles[i].getAttribute('name'), files[0]);
            }
        }

        var is_has_children = false;
        var is_save_self_table = false;
        var is_notification = false;
        var is_done = false;
        if (arr_table.length > 0) {
            arr_table.forEach(element => {
                var model_name = element.attr("model_name");
                var depend = element.attr("depend");
                var tr_length = element.find("tbody").find("tr").length;
                if (tr_length > 1) {
                    if (depend === 'self-depend') {
                        is_save_self_table = true;
                        window[model_name + "SaveInlineTable"](element.attr("id"), null, null, formData);
                        arr_table.pop(element);
                    } else {
                        element.attr("parent-attr-uuid", formData.get("uuid"));
                        is_has_children = true;
                    }
                }
            });
        }
        
        if (!is_save_self_table) {
            this.callAjax = $.ajax({
                url: SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_UPDATE_URL + self.uuid + "/",
                // type: "PUT",
                type: "PATCH",
                async: false,
                cache: false,
                timeout: 30000,

                //data: JSON.stringify({data:"test"}),
                //data: JSON.stringify(self),
                data: formData,
                //contentType: "multipart/form-data",
                contentType: false,
                // dataType : false,
                processData: false,
                success: function(data) {
                    self = new SystemMailTemplateImportStatusSentMailManagement(data);
                    self.tDatatableUpdateRow();
                    //SystemMailTemplateImportStatusSentMailManagementGetDataTable(SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["current_page"])
                    //$(location).prop('href', "/SentMailManagement/SystemMailTemplateImportStatus/detail/" + self.uuid + "/");
                    if (systemmailtemplateimportstatussentmailmanagement_is_continue_form) {
                        systemmailtemplateimportstatussentmailmanagement_is_continue_form = false;
                        if (!is_notification && (is_done || !is_has_children)) {
                            is_notification = true;
                            //$model_notice_update_success
                        }
                        
                     
                    } else if (systemmailtemplateimportstatussentmailmanagement_is_continue_modal) {
                        systemmailtemplateimportstatussentmailmanagement_is_continue_modal = false;
                        //SystemMailTemplateImportStatusRefreshCreateModal();
                        if (!is_notification && (is_done || !is_has_children)) {
                            is_notification = true;
                            //$model_notice_update_success
                        }
                    } else if (systemmailtemplateimportstatussentmailmanagement_is_continue_back_last_url) {
                        last_url = localStorage.getItem("last_url");
                        location.href = last_url;
                    } else {
                        form.closest('.modal').modal('hide');
                    }
                    // self.tFillForm();
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    console.log(xhr.status);
                    console.log(thrownError);
                    if (xhr.textStatus == 'timeout') {
                        this.tryCount++;
                        if (this.tryCount <= this.retryLimit) {
                            //try again
                            $.ajax(this);
                            return;
                        }
                        return;
                    }
                    
                },
            });
        }
        if (is_has_children) {
            arr_table.forEach(element => {
                var model_name = element.attr("model_name");
                var depend = element.attr("depend");
                if (depend != 'self-depend') {
                    window[model_name + "SaveInlineTable"](element.attr("id"), null, self.uuid);
                }
            });
            is_done = true;
        }
        if (is_done || !is_has_children) {
            if (systemmailtemplateimportstatussentmailmanagement_is_continue_form) {
                systemmailtemplateimportstatussentmailmanagement_is_continue_form = false;
                if (!is_notification && (is_done || !is_has_children)) {
                    is_notification = true;
                    //$model_notice_update_success
                }
                
                if(self.uuid != undefined && self.uuid != null && self.uuid != "")
                {
                    var org_app_prefixId = ""
                    if($("#org_app_prefixId").length > 0){
                        org_app_prefixId = $("#org_app_prefixId").val();
                    }
                    $(location).prop('href', `${org_app_prefixId}/SentMailManagement/SystemMailTemplateImportStatus/detail/${self.uuid}/`);
                }
            } else if (systemmailtemplateimportstatussentmailmanagement_is_continue_modal) {
                systemmailtemplateimportstatussentmailmanagement_is_continue_modal = false;
                //SystemMailTemplateImportStatusRefreshCreateModal();
                if (!is_notification && (is_done || !is_has_children)) {
                    is_notification = true;
                    //$model_notice_update_success
                }
            } else if (systemmailtemplateimportstatussentmailmanagement_is_continue_back_last_url) {
                last_url = localStorage.getItem("last_url");
                location.href = last_url;
            } else {
                form.closest('.modal').modal('hide');
                if (!is_notification && (is_done || !is_has_children)) {
                    is_notification = true;
                    //$model_notice_update_success
                }
            }
        }
        return self;
    }

    // ########## [FORM] [CREATE] post Objects to REST API --> return object if success ##############
    tCreateNewPostFormApi(formId = null) {
        this.callAjax = null ;
        $.ajaxSetup({
            headers: {
                'CSRFToken': getCSRFTokenValue(),
                'X-CSRFToken': getCSRFTokenValue(), // for --> SessionAuthentication
            },
            tryCount: 0,
            retryLimit: 3,
        });
        $('#idSystemMailTemplateImportStatusSentMailManagementInputId').val(null);
        $('#uuidSystemMailTemplateImportStatusSentMailManagementInputId').val(uuidv4());
        var self = this;
        var formData;
        var arr_table = [];
        if (formId == null) {
            formId = 'SystemMailTemplateImportStatusSentMailManagementCreateFormId';
        }

        var form = $('#' + formId);
        if (form.length > 0) {
            form.find("table").each(function() {
                console.log("table in form" + $(this));
                var obj = $(this);
                arr_table.push(obj);
                // $(this).remove();

            })
        }
        formData = new FormData();
        form.find(':input').each(function() {
            var attr = $(this).attr('name');
            var type = $(this).attr('type');
            var data_type = $(this).attr('data-type');
            //data-type='currency'
            var date = $(this).attr('data-datepicker');
            console.log('closest("table") :', $(this).closest("table").length);
            console.log('$(this).closest("table") > 0 :', $(this).closest("table").length > 0);
            console.log('$(this).closest("table").closest("form") :', $(this).closest("table").closest("form"));
            console.log('$(this).closest("table").closest("form") == formId) :', $(this).closest("table").closest("form") == formId);
            console.log('$(this).closest("form").id != formId :', $(this).closest("form").id != formId);
            console.log('$(this).closest("form").id :', $(this).closest("form").attr("id"));
            console.log(' formId :', formId);
            console.log('$(this).closest("form").length > 0 :', $(this).closest("form").length > 0);
            console.log('($(this).closest("form").length > 0 && $(this).closest("form").id != formId) :', ($(this).closest("form").length > 0 && $(this).closest("form").attr("id") != formId));
            if (($(this).closest("table").length > 0 && $(this).closest("table").closest("form").attr("id") == formId) || ($(this).closest("form").length > 0 && $(this).closest("form").attr("id") != formId)) {
                return;
            }
            if (typeof attr !== 'undefined' && attr !== false) {
                if (typeof date !== 'undefined' && date !== false) {
                    var datetime_format = $(this).attr("format")
                    formData.append($(this).attr('name'), strptime($(this).val(), datetime_format));
                } else {
                    if (type == 'file') {
                        var files = $(this)[0].files;
                        // Check file selected or not
                        if (files.length > 0) {
                            formData.append($(this).attr('name'), files[0]);
                        }
                    } else if (type == 'checkbox') {
                        formData.append($(this).attr('name'), $(this).is(":checked"));
                    } else if (type == 'radio') {

                        if ($(this).is(":checked")) {
                            formData.set($(this).attr('name'), $(this).val());
                        }
                    } else {

                        if (Array.isArray($(this).val())) {
                            var arr = $(this).val();
                            for (var i in arr)
                                formData.append($(this).attr('name'), arr[i]);
                        } else {
                            if (data_type == "currency") {
                                var currency_value = formatNumber($(this).val());
                                currency_value = currency_value.replaceAll(",", "");
                                formData.append($(this).attr('name'), currency_value);

                            } else {
                                formData.append($(this).attr('name'), $(this).val());
                            }
                        }
                    }
                }
            }
        });
        // 

        var file_eles = $(".SystemMailTemplateImportStatus-SentMailManagement");
        for (var i = 0; i < file_eles.length; i++) {
            console.log('file_eles[i] = ', file_eles[i]);
            var files = file_eles[i].files;
            // Check file selected or not
            if (files.length > 0) {
                formData.append(file_eles[i].getAttribute('name'), files[0]);
            }
        }
        var is_done = false;
        var is_has_children = false;
        var is_save_self_table = false;
        var is_notification = false;
        if (arr_table.length > 0) {
            arr_table.forEach(element => {
                var model_name = element.attr("model_name");
                var depend = element.attr("depend");
                var tr_length = element.find("tbody").find("tr").length;
                if (tr_length > 1) {
                    if (depend === 'self-depend') {
                        is_save_self_table = true;
                        window[model_name + "SaveInlineTable"](element.attr("id"), null, null, formData);
                        arr_table.pop(element);
                    } else {
                        element.attr("parent-attr-uuid", formData.get("uuid"));
                        is_has_children = true;
                    }
                }
            });
        }
        if (is_save_self_table) {
            LoadSystemMailTemplateImportStatusSentMailManagementTableDataList();
        }
        if (!is_save_self_table) {
            this.callAjax = $.ajax({
                url: SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_CREATE_URL,
                type: "POST",
                async: false,
                cache: false,
                timeout: 30000,
                data: formData,
                //contentType: "multipart/form-data",
                contentType: false,
                // dataType : false,
                processData: false,
                success: function(data) {
                    self = new SystemMailTemplateImportStatusSentMailManagement(data);
                    
                    self.tDatatableAddRow();
                    //LoadSystemMailTemplateImportStatusSentMailManagementTableDataList();
                    //SystemMailTemplateImportStatusSentMailManagementGetDataTable(SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["current_page"]);
                    if (systemmailtemplateimportstatussentmailmanagement_is_continue_form) {
                        systemmailtemplateimportstatussentmailmanagement_is_continue_form = false;
                        if (!is_notification) {
                            is_notification = true;
                            //model_notice_create_success;
                        }
                        if(self.uuid != undefined && self.uuid != null && self.uuid != "")
                        {
                            var org_app_prefixId = ""
                            if($("#org_app_prefixId").length > 0){
                                org_app_prefixId = $("#org_app_prefixId").val();
                            }
                            $(location).prop('href', `${org_app_prefixId}/SentMailManagement/SystemMailTemplateImportStatus/detail/${self.uuid}/`);
                        }
                    } else if (systemmailtemplateimportstatussentmailmanagement_is_continue_modal) {
                        systemmailtemplateimportstatussentmailmanagement_is_continue_modal = false;
                        //SystemMailTemplateImportStatusRefreshCreateModal();
                        if (!is_notification) {
                            is_notification = true;
                            //model_notice_create_success;
                        }
                    } else if (systemmailtemplateimportstatussentmailmanagement_is_continue_back_last_url) {
                        last_url = localStorage.getItem("last_url");
                        location.href = last_url;
                    } else {
                        if (!is_notification) {
                            is_notification = true;
                            //model_notice_create_success;
                        }
                        form.closest('.modal').modal('hide');
                    }

                    // self.tFillForm();
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    console.log(xhr.status);
                    console.log(thrownError);
                    if (xhr.textStatus == 'timeout') {
                        this.tryCount++;
                        if (this.tryCount <= this.retryLimit) {
                            //try again
                            $.ajax(this);
                            return;
                        }
                        return;
                    }
                    
                },
            });
        }
        if (is_has_children) {
            arr_table.forEach(element => {
                var model_name = element.attr("model_name");
                var depend = element.attr("depend");
                if (depend != 'self-depend') {
                    window[model_name + "SaveInlineTable"](element.attr("id"), null, self.uuid);
                }
            });
            is_done = true;
        }
        if (is_done || !is_has_children) {
            if (systemmailtemplateimportstatussentmailmanagement_is_continue_form) {
                systemmailtemplateimportstatussentmailmanagement_is_continue_form = false;
                if (!is_notification) {
                    is_notification = true;
                    //model_notice_create_success;
                }
                if(self.uuid != undefined && self.uuid != null && self.uuid != "")
                {
                     var org_app_prefixId = ""
                    if($("#org_app_prefixId").length > 0){
                        org_app_prefixId = $("#org_app_prefixId").val();
                    }
                    $(location).prop('href', `${org_app_prefixId}/SentMailManagement/SystemMailTemplateImportStatus/detail/${self.uuid}/`);
                }
            } else if (systemmailtemplateimportstatussentmailmanagement_is_continue_modal) {
                systemmailtemplateimportstatussentmailmanagement_is_continue_modal = false;
                //SystemMailTemplateImportStatusRefreshCreateModal();
                if (!is_notification) {
                    is_notification = true;
                    //model_notice_create_success;
                }
            } else if (systemmailtemplateimportstatussentmailmanagement_is_continue_back_last_url) {
                last_url = localStorage.getItem("last_url");
                location.href = last_url;
            } else {
                if (!is_notification) {
                    is_notification = true;
                    //model_notice_create_success;
                }
                form.closest('.modal').modal('hide');
            }
        }
        return self;
    }



    tCreateByFormDataApi(formData, action_title) {
        // cho phép thêm mới với formdata custom riêng cho từng trường trường hợp
        $.ajaxSetup({
            headers: {
                'CSRFToken': getCSRFTokenValue(),
                'X-CSRFToken': getCSRFTokenValue(), // for --> SessionAuthentication
            },
            tryCount: 0,
            retryLimit: 3,
        });
        var self = this;
        $.ajax({
            url: SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_CREATE_URL,
            type: "POST",
            async: false,
            cache: false,
            timeout: 30000,
            data: formData,
            contentType: false,
            processData: false,
            success: function(data) {
                toastr.success(action_title + ' thành công');
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
                if (xhr.textStatus == 'timeout') {
                    this.tryCount++;
                    if (this.tryCount <= this.retryLimit) {
                        //try again
                        $.ajax(this);
                        return;
                    }
                    return;
                }

                
            },
        });
        return self;
    }

    // ########## [ROW] [CREATE] POST OBJ TO REST API --> return object if success ##############
    tCreateNewPostRowApi($this, form_data_parent = null, is_notice = false) {
        $.ajaxSetup({
            headers: {
                'CSRFToken': getCSRFTokenValue(),
                'X-CSRFToken': getCSRFTokenValue(), // for --> SessionAuthentication
            },
            tryCount: 0,
            retryLimit: 3,
        });
        var self = this;
        var formData = new FormData();
        formData.set('uuid', uuidv4());
        // 
        var depend = $($this).attr('depend');
        if (depend != "self-depend") {
            formData.append($($this).attr('parent-attr-name'), $($this).attr('parent-attr-uuid'))
        }
        $($this).find(':input').each(function() {
            var attr = $(this).attr('inline_field_name');
            var type = $(this).attr('type');
            var data_type = $(this).attr('data-type');
            //data-type='currency'
            var date = $(this).attr('data-datepicker');
            if (typeof attr !== 'undefined' && attr !== false) {
                if (typeof date !== 'undefined' && date !== false) {
                
                    var datetime_format = $(this).attr("format")
                    formData.append($(this).attr('inline_field_name'), strptime($(this).val(), datetime_format));
                } else {
                    if (type == 'file') {
                        var files = $(this)[0].files;
                        // Check file selected or not
                        if (files.length > 0) {
                            formData.append($(this).attr('inline_field_name'), files[0]);
                        }
                    } else if (type == 'checkbox') {
                        formData.append($(this).attr('inline_field_name'), $(this).is(":checked"));
                    } else if (type == 'radio') {

                        if ($(this).is(":checked")) {
                            formData.set($(this).attr('inline_field_name'), $(this).val());
                        }
                    } else {
                        if (Array.isArray($(this).val())) {
                            var arr = $(this).val();
                            for (var i in arr)
                                formData.append($(this).attr('inline_field_name'), arr[i]);
                        } else {
                            if (data_type == "currency") {
                                var currency_value = formatNumber($(this).val());
                                currency_value = currency_value.replaceAll(",", "");
                                formData.append($(this).attr('inline_field_name'), currency_value);

                            } else {
                                formData.append($(this).attr('inline_field_name'), $(this).val());
                            }
                        }
                    }
                }
            }
        });
        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
        if (form_data_parent != null) {
            for (var pair of form_data_parent.entries()) {
                console.log(pair[0] + ', ' + pair[1]);
                if (formData.get(pair[0]) === 'undefined' || formData.get(pair[0]) === '' || formData.get(pair[0]) === null) {
                    formData.set(pair[0], pair[1])
                }

            }
        }
        $.ajax({
            url: SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_CREATE_URL,
            type: "POST",
            async: false,
            cache: false,
            timeout: 30000,
            data: formData,
            //contentType: "multipart/form-data",
            contentType: false,
            // dataType : false,
            processData: false,
            success: function(data) {
                $($this).attr("is-new", "added");
                $($this).attr("uuid", formData.get('uuid'));
                if (is_notice) {
                    //model_notice_create_success;
                }
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
                if (xhr.textStatus == 'timeout') {
                    this.tryCount++;
                    if (this.tryCount <= this.retryLimit) {
                        //try again
                        $.ajax(this);
                        return;
                    }
                    return;
                }

                
            },
        });
        return self;
    }
    // ########## [ROW] [UPDATE] POST OBJ TO REST API --> return object if success ##############
    tUpdateNewPostRowApi($this, form_data_parent = null, is_notice = false) {
        //cập nhật với từng dòng trên bảng
        $.ajaxSetup({
            headers: {
                'CSRFToken': getCSRFTokenValue(),
                'X-CSRFToken': getCSRFTokenValue(), // for --> SessionAuthentication
            },
            tryCount: 0,
            retryLimit: 3,
        });
        var self = this;
        var formData = new FormData();
        var uuid = $($this).attr("uuid");
        var depend = $($this).attr('depend');
        if (depend != "self-depend") {
            formData.append($($this).attr('parent-attr-name'), $($this).attr('parent-attr-uuid'))
        }
        $($this).find(':input').each(function() {
            var attr = $(this).attr('inline_field_name');
            var type = $(this).attr('type');
            var data_type = $(this).attr('data-type');
            //data-type='currency'
            var date = $(this).attr('data-datepicker');
            if (typeof attr !== 'undefined' && attr !== false) {
                if (typeof date !== 'undefined' && date !== false) {
                    var datetime_format = $(this).attr("format");
                    formData.append($(this).attr('inline_field_name'), strptime($(this).val(), datetime_format));
                } else {
                    if (type == 'file') {
                        var files = $(this)[0].files;
                        // Check file selected or not
                        if (files.length > 0) {
                            formData.append($(this).attr('inline_field_name'), files[0]);
                        }
                    } else if (type == 'checkbox') {
                        formData.append($(this).attr('inline_field_name'), $(this).is(":checked"));
                    } else if (type == 'radio') {

                        if ($(this).is(":checked")) {
                            formData.set($(this).attr('inline_field_name'), $(this).val());
                        }
                    } else {
                        //formData.append($(this).attr('inline_field_name'), $(this).val());
                        if (Array.isArray($(this).val())) {
                            var arr = $(this).val();
                            for (var i in arr)
                                formData.append($(this).attr('inline_field_name'), arr[i]);
                        } else {
                            if (data_type == "currency") {
                                var currency_value = formatNumber($(this).val());
                                currency_value = currency_value.replaceAll(",", "");
                                formData.append($(this).attr('inline_field_name'), currency_value);

                            } else {
                                formData.append($(this).attr('inline_field_name'), $(this).val());
                            }
                        }
                    }
                }
            }
        });
        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
        if (form_data_parent != null) {
            for (var pair of form_data_parent.entries()) {
                console.log(pair[0] + ', ' + pair[1]);
                if (formData.get(pair[0]) === 'undefined' && formData.get(pair[0]) === '' || formData.get(pair[0]) === null) {
                    formData.set(pair[0], pair[1])
                }

            }
        }
        // 
        $.ajax({
            url: SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_UPDATE_URL + uuid + "/",
            type: "PATCH",
            async: false,
            cache: false,
            timeout: 30000,
            data: formData,
            //contentType: "multipart/form-data",
            contentType: false,
            // dataType : false,
            processData: false,
            success: function(data) {
                $($this).attr("is-new", "added");
                if (is_notice) {
                    //$model_notice_update_success
                }
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
                if (xhr.textStatus == 'timeout') {
                    this.tryCount++;
                    if (this.tryCount <= this.retryLimit) {
                        //try again
                        $.ajax(this);
                        return;
                    }
                    return;
                }

                
            },
        });
        return self;
    }

    tDeleteApi(uuid = null) {
        this.callAjax = null ;
        $.ajaxSetup({
            headers: {
                'CSRFToken': getCSRFTokenValue(),
                'X-CSRFToken': getCSRFTokenValue(), // for --> SessionAuthentication
            },
            tryCount: 0,
            retryLimit: 3,
        });


        var self = this;
        var uuid_go = "";
        var cr_uuid= "";
        if (uuid == null) {
            uuid_go = cr_uuid;
        } else {
            uuid_go = uuid; 
        }
        console.log('self.id = ', self.id);
        

        this.callAjax = $.ajax({
            url: SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_DELETE_URL + uuid_go + "/",
            type: "DELETE",
            async: false,
            cache: false,
            timeout: 30000,

            //data: JSON.stringify({data:"test"}),
            //data: JSON.stringify(self),
            //data: JSON.stringify(self),
            //contentType: "application/json; charset=utf-8",
            //dataType: "json",
            success: function(data) {
                //$model_notice_delete_success
                if (cr_uuid != "") {
                    var org_app_prefixId = ""
                    if($("#org_app_prefixId").length > 0){
                        org_app_prefixId = $("#org_app_prefixId").val();
                    }
                    // $(location).prop('href', `${org_app_prefixId}/SentMailManagement/SystemMailTemplateImportStatus/create/`);
                }
                console.log(data);

            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
                if (xhr.textStatus == 'timeout') {
                    this.tryCount++;
                    if (this.tryCount <= this.retryLimit) {
                        //try again
                        $.ajax(this);
                        return;
                    }
                    return;
                }

                
            },
        });
    }

    tDeleteApiWithDataSearch(uuid = null, data_search = null) {
        $.ajaxSetup({
            headers: {
                'CSRFToken': getCSRFTokenValue(),
                'X-CSRFToken': getCSRFTokenValue(), // for --> SessionAuthentication
            },
            tryCount: 0,
            retryLimit: 3,
        });


        var self = this;
        var uuid_go = "";
        var cr_uuid= "";
        if (uuid == null) {
            uuid_go = cr_uuid;
        } else {
            uuid_go = uuid;
        }

        console.log('self.id = ', self.id);
        $.ajax({
            url: SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_DELETE_URL + uuid_go + "/",
            type: "DELETE",
            async: false,
            cache: false,
            timeout: 30000,

            //data: JSON.stringify({data:"test"}),
            //data: JSON.stringify(self),
            //data: JSON.stringify(self),
            //contentType: "application/json; charset=utf-8",
            //dataType: "json",
            success: function(data) {
                //$model_notice_delete_success
                if (cr_uuid != "") {
                    var org_app_prefixId = ""
                    if($("#org_app_prefixId").length > 0){
                        org_app_prefixId = $("#org_app_prefixId").val();
                    }
                    // $(location).prop('href', `${org_app_prefixId}/SentMailManagement/SystemMailTemplateImportStatus/create/`);
                }
                console.log(data);

            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
                if (xhr.textStatus == 'timeout') {
                    this.tryCount++;
                    if (this.tryCount <= this.retryLimit) {
                        //try again
                        $.ajax(this);
                        return;
                    }
                    return;
                }

                
            },
        });
    }

    tDeleteFileApi(uuid = null, attr_name) {
        $.ajaxSetup({
            headers: {
                'CSRFToken': getCSRFTokenValue(),
                'X-CSRFToken': getCSRFTokenValue(), // for --> SessionAuthentication
            },
            tryCount: 0,
            retryLimit: 3,
        });
        var self = this;
        var formData = new FormData();
        formData.set("attach-field", attr_name);
        formData.set("uuid", uuid);

        $.ajax({
            url: SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_REMOVEFILE_URL + uuid + "/",
            type: "PATCH",
            async: false,
            cache: false,
            timeout: 30000,
            data: formData,
            //contentType: "multipart/form-data",
            contentType: false,
            // dataType : false,
            processData: false,
            success: function(data) {
                toastr.success('Đã xóa tập đính kèm!');
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
                if (xhr.textStatus == 'timeout') {
                    this.tryCount++;
                    if (this.tryCount <= this.retryLimit) {
                        //try again
                        $.ajax(this);
                        return;
                    }
                    return;
                }

                
            },
        });
        return self;
    }

    tUpdateOnlyFieldApi(uuid = null, attr_name, attr_value, mess = "Cập nhật") {
        //Cập nhật 1 trường thông tin, nhanh gọn
        $.ajaxSetup({
            headers: {
                'CSRFToken': getCSRFTokenValue(),
                'X-CSRFToken': getCSRFTokenValue(), // for --> SessionAuthentication
            },
            tryCount: 0,
            retryLimit: 3,
        });
        var self = this;
        var formData = new FormData();
        formData.set(attr_name, attr_value);

        $.ajax({
            url: SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_UPDATE_URL + uuid + "/",
            type: "PATCH",
            async: false,
            cache: false,
            timeout: 30000,
            data: formData,
            //contentType: "multipart/form-data",
            contentType: false,
            // dataType : false,
            processData: false,
            success: function(data) {
                toastr.success(mess + ' thành công');
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
                if (xhr.textStatus == 'timeout') {
                    this.tryCount++;
                    if (this.tryCount <= this.retryLimit) {
                        //try again
                        $.ajax(this);
                        return;
                    }
                    return;
                }

                
            },
        });
        return self;
    }

    // ########## get Objects from REST API --> return array of objects ##############
    tGetDataTableOnlyReadApi(page = null) {
        this.callAjax = null;
        var results = [];
        $.ajaxSetup({
            headers: {
                'CSRFToken': getCSRFTokenValue(),
                'X-CSRFToken': getCSRFTokenValue(), // for --> SessionAuthentication
            },
            tryCount: 0,
            retryLimit: 3,
        });
        var has_go_page = ""
        if (page != null) {
            has_go_page = "?page=" + page;
        }
        
        var CRR_SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_GET_DATATABLE_STANDARD_URL = SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_GET_DATATABLE_STANDARD_URL
        if (SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_LOAD_MEMCACHE == true){
            CRR_SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_GET_DATATABLE_STANDARD_URL = SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_GET_DATATABLE_STANDARD_URL_OPT
        }
        this.callAjax =
            $.ajax({
                url: CRR_SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_GET_DATATABLE_STANDARD_URL + has_go_page,
                type: "GET",
                //async: false,
                cache: false,
                timeout: 30000,

                success: function(data) {
                    // console.log('[tGetDataTableApi] data = ', data);
                    // return new SystemMailTemplateImportStatusSentMailManagement(data);
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('next')) {
                        if (data.next != null) {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_next"] = true;
                        } else {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_next"] = false;

                        }
                    }
                    SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["current_page"] = page;
                    if (data.hasOwnProperty('previous')) {
                        if (data.previous != null) {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_prev"] = true;
                        } else {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_prev"] = false;
                        }
                    }
                    if (data.hasOwnProperty('results')) {
                        for (var j = 0; j < data.results.length; j++) {
                            var tmp = new SystemMailTemplateImportStatusSentMailManagement(data.results[j]);
                            results.push(tmp);
                        }
                        //if (data.hasOwnProperty('next') && data.next !== null){
                        //    this.url = data.next;
                        //    $.ajax(this);
                        //}
                    }
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    console.log(xhr.status);
                    console.log(thrownError);
                    if (xhr.textStatus == 'timeout') {
                        this.tryCount++;
                        if (this.tryCount <= this.retryLimit) {
                            //try again
                            $.ajax(this);
                            return;
                        }
                        return;
                    }

                },
            });
        return results;
    }

    // ########## get Objects from REST API --> return array of objects ##############
    tGetDataTableOnlyReadMediumApi(page = null,) {
        this.callAjax = null;
        var results = [];
        $.ajaxSetup({
            headers: {
                'CSRFToken': getCSRFTokenValue(),
                'X-CSRFToken': getCSRFTokenValue(), // for --> SessionAuthentication
            },
            tryCount: 0,
            retryLimit: 3,
        });
        var has_go_page = ""
        if (page != null) {
            has_go_page = "?page=" + page;
        }
        
        var CRR_SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_GET_DATATABLE_MEDIUM_URL = SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_GET_DATATABLE_MEDIUM_URL
        if (SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_LOAD_MEMCACHE == true){
            CRR_SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_GET_DATATABLE_MEDIUM_URL = SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_GET_DATATABLE_MEDIUM_URL_OPT
        }
        this.callAjax =
            $.ajax({
                url: CRR_SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_GET_DATATABLE_MEDIUM_URL + has_go_page,
                type: "GET",
                //async: false,
                cache: false,
                timeout: 30000,

                success: function(data) {
                    console.log('[tGetDataTableMediumApi] data = ', data);
                    // return new SystemMailTemplateImportStatusSentMailManagement(data);
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('next')) {
                        if (data.next != null) {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_next"] = true;
                        } else {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_next"] = false;

                        }
                    }
                    SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["current_page"] = page;
                    if (data.hasOwnProperty('previous')) {
                        if (data.previous != null) {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_prev"] = true;
                        } else {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_prev"] = false;
                        }
                    }
                    if (data.hasOwnProperty('results')) {
                        for (var j = 0; j < data.results.length; j++) {
                            var tmp = new SystemMailTemplateImportStatusSentMailManagement(data.results[j]);
                            results.push(tmp);
                        }
                        //if (data.hasOwnProperty('next') && data.next !== null){
                        //    this.url = data.next;
                        //    $.ajax(this);
                        //}
                    }
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    console.log(xhr.status);
                    console.log(thrownError);
                    if (xhr.textStatus == 'timeout') {
                        this.tryCount++;
                        if (this.tryCount <= this.retryLimit) {
                            //try again
                            $.ajax(this);
                            return;
                        }
                        return;
                    }

                    
                },
            });
        return results;
    }

    // ########## get Objects from REST API --> return array of objects ##############
    tGetDataTableOnlyReadLargeApi(page = null,) {
        this.callAjax = null;
        var results = [];
        $.ajaxSetup({
            headers: {
                'CSRFToken': getCSRFTokenValue(),
                'X-CSRFToken': getCSRFTokenValue(), // for --> SessionAuthentication
            },
            tryCount: 0,
            retryLimit: 3,
        });
        var has_go_page = ""
        if (page != null) {
            has_go_page = "?page=" + page;
        }
        
        var CRR_SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_GET_DATATABLE_LARGE_URL = SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_GET_DATATABLE_LARGE_URL
        if (SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_LOAD_MEMCACHE == true){
            CRR_SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_GET_DATATABLE_LARGE_URL = SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_GET_DATATABLE_LARGE_URL_OPT
        }
        this.callAjax =
            $.ajax({
                url: CRR_SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_GET_DATATABLE_LARGE_URL + has_go_page,
                type: "GET",
                //async: false,
                cache: false,
                timeout: 30000,

                success: function(data) {
                    console.log('[tGetDataTableLargeApi] data = ', data);
                    // return new SystemMailTemplateImportStatusSentMailManagement(data);
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('next')) {
                        if (data.next != null) {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_next"] = true;
                        } else {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_next"] = false;

                        }
                    }
                    SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["current_page"] = page;
                    if (data.hasOwnProperty('previous')) {
                        if (data.previous != null) {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_prev"] = true;
                        } else {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_prev"] = false;
                        }
                    }
                    if (data.hasOwnProperty('results')) {
                        for (var j = 0; j < data.results.length; j++) {
                            var tmp = new SystemMailTemplateImportStatusSentMailManagement(data.results[j]);
                            results.push(tmp);
                        }
                        //if (data.hasOwnProperty('next') && data.next !== null){
                        //    this.url = data.next;
                        //    $.ajax(this);
                        //}
                    }
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    console.log(xhr.status);
                    console.log(thrownError);
                    if (xhr.textStatus == 'timeout') {
                        this.tryCount++;
                        if (this.tryCount <= this.retryLimit) {
                            //try again
                            $.ajax(this);
                            return;
                        }
                        return;
                    }

                    
                },
            });
        return results;
    }

    // ########## get Objects from REST API --> return array of objects ##############
    tGetDataTableDetailApi(page = null) {
        this.callAjax = null;
        var results = [];
        $.ajaxSetup({
            headers: {
                'CSRFToken': getCSRFTokenValue(),
                'X-CSRFToken': getCSRFTokenValue(), // for --> SessionAuthentication
            },
            tryCount: 0,
            retryLimit: 3,
        });
        var has_go_page = ""
        if (page != null) {
            has_go_page = "?page=" + page;
        }
        
        this.callAjax =
            $.ajax({
                url: SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_GET_DETAIL_STANDARD_URL + has_go_page,
                type: "GET",
                //async: false,
                cache: false,
                timeout: 30000,

                success: function(data) {
                    // console.log('[tGetDataTableApi] data = ', data);
                    // return new SystemMailTemplateImportStatusSentMailManagement(data);
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('next')) {
                        if (data.next != null) {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_next"] = true;
                        } else {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_next"] = false;

                        }
                    }
                    SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["current_page"] = page;
                    if (data.hasOwnProperty('previous')) {
                        if (data.previous != null) {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_prev"] = true;
                        } else {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_prev"] = false;
                        }
                    }
                    if (data.hasOwnProperty('results')) {
                        for (var j = 0; j < data.results.length; j++) {
                            var tmp = new SystemMailTemplateImportStatusSentMailManagement(data.results[j]);
                            results.push(tmp);
                        }
                        //if (data.hasOwnProperty('next') && data.next !== null){
                        //    this.url = data.next;
                        //    $.ajax(this);
                        //}
                    }
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    console.log(xhr.status);
                    console.log(thrownError);
                    if (xhr.textStatus == 'timeout') {
                        this.tryCount++;
                        if (this.tryCount <= this.retryLimit) {
                            //try again
                            $.ajax(this);
                            return;
                        }
                        return;
                    }

                    
                },
            });
        return results;
    }

    // ########## get Objects from REST API --> return array of objects ##############
    tGetDataTableDetailMediumApi(page = null,) {
        this.callAjax = null;
        var results = [];
        $.ajaxSetup({
            headers: {
                'CSRFToken': getCSRFTokenValue(),
                'X-CSRFToken': getCSRFTokenValue(), // for --> SessionAuthentication
            },
            tryCount: 0,
            retryLimit: 3,
        });
        var has_go_page = ""
        if (page != null) {
            has_go_page = "?page=" + page;
        }
        this.callAjax =
            $.ajax({
                url: SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_GET_DETAIL_MEDIUM_URL + has_go_page,
                type: "GET",
                //async: false,
                cache: false,
                timeout: 30000,

                success: function(data) {
                    console.log('[tGetDataTableMediumApi] data = ', data);
                    // return new SystemMailTemplateImportStatusSentMailManagement(data);
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('next')) {
                        if (data.next != null) {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_next"] = true;
                        } else {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_next"] = false;

                        }
                    }
                    SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["current_page"] = page;
                    if (data.hasOwnProperty('previous')) {
                        if (data.previous != null) {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_prev"] = true;
                        } else {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_prev"] = false;
                        }
                    }
                    if (data.hasOwnProperty('results')) {
                        for (var j = 0; j < data.results.length; j++) {
                            var tmp = new SystemMailTemplateImportStatusSentMailManagement(data.results[j]);
                            results.push(tmp);
                        }
                        //if (data.hasOwnProperty('next') && data.next !== null){
                        //    this.url = data.next;
                        //    $.ajax(this);
                        //}
                    }
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    console.log(xhr.status);
                    console.log(thrownError);
                    if (xhr.textStatus == 'timeout') {
                        this.tryCount++;
                        if (this.tryCount <= this.retryLimit) {
                            //try again
                            $.ajax(this);
                            return;
                        }
                        return;
                    }

                    
                },
            });
        return results;
    }

    // ########## get Objects from REST API --> return array of objects ##############
    tGetDataTableDetailLargeApi(page = null,) {
        this.callAjax = null;
        var results = [];
        $.ajaxSetup({
            headers: {
                'CSRFToken': getCSRFTokenValue(),
                'X-CSRFToken': getCSRFTokenValue(), // for --> SessionAuthentication
            },
            tryCount: 0,
            retryLimit: 3,
        });
        var has_go_page = ""
        if (page != null) {
            has_go_page = "?page=" + page;
        }
        this.callAjax =
            $.ajax({
                url: SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_GET_DETAIL_LARGE_URL + has_go_page,
                type: "GET",
                //async: false,
                cache: false,
                timeout: 30000,

                success: function(data) {
                    console.log('[tGetDataTableLargeApi] data = ', data);
                    // return new SystemMailTemplateImportStatusSentMailManagement(data);
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('next')) {
                        if (data.next != null) {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_next"] = true;
                        } else {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_next"] = false;

                        }
                    }
                    SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["current_page"] = page;
                    if (data.hasOwnProperty('previous')) {
                        if (data.previous != null) {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_prev"] = true;
                        } else {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_prev"] = false;
                        }
                    }
                    if (data.hasOwnProperty('results')) {
                        for (var j = 0; j < data.results.length; j++) {
                            var tmp = new SystemMailTemplateImportStatusSentMailManagement(data.results[j]);
                            results.push(tmp);
                        }
                        //if (data.hasOwnProperty('next') && data.next !== null){
                        //    this.url = data.next;
                        //    $.ajax(this);
                        //}
                    }
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    console.log(xhr.status);
                    console.log(thrownError);
                    if (xhr.textStatus == 'timeout') {
                        this.tryCount++;
                        if (this.tryCount <= this.retryLimit) {
                            //try again
                            $.ajax(this);
                            return;
                        }
                        return;
                    }

                    
                },
            });
        return results;
    }

    // ########## search Objects from REST API --> return array of objects ##############
    tSearchDataApi(page = null, search_data = null) {
        //hàm tìm kiếm với data_search hoặc dữ liệu từ vùng tìm kiếm & loại tìm kiếm
        var results = [];
        this.callAjax = null;
        $.ajaxSetup({
            headers: {
                'CSRFToken': getCSRFTokenValue(),
                'X-CSRFToken': getCSRFTokenValue(), // for --> SessionAuthentication
            },
            tryCount: 0,
            retryLimit: 3,
        });
        var has_go_page = ""
        if (page != null) {
            has_go_page = "?page=" + page;
        }
        //getValue for searching
        var slugSearch = "";
        
        if(search_data == null){

            
            ///slugSearch+="&search="+$("#SystemMailTemplateImportStatusSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtemplateimportstatussentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailTemplateImportStatusSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtemplateimportstatussentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailTemplateImportStatusSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtemplateimportstatussentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailTemplateImportStatusSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtemplateimportstatussentmailmanagement-table-filter="search"]').val();
            
                    ;
        }
        else{
            slugSearch = search_data;
        }
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["data"] = slugSearch;
        
        var CRR_SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_STANDARD_URL = SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_STANDARD_URL
        if (SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_LOAD_MEMCACHE == true){
            CRR_SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_STANDARD_URL = SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_STANDARD_URL_OPT
        }
        this.callAjax =
            $.ajax({
                url: CRR_SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_STANDARD_URL + has_go_page + slugSearch,
                type: "GET",
                //async: false,
                cache: false,
                timeout: 30000,

                success: function(data) {
                    // console.log('[tGetDataTableApi] data = ', data);
                    // return new SystemMailTemplateImportStatusSentMailManagement(data);
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('next')) {
                        if (data.next != null) {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_next"] = true;
                        } else {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_next"] = false;

                        }
                    }
                    SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["current_page"] = page;
                    if (data.hasOwnProperty('previous')) {
                        if (data.previous != null) {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_prev"] = true;
                        } else {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_prev"] = false;
                        }
                    }
                    if (data.hasOwnProperty('results')) {
                        for (var j = 0; j < data.results.length; j++) {
                            var tmp = new SystemMailTemplateImportStatusSentMailManagement(data.results[j]);
                            results.push(tmp);
                        }
                        //if (data.hasOwnProperty('next') && data.next !== null){
                        //    this.url = data.next;
                        //    $.ajax(this);
                        //}
                    }
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    console.log(xhr.status);
                    console.log(thrownError);
                    if (xhr.textStatus == 'timeout') {
                        this.tryCount++;
                        if (this.tryCount <= this.retryLimit) {
                            //try again
                            $.ajax(this);
                            return;
                        }
                        return;
                    }

                    
                },
            });
        return results;
    }

    // ########## search Objects from REST API --> return array of objects ##############
    tSearchDataMediumApi(page = null, search_data = null) {
        //hàm tìm kiếm với data_search hoặc dữ liệu từ vùng tìm kiếm & loại tìm kiếm
        var results = [];
        this.callAjax = null;
        $.ajaxSetup({
            headers: {
                'CSRFToken': getCSRFTokenValue(),
                'X-CSRFToken': getCSRFTokenValue(), // for --> SessionAuthentication
            },
            tryCount: 0,
            retryLimit: 3,
        });
        var has_go_page = ""
        if (page != null) {
            has_go_page = "?page=" + page;
        }
        //getValue for searching
        var slugSearch = "";
        
        if(search_data == null){

            
            ///slugSearch+="&search="+$("#SystemMailTemplateImportStatusSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtemplateimportstatussentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailTemplateImportStatusSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtemplateimportstatussentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailTemplateImportStatusSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtemplateimportstatussentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailTemplateImportStatusSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtemplateimportstatussentmailmanagement-table-filter="search"]').val();
            
                    ;
        }
        else{
            slugSearch = search_data;
        }
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["data"] = slugSearch;
        
        var CRR_SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_MEDIUM_URL = SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_MEDIUM_URL
        if (SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_LOAD_MEMCACHE == true){
            CRR_SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_MEDIUM_URL = SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_MEDIUM_URL_OPT
        }
        this.callAjax =
            $.ajax({
                url: CRR_SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_MEDIUM_URL + has_go_page + slugSearch,
                type: "GET",
                //async: false,
                cache: false,
                timeout: 30000,

                success: function(data) {
                    // console.log('[tGetDataTableApi] data = ', data);
                    // return new SystemMailTemplateImportStatusSentMailManagement(data);
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('next')) {
                        if (data.next != null) {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_next"] = true;
                        } else {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_next"] = false;

                        }
                    }
                    SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["current_page"] = page;
                    if (data.hasOwnProperty('previous')) {
                        if (data.previous != null) {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_prev"] = true;
                        } else {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_prev"] = false;
                        }
                    }
                    if (data.hasOwnProperty('results')) {
                        for (var j = 0; j < data.results.length; j++) {
                            var tmp = new SystemMailTemplateImportStatusSentMailManagement(data.results[j]);
                            results.push(tmp);
                        }
                        //if (data.hasOwnProperty('next') && data.next !== null){
                        //    this.url = data.next;
                        //    $.ajax(this);
                        //}
                    }
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    console.log(xhr.status);
                    console.log(thrownError);
                    if (xhr.textStatus == 'timeout') {
                        this.tryCount++;
                        if (this.tryCount <= this.retryLimit) {
                            //try again
                            $.ajax(this);
                            return;
                        }
                        return;
                    }

                    
                },
            });
        return results;
    }

    // ########## search Objects from REST API --> return array of objects ##############
    tSearchDataLargeApi(page = null, search_data = null) {
        //hàm tìm kiếm với data_search hoặc dữ liệu từ vùng tìm kiếm & loại tìm kiếm
        var results = [];
        this.callAjax = null;
        $.ajaxSetup({
            headers: {
                'CSRFToken': getCSRFTokenValue(),
                'X-CSRFToken': getCSRFTokenValue(), // for --> SessionAuthentication
            },
            tryCount: 0,
            retryLimit: 3,
        });
        var has_go_page = ""
        if (page != null) {
            has_go_page = "?page=" + page;
        }
        //getValue for searching
        var slugSearch = "";
        
        if(search_data == null){

            
            ///slugSearch+="&search="+$("#SystemMailTemplateImportStatusSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtemplateimportstatussentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailTemplateImportStatusSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtemplateimportstatussentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailTemplateImportStatusSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtemplateimportstatussentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailTemplateImportStatusSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtemplateimportstatussentmailmanagement-table-filter="search"]').val();
            
                    ;
        }
        else{
            slugSearch = search_data;
        }
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["data"] = slugSearch;
        
        var CRR_SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LARGE_URL = SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LARGE_URL
        if (SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_LOAD_MEMCACHE == true){
            CRR_SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LARGE_URL = SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LARGE_URL_OPT
        }
        this.callAjax =
            $.ajax({
                url: CRR_SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LARGE_URL + has_go_page + slugSearch,
                type: "GET",
                //async: false,
                cache: false,
                timeout: 30000,

                success: function(data) {
                    // console.log('[tGetDataTableApi] data = ', data);
                    // return new SystemMailTemplateImportStatusSentMailManagement(data);
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('next')) {
                        if (data.next != null) {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_next"] = true;
                        } else {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_next"] = false;

                        }
                    }
                    SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["current_page"] = page;
                    if (data.hasOwnProperty('previous')) {
                        if (data.previous != null) {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_prev"] = true;
                        } else {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_prev"] = false;
                        }
                    }
                    if (data.hasOwnProperty('results')) {
                        for (var j = 0; j < data.results.length; j++) {
                            var tmp = new SystemMailTemplateImportStatusSentMailManagement(data.results[j]);
                            results.push(tmp);
                        }
                        //if (data.hasOwnProperty('next') && data.next !== null){
                        //    this.url = data.next;
                        //    $.ajax(this);
                        //}
                    }
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    console.log(xhr.status);
                    console.log(thrownError);
                    if (xhr.textStatus == 'timeout') {
                        this.tryCount++;
                        if (this.tryCount <= this.retryLimit) {
                            //try again
                            $.ajax(this);
                            return;
                        }
                        return;
                    }

                    
                },
            });
        return results;
    }

    // ########## search Objects from REST API --> return array of objects ##############
    tFilterDataApi(page = null, search_data = null) {
        //hàm tìm kiếm với data_search hoặc dữ liệu từ vùng tìm kiếm & loại tìm kiếm
        var results = [];
        this.callAjax = null;
        $.ajaxSetup({
            headers: {
                'CSRFToken': getCSRFTokenValue(),
                'X-CSRFToken': getCSRFTokenValue(), // for --> SessionAuthentication
            },
            tryCount: 0,
            retryLimit: 3,
        });
        var has_go_page = ""
        if (page != null) {
            has_go_page = "?page=" + page;
        }
        //getValue for searching
        var slugSearch = "";

        if(search_data == null){
            
        }
        else{
            slugSearch = search_data;
        }
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["data"] = slugSearch;
        
        var CRR_SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_FILTER_STANDARD_URL = SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_FILTER_STANDARD_URL
        if (SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_LOAD_MEMCACHE == true){
            CRR_SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_FILTER_STANDARD_URL = SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_FILTER_STANDARD_URL_OPT
        }
        this.callAjax =
            $.ajax({
                url: CRR_SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_FILTER_STANDARD_URL + has_go_page + slugSearch,
                type: "GET",
                //async: false,
                cache: false,
                timeout: 30000,

                success: function(data) {
                    // console.log('[tGetDataTableApi] data = ', data);
                    // return new SystemMailTemplateImportStatusSentMailManagement(data);
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('next')) {
                        if (data.next != null) {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_next"] = true;
                        } else {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_next"] = false;

                        }
                    }
                    SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["current_page"] = page;
                    if (data.hasOwnProperty('previous')) {
                        if (data.previous != null) {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_prev"] = true;
                        } else {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_prev"] = false;
                        }
                    }
                    if (data.hasOwnProperty('results')) {
                        for (var j = 0; j < data.results.length; j++) {
                            var tmp = new SystemMailTemplateImportStatusSentMailManagement(data.results[j]);
                            results.push(tmp);
                        }
                        //if (data.hasOwnProperty('next') && data.next !== null){
                        //    this.url = data.next;
                        //    $.ajax(this);
                        //}
                    }
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    console.log(xhr.status);
                    console.log(thrownError);
                    if (xhr.textStatus == 'timeout') {
                        this.tryCount++;
                        if (this.tryCount <= this.retryLimit) {
                            //try again
                            $.ajax(this);
                            return;
                        }
                        return;
                    }

                    
                },
            });
        return results;
    }

    // ########## search Objects from REST API --> return array of objects ##############
    tFilterDataMediumApi(page = null, search_data = null) {
        //hàm tìm kiếm với data_search hoặc dữ liệu từ vùng tìm kiếm & loại tìm kiếm
        var results = [];
        this.callAjax = null;
        $.ajaxSetup({
            headers: {
                'CSRFToken': getCSRFTokenValue(),
                'X-CSRFToken': getCSRFTokenValue(), // for --> SessionAuthentication
            },
            tryCount: 0,
            retryLimit: 3,
        });
        var has_go_page = ""
        if (page != null) {
            has_go_page = "?page=" + page;
        }
        //getValue for searching
        var slugSearch = "";
        
        if(search_data == null){
            
        }
        else{
            slugSearch = search_data;
        }
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["data"] = slugSearch;
        
        var CRR_SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_FILTER_MEDIUM_URL = SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_FILTER_MEDIUM_URL
        if (SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_LOAD_MEMCACHE == true){
            CRR_SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_FILTER_MEDIUM_URL = SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_FILTER_MEDIUM_URL_OPT
        }
        this.callAjax =
            $.ajax({
                url: CRR_SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_FILTER_MEDIUM_URL + has_go_page + slugSearch,
                type: "GET",
                //async: false,
                cache: false,
                timeout: 30000,

                success: function(data) {
                    // console.log('[tGetDataTableApi] data = ', data);
                    // return new SystemMailTemplateImportStatusSentMailManagement(data);
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('next')) {
                        if (data.next != null) {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_next"] = true;
                        } else {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_next"] = false;

                        }
                    }
                    SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["current_page"] = page;
                    if (data.hasOwnProperty('previous')) {
                        if (data.previous != null) {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_prev"] = true;
                        } else {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_prev"] = false;
                        }
                    }
                    if (data.hasOwnProperty('results')) {
                        for (var j = 0; j < data.results.length; j++) {
                            var tmp = new SystemMailTemplateImportStatusSentMailManagement(data.results[j]);
                            results.push(tmp);
                        }
                        //if (data.hasOwnProperty('next') && data.next !== null){
                        //    this.url = data.next;
                        //    $.ajax(this);
                        //}
                    }
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    console.log(xhr.status);
                    console.log(thrownError);
                    if (xhr.textStatus == 'timeout') {
                        this.tryCount++;
                        if (this.tryCount <= this.retryLimit) {
                            //try again
                            $.ajax(this);
                            return;
                        }
                        return;
                    }

                    
                },
            });
        return results;
    }

    // ########## search Objects from REST API --> return array of objects ##############
    tFilterDataLargeApi(page = null, search_data = null) {
        //hàm tìm kiếm với data_search hoặc dữ liệu từ vùng tìm kiếm & loại tìm kiếm
        var results = [];
        this.callAjax = null;
        $.ajaxSetup({
            headers: {
                'CSRFToken': getCSRFTokenValue(),
                'X-CSRFToken': getCSRFTokenValue(), // for --> SessionAuthentication
            },
            tryCount: 0,
            retryLimit: 3,
        });
        var has_go_page = ""
        if (page != null) {
            has_go_page = "?page=" + page;
        }
        //getValue for searching
        var slugSearch = "";
        
        if(search_data == null){
            
        }
        else{
            slugSearch = search_data;
        }
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["data"] = slugSearch;
        
        var CRR_SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_FILTER_LARGE_URL = SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_FILTER_LARGE_URL
        if (SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_LOAD_MEMCACHE == true){
            CRR_SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_FILTER_LARGE_URL = SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_FILTER_LARGE_URL_OPT
        }
        this.callAjax =
            $.ajax({
                url: CRR_SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_FILTER_LARGE_URL + has_go_page + slugSearch,
                type: "GET",
                //async: false,
                cache: false,
                timeout: 30000,

                success: function(data) {
                    // console.log('[tGetDataTableApi] data = ', data);
                    // return new SystemMailTemplateImportStatusSentMailManagement(data);
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('next')) {
                        if (data.next != null) {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_next"] = true;
                        } else {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_next"] = false;

                        }
                    }
                    SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["current_page"] = page;
                    if (data.hasOwnProperty('previous')) {
                        if (data.previous != null) {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_prev"] = true;
                        } else {
                            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["has_prev"] = false;
                        }
                    }
                    if (data.hasOwnProperty('results')) {
                        for (var j = 0; j < data.results.length; j++) {
                            var tmp = new SystemMailTemplateImportStatusSentMailManagement(data.results[j]);
                            results.push(tmp);
                        }
                        //if (data.hasOwnProperty('next') && data.next !== null){
                        //    this.url = data.next;
                        //    $.ajax(this);
                        //}
                    }
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    console.log(xhr.status);
                    console.log(thrownError);
                    if (xhr.textStatus == 'timeout') {
                        this.tryCount++;
                        if (this.tryCount <= this.retryLimit) {
                            //try again
                            $.ajax(this);
                            return;
                        }
                        return;
                    }

                    
                },
            });
        return results;
    }
    // ########## GET ONLY ONE OBJ FROM REST API (RETURN 01 OBJECTS) ##############
    tGetObjApi(uuid) {
        this.callAjax = null;

        $.ajaxSetup({
            headers: {
                'CSRFToken': getCSRFTokenValue(),
                'X-CSRFToken': getCSRFTokenValue(), // for --> SessionAuthentication
            },
            tryCount: 0,
            retryLimit: 3,
        });
        this.callAjax =
            $.ajax({
                url: SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_GET_DETAIL_STANDARD_URL + uuid + "/",
                type: "GET",
                async: false,
                cache: false,
                timeout: 30000,

                success: function(data) {
                    console.log('[tGetObjApi] data = ', data);
                    var n_obj = new SystemMailTemplateImportStatusSentMailManagement(data);
                    console.log('n_obj = ', n_obj);
                    n_obj.tFillForm();
                    return n_obj;
                    // if (data.hasOwnProperty('results')){
                    //    if (data.results.length > 0){
                    //        var tmp = new SystemMailTemplateImportStatusSentMailManagement(data[i]);
                    //        return tmp;
                    //    }
                    //}
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    console.log(xhr.status);
                    console.log(thrownError);
                    if (xhr.textStatus == 'timeout') {
                        this.tryCount++;
                        if (this.tryCount <= this.retryLimit) {
                            //try again
                            $.ajax(this);
                            return;
                        }
                        return;
                    }

                    
                    return null;
                },
            });
        return null;
    }
    // Add row by row of list result 
    tExportDatatableAddRow(tableId = null, order = null) {
        var tbId = "SystemMailTemplateImportStatusSentMailManagementExportTableId";
        if (tableId != null) {
            tbId = tableId;
        }

        if (order == null && SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT != undefined && SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT != null) {
            order = SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT;
        }
        var table = $("#" + tbId);
        if (table.length > 0) {
            var arr_row_data = [];
            var row_data = {};
            var col_num = 0;
            //row_data[col_num] = `
            //<!--begin::Checkbox-->
            //<td>
            //    <div class="form-check form-check-sm form-check-custom form-check-solid">
            //        <input class="form-check-input form-check-input-tnv" type="checkbox" name="checkbox-choice" value="1" />
            //    </div>
            //</td>
            //<!--end::Checkbox-->
            //`;
            // Get All Attribute of thead
            var tableHeaders = table.find('thead th');
            var tableBody = table.find('tbody');
            //tableBody.html('');
            for (var thId = 0; thId < tableHeaders.length; thId++) {
                col_num = thId;
                var hEle = tableHeaders[thId];
                var attr = hEle.getAttribute('attr-name');
                if (this.hasOwnProperty(attr)) {

                    

                    if(attr=="name"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="code"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="friendly_code"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="created_by"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="created_at"){
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (strftime(this[attr],"DD/MM/YYYY HH:mm:ss"));
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="updated_by"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="updated_at"){
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (strftime(this[attr],"DD/MM/YYYY HH:mm:ss"));
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="icon_class"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="color_class"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                
                    row_data[col_num] = this[attr];
                } 
                else {
                    if(attr=="SystemMailTemplateImportStatusSentMailManagement-admin-action")
                    {
                        var action = BindActionButtonVer4(
                            SystemMailTemplateImportStatusSentMailManagement_arr_action,
                            this['uuid'],
                            this,
                            null,
                            this['created_by'],
                        );
                        row_data[col_num] = action;
                        continue;
                    }
                    

                    if(attr=="name"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="code"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="friendly_code"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="created_by"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="created_at"){
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (strftime(this[attr],"DD/MM/YYYY HH:mm:ss"));
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="updated_by"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="updated_at"){
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (strftime(this[attr],"DD/MM/YYYY HH:mm:ss"));
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="icon_class"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="color_class"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                
                    row_data[col_num] = '';
                }

            }

            //arr_row_data.push(row_data)
            systemmailtemplateimportstatussentmailmanagement_exportdatatable.row.add(row_data).node().id = this["uuid"];
            systemmailtemplateimportstatussentmailmanagement_exportdatatable.draw(false);
            return true;
        } else {
            console.log('Not found dataTable Id: ,', tbId);
            return false;
        }
    }
    // Add row by row of list result 
    tDatatableAddRow(tableId = null, order = null) {
        var tbId = "SystemMailTemplateImportStatusSentMailManagementTableId";
        if (tableId != null) {
            tbId = tableId;
        }

        if (order == null && SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT != undefined && SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT != null) {
            order = SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT;
        }
        var table = $("#" + tbId);
        if (table.length > 0) {
            var arr_row_data = [];
            var row_data = {};
            var col_num = 0;
            row_data[col_num] = `
            <!--begin::Checkbox-->
            <td>
                <div class="form-check form-check-sm form-check-custom form-check-solid">
                    <input class="form-check-input form-check-input-tnv" type="checkbox" name="checkbox-choice" value="1" />
                </div>
            </td>
            <!--end::Checkbox-->
            `;
            // Get All Attribute of thead
            var tableHeaders = table.find('thead th');
            var tableBody = table.find('tbody');
            //tableBody.html('');
            for (var thId = 1; thId < tableHeaders.length; thId++) {
                col_num += 1;
                var hEle = tableHeaders[thId];
                var attr = hEle.getAttribute('attr-name');
                if (this.hasOwnProperty(attr)) {

                    

                    if(attr=="name"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="code"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="friendly_code"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="created_by"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="created_at"){
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (strftime(this[attr],"DD/MM/YYYY HH:mm:ss"));
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="updated_by"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="updated_at"){
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (strftime(this[attr],"DD/MM/YYYY HH:mm:ss"));
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="icon_class"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="color_class"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                
                    row_data[col_num] = this[attr];
                } 
                else {
                    if(attr=="SystemMailTemplateImportStatusSentMailManagement-admin-action")
                    {
                        var action = BindActionButtonVer4(
                            SystemMailTemplateImportStatusSentMailManagement_arr_action,
                            this['uuid'],
                            this,
                            null,
                            this['created_by'],
                        );
                        row_data[col_num] = action;
                        continue;
                    }
                    

                    if(attr=="name"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="code"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="friendly_code"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="created_by"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="created_at"){
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (strftime(this[attr],"DD/MM/YYYY HH:mm:ss"));
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="updated_by"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="updated_at"){
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (strftime(this[attr],"DD/MM/YYYY HH:mm:ss"));
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="icon_class"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="color_class"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                
                    row_data[col_num] = '';
                }
            }

            //arr_row_data.push(row_data)
            SystemMailTemplateImportStatusSentMailManagementdatatable.row.add(row_data).node().id = this["uuid"];
            SystemMailTemplateImportStatusSentMailManagementdatatable.draw(false);
            $('tr#' + this["uuid"]).attr("obj_name", this["name"]);
            return true;
        } else {
            console.log('Not found dataTable Id: ,', tbId);
            return false;
        }
    }
    // Update row by row of list result 
    tDatatableUpdateRow(tableId = null, order = null) {
        var tbId = "SystemMailTemplateImportStatusSentMailManagementTableId";
        if (tableId != null) {
            tbId = tableId;
        }

        if (order == null && SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT != undefined && SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT != null) {
            order = SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT;
        }
        var table = $("#" + tbId);
        if (table.length > 0) {
            var arr_row_data = [];
            var row_data = {};
            var col_num = 0;
            row_data[col_num] = `
            <!--begin::Checkbox-->
            <td>
                <div class="form-check form-check-sm form-check-custom form-check-solid">
                    <input class="form-check-input form-check-input-tnv" type="checkbox" name="checkbox-choice" value="1" />
                </div>
            </td>
            <!--end::Checkbox-->
            `;
            // Get All Attribute of thead
            var tableHeaders = table.find('thead th');
            var tableBody = table.find('tbody');
            //tableBody.html('');
            for (var thId = 1; thId < tableHeaders.length; thId++) {
                col_num += 1;
                var hEle = tableHeaders[thId];
                var attr = hEle.getAttribute('attr-name');
                if (this.hasOwnProperty(attr)) {

                    

                    if(attr=="name"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="code"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="friendly_code"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="created_by"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="created_at"){
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (strftime(this[attr],"DD/MM/YYYY HH:mm:ss"));
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="updated_by"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="updated_at"){
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (strftime(this[attr],"DD/MM/YYYY HH:mm:ss"));
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="icon_class"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="color_class"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                
                    row_data[col_num] = this[attr];
                } 
                else {
                    if(attr=="SystemMailTemplateImportStatusSentMailManagement-admin-action")
                    {
                        var action = BindActionButtonVer4(
                            SystemMailTemplateImportStatusSentMailManagement_arr_action,
                            this['uuid'],
                            this,
                            null,
                            this['created_by'],
                        );
                        row_data[col_num] = action;
                        continue;
                    }
                    

                    if(attr=="name"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="code"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="friendly_code"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="created_by"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="created_at"){
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (strftime(this[attr],"DD/MM/YYYY HH:mm:ss"));
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="updated_by"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="updated_at"){
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (strftime(this[attr],"DD/MM/YYYY HH:mm:ss"));
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="icon_class"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="color_class"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                
                    row_data[col_num] = '';
                }
            }

            arr_row_data.push(row_data)
            SystemMailTemplateImportStatusSentMailManagementdatatable.row(`#${this['uuid']}`).data(row_data).draw();
            return true;
        } else {
            console.log('Not found dataTable Id: ,', tbId);
            return false;
        }
    }

    

    tFillTable3(tableId = null, order = null) {
        var tbId = "SystemMailTemplateImportStatusSentMailManagementTableId";
        if (tableId != null) {
            tbId = tableId;
        }

        if (order == null && SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT != undefined && SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT != null) {
            order = SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT;
        }
        var table = $("#" + tbId);
        if (table.length > 0) {
            var arr_row_data = [];
            var row_data = {};
            var col_num = 0;
            var html = "<tr uuid='"+this["uuid"]+"'>"
            //html += `<td><a>` + order + `</a></td>`;
            html += `
            <!--begin::Checkbox-->
            <td>
                <div class="form-check form-check-sm form-check-custom form-check-solid">
                    <input class="form-check-input form-check-input-tnv" type="checkbox" value="1" />
                </div>
            </td>
            <!--end::Checkbox-->
            `;
            row_data[col_num] = `
            <!--begin::Checkbox-->
            <td>
                <div class="form-check form-check-sm form-check-custom form-check-solid">
                    <input class="form-check-input form-check-input-tnv" type="checkbox" name="checkbox-choice" value="1" />
                </div>
            </td>
            <!--end::Checkbox-->
            `;
            // Get All Attribute of thead
            var tableHeaders = table.find('thead th');
            var tableBody = table.find('tbody');
            //tableBody.html('');
            for (var thId = 1; thId < tableHeaders.length; thId++) {
                col_num += 1;
                var hEle = tableHeaders[thId];
                var attr = hEle.getAttribute('attr-name');
                if (this.hasOwnProperty(attr)) {

                    

                    if(attr=="name"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="code"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="friendly_code"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="created_by"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="created_at"){
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            html +=`<td class="text-wrap text-center" data-order='`+this[attr]+`'><a>` + strftime(this[attr],"DD/MM/YYYY HH:mm:ss") + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap text-center" data-order='`+this[attr]+`'><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="updated_by"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="updated_at"){
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            html +=`<td class="text-wrap text-center" data-order='`+this[attr]+`'><a>` + strftime(this[attr],"DD/MM/YYYY HH:mm:ss") + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap text-center" data-order='`+this[attr]+`'><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="icon_class"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="color_class"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                
                    html += `<td class="text-wrap"><a>` + (this[attr]) + `</a></td>`;
                } 
                else {
                    if(attr=="SystemMailTemplateImportStatusSentMailManagement-admin-action")
                    {
                        var action = BindActionButtonVer4(
                            SystemMailTemplateImportStatusSentMailManagement_arr_action,
                            this['uuid'],
                            this,
                            null,
                            this['created_by'],
                        );
                        html += action;
                        row_data[col_num] = action;
                        continue;
                    }
                    

                    if(attr=="name"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="code"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="friendly_code"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="created_by"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="created_at"){
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            html +=`<td class="text-wrap text-center" data-order='`+this[attr]+`'><a>` + strftime(this[attr],"DD/MM/YYYY HH:mm:ss") + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap text-center" data-order='`+this[attr]+`'><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="updated_by"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="updated_at"){
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            html +=`<td class="text-wrap text-center" data-order='`+this[attr]+`'><a>` + strftime(this[attr],"DD/MM/YYYY HH:mm:ss") + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap text-center" data-order='`+this[attr]+`'><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="icon_class"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="color_class"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                
                    html += `<td><a href=""></a></td>`;
                }
            }

            html += '</tr>';
            arr_row_data.push(row_data)
            SystemMailTemplateImportStatusSentMailManagementdatatable.rows.add(arr_row_data).draw(false);
            //tableBody.append(html);

            return true;
        } else {
            console.log('Not found dataTable Id: ,', tbId);
            return false;
        }
    }

    //fill table for inline table
    tFillTable4(tableId = null, order = null, action = null) {
        var tbId = "SystemMailTemplateImportStatusSentMailManagementTableId";
        if (tableId != null) {
            tbId = tableId;
        }

        if (order == null && SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT != undefined && SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT != null) {
            order = SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT;
        }
        var table = $("#" + tbId);
        if (table.length > 0) {
            var html = "<tr is-new='false' status='added'>"
            html += `<td><a class="user-select-none">` + order + `</a></td>`;
            // Get All Attribute of thead
            var tableHeaders = table.find('thead th');
            var tableBody = table.find('tbody');
            //tableBody.html('');
            for (var thId = 1; thId < tableHeaders.length; thId++) {
                var hEle = tableHeaders[thId];
                var attr = hEle.getAttribute('attr-name');
                if (this.hasOwnProperty(attr)) {

                    

                    if(attr=="name"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="code"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="friendly_code"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="created_by"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="created_at"){
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            html +=`<td class="text-wrap text-center" data-order='`+this[attr]+`'><a>` + strftime(this[attr],"DD/MM/YYYY HH:mm:ss") + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap text-center" data-order='`+this[attr]+`'><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="updated_by"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="updated_at"){
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            html +=`<td class="text-wrap text-center" data-order='`+this[attr]+`'><a>` + strftime(this[attr],"DD/MM/YYYY HH:mm:ss") + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap text-center" data-order='`+this[attr]+`'><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="icon_class"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="color_class"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                
                    html += `<td class="text-wrap"><a>` + (this[attr]) + `</a></td>`;
                } else {
                        
                        

                    if(attr=="name"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="code"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="friendly_code"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="created_by"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="created_at"){
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            html +=`<td class="text-wrap text-center" data-order='`+this[attr]+`'><a>` + strftime(this[attr],"DD/MM/YYYY HH:mm:ss") + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap text-center" data-order='`+this[attr]+`'><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="updated_by"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="updated_at"){
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            html +=`<td class="text-wrap text-center" data-order='`+this[attr]+`'><a>` + strftime(this[attr],"DD/MM/YYYY HH:mm:ss") + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap text-center" data-order='`+this[attr]+`'><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="icon_class"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="color_class"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                
                        html += `<td><a href=""></a></td>`;
                }
            }

            html += '</tr>';

            tableBody.append(html);
            return true;
        } else {
            console.log('Not found dataTable Id: ,', tbId);
            return false;
        }
    }



    tFillCard(cardId = null, order = null) {
        var card_Id = "SystemMailTemplateImportStatusSentMailManagementCardAreaId";
        if (cardId != null) {
            card_Id = cardId;
        }

        if (order == null && SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT != undefined && SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT != null) {
            order = SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT;
        }
        var side = order % 2 ? 1 : 2;

        var card_area = $("#" + card_Id);
        if (card_area.length > 0) {
            var card_template = card_area.find(".SystemMailTemplateImportStatusSentMailManagementTemplateCardClass[side=" + side + "]");
            if (card_template.length > 0) {
                var new_card = card_template.clone(true);
                //var html = "<tr>"
                //html+= `<td><a>` + order + `</a></td>`;
                // Get All Attribute of thead
                var cardContent = new_card.find('[tnv_card_content]');
                var tableBody = new_card.find('.card-body');
                //tableBody.html('');
                for (var thId = 0; thId < cardContent.length; thId++) {
                    var hEle = cardContent[thId];
                    var attr = hEle.getAttribute('attr-name');
                    if (this.hasOwnProperty(attr)) {

                        
                        $(hEle).html(`<a>` + (this[attr]) + `</a>`);

                    }
                }
                var action_button = BindActionButtonVer5(
                    SystemMailTemplateImportStatusSentMailManagement_arr_action,
                    this['uuid'],
                    this,
                    null,
                    this['created_by'],
                );
                new_card.attr("is_allow_delete", "true");
                new_card.removeAttr("is_template");
                new_card.find(".dropdown-menu").append(action_button);
                new_card.removeClass("d-none");
                new_card.removeClass("SystemMailTemplateImportStatusSentMailManagementTemplateCardClass");
                card_area.append(new_card);
                return true;
            } else {
                console.log('Not found dataTable Id: ,', card_Id);
                return false;
            }
        }

    }
}

/// Định nghĩa thông tin trên từng bản ghi mặc định
var SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_RECORD_IN_PAGE = 100;

/// Dữ liệu tìm kiếm gần nhất
var SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG = {
    func:null,
    data:null,
    page:null,
}
/// Thông tin phân trang hiện tại
var SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION = {
    current_page:1,
    total:0,
    has_next:false,
    has_prev:false
}
//// Hàm tạo pagination
function SystemMailTemplateImportStatusSentMailManagementCreatePagination(total_record_number=null,crr_record_in_page=100,max_page_render=10){
    if(total_record_number == null){
        return;
    }
    var pagenation_ele=$(".pagination-SystemMailTemplateImportStatusSentMailManagement");
    var pagination=SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION;
    pagenation_ele.html('');
    // Thông tin về số lượng bản ghi trên trang
    var page_total_ele = $(".page-total-SystemMailTemplateImportStatusSentMailManagement");
    page_total_ele.html(`<footer class="blockquote-footer">Tổng số: ${pagination["total"]} bản ghi </footer>`);
    if (total_record_number > 0) {
        var is_disable_to_first = "";
        var is_disable_to_last = "";
        var last_page_order = 0 
        //var max_page_render = 0 
        var first_range = 0;
        var last_range = 0;
        var margin_range = 0;
        var crr_page_number = parseInt(pagination["current_page"])
        margin_range = parseInt(max_page_render/2);
        // tính toán last_page_order
        if(pagination["total"] > 0){
            if((pagination["total"] % crr_record_in_page) != 0)
            {
                last_page_order = Math.floor(pagination["total"]/crr_record_in_page) + 1;
            }
            else {
                last_page_order = (pagination["total"]/crr_record_in_page);
        }
        // tính toán first_range
        if((crr_page_number - margin_range) <= 0){
            first_range = 1;
        }
        else{
            first_range = (crr_page_number - margin_range);
        }

        // tính toán last_range
        if((crr_page_number + margin_range) >= last_page_order){
            last_range = last_page_order + 1;
        }
        else{
            last_range = (crr_page_number + margin_range);
        }

        if(parseInt(pagination["current_page"]) == 1){
            is_disable_to_first = "disabled"
        }         
        pagenation_ele.append(`
        <li class="page-item first ${is_disable_to_first} m-1" >
            <a class="page-link px-0" onclick="SystemMailTemplateImportStatusSentMailManagementGetDataTable(1)">
                <!--begin::Svg Icon | path: icons/duotune/arrows/arr079.svg-->
                <span class="svg-icon svg-icon-2">
                <!--begin::Svg Icon | path: /var/www/preview.keenthemes.com/kt-products/docs/jet/html/releases/2023-01-23-171716/core/html/src/media/icons/duotune/arrows/arr021.svg-->
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" d="M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z" fill="currentColor"></path>
                    <path d="M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z" fill="currentColor"></path>
                </svg>
                <!--end::Svg Icon-->
                </span>
                <!--end::Svg Icon-->
            </a>
        </li>
        `);

        if (pagination["has_prev"] == true) {
            pagenation_ele.append(`
            <li class="page-item m-1">
                <a class="page-link" onclick="SystemMailTemplateImportStatusSentMailManagementGetDataTable(` + (parseInt(pagination["current_page"]) - 1) + `)">
                   <span class="svg-icon svg-icon-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.2657 11.4343L15.45 7.25C15.8642 6.83579 15.8642 6.16421 15.45 5.75C15.0358 5.33579 14.3642 5.33579 13.95 5.75L8.40712 11.2929C8.01659 11.6834 8.01659 12.3166 8.40712 12.7071L13.95 18.25C14.3642 18.6642 15.0358 18.6642 15.45 18.25C15.8642 17.8358 15.8642 17.1642 15.45 16.75L11.2657 12.5657C10.9533 12.2533 10.9533 11.7467 11.2657 11.4343Z" fill="currentColor"></path>
                    </svg>
                    </span>
                </a>
            </li>`);
        }
        
        for(var i=first_range;i<last_range;i++){
            if(i > last_page_order){
                continue;
            }
            if(i == crr_page_number){
                is_crr_page = "active";
                    pagenation_ele.append(`<li class="page-item m-1 active">
                <a class="page-link" >${i}</a>
                </li>`);
            }
            else{
                pagenation_ele.append(`
                <li class="page-item m-1" >
                    <a class="page-link" onclick="SystemMailTemplateImportStatusSentMailManagementGetDataTable(${i})">${i}</a>
                </li>`);
            }
            
        }
        if (pagination["has_next"] == true) {
            pagenation_ele.append(`
            <li class="page-item m-1">
            <a class="page-link" onclick="SystemMailTemplateImportStatusSentMailManagementGetDataTable(` + (parseInt(pagination["current_page"]) + 1) + `)">
              <span class="svg-icon svg-icon-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z" fill="currentColor"></path>
                </svg>
                </span>
            </a>
            </li>`);
        }
        if(parseInt(pagination["current_page"]) == last_page_order){
            is_disable_to_last = "disabled";
        }    
        pagenation_ele.append(`
        <li class="page-item last m-1 ${is_disable_to_last}" >
            <a class="page-link px-0" onclick="SystemMailTemplateImportStatusSentMailManagementGetDataTable(`+last_page_order+`)">
                <!--begin::Svg Icon | path: icons/duotune/arrows/arr080.svg-->
                <span class="svg-icon svg-icon-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" d="M9.63433 11.4343L5.45001 7.25C5.0358 6.83579 5.0358 6.16421 5.45001 5.75C5.86423 5.33579 6.5358 5.33579 6.95001 5.75L12.4929 11.2929C12.8834 11.6834 12.8834 12.3166 12.4929 12.7071L6.95001 18.25C6.5358 18.6642 5.86423 18.6642 5.45001 18.25C5.0358 17.8358 5.0358 17.1642 5.45001 16.75L9.63433 12.5657C9.94675 12.2533 9.94675 11.7467 9.63433 11.4343Z" fill="currentColor"></path>
                        <path d="M15.6343 11.4343L11.45 7.25C11.0358 6.83579 11.0358 6.16421 11.45 5.75C11.8642 5.33579 12.5358 5.33579 12.95 5.75L18.4929 11.2929C18.8834 11.6834 18.8834 12.3166 18.4929 12.7071L12.95 18.25C12.5358 18.6642 11.8642 18.6642 11.45 18.25C11.0358 17.8358 11.0358 17.1642 11.45 16.75L15.6343 12.5657C15.9467 12.2533 15.9467 11.7467 15.6343 11.4343Z" fill="currentColor"></path>
                    </svg>
                </span>
                <!--end::Svg Icon-->
            </a>
        </li>
        `);
        }
    }   
}
var SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT = 0 ;
//// Hàm Lấy danh sách khi mở trang 100 bản ghi/trang
function SystemMailTemplateImportStatusSentMailManagementGetDataTable(page=1){

        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailTemplateImportStatusSentMailManagementGetDataTable";
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["data"] = null;
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailTemplateImportStatusSentMailManagement();
        var results = obj.tGetDataTableOnlyReadApi(page);

        obj.callAjax.then(function(data) {
            
            $("#SystemMailTemplateImportStatusSentMailManagementTableBodyId").empty();

            if(SystemMailTemplateImportStatusSentMailManagementdatatable != undefined){
                SystemMailTemplateImportStatusSentMailManagementdatatable.clear().draw();
            }
            var crr_record_in_page = 100;

            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page
            
            for (var i = 0; i < results.length; i++){
                try{
                    //console.log('results[i] = ', results[i]);
                    results[i].tDatatableAddRow();
                    SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
                }
                catch(err){
                    console.log(err);
                }
            }
            SystemMailTemplateImportStatusSentMailManagementCreatePagination(results.length,crr_record_in_page);
    })
}

//// Hàm Lấy danh sách khi mở trang 1000 bản ghi/trang
function SystemMailTemplateImportStatusSentMailManagementGetDataTableMedium(page=1){

        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailTemplateImportStatusSentMailManagementGetDataTableMedium";
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["data"] = null;
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailTemplateImportStatusSentMailManagement();
        var results = obj.tGetDataTableOnlyReadMediumApi(page);

        obj.callAjax.then(function(data) {
            
            $("#SystemMailTemplateImportStatusSentMailManagementTableBodyId").empty();

            if(SystemMailTemplateImportStatusSentMailManagementdatatable != undefined){
                SystemMailTemplateImportStatusSentMailManagementdatatable.clear().draw();
            }

            var crr_record_in_page = 1000;

            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page
            
            for (var i = 0; i < results.length; i++){
                try{
                    //console.log('results[i] = ', results[i]);
                    results[i].tDatatableAddRow();
                    SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
                }
                catch(err){
                    console.log(err);
                }
            }
            SystemMailTemplateImportStatusSentMailManagementCreatePagination(results.length,crr_record_in_page);

    })
}

//// Hàm Lấy danh sách khi mở trang 10000 bản ghi/trang 
function SystemMailTemplateImportStatusSentMailManagementGetDataTableLarge(page=1){

        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailTemplateImportStatusSentMailManagementGetDataTableLarge";
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["data"] = null;
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailTemplateImportStatusSentMailManagement();
        var results = obj.tGetDataTableOnlyReadLargeApi(page);

        obj.callAjax.then(function(data) {
            
            $("#SystemMailTemplateImportStatusSentMailManagementTableBodyId").empty();

            if(SystemMailTemplateImportStatusSentMailManagementdatatable != undefined){
                SystemMailTemplateImportStatusSentMailManagementdatatable.clear().draw();
            }
            var crr_record_in_page = 10000;

            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page
            
            for (var i = 0; i < results.length; i++){
                try{
                    //console.log('results[i] = ', results[i]);
                    results[i].tDatatableAddRow();
                    SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
                }
                catch(err){
                    console.log(err);
                }
            }
            SystemMailTemplateImportStatusSentMailManagementCreatePagination(results.length,crr_record_in_page);
  
    })
}


//// Hàm Lấy danh sách khi mở trang 10000 bản ghi/trang 
function SystemMailTemplateImportStatusSentMailManagementGetExcelDataTableLarge(page=1){

        //SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailTemplateImportStatusSentMailManagementGetExcelDataTableLarge";
        //SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["data"] = null;
        //SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailTemplateImportStatusSentMailManagement();
        var results = obj.tGetDataTableOnlyReadLargeApi(page);

        obj.callAjax.then(function(data) {
            
            $("#SystemMailTemplateImportStatusSentMailManagementExportTableBodyId").empty();

            var crr_record_in_page = 10000;

            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page
            
            for (var i = 0; i < results.length; i++){
                try{
                    //console.log('results[i] = ', results[i]);
                    results[i].tFillTable3("SystemMailTemplateImportStatusSentMailManagementExportTableId");
                    SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
                }
                catch(err){
                    console.log(err);
                }
                if(i == (results.length - 1) )
                {
                    SystemMailTemplateImportStatusSentMailManagementExportExcel()
                }
            }
    })
}
//// Hàm Lấy danh sách khi mở trang 

$(document).ready(function(){
    LoadSystemMailTemplateImportStatusSentMailManagementTableDataList();
})

// Load danh sach

function LoadSystemMailTemplateImportStatusSentMailManagementTableDataList(){
    var SystemMailTemplateImportStatusSentMailManagementIdTable ="SystemMailTemplateImportStatusSentMailManagementTableId";
    var checker = $("#" +SystemMailTemplateImportStatusSentMailManagementIdTable );
    if (checker.length > 0){
        if($('#'+SystemMailTemplateImportStatusSentMailManagementIdTable).is(":visible")){
            if(SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_RECORD_IN_PAGE == 100){
                SystemMailTemplateImportStatusSentMailManagementGetDataTable(SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["current_page"]);
            }
            else if(SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_RECORD_IN_PAGE == 1000){
                SystemMailTemplateImportStatusSentMailManagementGetDataTableMedium(SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["current_page"]);
            } 
            else if(SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_RECORD_IN_PAGE == 10000){
                SystemMailTemplateImportStatusSentMailManagementGetDataTableLarge(SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["current_page"]);
            } 
        }
    }
}

// Load danh sach khi tim kiem
function LoadSearchSystemMailTemplateImportStatusSentMailManagementTableDataList(){
    var SystemMailTemplateImportStatusSentMailManagementIdTable ="SystemMailTemplateImportStatusSentMailManagementTableId";
    var checker = $("#" +SystemMailTemplateImportStatusSentMailManagementIdTable );
    if (checker.length > 0){
        if($('#'+SystemMailTemplateImportStatusSentMailManagementIdTable).is(":visible")){
            if(SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_RECORD_IN_PAGE == 100){
                SystemMailTemplateImportStatusSentMailManagementSearchData(SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["current_page"]);
            }
            else if(SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_RECORD_IN_PAGE == 1000){
                SystemMailTemplateImportStatusSentMailManagementMediumSearchData(SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["current_page"]);
            } 
            else if(SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_RECORD_IN_PAGE == 10000){
                SystemMailTemplateImportStatusSentMailManagementLargeSearchData(SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["current_page"]);
            } 
        }
    }
}

// Load danh sach khi tim kiem
function LoadFilterSystemMailTemplateImportStatusSentMailManagementTableDataList(){
    var SystemMailTemplateImportStatusSentMailManagementIdTable ="SystemMailTemplateImportStatusSentMailManagementTableId";
    var checker = $("#" +SystemMailTemplateImportStatusSentMailManagementIdTable );
    if (checker.length > 0){
        if($('#'+SystemMailTemplateImportStatusSentMailManagementIdTable).is(":visible")){
            if(SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_RECORD_IN_PAGE == 100){
                SystemMailTemplateImportStatusSentMailManagementFilterData(SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["current_page"]);
            }
            else if(SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_RECORD_IN_PAGE == 1000){
                SystemMailTemplateImportStatusSentMailManagementMediumFilterData(SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["current_page"]);
            } 
            else if(SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_RECORD_IN_PAGE == 10000){
                SystemMailTemplateImportStatusSentMailManagementLargeFilterData(SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["current_page"]);
            } 
        }
    }
}

//// Hàm Lấy danh sách lên thẻ khi mở trang 100 bản ghi/trang
function SystemMailTemplateImportStatusSentMailManagementGetDataCard(page=1){

        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailTemplateImportStatusSentMailManagementGetDataCard";
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["data"] = null;
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailTemplateImportStatusSentMailManagement();
        var results = obj.tGetDataTableOnlyReadApi(page);

        obj.callAjax.then(function(data) {
        
        $("#SystemMailTemplateImportStatusSentMailManagementCardAreaId").find("[is_allow_delete=true]").remove();

        var crr_record_in_page = 100;

        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page
        
        for (var i = 0; i < results.length; i++){
            try{
                //console.log('results[i] = ', results[i]);
                results[i].tFillCard();
                SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
            }
            catch(err){
                console.log(err);
            }
        }
        var pagenation_ele=$(".pagination-card-SystemMailTemplateImportStatusSentMailManagement");
        var pagination=SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION;
        pagenation_ele.html('');
        var page_total_ele = $(".page-total-SystemMailTemplateImportStatusSentMailManagement");
        page_total_ele.html(`<footer class="blockquote-footer">Tổng số: ${pagination["total"]} bản ghi </footer>`);
        if (results.length > 0) {
            
                pagenation_ele.append(`<li class="page-item m-1"><a class="page-link" onclick="SystemMailTemplateImportStatusSentMailManagementGetDataCard(1)">Đầu</a></li>`);
                if (pagination["has_prev"] == true) {
                    pagenation_ele.append('<li class="page-item m-1"><a class="page-link" onclick="SystemMailTemplateImportStatusSentMailManagementGetDataCard(' + (parseInt(pagination["current_page"]) - 1) + ')">' + (parseInt(pagination["current_page"]) - 1) + '</a></li>');
                }
                pagenation_ele.append('<li class="page-item m-1 active"><a class="page-link" >' + (parseInt(pagination["current_page"])) + '</a></li>');
                if (pagination["has_next"] == true) {
                    pagenation_ele.append('<li class="page-item m-1"><a class="page-link" onclick="SystemMailTemplateImportStatusSentMailManagementGetDataCard(' + (parseInt(pagination["current_page"]) + 1) + ')">' + (parseInt(pagination["current_page"]) + 1) + '</a></li>');
                }
                if(pagination["total"] > 0){
                    var last_page_order = 0 
                    if((pagination["total"] % crr_record_in_page) != 0)
                    {
                        last_page_order = Math.floor(pagination["total"]/crr_record_in_page) + 1;
                    }
                    else {
                        last_page_order = (pagination["total"]/crr_record_in_page);
                    }
                pagenation_ele.append(`<li class="page-item m-1"><a class="page-link" onclick="SystemMailTemplateImportStatusSentMailManagementGetDataCard(`+last_page_order+`)">Cuối</a></li>`);
                }
            }   
    })
}

//// Hàm Lấy danh sách lên thẻ khi mở trang 1000 bản ghi/trang
function SystemMailTemplateImportStatusSentMailManagementGetDataCardMedium(page=1){

        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailTemplateImportStatusSentMailManagementGetDataCardMedium";
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["data"] = null;
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailTemplateImportStatusSentMailManagement();
        var results = obj.tGetDataTableOnlyReadMediumApi(page);

        obj.callAjax.then(function(data) {
        
        $("#SystemMailTemplateImportStatusSentMailManagementCardAreaId").find("[is_allow_delete=true]").remove();

        var crr_record_in_page = 100;

        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page
        
        for (var i = 0; i < results.length; i++){
            try{
                //console.log('results[i] = ', results[i]);
                results[i].tFillCard();
                SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
            }
            catch(err){
                console.log(err);
            }
        }
        var pagenation_ele=$(".pagination-card-SystemMailTemplateImportStatusSentMailManagement");
        var pagination=SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION;
        pagenation_ele.html('');
        var page_total_ele = $(".page-total-SystemMailTemplateImportStatusSentMailManagement");
        page_total_ele.html(`<footer class="blockquote-footer">Tổng số: ${pagination["total"]} bản ghi </footer>`);
        if (results.length > 0) {
            
                pagenation_ele.append(`<li class="page-item m-1"><a class="page-link" onclick="SystemMailTemplateImportStatusSentMailManagementGetDataCardMedium(1)">Đầu</a></li>`);
                if (pagination["has_prev"] == true) {
                    pagenation_ele.append('<li class="page-item m-1"><a class="page-link" onclick="SystemMailTemplateImportStatusSentMailManagementGetDataCardMedium(' + (parseInt(pagination["current_page"]) - 1) + ')">' + (parseInt(pagination["current_page"]) - 1) + '</a></li>');
                }
                pagenation_ele.append('<li class="page-item m-1 active"><a class="page-link" >' + (parseInt(pagination["current_page"])) + '</a></li>');
                if (pagination["has_next"] == true) {
                    pagenation_ele.append('<li class="page-item m-1"><a class="page-link" onclick="SystemMailTemplateImportStatusSentMailManagementGetDataCardMedium(' + (parseInt(pagination["current_page"]) + 1) + ')">' + (parseInt(pagination["current_page"]) + 1) + '</a></li>');
                }
                if(pagination["total"] > 0){
                    var last_page_order = 0 
                    if((pagination["total"] % crr_record_in_page) != 0)
                    {
                        last_page_order = Math.floor(pagination["total"]/crr_record_in_page) + 1;
                    }
                    else {
                        last_page_order = (pagination["total"]/crr_record_in_page);
                    }
                pagenation_ele.append(`<li class="page-item m-1"><a class="page-link" onclick="SystemMailTemplateImportStatusSentMailManagementGetDataCardMedium(`+last_page_order+`)">Cuối</a></li>`);
                }
            }   
    })
}

//// Hàm Lấy danh sách lên thẻ khi mở trang 10000 bản ghi/trang
function SystemMailTemplateImportStatusSentMailManagementGetDataCardLarge(page=1){

        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailTemplateImportStatusSentMailManagementGetDataCardLarge";
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["data"] = null;
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailTemplateImportStatusSentMailManagement();
        var results = obj.tGetDataTableOnlyReadLargeApi(page);

        obj.callAjax.then(function(data) {
        
        $("#SystemMailTemplateImportStatusSentMailManagementCardAreaId").find("[is_allow_delete=true]").remove();

        var crr_record_in_page = 100;

        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page
        
        for (var i = 0; i < results.length; i++){
            try{
                //console.log('results[i] = ', results[i]);
                results[i].tFillCard();
                SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
            }
            catch(err){
                console.log(err);
            }
        }
        var pagenation_ele=$(".pagination-card-SystemMailTemplateImportStatusSentMailManagement");
        var pagination=SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION;
        pagenation_ele.html('');
        var page_total_ele = $(".page-total-SystemMailTemplateImportStatusSentMailManagement");
        page_total_ele.html(`<footer class="blockquote-footer">Tổng số: ${pagination["total"]} bản ghi </footer>`);
        if (results.length > 0) {
            
                pagenation_ele.append(`<li class="page-item m-1"><a class="page-link" onclick="SystemMailTemplateImportStatusSentMailManagementGetDataCardLarge(1)">Đầu</a></li>`);
                if (pagination["has_prev"] == true) {
                    pagenation_ele.append('<li class="page-item m-1"><a class="page-link" onclick="SystemMailTemplateImportStatusSentMailManagementGetDataCardLarge(' + (parseInt(pagination["current_page"]) - 1) + ')">' + (parseInt(pagination["current_page"]) - 1) + '</a></li>');
                }
                pagenation_ele.append('<li class="page-item m-1 active"><a class="page-link" >' + (parseInt(pagination["current_page"])) + '</a></li>');
                if (pagination["has_next"] == true) {
                    pagenation_ele.append('<li class="page-item m-1"><a class="page-link" onclick="SystemMailTemplateImportStatusSentMailManagementGetDataCardLarge(' + (parseInt(pagination["current_page"]) + 1) + ')">' + (parseInt(pagination["current_page"]) + 1) + '</a></li>');
                }
                if(pagination["total"] > 0){
                    var last_page_order = 0 
                    if((pagination["total"] % crr_record_in_page) != 0)
                    {
                        last_page_order = Math.floor(pagination["total"]/crr_record_in_page) + 1;
                    }
                    else {
                        last_page_order = (pagination["total"]/crr_record_in_page);
                    }
                pagenation_ele.append(`<li class="page-item m-1"><a class="page-link" onclick="SystemMailTemplateImportStatusSentMailManagementGetDataCardLarge(`+last_page_order+`)">Cuối</a></li>`);
                }
            }   
    })
}

//// Hàm Lấy danh sách lên thẻ khi mở trang 
$(document).ready(function(){
    var SystemMailTemplateImportStatusSentMailManagementIdAreaCard ="SystemMailTemplateImportStatusSentMailManagementCardAreaId";
    var checker = $("#" +SystemMailTemplateImportStatusSentMailManagementIdAreaCard );
    if (checker.length > 0){
        if($('#'+SystemMailTemplateImportStatusSentMailManagementIdAreaCard).is(":visible")){
            SystemMailTemplateImportStatusSentMailManagementGetDataCard(SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["current_page"]);
        }
    }
})


// ########## [Create and Continue Button] Clicked Handle function ##############
// ########## [Nút thêm mới và tiếp tục] Bắt sự kiện nhấn thêm mới ##############

$(document).ready(function(){
    $("#SystemMailTemplateImportStatusSentMailManagementSaveAndNewModalBtnId").click(function(){
        var SystemMailTemplateImportStatusSentMailManagement_validate_obj = new InputValidation('SystemMailTemplateImportStatusSentMailManagementCreateModalFormId');
        if(SystemMailTemplateImportStatusSentMailManagement_validate_obj.validateRequired()){
            toastr.warning('Vui lòng điền đầy đủ thông tin');
            return;
        }
        var obj = new SystemMailTemplateImportStatusSentMailManagement();
        console.log('Save obj and create new, obj = ', obj);
        systemmailtemplateimportstatussentmailmanagement_is_continue_modal=true;
        obj.tCreateNewPostFormApi('SystemMailTemplateImportStatusSentMailManagementCreateModalFormId');
        
    })
});

// ########## [Save Button] Clicked Handle function ##############
// ########## [Nút thêm mới] bắt sự kiện nhấn nút ##############

$(document).ready(function(){
    $("#SystemMailTemplateImportStatusSentMailManagementCreateModalBtnId").click(function(){
        var SystemMailTemplateImportStatusSentMailManagement_validate_obj = new InputValidation('SystemMailTemplateImportStatusSentMailManagementCreateModalFormId');
        if(SystemMailTemplateImportStatusSentMailManagement_validate_obj.validateRequired()){
            toastr.warning('Vui lòng điền đầy đủ thông tin');
            return;
        }
        obj = new SystemMailTemplateImportStatusSentMailManagement();
        console.log('Save obj = ', obj);
        obj.tCreateNewPostFormApi('SystemMailTemplateImportStatusSentMailManagementCreateModalFormId');
    })
});


// ########## [Save Button] Clicked Handle function ##############
var systemmailtemplateimportstatussentmailmanagement_is_continue_modal=false;
var systemmailtemplateimportstatussentmailmanagement_is_continue_form=false;
var systemmailtemplateimportstatussentmailmanagement_is_continue_back_last_url=false;
$(document).ready(function(){
    $("#SystemMailTemplateImportStatusSentMailManagementCreateBtnId").click(function(){
        systemmailtemplateimportstatussentmailmanagement_is_continue_back_last_url = true;
        var SystemMailTemplateImportStatusSentMailManagement_validate_obj = new InputValidation('SystemMailTemplateImportStatusSentMailManagementCreateFormId');
        if(SystemMailTemplateImportStatusSentMailManagement_validate_obj.validateRequired()){
            toastr.warning('Vui lòng điền đầy đủ thông tin');
            return;
        }
        obj = new SystemMailTemplateImportStatusSentMailManagement();
        console.log('Save obj = ', obj);
        obj.tCreateNewPostFormApi();
    })
});
    

// ########## [Update Button] Clicked Handle function ##############

$(document).ready(function(){
    $("#SystemMailTemplateImportStatusSentMailManagementUpdateModalBtnId").click(function(){
        var SystemMailTemplateImportStatusSentMailManagement_validate_obj = new InputValidation('SystemMailTemplateImportStatusSentMailManagementEditModalFormId');
        if(SystemMailTemplateImportStatusSentMailManagement_validate_obj.validateRequired()){
            toastr.warning('Vui lòng điền đầy đủ thông tin');
            return;

        }
        obj = new SystemMailTemplateImportStatusSentMailManagement();
        console.log('Update obj = ', obj);
        obj.tUpdatePostApi('SystemMailTemplateImportStatusSentMailManagementEditModalFormId');
    })
});


// ########## [Update Button] Clicked Handle function ##############

$(document).ready(function(){
    $("#SystemMailTemplateImportStatusSentMailManagementUpdateBtnId").click(function(){
        is_continue_modal=false;
        is_continue_form=false;
        is_continue_back_last_url=true;
        var SystemMailTemplateImportStatusSentMailManagement_validate_obj = new InputValidation('SystemMailTemplateImportStatusSentMailManagementEditFormId');
        if(SystemMailTemplateImportStatusSentMailManagement_validate_obj.validateRequired()){
            toastr.warning('Vui lòng điền đầy đủ thông tin');
            return;
        }
        obj = new SystemMailTemplateImportStatusSentMailManagement();
        console.log('Update obj = ', obj);
        obj.tUpdatePostApi('SystemMailTemplateImportStatusSentMailManagementEditFormId');
    })
});
// ########## [Input Change Event] Change Event Handle function ##############
$(document).ready(function(){
    var friendly_code_field_change = $("#friendly_codeSystemMailTemplateImportStatusSentMailManagementCreateInputId");
    if(friendly_code_field_change.length > 0) {    
        $("#friendly_codeSystemMailTemplateImportStatusSentMailManagementCreateInputId").change(function(){
            var self_val = $(this).val();
            if(self_val != null && self_val != "null" && self_val != "")
            {
                SystemMailTemplateImportStatusSentMailManagementAddingCheckExistCode(self_val,$(this));
            }
        })     
    }
    var friendly_code_field_modal_change = $("#friendly_codeSystemMailTemplateImportStatusSentMailManagementCreateModalInputId");
    if(friendly_code_field_modal_change.length > 0) {    
        $("#friendly_codeSystemMailTemplateImportStatusSentMailManagementCreateModalInputId").change(function(){
            var self_val = $(this).val();
            if(self_val != null && self_val != "null" && self_val != "")
            {
                SystemMailTemplateImportStatusSentMailManagementAddingCheckExistCode(self_val,$(this));
            }
        })     
    }
    
    var table_in_use = $("table[model_name=SystemMailTemplateImportStatus]");
    if(table_in_use.length > 0){
        var tr_template_in_use = table_in_use.find("tr[is-new=template]");
        if(tr_template_in_use.length > 0){
        
            var friendly_code_template_field = tr_template_in_use.find("input[name=friendly_code]");
            if(friendly_code_template_field.length > 0 && table_inuse) {  
                         
                friendly_code_template_field.change(function(){
                    var self_val = $(this).val();
                    if(self_val != null && self_val != "null" && self_val != "")
                    {
                        SystemMailTemplateImportStatusSentMailManagementAddingCheckExistCode(self_val,$(this));
                    }
                })     
            }
        }
    }
    
    
});
// ########## [Input Change Event] Change Event Handle function ##############
$(document).ready(function(){
    var friendly_code_field_change = $("#friendly_codeSystemMailTemplateImportStatusSentMailManagementEditInputId");
    if(friendly_code_field_change.length > 0) {    
        $("#friendly_codeSystemMailTemplateImportStatusSentMailManagementEditInputId").change(function(){
            var allow_tracker_change = $(this).attr("allow_tracker_change");
            if(allow_tracker_change == "true" || allow_tracker_change == true)
            {
                var self_val = $(this).val();
                var self_model_obj_uuid = $(this).closest("form").attr("obj_uuid");
                if(self_val != null && self_val != "null" && self_val != "")
                {
                    SystemMailTemplateImportStatusSentMailManagementUpdateCheckExistCode(self_model_obj_uuid,self_val,$(this));
                }                   
            }            
        })     
    }
    var friendly_code_field_modal_change = $("#friendly_codeSystemMailTemplateImportStatusSentMailManagementEditModalInputId");
    if(friendly_code_field_modal_change.length > 0) {    
        $("#friendly_codeSystemMailTemplateImportStatusSentMailManagementEditModalInputId").change(function(){
            
            var allow_tracker_change = $(this).attr("allow_tracker_change");
            if(allow_tracker_change == "true" || allow_tracker_change == true)
            {
                var self_val = $(this).val();
                var self_model_obj_uuid = $(this).closest("form").attr("obj_uuid");
                if(self_val != null && self_val != "null" && self_val != "")
                {
                    SystemMailTemplateImportStatusSentMailManagementUpdateCheckExistCode(self_model_obj_uuid,self_val,$(this));
                }                  
            }   
        })     
    }
                       
  
    var table_in_use = $("table[model_name=SystemMailTemplateImportStatus]");
    if(table_in_use.length > 0){
        var tr_template_in_use = table_in_use.find("tr[is-new=added]");
        if(tr_template_in_use.length > 0){
        
            var friendly_code_template_field = tr_template_in_use.find("input[name=friendly_code]");
            if(friendly_code_template_field.length > 0 && table_inuse) {  
                friendly_code_template_field.change(function(){
                    var allow_tracker_change = $(this).attr("allow_tracker_change");
                    if(allow_tracker_change == "true" || allow_tracker_change == true)
                    {
                        var self_val = $(this).val();
                        var self_model_obj_uuid = $(this).closest("tr").attr("uuid");
                        if(self_val != null && self_val != "null" && self_val != "")
                        {
                            SystemMailTemplateImportStatusSentMailManagementUpdateCheckExistCode(self_model_obj_uuid,self_val,$(this));
                        }                  
                    } 
                })     
            }
        }
    }
    
});
// ########## [CALL API CHECK EXIST CODE] Clicked Handle function ##############
function SystemMailTemplateImportStatusSentMailManagementAddingCheckExistCode(code,$this_ele){
    $.ajaxSetup({
        headers: {
            'CSRFToken': getCSRFTokenValue(),
            'X-CSRFToken': getCSRFTokenValue(), // for --> SessionAuthentication
        },
        tryCount: 0,
        retryLimit: 3,
    });
    this.callAjax =
        $.ajax({
            url: SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_CREATE_CHECK_EXIST_CODE_URL + code + "/",
            type: "GET",
            async: false,
            cache: false,
            timeout: 30000,

            success: function(data) {
                var res_data = data;
                if(res_data.status_code == 200){
                    toastr.success("Mã hợp lệ");
                }
                else 
                if(res_data.status_code == 403){
                    toastr.warning("Mã đã được sử dụng, vui lòng lựa chọn mã khác");
                    $this_ele.val('');
                }
                else{
                    toastr.error("Gặp lỗi trong quá trình kiểm tra trùng lặp của mã");
                }
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
                if (xhr.textStatus == 'timeout') {
                    this.tryCount++;
                    if (this.tryCount <= this.retryLimit) {
                        //try again
                        $.ajax(this);
                        return;
                    }
                    return;
                }

            },
        });
}

// ########## [CALL API CHECK EXIST CODE] Clicked Handle function ##############
function SystemMailTemplateImportStatusSentMailManagementUpdateCheckExistCode(uuid,code,$this_ele){
    $.ajaxSetup({
        headers: {
            'CSRFToken': getCSRFTokenValue(),
            'X-CSRFToken': getCSRFTokenValue(), // for --> SessionAuthentication
        },
        tryCount: 0,
        retryLimit: 3,
    });
    this.callAjax =
        $.ajax({
            url: SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_UPDATE_CHECK_EXIST_CODE_URL.replace("<uuid>",uuid) + code + "/",
            type: "GET",
            async: false,
            cache: false,
            timeout: 30000,

            success: function(data) {
                var res_data = data;
                if(res_data.status_code == 200){
                    toastr.success("Mã hợp lệ");
                }
                else 
                if(res_data.status_code == 403){
                    toastr.warning("Mã đã được sử dụng, vui lòng lựa chọn mã khác");
                    $this_ele.val('');
                }
                else{
                    toastr.error("Gặp lỗi trong quá trình kiểm tra trùng lặp của mã");
                }
            },
            error: function(xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
                if (xhr.textStatus == 'timeout') {
                    this.tryCount++;
                    if (this.tryCount <= this.retryLimit) {
                        //try again
                        $.ajax(this);
                        return;
                    }
                    return;
                }

            },
        });
}

// ########## [Delete Button] Clicked Handle function ##############
// ########## [Nút Xóa] Xử lý sự kiện click chuột ##############

$(document).ready(function(){
    $("#SystemMailTemplateImportStatusSentMailManagementDeleteBtnId").click(function(){
        $.confirm({
        icon: 'fa fa-smile-o',
        title: 'XÓA!',
        content: 'Bạn có chắc muốn xóa ?!',
        theme: 'modern',
        closeIcon: 'cancel',
        animation: 'scale',
        type: 'orange',
        buttons: {
            cancel: {
                text: 'Hủy',
            },
            confirm: {
                text: 'Đồng ý',
                btnClass: 'btn-blue',
                action: function() {
                    //noi dung xoa
                    obj = new SystemMailTemplateImportStatusSentMailManagement();
                    console.log('Delete obj = ', obj);
                    obj.tDeleteApi();
                }
            },
        }
    })
});
})

// ########## [Delete function] Call Handle function(action) ##############
// ########## [Hàm Xóa] Xử lý sự kiện gọi hàm xóa(Thao tác) ##############

function SystemMailTemplateImportStatusSentMailManagementOnDeleteEventV1(uuid){
    var search_data = null;
    try {
        search_data = SystemMailTemplateImportStatusSentMailManagementSearchData;
    }
    catch(err) {
        search_data = null;
    }
    if(search_data == null){
        $.confirm({
        icon: 'fa fa-smile-o',
        title: 'XÓA!',
        content: 'Bạn có chắc muốn xóa ?!',
        theme: 'modern',
        closeIcon: 'cancel',
        animation: 'scale',
        type: 'orange',
        buttons: {
                    cancel: {
                        text: 'Hủy',
                    },
                    confirm: {
                        text: 'Đồng ý',
                        btnClass: 'btn-blue',
                        action: function() {
                            //noi dung xoa
                            var obj=new SystemMailTemplateImportStatusSentMailManagement();
                            obj.tDeleteApi(uuid);
                        }
                    },
                    
                }
        });
    }
    else { 
        SystemMailTemplateImportStatusSentMailManagementOnDeleteWithDataSearchEvent(uuid);
    }

}

// ########## [Delete function] Call Handle function(action) ##############
// ########## [Hàm Xóa] Xử lý sự kiện gọi hàm xóa(Thao tác) ##############

function SystemMailTemplateImportStatusSentMailManagementOnDeleteEvent(uuid){
    // Get obj name
    const obj_tr = $("tr#" + uuid);
    const obj_name = $("tr#" + uuid).attr("obj_name");

    // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/
    Swal.fire({
        html: "Bạn chắc muốn xóa Trạng thái tải lên Mẫu email <b>" + obj_name + "</b>?",
        icon: "warning",
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonText: "Đồng ý",
        cancelButtonText: "Hủy bỏ",
        customClass: {
            confirmButton: "btn fw-bold btn-danger",
            cancelButton: "btn fw-bold btn-light"
        }
    }).then(function (result) {
        if (result.value) {
            Swal.fire({
                html: "Bạn đã xóa Trạng thái tải lên Mẫu email <b>" + obj_name + "</b>!.",
                icon: "success",
                buttonsStyling: false,
                confirmButtonText: "Ok",
                customClass: {
                    confirmButton: "btn fw-bold btn-primary",
                }
            }).then(function () {
                // Remove current row
                SystemMailTemplateImportStatusSentMailManagementdatatable.row(obj_tr).remove().draw();
                var crr_delete_uuid = uuid;
                var obj = new SystemMailTemplateImportStatusSentMailManagement();
                obj.tDeleteApi(crr_delete_uuid);
            })
        }
    });

}
///// xóa và load lại danh sách theo dữ liệu tìm kiếm
function SystemMailTemplateImportStatusSentMailManagementOnDeleteWithDataSearchEvent(uuid){
    $.confirm({
    icon: 'fa fa-smile-o',
    title: 'XÓA!',
    content: 'Bạn có chắc muốn xóa ?!',
    theme: 'modern',
    closeIcon: 'cancel',
    animation: 'scale',
    type: 'orange',
    buttons: {
        cancel: {
            text: 'Hủy',
        },
        confirm: {
            text: 'Đồng ý',
            btnClass: 'btn-blue',
            action: function() {
                //noi dung xoa
                var obj=new SystemMailTemplateImportStatusSentMailManagement();
                
                obj.tDeleteApiWithDataSearch(uuid,SystemMailTemplateImportStatusSentMailManagementSearchData);
            }
        },
        
    }
});
    
}

// xem chi tiết
function SystemMailTemplateImportStatusSentMailManagementViewDetails(selectionId){
    var select = $("#"+selectionId);
    if(select.length>0){
        var value =  select.val()
        if(value == "" || value == null || value == undefined){
            toastr.warning('Vui lòng chọn giá trị');
            return;
        }
        else {
            $('#SystemMailTemplateImportStatusSentMailManagementDetailModalId').modal('toggle');
            var obj=new SystemMailTemplateImportStatusSentMailManagement();
            obj.tGetObjApi(obj_uuid);
            obj.callAjax.then(function(data) {
                new SystemMailTemplateImportStatusSentMailManagement(data).tFillDetailForm('SystemMailTemplateImportStatusSentMailManagementDetailModalId_form');
            })
        }
    }
}

// xem chi tiết ở popup
function SystemMailTemplateImportStatusSentMailManagementOpenPopupDetails(uuid){
   
    $('#SystemMailTemplateImportStatusSentMailManagementDetailModalId').modal('toggle');
    var obj=new SystemMailTemplateImportStatusSentMailManagement();
    obj.tGetObjApi(uuid);
    obj.callAjax.then(function(data) {
        new SystemMailTemplateImportStatusSentMailManagement(data).tFillDetailModalForm('SystemMailTemplateImportStatusSentMailManagementDetailModalId_form');
    })
}
// Mở tab để xem chi tiết
function SystemMailTemplateImportStatusSentMailManagementDetails(uuid){
    var org_app_prefixId = ""
    if($("#org_app_prefixId").length > 0){
        org_app_prefixId = $("#org_app_prefixId").val();
    }
   location.href = `${org_app_prefixId}/SentMailManagement/SystemMailTemplateImportStatus/detail/${uuid}`;
}
/// load chi tiết/ cho phép chỉnh sửa
function SystemMailTemplateImportStatusSentMailManagementOpenPopupEdit(uuid){
    $('#SystemMailTemplateImportStatusSentMailManagementEditModalId').modal('toggle');
    var obj=new SystemMailTemplateImportStatusSentMailManagement();
    obj.tGetObjApi(uuid);
    obj.callAjax.then(function(data) {
        new SystemMailTemplateImportStatusSentMailManagement(data).tFillEditModalForm('SystemMailTemplateImportStatusSentMailManagementEditModalId_form');

    })
}

/// Mở trang chỉnh sửa ở tab mới
function SystemMailTemplateImportStatusSentMailManagementEdit(uuid){
                       
    var org_app_prefixId = ""
    if($("#org_app_prefixId").length > 0){
        org_app_prefixId = $("#org_app_prefixId").val();
    }
      location.href = `${org_app_prefixId}/SentMailManagement/SystemMailTemplateImportStatus/edit/${uuid}`;
}

// ########## [Cancel Button] Clicked Handle function ##############
$(document).ready(function(){
    $("#SystemMailTemplateImportStatusSentMailManagementCancelBtnId").click(function(){
        systemmailtemplateimportstatussentmailmanagement_is_continue_modal=false;
        systemmailtemplateimportstatussentmailmanagement_is_continue_form=false;
        systemmailtemplateimportstatussentmailmanagement_is_continue_back_last_url=false;
        last_url = localStorage.getItem("last_url");
        location.href = last_url;

    })
});
     

// ########## [Fill Table by Search] Handle Event function ##############
function SystemMailTemplateImportStatusSentMailManagementSearchData(page=1,search_data=null){

        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailTemplateImportStatusSentMailManagementSearchData";
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["data"] = search_data;
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailTemplateImportStatusSentMailManagement();
        var results = obj.tSearchDataApi(page,search_data);
        obj.callAjax.then(function(data) {

            $("#SystemMailTemplateImportStatusSentMailManagementTableBodyId").empty();

            if(SystemMailTemplateImportStatusSentMailManagementdatatable != undefined){
                SystemMailTemplateImportStatusSentMailManagementdatatable.clear().draw();
            }            
            var crr_record_in_page = 100;

            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page;

            for (var i = 0; i < results.length; i++){
                try{
                    console.log('results[i] = ', results[i]);

                    results[i].tDatatableAddRow();

                    SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
                }
                catch(err){
                    console.log(err);
                }
            }
            //search_type = search_type.trim()
            var pagination = SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION;
            SystemMailTemplateImportStatusSentMailManagementCreatePagination(results.length,crr_record_in_page);

            var crr_txt = $("#SystemMailTemplateImportStatusSentMailManagementQuickSearchInputId").val();
            highlight(crr_txt,"#SystemMailTemplateImportStatusSentMailManagementTableBodyId");
    })

}
    
// ########## [Fill Table by Search] Handle Event function ##############
function SystemMailTemplateImportStatusSentMailManagementMediumSearchData(page=1,search_data=null){
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailTemplateImportStatusSentMailManagementMediumSearchData";
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["data"] = search_data;
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailTemplateImportStatusSentMailManagement();
        var results = obj.tSearchDataMediumApi(page,search_data);
        obj.callAjax.then(function(data) {

            $("#SystemMailTemplateImportStatusSentMailManagementTableBodyId").empty();

            if(SystemMailTemplateImportStatusSentMailManagementdatatable != undefined){
                SystemMailTemplateImportStatusSentMailManagementdatatable.clear().draw();
            }            
            var crr_record_in_page = 1000;

            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page;

            for (var i = 0; i < results.length; i++){
                try{
                    console.log('results[i] = ', results[i]);

                    results[i].tDatatableAddRow();

                    SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
                }
                catch(err){
                    console.log(err);
                }
            }
            //search_type = search_type.trim()
            var pagination = SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION;
            SystemMailTemplateImportStatusSentMailManagementCreatePagination(results.length,crr_record_in_page);


            var crr_txt = $("#SystemMailTemplateImportStatusSentMailManagementQuickSearchInputId").val();
            highlight(crr_txt,"#SystemMailTemplateImportStatusSentMailManagementTableId");
    })

}
    
// ########## [Fill Table by Search] Handle Event function ##############
function SystemMailTemplateImportStatusSentMailManagementLargeSearchData(page=1,search_data=null){
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailTemplateImportStatusSentMailManagementLargeSearchData";
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["data"] = search_data;
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailTemplateImportStatusSentMailManagement();
        var results = obj.tSearchDataLargeApi(page,search_data);
        obj.callAjax.then(function(data) {

            $("#SystemMailTemplateImportStatusSentMailManagementTableBodyId").empty();

            if(SystemMailTemplateImportStatusSentMailManagementdatatable != undefined){
                SystemMailTemplateImportStatusSentMailManagementdatatable.clear().draw();
            }            
            var crr_record_in_page = 10000;

            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page;

            for (var i = 0; i < results.length; i++){
                try{
                    console.log('results[i] = ', results[i]);

                    results[i].tDatatableAddRow();

                    SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
                }
                catch(err){
                    console.log(err);
                }
            }
            //search_type = search_type.trim()
            var pagination = SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION;
            SystemMailTemplateImportStatusSentMailManagementCreatePagination(results.length,crr_record_in_page);
            var crr_txt = $("#SystemMailTemplateImportStatusSentMailManagementQuickSearchInputId").val();
            highlight(crr_txt,"#SystemMailTemplateImportStatusSentMailManagementTableId");
    })

}
    
// ########## [Fill Table by Search] Handle Event function ##############
function SystemMailTemplateImportStatusSentMailManagementExcelLargeSearchData(page=1,search_data=null){
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailTemplateImportStatusSentMailManagementLargeSearchData";
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["data"] = search_data;
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailTemplateImportStatusSentMailManagement();
        var results = obj.tSearchDataLargeApi(page,search_data);
        obj.callAjax.then(function(data) {

            $("#SystemMailTemplateImportStatusSentMailManagementExportTableId").find("tbody").empty();
            
            var crr_record_in_page = 10000;

            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page;

            for (var i = 0; i < results.length; i++){
                try{
                    console.log('results[i] = ', results[i]);

                    results[i].tFillTable3("SystemMailTemplateImportStatusSentMailManagementExportTableId");

                    SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
                }
                catch(err){
                    console.log(err);
                }

                if(i == results.length - 1){
                    SystemMailTemplateImportStatusSentMailManagementExportExcel()
                }
            }
    })

}


// ########## [Fill Table by Filter] Handle Event function ##############
function SystemMailTemplateImportStatusSentMailManagementFilterData(page=1,search_data=null){
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailTemplateImportStatusSentMailManagementFilterData";
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["data"] = search_data;
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailTemplateImportStatusSentMailManagement();
        var results = obj.tFilterDataApi(page,search_data);
        obj.callAjax.then(function(data) {

            $("#SystemMailTemplateImportStatusSentMailManagementTableBodyId").empty();

            if(SystemMailTemplateImportStatusSentMailManagementdatatable != undefined){
                SystemMailTemplateImportStatusSentMailManagementdatatable.clear().draw();
            }            
            var crr_record_in_page = 100;

            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page;

            for (var i = 0; i < results.length; i++){
                try{
                    console.log('results[i] = ', results[i]);

                    results[i].tDatatableAddRow();

                    SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
                }
                catch(err){
                    console.log(err);
                }
            }
            //search_type = search_type.trim()
            var pagination = SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION;
            SystemMailTemplateImportStatusSentMailManagementCreatePagination(results.length,crr_record_in_page);


    })

}
    
// ########## [Fill Table by Filter] Handle Event function ##############
function SystemMailTemplateImportStatusSentMailManagementMediumFilterData(page=1,search_data=null){
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailTemplateImportStatusSentMailManagementMediumFilterData";
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["data"] = search_data;
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailTemplateImportStatusSentMailManagement();
        var results = obj.tFilterDataMediumApi(page,search_data);
        obj.callAjax.then(function(data) {

            $("#SystemMailTemplateImportStatusSentMailManagementTableBodyId").empty();

            if(SystemMailTemplateImportStatusSentMailManagementdatatable != undefined){
                SystemMailTemplateImportStatusSentMailManagementdatatable.clear().draw();
            }            
            var crr_record_in_page = 1000;

            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page;

            for (var i = 0; i < results.length; i++){
                try{
                    console.log('results[i] = ', results[i]);

                    results[i].tDatatableAddRow();

                    SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
                }
                catch(err){
                    console.log(err);
                }
            }
            //search_type = search_type.trim()
            var pagination = SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION;
            SystemMailTemplateImportStatusSentMailManagementCreatePagination(results.length,crr_record_in_page);


    })

}
    
// ########## [Fill Table by Filter] Handle Event function ##############
function SystemMailTemplateImportStatusSentMailManagementLargeFilterData(page=1,search_data=null){
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailTemplateImportStatusSentMailManagementLargeFilterData";
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["data"] = search_data;
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailTemplateImportStatusSentMailManagement();
        var results = obj.tFilterDataLargeApi(page,search_data);
        obj.callAjax.then(function(data) {

            $("#SystemMailTemplateImportStatusSentMailManagementTableBodyId").empty();

            if(SystemMailTemplateImportStatusSentMailManagementdatatable != undefined){
                SystemMailTemplateImportStatusSentMailManagementdatatable.clear().draw();
            }            
            var crr_record_in_page = 10000;

            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page;

            for (var i = 0; i < results.length; i++){
                try{
                    console.log('results[i] = ', results[i]);

                    results[i].tDatatableAddRow();

                    SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
                }
                catch(err){
                    console.log(err);
                }
            }
            //search_type = search_type.trim()
            var pagination = SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION;
            SystemMailTemplateImportStatusSentMailManagementCreatePagination(results.length,crr_record_in_page);


    })

}



// ########## [Fill Table by Filter] Handle Event function ##############
function SystemMailTemplateImportStatusSentMailManagementExcelLargeFilterData(page=1,search_data=null){
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailTemplateImportStatusSentMailManagementLargeFilterData";
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["data"] = search_data;
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailTemplateImportStatusSentMailManagement();
        var slugSearch = "";
        
        var results = obj.tFilterDataLargeApi(page,slugSearch);
        obj.callAjax.then(function(data) {

            $("#SystemMailTemplateImportStatusSentMailManagementExportTableId").find("tbody").empty();
            
            var crr_record_in_page = 10000;

            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page;

            for (var i = 0; i < results.length; i++){
                try{
                    console.log('results[i] = ', results[i]);

                    results[i].tExportDatatableAddRow("SystemMailTemplateImportStatusSentMailManagementExportTableId");

                    SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
                }
                catch(err){
                    console.log(err);
                }
                if(i == results.length - 1){
                //    SystemMailTemplateImportStatusSentMailManagementExportExcel();
                    return "add row for export table success";
                }
            }
            

    })

}

function CallPromiseSystemMailTemplateImportStatusSentMailManagementExcelLargeFilterData(page=1,search_data=null){
    return new Promise(resolve => {
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailTemplateImportStatusSentMailManagementLargeFilterData";
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["data"] = search_data;
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailTemplateImportStatusSentMailManagement();
        var slugSearch = "";
        
        var results = obj.tFilterDataLargeApi(page,slugSearch);
        obj.callAjax.then(function(data) {

            $("#SystemMailTemplateImportStatusSentMailManagementExportTableId").find("tbody").empty();
            
            var crr_record_in_page = 10000;

            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page;
            if(results.length > 0){
                for (var i = 0; i < results.length; i++){
                    try{
                        console.log('results[i] = ', results[i]);

                        results[i].tExportDatatableAddRow("SystemMailTemplateImportStatusSentMailManagementExportTableId");

                        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
                    }
                    catch(err){
                        console.log(err);
                    }
                    if(i == results.length - 1){
                    //    SystemMailTemplateImportStatusSentMailManagementExportExcel();
                        resolve(true);
                    }
                }
            }
            else{
                resolve(false);
            }
    })
    });
}

async function asyncCallSystemMailTemplateImportStatusSentMailManagementExcelLargeFilterData(page=1,search_data=null) {
  console.log('exportingg');
  await CallPromiseSystemMailTemplateImportStatusSentMailManagementExcelLargeFilterData(page,search_data);
  console.log('exported');
  // Expected output: "resolved"
}




// ########## [Search Button] Clicked Handle function ##############
// ########## [Nút tìm kiếm] Sự kiện click nút tìm kiếm ##############

$(document).ready(function(){
    // Tìm kiếm nhanh
    $("#SystemMailTemplateImportStatusSentMailManagementQuickSearchInputId").on('keyup', function(e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION={
                current_page:1,
                total:0,
                has_next:false,
                has_prev:false
            }
            SystemMailTemplateImportStatusSentMailManagementSearchData(SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["current_page"]);
        }
    })
    $("#SystemMailTemplateImportStatusSentMailManagementQuickSearchBtnId").click(function(){
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION={
            current_page:1,
            total:0,
            has_next:false,
            has_prev:false
        }

        //SystemMailTemplateImportStatusSentMailManagementSearchData(SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["current_page"]);
        //var IdAreaCard ="SystemMailTemplateImportStatusSentMailManagementCardAreaId";
        //var checker = $("#" +IdAreaCard );
        //if (checker.length > 0){
        //    if($('#'+IdAreaCard).is(":visible")){
        //        SystemMailTemplateImportStatusSentMailManagementGetDataCard(SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["current_page"]);
        //    }
        //}
    })
    $("#SystemMailTemplateImportStatusSentMailManagementSearchBtnId").click(function(){
        SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION={
            current_page:1,
            total:0,
            has_next:false,
            has_prev:false
        }
        SystemMailTemplateImportStatusSentMailManagementFilterData(SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_PAGINATION["current_page"]);
    })
});

    

// ########## [Search Button] Clicked Handle function ##############
$(document).ready(function(){

    $("#SystemMailTemplateImportStatusSentMailManagementExportExcelBtnId").click(function(){
        var is_export = true;
        if(SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["func"].includes("GetDataTable")){
                SystemMailTemplateImportStatusSentMailManagementGetExcelDataTableLarge(1);
        }
        else if(SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["func"].includes("SearchData")){
                SystemMailTemplateImportStatusSentMailManagementExcelLargeSearchData(1,SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["data"]);
        } 
        else if(SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["func"].includes("FilterData")){
                SystemMailTemplateImportStatusSentMailManagementExcelLargeFilterData(1,SYSTEMMAILTEMPLATEIMPORTSTATUSSENTMAILMANAGEMENT_SEARCH_LOG["data"]);
        } 
        
    })
}); 

function SystemMailTemplateImportStatusSentMailManagementExportExcel(){

    var table=$('#SystemMailTemplateImportStatusSentMailManagementExportTableId');
    var count_cols = table.find("th").length;
    if(table.find("td").length>0){
        table.tableExport({
        filename: 'Trạng_thái_tải_lên_Mẫu_email_%DD%-%MM%-%YY%',
        format: 'xls',
        excludeCols: count_cols.toString(),
        onbefore: function() {
                toastr.success('Bắt đầu xuất Excel!');
            },
        onafter: function() {
                toastr.success('Xuất Excel thành công');
            },
        });
    }
    else{
        toastr.warning('Không có dữ liệu!');
    }
}

SystemMailTemplateImportStatusSentMailManagement_arr_action = [

    
    {
            "title": "Xem chi tiết",
            "func": "SystemMailTemplateImportStatusSentMailManagementDetails",
            "icon": "far fa-eye",
            "href": "#",
            "type": "detail",
            "isCheck": false,
            "allowSelfChecking": true,
            "field_checking": "#",
            "value_is_true": "#",
            "views_name": "",
            "independent_views": true
    },
            
            
    {
            "title": "Chỉnh sửa",
            "func": "SystemMailTemplateImportStatusSentMailManagementEdit",
            "icon": "far fa-edit",
            "href": "#",
            "type": "edit",
            "isCheck": false,
            "allowSelfChecking": false,
            "field_checking": "#",
            "value_is_true": "#",
            "views_name": "",
            "independent_views": true
    },
            
            
    {
            "title": "Xóa",
            "func": "SystemMailTemplateImportStatusSentMailManagementOnDeleteEvent",
            "icon": "far fa-trash-alt",
            "href": "#",
            "type": "delete",
            "isCheck": false,
            "allowSelfChecking": false,
            "field_checking": "#",
            "value_is_true": "#",
            "views_name": "",
            "independent_views": true
    },
            
            
]
// Sự kiện thay đổi các trường Bool trên table

