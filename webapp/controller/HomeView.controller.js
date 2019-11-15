sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller, MessageToast) {
	"use strict";

	return Controller.extend("CustomControlUI5.controller.HomeView", {

		onCustomPress: function() {
			MessageToast.show("press event fired from Custom UI");
		},

		onProdRating: function(oEvent) {
			var fValue = oEvent.getParameter("value");
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
			MessageToast.show(oResourceBundle.getText("ratingConfirmation", [fValue]));
		},

		onTxtPress: function() {
			MessageToast.show("Clickable Text Pressed");

		}

	});

});