var app = {
    initialize: function() {
        this.bindEvents();
        this.router = new Router();
        Backbone.history.start();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('backbutton', this.onBackButton, false);
    },
    onDeviceReady: function() {
        console.log("deviceready");
    },
    onBackButton: function() {
        console.log("backbutton");
        window.history.back();
    },
    showBodyView: function(view) {
        console.log("showBodyView");
        if(this.currentBodyView) {
            this.currentBodyView.undelegateEvents();
            this.currentBodyView.stopListening();
            if(this.currentBodyView.collection) {
                this.currentBodyView.collection.stopListening();
            }
        }
        this.currentBodyView = view;
        var result = this.currentBodyView.render();
        resize();
        return result;
    }
};
