# Copyright (c) 2024, nextash and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class School(Document):
	pass
@frappe.whitelist()
def	send_data():
	email = "aiqra8296@gmail.com"
	sender = frappe.session.user
	subject = "Subject of the email"
	message = "This is the body of the email."
	frappe.sendmail(
	recipients=email,
	sender=None,
	subject=subject,
	message=message,
	header=[subject, "green"],
	delayed= False,
	retry=3,
)
