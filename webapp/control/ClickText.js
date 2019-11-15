sap.ui.define([
		"sap/ui/core/Control"
	],function(Control){
		"use strict";
		
		return Control.extend("CustomControlUI5.control.ClickText",{
		
			metadata:{
				
				properties:{
					txt : { type : "string"}
				},
				
				events:{
					press:{
						
					}
				}
			},
			
			renderer : function(oRM, oControl){
					oRM.write("<div");
					oRM.writeControlData(oControl);
					oRM.addClass("blink");
					oRM.writeClasses();
					oRM.write(">");
					
					oRM.writeEscaped(oControl.getTxt());
					oRM.write("</div>");
			},
			
			onclick: function(evt){
				this.fireEvent("press");
			}
			
		});
	
});