frappe.ui.form.on("User", {
	refresh: function (frm) {

		

		frm.add_custom_button(
			__("Shinza"),
			function () {
				frappe.call({
					method: "frappe.core.doctype.user.user.reset_password",
					args: {
						user: frm.doc.name,
					},
				});
			},
			__("Password")
		);
		
	},

        })