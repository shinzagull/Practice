# Copyright (c) 2024, nextash and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class AliPractice(Document):
	def validate(self):
		# get an existing document
		doc = frappe.new_doc('Ali Practice'	)
		doc.first_name = 'Ali'
		doc.second_name = 'Raza'
		doc.save()

		# # get a single doctype
		# doc = frappe.get_doc('System Settings')
		# doc.timezone # Asia/Kolkata

