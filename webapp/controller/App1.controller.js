/* global Quagga:true */
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function(Controller, MessageBox) {
	"use strict";

	return Controller.extend("barcodeScanner.controller.App1", {
		onWeiter: function(oEvent){
			//this.getOwnerComponent().getRouter().navTo("page2");
			jQuery.sap.require("sap.ndc.BarcodeScanner");
			
			var searchField = this.getView().byId("ip");  
			sap.ndc.BarcodeScanner.scan(
			     function a(mresult) {searchField.setValue(mresult.text);}
			);
			
		}

	});
});
