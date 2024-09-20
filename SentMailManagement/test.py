from .models import *
import re

def send_mail_daidv():
    # Lấy đối tượng mẫu email từ cơ sở dữ liệu
    mail_template = SystemMailTemplate.objects.filter(friendly_code='Payroll_Approve').first()
     # Tạo dictionary chứa thông tin về mẫu email
    mail_template_dict = {
        'uuid': mail_template.uuid,
        'friendly_code': mail_template.friendly_code,
        'name': mail_template.name,
        'code': mail_template.code,
    }
    # Lấy đối tượng cấu hình người gửi email từ cơ sở dữ liệu
    mail_sender_obj = SystemMailSenderConfig.objects.all().first()

    # Tạo dictionary chứa thông tin về người gửi email
    mail_sender_dict = {
        'uuid': mail_sender_obj.uuid,
        'friendly_code': mail_sender_obj.friendly_code,
        'name': mail_sender_obj.name,
        'code': mail_sender_obj.code,
    }
    # Lấy nội dung email từ mẫu
    message = mail_template.content

    # Chuyển đổi tên mẫu thành chuỗi để sử dụng làm tiêu đề email
    subject = str(mail_template.name)

    # Tạo dictionary chứa các biến để thay thế trong nội dung email
    variables = {
        "account_obj": 'daidv',
        "payroll_name": 'bang luong t12',
        "period_name": 'thang 12',
        "company_name": 'MPS',
        "start_day": '12/12/2023',
        "end_day": '12/12/2023',
        "link_capacities": "https://demo.hrm360.com.vn/",
    }

    # Hàm callback để thay thế biến trong nội dung email
    def replace_variable(match):
        variable_name = match.group(1).strip()
        if variable_name in variables:
            return variables[variable_name]
        return match.group(0)

    # Sử dụng biểu thức chính quy để thay thế các biến trong nội dung email
    message = re.sub(r'{{(.*?)}}', replace_variable, message)
    try:
        # Tạo đối tượng email và lưu vào cơ sở dữ liệu
        email_send = SystemMailMail()
        email_send.name = subject
        # email_send.mail_target = self.assessor_obj.email
        email_send.content = message
        email_send.email_template = mail_template_dict
        email_send.mail_sender = mail_sender_dict
        email_send.save()
        
        # Tự động gửi email
        email_send.auto_send_email()
    except Exception as xx:
        print(xx)
