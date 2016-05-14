_.templateSettings = {
     interpolate: /\{\{(.+?)\}\}/g
};	

var DecodeRouter = Backbone.Router.extend({
	initialize: function(options) {
	  this.main = options.main;
	},
	routes: {
	  '':'index',
          'decode': 'decode'
	},
	index: function() {
	  var dv = new DecodeView({model: DecodeModel());
	  this.main.html(dv.render().el); 
	}
});
