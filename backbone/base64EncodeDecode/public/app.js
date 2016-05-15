_.templateSettings = {
     interpolate: /\{\{(.+?)\}\}/g
};	

var DecodeView = Backbone.View.extend({
  initalize: function() {
    console.log("decode view setup");
  },
  model:DecodeModel,  
  template: _.template($('#decodeView').html()),
  render: function() {
    var model = this.model.toJSON();
    this.el.innerHTML = this.template(model);
    return this;
  }

});

var DecodeModel = Backbone.Model.extend({});

var DecodeRouter = Backbone.Router.extend({
	initialize: function(options) {
	  this.main = options.main;
	},
	routes: {
	  '':'index',
          'decode': 'decodeString'
	},
	index: function() {
	  var decodeModel = new DecodeModel({toBeDecoded: "enter string to be decoded"});	       
	  var dv = new DecodeView({model: decodeModel});
	  this.main.html(dv.render().el); 
	},
	decodeString: function() {
          console.log('decoding.....');	
	}

});

