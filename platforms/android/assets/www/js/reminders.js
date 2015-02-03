var RemindersView = Backbone.View.extend({
    el: '#content',
    initialize: function(options) {
        console.log("RemindersView.initialize");
        this.options = options;
        this.template = _.template(TemplateStore.request('reminders'));
    },
    events: {
        "click #addLocalNotification":"addLocalNotification"
    },
    render: function() {
        console.log("RemindersView.render");
        this.$el.html(this.template());
        return this;
    },
    addLocalNotification: function() {
        console.log("RemindersView.addLocalNotification");

        //Getting from input
        var year = $('input[name="year"]').val();
        var month = $('input[name="month"]').val();
        var day = $('input[name="day"]').val();
        var hours = $('input[name="hours"]').val();
        var minutes = $('input[name="minutes"]').val();
        var seconds = $('input[name="seconds"]').val();
        var milliseconds = $('input[name="milliseconds"]').val();

        var date = new Date(year, month, day, hours, minutes, seconds, milliseconds);
        var title = "Nuevo recordatorio";
        var message = "Estamos probando este plugin";

        window.plugin.notification.local.add({
            date:date,
            message:message,
            title:title
        });

        console.log("LocalNotification added:");
        console.log(date);
    }
});