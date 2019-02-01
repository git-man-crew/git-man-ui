sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"gitman/web/modules/GitAPI.module"
], function (Controller, GitAPI) {
	"use strict";

	return Controller.extend("gitman.web.controller.SupportedPlatform", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf gitman.web.view.SupportedPlatform
		 */
		onInit: function () {
			//test
			this.oGitAPI = new GitAPI();
			this.oGitAPI
				.getSupportedPlatforms()
				.then(aPlatform=>{
					debugger;
				})
				.catch(error=>{
					//todo:
					debugger;
				});
			
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf gitman.web.view.SupportedPlatform
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf gitman.web.view.SupportedPlatform
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf gitman.web.view.SupportedPlatform
		 */
		//	onExit: function() {
		//
		//	}

	});

});