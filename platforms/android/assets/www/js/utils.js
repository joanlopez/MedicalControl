var TemplateStore = {
	initialize: function(platform, resolution, pixelRatio) {
		this.platform = platform;
		this.resolution = resolution;
		this.pixelRatio = pixelRatio;
	},
	request: function(templateName) {
		if(TemplateStore[templateName]) return TemplateStore[templateName];
		var xhr = new XMLHttpRequest();
		xhr.open('GET',"templates/" + templateName + ".html", false);
		xhr.onError = function(err) {
			console.error('TemplateStore Error: '+err.message);
		};
		xhr.send();
		var response = xhr.response;
		TemplateStore[templateName] = response;
		return response;
	}
};