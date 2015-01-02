var HomeView = Backbone.View.extend({
    el: '#content',
    initialize: function(options) {
        console.log("HomeView.initialize");
        this.options = options;
        this.template = _.template(TemplateStore.request('home'));
    },
    events: {
        "click .fa-user-md":"goToGuideView"
    },
    render: function() {
        console.log("HomeView.render");
        this.$el.html(this.template());
        return this;
    },
    goToGuideView: function() {
        console.log("HomeView.goToGuideView");
        app.router.navigate('guide', {trigger: true});
    }
});