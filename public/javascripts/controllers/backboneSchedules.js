$(function(){

  window.Schedule = Backbone.Model.extend({

    defaults: function() {
      return {
        date: '2012/03/13',
        hour: '12:00:00',
        tutoring_type: 'by phone',
        location: '',
        phone_number: '88',
        user_id: '6'
      };
    }

});


  window.ScheduleList = Backbone.Collection.extend({

    model: Schedule,
      url: '/schedules'
});


  window.Schedules = new ScheduleList;

  window.ScheduleView = Backbone.View.extend({

});

  window.AppView = Backbone.View.extend({

});

  window.App = new AppView;

});
