// Copyright (c) 2024, nextash and contributors
// For license information, please see license.txt

// frappe.ui.form.on('Test', {
// 	refresh: function (frm) {

// 		frm.set_value({
// 			status: 'Open',
// 			description: 'New description'
// 		})

// 	}
// });

frappe.ui.form.on('child', { 
	child_add(frm, cdt, cdn) { 
	        frappe.msgprint('A row has been ADD to the links table 🎉 ');
	    }
	});
