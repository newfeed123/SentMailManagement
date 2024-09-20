
/**
 *  SystemMailTargetSentMailManagementClasses.js created by @truongnv(truongg.nv@gmail.com) 
 *  Cá nhân/nhóm nhận mail
 *  Định nghĩa, xử lý các sự kiện và các thông tin liên quan đến Cá nhân/nhóm nhận mail
 *  Tạo bởi @truongnv on 8/8/2023
 *  Model : SystemMailTarget ($app_name_verbose)
 */

var SYSTEMMAILTARGETSENTMAILMANAGEMENT_LOAD_MEMCACHE = false;

class SystemMailTargetSentMailManagement {
    // ########## Init Objects ##############
    constructor(data = null) {
        if (data != null) {
            if (data.hasOwnProperty('id')) {
                this.id = data.id;
            } else {
                this.id = null;
            }

            this.__app_name__ = "SentMailManagement";

            this.__model_name__ = "SystemMailTarget";

            if (data.hasOwnProperty('uuid')) {
                this.uuid = data.uuid;
                this.editUrl = '/SentMailManagement/SystemMailTarget/edit/' + this.uuid + '/';
                this.detailUrl = '/SentMailManagement/SystemMailTarget/detail/' + this.uuid + '/';
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
                

            if (data.hasOwnProperty('email_template')) {
                this.email_template = data.email_template;
            }
                

            if (data.hasOwnProperty('target')) {
                this.target = data.target;
            }
                

            if (data.hasOwnProperty('content')) {
                this.content = data.content;
            }
                

            if (data.hasOwnProperty('status_code')) {
                this.status_code = data.status_code;
            }
                

            if (data.hasOwnProperty('status_text')) {
                this.status_text = data.status_text;
            }
                

            if (data.hasOwnProperty('organization')) {
                this.organization = data.organization;
            }
                

            if (data.hasOwnProperty('hr_created_by')) {
                this.hr_created_by = data.hr_created_by;
            }
                

            if (data.hasOwnProperty('hr_updated_by')) {
                this.hr_updated_by = data.hr_updated_by;
            }
                

        }
    }
    tGetFormData(formId = null) {
        var formEle = $("#" + formId);
        if (formEle.length > 0) {
            var chEle = formEle.find("#uuidSystemMailTargetSentMailManagementInputId");
            if (chEle.length > 0) {
                this.uuid = chEle.val();
            } else {
                // this.uuid = null;
            }
            

            var chEle_name = formEle.find("#nameSystemMailTargetSentMailManagementInputId");
            if (chEle_name.length > 0) {
                this.name = chEle_name.val();
            } 
                

            var chEle_code = formEle.find("#codeSystemMailTargetSentMailManagementInputId");
            if (chEle_code.length > 0) {
                this.code = chEle_code.val();
            } 
                

            var chEle_friendly_code = formEle.find("#friendly_codeSystemMailTargetSentMailManagementInputId");
            if (chEle_friendly_code.length > 0) {
                this.friendly_code = chEle_friendly_code.val();
            } 
                

            var chEle_created_by = formEle.find("#created_bySystemMailTargetSentMailManagementInputId");
            if (chEle_created_by.length > 0) {
                this.created_by = chEle_created_by.val();
            } 
                

            var chEle_created_at = formEle.find("#created_atSystemMailTargetSentMailManagementInputId");
            if (chEle_created_at.length > 0) {
                this.created_at = chEle_created_at.val();
            } 
                

            var chEle_updated_by = formEle.find("#updated_bySystemMailTargetSentMailManagementInputId");
            if (chEle_updated_by.length > 0) {
                this.updated_by = chEle_updated_by.val();
            } 
                

            var chEle_updated_at = formEle.find("#updated_atSystemMailTargetSentMailManagementInputId");
            if (chEle_updated_at.length > 0) {
                this.updated_at = chEle_updated_at.val();
            } 
                

            var chEle_email_template = formEle.find("#email_templateSystemMailTargetSentMailManagementInputId");
            if (chEle_email_template.length > 0) {
                this.email_template = chEle_email_template.val();
            } 
                

            var chEle_target = formEle.find("#targetSystemMailTargetSentMailManagementInputId");
            if (chEle_target.length > 0) {
                this.target = chEle_target.val();
            } 
                

            var chEle_content = formEle.find("#contentSystemMailTargetSentMailManagementInputId");
            if (chEle_content.length > 0) {
                this.content = chEle_content.val();
            } 
                

            var chEle_status_code = formEle.find("#status_codeSystemMailTargetSentMailManagementInputId");
            if (chEle_status_code.length > 0) {
                this.status_code = chEle_status_code.val();
            } 
                

            var chEle_status_text = formEle.find("#status_textSystemMailTargetSentMailManagementInputId");
            if (chEle_status_text.length > 0) {
                this.status_text = chEle_status_text.val();
            } 
                

            var chEle_organization = formEle.find("#organizationSystemMailTargetSentMailManagementInputId");
            if (chEle_organization.length > 0) {
                this.organization = chEle_organization.val();
            } 
                

            var chEle_hr_created_by = formEle.find("#hr_created_bySystemMailTargetSentMailManagementInputId");
            if (chEle_hr_created_by.length > 0) {
                this.hr_created_by = chEle_hr_created_by.val();
            } 
                

            var chEle_hr_updated_by = formEle.find("#hr_updated_bySystemMailTargetSentMailManagementInputId");
            if (chEle_hr_updated_by.length > 0) {
                this.hr_updated_by = chEle_hr_updated_by.val();
            } 
                
        }
        else {
            

            var chEle_name = $("#nameSystemMailTargetSentMailManagementInputId");
            if (chEle_name.length > 0) {
                this.name = chEle_name.val();
            } 
                

            var chEle_code = $("#codeSystemMailTargetSentMailManagementInputId");
            if (chEle_code.length > 0) {
                this.code = chEle_code.val();
            } 
                

            var chEle_friendly_code = $("#friendly_codeSystemMailTargetSentMailManagementInputId");
            if (chEle_friendly_code.length > 0) {
                this.friendly_code = chEle_friendly_code.val();
            } 
                

            var chEle_created_by = $("#created_bySystemMailTargetSentMailManagementInputId");
            if (chEle_created_by.length > 0) {
                this.created_by = chEle_created_by.val();
            } 
                

            var chEle_created_at = $("#created_atSystemMailTargetSentMailManagementInputId");
            if (chEle_created_at.length > 0) {
                this.created_at = chEle_created_at.val();
            } 
                

            var chEle_updated_by = $("#updated_bySystemMailTargetSentMailManagementInputId");
            if (chEle_updated_by.length > 0) {
                this.updated_by = chEle_updated_by.val();
            } 
                

            var chEle_updated_at = $("#updated_atSystemMailTargetSentMailManagementInputId");
            if (chEle_updated_at.length > 0) {
                this.updated_at = chEle_updated_at.val();
            } 
                

            var chEle_email_template = $("#email_templateSystemMailTargetSentMailManagementInputId");
            if (chEle_email_template.length > 0) {
                this.email_template = chEle_email_template.val();
            } 
                

            var chEle_target = $("#targetSystemMailTargetSentMailManagementInputId");
            if (chEle_target.length > 0) {
                this.target = chEle_target.val();
            } 
                

            var chEle_content = $("#contentSystemMailTargetSentMailManagementInputId");
            if (chEle_content.length > 0) {
                this.content = chEle_content.val();
            } 
                

            var chEle_status_code = $("#status_codeSystemMailTargetSentMailManagementInputId");
            if (chEle_status_code.length > 0) {
                this.status_code = chEle_status_code.val();
            } 
                

            var chEle_status_text = $("#status_textSystemMailTargetSentMailManagementInputId");
            if (chEle_status_text.length > 0) {
                this.status_text = chEle_status_text.val();
            } 
                

            var chEle_organization = $("#organizationSystemMailTargetSentMailManagementInputId");
            if (chEle_organization.length > 0) {
                this.organization = chEle_organization.val();
            } 
                

            var chEle_hr_created_by = $("#hr_created_bySystemMailTargetSentMailManagementInputId");
            if (chEle_hr_created_by.length > 0) {
                this.hr_created_by = chEle_hr_created_by.val();
            } 
                

            var chEle_hr_updated_by = $("#hr_updated_bySystemMailTargetSentMailManagementInputId");
            if (chEle_hr_updated_by.length > 0) {
                this.hr_updated_by = chEle_hr_updated_by.val();
            } 
                


        }
    }

    // ########## [FILL FORM] Objects to FRONT END ##############
    tFillForm() {
        var self = this;
        
            try{
                var j_ele_name = $("#nameSystemMailTargetSentMailManagementInputId");
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
                var j_ele_code = $("#codeSystemMailTargetSentMailManagementInputId");
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
                var j_ele_friendly_code = $("#friendly_codeSystemMailTargetSentMailManagementInputId");
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
                var j_ele_created_by = $("#created_bySystemMailTargetSentMailManagementInputId");
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
                var j_ele_created_at = $("#created_atSystemMailTargetSentMailManagementInputId");
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
                var j_ele_updated_by = $("#updated_bySystemMailTargetSentMailManagementInputId");
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
                var j_ele_updated_at = $("#updated_atSystemMailTargetSentMailManagementInputId");
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
                var j_ele_email_template = $("#email_templateSystemMailTargetSentMailManagementInputId");
                    if (j_ele_email_template.length > 0){
                        var email_template_value = self["email_template"]["uuid"];
                        j_ele_email_template.val(email_template_value).change();

                        var email_template_select_value = j_ele_email_template.val();

                        if(email_template_select_value == undefined || email_template_select_value == null){
                            var email_template_name = self["email_template"]["name"];
                            j_ele_email_template.append(new Option(email_template_name, email_template_value,true,true));
                        }
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                setTimeout(()=>{

                    var j_ele_target = $("#targetSystemMailTargetSentMailManagementInputId");
                    if (j_ele_target.length > 0){
                        var arr_value=[];
                        for(var i in self["target"]){
                            arr_value.push(self["target"][i]["uuid"]);
                        }
                        j_ele_target.val(arr_value).change();
                        var target_select_value = j_ele_target.val();

                        if(target_select_value == undefined || target_select_value == null || target_select_value.length == 0){
                            for(var i in self["target"]){
                            
                                arr_value.push(self["target"][i]["uuid"]);
                                var target_value = self["target"][i]["uuid"];
                                var target_name = self["target"][i]["name"];
                                j_ele_target.append(new Option(target_name, target_value,true,true));
                            }
                            
                        }
                    }
                    else{
                        // j_ele_target.val(null);
                    }
                    },100)
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_target = $("#targetSystemMailTargetSentMailManagementInputId");
                if (j_ele_target.length > 0){
                    if (j_ele_target.attr('name') != 'uuid'){
                        j_ele_target.val(self.target).change();
                    }
                }
                else{
                    // j_ele_target.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_content = $("#contentSystemMailTargetSentMailManagementInputId");
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
                    
            try{
                var j_ele_status_code = $("#status_codeSystemMailTargetSentMailManagementInputId");
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
                var j_ele_status_text = $("#status_textSystemMailTargetSentMailManagementInputId");
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
                var j_ele_organization = $("#organizationSystemMailTargetSentMailManagementInputId");
                    if (j_ele_organization.length > 0){
                        var organization_value = self["organization"]["uuid"];
                        j_ele_organization.val(organization_value).change();

                        var organization_select_value = j_ele_organization.val();

                        if(organization_select_value == undefined || organization_select_value == null){
                            var organization_name = self["organization"]["name"];
                            j_ele_organization.append(new Option(organization_name, organization_value,true,true));
                        }
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_hr_created_by = $("#hr_created_bySystemMailTargetSentMailManagementInputId");
                    if (j_ele_hr_created_by.length > 0){
                        var hr_created_by_value = self["hr_created_by"]["uuid"];
                        j_ele_hr_created_by.val(hr_created_by_value).change();

                        var hr_created_by_select_value = j_ele_hr_created_by.val();

                        if(hr_created_by_select_value == undefined || hr_created_by_select_value == null){
                            var hr_created_by_name = self["hr_created_by"]["name"];
                            j_ele_hr_created_by.append(new Option(hr_created_by_name, hr_created_by_value,true,true));
                        }
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_hr_updated_by = $("#hr_updated_bySystemMailTargetSentMailManagementInputId");
                    if (j_ele_hr_updated_by.length > 0){
                        var hr_updated_by_value = self["hr_updated_by"]["uuid"];
                        j_ele_hr_updated_by.val(hr_updated_by_value).change();

                        var hr_updated_by_select_value = j_ele_hr_updated_by.val();

                        if(hr_updated_by_select_value == undefined || hr_updated_by_select_value == null){
                            var hr_updated_by_name = self["hr_updated_by"]["name"];
                            j_ele_hr_updated_by.append(new Option(hr_updated_by_name, hr_updated_by_value,true,true));
                        }
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
                var j_ele_name = $("#nameSystemMailTargetSentMailManagementCreateInputId");
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
                var j_ele_code = $("#codeSystemMailTargetSentMailManagementCreateInputId");
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
                var j_ele_friendly_code = $("#friendly_codeSystemMailTargetSentMailManagementCreateInputId");
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
                var j_ele_created_by = $("#created_bySystemMailTargetSentMailManagementCreateInputId");
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
                var j_ele_created_at = $("#created_atSystemMailTargetSentMailManagementCreateInputId");
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
                var j_ele_updated_by = $("#updated_bySystemMailTargetSentMailManagementCreateInputId");
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
                var j_ele_updated_at = $("#updated_atSystemMailTargetSentMailManagementCreateInputId");
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
                var j_ele_email_template = $("#email_templateSystemMailTargetSentMailManagementCreateInputId");
                    if (j_ele_email_template.length > 0){
                        var email_template_value = self["email_template"]["uuid"];
                        j_ele_email_template.val(email_template_value).change();
                        
                        var email_template_select_value = j_ele_email_template.val();

                        if(email_template_select_value == undefined || email_template_select_value == null){
                        var email_template_name = self["email_template"]["name"];
                            j_ele_email_template.append(new Option(email_template_name, email_template_value,true,true));
                        }
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                setTimeout(
                    ()=>{
                        var j_ele_target = $("#targetSystemMailTargetSentMailManagementCreateInputId");
                        if (j_ele_target.length > 0){
                            var arr_value=[];
                            for(var i in self["target"]){
                                arr_value.push(self["target"][i]["uuid"]);
                            }
                            j_ele_target.val(arr_value).change();
                            var target_select_value = j_ele_target.val();

                            if(target_select_value == undefined || target_select_value == null || target_select_value.length == 0){
                                for(var i in self["target"]){
                                
                                    arr_value.push(self["target"][i]["uuid"]);
                                    var target_value = self["target"][i]["uuid"];
                                    var target_name = self["target"][i]["name"];
                                    j_ele_target.append(new Option(target_name, target_value,true,true));
                                }
                                
                            }
                        }
                        else{
                            // j_ele_target.val(null);
                        }
                    },100)
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_target = $("#targetSystemMailTargetSentMailManagementCreateInputId");
                if (j_ele_target.length > 0){
                    if (j_ele_target.attr('name') != 'uuid'){
                        j_ele_target.val(self.target).change();
                    }
                }
                else{
                    // j_ele_target.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_content = $("#contentSystemMailTargetSentMailManagementCreateInputId");
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
                    
            try{
                var j_ele_status_code = $("#status_codeSystemMailTargetSentMailManagementCreateInputId");
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
                var j_ele_status_text = $("#status_textSystemMailTargetSentMailManagementCreateInputId");
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
                var j_ele_organization = $("#organizationSystemMailTargetSentMailManagementCreateInputId");
                    if (j_ele_organization.length > 0){
                        var organization_value = self["organization"]["uuid"];
                        j_ele_organization.val(organization_value).change();
                        
                        var organization_select_value = j_ele_organization.val();

                        if(organization_select_value == undefined || organization_select_value == null){
                        var organization_name = self["organization"]["name"];
                            j_ele_organization.append(new Option(organization_name, organization_value,true,true));
                        }
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_hr_created_by = $("#hr_created_bySystemMailTargetSentMailManagementCreateInputId");
                    if (j_ele_hr_created_by.length > 0){
                        var hr_created_by_value = self["hr_created_by"]["uuid"];
                        j_ele_hr_created_by.val(hr_created_by_value).change();
                        
                        var hr_created_by_select_value = j_ele_hr_created_by.val();

                        if(hr_created_by_select_value == undefined || hr_created_by_select_value == null){
                        var hr_created_by_name = self["hr_created_by"]["name"];
                            j_ele_hr_created_by.append(new Option(hr_created_by_name, hr_created_by_value,true,true));
                        }
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_hr_updated_by = $("#hr_updated_bySystemMailTargetSentMailManagementCreateInputId");
                    if (j_ele_hr_updated_by.length > 0){
                        var hr_updated_by_value = self["hr_updated_by"]["uuid"];
                        j_ele_hr_updated_by.val(hr_updated_by_value).change();
                        
                        var hr_updated_by_select_value = j_ele_hr_updated_by.val();

                        if(hr_updated_by_select_value == undefined || hr_updated_by_select_value == null){
                        var hr_updated_by_name = self["hr_updated_by"]["name"];
                            j_ele_hr_updated_by.append(new Option(hr_updated_by_name, hr_updated_by_value,true,true));
                        }
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
                var j_ele_name = $("#nameSystemMailTargetSentMailManagementEditInputId");
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
                var j_ele_code = $("#codeSystemMailTargetSentMailManagementEditInputId");
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
                var j_ele_friendly_code = $("#friendly_codeSystemMailTargetSentMailManagementEditInputId");
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
                var j_ele_created_by = $("#created_bySystemMailTargetSentMailManagementEditInputId");
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
                var j_ele_created_at = $("#created_atSystemMailTargetSentMailManagementEditInputId");
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
                var j_ele_updated_by = $("#updated_bySystemMailTargetSentMailManagementEditInputId");
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
                var j_ele_updated_at = $("#updated_atSystemMailTargetSentMailManagementEditInputId");
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
                var j_ele_email_template = $("#email_templateSystemMailTargetSentMailManagementEditInputId");
                    if (j_ele_email_template.length > 0){
                        var email_template_value = self["email_template"]["uuid"];
                        j_ele_email_template.val(email_template_value).change();
                        
                        var email_template_select_value = j_ele_email_template.val();

                        if(email_template_select_value == undefined || email_template_select_value == null){
                        var email_template_name = self["email_template"]["name"];
                            j_ele_email_template.append(new Option(email_template_name, email_template_value,true,true));
                        }
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                setTimeout(
                    ()=>{
                        var j_ele_target = $("#targetSystemMailTargetSentMailManagementEditInputId");
                        if (j_ele_target.length > 0){
                            // var arr_value=[];
                            // for(var i in self["target"]){
                            //     arr_value.push(self["target"][i]["uuid"]);
                            // }
                            // j_ele_target.val(arr_value).change();
                            // var target_select_value = j_ele_target.val();

                            // if(target_select_value == undefined || target_select_value == null || target_select_value.length == 0){
                            //     for(var i in self["target"]){
                                
                            //         arr_value.push(self["target"][i]["uuid"]);
                            //         var target_value = self["target"][i]["uuid"];
                            //         var target_name = self["target"][i]["name"];
                            //         j_ele_target.append(new Option(target_name, target_value,true,true));
                            //     }
                                
                            // }
                            var arr_value = [];
                            var name_list = "";
                            var org_app_prefix = ""
                            if ($("#org_app_prefix").length > 0) {
                                org_app_prefix = $("#org_app_prefix").val();
                            }
                            j_ele_apply_for.html("").change();
                            for (var i in self["target"]) {
        
                                arr_value.push(self["target"][i]["uuid"]);
                                var target_value = self["target"][i]["uuid"];
                                var name_list_detail = `<a href="${org_app_prefix}/EmployeeManagement/Employees/detail/${target_value}/" class="text-gray-600 text-hover-primary me-2"><span class="badge badge-primary">${self["target"][i]["name"]} </span></a>`;
        
        
                                j_ele_apply_for.append(name_list_detail);
                            }
                        }
                        else{
                            // j_ele_target.val(null);
                        }
                    }, 100)
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_target = $("#targetSystemMailTargetSentMailManagementEditInputId");
                if (j_ele_target.length > 0){
                    j_ele_target.attr("allow_tracker_change","false");
                    if (j_ele_target.attr('name') != 'uuid'){
                        j_ele_target.val(self.target).change();
                        j_ele_target.attr("allow_tracker_change","true");
                    }
                }
                else{
                    // j_ele_target.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_content = $("#contentSystemMailTargetSentMailManagementEditInputId");
                if (j_ele_content.length > 0){
                    if (j_ele_content.attr('name') != 'uuid'){
                        if (MPSSystemMailTargetSentMailManagementEditSystemMailTarget_ckeditor_list.hasOwnProperty('#contentSystemMailTargetSentMailManagementEditInputId')){
                            MPSSystemMailTargetSentMailManagementEditSystemMailTarget_ckeditor_list["#contentSystemMailTargetSentMailManagementEditInputId"].setData(self.content);
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
                    
            try{
                var j_ele_status_code = $("#status_codeSystemMailTargetSentMailManagementEditInputId");
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
                var j_ele_status_text = $("#status_textSystemMailTargetSentMailManagementEditInputId");
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
                var j_ele_organization = $("#organizationSystemMailTargetSentMailManagementEditInputId");
                    if (j_ele_organization.length > 0){
                        var organization_value = self["organization"]["uuid"];
                        j_ele_organization.val(organization_value).change();
                        
                        var organization_select_value = j_ele_organization.val();

                        if(organization_select_value == undefined || organization_select_value == null){
                        var organization_name = self["organization"]["name"];
                            j_ele_organization.append(new Option(organization_name, organization_value,true,true));
                        }
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_hr_created_by = $("#hr_created_bySystemMailTargetSentMailManagementEditInputId");
                    if (j_ele_hr_created_by.length > 0){
                        var hr_created_by_value = self["hr_created_by"]["uuid"];
                        j_ele_hr_created_by.val(hr_created_by_value).change();
                        
                        var hr_created_by_select_value = j_ele_hr_created_by.val();

                        if(hr_created_by_select_value == undefined || hr_created_by_select_value == null){
                        var hr_created_by_name = self["hr_created_by"]["name"];
                            j_ele_hr_created_by.append(new Option(hr_created_by_name, hr_created_by_value,true,true));
                        }
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_hr_updated_by = $("#hr_updated_bySystemMailTargetSentMailManagementEditInputId");
                    if (j_ele_hr_updated_by.length > 0){
                        var hr_updated_by_value = self["hr_updated_by"]["uuid"];
                        j_ele_hr_updated_by.val(hr_updated_by_value).change();
                        
                        var hr_updated_by_select_value = j_ele_hr_updated_by.val();

                        if(hr_updated_by_select_value == undefined || hr_updated_by_select_value == null){
                        var hr_updated_by_name = self["hr_updated_by"]["name"];
                            j_ele_hr_updated_by.append(new Option(hr_updated_by_name, hr_updated_by_value,true,true));
                        }
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
                var j_ele_name = $("#nameSystemMailTargetSentMailManagementEditModalInputId");
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
                var j_ele_code = $("#codeSystemMailTargetSentMailManagementEditModalInputId");
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
                var j_ele_friendly_code = $("#friendly_codeSystemMailTargetSentMailManagementEditModalInputId");
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
                var j_ele_created_by = $("#created_bySystemMailTargetSentMailManagementEditModalInputId");
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
                var j_ele_created_at = $("#created_atSystemMailTargetSentMailManagementEditModalInputId");
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
                var j_ele_updated_by = $("#updated_bySystemMailTargetSentMailManagementEditModalInputId");
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
                var j_ele_updated_at = $("#updated_atSystemMailTargetSentMailManagementEditModalInputId");
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
                var j_ele_email_template = $("#email_templateSystemMailTargetSentMailManagementEditModalInputId");
                    if (j_ele_email_template.length > 0){
                        var email_template_value = self["email_template"]["uuid"];
                        j_ele_email_template.val(email_template_value).change();
                        
                        var email_template_select_value = j_ele_email_template.val();

                        if(email_template_select_value == undefined || email_template_select_value == null){
                        var email_template_name = self["email_template"]["name"];
                            j_ele_email_template.append(new Option(email_template_name, email_template_value,true,true));
                        }
                    }
                    var newDiv = $('<div>');
                    newDiv.css('display', 'none');
                    $('body').append(newDiv);
                    newDiv.html(self["email_template"]["content"])
                    var decodedHTML = newDiv.text();
                    newDiv.remove()
                    $("#displaySystemMailTargetSentMailManagementEditModalInputId_textareaId").html(decodedHTML);
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                setTimeout(
                    ()=>{
                        var j_ele_target = $("#targetSystemMailTargetSentMailManagementEditModalInputId");
                        if (j_ele_target.length > 0){
                            var arr_value=[];
                            for(var i in self["target"]){
                                arr_value.push(self["target"][i]["uuid"]);
                            }
                            j_ele_target.val(arr_value).change();
                            var target_select_value = j_ele_target.val();

                            if(target_select_value == undefined || target_select_value == null || target_select_value.length == 0){
                                for(var i in self["target"]){
                                
                                    arr_value.push(self["target"][i]["uuid"]);
                                    var target_value = self["target"][i]["uuid"];
                                    var target_name = self["target"][i]["name"];
                                    j_ele_target.append(new Option(target_name, target_value,true,true));
                                }
                                
                            }
                        }
                        else{
                            // j_ele_target.val(null);
                        }
                    }, 100)
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_target = $("#targetSystemMailTargetSentMailManagementEditModalInputId");
                if (j_ele_target.length > 0){
                    j_ele_target.attr("allow_tracker_change","false");
                    if (j_ele_target.attr('name') != 'uuid'){
                        j_ele_target.val(self.target).change();
                        j_ele_target.attr("allow_tracker_change","true");
                        
                    }
                }
                else{
                    // j_ele_target.val(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_content = $("#contentSystemMailTargetSentMailManagementEditModalInputId");
                if (j_ele_content.length > 0){
                    if (j_ele_content.attr('name') != 'uuid'){
                        if (MPSSystemMailTargetSentMailManagementEditSystemMailTarget_ckeditor_list.hasOwnProperty('#contentSystemMailTargetSentMailManagementEditModalInputId')){
                            MPSSystemMailTargetSentMailManagementEditSystemMailTarget_ckeditor_list["#contentSystemMailTargetSentMailManagementEditModalInputId"].setData(self.content);
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
                    
            try{
                var j_ele_status_code = $("#status_codeSystemMailTargetSentMailManagementEditModalInputId");
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
                var j_ele_status_text = $("#status_textSystemMailTargetSentMailManagementEditModalInputId");
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
                var j_ele_organization = $("#organizationSystemMailTargetSentMailManagementEditModalInputId");
                    if (j_ele_organization.length > 0){
                        var organization_value = self["organization"]["uuid"];
                        j_ele_organization.val(organization_value).change();
                        
                        var organization_select_value = j_ele_organization.val();

                        if(organization_select_value == undefined || organization_select_value == null){
                        var organization_name = self["organization"]["name"];
                            j_ele_organization.append(new Option(organization_name, organization_value,true,true));
                        }
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_hr_created_by = $("#hr_created_bySystemMailTargetSentMailManagementEditModalInputId");
                    if (j_ele_hr_created_by.length > 0){
                        var hr_created_by_value = self["hr_created_by"]["uuid"];
                        j_ele_hr_created_by.val(hr_created_by_value).change();
                        
                        var hr_created_by_select_value = j_ele_hr_created_by.val();

                        if(hr_created_by_select_value == undefined || hr_created_by_select_value == null){
                        var hr_created_by_name = self["hr_created_by"]["name"];
                            j_ele_hr_created_by.append(new Option(hr_created_by_name, hr_created_by_value,true,true));
                        }
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_hr_updated_by = $("#hr_updated_bySystemMailTargetSentMailManagementEditModalInputId");
                    if (j_ele_hr_updated_by.length > 0){
                        var hr_updated_by_value = self["hr_updated_by"]["uuid"];
                        j_ele_hr_updated_by.val(hr_updated_by_value).change();
                        
                        var hr_updated_by_select_value = j_ele_hr_updated_by.val();

                        if(hr_updated_by_select_value == undefined || hr_updated_by_select_value == null){
                        var hr_updated_by_name = self["hr_updated_by"]["name"];
                            j_ele_hr_updated_by.append(new Option(hr_updated_by_name, hr_updated_by_value,true,true));
                        }
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
                var j_ele_name = $("#nameSystemMailTargetSentMailManagementDetailInputId");
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
                var j_ele_code = $("#codeSystemMailTargetSentMailManagementDetailInputId");
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
                var j_ele_friendly_code = $("#friendly_codeSystemMailTargetSentMailManagementDetailInputId");
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
                var j_ele_created_by = $("#created_bySystemMailTargetSentMailManagementDetailInputId");
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
                var j_ele_created_at = $("#created_atSystemMailTargetSentMailManagementDetailInputId");
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
                var j_ele_updated_by = $("#updated_bySystemMailTargetSentMailManagementDetailInputId");
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
                var j_ele_updated_at = $("#updated_atSystemMailTargetSentMailManagementDetailInputId");
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
                var j_ele_email_template = $("#email_templateSystemMailTargetSentMailManagementDetailInputId");
                    if (j_ele_email_template.length > 0){
                    
                        var org_app_prefix = ""
                        if($("#org_app_prefix").length > 0){
                            org_app_prefix = $("#org_app_prefixId").val();
                        }
                        j_ele_email_template.html("").change();
                        var email_template_value = self["email_template"]["uuid"];
                        var email_template_name = `<a href="${org_app_prefix}/SentMailManagement/SystemMailTemplate/detail/${email_template_value}/" class="text-gray-600 text-hover-primary me-2">${self["email_template"]["name"]}</a>`
                        j_ele_email_template.html(email_template_name);
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                setTimeout(()=>{
                    var j_ele_target = $("#targetSystemMailTargetSentMailManagementDetailInputId");
                    if (j_ele_target.length > 0){
                        var arr_value=[];
                        var name_list = "";
                        var org_app_prefix = ""
                        if($("#org_app_prefix").length > 0){
                            org_app_prefix = $("#org_app_prefixId").val();
                        }
                        j_ele_target.html("").change();
                        for(var i in self["target"]){
                        
                            arr_value.push(self["target"][i]["uuid"]);
                            var target_value = self["target"][i]["uuid"];
                            var name_list_detail = `<a href="${org_app_prefix}/HRAccountManagement/HRAccount/detail/${target_value}/" class="text-gray-600 text-hover-primary me-2"><span class="badge badge-primary">${self["target"][i]["name"]} </span></a>`;

                            
                            j_ele_target.append(name_list_detail);
                        }
                            
                    }
                    else{
                        // j_ele_target.html("");
                    }
                },100)
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_target = $("#targetSystemMailTargetSentMailManagementDetailInputId");
                if (j_ele_target.length > 0){
                    if (j_ele_target.attr('name') != 'uuid'){
                        j_ele_target.html(self.target).change();
                    }
                }
                else{
                    // j_ele_target.html(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_content = $("#contentSystemMailTargetSentMailManagementDetailInputId");
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
                    
            try{
                var j_ele_status_code = $("#status_codeSystemMailTargetSentMailManagementDetailInputId");
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
                var j_ele_status_text = $("#status_textSystemMailTargetSentMailManagementDetailInputId");
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
                var j_ele_organization = $("#organizationSystemMailTargetSentMailManagementDetailInputId");
                    if (j_ele_organization.length > 0){
                    
                        var org_app_prefix = ""
                        if($("#org_app_prefix").length > 0){
                            org_app_prefix = $("#org_app_prefixId").val();
                        }
                        j_ele_organization.html("").change();
                        var organization_value = self["organization"]["uuid"];
                        var organization_name = `<a href="${org_app_prefix}/SystemOrganizationManagement/Organization/detail/${organization_value}/" class="text-gray-600 text-hover-primary me-2">${self["organization"]["name"]}</a>`
                        j_ele_organization.html(organization_name);
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_hr_created_by = $("#hr_created_bySystemMailTargetSentMailManagementDetailInputId");
                    if (j_ele_hr_created_by.length > 0){
                    
                        var org_app_prefix = ""
                        if($("#org_app_prefix").length > 0){
                            org_app_prefix = $("#org_app_prefixId").val();
                        }
                        j_ele_hr_created_by.html("").change();
                        var hr_created_by_value = self["hr_created_by"]["uuid"];
                        var hr_created_by_name = `<a href="${org_app_prefix}/HRAccountManagement/HRAccount/detail/${hr_created_by_value}/" class="text-gray-600 text-hover-primary me-2">${self["hr_created_by"]["name"]}</a>`
                        j_ele_hr_created_by.html(hr_created_by_name);
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_hr_updated_by = $("#hr_updated_bySystemMailTargetSentMailManagementDetailInputId");
                    if (j_ele_hr_updated_by.length > 0){
                    
                        var org_app_prefix = ""
                        if($("#org_app_prefix").length > 0){
                            org_app_prefix = $("#org_app_prefixId").val();
                        }
                        j_ele_hr_updated_by.html("").change();
                        var hr_updated_by_value = self["hr_updated_by"]["uuid"];
                        var hr_updated_by_name = `<a href="${org_app_prefix}/HRAccountManagement/HRAccount/detail/${hr_updated_by_value}/" class="text-gray-600 text-hover-primary me-2">${self["hr_updated_by"]["name"]}</a>`
                        j_ele_hr_updated_by.html(hr_updated_by_name);
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
            setTimeout(
                ()=>{
                    var j_ele_target = $("#targetSystemMailTargetSentMailManagementDetailModalInputId");
                    if (j_ele_target.length > 0){
                        var arr_value=[];
                        for(var i in self["target"]){
                            arr_value.push(self["target"][i]["uuid"]);
                        }
                        j_ele_target.val(arr_value).change();
                        var target_select_value = j_ele_target.val();

                        if(target_select_value == undefined || target_select_value == null || target_select_value.length == 0){
                            for(var i in self["target"]){
                            
                                arr_value.push(self["target"][i]["uuid"]);
                                var target_value = self["target"][i]["uuid"];
                                var target_name = self["target"][i]["name"];
                                j_ele_target.append(new Option(target_name, target_value,true,true));
                            }
                            
                        }
                    }
                    else{
                        // j_ele_target.val(null);
                    }
                }, 100)
        }
        catch(err) {
            console.log('err = ', err);
        }
            try{
                var j_ele_name = $("#nameSystemMailTargetSentMailManagementDetailModalInputId");
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
                var j_ele_code = $("#codeSystemMailTargetSentMailManagementDetailModalInputId");
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
                var j_ele_friendly_code = $("#friendly_codeSystemMailTargetSentMailManagementDetailModalInputId");
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
                var j_ele_created_by = $("#created_bySystemMailTargetSentMailManagementDetailModalInputId");
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
                var j_ele_created_at = $("#created_atSystemMailTargetSentMailManagementDetailModalInputId");
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
                var j_ele_updated_by = $("#updated_bySystemMailTargetSentMailManagementDetailModalInputId");
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
                var j_ele_updated_at = $("#updated_atSystemMailTargetSentMailManagementDetailModalInputId");
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
                var j_ele_email_template = $("#email_templateSystemMailTargetSentMailManagementDetailModalInputId");
                    if (j_ele_email_template.length > 0){
                    
                        var org_app_prefix = ""
                        if($("#org_app_prefix").length > 0){
                            org_app_prefix = $("#org_app_prefixId").val();
                        }
                        j_ele_email_template.html("").change();
                        var email_template_value = self["email_template"]["uuid"];
                        var email_template_name = `<a href="${org_app_prefix}/SentMailManagement/SystemMailTemplate/detail/${email_template_value}/" class="text-gray-600 text-hover-primary me-2">${self["email_template"]["name"]}</a>`
                        j_ele_email_template.html(email_template_name);


                        // var newDiv = $('<div>');
                        // newDiv.css('display', 'none');
                        // $('body').append(newDiv);
                        // newDiv.html(self["email_template"]["content"])
                        // var decodedHTML = newDiv.text();
                        // newDiv.remove()
                        // $("#displaySystemMailTargetSentMailManagementDetailModalInputId_textareaId").html(decodedHTML);

                        var inputContent = self["email_template"]["content"];
                        var iframeContent = $('#displaySystemMailTargetSentMailManagementDetailModalInputId_textareaId')[0].contentDocument;
                        iframeContent.open();
                        iframeContent.write(inputContent);
                        iframeContent.close();
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                setTimeout(()=>{
                    var j_ele_target = $("#targetSystemMailTargetSentMailManagementDetailModalInputId");
                    if (j_ele_target.length > 0){
                        var arr_value=[];
                        var name_list = "";
                        var org_app_prefix = ""
                        if($("#org_app_prefix").length > 0){
                            org_app_prefix = $("#org_app_prefixId").val();
                        }
                        j_ele_target.html("").change();
                        for(var i in self["target"]){
                        
                            arr_value.push(self["target"][i]["uuid"]);
                            var target_value = self["target"][i]["uuid"];
                            var name_list_detail = `<a href="${org_app_prefix}/HRAccountManagement/HRAccount/detail/${target_value}/" class="text-gray-600 text-hover-primary me-2"><span class="badge badge-primary">${self["target"][i]["name"]} </span></a>`;

                            
                            j_ele_target.append(name_list_detail);
                        }
                            
                    }
                    else{
                        // j_ele_target.html("");
                    }
                },100)
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_target = $("#targetSystemMailTargetSentMailManagementDetailModalInputId");
                if (j_ele_target.length > 0){
                    if (j_ele_target.attr('name') != 'uuid'){
                        j_ele_target.html(self.target).change();
                    }
                }
                else{
                    // j_ele_target.html(null);
                }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_content = $("#contentSystemMailTargetSentMailManagementDetailModalInputId");
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
                    
            try{
                var j_ele_status_code = $("#status_codeSystemMailTargetSentMailManagementDetailModalInputId");
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
                var j_ele_status_text = $("#status_textSystemMailTargetSentMailManagementDetailModalInputId");
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
                var j_ele_organization = $("#organizationSystemMailTargetSentMailManagementDetailModalInputId");
                    if (j_ele_organization.length > 0){
                    
                        var org_app_prefix = ""
                        if($("#org_app_prefix").length > 0){
                            org_app_prefix = $("#org_app_prefixId").val();
                        }
                        j_ele_organization.html("").change();
                        var organization_value = self["organization"]["uuid"];
                        var organization_name = `<a href="${org_app_prefix}/SystemOrganizationManagement/Organization/detail/${organization_value}/" class="text-gray-600 text-hover-primary me-2">${self["organization"]["name"]}</a>`
                        j_ele_organization.html(organization_name);
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_hr_created_by = $("#hr_created_bySystemMailTargetSentMailManagementDetailModalInputId");
                    if (j_ele_hr_created_by.length > 0){
                    
                        var org_app_prefix = ""
                        if($("#org_app_prefix").length > 0){
                            org_app_prefix = $("#org_app_prefixId").val();
                        }
                        j_ele_hr_created_by.html("").change();
                        var hr_created_by_value = self["hr_created_by"]["uuid"];
                        var hr_created_by_name = `<a href="${org_app_prefix}/HRAccountManagement/HRAccount/detail/${hr_created_by_value}/" class="text-gray-600 text-hover-primary me-2">${self["hr_created_by"]["name"]}</a>`
                        j_ele_hr_created_by.html(hr_created_by_name);
                    }
            }
            catch(err) {
                console.log('err = ', err);
            }
                    
            try{
                var j_ele_hr_updated_by = $("#hr_updated_bySystemMailTargetSentMailManagementDetailModalInputId");
                    if (j_ele_hr_updated_by.length > 0){
                    
                        var org_app_prefix = ""
                        if($("#org_app_prefix").length > 0){
                            org_app_prefix = $("#org_app_prefixId").val();
                        }
                        j_ele_hr_updated_by.html("").change();
                        var hr_updated_by_value = self["hr_updated_by"]["uuid"];
                        var hr_updated_by_name = `<a href="${org_app_prefix}/HRAccountManagement/HRAccount/detail/${hr_updated_by_value}/" class="text-gray-600 text-hover-primary me-2">${self["hr_updated_by"]["name"]}</a>`
                        j_ele_hr_updated_by.html(hr_updated_by_name);
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
            formData = new FormData($('#SystemMailTargetSentMailManagementCreateFormId')[0]);
            form = $('#SystemMailTargetSentMailManagementCreateFormId');

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

        var file_eles = $(".SystemMailTarget-SentMailManagement");
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
                url: SYSTEMMAILTARGETSENTMAILMANAGEMENT_UPDATE_URL + self.uuid + "/",
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
                    self = new SystemMailTargetSentMailManagement(data);
                    self.tDatatableUpdateRow();
                    //SystemMailTargetSentMailManagementGetDataTable(SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["current_page"])
                    //$(location).prop('href', "/SentMailManagement/SystemMailTarget/detail/" + self.uuid + "/");
                    if (systemmailtargetsentmailmanagement_is_continue_form) {
                        systemmailtargetsentmailmanagement_is_continue_form = false;
                        if (!is_notification && (is_done || !is_has_children)) {
                            is_notification = true;
                            //$model_notice_update_success
                        }
                        
                     
                    } else if (systemmailtargetsentmailmanagement_is_continue_modal) {
                        systemmailtargetsentmailmanagement_is_continue_modal = false;
                        //SystemMailTargetRefreshCreateModal();
                        if (!is_notification && (is_done || !is_has_children)) {
                            is_notification = true;
                            //$model_notice_update_success
                        }
                    } else if (systemmailtargetsentmailmanagement_is_continue_back_last_url) {
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
                    // window[model_name + "SaveInlineTable"](element.attr("id"), null, self.uuid);
                }
            });
            is_done = true;
        }
        if (is_done || !is_has_children) {
            if (systemmailtargetsentmailmanagement_is_continue_form) {
                systemmailtargetsentmailmanagement_is_continue_form = false;
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
                    $(location).prop('href', `${org_app_prefixId}/SentMailManagement/SystemMailTarget/detail/${self.uuid}/`);
                }
            } else if (systemmailtargetsentmailmanagement_is_continue_modal) {
                systemmailtargetsentmailmanagement_is_continue_modal = false;
                //SystemMailTargetRefreshCreateModal();
                if (!is_notification && (is_done || !is_has_children)) {
                    is_notification = true;
                    //$model_notice_update_success
                }
            } else if (systemmailtargetsentmailmanagement_is_continue_back_last_url) {
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
        $('#idSystemMailTargetSentMailManagementInputId').val(null);
        $('#uuidSystemMailTargetSentMailManagementInputId').val(uuidv4());
        var self = this;
        var formData;
        var arr_table = [];
        if (formId == null) {
            formId = 'SystemMailTargetSentMailManagementCreateFormId';
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

        var file_eles = $(".SystemMailTarget-SentMailManagement");
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
        // console.log("huy------------------>", formData);

        if (is_save_self_table) {
            LoadSystemMailTargetSentMailManagementTableDataList();
        }
        if (!is_save_self_table) {
            this.callAjax = $.ajax({
                url: SYSTEMMAILTARGETSENTMAILMANAGEMENT_CREATE_URL,
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
                    // console.log("huy--------->data", data);
                    self = new SystemMailTargetSentMailManagement(data);
                    
                    // self.tDatatableAddRow();
                    //LoadSystemMailTargetSentMailManagementTableDataList();
                    //SystemMailTargetSentMailManagementGetDataTable(SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["current_page"]);
                    if (systemmailtargetsentmailmanagement_is_continue_form) {
                        systemmailtargetsentmailmanagement_is_continue_form = false;
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
                            $(location).prop('href', `${org_app_prefixId}/SentMailManagement/SystemMailTarget/detail/${self.uuid}/`);
                        }
                    } else if (systemmailtargetsentmailmanagement_is_continue_modal) {
                        systemmailtargetsentmailmanagement_is_continue_modal = false;
                        //SystemMailTargetRefreshCreateModal();
                        if (!is_notification) {
                            is_notification = true;
                            //model_notice_create_success;
                        }
                    } else if (systemmailtargetsentmailmanagement_is_continue_back_last_url) {
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
                    // window[model_name + "SaveInlineTable"](element.attr("id"), null, self.uuid);
                }
            });
            is_done = true;
        }
        if (is_done || !is_has_children) {
            if (systemmailtargetsentmailmanagement_is_continue_form) {
                systemmailtargetsentmailmanagement_is_continue_form = false;
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
                    $(location).prop('href', `${org_app_prefixId}/SentMailManagement/SystemMailTarget/detail/${self.uuid}/`);
                }
            } else if (systemmailtargetsentmailmanagement_is_continue_modal) {
                systemmailtargetsentmailmanagement_is_continue_modal = false;
                //SystemMailTargetRefreshCreateModal();
                if (!is_notification) {
                    is_notification = true;
                    //model_notice_create_success;
                }
            } else if (systemmailtargetsentmailmanagement_is_continue_back_last_url) {
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
            url: SYSTEMMAILTARGETSENTMAILMANAGEMENT_CREATE_URL,
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
            url: SYSTEMMAILTARGETSENTMAILMANAGEMENT_CREATE_URL,
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
            url: SYSTEMMAILTARGETSENTMAILMANAGEMENT_UPDATE_URL + uuid + "/",
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
            url: SYSTEMMAILTARGETSENTMAILMANAGEMENT_DELETE_URL + uuid_go + "/",
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
                    // $(location).prop('href', `${org_app_prefixId}/SentMailManagement/SystemMailTarget/create/`);
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
            url: SYSTEMMAILTARGETSENTMAILMANAGEMENT_DELETE_URL + uuid_go + "/",
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
                    // $(location).prop('href', `${org_app_prefixId}/SentMailManagement/SystemMailTarget/create/`);
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
            url: SYSTEMMAILTARGETSENTMAILMANAGEMENT_REMOVEFILE_URL + uuid + "/",
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
            url: SYSTEMMAILTARGETSENTMAILMANAGEMENT_UPDATE_URL + uuid + "/",
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
        
        var CRR_SYSTEMMAILTARGETSENTMAILMANAGEMENT_GET_DATATABLE_STANDARD_URL = SYSTEMMAILTARGETSENTMAILMANAGEMENT_GET_DATATABLE_STANDARD_URL
        if (SYSTEMMAILTARGETSENTMAILMANAGEMENT_LOAD_MEMCACHE == true){
            CRR_SYSTEMMAILTARGETSENTMAILMANAGEMENT_GET_DATATABLE_STANDARD_URL = SYSTEMMAILTARGETSENTMAILMANAGEMENT_GET_DATATABLE_STANDARD_URL_OPT
        }
        this.callAjax =
            $.ajax({
                url: CRR_SYSTEMMAILTARGETSENTMAILMANAGEMENT_GET_DATATABLE_STANDARD_URL + has_go_page,
                type: "GET",
                //async: false,
                cache: false,
                timeout: 30000,

                success: function(data) {
                    // console.log('[tGetDataTableApi] data = ', data);
                    // return new SystemMailTargetSentMailManagement(data);
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('next')) {
                        if (data.next != null) {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_next"] = true;
                        } else {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_next"] = false;

                        }
                    }
                    SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["current_page"] = page;
                    if (data.hasOwnProperty('previous')) {
                        if (data.previous != null) {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_prev"] = true;
                        } else {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_prev"] = false;
                        }
                    }
                    if (data.hasOwnProperty('results')) {
                        for (var j = 0; j < data.results.length; j++) {
                            var tmp = new SystemMailTargetSentMailManagement(data.results[j]);
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
        
        var CRR_SYSTEMMAILTARGETSENTMAILMANAGEMENT_GET_DATATABLE_MEDIUM_URL = SYSTEMMAILTARGETSENTMAILMANAGEMENT_GET_DATATABLE_MEDIUM_URL
        if (SYSTEMMAILTARGETSENTMAILMANAGEMENT_LOAD_MEMCACHE == true){
            CRR_SYSTEMMAILTARGETSENTMAILMANAGEMENT_GET_DATATABLE_MEDIUM_URL = SYSTEMMAILTARGETSENTMAILMANAGEMENT_GET_DATATABLE_MEDIUM_URL_OPT
        }
        this.callAjax =
            $.ajax({
                url: CRR_SYSTEMMAILTARGETSENTMAILMANAGEMENT_GET_DATATABLE_MEDIUM_URL + has_go_page,
                type: "GET",
                //async: false,
                cache: false,
                timeout: 30000,

                success: function(data) {
                    console.log('[tGetDataTableMediumApi] data = ', data);
                    // return new SystemMailTargetSentMailManagement(data);
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('next')) {
                        if (data.next != null) {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_next"] = true;
                        } else {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_next"] = false;

                        }
                    }
                    SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["current_page"] = page;
                    if (data.hasOwnProperty('previous')) {
                        if (data.previous != null) {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_prev"] = true;
                        } else {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_prev"] = false;
                        }
                    }
                    if (data.hasOwnProperty('results')) {
                        for (var j = 0; j < data.results.length; j++) {
                            var tmp = new SystemMailTargetSentMailManagement(data.results[j]);
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
        
        var CRR_SYSTEMMAILTARGETSENTMAILMANAGEMENT_GET_DATATABLE_LARGE_URL = SYSTEMMAILTARGETSENTMAILMANAGEMENT_GET_DATATABLE_LARGE_URL
        if (SYSTEMMAILTARGETSENTMAILMANAGEMENT_LOAD_MEMCACHE == true){
            CRR_SYSTEMMAILTARGETSENTMAILMANAGEMENT_GET_DATATABLE_LARGE_URL = SYSTEMMAILTARGETSENTMAILMANAGEMENT_GET_DATATABLE_LARGE_URL_OPT
        }
        this.callAjax =
            $.ajax({
                url: CRR_SYSTEMMAILTARGETSENTMAILMANAGEMENT_GET_DATATABLE_LARGE_URL + has_go_page,
                type: "GET",
                //async: false,
                cache: false,
                timeout: 30000,

                success: function(data) {
                    console.log('[tGetDataTableLargeApi] data = ', data);
                    // return new SystemMailTargetSentMailManagement(data);
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('next')) {
                        if (data.next != null) {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_next"] = true;
                        } else {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_next"] = false;

                        }
                    }
                    SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["current_page"] = page;
                    if (data.hasOwnProperty('previous')) {
                        if (data.previous != null) {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_prev"] = true;
                        } else {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_prev"] = false;
                        }
                    }
                    if (data.hasOwnProperty('results')) {
                        for (var j = 0; j < data.results.length; j++) {
                            var tmp = new SystemMailTargetSentMailManagement(data.results[j]);
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
                url: SYSTEMMAILTARGETSENTMAILMANAGEMENT_GET_DETAIL_STANDARD_URL + has_go_page,
                type: "GET",
                //async: false,
                cache: false,
                timeout: 30000,

                success: function(data) {
                    // console.log('[tGetDataTableApi] data = ', data);
                    // return new SystemMailTargetSentMailManagement(data);
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('next')) {
                        if (data.next != null) {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_next"] = true;
                        } else {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_next"] = false;

                        }
                    }
                    SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["current_page"] = page;
                    if (data.hasOwnProperty('previous')) {
                        if (data.previous != null) {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_prev"] = true;
                        } else {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_prev"] = false;
                        }
                    }
                    if (data.hasOwnProperty('results')) {
                        for (var j = 0; j < data.results.length; j++) {
                            var tmp = new SystemMailTargetSentMailManagement(data.results[j]);
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
                url: SYSTEMMAILTARGETSENTMAILMANAGEMENT_GET_DETAIL_MEDIUM_URL + has_go_page,
                type: "GET",
                //async: false,
                cache: false,
                timeout: 30000,

                success: function(data) {
                    console.log('[tGetDataTableMediumApi] data = ', data);
                    // return new SystemMailTargetSentMailManagement(data);
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('next')) {
                        if (data.next != null) {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_next"] = true;
                        } else {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_next"] = false;

                        }
                    }
                    SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["current_page"] = page;
                    if (data.hasOwnProperty('previous')) {
                        if (data.previous != null) {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_prev"] = true;
                        } else {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_prev"] = false;
                        }
                    }
                    if (data.hasOwnProperty('results')) {
                        for (var j = 0; j < data.results.length; j++) {
                            var tmp = new SystemMailTargetSentMailManagement(data.results[j]);
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
                url: SYSTEMMAILTARGETSENTMAILMANAGEMENT_GET_DETAIL_LARGE_URL + has_go_page,
                type: "GET",
                //async: false,
                cache: false,
                timeout: 30000,

                success: function(data) {
                    console.log('[tGetDataTableLargeApi] data = ', data);
                    // return new SystemMailTargetSentMailManagement(data);
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('next')) {
                        if (data.next != null) {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_next"] = true;
                        } else {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_next"] = false;

                        }
                    }
                    SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["current_page"] = page;
                    if (data.hasOwnProperty('previous')) {
                        if (data.previous != null) {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_prev"] = true;
                        } else {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_prev"] = false;
                        }
                    }
                    if (data.hasOwnProperty('results')) {
                        for (var j = 0; j < data.results.length; j++) {
                            var tmp = new SystemMailTargetSentMailManagement(data.results[j]);
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

            
            ///slugSearch+="&search="+$("#SystemMailTargetSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtargetsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailTargetSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtargetsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailTargetSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtargetsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailTargetSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtargetsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailTargetSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtargetsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailTargetSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtargetsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailTargetSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtargetsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailTargetSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtargetsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailTargetSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtargetsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailTargetSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtargetsentmailmanagement-table-filter="search"]').val();
            
                    ;
        }
        else{
            slugSearch = search_data;
        }
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["data"] = slugSearch;
        
        var CRR_SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_STANDARD_URL = SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_STANDARD_URL
        if (SYSTEMMAILTARGETSENTMAILMANAGEMENT_LOAD_MEMCACHE == true){
            CRR_SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_STANDARD_URL = SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_STANDARD_URL_OPT
        }
        this.callAjax =
            $.ajax({
                url: CRR_SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_STANDARD_URL + has_go_page + slugSearch,
                type: "GET",
                //async: false,
                cache: false,
                timeout: 30000,

                success: function(data) {
                    // console.log('[tGetDataTableApi] data = ', data);
                    // return new SystemMailTargetSentMailManagement(data);
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('next')) {
                        if (data.next != null) {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_next"] = true;
                        } else {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_next"] = false;

                        }
                    }
                    SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["current_page"] = page;
                    if (data.hasOwnProperty('previous')) {
                        if (data.previous != null) {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_prev"] = true;
                        } else {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_prev"] = false;
                        }
                    }
                    if (data.hasOwnProperty('results')) {
                        for (var j = 0; j < data.results.length; j++) {
                            var tmp = new SystemMailTargetSentMailManagement(data.results[j]);
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

            
            ///slugSearch+="&search="+$("#SystemMailTargetSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtargetsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailTargetSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtargetsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailTargetSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtargetsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailTargetSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtargetsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailTargetSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtargetsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailTargetSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtargetsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailTargetSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtargetsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailTargetSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtargetsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailTargetSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtargetsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailTargetSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtargetsentmailmanagement-table-filter="search"]').val();
            
                    ;
        }
        else{
            slugSearch = search_data;
        }
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["data"] = slugSearch;
        
        var CRR_SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_MEDIUM_URL = SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_MEDIUM_URL
        if (SYSTEMMAILTARGETSENTMAILMANAGEMENT_LOAD_MEMCACHE == true){
            CRR_SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_MEDIUM_URL = SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_MEDIUM_URL_OPT
        }
        this.callAjax =
            $.ajax({
                url: CRR_SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_MEDIUM_URL + has_go_page + slugSearch,
                type: "GET",
                //async: false,
                cache: false,
                timeout: 30000,

                success: function(data) {
                    // console.log('[tGetDataTableApi] data = ', data);
                    // return new SystemMailTargetSentMailManagement(data);
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('next')) {
                        if (data.next != null) {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_next"] = true;
                        } else {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_next"] = false;

                        }
                    }
                    SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["current_page"] = page;
                    if (data.hasOwnProperty('previous')) {
                        if (data.previous != null) {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_prev"] = true;
                        } else {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_prev"] = false;
                        }
                    }
                    if (data.hasOwnProperty('results')) {
                        for (var j = 0; j < data.results.length; j++) {
                            var tmp = new SystemMailTargetSentMailManagement(data.results[j]);
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

            
            ///slugSearch+="&search="+$("#SystemMailTargetSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtargetsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailTargetSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtargetsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailTargetSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtargetsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailTargetSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtargetsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailTargetSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtargetsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailTargetSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtargetsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailTargetSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtargetsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailTargetSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtargetsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailTargetSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtargetsentmailmanagement-table-filter="search"]').val();
            
                    
            ///slugSearch+="&search="+$("#SystemMailTargetSentMailManagementQuickSearchInputId").val();
            var slugSearch = "";
            slugSearch += "&search="+$('[systemmailtargetsentmailmanagement-table-filter="search"]').val();
            
                    ;
        }
        else{
            slugSearch = search_data;
        }
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["data"] = slugSearch;
        
        var CRR_SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LARGE_URL = SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LARGE_URL
        if (SYSTEMMAILTARGETSENTMAILMANAGEMENT_LOAD_MEMCACHE == true){
            CRR_SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LARGE_URL = SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LARGE_URL_OPT
        }
        this.callAjax =
            $.ajax({
                url: CRR_SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LARGE_URL + has_go_page + slugSearch,
                type: "GET",
                //async: false,
                cache: false,
                timeout: 30000,

                success: function(data) {
                    // console.log('[tGetDataTableApi] data = ', data);
                    // return new SystemMailTargetSentMailManagement(data);
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('next')) {
                        if (data.next != null) {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_next"] = true;
                        } else {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_next"] = false;

                        }
                    }
                    SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["current_page"] = page;
                    if (data.hasOwnProperty('previous')) {
                        if (data.previous != null) {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_prev"] = true;
                        } else {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_prev"] = false;
                        }
                    }
                    if (data.hasOwnProperty('results')) {
                        for (var j = 0; j < data.results.length; j++) {
                            var tmp = new SystemMailTargetSentMailManagement(data.results[j]);
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
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["data"] = slugSearch;
        
        var CRR_SYSTEMMAILTARGETSENTMAILMANAGEMENT_FILTER_STANDARD_URL = SYSTEMMAILTARGETSENTMAILMANAGEMENT_FILTER_STANDARD_URL
        if (SYSTEMMAILTARGETSENTMAILMANAGEMENT_LOAD_MEMCACHE == true){
            CRR_SYSTEMMAILTARGETSENTMAILMANAGEMENT_FILTER_STANDARD_URL = SYSTEMMAILTARGETSENTMAILMANAGEMENT_FILTER_STANDARD_URL_OPT
        }
        this.callAjax =
            $.ajax({
                url: CRR_SYSTEMMAILTARGETSENTMAILMANAGEMENT_FILTER_STANDARD_URL + has_go_page + slugSearch,
                type: "GET",
                //async: false,
                cache: false,
                timeout: 30000,

                success: function(data) {
                    // console.log('[tGetDataTableApi] data = ', data);
                    // return new SystemMailTargetSentMailManagement(data);
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('next')) {
                        if (data.next != null) {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_next"] = true;
                        } else {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_next"] = false;

                        }
                    }
                    SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["current_page"] = page;
                    if (data.hasOwnProperty('previous')) {
                        if (data.previous != null) {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_prev"] = true;
                        } else {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_prev"] = false;
                        }
                    }
                    if (data.hasOwnProperty('results')) {
                        for (var j = 0; j < data.results.length; j++) {
                            var tmp = new SystemMailTargetSentMailManagement(data.results[j]);
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
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["data"] = slugSearch;
        
        var CRR_SYSTEMMAILTARGETSENTMAILMANAGEMENT_FILTER_MEDIUM_URL = SYSTEMMAILTARGETSENTMAILMANAGEMENT_FILTER_MEDIUM_URL
        if (SYSTEMMAILTARGETSENTMAILMANAGEMENT_LOAD_MEMCACHE == true){
            CRR_SYSTEMMAILTARGETSENTMAILMANAGEMENT_FILTER_MEDIUM_URL = SYSTEMMAILTARGETSENTMAILMANAGEMENT_FILTER_MEDIUM_URL_OPT
        }
        this.callAjax =
            $.ajax({
                url: CRR_SYSTEMMAILTARGETSENTMAILMANAGEMENT_FILTER_MEDIUM_URL + has_go_page + slugSearch,
                type: "GET",
                //async: false,
                cache: false,
                timeout: 30000,

                success: function(data) {
                    // console.log('[tGetDataTableApi] data = ', data);
                    // return new SystemMailTargetSentMailManagement(data);
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('next')) {
                        if (data.next != null) {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_next"] = true;
                        } else {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_next"] = false;

                        }
                    }
                    SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["current_page"] = page;
                    if (data.hasOwnProperty('previous')) {
                        if (data.previous != null) {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_prev"] = true;
                        } else {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_prev"] = false;
                        }
                    }
                    if (data.hasOwnProperty('results')) {
                        for (var j = 0; j < data.results.length; j++) {
                            var tmp = new SystemMailTargetSentMailManagement(data.results[j]);
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
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["data"] = slugSearch;
        
        var CRR_SYSTEMMAILTARGETSENTMAILMANAGEMENT_FILTER_LARGE_URL = SYSTEMMAILTARGETSENTMAILMANAGEMENT_FILTER_LARGE_URL
        if (SYSTEMMAILTARGETSENTMAILMANAGEMENT_LOAD_MEMCACHE == true){
            CRR_SYSTEMMAILTARGETSENTMAILMANAGEMENT_FILTER_LARGE_URL = SYSTEMMAILTARGETSENTMAILMANAGEMENT_FILTER_LARGE_URL_OPT
        }
        this.callAjax =
            $.ajax({
                url: CRR_SYSTEMMAILTARGETSENTMAILMANAGEMENT_FILTER_LARGE_URL + has_go_page + slugSearch,
                type: "GET",
                //async: false,
                cache: false,
                timeout: 30000,

                success: function(data) {
                    // console.log('[tGetDataTableApi] data = ', data);
                    // return new SystemMailTargetSentMailManagement(data);
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('count')) {
                        SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["total"] = data.count;
                    }
                    if (data.hasOwnProperty('next')) {
                        if (data.next != null) {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_next"] = true;
                        } else {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_next"] = false;

                        }
                    }
                    SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["current_page"] = page;
                    if (data.hasOwnProperty('previous')) {
                        if (data.previous != null) {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_prev"] = true;
                        } else {
                            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["has_prev"] = false;
                        }
                    }
                    if (data.hasOwnProperty('results')) {
                        for (var j = 0; j < data.results.length; j++) {
                            var tmp = new SystemMailTargetSentMailManagement(data.results[j]);
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
                url: SYSTEMMAILTARGETSENTMAILMANAGEMENT_GET_DETAIL_STANDARD_URL + uuid + "/",
                type: "GET",
                async: false,
                cache: false,
                timeout: 30000,

                success: function(data) {
                    console.log('[tGetObjApi] data = ', data);
                    var n_obj = new SystemMailTargetSentMailManagement(data);
                    console.log('n_obj = ', n_obj);
                    n_obj.tFillForm();
                    return n_obj;
                    // if (data.hasOwnProperty('results')){
                    //    if (data.results.length > 0){
                    //        var tmp = new SystemMailTargetSentMailManagement(data[i]);
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
        var tbId = "SystemMailTargetSentMailManagementExportTableId";
        if (tableId != null) {
            tbId = tableId;
        }

        if (order == null && SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT != undefined && SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT != null) {
            order = SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT;
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
                
                    if(attr=="email_template"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
                        }
                        else{
                            row_data[col_num] = '';

                        }
                        continue;
                    }
        
                    if(attr=="target"){


                        if(this[attr] != undefined && this[attr] !== "None"){       
                            var all_name="";
                            for(var i in this[attr]){
                                var name = this[attr][i]["name"];
                                if (name == undefined){
                                    name = ""
                                }
                                all_name+= name+",";
                            }
                            row_data[col_num] = (all_name);       
                        }
                        else{
                            row_data[col_num] = '';

                        }

                            continue;
                    }
                    

                    if(attr=="target"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
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
                
                    if(attr=="organization"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
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
        
                    row_data[col_num] = this[attr];
                } 
                else {
                    if(attr=="SystemMailTargetSentMailManagement-admin-action")
                    {
                        var action = BindActionButtonVer4(
                            SystemMailTargetSentMailManagement_arr_action,
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
                
                    if(attr=="email_template"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
                        }
                        else{
                            row_data[col_num] = '';

                        }
                        continue;
                    }
        
                    if(attr=="target"){


                        if(this[attr] != undefined && this[attr] !== "None"){       
                            var all_name="";
                            for(var i in this[attr]){
                                var name = this[attr][i]["name"];
                                if (name == undefined){
                                    name = ""
                                }
                                all_name+= name+",";
                            }
                            row_data[col_num] = (all_name);       
                        }
                        else{
                            row_data[col_num] = '';

                        }

                            continue;
                    }
                    

                    if(attr=="target"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
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
                
                    if(attr=="organization"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
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
        
                    row_data[col_num] = '';
                }

            }

            //arr_row_data.push(row_data)
            systemmailtargetsentmailmanagement_exportdatatable.row.add(row_data).node().id = this["uuid"];
            systemmailtargetsentmailmanagement_exportdatatable.draw(false);
            return true;
        } else {
            console.log('Not found dataTable Id: ,', tbId);
            return false;
        }
    }
    // Add row by row of list result 
    tDatatableAddRow(tableId = null, order = null) {
        var tbId = "SystemMailTargetSentMailManagementTableId";
        if (tableId != null) {
            tbId = tableId;
        }

        if (order == null && SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT != undefined && SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT != null) {
            order = SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT;
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
                
                    if(attr=="email_template"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
                        }
                        else{
                            row_data[col_num] = '';

                        }
                        continue;
                    }
        
                    if(attr=="target"){


                        if(this[attr] != undefined && this[attr] !== "None"){       
                            var all_name="";
                            for(var i in this[attr]){
                                var name = this[attr][i]["name"];
                                if (name == undefined){
                                    name = ""
                                }
                                all_name+= name+",";
                            }
                            row_data[col_num] = (all_name);       
                        }
                        else{
                            row_data[col_num] = '';

                        }

                            continue;
                    }
                    

                    // if(attr=="target"){
                        
                    //     if(this[attr] != undefined && this[attr] !== "None"){
                    //         row_data[col_num] = (this[attr]);
                    //     }
                    //     else{
                    //         row_data[col_num] = '';

                    //     }


                    //     continue;
                    // }
                

                    if(attr=="content"){
                        
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
                
                    if(attr=="organization"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
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
        
                    row_data[col_num] = this[attr];
                } 
                else {
                    if(attr=="SystemMailTargetSentMailManagement-admin-action")
                    {
                        var action = BindActionButtonVer4(
                            SystemMailTargetSentMailManagement_arr_action,
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
                
                    if(attr=="email_template"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
                        }
                        else{
                            row_data[col_num] = '';

                        }
                        continue;
                    }
        
                    if(attr=="target"){


                        if(this[attr] != undefined && this[attr] !== "None"){       
                            var all_name="";
                            for(var i in this[attr]){
                                var name = this[attr][i]["name"];
                                if (name == undefined){
                                    name = ""
                                }
                                all_name+= name+",";
                            }
                            row_data[col_num] = (all_name);       
                        }
                        else{
                            row_data[col_num] = '';

                        }

                            continue;
                    }
                    

                    if(attr=="target"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
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
                
                    if(attr=="organization"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
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
        
                    row_data[col_num] = '';
                }
            }

            //arr_row_data.push(row_data)
            SystemMailTargetSentMailManagementdatatable.row.add(row_data).node().id = this["uuid"];
            SystemMailTargetSentMailManagementdatatable.draw(false);
            $('tr#' + this["uuid"]).attr("obj_name", this["name"]);
            return true;
        } else {
            console.log('Not found dataTable Id: ,', tbId);
            return false;
        }
    }
    // Update row by row of list result 
    tDatatableUpdateRow(tableId = null, order = null) {
        var tbId = "SystemMailTargetSentMailManagementTableId";
        if (tableId != null) {
            tbId = tableId;
        }

        if (order == null && SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT != undefined && SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT != null) {
            order = SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT;
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
                
                    if(attr=="email_template"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
                        }
                        else{
                            row_data[col_num] = '';

                        }
                        continue;
                    }
        
                    if(attr=="target"){


                        if(this[attr] != undefined && this[attr] !== "None"){       
                            var all_name="";
                            for(var i in this[attr]){
                                var name = this[attr][i]["name"];
                                if (name == undefined){
                                    name = ""
                                }
                                all_name+= name+",";
                            }
                            row_data[col_num] = (all_name);       
                        }
                        else{
                            row_data[col_num] = '';

                        }

                            continue;
                    }
                    

                    if(attr=="target"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
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
                
                    if(attr=="organization"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
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
        
                    row_data[col_num] = this[attr];
                } 
                else {
                    if(attr=="SystemMailTargetSentMailManagement-admin-action")
                    {
                        var action = BindActionButtonVer4(
                            SystemMailTargetSentMailManagement_arr_action,
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
                
                    if(attr=="email_template"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
                        }
                        else{
                            row_data[col_num] = '';

                        }
                        continue;
                    }
        
                    if(attr=="target"){


                        if(this[attr] != undefined && this[attr] !== "None"){       
                            var all_name="";
                            for(var i in this[attr]){
                                var name = this[attr][i]["name"];
                                if (name == undefined){
                                    name = ""
                                }
                                all_name+= name+",";
                            }
                            row_data[col_num] = (all_name);       
                        }
                        else{
                            row_data[col_num] = '';

                        }

                            continue;
                    }
                    

                    if(attr=="target"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            row_data[col_num] = (this[attr]);
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
                
                    if(attr=="organization"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            row_data[col_num] = (this[attr]["name"]);            
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
        
                    row_data[col_num] = '';
                }
            }

            arr_row_data.push(row_data)
            SystemMailTargetSentMailManagementdatatable.row(`#${this['uuid']}`).data(row_data).draw();
            return true;
        } else {
            console.log('Not found dataTable Id: ,', tbId);
            return false;
        }
    }

    

    tFillTable3(tableId = null, order = null) {
        var tbId = "SystemMailTargetSentMailManagementTableId";
        if (tableId != null) {
            tbId = tableId;
        }

        if (order == null && SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT != undefined && SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT != null) {
            order = SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT;
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
                
                    if(attr=="email_template"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            html +=`<td class="text-wrap"><a>` + this[attr]["name"] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }
                        continue;
                    }
        
                    if(attr=="target"){


                        if(this[attr] != undefined && this[attr] !== "None"){       
                            var all_name="";
                            for(var i in this[attr]){
                                var name = this[attr][i]["name"];
                                if (name == undefined){
                                    name = ""
                                }
                                all_name+= name+",";
                            }
                            html +=`<td class="text-wrap"><a>` + all_name + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }

                            continue;
                    }
                    

                    if(attr=="target"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
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
                
                    if(attr=="organization"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            html +=`<td class="text-wrap"><a>` + this[attr]["name"] + `</a></td>`;
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
        
                    html += `<td class="text-wrap"><a>` + (this[attr]) + `</a></td>`;
                } 
                else {
                    if(attr=="SystemMailTargetSentMailManagement-admin-action")
                    {
                        var action = BindActionButtonVer4(
                            SystemMailTargetSentMailManagement_arr_action,
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
                
                    if(attr=="email_template"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            html +=`<td class="text-wrap"><a>` + this[attr]["name"] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }
                        continue;
                    }
        
                    if(attr=="target"){


                        if(this[attr] != undefined && this[attr] !== "None"){       
                            var all_name="";
                            for(var i in this[attr]){
                                var name = this[attr][i]["name"];
                                if (name == undefined){
                                    name = ""
                                }
                                all_name+= name+",";
                            }
                            html +=`<td class="text-wrap"><a>` + all_name + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }

                            continue;
                    }
                    

                    if(attr=="target"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
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
                
                    if(attr=="organization"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            html +=`<td class="text-wrap"><a>` + this[attr]["name"] + `</a></td>`;
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
        
                    html += `<td><a href=""></a></td>`;
                }
            }

            html += '</tr>';
            arr_row_data.push(row_data)
            SystemMailTargetSentMailManagementdatatable.rows.add(arr_row_data).draw(false);
            //tableBody.append(html);

            return true;
        } else {
            console.log('Not found dataTable Id: ,', tbId);
            return false;
        }
    }

    //fill table for inline table
    tFillTable4(tableId = null, order = null, action = null) {
        var tbId = "SystemMailTargetSentMailManagementTableId";
        if (tableId != null) {
            tbId = tableId;
        }

        if (order == null && SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT != undefined && SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT != null) {
            order = SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT;
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
                
                    if(attr=="email_template"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            html +=`<td class="text-wrap"><a>` + this[attr]["name"] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }
                        continue;
                    }
        
                    if(attr=="target"){


                        if(this[attr] != undefined && this[attr] !== "None"){       
                            var all_name="";
                            for(var i in this[attr]){
                                var name = this[attr][i]["name"];
                                if (name == undefined){
                                    name = ""
                                }
                                all_name+= name+",";
                            }
                            html +=`<td class="text-wrap"><a>` + all_name + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }

                            continue;
                    }
                    

                    if(attr=="target"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
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
                
                    if(attr=="organization"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            html +=`<td class="text-wrap"><a>` + this[attr]["name"] + `</a></td>`;
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
                
                    if(attr=="email_template"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            html +=`<td class="text-wrap"><a>` + this[attr]["name"] + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }
                        continue;
                    }
        
                    if(attr=="target"){


                        if(this[attr] != undefined && this[attr] !== "None"){       
                            var all_name="";
                            for(var i in this[attr]){
                                var name = this[attr][i]["name"];
                                if (name == undefined){
                                    name = ""
                                }
                                all_name+= name+",";
                            }
                            html +=`<td class="text-wrap"><a>` + all_name + `</a></td>`;
                        }
                        else{
                            html +=`<td class="text-wrap"><a></a></td>`;

                        }

                            continue;
                    }
                    

                    if(attr=="target"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){
                            html +=`<td class="text-wrap"><a>` + this[attr] + `</a></td>`;
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
                
                    if(attr=="organization"){
                        
                        if(this[attr] != undefined && this[attr] !== "None"){       
                            html +=`<td class="text-wrap"><a>` + this[attr]["name"] + `</a></td>`;
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
        var card_Id = "SystemMailTargetSentMailManagementCardAreaId";
        if (cardId != null) {
            card_Id = cardId;
        }

        if (order == null && SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT != undefined && SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT != null) {
            order = SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT;
        }
        var side = order % 2 ? 1 : 2;

        var card_area = $("#" + card_Id);
        if (card_area.length > 0) {
            var card_template = card_area.find(".SystemMailTargetSentMailManagementTemplateCardClass[side=" + side + "]");
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
                    SystemMailTargetSentMailManagement_arr_action,
                    this['uuid'],
                    this,
                    null,
                    this['created_by'],
                );
                new_card.attr("is_allow_delete", "true");
                new_card.removeAttr("is_template");
                new_card.find(".dropdown-menu").append(action_button);
                new_card.removeClass("d-none");
                new_card.removeClass("SystemMailTargetSentMailManagementTemplateCardClass");
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
var SYSTEMMAILTARGETSENTMAILMANAGEMENT_RECORD_IN_PAGE = 100;

/// Dữ liệu tìm kiếm gần nhất
var SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG = {
    func:null,
    data:null,
    page:null,
}
/// Thông tin phân trang hiện tại
var SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION = {
    current_page:1,
    total:0,
    has_next:false,
    has_prev:false
}
//// Hàm tạo pagination
function SystemMailTargetSentMailManagementCreatePagination(total_record_number=null,crr_record_in_page=100,max_page_render=10){
    if(total_record_number == null){
        return;
    }
    var pagenation_ele=$(".pagination-SystemMailTargetSentMailManagement");
    var pagination=SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION;
    pagenation_ele.html('');
    // Thông tin về số lượng bản ghi trên trang
    var page_total_ele = $(".page-total-SystemMailTargetSentMailManagement");
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
            <a class="page-link px-0" onclick="SystemMailTargetSentMailManagementGetDataTable(1)">
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
                <a class="page-link" onclick="SystemMailTargetSentMailManagementGetDataTable(` + (parseInt(pagination["current_page"]) - 1) + `)">
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
                    <a class="page-link" onclick="SystemMailTargetSentMailManagementGetDataTable(${i})">${i}</a>
                </li>`);
            }
            
        }
        if (pagination["has_next"] == true) {
            pagenation_ele.append(`
            <li class="page-item m-1">
            <a class="page-link" onclick="SystemMailTargetSentMailManagementGetDataTable(` + (parseInt(pagination["current_page"]) + 1) + `)">
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
            <a class="page-link px-0" onclick="SystemMailTargetSentMailManagementGetDataTable(`+last_page_order+`)">
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
var SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT = 0 ;
//// Hàm Lấy danh sách khi mở trang 100 bản ghi/trang
function SystemMailTargetSentMailManagementGetDataTable(page=1){

        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailTargetSentMailManagementGetDataTable";
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["data"] = null;
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailTargetSentMailManagement();
        var results = obj.tGetDataTableOnlyReadApi(page);

        obj.callAjax.then(function(data) {
            
            $("#SystemMailTargetSentMailManagementTableBodyId").empty();

            if(SystemMailTargetSentMailManagementdatatable != undefined){
                SystemMailTargetSentMailManagementdatatable.clear().draw();
            }
            var crr_record_in_page = 100;

            SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page
            
            for (var i = 0; i < results.length; i++){
                try{
                    //console.log('results[i] = ', results[i]);
                    results[i].tDatatableAddRow();
                    SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
                }
                catch(err){
                    console.log(err);
                }
            }
            SystemMailTargetSentMailManagementCreatePagination(results.length,crr_record_in_page);
    })
}

//// Hàm Lấy danh sách khi mở trang 1000 bản ghi/trang
function SystemMailTargetSentMailManagementGetDataTableMedium(page=1){

        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailTargetSentMailManagementGetDataTableMedium";
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["data"] = null;
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailTargetSentMailManagement();
        var results = obj.tGetDataTableOnlyReadMediumApi(page);

        obj.callAjax.then(function(data) {
            
            $("#SystemMailTargetSentMailManagementTableBodyId").empty();

            if(SystemMailTargetSentMailManagementdatatable != undefined){
                SystemMailTargetSentMailManagementdatatable.clear().draw();
            }

            var crr_record_in_page = 1000;

            SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page
            
            for (var i = 0; i < results.length; i++){
                try{
                    //console.log('results[i] = ', results[i]);
                    results[i].tDatatableAddRow();
                    SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
                }
                catch(err){
                    console.log(err);
                }
            }
            SystemMailTargetSentMailManagementCreatePagination(results.length,crr_record_in_page);

    })
}

//// Hàm Lấy danh sách khi mở trang 10000 bản ghi/trang 
function SystemMailTargetSentMailManagementGetDataTableLarge(page=1){

        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailTargetSentMailManagementGetDataTableLarge";
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["data"] = null;
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailTargetSentMailManagement();
        var results = obj.tGetDataTableOnlyReadLargeApi(page);

        obj.callAjax.then(function(data) {
            
            $("#SystemMailTargetSentMailManagementTableBodyId").empty();

            if(SystemMailTargetSentMailManagementdatatable != undefined){
                SystemMailTargetSentMailManagementdatatable.clear().draw();
            }
            var crr_record_in_page = 10000;

            SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page
            
            for (var i = 0; i < results.length; i++){
                try{
                    //console.log('results[i] = ', results[i]);
                    results[i].tDatatableAddRow();
                    SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
                }
                catch(err){
                    console.log(err);
                }
            }
            SystemMailTargetSentMailManagementCreatePagination(results.length,crr_record_in_page);
  
    })
}


//// Hàm Lấy danh sách khi mở trang 10000 bản ghi/trang 
function SystemMailTargetSentMailManagementGetExcelDataTableLarge(page=1){

        //SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailTargetSentMailManagementGetExcelDataTableLarge";
        //SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["data"] = null;
        //SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailTargetSentMailManagement();
        var results = obj.tGetDataTableOnlyReadLargeApi(page);

        obj.callAjax.then(function(data) {
            
            $("#SystemMailTargetSentMailManagementExportTableBodyId").empty();

            var crr_record_in_page = 10000;

            SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page
            
            for (var i = 0; i < results.length; i++){
                try{
                    //console.log('results[i] = ', results[i]);
                    results[i].tFillTable3("SystemMailTargetSentMailManagementExportTableId");
                    SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
                }
                catch(err){
                    console.log(err);
                }
                if(i == (results.length - 1) )
                {
                    SystemMailTargetSentMailManagementExportExcel()
                }
            }
    })
}
//// Hàm Lấy danh sách khi mở trang 

$(document).ready(function(){
    LoadSystemMailTargetSentMailManagementTableDataList();
})

// Load danh sach

function LoadSystemMailTargetSentMailManagementTableDataList(){
    var SystemMailTargetSentMailManagementIdTable ="SystemMailTargetSentMailManagementTableId";
    var checker = $("#" +SystemMailTargetSentMailManagementIdTable );
    if (checker.length > 0){
        if($('#'+SystemMailTargetSentMailManagementIdTable).is(":visible")){
            if(SYSTEMMAILTARGETSENTMAILMANAGEMENT_RECORD_IN_PAGE == 100){
                SystemMailTargetSentMailManagementGetDataTable(SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["current_page"]);
            }
            else if(SYSTEMMAILTARGETSENTMAILMANAGEMENT_RECORD_IN_PAGE == 1000){
                SystemMailTargetSentMailManagementGetDataTableMedium(SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["current_page"]);
            } 
            else if(SYSTEMMAILTARGETSENTMAILMANAGEMENT_RECORD_IN_PAGE == 10000){
                SystemMailTargetSentMailManagementGetDataTableLarge(SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["current_page"]);
            } 
        }
    }
}

// Load danh sach khi tim kiem
function LoadSearchSystemMailTargetSentMailManagementTableDataList(){
    var SystemMailTargetSentMailManagementIdTable ="SystemMailTargetSentMailManagementTableId";
    var checker = $("#" +SystemMailTargetSentMailManagementIdTable );
    if (checker.length > 0){
        if($('#'+SystemMailTargetSentMailManagementIdTable).is(":visible")){
            if(SYSTEMMAILTARGETSENTMAILMANAGEMENT_RECORD_IN_PAGE == 100){
                SystemMailTargetSentMailManagementSearchData(SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["current_page"]);
            }
            else if(SYSTEMMAILTARGETSENTMAILMANAGEMENT_RECORD_IN_PAGE == 1000){
                SystemMailTargetSentMailManagementMediumSearchData(SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["current_page"]);
            } 
            else if(SYSTEMMAILTARGETSENTMAILMANAGEMENT_RECORD_IN_PAGE == 10000){
                SystemMailTargetSentMailManagementLargeSearchData(SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["current_page"]);
            } 
        }
    }
}

// Load danh sach khi tim kiem
function LoadFilterSystemMailTargetSentMailManagementTableDataList(){
    var SystemMailTargetSentMailManagementIdTable ="SystemMailTargetSentMailManagementTableId";
    var checker = $("#" +SystemMailTargetSentMailManagementIdTable );
    if (checker.length > 0){
        if($('#'+SystemMailTargetSentMailManagementIdTable).is(":visible")){
            if(SYSTEMMAILTARGETSENTMAILMANAGEMENT_RECORD_IN_PAGE == 100){
                SystemMailTargetSentMailManagementFilterData(SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["current_page"]);
            }
            else if(SYSTEMMAILTARGETSENTMAILMANAGEMENT_RECORD_IN_PAGE == 1000){
                SystemMailTargetSentMailManagementMediumFilterData(SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["current_page"]);
            } 
            else if(SYSTEMMAILTARGETSENTMAILMANAGEMENT_RECORD_IN_PAGE == 10000){
                SystemMailTargetSentMailManagementLargeFilterData(SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["current_page"]);
            } 
        }
    }
}

//// Hàm Lấy danh sách lên thẻ khi mở trang 100 bản ghi/trang
function SystemMailTargetSentMailManagementGetDataCard(page=1){

        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailTargetSentMailManagementGetDataCard";
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["data"] = null;
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailTargetSentMailManagement();
        var results = obj.tGetDataTableOnlyReadApi(page);

        obj.callAjax.then(function(data) {
        
        $("#SystemMailTargetSentMailManagementCardAreaId").find("[is_allow_delete=true]").remove();

        var crr_record_in_page = 100;

        SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page
        
        for (var i = 0; i < results.length; i++){
            try{
                //console.log('results[i] = ', results[i]);
                results[i].tFillCard();
                SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
            }
            catch(err){
                console.log(err);
            }
        }
        var pagenation_ele=$(".pagination-card-SystemMailTargetSentMailManagement");
        var pagination=SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION;
        pagenation_ele.html('');
        var page_total_ele = $(".page-total-SystemMailTargetSentMailManagement");
        page_total_ele.html(`<footer class="blockquote-footer">Tổng số: ${pagination["total"]} bản ghi </footer>`);
        if (results.length > 0) {
            
                pagenation_ele.append(`<li class="page-item m-1"><a class="page-link" onclick="SystemMailTargetSentMailManagementGetDataCard(1)">Đầu</a></li>`);
                if (pagination["has_prev"] == true) {
                    pagenation_ele.append('<li class="page-item m-1"><a class="page-link" onclick="SystemMailTargetSentMailManagementGetDataCard(' + (parseInt(pagination["current_page"]) - 1) + ')">' + (parseInt(pagination["current_page"]) - 1) + '</a></li>');
                }
                pagenation_ele.append('<li class="page-item m-1 active"><a class="page-link" >' + (parseInt(pagination["current_page"])) + '</a></li>');
                if (pagination["has_next"] == true) {
                    pagenation_ele.append('<li class="page-item m-1"><a class="page-link" onclick="SystemMailTargetSentMailManagementGetDataCard(' + (parseInt(pagination["current_page"]) + 1) + ')">' + (parseInt(pagination["current_page"]) + 1) + '</a></li>');
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
                pagenation_ele.append(`<li class="page-item m-1"><a class="page-link" onclick="SystemMailTargetSentMailManagementGetDataCard(`+last_page_order+`)">Cuối</a></li>`);
                }
            }   
    })
}

//// Hàm Lấy danh sách lên thẻ khi mở trang 1000 bản ghi/trang
function SystemMailTargetSentMailManagementGetDataCardMedium(page=1){

        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailTargetSentMailManagementGetDataCardMedium";
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["data"] = null;
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailTargetSentMailManagement();
        var results = obj.tGetDataTableOnlyReadMediumApi(page);

        obj.callAjax.then(function(data) {
        
        $("#SystemMailTargetSentMailManagementCardAreaId").find("[is_allow_delete=true]").remove();

        var crr_record_in_page = 100;

        SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page
        
        for (var i = 0; i < results.length; i++){
            try{
                //console.log('results[i] = ', results[i]);
                results[i].tFillCard();
                SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
            }
            catch(err){
                console.log(err);
            }
        }
        var pagenation_ele=$(".pagination-card-SystemMailTargetSentMailManagement");
        var pagination=SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION;
        pagenation_ele.html('');
        var page_total_ele = $(".page-total-SystemMailTargetSentMailManagement");
        page_total_ele.html(`<footer class="blockquote-footer">Tổng số: ${pagination["total"]} bản ghi </footer>`);
        if (results.length > 0) {
            
                pagenation_ele.append(`<li class="page-item m-1"><a class="page-link" onclick="SystemMailTargetSentMailManagementGetDataCardMedium(1)">Đầu</a></li>`);
                if (pagination["has_prev"] == true) {
                    pagenation_ele.append('<li class="page-item m-1"><a class="page-link" onclick="SystemMailTargetSentMailManagementGetDataCardMedium(' + (parseInt(pagination["current_page"]) - 1) + ')">' + (parseInt(pagination["current_page"]) - 1) + '</a></li>');
                }
                pagenation_ele.append('<li class="page-item m-1 active"><a class="page-link" >' + (parseInt(pagination["current_page"])) + '</a></li>');
                if (pagination["has_next"] == true) {
                    pagenation_ele.append('<li class="page-item m-1"><a class="page-link" onclick="SystemMailTargetSentMailManagementGetDataCardMedium(' + (parseInt(pagination["current_page"]) + 1) + ')">' + (parseInt(pagination["current_page"]) + 1) + '</a></li>');
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
                pagenation_ele.append(`<li class="page-item m-1"><a class="page-link" onclick="SystemMailTargetSentMailManagementGetDataCardMedium(`+last_page_order+`)">Cuối</a></li>`);
                }
            }   
    })
}

//// Hàm Lấy danh sách lên thẻ khi mở trang 10000 bản ghi/trang
function SystemMailTargetSentMailManagementGetDataCardLarge(page=1){

        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailTargetSentMailManagementGetDataCardLarge";
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["data"] = null;
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailTargetSentMailManagement();
        var results = obj.tGetDataTableOnlyReadLargeApi(page);

        obj.callAjax.then(function(data) {
        
        $("#SystemMailTargetSentMailManagementCardAreaId").find("[is_allow_delete=true]").remove();

        var crr_record_in_page = 100;

        SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page
        
        for (var i = 0; i < results.length; i++){
            try{
                //console.log('results[i] = ', results[i]);
                results[i].tFillCard();
                SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
            }
            catch(err){
                console.log(err);
            }
        }
        var pagenation_ele=$(".pagination-card-SystemMailTargetSentMailManagement");
        var pagination=SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION;
        pagenation_ele.html('');
        var page_total_ele = $(".page-total-SystemMailTargetSentMailManagement");
        page_total_ele.html(`<footer class="blockquote-footer">Tổng số: ${pagination["total"]} bản ghi </footer>`);
        if (results.length > 0) {
            
                pagenation_ele.append(`<li class="page-item m-1"><a class="page-link" onclick="SystemMailTargetSentMailManagementGetDataCardLarge(1)">Đầu</a></li>`);
                if (pagination["has_prev"] == true) {
                    pagenation_ele.append('<li class="page-item m-1"><a class="page-link" onclick="SystemMailTargetSentMailManagementGetDataCardLarge(' + (parseInt(pagination["current_page"]) - 1) + ')">' + (parseInt(pagination["current_page"]) - 1) + '</a></li>');
                }
                pagenation_ele.append('<li class="page-item m-1 active"><a class="page-link" >' + (parseInt(pagination["current_page"])) + '</a></li>');
                if (pagination["has_next"] == true) {
                    pagenation_ele.append('<li class="page-item m-1"><a class="page-link" onclick="SystemMailTargetSentMailManagementGetDataCardLarge(' + (parseInt(pagination["current_page"]) + 1) + ')">' + (parseInt(pagination["current_page"]) + 1) + '</a></li>');
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
                pagenation_ele.append(`<li class="page-item m-1"><a class="page-link" onclick="SystemMailTargetSentMailManagementGetDataCardLarge(`+last_page_order+`)">Cuối</a></li>`);
                }
            }   
    })
}

//// Hàm Lấy danh sách lên thẻ khi mở trang 
$(document).ready(function(){
    var SystemMailTargetSentMailManagementIdAreaCard ="SystemMailTargetSentMailManagementCardAreaId";
    var checker = $("#" +SystemMailTargetSentMailManagementIdAreaCard );
    if (checker.length > 0){
        if($('#'+SystemMailTargetSentMailManagementIdAreaCard).is(":visible")){
            SystemMailTargetSentMailManagementGetDataCard(SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["current_page"]);
        }
    }
})


// ########## [Create and Continue Button] Clicked Handle function ##############
// ########## [Nút thêm mới và tiếp tục] Bắt sự kiện nhấn thêm mới ##############

$(document).ready(function(){
    $("#SystemMailTargetSentMailManagementSaveAndNewModalBtnId").click(function(){
        var SystemMailTargetSentMailManagement_validate_obj = new InputValidation('SystemMailTargetSentMailManagementCreateModalFormId');
        if(SystemMailTargetSentMailManagement_validate_obj.validateRequired()){
            toastr.warning('Vui lòng điền đầy đủ thông tin');
            return;
        }
        var obj = new SystemMailTargetSentMailManagement();
        console.log('Save obj and create new, obj = ', obj);
        systemmailtargetsentmailmanagement_is_continue_modal=true;
        obj.tCreateNewPostFormApi('SystemMailTargetSentMailManagementCreateModalFormId');
        
    })
});

// ########## [Save Button] Clicked Handle function ##############
// ########## [Nút thêm mới] bắt sự kiện nhấn nút ##############

$(document).ready(function(){
    $("#SystemMailTargetSentMailManagementCreateModalBtnId").click(function(){
        var SystemMailTargetSentMailManagement_validate_obj = new InputValidation('SystemMailTargetSentMailManagementCreateModalFormId');
        if(SystemMailTargetSentMailManagement_validate_obj.validateRequired()){
            toastr.warning('Vui lòng điền đầy đủ thông tin');
            return;
        }
        obj = new SystemMailTargetSentMailManagement();
        console.log('Save obj = ', obj);
        obj.tCreateNewPostFormApi('SystemMailTargetSentMailManagementCreateModalFormId');
    })
});


// ########## [Save Button] Clicked Handle function ##############
var systemmailtargetsentmailmanagement_is_continue_modal=false;
var systemmailtargetsentmailmanagement_is_continue_form=false;
var systemmailtargetsentmailmanagement_is_continue_back_last_url=false;
$(document).ready(function(){
    $("#SystemMailTargetSentMailManagementCreateBtnId").click(function(){
        systemmailtargetsentmailmanagement_is_continue_back_last_url = true;
        var SystemMailTargetSentMailManagement_validate_obj = new InputValidation('SystemMailTargetSentMailManagementCreateFormId');
        if(SystemMailTargetSentMailManagement_validate_obj.validateRequired()){
            toastr.warning('Vui lòng điền đầy đủ thông tin');
            return;
        }
        obj = new SystemMailTargetSentMailManagement();
        console.log('Save obj = ', obj);
        obj.tCreateNewPostFormApi();
    })
});
    

// ########## [Update Button] Clicked Handle function ##############

$(document).ready(function(){
    $("#SystemMailTargetSentMailManagementUpdateModalBtnId").click(function(){
        var SystemMailTargetSentMailManagement_validate_obj = new InputValidation('SystemMailTargetSentMailManagementEditModalFormId');
        if(SystemMailTargetSentMailManagement_validate_obj.validateRequired()){
            toastr.warning('Vui lòng điền đầy đủ thông tin');
            return;

        }
        obj = new SystemMailTargetSentMailManagement();
        console.log('Update obj = ', obj);
        obj.tUpdatePostApi('SystemMailTargetSentMailManagementEditModalFormId');
    })
});


// ########## [Update Button] Clicked Handle function ##############

$(document).ready(function(){
    $("#SystemMailTargetSentMailManagementUpdateBtnId").click(function(){
        is_continue_modal=false;
        is_continue_form=false;
        is_continue_back_last_url=true;
        var SystemMailTargetSentMailManagement_validate_obj = new InputValidation('SystemMailTargetSentMailManagementEditFormId');
        if(SystemMailTargetSentMailManagement_validate_obj.validateRequired()){
            toastr.warning('Vui lòng điền đầy đủ thông tin');
            return;
        }
        obj = new SystemMailTargetSentMailManagement();
        console.log('Update obj = ', obj);
        obj.tUpdatePostApi('SystemMailTargetSentMailManagementEditFormId');
    })
});
// ########## [Input Change Event] Change Event Handle function ##############
$(document).ready(function(){
    var friendly_code_field_change = $("#friendly_codeSystemMailTargetSentMailManagementCreateInputId");
    if(friendly_code_field_change.length > 0) {    
        $("#friendly_codeSystemMailTargetSentMailManagementCreateInputId").change(function(){
            var self_val = $(this).val();
            if(self_val != null && self_val != "null" && self_val != "")
            {
                SystemMailTargetSentMailManagementAddingCheckExistCode(self_val,$(this));
            }
        })     
    }
    var friendly_code_field_modal_change = $("#friendly_codeSystemMailTargetSentMailManagementCreateModalInputId");
    if(friendly_code_field_modal_change.length > 0) {    
        $("#friendly_codeSystemMailTargetSentMailManagementCreateModalInputId").change(function(){
            var self_val = $(this).val();
            if(self_val != null && self_val != "null" && self_val != "")
            {
                SystemMailTargetSentMailManagementAddingCheckExistCode(self_val,$(this));
            }
        })     
    }
    
    var table_in_use = $("table[model_name=SystemMailTarget]");
    if(table_in_use.length > 0){
        var tr_template_in_use = table_in_use.find("tr[is-new=template]");
        if(tr_template_in_use.length > 0){
        
            var friendly_code_template_field = tr_template_in_use.find("input[name=friendly_code]");
            if(friendly_code_template_field.length > 0 && table_inuse) {  
                         
                friendly_code_template_field.change(function(){
                    var self_val = $(this).val();
                    if(self_val != null && self_val != "null" && self_val != "")
                    {
                        SystemMailTargetSentMailManagementAddingCheckExistCode(self_val,$(this));
                    }
                })     
            }
        }
    }
    
    
});
// ########## [Input Change Event] Change Event Handle function ##############
$(document).ready(function(){
    var friendly_code_field_change = $("#friendly_codeSystemMailTargetSentMailManagementEditInputId");
    if(friendly_code_field_change.length > 0) {    
        $("#friendly_codeSystemMailTargetSentMailManagementEditInputId").change(function(){
            var allow_tracker_change = $(this).attr("allow_tracker_change");
            if(allow_tracker_change == "true" || allow_tracker_change == true)
            {
                var self_val = $(this).val();
                var self_model_obj_uuid = $(this).closest("form").attr("obj_uuid");
                if(self_val != null && self_val != "null" && self_val != "")
                {
                    SystemMailTargetSentMailManagementUpdateCheckExistCode(self_model_obj_uuid,self_val,$(this));
                }                   
            }            
        })     
    }
    var friendly_code_field_modal_change = $("#friendly_codeSystemMailTargetSentMailManagementEditModalInputId");
    if(friendly_code_field_modal_change.length > 0) {    
        $("#friendly_codeSystemMailTargetSentMailManagementEditModalInputId").change(function(){
            
            var allow_tracker_change = $(this).attr("allow_tracker_change");
            if(allow_tracker_change == "true" || allow_tracker_change == true)
            {
                var self_val = $(this).val();
                var self_model_obj_uuid = $(this).closest("form").attr("obj_uuid");
                if(self_val != null && self_val != "null" && self_val != "")
                {
                    SystemMailTargetSentMailManagementUpdateCheckExistCode(self_model_obj_uuid,self_val,$(this));
                }                  
            }   
        })     
    }
                       
  
    var table_in_use = $("table[model_name=SystemMailTarget]");
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
                            SystemMailTargetSentMailManagementUpdateCheckExistCode(self_model_obj_uuid,self_val,$(this));
                        }                  
                    } 
                })     
            }
        }
    }
    
});
// ########## [CALL API CHECK EXIST CODE] Clicked Handle function ##############
function SystemMailTargetSentMailManagementAddingCheckExistCode(code,$this_ele){
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
            url: SYSTEMMAILTARGETSENTMAILMANAGEMENT_CREATE_CHECK_EXIST_CODE_URL + code + "/",
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
function SystemMailTargetSentMailManagementUpdateCheckExistCode(uuid,code,$this_ele){
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
            url: SYSTEMMAILTARGETSENTMAILMANAGEMENT_UPDATE_CHECK_EXIST_CODE_URL.replace("<uuid>",uuid) + code + "/",
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
    $("#SystemMailTargetSentMailManagementDeleteBtnId").click(function(){
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
                    obj = new SystemMailTargetSentMailManagement();
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

function SystemMailTargetSentMailManagementOnDeleteEventV1(uuid){
    var search_data = null;
    try {
        search_data = SystemMailTargetSentMailManagementSearchData;
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
                            var obj=new SystemMailTargetSentMailManagement();
                            obj.tDeleteApi(uuid);
                        }
                    },
                    
                }
        });
    }
    else { 
        SystemMailTargetSentMailManagementOnDeleteWithDataSearchEvent(uuid);
    }

}

// ########## [Delete function] Call Handle function(action) ##############
// ########## [Hàm Xóa] Xử lý sự kiện gọi hàm xóa(Thao tác) ##############

function SystemMailTargetSentMailManagementOnDeleteEvent(uuid){
    // Get obj name
    const obj_tr = $("tr#" + uuid);
    const obj_name = $("tr#" + uuid).attr("obj_name");

    // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/
    Swal.fire({
        html: "Bạn chắc muốn xóa Cá nhân/nhóm nhận mail <b>" + obj_name + "</b>?",
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
                html: "Bạn đã xóa Cá nhân/nhóm nhận mail <b>" + obj_name + "</b>!.",
                icon: "success",
                buttonsStyling: false,
                confirmButtonText: "Ok",
                customClass: {
                    confirmButton: "btn fw-bold btn-primary",
                }
            }).then(function () {
                // Remove current row
                SystemMailTargetSentMailManagementdatatable.row(obj_tr).remove().draw();
                var crr_delete_uuid = uuid;
                var obj = new SystemMailTargetSentMailManagement();
                obj.tDeleteApi(crr_delete_uuid);
            })
        }
    });

}
///// xóa và load lại danh sách theo dữ liệu tìm kiếm
function SystemMailTargetSentMailManagementOnDeleteWithDataSearchEvent(uuid){
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
                var obj=new SystemMailTargetSentMailManagement();
                
                obj.tDeleteApiWithDataSearch(uuid,SystemMailTargetSentMailManagementSearchData);
            }
        },
        
    }
});
    
}

// xem chi tiết
function SystemMailTargetSentMailManagementViewDetails(selectionId){
    var select = $("#"+selectionId);
    if(select.length>0){
        var value =  select.val()
        if(value == "" || value == null || value == undefined){
            toastr.warning('Vui lòng chọn giá trị');
            return;
        }
        else {
            $('#SystemMailTargetSentMailManagementDetailModalId').modal('toggle');
            var obj=new SystemMailTargetSentMailManagement();
            obj.tGetObjApi(obj_uuid);
            obj.callAjax.then(function(data) {
                new SystemMailTargetSentMailManagement(data).tFillDetailForm('SystemMailTargetSentMailManagementDetailModalId_form');
            })
        }
    }
}

// xem chi tiết ở popup
function SystemMailTargetSentMailManagementOpenPopupDetails(uuid){
   
    $('#SystemMailTargetSentMailManagementDetailModalId').modal('toggle');
    var obj=new SystemMailTargetSentMailManagement();
    obj.tGetObjApi(uuid);
    obj.callAjax.then(function(data) {
        new SystemMailTargetSentMailManagement(data).tFillDetailModalForm('SystemMailTargetSentMailManagementDetailModalId_form');
    })
}
// Mở tab để xem chi tiết
function SystemMailTargetSentMailManagementDetails(uuid){
    var org_app_prefixId = ""
    if($("#org_app_prefixId").length > 0){
        org_app_prefixId = $("#org_app_prefixId").val();
    }
   location.href = `${org_app_prefixId}/SentMailManagement/SystemMailTarget/detail/${uuid}`;
}
/// load chi tiết/ cho phép chỉnh sửa
function SystemMailTargetSentMailManagementOpenPopupEdit(uuid){
    $('#SystemMailTargetSentMailManagementEditModalId').modal('toggle');
    var obj=new SystemMailTargetSentMailManagement();
    obj.tGetObjApi(uuid);
    obj.callAjax.then(function(data) {
        new SystemMailTargetSentMailManagement(data).tFillEditModalForm('SystemMailTargetSentMailManagementEditModalId_form');

    })
}

/// Mở trang chỉnh sửa ở tab mới
function SystemMailTargetSentMailManagementEdit(uuid){
                       
    var org_app_prefixId = ""
    if($("#org_app_prefixId").length > 0){
        org_app_prefixId = $("#org_app_prefixId").val();
    }
      location.href = `${org_app_prefixId}/SentMailManagement/SystemMailTarget/edit/${uuid}`;
}

// ########## [Cancel Button] Clicked Handle function ##############
$(document).ready(function(){
    $("#SystemMailTargetSentMailManagementCancelBtnId").click(function(){
        systemmailtargetsentmailmanagement_is_continue_modal=false;
        systemmailtargetsentmailmanagement_is_continue_form=false;
        systemmailtargetsentmailmanagement_is_continue_back_last_url=false;
        last_url = localStorage.getItem("last_url");
        location.href = last_url;

    })
});
     

// ########## [Fill Table by Search] Handle Event function ##############
function SystemMailTargetSentMailManagementSearchData(page=1,search_data=null){

        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailTargetSentMailManagementSearchData";
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["data"] = search_data;
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailTargetSentMailManagement();
        var results = obj.tSearchDataApi(page,search_data);
        obj.callAjax.then(function(data) {

            $("#SystemMailTargetSentMailManagementTableBodyId").empty();

            if(SystemMailTargetSentMailManagementdatatable != undefined){
                SystemMailTargetSentMailManagementdatatable.clear().draw();
            }            
            var crr_record_in_page = 100;

            SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page;

            for (var i = 0; i < results.length; i++){
                try{
                    console.log('results[i] = ', results[i]);

                    results[i].tDatatableAddRow();

                    SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
                }
                catch(err){
                    console.log(err);
                }
            }
            //search_type = search_type.trim()
            var pagination = SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION;
            SystemMailTargetSentMailManagementCreatePagination(results.length,crr_record_in_page);

            var crr_txt = $("#SystemMailTargetSentMailManagementQuickSearchInputId").val();
            highlight(crr_txt,"#SystemMailTargetSentMailManagementTableBodyId");
    })

}
    
// ########## [Fill Table by Search] Handle Event function ##############
function SystemMailTargetSentMailManagementMediumSearchData(page=1,search_data=null){
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailTargetSentMailManagementMediumSearchData";
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["data"] = search_data;
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailTargetSentMailManagement();
        var results = obj.tSearchDataMediumApi(page,search_data);
        obj.callAjax.then(function(data) {

            $("#SystemMailTargetSentMailManagementTableBodyId").empty();

            if(SystemMailTargetSentMailManagementdatatable != undefined){
                SystemMailTargetSentMailManagementdatatable.clear().draw();
            }            
            var crr_record_in_page = 1000;

            SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page;

            for (var i = 0; i < results.length; i++){
                try{
                    console.log('results[i] = ', results[i]);

                    results[i].tDatatableAddRow();

                    SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
                }
                catch(err){
                    console.log(err);
                }
            }
            //search_type = search_type.trim()
            var pagination = SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION;
            SystemMailTargetSentMailManagementCreatePagination(results.length,crr_record_in_page);


            var crr_txt = $("#SystemMailTargetSentMailManagementQuickSearchInputId").val();
            highlight(crr_txt,"#SystemMailTargetSentMailManagementTableId");
    })

}
    
// ########## [Fill Table by Search] Handle Event function ##############
function SystemMailTargetSentMailManagementLargeSearchData(page=1,search_data=null){
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailTargetSentMailManagementLargeSearchData";
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["data"] = search_data;
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailTargetSentMailManagement();
        var results = obj.tSearchDataLargeApi(page,search_data);
        obj.callAjax.then(function(data) {

            $("#SystemMailTargetSentMailManagementTableBodyId").empty();

            if(SystemMailTargetSentMailManagementdatatable != undefined){
                SystemMailTargetSentMailManagementdatatable.clear().draw();
            }            
            var crr_record_in_page = 10000;

            SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page;

            for (var i = 0; i < results.length; i++){
                try{
                    console.log('results[i] = ', results[i]);

                    results[i].tDatatableAddRow();

                    SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
                }
                catch(err){
                    console.log(err);
                }
            }
            //search_type = search_type.trim()
            var pagination = SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION;
            SystemMailTargetSentMailManagementCreatePagination(results.length,crr_record_in_page);
            var crr_txt = $("#SystemMailTargetSentMailManagementQuickSearchInputId").val();
            highlight(crr_txt,"#SystemMailTargetSentMailManagementTableId");
    })

}
    
// ########## [Fill Table by Search] Handle Event function ##############
function SystemMailTargetSentMailManagementExcelLargeSearchData(page=1,search_data=null){
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailTargetSentMailManagementLargeSearchData";
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["data"] = search_data;
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailTargetSentMailManagement();
        var results = obj.tSearchDataLargeApi(page,search_data);
        obj.callAjax.then(function(data) {

            $("#SystemMailTargetSentMailManagementExportTableId").find("tbody").empty();
            
            var crr_record_in_page = 10000;

            SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page;

            for (var i = 0; i < results.length; i++){
                try{
                    console.log('results[i] = ', results[i]);

                    results[i].tFillTable3("SystemMailTargetSentMailManagementExportTableId");

                    SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
                }
                catch(err){
                    console.log(err);
                }

                if(i == results.length - 1){
                    SystemMailTargetSentMailManagementExportExcel()
                }
            }
    })

}


// ########## [Fill Table by Filter] Handle Event function ##############
function SystemMailTargetSentMailManagementFilterData(page=1,search_data=null){
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailTargetSentMailManagementFilterData";
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["data"] = search_data;
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailTargetSentMailManagement();
        var results = obj.tFilterDataApi(page,search_data);
        obj.callAjax.then(function(data) {

            $("#SystemMailTargetSentMailManagementTableBodyId").empty();

            if(SystemMailTargetSentMailManagementdatatable != undefined){
                SystemMailTargetSentMailManagementdatatable.clear().draw();
            }            
            var crr_record_in_page = 100;

            SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page;

            for (var i = 0; i < results.length; i++){
                try{
                    console.log('results[i] = ', results[i]);

                    results[i].tDatatableAddRow();

                    SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
                }
                catch(err){
                    console.log(err);
                }
            }
            //search_type = search_type.trim()
            var pagination = SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION;
            SystemMailTargetSentMailManagementCreatePagination(results.length,crr_record_in_page);


    })

}
    
// ########## [Fill Table by Filter] Handle Event function ##############
function SystemMailTargetSentMailManagementMediumFilterData(page=1,search_data=null){
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailTargetSentMailManagementMediumFilterData";
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["data"] = search_data;
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailTargetSentMailManagement();
        var results = obj.tFilterDataMediumApi(page,search_data);
        obj.callAjax.then(function(data) {

            $("#SystemMailTargetSentMailManagementTableBodyId").empty();

            if(SystemMailTargetSentMailManagementdatatable != undefined){
                SystemMailTargetSentMailManagementdatatable.clear().draw();
            }            
            var crr_record_in_page = 1000;

            SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page;

            for (var i = 0; i < results.length; i++){
                try{
                    console.log('results[i] = ', results[i]);

                    results[i].tDatatableAddRow();

                    SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
                }
                catch(err){
                    console.log(err);
                }
            }
            //search_type = search_type.trim()
            var pagination = SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION;
            SystemMailTargetSentMailManagementCreatePagination(results.length,crr_record_in_page);


    })

}
    
// ########## [Fill Table by Filter] Handle Event function ##############
function SystemMailTargetSentMailManagementLargeFilterData(page=1,search_data=null){
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailTargetSentMailManagementLargeFilterData";
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["data"] = search_data;
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailTargetSentMailManagement();
        var results = obj.tFilterDataLargeApi(page,search_data);
        obj.callAjax.then(function(data) {

            $("#SystemMailTargetSentMailManagementTableBodyId").empty();

            if(SystemMailTargetSentMailManagementdatatable != undefined){
                SystemMailTargetSentMailManagementdatatable.clear().draw();
            }            
            var crr_record_in_page = 10000;

            SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page;

            for (var i = 0; i < results.length; i++){
                try{
                    console.log('results[i] = ', results[i]);

                    results[i].tDatatableAddRow();

                    SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
                }
                catch(err){
                    console.log(err);
                }
            }
            //search_type = search_type.trim()
            var pagination = SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION;
            SystemMailTargetSentMailManagementCreatePagination(results.length,crr_record_in_page);


    })

}



// ########## [Fill Table by Filter] Handle Event function ##############
function SystemMailTargetSentMailManagementExcelLargeFilterData(page=1,search_data=null){
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailTargetSentMailManagementLargeFilterData";
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["data"] = search_data;
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailTargetSentMailManagement();
        var slugSearch = "";
        
        var results = obj.tFilterDataLargeApi(page,slugSearch);
        obj.callAjax.then(function(data) {

            $("#SystemMailTargetSentMailManagementExportTableId").find("tbody").empty();
            
            var crr_record_in_page = 10000;

            SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page;

            for (var i = 0; i < results.length; i++){
                try{
                    console.log('results[i] = ', results[i]);

                    results[i].tExportDatatableAddRow("SystemMailTargetSentMailManagementExportTableId");

                    SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
                }
                catch(err){
                    console.log(err);
                }
                if(i == results.length - 1){
                //    SystemMailTargetSentMailManagementExportExcel();
                    return "add row for export table success";
                }
            }
            

    })

}

function CallPromiseSystemMailTargetSentMailManagementExcelLargeFilterData(page=1,search_data=null){
    return new Promise(resolve => {
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["func"] = "SystemMailTargetSentMailManagementLargeFilterData";
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["data"] = search_data;
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["page"] = page;

        var obj = new SystemMailTargetSentMailManagement();
        var slugSearch = "";
        
        var results = obj.tFilterDataLargeApi(page,slugSearch);
        obj.callAjax.then(function(data) {

            $("#SystemMailTargetSentMailManagementExportTableId").find("tbody").empty();
            
            var crr_record_in_page = 10000;

            SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT = 1 + crr_record_in_page * page - crr_record_in_page;
            if(results.length > 0){
                for (var i = 0; i < results.length; i++){
                    try{
                        console.log('results[i] = ', results[i]);

                        results[i].tExportDatatableAddRow("SystemMailTargetSentMailManagementExportTableId");

                        SYSTEMMAILTARGETSENTMAILMANAGEMENT_ID_TABLE_COUNT++;
                    }
                    catch(err){
                        console.log(err);
                    }
                    if(i == results.length - 1){
                    //    SystemMailTargetSentMailManagementExportExcel();
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

async function asyncCallSystemMailTargetSentMailManagementExcelLargeFilterData(page=1,search_data=null) {
  console.log('exportingg');
  await CallPromiseSystemMailTargetSentMailManagementExcelLargeFilterData(page,search_data);
  console.log('exported');
  // Expected output: "resolved"
}




// ########## [Search Button] Clicked Handle function ##############
// ########## [Nút tìm kiếm] Sự kiện click nút tìm kiếm ##############

$(document).ready(function(){
    // Tìm kiếm nhanh
    $("#SystemMailTargetSentMailManagementQuickSearchInputId").on('keyup', function(e) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION={
                current_page:1,
                total:0,
                has_next:false,
                has_prev:false
            }
            SystemMailTargetSentMailManagementSearchData(SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["current_page"]);
        }
    })
    $("#SystemMailTargetSentMailManagementQuickSearchBtnId").click(function(){
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION={
            current_page:1,
            total:0,
            has_next:false,
            has_prev:false
        }

        //SystemMailTargetSentMailManagementSearchData(SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["current_page"]);
        //var IdAreaCard ="SystemMailTargetSentMailManagementCardAreaId";
        //var checker = $("#" +IdAreaCard );
        //if (checker.length > 0){
        //    if($('#'+IdAreaCard).is(":visible")){
        //        SystemMailTargetSentMailManagementGetDataCard(SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["current_page"]);
        //    }
        //}
    })
    $("#SystemMailTargetSentMailManagementSearchBtnId").click(function(){
        SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION={
            current_page:1,
            total:0,
            has_next:false,
            has_prev:false
        }
        SystemMailTargetSentMailManagementFilterData(SYSTEMMAILTARGETSENTMAILMANAGEMENT_PAGINATION["current_page"]);
    })
});

    

// ########## [Search Button] Clicked Handle function ##############
$(document).ready(function(){

    $("#SystemMailTargetSentMailManagementExportExcelBtnId").click(function(){
        var is_export = true;
        if(SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["func"].includes("GetDataTable")){
                SystemMailTargetSentMailManagementGetExcelDataTableLarge(1);
        }
        else if(SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["func"].includes("SearchData")){
                SystemMailTargetSentMailManagementExcelLargeSearchData(1,SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["data"]);
        } 
        else if(SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["func"].includes("FilterData")){
                SystemMailTargetSentMailManagementExcelLargeFilterData(1,SYSTEMMAILTARGETSENTMAILMANAGEMENT_SEARCH_LOG["data"]);
        } 
        
    })
}); 

function SystemMailTargetSentMailManagementExportExcel(){

    var table=$('#SystemMailTargetSentMailManagementExportTableId');
    var count_cols = table.find("th").length;
    if(table.find("td").length>0){
        table.tableExport({
        filename: 'Cá_nhân/nhóm_nhận_mail_%DD%-%MM%-%YY%',
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

SystemMailTargetSentMailManagement_arr_action = [

    
    {
            "title": "Xem chi tiết",
            "func": "SystemMailTargetSentMailManagementOpenPopupDetails",
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
            "func": "SystemMailTargetSentMailManagementOpenPopupEdit",
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
            "func": "SystemMailTargetSentMailManagementOnDeleteEvent",
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