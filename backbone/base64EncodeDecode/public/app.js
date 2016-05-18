_.templateSettings = {
     interpolate: /\{\{(.+?)\}\}/g
};	

var DecodeView = Backbone.View.extend({
  initalize: function() {
    console.log("decode view setup");
  },
  events: {
    'click button': 'decodeString'		    
  },
  template: _.template($('#decodeView').html()),
  render: function() {
    var model = this.model.toJSON();
    this.el.innerHTML = this.template(model);
    return this;
  },
  decodeString: function(e) {
    var stringToBeDecoded = $("#toBeDecoded").val();
    console.log('decode clicked: ' + stringToBeDecoded);
    this.model.set('toBeDecoded', stringToBeDecoded);
    this.model.save();
  }

});

var DecodeModel = Backbone.Model.extend({
  url: '/decode',
  parse: function(response) {
    console.log('received response:' + response);
  }
});

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

