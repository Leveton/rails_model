App.Controllers.Puzzles = Backbone.Controller.extend({
    routes: {
        "puzzles/:id":            "edit",
        "":                         "index",
        "new":                      "newDoc"
    },

    edit: function(id) {
        var doc = new Puzzle({ id: id });
        doc.fetch({
            success: function(model, resp) {
                new App.Views.Edit({ model: doc });
            },
            error: function() {
                new Error({ message: 'Could not find that puzzle.' });
                window.location.hash = '#';
            }
        });
    },

    index: function() {
        $.getJSON('/puzzles', function(data) {
            if(data) {
                var puzzles = _(data).map(function(i) { return new Puzzle(i); });
                new App.Views.Index({ puzzles: puzzles });
            } else {
                new Error({ message: "Error loading puzzles." });
            }
        });
    },

    newDoc: function() {
        new App.Views.Edit({ model: new Puzzle() });
    }
});
