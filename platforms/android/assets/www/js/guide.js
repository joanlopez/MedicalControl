var GuideView = Backbone.View.extend({
    el: '#content',
    initialize: function(options) {
        console.log("GuideView.initialize");
        this.options = options;
        this.template = _.template(TemplateStore.request('guide'));
    },
    events: {
        "click .DIfoot":"goToAddress"
    },
    render: function() {
        console.log("GuideView.render");
        this.$el.html(this.template());
        return this;
    },
    goToAddress: function(ev) {
        console.log("GuideView.goToAddress");
        var address = $(ev.currentTarget).text();
        var newWindow = window.open("http://maps.google.com/?q=" + address, "_system");
        newWindow.addEventListener("exit", function () {
            this.close();
        });
    }
});