frappe.ui.form.on('Customer', {
    validate: function(frm) {
            let customer_name = frm.doc.customer_name;
            let custom_select = frm.doc.custom_select;

                let concatenated_name = customer_name + custom_select;
                frappe.msgprint(__('Document name has been updated to ') + concatenated_name);
                frm.set_value(frm.doc.name, concatenated_name);
                frm.refresh()


    }
});
