sap.ui.define([
		"sap/ui/core/Control"
	],function(Control){
		"use strict";
		
		return Control.extend("CustomControlUI5.control.Abhi",{
			metadata:{
				properties: {
					value : {type : "string"}
				}

			},
			
			init: function(){
				
			},
			
			renderer : function(oRM, oControl){
				oRM.write("This is custom control");
			}
		});
		
	}
);
	
	
	
