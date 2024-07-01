# Copyright (c) 2024, nextash and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Practice(Document):
    def validate(self):
        docs = frappe.db.get_list("Personal")
        self.family = []
        for row in docs:
            doc = frappe.get_doc("Personal", row.name)
            for child in doc.family:
                self.append('family', {
					"member_name" : child.member_name,
					"relation" : child.relation,
					"age" : child.age
				})


    
      



		
		# docs = frappe.db.get_list('Personal',filters={'cnic': 'abc', 'gender': 'Male'} ,fields=['name', 'cnic'])
		# docs = frappe.db.get_list('Personal',fields=['*'], order_by='creation asc', limit=5)
		# for my_doc in docs:

		# doc_meta = frappe.get_meta("Personal")
		# for field in doc_meta.fields:
		# 	frappe.msgprint(f"My data is {field.label} {field.fieldname}")


		# frappe.delete_doc('Personal', "dsjfklfjs")

		# doc = frappe.new_doc('Personal')
		# doc.cnic = "def"
		# doc.save()
		# for row in self.family:
		# frappe.msgprint(f"{self.family[1].member_name}")
		# doc = frappe.get_doc("Personal", "edit-profile")
		# doc = frappe.get_doc('Personal', self.personal)


