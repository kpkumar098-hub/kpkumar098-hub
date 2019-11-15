sap.ui.define([
	"sap/ui/core/Control",
	"sap/m/Button"
], function(Control, Button) {
	"use strict";

	return Control.extend("CustomControlUI5.control.MyCustomUI", {

		metadata: {
			properties: {
				value: {
					type: "string"
				}
			},

			aggregations: {
				_button: {
					type: "sap.m.Button",
					multiple: false,
					visibility: "hidden"
				}
			},

			events: {
				press: {
					parameters: {
						value: {
							type: "string"
						}
					}
				}
			}
		},

		init: function() {
			console.log("inside _onSubmit");
			this.setAggregation("_button", new Button({
				text: "ABAO",
				press: this._onSubmit.bind(this)
			}));
		},

		_onSubmit: function(oEvent) {
			console.log("inside _onSubmit");

			this.fireEvent("press", {
				value: this.getValue()
			});
		},

		renderer: function(oRM, oControl) {

			oRM.write("<div");
			oRM.writeControlData(oControl);
			oRM.addClass("myRedText ");
			oRM.writeClasses();
			oRM.write(">");
			// oRM.writeEscaped(oControl.getValue());
			oRM.renderControl(oControl.getAggregation("_button"));
			oRM.write("</div>");
		}

		// an event handler:
		// onclick : function(evt) {   // is called when the Control's area is clicked - no event registration required
		//     alert("Control clicked! Text of the Control is:\n" + this.getValue());
		// }

	});

});