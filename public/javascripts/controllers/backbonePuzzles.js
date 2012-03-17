$(function(){

  window.Puzzle = Backbone.Model.extend({

    defaults: function() {
      return {
        user_id: '64',
        title: 'Quarterback1',
        latency: 'ok',
        done: '1'
      };
    }

});


  window.PuzzleList = Backbone.Collection.extend({

    model: Puzzle,
      url: '/puzzles'
});


  window.Puzzles = new PuzzleList;

  window.PuzzleView = Backbone.View.extend({

});

  window.AppView = Backbone.View.extend({

});

  window.App = new AppView;

});
