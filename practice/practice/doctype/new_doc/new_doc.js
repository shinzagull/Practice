// Copyright (c) 2024, nextash and contributors
// For license information, please see license.txt


//   Form event refresh
// frappe.ui.form.on('New Doc', {
// 	refresh:function(frm){
// 	frappe.msgprint('Form refresh!')
// }
// });


//   	Form Event setup
// frappe.ui.form.on('New Doc', {
// 		setup: function(frm) {
// 			frappe.msgprint('Setup Event Triggered!')
// 		},
// 	});


//   	Child Table Event add
// frappe.ui.form.on('New Child', {
// 	child_table_add: function(frm) {
// 		frappe.msgprint('Row Added!')
// 	}
// });

//   	Child Table Event remove
// 	frappe.ui.form.on('New Child', {
// 	child_table_remove: function(frm) {
// 		frappe.msgprint('Row Removed!')
// 	}
// }); 

//   	Child Table Event form_render
// frappe.ui.form.on('New Child', {
// 	form_render: function(frm) {
// 		frappe.msgprint('Rendered!')
// 	}
// }); 

//       Form Api


//    	Form API frm.set_value
// frappe.ui.form.on('New Doc', {
// 	refresh: function (frm) {
// 		frm.set_value('prac1', 'Your Name')
// 	},
// });


// 		Form API Enable / Disable
// frappe.ui.form.on('New Doc', {
// 	prac1:function(frm) {
// 		if(!frm.doc.prac1) {
// 		frm.enable_save();
// 		} else {

// 		frm.disable_save();
// 		}
		
// 	}
// });

// 		Form API  frm.is_new
	// frappe.ui.form.on('New Doc', {
	// 		refresh: function (frm) {
	// 			if (frm.is_new()) {
	// 				frappe.msgprint("Form Is New.")
	// 			}
	// 		},
	// 	});

		// Form API  frm.set_intro
	// frappe.ui.form.on('New Doc', {
	// 		refresh: function (frm) {
	// 			if (frm.is_new()) {
	// 				frm.set_intro('The form is new and green', 'green');
	// 			}
	// 		},
	// 	});

// Buttons
		// Single Button

		// frappe.ui.form.on('New Doc', {
		// 	refresh: function (frm) {
		// 		frm.add_custom_button('New Button', () => {
		// 			frappe.msgprint("Here is the Button")
		// 		})
				
		// 	},
			
		// });


		// Button in Groups

	// frappe.ui.form.on('New Doc', {
	// 		refresh: function (frm) {
	// 			frm.add_custom_button(' Button 1', () => {
	// 				frappe.msgprint("Here is the 1st Button")
	// 			}, "Button")
	// 			frm.add_custom_button('Button 2', () => {
	// 				frappe.msgprint("Here is the 2nd Button")
	// 			}, "Button")
	// 		},
			
	// 	});

			// Form API  frm.set_df_property
	//        frappe.ui.form.on('New Doc', {
	// 	       refresh: function (frm) {
	// 		    frm.add_custom_button('New Button', () => {
	// 			frm.set_df_property("prac1", 'reqd', 1)
	// 		})
			
	// 	},
		
	// });
	

	// Form API  frm.add_child
	// code k through child table me data add krny k liay
	//        frappe.ui.form.on('New Doc', {
	// 	       refresh: function (frm) {
	// 		    frm.add_custom_button('New Button', () => {
				

	// 				let row = frm.add_child('child_table', {
	// 					name1: ' Racket',
	// 					age: 2,
	// 					gender: "Male"
	// 				});
					
	// 				frm.refresh_field('child_table');

	// 		})
			
	// 	},
		
	// });
	


	