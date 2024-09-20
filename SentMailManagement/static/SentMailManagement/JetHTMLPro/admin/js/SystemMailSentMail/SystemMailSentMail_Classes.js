
/**
 *  SystemMailSentMailSentMailManagementClasses.js created by @truongnv(truongg.nv@gmail.com) 
 *  Mail đã gửi
 *  Định nghĩa, xử lý các sự kiện và các thông tin liên quan đến Mail đã gửi
 *  Tạo bởi @truongnv on 24/8/2023
 *  Model : SystemMailSentMail ($app_name_verbose)
 */

var SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_LOAD_MEMCACHE = false;

class SystemMailSentMailSentMailManagement {
    // ########## Init Objects ##############
    constructor(data = null) {
        if (data != null) {
            if (data.hasOwnProperty('id')) {
                this.id = data.id;
            } else {
                this.id = null;
            }

            this.__app_name__ = "SentMailManagement";

            this.__model_name__ = "SystemMailSentMail";

            if (data.hasOwnProperty('uuid')) {
                this.uuid = data.uuid;
                this.editUrl = '/SentMailManagement/SystemMailSentMail/edit/' + this.uuid + '/';
                this.detailUrl = '/SentMailManagement/SystemMailSentMail/detail/' + this.uuid + '/';
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
                

            if (data.hasOwnProperty('organization')) {
                this.organization = data.organization;
            }
                

            if (data.hasOwnProperty('addressee')) {
                this.addressee = data.addressee;
            }
                

            if (data.hasOwnProperty('mail')) {
                this.mail = data.mail;
            }
                

            if (data.hasOwnProperty('mail_sender')) {
                this.mail_sender = data.mail_sender;
            }
                

            if (data.hasOwnProperty('to_email')) {
                this.to_email = data.to_email;
            }
                

            if (data.hasOwnProperty('status_code')) {
                this.status_code = data.status_code;
            }
                

            if (data.hasOwnProperty('status_text')) {
                this.status_text = data.status_text;
            }
                

            if (data.hasOwnProperty('hr_created_by')) {
                this.hr_created_by = data.hr_created_by;
            }
                

            if (data.hasOwnProperty('hr_updated_by')) {
                this.hr_updated_by = data.hr_updated_by;
            }
                

            if (data.hasOwnProperty('content')) {
                this.content = data.content;
            }
                

        }
    }
    tGetFormData(formId = null) {
        var formEle = $("#" + formId);
        if (formEle.length > 0) {
            var chEle = formEle.find("#uuidSystemMailSentMailSentMailManagementInputId");
            if (chEle.length > 0) {
                this.uuid = chEle.val();
            } else {
                // this.uuid = null;
            }
            

            var chEle_name = formEle.find("#nameSystemMailSentMailSentMailManagementInputId");
            if (chEle_name.length > 0) {
                this.name = chEle_name.val();
            } 
                

            var chEle_code = formEle.find("#codeSystemMailSentMailSentMailManagementInputId");
            if (chEle_code.length > 0) {
                this.code = chEle_code.val();
            } 
                

            var chEle_friendly_code = formEle.find("#friendly_codeSystemMailSentMailSentMailManagementInputId");
            if (chEle_friendly_code.length > 0) {
                this.friendly_code = chEle_friendly_code.val();
            } 
                

            var chEle_created_by = formEle.find("#created_bySystemMailSentMailSentMailManagementInputId");
            if (chEle_created_by.length > 0) {
                this.created_by = chEle_created_by.val();
            } 
                

            var chEle_created_at = formEle.find("#created_atSystemMailSentMailSentMailManagementInputId");
            if (chEle_created_at.length > 0) {
                this.created_at = chEle_created_at.val();
            } 
                

            var chEle_updated_by = formEle.find("#updated_bySystemMailSentMailSentMailManagementInputId");
            if (chEle_updated_by.length > 0) {
                this.updated_by = chEle_updated_by.val();
            } 
                

            var chEle_updated_at = formEle.find("#updated_atSystemMailSentMailSentMailManagementInputId");
            if (chEle_updated_at.length > 0) {
                this.updated_at = chEle_updated_at.val();
            } 
                

            var chEle_organization = formEle.find("#organizationSystemMailSentMailSentMailManagementInputId");
            if (chEle_organization.length > 0) {
                this.organization = chEle_organization.val();
            } 
                

            var chEle_addressee = formEle.find("#addresseeSystemMailSentMailSentMailManagementInputId");
            if (chEle_addressee.length > 0) {
                this.addressee = chEle_addressee.val();
            } 
                

            var chEle_mail = formEle.find("#mailSystemMailSentMailSentMailManagementInputId");
            if (chEle_mail.length > 0) {
                this.mail = chEle_mail.val();
            } 
                

            var chEle_mail_sender = formEle.find("#mail_senderSystemMailSentMailSentMailManagementInputId");
            if (chEle_mail_sender.length > 0) {
                this.mail_sender = chEle_mail_sender.val();
            } 
                

            var chEle_to_email = formEle.find("#to_emailSystemMailSentMailSentMailManagementInputId");
            if (chEle_to_email.length > 0) {
                this.to_email = chEle_to_email.val();
            } 
                

            var chEle_status_code = formEle.find("#status_codeSystemMailSentMailSentMailManagementInputId");
            if (chEle_status_code.length > 0) {
                this.status_code = chEle_status_code.val();
            } 
                

            var chEle_status_text = formEle.find("#status_textSystemMailSentMailSentMailManagementInputId");
            if (chEle_status_text.length > 0) {
                this.status_text = chEle_status_text.val();
            } 
                

            var chEle_hr_created_by = formEle.find("#hr_created_bySystemMailSentMailSentMailManagementInputId");
            if (chEle_hr_created_by.length > 0) {
                this.hr_created_by = chEle_hr_created_by.val();
            } 
                

            var chEle_hr_updated_by = formEle.find("#hr_updated_bySystemMailSentMailSentMailManagementInputId");
            if (chEle_hr_updated_by.length > 0) {
                this.hr_updated_by = chEle_hr_updated_by.val();
            } 
                

            var chEle_content = formEle.find("#contentSystemMailSentMailSentMailManagementInputId");
            if (chEle_content.length > 0) {
                this.content = chEle_content.val();
            } 
                
        }
        else {
            

            var chEle_name = $("#nameSystemMailSentMailSentMailManagementInputId");
            if (chEle_name.length > 0) {
                this.name = chEle_name.val();
            } 
                

            var chEle_code = $("#codeSystemMailSentMailSentMailManagementInputId");
            if (chEle_code.length > 0) {
                this.code = chEle_code.val();
            } 
                

            var chEle_friendly_code = $("#friendly_codeSystemMailSentMailSentMailManagementInputId");
            if (chEle_friendly_code.length > 0) {
                this.friendly_code = chEle_friendly_code.val();
            } 
                

            var chEle_created_by = $("#created_bySystemMailSentMailSentMailManagementInputId");
            if (chEle_created_by.length > 0) {
                this.created_by = chEle_created_by.val();
            } 
                

            var chEle_created_at = $("#created_atSystemMailSentMailSentMailManagementInputId");
            if (chEle_created_at.length > 0) {
                this.created_at = chEle_created_at.val();
            } 
                

            var chEle_updated_by = $("#updated_bySystemMailSentMailSentMailManagementInputId");
            if (chEle_updated_by.length > 0) {
                this.updated_by = chEle_updated_by.val();
            } 
                

            var chEle_updated_at = $("#updated_atSystemMailSentMailSentMailManagementInputId");
            if (chEle_updated_at.length > 0) {
                this.updated_at = chEle_updated_at.val();
            } 
                

            var chEle_organization = $("#organizationSystemMailSentMailSentMailManagementInputId");
            if (chEle_organization.length > 0) {
                this.organization = chEle_organization.val();
            } 
                

            var chEle_addressee = $("#addresseeSystemMailSentMailSentMailManagementInputId");
            if (chEle_addressee.length > 0) {
                this.addressee = chEle_addressee.val();
            } 
                

            var chEle_mail = $("#mailSystemMailSentMailSentMailManagementInputId");
            if (chEle_mail.length > 0) {
                this.mail = chEle_mail.val();
            } 
                

            var chEle_mail_sender = $("#mail_senderSystemMailSentMailSentMailManagementInputId");
            if (chEle_mail_sender.length > 0) {
                this.mail_sender = chEle_mail_sender.val();
            } 
                

            var chEle_to_email = $("#to_emailSystemMailSentMailSentMailManagementInputId");
            if (chEle_to_email.length > 0) {
                this.to_email = chEle_to_email.val();
            } 
                

            var chEle_status_code = $("#status_codeSystemMailSentMailSentMailManagementInputId");
            if (chEle_status_code.length > 0) {
                this.status_code = chEle_status_code.val();
            } 
                

            var chEle_status_text = $("#status_textSystemMailSentMailSentMailManagementInputId");
            if (chEle_status_text.length > 0) {
                this.status_text = chEle_status_text.val();
            } 
                

            var chEle_hr_created_by = $("#hr_created_bySystemMailSentMailSentMailManagementInputId");
            if (chEle_hr_created_by.length > 0) {
                this.hr_created_by = chEle_hr_created_by.val();
            } 
                

            var chEle_hr_updated_by = $("#hr_updated_bySystemMailSentMailSentMailManagementInputId");
            if (chEle_hr_updated_by.length > 0) {
                this.hr_updated_by = chEle_hr_updated_by.val();
            } 
                

            var chEle_content = $("#contentSystemMailSentMailSentMailManagementInputId");
            if (chEle_content.length > 0) {
                this.content = chEle_content.val();
            } 
                


        }
    }

    // ########## [FILL FORM] Objects to FRONT END ##############
    tFillForm() {
        var self = this;
        
            try{
                var j_ele_name = $("#nameSystemMailSentMailSentMailManagementInputId");
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
                var j_ele_code = $("#codeSystemMailSentMailSentMailManagementInputId");
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
                var j_ele_friendly_code = $("#friendly_codeSystemMailSentMailSentMailManagementInputId");
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
                var j_ele_created_by = $("#created_bySystemMailSentMailSentMailManagementInputId");
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
                var j_ele_created_at = $("#created_atSystemMailSentMailSentMailManagementInputId");
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
                var j_ele_updated_by = $("#updated_bySystemMailSentMailSentMailManagementInputId");
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
                var j_ele_updated_at = $("#updated_atSystemMailSentMailSentMailManagementInputId");
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
                var j_ele_organization = $("#organizationSystemMailSentMailSentMailManagementInputId");
                    if (j_ele_organization.length > 0){
                        var organization_value = self["organization"]["uuid"];
                        j_ele_organization.val(organization_value).change();

                        var organization_select_value = j_ele_organization.val();

                        if(organization_select_value == undefined || organization_select_value == null){
                            var organization_name = self["organization"]["name"];
                            j_ele_organization.append(new Option(organization_name + "(đã lưu)", organization_value,true,true));
                        }
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_addressee = $("#addresseeSystemMailSentMailSentMailManagementInputId");
                    if (j_ele_addressee.length > 0){
                        var addressee_value = self["addressee"]["uuid"];
                        j_ele_addressee.val(addressee_value).change();

                        var addressee_select_value = j_ele_addressee.val();

                        if(addressee_select_value == undefined || addressee_select_value == null){
                            var addressee_name = self["addressee"]["name"];
                            j_ele_addressee.append(new Option(addressee_name + "(đã lưu)", addressee_value,true,true));
                        }
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_mail = $("#mailSystemMailSentMailSentMailManagementInputId");
                    if (j_ele_mail.length > 0){
                        var mail_value = self["mail"]["uuid"];
                        j_ele_mail.val(mail_value).change();

                        var mail_select_value = j_ele_mail.val();

                        if(mail_select_value == undefined || mail_select_value == null){
                            var mail_name = self["mail"]["name"];
                            j_ele_mail.append(new Option(mail_name + "(đã lưu)", mail_value,true,true));
                        }
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_mail_sender = $("#mail_senderSystemMailSentMailSentMailManagementInputId");
                if (j_ele_mail_sender.length > 0){
                    if (j_ele_mail_sender.attr('name') != 'uuid'){
                        j_ele_mail_sender.val(self.mail_sender).change();
                    }
                }
                else{
                    // j_ele_mail_sender.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_to_email = $("#to_emailSystemMailSentMailSentMailManagementInputId");
                if (j_ele_to_email.length > 0){
                    if (j_ele_to_email.attr('name') != 'uuid'){
                        j_ele_to_email.val(self.to_email).change();
                    }
                }
                else{
                    // j_ele_to_email.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_status_code = $("#status_codeSystemMailSentMailSentMailManagementInputId");
                if (j_ele_status_code.length > 0){
                    if (j_ele_status_code.attr('name') != 'uuid'){
                        j_ele_status_code.val(self.status_code).change();
                    }
                }
                else{
                    // j_ele_status_code.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_status_text = $("#status_textSystemMailSentMailSentMailManagementInputId");
                if (j_ele_status_text.length > 0){
                    if (j_ele_status_text.attr('name') != 'uuid'){
                        j_ele_status_text.val(self.status_text).change();
                    }
                }
                else{
                    // j_ele_status_text.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_hr_created_by = $("#hr_created_bySystemMailSentMailSentMailManagementInputId");
                    if (j_ele_hr_created_by.length > 0){
                        var hr_created_by_value = self["hr_created_by"]["uuid"];
                        j_ele_hr_created_by.val(hr_created_by_value).change();

                        var hr_created_by_select_value = j_ele_hr_created_by.val();

                        if(hr_created_by_select_value == undefined || hr_created_by_select_value == null){
                            var hr_created_by_name = self["hr_created_by"]["name"];
                            j_ele_hr_created_by.append(new Option(hr_created_by_name + "(đã lưu)", hr_created_by_value,true,true));
                        }
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_hr_updated_by = $("#hr_updated_bySystemMailSentMailSentMailManagementInputId");
                    if (j_ele_hr_updated_by.length > 0){
                        var hr_updated_by_value = self["hr_updated_by"]["uuid"];
                        j_ele_hr_updated_by.val(hr_updated_by_value).change();

                        var hr_updated_by_select_value = j_ele_hr_updated_by.val();

                        if(hr_updated_by_select_value == undefined || hr_updated_by_select_value == null){
                            var hr_updated_by_name = self["hr_updated_by"]["name"];
                            j_ele_hr_updated_by.append(new Option(hr_updated_by_name + "(đã lưu)", hr_updated_by_value,true,true));
                        }
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_content = $("#contentSystemMailSentMailSentMailManagementInputId");
                if (j_ele_content.length > 0){
                    if (j_ele_content.attr('name') != 'uuid'){
                        j_ele_content.val(self.content).change();
                    }
                }
                else{
                    // j_ele_content.val(null);
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
                var j_ele_name = $("#nameSystemMailSentMailSentMailManagementCreateInputId");
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
                var j_ele_code = $("#codeSystemMailSentMailSentMailManagementCreateInputId");
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
                var j_ele_friendly_code = $("#friendly_codeSystemMailSentMailSentMailManagementCreateInputId");
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
                var j_ele_created_by = $("#created_bySystemMailSentMailSentMailManagementCreateInputId");
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
                var j_ele_created_at = $("#created_atSystemMailSentMailSentMailManagementCreateInputId");
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
                var j_ele_updated_by = $("#updated_bySystemMailSentMailSentMailManagementCreateInputId");
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
                var j_ele_updated_at = $("#updated_atSystemMailSentMailSentMailManagementCreateInputId");
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
                var j_ele_organization = $("#organizationSystemMailSentMailSentMailManagementCreateInputId");
                    if (j_ele_organization.length > 0){
                        var organization_value = self["organization"]["uuid"];
                        j_ele_organization.val(organization_value).change();
                        
                        var organization_select_value = j_ele_organization.val();

                        if(organization_select_value == undefined || organization_select_value == null){
                        var organization_name = self["organization"]["name"];
                            j_ele_organization.append(new Option(organization_name + "(đã lưu)", organization_value,true,true));
                        }
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_addressee = $("#addresseeSystemMailSentMailSentMailManagementCreateInputId");
                    if (j_ele_addressee.length > 0){
                        var addressee_value = self["addressee"]["uuid"];
                        j_ele_addressee.val(addressee_value).change();
                        
                        var addressee_select_value = j_ele_addressee.val();

                        if(addressee_select_value == undefined || addressee_select_value == null){
                        var addressee_name = self["addressee"]["name"];
                            j_ele_addressee.append(new Option(addressee_name + "(đã lưu)", addressee_value,true,true));
                        }
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_mail = $("#mailSystemMailSentMailSentMailManagementCreateInputId");
                    if (j_ele_mail.length > 0){
                        var mail_value = self["mail"]["uuid"];
                        j_ele_mail.val(mail_value).change();
                        
                        var mail_select_value = j_ele_mail.val();

                        if(mail_select_value == undefined || mail_select_value == null){
                        var mail_name = self["mail"]["name"];
                            j_ele_mail.append(new Option(mail_name + "(đã lưu)", mail_value,true,true));
                        }
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_mail_sender = $("#mail_senderSystemMailSentMailSentMailManagementCreateInputId");
                if (j_ele_mail_sender.length > 0){
                    if (j_ele_mail_sender.attr('name') != 'uuid'){
                        j_ele_mail_sender.val(self.mail_sender).change();
                    }
                }
                else{
                    // j_ele_mail_sender.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_to_email = $("#to_emailSystemMailSentMailSentMailManagementCreateInputId");
                if (j_ele_to_email.length > 0){
                    if (j_ele_to_email.attr('name') != 'uuid'){
                        j_ele_to_email.val(self.to_email).change();
                    }
                }
                else{
                    // j_ele_to_email.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_status_code = $("#status_codeSystemMailSentMailSentMailManagementCreateInputId");
                if (j_ele_status_code.length > 0){
                    if (j_ele_status_code.attr('name') != 'uuid'){
                        j_ele_status_code.val(self.status_code).change();
                    }
                }
                else{
                    // j_ele_status_code.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_status_text = $("#status_textSystemMailSentMailSentMailManagementCreateInputId");
                if (j_ele_status_text.length > 0){
                    if (j_ele_status_text.attr('name') != 'uuid'){
                        j_ele_status_text.val(self.status_text).change();
                    }
                }
                else{
                    // j_ele_status_text.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_hr_created_by = $("#hr_created_bySystemMailSentMailSentMailManagementCreateInputId");
                    if (j_ele_hr_created_by.length > 0){
                        var hr_created_by_value = self["hr_created_by"]["uuid"];
                        j_ele_hr_created_by.val(hr_created_by_value).change();
                        
                        var hr_created_by_select_value = j_ele_hr_created_by.val();

                        if(hr_created_by_select_value == undefined || hr_created_by_select_value == null){
                        var hr_created_by_name = self["hr_created_by"]["name"];
                            j_ele_hr_created_by.append(new Option(hr_created_by_name + "(đã lưu)", hr_created_by_value,true,true));
                        }
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_hr_updated_by = $("#hr_updated_bySystemMailSentMailSentMailManagementCreateInputId");
                    if (j_ele_hr_updated_by.length > 0){
                        var hr_updated_by_value = self["hr_updated_by"]["uuid"];
                        j_ele_hr_updated_by.val(hr_updated_by_value).change();
                        
                        var hr_updated_by_select_value = j_ele_hr_updated_by.val();

                        if(hr_updated_by_select_value == undefined || hr_updated_by_select_value == null){
                        var hr_updated_by_name = self["hr_updated_by"]["name"];
                            j_ele_hr_updated_by.append(new Option(hr_updated_by_name + "(đã lưu)", hr_updated_by_value,true,true));
                        }
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_content = $("#contentSystemMailSentMailSentMailManagementCreateInputId");
                if (j_ele_content.length > 0){
                    if (j_ele_content.attr('name') != 'uuid'){
                        j_ele_content.val(self.content).change();
                    }
                }
                else{
                    // j_ele_content.val(null);
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
                var j_ele_name = $("#nameSystemMailSentMailSentMailManagementEditInputId");
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
                var j_ele_code = $("#codeSystemMailSentMailSentMailManagementEditInputId");
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
                var j_ele_friendly_code = $("#friendly_codeSystemMailSentMailSentMailManagementEditInputId");
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
                var j_ele_created_by = $("#created_bySystemMailSentMailSentMailManagementEditInputId");
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
                var j_ele_created_at = $("#created_atSystemMailSentMailSentMailManagementEditInputId");
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
                var j_ele_updated_by = $("#updated_bySystemMailSentMailSentMailManagementEditInputId");
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
                var j_ele_updated_at = $("#updated_atSystemMailSentMailSentMailManagementEditInputId");
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
                var j_ele_organization = $("#organizationSystemMailSentMailSentMailManagementEditInputId");
                    if (j_ele_organization.length > 0){
                        var organization_value = self["organization"]["uuid"];
                        j_ele_organization.val(organization_value).change();
                        
                        var organization_select_value = j_ele_organization.val();

                        if(organization_select_value == undefined || organization_select_value == null){
                        var organization_name = self["organization"]["name"];
                            j_ele_organization.append(new Option(organization_name + "(đã lưu)", organization_value,true,true));
                        }
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_addressee = $("#addresseeSystemMailSentMailSentMailManagementEditInputId");
                    if (j_ele_addressee.length > 0){
                        var addressee_value = self["addressee"]["uuid"];
                        j_ele_addressee.val(addressee_value).change();
                        
                        var addressee_select_value = j_ele_addressee.val();

                        if(addressee_select_value == undefined || addressee_select_value == null){
                        var addressee_name = self["addressee"]["name"];
                            j_ele_addressee.append(new Option(addressee_name + "(đã lưu)", addressee_value,true,true));
                        }
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_mail = $("#mailSystemMailSentMailSentMailManagementEditInputId");
                    if (j_ele_mail.length > 0){
                        var mail_value = self["mail"]["uuid"];
                        j_ele_mail.val(mail_value).change();
                        
                        var mail_select_value = j_ele_mail.val();

                        if(mail_select_value == undefined || mail_select_value == null){
                        var mail_name = self["mail"]["name"];
                            j_ele_mail.append(new Option(mail_name + "(đã lưu)", mail_value,true,true));
                        }
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_mail_sender = $("#mail_senderSystemMailSentMailSentMailManagementEditInputId");
                if (j_ele_mail_sender.length > 0){
                    j_ele_mail_sender.attr("allow_tracker_change","false");
                    if (j_ele_mail_sender.attr('name') != 'uuid'){
                        j_ele_mail_sender.val(self.mail_sender).change();
                        j_ele_mail_sender.attr("allow_tracker_change","true");
                    }
                }
                else{
                    // j_ele_mail_sender.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_to_email = $("#to_emailSystemMailSentMailSentMailManagementEditInputId");
                if (j_ele_to_email.length > 0){
                    j_ele_to_email.attr("allow_tracker_change","false");
                    if (j_ele_to_email.attr('name') != 'uuid'){
                        j_ele_to_email.val(self.to_email).change();
                        j_ele_to_email.attr("allow_tracker_change","true");
                    }
                }
                else{
                    // j_ele_to_email.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_status_code = $("#status_codeSystemMailSentMailSentMailManagementEditInputId");
                if (j_ele_status_code.length > 0){
                    j_ele_status_code.attr("allow_tracker_change","false");
                    if (j_ele_status_code.attr('name') != 'uuid'){
                        j_ele_status_code.val(self.status_code).change();
                        j_ele_status_code.attr("allow_tracker_change","true");
                    }
                }
                else{
                    // j_ele_status_code.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_status_text = $("#status_textSystemMailSentMailSentMailManagementEditInputId");
                if (j_ele_status_text.length > 0){
                    j_ele_status_text.attr("allow_tracker_change","false");
                    if (j_ele_status_text.attr('name') != 'uuid'){
                        j_ele_status_text.val(self.status_text).change();
                        j_ele_status_text.attr("allow_tracker_change","true");
                    }
                }
                else{
                    // j_ele_status_text.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_hr_created_by = $("#hr_created_bySystemMailSentMailSentMailManagementEditInputId");
                    if (j_ele_hr_created_by.length > 0){
                        var hr_created_by_value = self["hr_created_by"]["uuid"];
                        j_ele_hr_created_by.val(hr_created_by_value).change();
                        
                        var hr_created_by_select_value = j_ele_hr_created_by.val();

                        if(hr_created_by_select_value == undefined || hr_created_by_select_value == null){
                        var hr_created_by_name = self["hr_created_by"]["name"];
                            j_ele_hr_created_by.append(new Option(hr_created_by_name + "(đã lưu)", hr_created_by_value,true,true));
                        }
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_hr_updated_by = $("#hr_updated_bySystemMailSentMailSentMailManagementEditInputId");
                    if (j_ele_hr_updated_by.length > 0){
                        var hr_updated_by_value = self["hr_updated_by"]["uuid"];
                        j_ele_hr_updated_by.val(hr_updated_by_value).change();
                        
                        var hr_updated_by_select_value = j_ele_hr_updated_by.val();

                        if(hr_updated_by_select_value == undefined || hr_updated_by_select_value == null){
                        var hr_updated_by_name = self["hr_updated_by"]["name"];
                            j_ele_hr_updated_by.append(new Option(hr_updated_by_name + "(đã lưu)", hr_updated_by_value,true,true));
                        }
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_content = $("#contentSystemMailSentMailSentMailManagementEditInputId");
                if (j_ele_content.length > 0){
                    if (j_ele_content.attr('name') != 'uuid'){
                        if (MPSSystemMailSentMailSentMailManagementEditSystemMailSentMail_ckeditor_list.hasOwnProperty('#contentSystemMailSentMailSentMailManagementEditInputId')){
                            MPSSystemMailSentMailSentMailManagementEditSystemMailSentMail_ckeditor_list["#contentSystemMailSentMailSentMailManagementEditInputId"].setData(self.content);
                        }
                    }
                }
                else{
                    // j_ele_content.val(null);
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
                var j_ele_name = $("#nameSystemMailSentMailSentMailManagementEditModalInputId");
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
                var j_ele_code = $("#codeSystemMailSentMailSentMailManagementEditModalInputId");
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
                var j_ele_friendly_code = $("#friendly_codeSystemMailSentMailSentMailManagementEditModalInputId");
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
                var j_ele_created_by = $("#created_bySystemMailSentMailSentMailManagementEditModalInputId");
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
                var j_ele_created_at = $("#created_atSystemMailSentMailSentMailManagementEditModalInputId");
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
                var j_ele_updated_by = $("#updated_bySystemMailSentMailSentMailManagementEditModalInputId");
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
                var j_ele_updated_at = $("#updated_atSystemMailSentMailSentMailManagementEditModalInputId");
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
                var j_ele_organization = $("#organizationSystemMailSentMailSentMailManagementEditModalInputId");
                    if (j_ele_organization.length > 0){
                        var organization_value = self["organization"]["uuid"];
                        j_ele_organization.val(organization_value).change();
                        
                        var organization_select_value = j_ele_organization.val();

                        if(organization_select_value == undefined || organization_select_value == null){
                        var organization_name = self["organization"]["name"];
                            j_ele_organization.append(new Option(organization_name + "(đã lưu)", organization_value,true,true));
                        }
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_addressee = $("#addresseeSystemMailSentMailSentMailManagementEditModalInputId");
                    if (j_ele_addressee.length > 0){
                        var addressee_value = self["addressee"]["uuid"];
                        j_ele_addressee.val(addressee_value).change();
                        
                        var addressee_select_value = j_ele_addressee.val();

                        if(addressee_select_value == undefined || addressee_select_value == null){
                        var addressee_name = self["addressee"]["name"];
                            j_ele_addressee.append(new Option(addressee_name + "(đã lưu)", addressee_value,true,true));
                        }
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_mail = $("#mailSystemMailSentMailSentMailManagementEditModalInputId");
                    if (j_ele_mail.length > 0){
                        var mail_value = self["mail"]["uuid"];
                        j_ele_mail.val(mail_value).change();
                        
                        var mail_select_value = j_ele_mail.val();

                        if(mail_select_value == undefined || mail_select_value == null){
                        var mail_name = self["mail"]["name"];
                            j_ele_mail.append(new Option(mail_name + "(đã lưu)", mail_value,true,true));
                        }
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_mail_sender = $("#mail_senderSystemMailSentMailSentMailManagementEditModalInputId");
                if (j_ele_mail_sender.length > 0){
                    j_ele_mail_sender.attr("allow_tracker_change","false");
                    if (j_ele_mail_sender.attr('name') != 'uuid'){
                        j_ele_mail_sender.val(self.mail_sender).change();
                        j_ele_mail_sender.attr("allow_tracker_change","true");
                        
                    }
                }
                else{
                    // j_ele_mail_sender.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_to_email = $("#to_emailSystemMailSentMailSentMailManagementEditModalInputId");
                if (j_ele_to_email.length > 0){
                    j_ele_to_email.attr("allow_tracker_change","false");
                    if (j_ele_to_email.attr('name') != 'uuid'){
                        j_ele_to_email.val(self.to_email).change();
                        j_ele_to_email.attr("allow_tracker_change","true");
                        
                    }
                }
                else{
                    // j_ele_to_email.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_status_code = $("#status_codeSystemMailSentMailSentMailManagementEditModalInputId");
                if (j_ele_status_code.length > 0){
                    j_ele_status_code.attr("allow_tracker_change","false");
                    if (j_ele_status_code.attr('name') != 'uuid'){
                        j_ele_status_code.val(self.status_code).change();
                        j_ele_status_code.attr("allow_tracker_change","true");
                        
                    }
                }
                else{
                    // j_ele_status_code.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_status_text = $("#status_textSystemMailSentMailSentMailManagementEditModalInputId");
                if (j_ele_status_text.length > 0){
                    j_ele_status_text.attr("allow_tracker_change","false");
                    if (j_ele_status_text.attr('name') != 'uuid'){
                        j_ele_status_text.val(self.status_text).change();
                        j_ele_status_text.attr("allow_tracker_change","true");
                        
                    }
                }
                else{
                    // j_ele_status_text.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_hr_created_by = $("#hr_created_bySystemMailSentMailSentMailManagementEditModalInputId");
                    if (j_ele_hr_created_by.length > 0){
                        var hr_created_by_value = self["hr_created_by"]["uuid"];
                        j_ele_hr_created_by.val(hr_created_by_value).change();
                        
                        var hr_created_by_select_value = j_ele_hr_created_by.val();

                        if(hr_created_by_select_value == undefined || hr_created_by_select_value == null){
                        var hr_created_by_name = self["hr_created_by"]["name"];
                            j_ele_hr_created_by.append(new Option(hr_created_by_name + "(đã lưu)", hr_created_by_value,true,true));
                        }
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_hr_updated_by = $("#hr_updated_bySystemMailSentMailSentMailManagementEditModalInputId");
                    if (j_ele_hr_updated_by.length > 0){
                        var hr_updated_by_value = self["hr_updated_by"]["uuid"];
                        j_ele_hr_updated_by.val(hr_updated_by_value).change();
                        
                        var hr_updated_by_select_value = j_ele_hr_updated_by.val();

                        if(hr_updated_by_select_value == undefined || hr_updated_by_select_value == null){
                        var hr_updated_by_name = self["hr_updated_by"]["name"];
                            j_ele_hr_updated_by.append(new Option(hr_updated_by_name + "(đã lưu)", hr_updated_by_value,true,true));
                        }
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_content = $("#contentSystemMailSentMailSentMailManagementEditModalInputId");
                if (j_ele_content.length > 0){
                    if (j_ele_content.attr('name') != 'uuid'){
                        if (MPSSystemMailSentMailSentMailManagementEditSystemMailSentMail_ckeditor_list.hasOwnProperty('#contentSystemMailSentMailSentMailManagementEditInputId')){
                            MPSSystemMailSentMailSentMailManagementEditSystemMailSentMail_ckeditor_list["#contentSystemMailSentMailSentMailManagementEditInputId"].setData(self.content);
                        }
                    }
                }
                else{
                    // j_ele_content.val(null);
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
                var j_ele_name = $("#nameSystemMailSentMailSentMailManagementDetailInputId");
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
                var j_ele_code = $("#codeSystemMailSentMailSentMailManagementDetailInputId");
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
                var j_ele_friendly_code = $("#friendly_codeSystemMailSentMailSentMailManagementDetailInputId");
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
                var j_ele_created_by = $("#created_bySystemMailSentMailSentMailManagementDetailInputId");
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
                var j_ele_created_at = $("#created_atSystemMailSentMailSentMailManagementDetailInputId");
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
                var j_ele_updated_by = $("#updated_bySystemMailSentMailSentMailManagementDetailInputId");
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
                var j_ele_updated_at = $("#updated_atSystemMailSentMailSentMailManagementDetailInputId");
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
                var j_ele_organization = $("#organizationSystemMailSentMailSentMailManagementDetailInputId");
                    if (j_ele_organization.length > 0){
                    
                        var org_app_prefix = ""
                        if($("#org_app_prefix").length > 0){
                            org_app_prefix = $("#org_app_prefixId").val();
                        }
                        j_ele_organization.html("").change();
                        var organization_value = self["organization"]["uuid"];
                        var organization_name = `<a href="${org_app_prefix}/SystemOrganizationManagement/Organization/detail/${organization_value}/" class="text-gray-600 text-hover-primary" name="$field_name_system_use">${self["organization"]["name"]}</a>`
                        j_ele_organization.html(organization_name);
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_addressee = $("#addresseeSystemMailSentMailSentMailManagementDetailInputId");
                    if (j_ele_addressee.length > 0){
                    
                        var org_app_prefix = ""
                        if($("#org_app_prefix").length > 0){
                            org_app_prefix = $("#org_app_prefixId").val();
                        }
                        j_ele_addressee.html("").change();
                        var addressee_value = self["addressee"]["uuid"];
                        var addressee_name = `<a href="${org_app_prefix}/HRAccountManagement/HRAccount/detail/${addressee_value}/" class="text-gray-600 text-hover-primary" name="$field_name_system_use">${self["addressee"]["name"]}</a>`
                        j_ele_addressee.html(addressee_name);
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_mail = $("#mailSystemMailSentMailSentMailManagementDetailInputId");
                    if (j_ele_mail.length > 0){
                    
                        var org_app_prefix = ""
                        if($("#org_app_prefix").length > 0){
                            org_app_prefix = $("#org_app_prefixId").val();
                        }
                        j_ele_mail.html("").change();
                        var mail_value = self["mail"]["uuid"];
                        var mail_name = `<a href="${org_app_prefix}/SentMailManagement/SystemMailMail/detail/${mail_value}/" class="text-gray-600 text-hover-primary" name="$field_name_system_use">${self["mail"]["name"]}</a>`
                        j_ele_mail.html(mail_name);
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_mail_sender = $("#mail_senderSystemMailSentMailSentMailManagementDetailInputId");
                if (j_ele_mail_sender.length > 0){
                    if (j_ele_mail_sender.attr('name') != 'uuid'){
                        j_ele_mail_sender.html(self.mail_sender).change();
                    }
                }
                else{
                    // j_ele_mail_sender.html(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_to_email = $("#to_emailSystemMailSentMailSentMailManagementDetailInputId");
                if (j_ele_to_email.length > 0){
                    if (j_ele_to_email.attr('name') != 'uuid'){
                        j_ele_to_email.html(self.to_email).change();
                    }
                }
                else{
                    // j_ele_to_email.html(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_status_code = $("#status_codeSystemMailSentMailSentMailManagementDetailInputId");
                if (j_ele_status_code.length > 0){
                    if (j_ele_status_code.attr('name') != 'uuid'){
                        j_ele_status_code.html(self.status_code).change();
                    }
                }
                else{
                    // j_ele_status_code.html(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_status_text = $("#status_textSystemMailSentMailSentMailManagementDetailInputId");
                if (j_ele_status_text.length > 0){
                    if (j_ele_status_text.attr('name') != 'uuid'){
                        j_ele_status_text.html(self.status_text).change();
                    }
                }
                else{
                    // j_ele_status_text.html(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_hr_created_by = $("#hr_created_bySystemMailSentMailSentMailManagementDetailInputId");
                    if (j_ele_hr_created_by.length > 0){
                    
                        var org_app_prefix = ""
                        if($("#org_app_prefix").length > 0){
                            org_app_prefix = $("#org_app_prefixId").val();
                        }
                        j_ele_hr_created_by.html("").change();
                        var hr_created_by_value = self["hr_created_by"]["uuid"];
                        var hr_created_by_name = `<a href="${org_app_prefix}/HRAccountManagement/HRAccount/detail/${hr_created_by_value}/" class="text-gray-600 text-hover-primary" name="$field_name_system_use">${self["hr_created_by"]["name"]}</a>`
                        j_ele_hr_created_by.html(hr_created_by_name);
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_hr_updated_by = $("#hr_updated_bySystemMailSentMailSentMailManagementDetailInputId");
                    if (j_ele_hr_updated_by.length > 0){
                    
                        var org_app_prefix = ""
                        if($("#org_app_prefix").length > 0){
                            org_app_prefix = $("#org_app_prefixId").val();
                        }
                        j_ele_hr_updated_by.html("").change();
                        var hr_updated_by_value = self["hr_updated_by"]["uuid"];
                        var hr_updated_by_name = `<a href="${org_app_prefix}/HRAccountManagement/HRAccount/detail/${hr_updated_by_value}/" class="text-gray-600 text-hover-primary" name="$field_name_system_use">${self["hr_updated_by"]["name"]}</a>`
                        j_ele_hr_updated_by.html(hr_updated_by_name);
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_content = $("#contentSystemMailSentMailSentMailManagementDetailInputId");
                if (j_ele_content.length > 0){
                    if (j_ele_content.attr('name') != 'uuid'){
                        j_ele_content.html(self.content).change();
                    }
                }
                else{
                    // j_ele_content.html(null);
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
                var j_ele_name = $("#nameSystemMailSentMailSentMailManagementDetailModalInputId");
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
                var j_ele_code = $("#codeSystemMailSentMailSentMailManagementDetailModalInputId");
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
                var j_ele_friendly_code = $("#friendly_codeSystemMailSentMailSentMailManagementDetailModalInputId");
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
                var j_ele_created_by = $("#created_bySystemMailSentMailSentMailManagementDetailModalInputId");
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
                var j_ele_created_at = $("#created_atSystemMailSentMailSentMailManagementDetailModalInputId");
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
                var j_ele_updated_by = $("#updated_bySystemMailSentMailSentMailManagementDetailModalInputId");
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
                var j_ele_updated_at = $("#updated_atSystemMailSentMailSentMailManagementDetailModalInputId");
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
                var j_ele_organization = $("#organizationSystemMailSentMailSentMailManagementDetailModalInputId");
                    if (j_ele_organization.length > 0){
                    
                        var org_app_prefix = ""
                        if($("#org_app_prefix").length > 0){
                            org_app_prefix = $("#org_app_prefixId").val();
                        }
                        j_ele_organization.html("").change();
                        var organization_value = self["organization"]["uuid"];
                        var organization_name = `<a href="${org_app_prefix}/SystemOrganizationManagement/Organization/detail/${organization_value}/" class="text-gray-600 text-hover-primary" name="$field_name_system_use">${self["organization"]["name"]}</a>`
                        j_ele_organization.html(organization_name);
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_addressee = $("#addresseeSystemMailSentMailSentMailManagementDetailModalInputId");
                    if (j_ele_addressee.length > 0){
                    
                        var org_app_prefix = ""
                        if($("#org_app_prefix").length > 0){
                            org_app_prefix = $("#org_app_prefixId").val();
                        }
                        j_ele_addressee.html("").change();
                        var addressee_value = self["addressee"]["uuid"];
                        var addressee_name = `<a href="${org_app_prefix}/HRAccountManagement/HRAccount/detail/${addressee_value}/" class="text-gray-600 text-hover-primary" name="$field_name_system_use">${self["addressee"]["name"]}</a>`
                        j_ele_addressee.html(addressee_name);
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_mail = $("#mailSystemMailSentMailSentMailManagementDetailModalInputId");
                    if (j_ele_mail.length > 0){
                    
                        var org_app_prefix = ""
                        if($("#org_app_prefix").length > 0){
                            org_app_prefix = $("#org_app_prefixId").val();
                        }
                        j_ele_mail.html("").change();
                        var mail_value = self["mail"]["uuid"];
                        var mail_name = `<a href="${org_app_prefix}/SentMailManagement/SystemMailMail/detail/${mail_value}/" class="text-gray-600 text-hover-primary" name="$field_name_system_use">${self["mail"]["name"]}</a>`
                        j_ele_mail.html(mail_name);
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_mail_sender = $("#mail_senderSystemMailSentMailSentMailManagementDetailModalInputId");
                if (j_ele_mail_sender.length > 0){
                    if (j_ele_mail_sender.attr('name') != 'uuid'){
                        j_ele_mail_sender.html(self.mail_sender).change();
                    }
                }
                else{
                    // j_ele_mail_sender.html(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_to_email = $("#to_emailSystemMailSentMailSentMailManagementDetailModalInputId");
                if (j_ele_to_email.length > 0){
                    if (j_ele_to_email.attr('name') != 'uuid'){
                        j_ele_to_email.html(self.to_email).change();
                    }
                }
                else{
                    // j_ele_to_email.html(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_status_code = $("#status_codeSystemMailSentMailSentMailManagementDetailModalInputId");
                if (j_ele_status_code.length > 0){
                    if (j_ele_status_code.attr('name') != 'uuid'){
                        j_ele_status_code.html(self.status_code).change();
                    }
                }
                else{
                    // j_ele_status_code.html(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_status_text = $("#status_textSystemMailSentMailSentMailManagementDetailModalInputId");
                if (j_ele_status_text.length > 0){
                    if (j_ele_status_text.attr('name') != 'uuid'){
                        j_ele_status_text.html(self.status_text).change();
                    }
                }
                else{
                    // j_ele_status_text.html(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_hr_created_by = $("#hr_created_bySystemMailSentMailSentMailManagementDetailModalInputId");
                    if (j_ele_hr_created_by.length > 0){
                    
                        var org_app_prefix = ""
                        if($("#org_app_prefix").length > 0){
                            org_app_prefix = $("#org_app_prefixId").val();
                        }
                        j_ele_hr_created_by.html("").change();
                        var hr_created_by_value = self["hr_created_by"]["uuid"];
                        var hr_created_by_name = `<a href="${org_app_prefix}/HRAccountManagement/HRAccount/detail/${hr_created_by_value}/" class="text-gray-600 text-hover-primary" name="$field_name_system_use">${self["hr_created_by"]["name"]}</a>`
                        j_ele_hr_created_by.html(hr_created_by_name);
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_hr_updated_by = $("#hr_updated_bySystemMailSentMailSentMailManagementDetailModalInputId");
                    if (j_ele_hr_updated_by.length > 0){
                    
                        var org_app_prefix = ""
                        if($("#org_app_prefix").length > 0){
                            org_app_prefix = $("#org_app_prefixId").val();
                        }
                        j_ele_hr_updated_by.html("").change();
                        var hr_updated_by_value = self["hr_updated_by"]["uuid"];
                        var hr_updated_by_name = `<a href="${org_app_prefix}/HRAccountManagement/HRAccount/detail/${hr_updated_by_value}/" class="text-gray-600 text-hover-primary" name="$field_name_system_use">${self["hr_updated_by"]["name"]}</a>`
                        j_ele_hr_updated_by.html(hr_updated_by_name);
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_content = $("#contentSystemMailSentMailSentMailManagementDetailModalInputId");
                if (j_ele_content.length > 0){
                    if (j_ele_content.attr('name') != 'uuid'){
                        j_ele_content.html(self.content).change();
                    }
                }
                else{
                    // j_ele_content.html(null);
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
            formData = new FormData($('#SystemMailSentMailSentMailManagementCreateFormId')[0]);
            form = $('#SystemMailSentMailSentMailManagementCreateFormId');

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

        var file_eles = $(".SystemMailSentMail-SentMailManagement");
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
                url: SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_UPDATE_URL + self.uuid + "/",
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
                    self = new SystemMailSentMailSentMailManagement(data);
                    self.tDatatableUpdateRow();
                    //SystemMailSentMailSentMailManagementGetDataTable(SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["current_page"])
                    //$(location).prop('href', "/SentMailManagement/SystemMailSentMail/detail/" + self.uuid + "/");
                    if (systemmailsentmailsentmailmanagement_is_continue_form) {
                        systemmailsentmailsentmailmanagement_is_continue_form = false;
                        if (!is_notification && (is_done || !is_has_children)) {
                            is_notification = true;
                            //$model_notice_update_success
                        }
                        
                     
                    } else if (systemmailsentmailsentmailmanagement_is_continue_modal) {
                        systemmailsentmailsentmailmanagement_is_continue_modal = false;
                        //SystemMailSentMailRefreshCreateModal();
                        if (!is_notification && (is_done || !is_has_children)) {
                            is_notification = true;
                            //$model_notice_update_success
                        }
                    } else if (systemmailsentmailsentmailmanagement_is_continue_back_last_url) {
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
            if (systemmailsentmailsentmailmanagement_is_continue_form) {
                systemmailsentmailsentmailmanagement_is_continue_form = false;
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
                    $(location).prop('href', `${org_app_prefixId}/SentMailManagement/SystemMailSentMail/detail/${self.uuid}/`);
                }
            } else if (systemmailsentmailsentmailmanagement_is_continue_modal) {
                systemmailsentmailsentmailmanagement_is_continue_modal = false;
                //SystemMailSentMailRefreshCreateModal();
                if (!is_notification && (is_done || !is_has_children)) {
                    is_notification = true;
                    //$model_notice_update_success
                }
            } else if (systemmailsentmailsentmailmanagement_is_continue_back_last_url) {
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
        $('#idSystemMailSentMailSentMailManagementInputId').val(null);
        $('#uuidSystemMailSentMailSentMailManagementInputId').val(uuidv4());
        var self = this;
        var formData;
        var arr_table = [];
        if (formId == null) {
            formId = 'SystemMailSentMailSentMailManagementCreateFormId';
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

        var file_eles = $(".SystemMailSentMail-SentMailManagement");
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
            LoadSystemMailSentMailSentMailManagementTableDataList();
        }
        if (!is_save_self_table) {
            this.callAjax = $.ajax({
                url: SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_CREATE_URL,
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
                    self = new SystemMailSentMailSentMailManagement(data);
                    
                    self.tDatatableAddRow();
                    //LoadSystemMailSentMailSentMailManagementTableDataList();
                    //SystemMailSentMailSentMailManagementGetDataTable(SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["current_page"]);
                    if (systemmailsentmailsentmailmanagement_is_continue_form) {
                        systemmailsentmailsentmailmanagement_is_continue_form = false;
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
                            $(location).prop('href', `${org_app_prefixId}/SentMailManagement/SystemMailSentMail/detail/${self.uuid}/`);
                        }
                    } else if (systemmailsentmailsentmailmanagement_is_continue_modal) {
                        systemmailsentmailsentmailmanagement_is_continue_modal = false;
                        //SystemMailSentMailRefreshCreateModal();
                        if (!is_notification) {
                            is_notification = true;
                            //model_notice_create_success;
                        }
                    } else if (systemmailsentmailsentmailmanagement_is_continue_back_last_url) {
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
            if (systemmailsentmailsentmailmanagement_is_continue_form) {
                systemmailsentmailsentmailmanagement_is_continue_form = false;
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
                    $(location).prop('href', `${org_app_prefixId}/SentMailManagement/SystemMailSentMail/detail/${self.uuid}/`);
                }
            } else if (systemmailsentmailsentmailmanagement_is_continue_modal) {
                systemmailsentmailsentmailmanagement_is_continue_modal = false;
                //SystemMailSentMailRefreshCreateModal();
                if (!is_notification) {
                    is_notification = true;
                    //model_notice_create_success;
                }
            } else if (systemmailsentmailsentmailmanagement_is_continue_back_last_url) {
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
            url: SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_CREATE_URL,
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
            url: SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_CREATE_URL,
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
            url: SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_UPDATE_URL + uuid + "/",
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
        var uuid_go = ""
        if (uuid == null) {
            uuid_go = cr_uuid;
        } else {
            uuid_go = uuid; 
        }
        console.log('self.id = ', self.id);
        

        this.callAjax = $.ajax({
            url: SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_DELETE_URL + uuid_go + "/",
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
                ////$model_notice_delete_success
                if (cr_uuid != "") {
                    var org_app_prefixId = ""
                    if($("#org_app_prefixId").length > 0){
                        org_app_prefixId = $("#org_app_prefixId").val();
                    }
                    $(location).prop('href', `${org_app_prefixId}/SentMailManagement/SystemMailSentMail/create/`);
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
        var uuid_go = ""
        if (uuid == null) {
            uuid_go = cr_uuid;
        } else {
            uuid_go = uuid;
        }

        console.log('self.id = ', self.id);
        $.ajax({
            url: SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_DELETE_URL + uuid_go + "/",
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
                    $(location).prop('href', `${org_app_prefixId}/SentMailManagement/SystemMailSentMail/create/`);
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
            url: SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_REMOVEFILE_URL + uuid + "/",
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
            url: SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_UPDATE_URL + uuid + "/",
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
        
        var CRR_SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_GET_DATATABLE_STANDARD_URL = SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_GET_DATATABLE_STANDARD_URL
        if (SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_LOAD_MEMCACHE == true){
            CRR_SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_GET_DATATABLE_STANDARD_URL = SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_GET_DATATABLE_STANDARD_URL_OPT
        }
        this.callAjax =
            $.ajax({
                url: CRR_SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_GET_DATATABLE_STANDARD_URL + has_go_page,
                type: "GET",
                //async: false,
                cache: false,
                timeout: 30000,

                success: function(data) {
                    console.log('[tGetDataTableApi] data = ', data);
                    // return new SystemMailSentMailSentMailManagement(data);
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('next')) {
                        if (data.next != null) {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_next"] = true;
                        } else {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_next"] = false;

                        }
                    }
                    SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["current_page"] = page;
                    if (data.hasOwnProperty('previous')) {
                        if (data.previous != null) {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_prev"] = true;
                        } else {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_prev"] = false;
                        }
                    }
                    if (data.hasOwnProperty('results')) {
                        for (var j = 0; j < data.results.length; j++) {
                            var tmp = new SystemMailSentMailSentMailManagement(data.results[j]);
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
        
        var CRR_SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_GET_DATATABLE_MEDIUM_URL = SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_GET_DATATABLE_MEDIUM_URL
        if (SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_LOAD_MEMCACHE == true){
            CRR_SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_GET_DATATABLE_MEDIUM_URL = SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_GET_DATATABLE_MEDIUM_URL_OPT
        }
        this.callAjax =
            $.ajax({
                url: CRR_SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_GET_DATATABLE_MEDIUM_URL + has_go_page,
                type: "GET",
                //async: false,
                cache: false,
                timeout: 30000,

                success: function(data) {
                    console.log('[tGetDataTableMediumApi] data = ', data);
                    // return new SystemMailSentMailSentMailManagement(data);
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('next')) {
                        if (data.next != null) {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_next"] = true;
                        } else {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_next"] = false;

                        }
                    }
                    SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["current_page"] = page;
                    if (data.hasOwnProperty('previous')) {
                        if (data.previous != null) {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_prev"] = true;
                        } else {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_prev"] = false;
                        }
                    }
                    if (data.hasOwnProperty('results')) {
                        for (var j = 0; j < data.results.length; j++) {
                            var tmp = new SystemMailSentMailSentMailManagement(data.results[j]);
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
        
        var CRR_SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_GET_DATATABLE_LARGE_URL = SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_GET_DATATABLE_LARGE_URL
        if (SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_LOAD_MEMCACHE == true){
            CRR_SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_GET_DATATABLE_LARGE_URL = SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_GET_DATATABLE_LARGE_URL_OPT
        }
        this.callAjax =
            $.ajax({
                url: CRR_SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_GET_DATATABLE_LARGE_URL + has_go_page,
                type: "GET",
                //async: false,
                cache: false,
                timeout: 30000,

                success: function(data) {
                    console.log('[tGetDataTableLargeApi] data = ', data);
                    // return new SystemMailSentMailSentMailManagement(data);
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('next')) {
                        if (data.next != null) {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_next"] = true;
                        } else {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_next"] = false;

                        }
                    }
                    SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["current_page"] = page;
                    if (data.hasOwnProperty('previous')) {
                        if (data.previous != null) {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_prev"] = true;
                        } else {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_prev"] = false;
                        }
                    }
                    if (data.hasOwnProperty('results')) {
                        for (var j = 0; j < data.results.length; j++) {
                            var tmp = new SystemMailSentMailSentMailManagement(data.results[j]);
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
                url: SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_GET_DETAIL_STANDARD_URL + has_go_page,
                type: "GET",
                //async: false,
                cache: false,
                timeout: 30000,

                success: function(data) {
                    console.log('[tGetDataTableApi] data = ', data);
                    // return new SystemMailSentMailSentMailManagement(data);
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('next')) {
                        if (data.next != null) {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_next"] = true;
                        } else {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_next"] = false;

                        }
                    }
                    SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["current_page"] = page;
                    if (data.hasOwnProperty('previous')) {
                        if (data.previous != null) {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_prev"] = true;
                        } else {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_prev"] = false;
                        }
                    }
                    if (data.hasOwnProperty('results')) {
                        for (var j = 0; j < data.results.length; j++) {
                            var tmp = new SystemMailSentMailSentMailManagement(data.results[j]);
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
                url: SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_GET_DETAIL_MEDIUM_URL + has_go_page,
                type: "GET",
                //async: false,
                cache: false,
                timeout: 30000,

                success: function(data) {
                    console.log('[tGetDataTableMediumApi] data = ', data);
                    // return new SystemMailSentMailSentMailManagement(data);
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('next')) {
                        if (data.next != null) {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_next"] = true;
                        } else {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_next"] = false;

                        }
                    }
                    SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["current_page"] = page;
                    if (data.hasOwnProperty('previous')) {
                        if (data.previous != null) {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_prev"] = true;
                        } else {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_prev"] = false;
                        }
                    }
                    if (data.hasOwnProperty('results')) {
                        for (var j = 0; j < data.results.length; j++) {
                            var tmp = new SystemMailSentMailSentMailManagement(data.results[j]);
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
                url: SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_GET_DETAIL_LARGE_URL + has_go_page,
                type: "GET",
                //async: false,
                cache: false,
                timeout: 30000,

                success: function(data) {
                    console.log('[tGetDataTableLargeApi] data = ', data);
                    // return new SystemMailSentMailSentMailManagement(data);
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('next')) {
                        if (data.next != null) {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_next"] = true;
                        } else {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_next"] = false;

                        }
                    }
                    SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["current_page"] = page;
                    if (data.hasOwnProperty('previous')) {
                        if (data.previous != null) {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_prev"] = true;
                        } else {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_prev"] = false;
                        }
                    }
                    if (data.hasOwnProperty('results')) {
                        for (var j = 0; j < data.results.length; j++) {
                            var tmp = new SystemMailSentMailSentMailManagement(data.results[j]);
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

            
            ///slugSearch+="&search="+$("#SystemMailSentMailSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailsentmailsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailSentMailSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailsentmailsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailSentMailSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailsentmailsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailSentMailSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailsentmailsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailSentMailSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailsentmailsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailSentMailSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailsentmailsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailSentMailSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailsentmailsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailSentMailSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailsentmailsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailSentMailSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailsentmailsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailSentMailSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailsentmailsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailSentMailSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailsentmailsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailSentMailSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailsentmailsentmailmanagement-table-filter="search"]').val();
            
                    ;
        }
        else{
            slugSearch = search_data;
        }
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["data"] = slugSearch;
        
        var CRR_SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_STANDARD_URL = SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_STANDARD_URL
        if (SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_LOAD_MEMCACHE == true){
            CRR_SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_STANDARD_URL = SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_STANDARD_URL_OPT
        }
        this.callAjax =
            $.ajax({
                url: CRR_SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_STANDARD_URL + has_go_page + slugSearch,
                type: "GET",
                //async: false,
                cache: false,
                timeout: 30000,

                success: function(data) {
                    console.log('[tGetDataTableApi] data = ', data);
                    // return new SystemMailSentMailSentMailManagement(data);
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('next')) {
                        if (data.next != null) {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_next"] = true;
                        } else {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_next"] = false;

                        }
                    }
                    SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["current_page"] = page;
                    if (data.hasOwnProperty('previous')) {
                        if (data.previous != null) {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_prev"] = true;
                        } else {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_prev"] = false;
                        }
                    }
                    if (data.hasOwnProperty('results')) {
                        for (var j = 0; j < data.results.length; j++) {
                            var tmp = new SystemMailSentMailSentMailManagement(data.results[j]);
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

            
            ///slugSearch+="&search="+$("#SystemMailSentMailSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailsentmailsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailSentMailSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailsentmailsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailSentMailSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailsentmailsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailSentMailSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailsentmailsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailSentMailSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailsentmailsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailSentMailSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailsentmailsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailSentMailSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailsentmailsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailSentMailSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailsentmailsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailSentMailSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailsentmailsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailSentMailSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailsentmailsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailSentMailSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailsentmailsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailSentMailSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailsentmailsentmailmanagement-table-filter="search"]').val();
            
                    ;
        }
        else{
            slugSearch = search_data;
        }
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["data"] = slugSearch;
        
        var CRR_SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_MEDIUM_URL = SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_MEDIUM_URL
        if (SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_LOAD_MEMCACHE == true){
            CRR_SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_MEDIUM_URL = SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_MEDIUM_URL_OPT
        }
        this.callAjax =
            $.ajax({
                url: CRR_SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_MEDIUM_URL + has_go_page + slugSearch,
                type: "GET",
                //async: false,
                cache: false,
                timeout: 30000,

                success: function(data) {
                    console.log('[tGetDataTableApi] data = ', data);
                    // return new SystemMailSentMailSentMailManagement(data);
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('next')) {
                        if (data.next != null) {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_next"] = true;
                        } else {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_next"] = false;

                        }
                    }
                    SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["current_page"] = page;
                    if (data.hasOwnProperty('previous')) {
                        if (data.previous != null) {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_prev"] = true;
                        } else {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_prev"] = false;
                        }
                    }
                    if (data.hasOwnProperty('results')) {
                        for (var j = 0; j < data.results.length; j++) {
                            var tmp = new SystemMailSentMailSentMailManagement(data.results[j]);
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

            
            ///slugSearch+="&search="+$("#SystemMailSentMailSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailsentmailsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailSentMailSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailsentmailsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailSentMailSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailsentmailsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailSentMailSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailsentmailsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailSentMailSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailsentmailsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailSentMailSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailsentmailsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailSentMailSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailsentmailsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailSentMailSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailsentmailsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailSentMailSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailsentmailsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailSentMailSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailsentmailsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailSentMailSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailsentmailsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailSentMailSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailsentmailsentmailmanagement-table-filter="search"]').val();
            
                    ;
        }
        else{
            slugSearch = search_data;
        }
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["data"] = slugSearch;
        
        var CRR_SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LARGE_URL = SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LARGE_URL
        if (SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_LOAD_MEMCACHE == true){
            CRR_SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LARGE_URL = SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LARGE_URL_OPT
        }
        this.callAjax =
            $.ajax({
                url: CRR_SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LARGE_URL + has_go_page + slugSearch,
                type: "GET",
                //async: false,
                cache: false,
                timeout: 30000,

                success: function(data) {
                    console.log('[tGetDataTableApi] data = ', data);
                    // return new SystemMailSentMailSentMailManagement(data);
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('next')) {
                        if (data.next != null) {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_next"] = true;
                        } else {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_next"] = false;

                        }
                    }
                    SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["current_page"] = page;
                    if (data.hasOwnProperty('previous')) {
                        if (data.previous != null) {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_prev"] = true;
                        } else {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_prev"] = false;
                        }
                    }
                    if (data.hasOwnProperty('results')) {
                        for (var j = 0; j < data.results.length; j++) {
                            var tmp = new SystemMailSentMailSentMailManagement(data.results[j]);
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
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["data"] = slugSearch;
        
        var CRR_SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_FILTER_STANDARD_URL = SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_FILTER_STANDARD_URL
        if (SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_LOAD_MEMCACHE == true){
            CRR_SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_FILTER_STANDARD_URL = SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_FILTER_STANDARD_URL_OPT
        }
        this.callAjax =
            $.ajax({
                url: CRR_SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_FILTER_STANDARD_URL + has_go_page + slugSearch,
                type: "GET",
                //async: false,
                cache: false,
                timeout: 30000,

                success: function(data) {
                    console.log('[tGetDataTableApi] data = ', data);
                    // return new SystemMailSentMailSentMailManagement(data);
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('next')) {
                        if (data.next != null) {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_next"] = true;
                        } else {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_next"] = false;

                        }
                    }
                    SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["current_page"] = page;
                    if (data.hasOwnProperty('previous')) {
                        if (data.previous != null) {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_prev"] = true;
                        } else {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_prev"] = false;
                        }
                    }
                    if (data.hasOwnProperty('results')) {
                        for (var j = 0; j < data.results.length; j++) {
                            var tmp = new SystemMailSentMailSentMailManagement(data.results[j]);
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
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["data"] = slugSearch;
        
        var CRR_SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_FILTER_MEDIUM_URL = SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_FILTER_MEDIUM_URL
        if (SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_LOAD_MEMCACHE == true){
            CRR_SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_FILTER_MEDIUM_URL = SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_FILTER_MEDIUM_URL_OPT
        }
        this.callAjax =
            $.ajax({
                url: CRR_SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_FILTER_MEDIUM_URL + has_go_page + slugSearch,
                type: "GET",
                //async: false,
                cache: false,
                timeout: 30000,

                success: function(data) {
                    console.log('[tGetDataTableApi] data = ', data);
                    // return new SystemMailSentMailSentMailManagement(data);
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('next')) {
                        if (data.next != null) {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_next"] = true;
                        } else {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_next"] = false;

                        }
                    }
                    SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["current_page"] = page;
                    if (data.hasOwnProperty('previous')) {
                        if (data.previous != null) {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_prev"] = true;
                        } else {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_prev"] = false;
                        }
                    }
                    if (data.hasOwnProperty('results')) {
                        for (var j = 0; j < data.results.length; j++) {
                            var tmp = new SystemMailSentMailSentMailManagement(data.results[j]);
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
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["data"] = slugSearch;
        
        var CRR_SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_FILTER_LARGE_URL = SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_FILTER_LARGE_URL
        if (SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_LOAD_MEMCACHE == true){
            CRR_SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_FILTER_LARGE_URL = SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_FILTER_LARGE_URL_OPT
        }
        this.callAjax =
            $.ajax({
                url: CRR_SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_FILTER_LARGE_URL + has_go_page + slugSearch,
                type: "GET",
                //async: false,
                cache: false,
                timeout: 30000,

                success: function(data) {
                    console.log('[tGetDataTableApi] data = ', data);
                    // return new SystemMailSentMailSentMailManagement(data);
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('next')) {
                        if (data.next != null) {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_next"] = true;
                        } else {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_next"] = false;

                        }
                    }
                    SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["current_page"] = page;
                    if (data.hasOwnProperty('previous')) {
                        if (data.previous != null) {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_prev"] = true;
                        } else {
                            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["has_prev"] = false;
                        }
                    }
                    if (data.hasOwnProperty('results')) {
                        for (var j = 0; j < data.results.length; j++) {
                            var tmp = new SystemMailSentMailSentMailManagement(data.results[j]);
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
                url: SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_GET_DETAIL_STANDARD_URL + uuid + "/",
                type: "GET",
                async: false,
                cache: false,
                timeout: 30000,

                success: function(data) {
                    console.log('[tGetObjApi] data = ', data);
                    var n_obj = new SystemMailSentMailSentMailManagement(data);
                    console.log('n_obj = ', n_obj);
                    n_obj.tFillForm();
                    return n_obj;
                    // if (data.hasOwnProperty('results')){
                    //    if (data.results.length > 0){
                    //        var tmp = new SystemMailSentMailSentMailManagement(data[i]);
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
        var tbId = "SystemMailSentMailSentMailManagementExportTableId";
        if (tableId != null) {
            tbId = tableId;
        }

        if (order == null && SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT != undefined && SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT != null) {
            order = SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT;
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
                            row_data[col_num] = (strftime(this[attr],"DD/MM/YYYY HH:mm"));                        }
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
                            row_data[col_num] = (strftime(this[attr],"DD/MM/YYYY HH:mm"));                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                
                    if(attr=="organization"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
                        }
                        else{
                            row_data[col_num] = '';

                        }
                        continue;
                    }
        
                    if(attr=="addressee"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
                        }
                        else{
                            row_data[col_num] = '';

                        }
                        continue;
                    }
        
                    if(attr=="mail"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
                        }
                        else{
                            row_data[col_num] = '';

                        }
                        continue;
                    }
        

                    if(attr=="mail_sender"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="to_email"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="status_code"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="status_text"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                
                    if(attr=="hr_created_by"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
                        }
                        else{
                            row_data[col_num] = '';

                        }
                        continue;
                    }
        
                    if(attr=="hr_updated_by"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
                        }
                        else{
                            row_data[col_num] = '';

                        }
                        continue;
                    }
        

                    if(attr=="content"){
                        
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
                    if(attr=="SystemMailSentMailSentMailManagement-admin-action")
                    {
                        var action = BindActionButtonVer4(
                            SystemMailSentMailSentMailManagement_arr_action,
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
                            row_data[col_num] = (strftime(this[attr],"DD/MM/YYYY HH:mm"));                        }
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
                            row_data[col_num] = (strftime(this[attr],"DD/MM/YYYY HH:mm"));                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                
                    if(attr=="organization"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
                        }
                        else{
                            row_data[col_num] = '';

                        }
                        continue;
                    }
        
                    if(attr=="addressee"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
                        }
                        else{
                            row_data[col_num] = '';

                        }
                        continue;
                    }
        
                    if(attr=="mail"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
                        }
                        else{
                            row_data[col_num] = '';

                        }
                        continue;
                    }
        

                    if(attr=="mail_sender"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="to_email"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="status_code"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="status_text"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                
                    if(attr=="hr_created_by"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
                        }
                        else{
                            row_data[col_num] = '';

                        }
                        continue;
                    }
        
                    if(attr=="hr_updated_by"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
                        }
                        else{
                            row_data[col_num] = '';

                        }
                        continue;
                    }
        

                    if(attr=="content"){
                        
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
            systemmailsentmailsentmailmanagement_exportdatatable.row.add(row_data).node().id = this["uuid"];
            systemmailsentmailsentmailmanagement_exportdatatable.draw(false);
            return true;
        } else {
            console.log('Not found dataTable Id: ,', tbId);
            return false;
        }
    }
    // Add row by row of list result 
    tDatatableAddRow(tableId = null, order = null) {
        var tbId = "SystemMailSentMailSentMailManagementTableId";
        if (tableId != null) {
            tbId = tableId;
        }

        if (order == null && SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT != undefined && SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT != null) {
            order = SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT;
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
                            row_data[col_num] = (strftime(this[attr],"DD/MM/YYYY HH:mm"));                        }
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
                            row_data[col_num] = (strftime(this[attr],"DD/MM/YYYY HH:mm"));                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                
                    if(attr=="organization"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
                        }
                        else{
                            row_data[col_num] = '';

                        }
                        continue;
                    }
        
                    if(attr=="addressee"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
                        }
                        else{
                            row_data[col_num] = '';

                        }
                        continue;
                    }
        
                    if(attr=="mail"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
                        }
                        else{
                            row_data[col_num] = '';

                        }
                        continue;
                    }
        

                    if(attr=="mail_sender"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="to_email"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="status_code"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="status_text"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                
                    if(attr=="hr_created_by"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
                        }
                        else{
                            row_data[col_num] = '';

                        }
                        continue;
                    }
        
                    if(attr=="hr_updated_by"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
                        }
                        else{
                            row_data[col_num] = '';

                        }
                        continue;
                    }
        

                    if(attr=="content"){
                        
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
                    if(attr=="SystemMailSentMailSentMailManagement-admin-action")
                    {
                        var action = BindActionButtonVer4(
                            SystemMailSentMailSentMailManagement_arr_action,
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
                            row_data[col_num] = (strftime(this[attr],"DD/MM/YYYY HH:mm"));                        }
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
                            row_data[col_num] = (strftime(this[attr],"DD/MM/YYYY HH:mm"));                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                
                    if(attr=="organization"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
                        }
                        else{
                            row_data[col_num] = '';

                        }
                        continue;
                    }
        
                    if(attr=="addressee"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
                        }
                        else{
                            row_data[col_num] = '';

                        }
                        continue;
                    }
        
                    if(attr=="mail"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
                        }
                        else{
                            row_data[col_num] = '';

                        }
                        continue;
                    }
        

                    if(attr=="mail_sender"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="to_email"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="status_code"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="status_text"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                
                    if(attr=="hr_created_by"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
                        }
                        else{
                            row_data[col_num] = '';

                        }
                        continue;
                    }
        
                    if(attr=="hr_updated_by"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
                        }
                        else{
                            row_data[col_num] = '';

                        }
                        continue;
                    }
        

                    if(attr=="content"){
                        
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
            SystemMailSentMailSentMailManagementdatatable.row.add(row_data).node().id = this["uuid"];
            SystemMailSentMailSentMailManagementdatatable.draw(false);
            $('tr#' + this["uuid"]).attr("obj_name", this["name"]);
            return true;
        } else {
            console.log('Not found dataTable Id: ,', tbId);
            return false;
        }
    }
    // Update row by row of list result 
    tDatatableUpdateRow(tableId = null, order = null) {
        var tbId = "SystemMailSentMailSentMailManagementTableId";
        if (tableId != null) {
            tbId = tableId;
        }

        if (order == null && SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT != undefined && SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT != null) {
            order = SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT;
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
                            row_data[col_num] = (strftime(this[attr],"DD/MM/YYYY HH:mm"));                        }
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
                            row_data[col_num] = (strftime(this[attr],"DD/MM/YYYY HH:mm"));                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                
                    if(attr=="organization"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
                        }
                        else{
                            row_data[col_num] = '';

                        }
                        continue;
                    }
        
                    if(attr=="addressee"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
                        }
                        else{
                            row_data[col_num] = '';

                        }
                        continue;
                    }
        
                    if(attr=="mail"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
                        }
                        else{
                            row_data[col_num] = '';

                        }
                        continue;
                    }
        

                    if(attr=="mail_sender"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="to_email"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="status_code"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="status_text"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                
                    if(attr=="hr_created_by"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
                        }
                        else{
                            row_data[col_num] = '';

                        }
                        continue;
                    }
        
                    if(attr=="hr_updated_by"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
                        }
                        else{
                            row_data[col_num] = '';

                        }
                        continue;
                    }
        

                    if(attr=="content"){
                        
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
                    if(attr=="SystemMailSentMailSentMailManagement-admin-action")
                    {
                        var action = BindActionButtonVer4(
                            SystemMailSentMailSentMailManagement_arr_action,
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
                            row_data[col_num] = (strftime(this[attr],"DD/MM/YYYY HH:mm"));                        }
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
                            row_data[col_num] = (strftime(this[attr],"DD/MM/YYYY HH:mm"));                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                
                    if(attr=="organization"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
                        }
                        else{
                            row_data[col_num] = '';

                        }
                        continue;
                    }
        
                    if(attr=="addressee"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
                        }
                        else{
                            row_data[col_num] = '';

                        }
                        continue;
                    }
        
                    if(attr=="mail"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
                        }
                        else{
                            row_data[col_num] = '';

                        }
                        continue;
                    }
        

                    if(attr=="mail_sender"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="to_email"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="status_code"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                

                    if(attr=="status_text"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
                        }
                        else{
                            row_data[col_num] = '';

                        }


                        continue;
                    }
                
                    if(attr=="hr_created_by"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
                        }
                        else{
                            row_data[col_num] = '';

                        }
                        continue;
                    }
        
                    if(attr=="hr_updated_by"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
                        }
                        else{
                            row_data[col_num] = '';

                        }
                        continue;
                    }
        

                    if(attr=="content"){
                        
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
            SystemMailSentMailSentMailManagementdatatable.row(`#${this['uuid']}`).data(row_data).draw();
            return true;
        } else {
            console.log('Not found dataTable Id: ,', tbId);
            return false;
        }
    }

    

    tFillTable3(tableId = null, order = null) {
        var tbId = "SystemMailSentMailSentMailManagementTableId";
        if (tableId != null) {
            tbId = tableId;
        }

        if (order == null && SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT != undefined && SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT != null) {
            order = SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT;
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
                            html +=`<td class="text-wrap text-center" data-order='`+this[attr]+`'><a>` + strftime(this[attr],"DD/MM/YYYY HH:mm") + `</a></td>`;
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
                            html +=`<td class="text-wrap text-center" data-order='`+this[attr]+`'><a>` + strftime(this[attr],"DD/MM/YYYY HH:mm") + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap text-center" data-order='`+this[attr]+`'><a></a></td>`;

                        }


                        continue;
                    }
                
                    if(attr=="organization"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            html +=`<td class="text-wrap"><a>` + this[attr]["name"] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }
                        continue;
                    }
        
                    if(attr=="addressee"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            html +=`<td class="text-wrap"><a>` + this[attr]["name"] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }
                        continue;
                    }
        
                    if(attr=="mail"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            html +=`<td class="text-wrap"><a>` + this[attr]["name"] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }
                        continue;
                    }
        

                    if(attr=="mail_sender"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="to_email"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="status_code"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="status_text"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                
                    if(attr=="hr_created_by"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            html +=`<td class="text-wrap"><a>` + this[attr]["name"] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }
                        continue;
                    }
        
                    if(attr=="hr_updated_by"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            html +=`<td class="text-wrap"><a>` + this[attr]["name"] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }
                        continue;
                    }
        

                    if(attr=="content"){
                        
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
                    if(attr=="SystemMailSentMailSentMailManagement-admin-action")
                    {
                        var action = BindActionButtonVer4(
                            SystemMailSentMailSentMailManagement_arr_action,
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
                            html +=`<td class="text-wrap text-center" data-order='`+this[attr]+`'><a>` + strftime(this[attr],"DD/MM/YYYY HH:mm") + `</a></td>`;
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
                            html +=`<td class="text-wrap text-center" data-order='`+this[attr]+`'><a>` + strftime(this[attr],"DD/MM/YYYY HH:mm") + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap text-center" data-order='`+this[attr]+`'><a></a></td>`;

                        }


                        continue;
                    }
                
                    if(attr=="organization"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            html +=`<td class="text-wrap"><a>` + this[attr]["name"] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }
                        continue;
                    }
        
                    if(attr=="addressee"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            html +=`<td class="text-wrap"><a>` + this[attr]["name"] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }
                        continue;
                    }
        
                    if(attr=="mail"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            html +=`<td class="text-wrap"><a>` + this[attr]["name"] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }
                        continue;
                    }
        

                    if(attr=="mail_sender"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="to_email"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="status_code"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="status_text"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                
                    if(attr=="hr_created_by"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            html +=`<td class="text-wrap"><a>` + this[attr]["name"] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }
                        continue;
                    }
        
                    if(attr=="hr_updated_by"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            html +=`<td class="text-wrap"><a>` + this[attr]["name"] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }
                        continue;
                    }
        

                    if(attr=="content"){
                        
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
            SystemMailSentMailSentMailManagementdatatable.rows.add(arr_row_data).draw(false);
            //tableBody.append(html);

            return true;
        } else {
            console.log('Not found dataTable Id: ,', tbId);
            return false;
        }
    }

    //fill table for inline table
    tFillTable4(tableId = null, order = null, action = null) {
        var tbId = "SystemMailSentMailSentMailManagementTableId";
        if (tableId != null) {
            tbId = tableId;
        }

        if (order == null && SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT != undefined && SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT != null) {
            order = SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT;
        }
        var table = $("#" + tbId);
        if (table.length > 0) {
            var html = "<tr is-new='false' status='added'>"
            html += `<td><a href="` + this.detailUrl + `">` + order + `</a></td>`;
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
                            html +=`<td class="text-wrap text-center" data-order='`+this[attr]+`'><a>` + strftime(this[attr],"DD/MM/YYYY HH:mm") + `</a></td>`;
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
                            html +=`<td class="text-wrap text-center" data-order='`+this[attr]+`'><a>` + strftime(this[attr],"DD/MM/YYYY HH:mm") + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap text-center" data-order='`+this[attr]+`'><a></a></td>`;

                        }


                        continue;
                    }
                
                    if(attr=="organization"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            html +=`<td class="text-wrap"><a>` + this[attr]["name"] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }
                        continue;
                    }
        
                    if(attr=="addressee"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            html +=`<td class="text-wrap"><a>` + this[attr]["name"] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }
                        continue;
                    }
        
                    if(attr=="mail"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            html +=`<td class="text-wrap"><a>` + this[attr]["name"] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }
                        continue;
                    }
        

                    if(attr=="mail_sender"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="to_email"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="status_code"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="status_text"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                
                    if(attr=="hr_created_by"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            html +=`<td class="text-wrap"><a>` + this[attr]["name"] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }
                        continue;
                    }
        
                    if(attr=="hr_updated_by"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            html +=`<td class="text-wrap"><a>` + this[attr]["name"] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }
                        continue;
                    }
        

                    if(attr=="content"){
                        
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
                            html +=`<td class="text-wrap text-center" data-order='`+this[attr]+`'><a>` + strftime(this[attr],"DD/MM/YYYY HH:mm") + `</a></td>`;
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
                            html +=`<td class="text-wrap text-center" data-order='`+this[attr]+`'><a>` + strftime(this[attr],"DD/MM/YYYY HH:mm") + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap text-center" data-order='`+this[attr]+`'><a></a></td>`;

                        }


                        continue;
                    }
                
                    if(attr=="organization"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            html +=`<td class="text-wrap"><a>` + this[attr]["name"] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }
                        continue;
                    }
        
                    if(attr=="addressee"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            html +=`<td class="text-wrap"><a>` + this[attr]["name"] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }
                        continue;
                    }
        
                    if(attr=="mail"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            html +=`<td class="text-wrap"><a>` + this[attr]["name"] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }
                        continue;
                    }
        

                    if(attr=="mail_sender"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="to_email"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="status_code"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                

                    if(attr=="status_text"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }


                        continue;
                    }
                
                    if(attr=="hr_created_by"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            html +=`<td class="text-wrap"><a>` + this[attr]["name"] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }
                        continue;
                    }
        
                    if(attr=="hr_updated_by"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            html +=`<td class="text-wrap"><a>` + this[attr]["name"] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }
                        continue;
                    }
        

                    if(attr=="content"){
                        
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
        var card_Id = "SystemMailSentMailSentMailManagementCardAreaId";
        if (cardId != null) {
            card_Id = cardId;
        }

        if (order == null && SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT != undefined && SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT != null) {
            order = SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT;
        }
        var side = order % 2 ? 1 : 2;

        var card_area = $("#" + card_Id);
        if (card_area.length > 0) {
            var card_template = card_area.find(".SystemMailSentMailSentMailManagementTemplateCardClass[side=" + side + "]");
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
                    SystemMailSentMailSentMailManagement_arr_action,
                    this['uuid'],
                    this,
                    null,
                    this['created_by'],
                );
                new_card.attr("is_allow_delete", "true");
                new_card.removeAttr("is_template");
                new_card.find(".dropdown-menu").append(action_button);
                new_card.removeClass("d-none");
                new_card.removeClass("SystemMailSentMailSentMailManagementTemplateCardClass");
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
var SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_RECORD_IN_PAGE = 100;

/// Dữ liệu tìm kiếm gần nhất
var SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG = {
    func:null,
    data:null,
    page:null,
}
/// Thông tin phân trang hiện tại
var SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION = {
    current_page:1,
    total:0,
    has_next:false,
    has_prev:false
}
//// Hàm tạo pagination
function SystemMailSentMailSentMailManagementCreatePagination(total_record_number=null,crr_record_in_page=100,max_page_render=10){
    if(total_record_number == null){
        return;
    }
    var pagenation_ele=$(".pagination-SystemMailSentMailSentMailManagement");
    var pagination=SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION;
    pagenation_ele.html('');
    // Thông tin về số lượng bản ghi trên trang
    var page_total_ele = $(".page-total-SystemMailSentMailSentMailManagement");
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
            <a class="page-link px-0" onclick="SystemMailSentMailSentMailManagementGetDataTable(1)">
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
                <a class="page-link" onclick="SystemMailSentMailSentMailManagementGetDataTable(` + (parseInt(pagination["current_page"]) - 1) + `)">
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
                    <a class="page-link" onclick="SystemMailSentMailSentMailManagementGetDataTable(${i})">${i}</a>
                </li>`);
            }
            
        }
        if (pagination["has_next"] == true) {
            pagenation_ele.append(`
            <li class="page-item m-1">
            <a class="page-link" onclick="SystemMailSentMailSentMailManagementGetDataTable(` + (parseInt(pagination["current_page"]) + 1) + `)">
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
            <a class="page-link px-0" onclick="SystemMailSentMailSentMailManagementGetDataTable(`+last_page_order+`)">
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
var SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT = 0 ;
//// Hàm Lấy danh sách khi mở trang 100 bản ghi/trang
function SystemMailSentMailSentMailManagementGetDataTable(page=1){

        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailSentMailSentMailManagementGetDataTable";
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["data"] = null;
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailSentMailSentMailManagement();
        var results = obj.tGetDataTableOnlyReadApi(page);

        obj.callAjax.then(function(data) {
            
            $("#SystemMailSentMailSentMailManagementTableBodyId").empty();

            if(SystemMailSentMailSentMailManagementdatatable != undefined){
                SystemMailSentMailSentMailManagementdatatable.clear().draw();
            }
            var crr_record_in_page = 100;

            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page
            
            for (var i = 0; i < results.length; i++){
                try{
                    //console.log('results[i] = ', results[i]);
                    results[i].tDatatableAddRow();
                    SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
                }
                catch(err){
                    console.log(err);
                }
            }
            SystemMailSentMailSentMailManagementCreatePagination(results.length,crr_record_in_page);
    })
}

//// Hàm Lấy danh sách khi mở trang 1000 bản ghi/trang
function SystemMailSentMailSentMailManagementGetDataTableMedium(page=1){

        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailSentMailSentMailManagementGetDataTableMedium";
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["data"] = null;
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailSentMailSentMailManagement();
        var results = obj.tGetDataTableOnlyReadMediumApi(page);

        obj.callAjax.then(function(data) {
            
            $("#SystemMailSentMailSentMailManagementTableBodyId").empty();

            if(SystemMailSentMailSentMailManagementdatatable != undefined){
                SystemMailSentMailSentMailManagementdatatable.clear().draw();
            }

            var crr_record_in_page = 1000;

            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page
            
            for (var i = 0; i < results.length; i++){
                try{
                    //console.log('results[i] = ', results[i]);
                    results[i].tDatatableAddRow();
                    SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
                }
                catch(err){
                    console.log(err);
                }
            }
            SystemMailSentMailSentMailManagementCreatePagination(results.length,crr_record_in_page);

    })
}

//// Hàm Lấy danh sách khi mở trang 10000 bản ghi/trang 
function SystemMailSentMailSentMailManagementGetDataTableLarge(page=1){

        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailSentMailSentMailManagementGetDataTableLarge";
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["data"] = null;
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailSentMailSentMailManagement();
        var results = obj.tGetDataTableOnlyReadLargeApi(page);

        obj.callAjax.then(function(data) {
            
            $("#SystemMailSentMailSentMailManagementTableBodyId").empty();

            if(SystemMailSentMailSentMailManagementdatatable != undefined){
                SystemMailSentMailSentMailManagementdatatable.clear().draw();
            }
            var crr_record_in_page = 10000;

            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page
            
            for (var i = 0; i < results.length; i++){
                try{
                    //console.log('results[i] = ', results[i]);
                    results[i].tDatatableAddRow();
                    SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
                }
                catch(err){
                    console.log(err);
                }
            }
            SystemMailSentMailSentMailManagementCreatePagination(results.length,crr_record_in_page);
  
    })
}


//// Hàm Lấy danh sách khi mở trang 10000 bản ghi/trang 
function SystemMailSentMailSentMailManagementGetExcelDataTableLarge(page=1){

        //SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailSentMailSentMailManagementGetExcelDataTableLarge";
        //SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["data"] = null;
        //SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailSentMailSentMailManagement();
        var results = obj.tGetDataTableOnlyReadLargeApi(page);

        obj.callAjax.then(function(data) {
            
            $("#SystemMailSentMailSentMailManagementExportTableBodyId").empty();

            var crr_record_in_page = 10000;

            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page
            
            for (var i = 0; i < results.length; i++){
                try{
                    //console.log('results[i] = ', results[i]);
                    results[i].tFillTable3("SystemMailSentMailSentMailManagementExportTableId");
                    SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
                }
                catch(err){
                    console.log(err);
                }
                if(i == (results.length - 1) )
                {
                    SystemMailSentMailSentMailManagementExportExcel()
                }
            }
    })
}
//// Hàm Lấy danh sách khi mở trang 

$(document).ready(function(){
    LoadSystemMailSentMailSentMailManagementTableDataList();
})

// Load danh sach

function LoadSystemMailSentMailSentMailManagementTableDataList(){
    var SystemMailSentMailSentMailManagementIdTable ="SystemMailSentMailSentMailManagementTableId";
    var checker = $("#" +SystemMailSentMailSentMailManagementIdTable );
    if (checker.length > 0){
        if($('#'+SystemMailSentMailSentMailManagementIdTable).is(":visible")){
            if(SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_RECORD_IN_PAGE == 100){
                SystemMailSentMailSentMailManagementGetDataTable(SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["current_page"]);
            }
            else if(SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_RECORD_IN_PAGE == 1000){
                SystemMailSentMailSentMailManagementGetDataTableMedium(SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["current_page"]);
            } 
            else if(SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_RECORD_IN_PAGE == 10000){
                SystemMailSentMailSentMailManagementGetDataTableLarge(SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["current_page"]);
            } 
        }
    }
}

// Load danh sach khi tim kiem
function LoadSearchSystemMailSentMailSentMailManagementTableDataList(){
    var SystemMailSentMailSentMailManagementIdTable ="SystemMailSentMailSentMailManagementTableId";
    var checker = $("#" +SystemMailSentMailSentMailManagementIdTable );
    if (checker.length > 0){
        if($('#'+SystemMailSentMailSentMailManagementIdTable).is(":visible")){
            if(SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_RECORD_IN_PAGE == 100){
                SystemMailSentMailSentMailManagementSearchData(SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["current_page"]);
            }
            else if(SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_RECORD_IN_PAGE == 1000){
                SystemMailSentMailSentMailManagementMediumSearchData(SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["current_page"]);
            } 
            else if(SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_RECORD_IN_PAGE == 10000){
                SystemMailSentMailSentMailManagementLargeSearchData(SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["current_page"]);
            } 
        }
    }
}

// Load danh sach khi tim kiem
function LoadFilterSystemMailSentMailSentMailManagementTableDataList(){
    var SystemMailSentMailSentMailManagementIdTable ="SystemMailSentMailSentMailManagementTableId";
    var checker = $("#" +SystemMailSentMailSentMailManagementIdTable );
    if (checker.length > 0){
        if($('#'+SystemMailSentMailSentMailManagementIdTable).is(":visible")){
            if(SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_RECORD_IN_PAGE == 100){
                SystemMailSentMailSentMailManagementFilterData(SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["current_page"]);
            }
            else if(SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_RECORD_IN_PAGE == 1000){
                SystemMailSentMailSentMailManagementMediumFilterData(SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["current_page"]);
            } 
            else if(SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_RECORD_IN_PAGE == 10000){
                SystemMailSentMailSentMailManagementLargeFilterData(SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["current_page"]);
            } 
        }
    }
}

//// Hàm Lấy danh sách lên thẻ khi mở trang 100 bản ghi/trang
function SystemMailSentMailSentMailManagementGetDataCard(page=1){

        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailSentMailSentMailManagementGetDataCard";
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["data"] = null;
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailSentMailSentMailManagement();
        var results = obj.tGetDataTableOnlyReadApi(page);

        obj.callAjax.then(function(data) {
        
        $("#SystemMailSentMailSentMailManagementCardAreaId").find("[is_allow_delete=true]").remove();

        var crr_record_in_page = 100;

        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page
        
        for (var i = 0; i < results.length; i++){
            try{
                //console.log('results[i] = ', results[i]);
                results[i].tFillCard();
                SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
            }
            catch(err){
                console.log(err);
            }
        }
        var pagenation_ele=$(".pagination-card-SystemMailSentMailSentMailManagement");
        var pagination=SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION;
        pagenation_ele.html('');
        var page_total_ele = $(".page-total-SystemMailSentMailSentMailManagement");
        page_total_ele.html(`<footer class="blockquote-footer">Tổng số: ${pagination["total"]} bản ghi </footer>`);
        if (results.length > 0) {
            
                pagenation_ele.append(`<li class="page-item m-1"><a class="page-link" onclick="SystemMailSentMailSentMailManagementGetDataCard(1)">Đầu</a></li>`);
                if (pagination["has_prev"] == true) {
                    pagenation_ele.append('<li class="page-item m-1"><a class="page-link" onclick="SystemMailSentMailSentMailManagementGetDataCard(' + (parseInt(pagination["current_page"]) - 1) + ')">' + (parseInt(pagination["current_page"]) - 1) + '</a></li>');
                }
                pagenation_ele.append('<li class="page-item m-1 active"><a class="page-link" >' + (parseInt(pagination["current_page"])) + '</a></li>');
                if (pagination["has_next"] == true) {
                    pagenation_ele.append('<li class="page-item m-1"><a class="page-link" onclick="SystemMailSentMailSentMailManagementGetDataCard(' + (parseInt(pagination["current_page"]) + 1) + ')">' + (parseInt(pagination["current_page"]) + 1) + '</a></li>');
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
                pagenation_ele.append(`<li class="page-item m-1"><a class="page-link" onclick="SystemMailSentMailSentMailManagementGetDataCard(`+last_page_order+`)">Cuối</a></li>`);
                }
            }   
    })
}

//// Hàm Lấy danh sách lên thẻ khi mở trang 1000 bản ghi/trang
function SystemMailSentMailSentMailManagementGetDataCardMedium(page=1){

        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailSentMailSentMailManagementGetDataCardMedium";
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["data"] = null;
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailSentMailSentMailManagement();
        var results = obj.tGetDataTableOnlyReadMediumApi(page);

        obj.callAjax.then(function(data) {
        
        $("#SystemMailSentMailSentMailManagementCardAreaId").find("[is_allow_delete=true]").remove();

        var crr_record_in_page = 100;

        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page
        
        for (var i = 0; i < results.length; i++){
            try{
                //console.log('results[i] = ', results[i]);
                results[i].tFillCard();
                SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
            }
            catch(err){
                console.log(err);
            }
        }
        var pagenation_ele=$(".pagination-card-SystemMailSentMailSentMailManagement");
        var pagination=SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION;
        pagenation_ele.html('');
        var page_total_ele = $(".page-total-SystemMailSentMailSentMailManagement");
        page_total_ele.html(`<footer class="blockquote-footer">Tổng số: ${pagination["total"]} bản ghi </footer>`);
        if (results.length > 0) {
            
                pagenation_ele.append(`<li class="page-item m-1"><a class="page-link" onclick="SystemMailSentMailSentMailManagementGetDataCardMedium(1)">Đầu</a></li>`);
                if (pagination["has_prev"] == true) {
                    pagenation_ele.append('<li class="page-item m-1"><a class="page-link" onclick="SystemMailSentMailSentMailManagementGetDataCardMedium(' + (parseInt(pagination["current_page"]) - 1) + ')">' + (parseInt(pagination["current_page"]) - 1) + '</a></li>');
                }
                pagenation_ele.append('<li class="page-item m-1 active"><a class="page-link" >' + (parseInt(pagination["current_page"])) + '</a></li>');
                if (pagination["has_next"] == true) {
                    pagenation_ele.append('<li class="page-item m-1"><a class="page-link" onclick="SystemMailSentMailSentMailManagementGetDataCardMedium(' + (parseInt(pagination["current_page"]) + 1) + ')">' + (parseInt(pagination["current_page"]) + 1) + '</a></li>');
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
                pagenation_ele.append(`<li class="page-item m-1"><a class="page-link" onclick="SystemMailSentMailSentMailManagementGetDataCardMedium(`+last_page_order+`)">Cuối</a></li>`);
                }
            }   
    })
}

//// Hàm Lấy danh sách lên thẻ khi mở trang 10000 bản ghi/trang
function SystemMailSentMailSentMailManagementGetDataCardLarge(page=1){

        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailSentMailSentMailManagementGetDataCardLarge";
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["data"] = null;
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailSentMailSentMailManagement();
        var results = obj.tGetDataTableOnlyReadLargeApi(page);

        obj.callAjax.then(function(data) {
        
        $("#SystemMailSentMailSentMailManagementCardAreaId").find("[is_allow_delete=true]").remove();

        var crr_record_in_page = 100;

        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page
        
        for (var i = 0; i < results.length; i++){
            try{
                //console.log('results[i] = ', results[i]);
                results[i].tFillCard();
                SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
            }
            catch(err){
                console.log(err);
            }
        }
        var pagenation_ele=$(".pagination-card-SystemMailSentMailSentMailManagement");
        var pagination=SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION;
        pagenation_ele.html('');
        var page_total_ele = $(".page-total-SystemMailSentMailSentMailManagement");
        page_total_ele.html(`<footer class="blockquote-footer">Tổng số: ${pagination["total"]} bản ghi </footer>`);
        if (results.length > 0) {
            
                pagenation_ele.append(`<li class="page-item m-1"><a class="page-link" onclick="SystemMailSentMailSentMailManagementGetDataCardLarge(1)">Đầu</a></li>`);
                if (pagination["has_prev"] == true) {
                    pagenation_ele.append('<li class="page-item m-1"><a class="page-link" onclick="SystemMailSentMailSentMailManagementGetDataCardLarge(' + (parseInt(pagination["current_page"]) - 1) + ')">' + (parseInt(pagination["current_page"]) - 1) + '</a></li>');
                }
                pagenation_ele.append('<li class="page-item m-1 active"><a class="page-link" >' + (parseInt(pagination["current_page"])) + '</a></li>');
                if (pagination["has_next"] == true) {
                    pagenation_ele.append('<li class="page-item m-1"><a class="page-link" onclick="SystemMailSentMailSentMailManagementGetDataCardLarge(' + (parseInt(pagination["current_page"]) + 1) + ')">' + (parseInt(pagination["current_page"]) + 1) + '</a></li>');
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
                pagenation_ele.append(`<li class="page-item m-1"><a class="page-link" onclick="SystemMailSentMailSentMailManagementGetDataCardLarge(`+last_page_order+`)">Cuối</a></li>`);
                }
            }   
    })
}

//// Hàm Lấy danh sách lên thẻ khi mở trang 
$(document).ready(function(){
    var SystemMailSentMailSentMailManagementIdAreaCard ="SystemMailSentMailSentMailManagementCardAreaId";
    var checker = $("#" +SystemMailSentMailSentMailManagementIdAreaCard );
    if (checker.length > 0){
        if($('#'+SystemMailSentMailSentMailManagementIdAreaCard).is(":visible")){
            SystemMailSentMailSentMailManagementGetDataCard(SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["current_page"]);
        }
    }
})


// ########## [Create and Continue Button] Clicked Handle function ##############
// ########## [Nút thêm mới và tiếp tục] Bắt sự kiện nhấn thêm mới ##############

$(document).ready(function(){
    $("#SystemMailSentMailSentMailManagementSaveAndNewModalBtnId").click(function(){
        var SystemMailSentMailSentMailManagement_validate_obj = new InputValidation('SystemMailSentMailSentMailManagementCreateModalFormId');
        if(SystemMailSentMailSentMailManagement_validate_obj.validateRequired()){
            toastr.warning('Vui lòng điền đầy đủ thông tin');
            return;
        }
        var obj = new SystemMailSentMailSentMailManagement();
        console.log('Save obj and create new, obj = ', obj);
        systemmailsentmailsentmailmanagement_is_continue_modal=true;
        obj.tCreateNewPostFormApi('SystemMailSentMailSentMailManagementCreateModalFormId');
        
    })
});

// ########## [Save Button] Clicked Handle function ##############
// ########## [Nút thêm mới] bắt sự kiện nhấn nút ##############

$(document).ready(function(){
    $("#SystemMailSentMailSentMailManagementCreateModalBtnId").click(function(){
        var SystemMailSentMailSentMailManagement_validate_obj = new InputValidation('SystemMailSentMailSentMailManagementCreateModalFormId');
        if(SystemMailSentMailSentMailManagement_validate_obj.validateRequired()){
            toastr.warning('Vui lòng điền đầy đủ thông tin');
            return;
        }
        obj = new SystemMailSentMailSentMailManagement();
        console.log('Save obj = ', obj);
        obj.tCreateNewPostFormApi('SystemMailSentMailSentMailManagementCreateModalFormId');
    })
});


// ########## [Save Button] Clicked Handle function ##############
var systemmailsentmailsentmailmanagement_is_continue_modal=false;
var systemmailsentmailsentmailmanagement_is_continue_form=false;
var systemmailsentmailsentmailmanagement_is_continue_back_last_url=false;
$(document).ready(function(){
    $("#SystemMailSentMailSentMailManagementCreateBtnId").click(function(){
        systemmailsentmailsentmailmanagement_is_continue_back_last_url = true;
        var SystemMailSentMailSentMailManagement_validate_obj = new InputValidation('SystemMailSentMailSentMailManagementCreateFormId');
        if(SystemMailSentMailSentMailManagement_validate_obj.validateRequired()){
            toastr.warning('Vui lòng điền đầy đủ thông tin');
            return;
        }
        obj = new SystemMailSentMailSentMailManagement();
        console.log('Save obj = ', obj);
        obj.tCreateNewPostFormApi();
    })
});
    

// ########## [Update Button] Clicked Handle function ##############

$(document).ready(function(){
    $("#SystemMailSentMailSentMailManagementUpdateModalBtnId").click(function(){
        var SystemMailSentMailSentMailManagement_validate_obj = new InputValidation('SystemMailSentMailSentMailManagementEditModalFormId');
        if(SystemMailSentMailSentMailManagement_validate_obj.validateRequired()){
            toastr.warning('Vui lòng điền đầy đủ thông tin');
            return;

        }
        obj = new SystemMailSentMailSentMailManagement();
        console.log('Update obj = ', obj);
        obj.tUpdatePostApi('SystemMailSentMailSentMailManagementEditModalFormId');
    })
});


// ########## [Update Button] Clicked Handle function ##############

$(document).ready(function(){
    $("#SystemMailSentMailSentMailManagementUpdateBtnId").click(function(){
        is_continue_modal=false;
        is_continue_form=false;
        is_continue_back_last_url=true;
        var SystemMailSentMailSentMailManagement_validate_obj = new InputValidation('SystemMailSentMailSentMailManagementEditFormId');
        if(SystemMailSentMailSentMailManagement_validate_obj.validateRequired()){
            toastr.warning('Vui lòng điền đầy đủ thông tin');
            return;
        }
        obj = new SystemMailSentMailSentMailManagement();
        console.log('Update obj = ', obj);
        obj.tUpdatePostApi('SystemMailSentMailSentMailManagementEditFormId');
    })
});
// ########## [Input Change Event] Change Event Handle function ##############
$(document).ready(function(){
    var friendly_code_field_change = $("#friendly_codeSystemMailSentMailSentMailManagementCreateInputId");
    if(friendly_code_field_change.length > 0) {    
        $("#friendly_codeSystemMailSentMailSentMailManagementCreateInputId").change(function(){
            var self_val = $(this).val();
            if(self_val != null && self_val != "null" && self_val != "")
            {
                SystemMailSentMailSentMailManagementAddingCheckExistCode(self_val,$(this));
            }
        })     
    }
    var friendly_code_field_modal_change = $("#friendly_codeSystemMailSentMailSentMailManagementCreateModalInputId");
    if(friendly_code_field_modal_change.length > 0) {    
        $("#friendly_codeSystemMailSentMailSentMailManagementCreateModalInputId").change(function(){
            var self_val = $(this).val();
            if(self_val != null && self_val != "null" && self_val != "")
            {
                SystemMailSentMailSentMailManagementAddingCheckExistCode(self_val,$(this));
            }
        })     
    }
    
    var table_in_use = $("table[model_name=SystemMailSentMail]");
    if(table_in_use.length > 0){
        var tr_template_in_use = table_in_use.find("tr[is-new=template]");
        if(tr_template_in_use.length > 0){
        
            var friendly_code_template_field = tr_template_in_use.find("input[name=friendly_code]");
            if(friendly_code_template_field.length > 0 && table_inuse) {  
                         
                friendly_code_template_field.change(function(){
                    var self_val = $(this).val();
                    if(self_val != null && self_val != "null" && self_val != "")
                    {
                        SystemMailSentMailSentMailManagementAddingCheckExistCode(self_val,$(this));
                    }
                })     
            }
        }
    }
    
    
});
// ########## [Input Change Event] Change Event Handle function ##############
$(document).ready(function(){
    var friendly_code_field_change = $("#friendly_codeSystemMailSentMailSentMailManagementEditInputId");
    if(friendly_code_field_change.length > 0) {    
        $("#friendly_codeSystemMailSentMailSentMailManagementEditInputId").change(function(){
            var allow_tracker_change = $(this).attr("allow_tracker_change");
            if(allow_tracker_change == "true" || allow_tracker_change == true)
            {
                var self_val = $(this).val();
                var self_model_obj_uuid = $(this).closest("form").attr("obj_uuid");
                if(self_val != null && self_val != "null" && self_val != "")
                {
                    SystemMailSentMailSentMailManagementUpdateCheckExistCode(self_model_obj_uuid,self_val,$(this));
                }                   
            }            
        })     
    }
    var friendly_code_field_modal_change = $("#friendly_codeSystemMailSentMailSentMailManagementEditModalInputId");
    if(friendly_code_field_modal_change.length > 0) {    
        $("#friendly_codeSystemMailSentMailSentMailManagementEditModalInputId").change(function(){
            
            var allow_tracker_change = $(this).attr("allow_tracker_change");
            if(allow_tracker_change == "true" || allow_tracker_change == true)
            {
                var self_val = $(this).val();
                var self_model_obj_uuid = $(this).closest("form").attr("obj_uuid");
                if(self_val != null && self_val != "null" && self_val != "")
                {
                    SystemMailSentMailSentMailManagementUpdateCheckExistCode(self_model_obj_uuid,self_val,$(this));
                }                  
            }   
        })     
    }
                       
  
    var table_in_use = $("table[model_name=SystemMailSentMail]");
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
                            SystemMailSentMailSentMailManagementUpdateCheckExistCode(self_model_obj_uuid,self_val,$(this));
                        }                  
                    } 
                })     
            }
        }
    }
    
});
// ########## [CALL API CHECK EXIST CODE] Clicked Handle function ##############
function SystemMailSentMailSentMailManagementAddingCheckExistCode(code,$this_ele){
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
            url: SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_CREATE_CHECK_EXIST_CODE_URL + code + "/",
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
    return results;          

}
// ########## [CALL API CHECK EXIST CODE] Clicked Handle function ##############
function SystemMailSentMailSentMailManagementUpdateCheckExistCode(uuid,code,$this_ele){
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
            url: SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_UPDATE_CHECK_EXIST_CODE_URL.replace("<uuid>",uuid) + code + "/",
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
    return results;          

}
// ########## [Delete Button] Clicked Handle function ##############
// ########## [Nút Xóa] Xử lý sự kiện click chuột ##############

$(document).ready(function(){
    $("#SystemMailSentMailSentMailManagementDeleteBtnId").click(function(){
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
                    obj = new SystemMailSentMailSentMailManagement();
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

function SystemMailSentMailSentMailManagementOnDeleteEventV1(uuid){
    var search_data = null;
    try {
        search_data = SystemMailSentMailSentMailManagementSearchData;
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
                            var obj=new SystemMailSentMailSentMailManagement();
                            obj.tDeleteApi(uuid);
                        }
                    },
                    
                }
        });
    }
    else { 
        SystemMailSentMailSentMailManagementOnDeleteWithDataSearchEvent(uuid);
    }

}

// ########## [Delete function] Call Handle function(action) ##############
// ########## [Hàm Xóa] Xử lý sự kiện gọi hàm xóa(Thao tác) ##############

function SystemMailSentMailSentMailManagementOnDeleteEvent(uuid){
    // Get obj name
    const obj_tr = $("tr#" + uuid);
    const obj_name = $("tr#" + uuid).attr("obj_name");

    // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/
    Swal.fire({
        html: "Bạn chắc muốn xóa Mail đã gửi <b>" + obj_name + "</b>?",
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
                html: "Bạn đã xóa Mail đã gửi <b>" + obj_name + "</b>!.",
                icon: "success",
                buttonsStyling: false,
                confirmButtonText: "Ok",
                customClass: {
                    confirmButton: "btn fw-bold btn-primary",
                }
            }).then(function () {
                // Remove current row
                SystemMailSentMailSentMailManagementdatatable.row(obj_tr).remove().draw();
                var crr_delete_uuid = uuid;
                var obj = new SystemMailSentMailSentMailManagement();
                obj.tDeleteApi(crr_delete_uuid);
            })
        } else if (result.dismiss === 'cancel') {
            Swal.fire({
                html: "Hủy xóa <b>" + obj_name + "</b>.",
                icon: "error",
                buttonsStyling: false,
                confirmButtonText: "Ok",
                customClass: {
                    confirmButton: "btn fw-bold btn-primary",
                }
            });
        }
    });

}
///// xóa và load lại danh sách theo dữ liệu tìm kiếm
function SystemMailSentMailSentMailManagementOnDeleteWithDataSearchEvent(uuid){
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
                var obj=new SystemMailSentMailSentMailManagement();
                
                obj.tDeleteApiWithDataSearch(uuid,SystemMailSentMailSentMailManagementSearchData);
            }
        },
        
    }
});
    
}

// xem chi tiết
function SystemMailSentMailSentMailManagementViewDetails(selectionId){
    var select = $("#"+selectionId);
    if(select.length>0){
        var value =  select.val()
        if(value == "" || value == null || value == undefined){
            toastr.warning('Vui lòng chọn giá trị');
            return;
        }
        else {
            $('#SystemMailSentMailSentMailManagementDetailModalId').modal('toggle');
            var obj=new SystemMailSentMailSentMailManagement();
            obj.tGetObjApi(obj_uuid);
            obj.callAjax.then(function(data) {
                new SystemMailSentMailSentMailManagement(data).tFillDetailForm('SystemMailSentMailSentMailManagementDetailModalId_form');
            })
        }
    }
}

// xem chi tiết ở popup
function SystemMailSentMailSentMailManagementOpenPopupDetails(uuid){
   
    $('#SystemMailSentMailSentMailManagementDetailModalId').modal('toggle');
    var obj=new SystemMailSentMailSentMailManagement();
    obj.tGetObjApi(uuid);
    obj.callAjax.then(function(data) {
        new SystemMailSentMailSentMailManagement(data).tFillDetailModalForm('SystemMailSentMailSentMailManagementDetailModalId_form');
    })
}
// Mở tab để xem chi tiết
function SystemMailSentMailSentMailManagementDetails(uuid){
    var org_app_prefixId = ""
    if($("#org_app_prefixId").length > 0){
        org_app_prefixId = $("#org_app_prefixId").val();
    }
   location.href = `${org_app_prefixId}/SentMailManagement/SystemMailSentMail/detail/${uuid}`;
}
/// load chi tiết/ cho phép chỉnh sửa
function SystemMailSentMailSentMailManagementOpenPopupEdit(uuid){
    $('#SystemMailSentMailSentMailManagementEditModalId').modal('toggle');
    var obj=new SystemMailSentMailSentMailManagement();
    obj.tGetObjApi(uuid);
    obj.callAjax.then(function(data) {
        new SystemMailSentMailSentMailManagement(data).tFillEditModalForm('SystemMailSentMailSentMailManagementEditModalId_form');

    })
}

/// Mở trang chỉnh sửa ở tab mới
function SystemMailSentMailSentMailManagementEdit(uuid){
                       
    var org_app_prefixId = ""
    if($("#org_app_prefixId").length > 0){
        org_app_prefixId = $("#org_app_prefixId").val();
    }
      location.href = `${org_app_prefixId}/SentMailManagement/SystemMailSentMail/edit/${uuid}`;
}

// ########## [Cancel Button] Clicked Handle function ##############
$(document).ready(function(){
    $("#SystemMailSentMailSentMailManagementCancelBtnId").click(function(){
        systemmailsentmailsentmailmanagement_is_continue_modal=false;
        systemmailsentmailsentmailmanagement_is_continue_form=false;
        systemmailsentmailsentmailmanagement_is_continue_back_last_url=false;
        last_url = localStorage.getItem("last_url");
        location.href = last_url;

    })
});
     

// ########## [Fill Table by Search] Handle Event function ##############
function SystemMailSentMailSentMailManagementSearchData(page=1,search_data=null){

        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailSentMailSentMailManagementSearchData";
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["data"] = search_data;
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailSentMailSentMailManagement();
        var results = obj.tSearchDataApi(page,search_data);
        obj.callAjax.then(function(data) {

            $("#SystemMailSentMailSentMailManagementTableBodyId").empty();

            if(SystemMailSentMailSentMailManagementdatatable != undefined){
                SystemMailSentMailSentMailManagementdatatable.clear().draw();
            }            
            var crr_record_in_page = 100;

            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page;

            for (var i = 0; i < results.length; i++){
                try{
                    console.log('results[i] = ', results[i]);

                    results[i].tDatatableAddRow();

                    SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
                }
                catch(err){
                    console.log(err);
                }
            }
            //search_type = search_type.trim()
            var pagination = SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION;
            SystemMailSentMailSentMailManagementCreatePagination(results.length,crr_record_in_page);

            var crr_txt = $("#SystemMailSentMailSentMailManagementQuickSearchInputId").val();
            highlight(crr_txt,"#SystemMailSentMailSentMailManagementTableBodyId");
    })

}
    
// ########## [Fill Table by Search] Handle Event function ##############
function SystemMailSentMailSentMailManagementMediumSearchData(page=1,search_data=null){
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailSentMailSentMailManagementMediumSearchData";
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["data"] = search_data;
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailSentMailSentMailManagement();
        var results = obj.tSearchDataMediumApi(page,search_data);
        obj.callAjax.then(function(data) {

            $("#SystemMailSentMailSentMailManagementTableBodyId").empty();

            if(SystemMailSentMailSentMailManagementdatatable != undefined){
                SystemMailSentMailSentMailManagementdatatable.clear().draw();
            }            
            var crr_record_in_page = 1000;

            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page;

            for (var i = 0; i < results.length; i++){
                try{
                    console.log('results[i] = ', results[i]);

                    results[i].tDatatableAddRow();

                    SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
                }
                catch(err){
                    console.log(err);
                }
            }
            //search_type = search_type.trim()
            var pagination = SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION;
            SystemMailSentMailSentMailManagementCreatePagination(results.length,crr_record_in_page);


            var crr_txt = $("#SystemMailSentMailSentMailManagementQuickSearchInputId").val();
            highlight(crr_txt,"#SystemMailSentMailSentMailManagementTableId");
    })

}
    
// ########## [Fill Table by Search] Handle Event function ##############
function SystemMailSentMailSentMailManagementLargeSearchData(page=1,search_data=null){
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailSentMailSentMailManagementLargeSearchData";
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["data"] = search_data;
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailSentMailSentMailManagement();
        var results = obj.tSearchDataLargeApi(page,search_data);
        obj.callAjax.then(function(data) {

            $("#SystemMailSentMailSentMailManagementTableBodyId").empty();

            if(SystemMailSentMailSentMailManagementdatatable != undefined){
                SystemMailSentMailSentMailManagementdatatable.clear().draw();
            }            
            var crr_record_in_page = 10000;

            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page;

            for (var i = 0; i < results.length; i++){
                try{
                    console.log('results[i] = ', results[i]);

                    results[i].tDatatableAddRow();

                    SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
                }
                catch(err){
                    console.log(err);
                }
            }
            //search_type = search_type.trim()
            var pagination = SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION;
            SystemMailSentMailSentMailManagementCreatePagination(results.length,crr_record_in_page);
            var crr_txt = $("#SystemMailSentMailSentMailManagementQuickSearchInputId").val();
            highlight(crr_txt,"#SystemMailSentMailSentMailManagementTableId");
    })

}
    
// ########## [Fill Table by Search] Handle Event function ##############
function SystemMailSentMailSentMailManagementExcelLargeSearchData(page=1,search_data=null){
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailSentMailSentMailManagementLargeSearchData";
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["data"] = search_data;
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailSentMailSentMailManagement();
        var results = obj.tSearchDataLargeApi(page,search_data);
        obj.callAjax.then(function(data) {

            $("#SystemMailSentMailSentMailManagementExportTableId").find("tbody").empty();
            
            var crr_record_in_page = 10000;

            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page;

            for (var i = 0; i < results.length; i++){
                try{
                    console.log('results[i] = ', results[i]);

                    results[i].tFillTable3("SystemMailSentMailSentMailManagementExportTableId");

                    SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
                }
                catch(err){
                    console.log(err);
                }

                if(i == results.length - 1){
                    SystemMailSentMailSentMailManagementExportExcel()
                }
            }
    })

}


// ########## [Fill Table by Filter] Handle Event function ##############
function SystemMailSentMailSentMailManagementFilterData(page=1,search_data=null){
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailSentMailSentMailManagementFilterData";
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["data"] = search_data;
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailSentMailSentMailManagement();
        var results = obj.tFilterDataApi(page,search_data);
        obj.callAjax.then(function(data) {

            $("#SystemMailSentMailSentMailManagementTableBodyId").empty();

            if(SystemMailSentMailSentMailManagementdatatable != undefined){
                SystemMailSentMailSentMailManagementdatatable.clear().draw();
            }            
            var crr_record_in_page = 100;

            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page;

            for (var i = 0; i < results.length; i++){
                try{
                    console.log('results[i] = ', results[i]);

                    results[i].tDatatableAddRow();

                    SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
                }
                catch(err){
                    console.log(err);
                }
            }
            //search_type = search_type.trim()
            var pagination = SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION;
            SystemMailSentMailSentMailManagementCreatePagination(results.length,crr_record_in_page);


    })

}
    
// ########## [Fill Table by Filter] Handle Event function ##############
function SystemMailSentMailSentMailManagementMediumFilterData(page=1,search_data=null){
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailSentMailSentMailManagementMediumFilterData";
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["data"] = search_data;
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailSentMailSentMailManagement();
        var results = obj.tFilterDataMediumApi(page,search_data);
        obj.callAjax.then(function(data) {

            $("#SystemMailSentMailSentMailManagementTableBodyId").empty();

            if(SystemMailSentMailSentMailManagementdatatable != undefined){
                SystemMailSentMailSentMailManagementdatatable.clear().draw();
            }            
            var crr_record_in_page = 1000;

            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page;

            for (var i = 0; i < results.length; i++){
                try{
                    console.log('results[i] = ', results[i]);

                    results[i].tDatatableAddRow();

                    SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
                }
                catch(err){
                    console.log(err);
                }
            }
            //search_type = search_type.trim()
            var pagination = SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION;
            SystemMailSentMailSentMailManagementCreatePagination(results.length,crr_record_in_page);


    })

}
    
// ########## [Fill Table by Filter] Handle Event function ##############
function SystemMailSentMailSentMailManagementLargeFilterData(page=1,search_data=null){
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailSentMailSentMailManagementLargeFilterData";
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["data"] = search_data;
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailSentMailSentMailManagement();
        var results = obj.tFilterDataLargeApi(page,search_data);
        obj.callAjax.then(function(data) {

            $("#SystemMailSentMailSentMailManagementTableBodyId").empty();

            if(SystemMailSentMailSentMailManagementdatatable != undefined){
                SystemMailSentMailSentMailManagementdatatable.clear().draw();
            }            
            var crr_record_in_page = 10000;

            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page;

            for (var i = 0; i < results.length; i++){
                try{
                    console.log('results[i] = ', results[i]);

                    results[i].tDatatableAddRow();

                    SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
                }
                catch(err){
                    console.log(err);
                }
            }
            //search_type = search_type.trim()
            var pagination = SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION;
            SystemMailSentMailSentMailManagementCreatePagination(results.length,crr_record_in_page);


    })

}



// ########## [Fill Table by Filter] Handle Event function ##############
function SystemMailSentMailSentMailManagementExcelLargeFilterData(page=1,search_data=null){
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailSentMailSentMailManagementLargeFilterData";
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["data"] = search_data;
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailSentMailSentMailManagement();
        var slugSearch = "";
        
        var results = obj.tFilterDataLargeApi(page,slugSearch);
        obj.callAjax.then(function(data) {

            $("#SystemMailSentMailSentMailManagementExportTableId").find("tbody").empty();
            
            var crr_record_in_page = 10000;

            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page;

            for (var i = 0; i < results.length; i++){
                try{
                    console.log('results[i] = ', results[i]);

                    results[i].tExportDatatableAddRow("SystemMailSentMailSentMailManagementExportTableId");

                    SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
                }
                catch(err){
                    console.log(err);
                }
                if(i == results.length - 1){
                //    SystemMailSentMailSentMailManagementExportExcel();
                    return "add row for export table success";
                }
            }
            

    })

}

function CallPromiseSystemMailSentMailSentMailManagementExcelLargeFilterData(page=1,search_data=null){
    return new Promise(resolve => {
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailSentMailSentMailManagementLargeFilterData";
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["data"] = search_data;
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailSentMailSentMailManagement();
        var slugSearch = "";
        
        var results = obj.tFilterDataLargeApi(page,slugSearch);
        obj.callAjax.then(function(data) {

            $("#SystemMailSentMailSentMailManagementExportTableId").find("tbody").empty();
            
            var crr_record_in_page = 10000;

            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page;
            if(results.length > 0){
                for (var i = 0; i < results.length; i++){
                    try{
                        console.log('results[i] = ', results[i]);

                        results[i].tExportDatatableAddRow("SystemMailSentMailSentMailManagementExportTableId");

                        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
                    }
                    catch(err){
                        console.log(err);
                    }
                    if(i == results.length - 1){
                    //    SystemMailSentMailSentMailManagementExportExcel();
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

async function asyncCallSystemMailSentMailSentMailManagementExcelLargeFilterData(page=1,search_data=null) {
  console.log('exportingg');
  await CallPromiseSystemMailSentMailSentMailManagementExcelLargeFilterData(page,search_data);
  console.log('exported');
  // Expected output: "resolved"
}




// ########## [Search Button] Clicked Handle function ##############
// ########## [Nút tìm kiếm] Sự kiện click nút tìm kiếm ##############

$(document).ready(function(){
    // Tìm kiếm nhanh
    $("#SystemMailSentMailSentMailManagementQuickSearchInputId").on('keyup', function(e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION={
                current_page:1,
                total:0,
                has_next:false,
                has_prev:false
            }
            SystemMailSentMailSentMailManagementSearchData(SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["current_page"]);
        }
    })
    $("#SystemMailSentMailSentMailManagementQuickSearchBtnId").click(function(){
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION={
            current_page:1,
            total:0,
            has_next:false,
            has_prev:false
        }

        //SystemMailSentMailSentMailManagementSearchData(SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["current_page"]);
        //var IdAreaCard ="SystemMailSentMailSentMailManagementCardAreaId";
        //var checker = $("#" +IdAreaCard );
        //if (checker.length > 0){
        //    if($('#'+IdAreaCard).is(":visible")){
        //        SystemMailSentMailSentMailManagementGetDataCard(SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["current_page"]);
        //    }
        //}
    })
    $("#SystemMailSentMailSentMailManagementSearchBtnId").click(function(){
        SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION={
            current_page:1,
            total:0,
            has_next:false,
            has_prev:false
        }
        SystemMailSentMailSentMailManagementFilterData(SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_PAGINATION["current_page"]);
    })
});

    

// ########## [Search Button] Clicked Handle function ##############
$(document).ready(function(){

    $("#SystemMailSentMailSentMailManagementExportExcelBtnId").click(function(){
        var is_export = true;
        if(SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["func"].includes("GetDataTable")){
                SystemMailSentMailSentMailManagementGetExcelDataTableLarge(1);
        }
        else if(SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["func"].includes("SearchData")){
                SystemMailSentMailSentMailManagementExcelLargeSearchData(1,SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["data"]);
        } 
        else if(SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["func"].includes("FilterData")){
                SystemMailSentMailSentMailManagementExcelLargeFilterData(1,SYSTEMMAILSENTMAILSENTMAILMANAGEMENT_SEARCH_LOG["data"]);
        } 
        
    })
}); 

function SystemMailSentMailSentMailManagementExportExcel(){

    var table=$('#SystemMailSentMailSentMailManagementExportTableId');
    var count_cols = table.find("th").length;
    if(table.find("td").length>0){
        table.tableExport({
        filename: 'Mail_đã_gửi_%DD%-%MM%-%YY%',
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

SystemMailSentMailSentMailManagement_arr_action = [

    
    {
            "title": "Xem chi tiết",
            "func": "SystemMailSentMailSentMailManagementOpenPopupDetails",
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
            "func": "SystemMailSentMailSentMailManagementOpenPopupEdit",
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
            "func": "SystemMailSentMailSentMailManagementOnDeleteEvent",
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

