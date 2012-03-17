$(function(){

  window.User = Backbone.Model.extend({

    defaults: function() {
      return {
        username:  'mleveton',
        email: 'mleton@gmail.com',
        user_id: '64'
      };
    }

});


  window.UserList = Backbone.Collection.extend({

    model: User,
      url: '/users'
});


  window.Users = new UserList;

  window.UserView = Backbone.View.extend({

});

  window.AppView = Backbone.View.extend({

});

  window.App = new AppView;

});

 function createUser(){
      Users.create();
}
