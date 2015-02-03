var Router = Backbone.Router.extend({
	routes: {
		'':'init',
		'home':'home',
		'guide':'guide',
        'reminders':'reminders'
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
	},
    reminders: function() {
        console.log("Router.reminders");
        var remindersView = new RemindersView();
        app.showBodyView(remindersView);
    }
});