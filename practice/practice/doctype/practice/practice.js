// Copyright (c) 2024, nextash and contributors
// For license information, please see license.txt

frappe.ui.form.on('Practice', {
     refresh: function(frm) {
        frm.add_custom_button('My Button', () => {
			    list = frappe.db.get_list("Personal" , "*")
				for(let row of list){
					doc= frappe.get_doc("Personal" , row.name )
					for(let child of doc){
						 frm.add_child('family', {
							"member_name" : child.member_name,
							"relation" :  child.relation,
							"age" : child.age
						});
					}
				}
				frm.refresh_field('family');
			})
                    }
                }
            );



	// validate: function(frm){
	// 	console.log(frm.doc.creation);
	// 	frappe.msgprint('')



	// 	// if(frm.doc.full_name == "abc"){
	// 	// 	frm.disable_save();
	// 	// }
	// 	// else{
	// 	// 	frm.enable_save();
	// 	// }
	// },
	// full_name: function(frm){
	// 	frm.refresh()
	// }
	// frm.add_custom_button('My Button', () => {
		// 	let row = frm.add_child('family', {
		// 		member_name: 'Shahid',
		// 		relation: "ABC",
		// 	});
			
		// 	frm.refresh_field('family');
		// })

	

	
	
	// last_name: function(frm){
	// 	if(frm.doc.last_name == "Shahid"){
	// 		frm.set_df_property("first_name", 'read_only', 1)
	// 	}
	// 	else{	
	// 		frm.set_df_property("first_name", 'read_only', 0)
	// 	}
	// }









	// last_name: function(frm, dt, dn) {
	// 	let full_name = frm.doc.first_name + " " + frm.doc.last_name
	// 	frm.set_value({'full_name' : full_name, })
	// 	frm.refresh()
	// 	// // frm.save()
	// 	// // // frm.save('Submit')
	// 	// // if(frm.doc.last_name == "abc"){
	// 	// 	frappe.msgprint("HELLO")
	// 	// }
	// // },
	// // timeline_refresh: function(frm) {
	// // 	// frappe.msgprint("HEllo")
	// // 	frappe.throw("error")
	// },
	// refresh: function(frm, dt, dn) {
	// 	frm.add_custom_button('Button', () => {
	// 		let full_name = frm.doc.first_name + " " + frm.doc.last_name
	// 		frm.set_value({'full_name' : full_name, })
	// 	})
	// 	frm.add_custom_button('Button 1', () => {
	// 		let },
	// timeline_refresh: function(frm) {
	// 	// frappe.msgprint("HEllo")
	// 	frappe.throw("error")
	// },full_name = frm.doc.first_name + " " + frm.doc.last_name
	// 		frm.set_value({'full_name' : full_name, })
	// 	}, "Button")
	// 	frm.add_custom_button('Button 2', () => {
	// 		let full_name = frm.doc.first_name + " " + frm.doc.last_name
	// 		frm.set_value({'full_name' : full_name, })
	// 	}, "Button")
	// 	if(frm.is_new()){
	// 		frm.set_intro(last_name: function(frm, dt, dn) {'Please set the value of description', 'green');
	// 	}
	// 	if(!frm.doc.full_name){
	// 		frm.disable_save();
	// 	}
	// 	else{
	// 		frm.enable_save();
	// 	}
	// },

// });

// frappe.ui.form.on('Family Members', { // The child table is defined in a DoctType called "Dynamic Link"
//     (frm, cdt, cdn) { 
//         frappe.msgprint('A row has been ADD to the links table 🎉 ');
//     }
// });
