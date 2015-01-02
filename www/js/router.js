var Router = Backbone.Router.extend({
	routes: {
		'':'init',
		'home':'home',
		'guide':'guide'
	},
	init: function() {
		console.log("Router.init");
		app.router.navigate('home', {trigger: true});
	},
	home: function() {
		console.log("Router.home");
		var homeView = new HomeView();
        app.showBodyView(homeView);
	},
	guide: function() {
		console.log("Router.guide");
		var guideView = new GuideView();
        app.showBodyView(guideView);
	}
});