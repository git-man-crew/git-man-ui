sap.ui.define([
	"sap/ui/base/Object",
	"sap/ui/model/json/JSONModel"
], function (BaseObject, JSONModel) {

	let GitAPI = BaseObject.extend("gitman.web.GitAPI", /** @lends gitman.web.GitAPI */ {

		constructor: function () {
			this.sServiceUrl = 'http://localhost:3000/git';
		}
	});

	GitAPI.prototype.getSupportedPlatforms = () => {
		return fetch(`${this.sServiceUrl}/supportedPlatform`)
			.then((response) => {
				return response.json();
			})
			.then((aPlatforms) => {
				return aPlatforms;
			});
	};

	return GitAPI;
});