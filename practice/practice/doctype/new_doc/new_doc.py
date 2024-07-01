# Copyright (c) 2024, nextash and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class NewDoc(Document):
    def validate(self):
        frappe.db.set_value('New Doc', '001', "prac1", "Shinzay")
        frappe.db.commit()

        # frappe.msgprint("got it")

        

    # Events..

             # 1- validate
    # def validate(self):gfdfg
    #     frappe.msgprint("This is on_submit event.")

    #          # 3- before_insert
    # def before_insert(self):
    #     frappe.msgprint("This is before_insert event.")

    #        # 4- after_insert
    # def after_insert(self):
    #     frappe.msgprint("This is after_insert event.")

    #       # 5- on_update
    # def on_update(self):
    #     frappe.msgprint("This is on_update event.")

    #       # 6- on_update_after_submit
    # def on_update_after_submit(self):
    #     frappe.msgprint("This is on_update_after_submit event.")

    #        # 7- on_trash
    # def on_trash(self):
    #     frappe.msgprint("This is on_trash event.")

    #        # 8- before_save
    # def before_save(self):
    #     frappe.msgprint("This is before_save event.")

    #      # 9- on_cancel
    # def on_cancel(self):
    #     frappe.msgprint("This is on_cancel event.")

    #      # 10- after_delete
    # def after_delete(self):
    #     frappe.msgprint("This is after_delete event.")

            # CRUD PRACTICE

        # 1: READ/get doc 

# select * from student where id = 10
# select * from student where id = 11
# select * from student where id = 12
# select * from student where id = 13


# select * from teacher where cnic = 401

# select * from teacher

# select * from teacher where rank = 16

# select first_name from teacher where rank = 16


# frappe.get_doc("student", 10)
# frappe.get_all("student")
# frappe.get_all("teacher", {"rank": 16})
# frappe.get_all("teacher", {"rank": [">", 16]}, ["*"])
# frappe.get_list("teacher", {"rank": [">", 16]}, ["*"])

#             # 2: CREATE new doc 

# INSERT INTO table_name (col_1, col_2) values (col_1_value, col_2_value)
# insert into student (roll_number) values (10)

# doc = frappe.new_doc({
#     "col_1"; col_1_value,
#     "doctype": table_name,
# })
# doc.save()
# doc.insert()

#             # 3: UPDATE doc 

# update student set class = 8th where id = 10

# doc = frappe.get_doc("student", 10)
# doc.class = 8th
# doc.save()

#                 # 4: DELETE doc 

# doc = frappe.get_doc("student", 10)
# doc.delete()

# frappe.delete_doc(doctype, name)






















        # frappe.msgprint(("Hellow my name is '{0}' ").format(self.prac1 + " " + self.prac2))
        # self.prac3 = self.prac1 + " " + self.prac2




        # # self.prac2 = self.prac1 + "2"
        # self.prac3 = self.prac1 + "3"
        # self.prac3 = self.prac3
        # doc = frappe.get_doc('Personal')
        # doc.gender = "Diddd"
        # doc.save()

        # frappe.msgprint(f"document saved")
