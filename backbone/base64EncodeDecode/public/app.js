_.templateSettings = {
     interpolate: /\{\{(.+?)\}\}/g
};	

var DecodeView = Backbone.View.extend({
  initalize: function() {
    this.model.on('change', this.render, this);
    console.log("decode view setup");
  },
  model: DecodeModel,
  events: {
    'click button': 'decodeString'		    
  },
  template: _.template($('#decodeView').html()),
  render: function() {
    console.log('tbd:'+ this.model.get('toBeDecoded'));
    var model = this.model.toJSON();
    console.log('json is: ' + this.model.attributes);
    this.el.innerHTML = this.template(model);
    return this;
  },
  decodeString: function(e) {
    var stringToBeDecoded = $("#toBeDecoded").val();
    console.log('decode clicked: ' + stringToBeDecoded);
    this.model.set('toBeDecoded', stringToBeDecoded);
    this.model.set('decoded', 'blah blah blah');
    this.model.save();
  }

});

var DecodeModel = Backbone.Model.extend({
	defaults:{'toBeDecoded':'sample', 'decoded':'sample2'},
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

