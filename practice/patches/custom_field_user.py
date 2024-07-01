import frappe
from frappe.custom.doctype.custom_field.custom_field import create_custom_field

def execute():
    df = dict(fieldname="item_barcode", fieldtype="Data", label="Barcode", insert_after="item_name")
    df2 = dict(fieldname="expiry", label="Expiry", fieldtype="Date", insert_after="item_barcode")
    create_custom_field("Item", df)
    create_custom_field("Item", df2)
    frappe.db.commit()