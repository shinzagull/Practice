# import frappe

# def before_save(doc, method):
#     frappe.msgprint(f"A new Sales Invoice {doc.name} has been created.")
    
# custom_app/custom_app/doctype/your_doctype/your_doctype.py
import frappe
from frappe.model.document import Document
from frappe.core.doctype.communication.email import make

@frappe.whitelist()
def send_email_on_creation(doc , method= None):
    recipients = ["tanianawaz.7869@gmail.com"]
    subject = "New Document Created"
    message = f"<p>A new document has been created:</p><p>Document Name: {doc.name}</p>"
    sender = "sender@example.com"

    make(
        recipients=recipients,
        subject=subject,
        content=message,
        send_email=True,
        sender=sender
    )
