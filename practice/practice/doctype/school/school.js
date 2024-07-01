// Copyright (c) 2024, nextash and contributors
// For license information, please see license.txt

frappe.ui.form.on('School', {
    refresh: function(frm) {
        frm.add_custom_button(__('Send Email'), function() {
            // frappe.msgprint(__('Custom Button Clicked!'));
            
            frm.call({
                method: 'practice.practice.doctype.school.school.send_data',
                args: {
                    // doc: frm.doc  
                },
            });
        });
    }
});