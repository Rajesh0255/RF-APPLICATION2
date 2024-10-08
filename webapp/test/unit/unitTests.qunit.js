/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comapp/rf_application_2/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
