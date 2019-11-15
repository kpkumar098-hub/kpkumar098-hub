sap.ui.define([
		"sap/ui/core/Control"
	],function(Control){
		"use strict";
		
		return Control.extend("CustomControlUI5.control.xyz",{
			metadata:{
				properties: {
					value : {type : "string"}
				}

			},
			
			init: function(){
				
			},
			
			renderer : function(oRM, oControl){
				oRM.write("<br>");
				oRM.write("<div style=\"color:#0000FF\">");
				oRM.write("Value = " + oControl.getValue());
				oRM.write("</div>");
			}
		});
		
	}
);