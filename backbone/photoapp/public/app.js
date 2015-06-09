_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

var Photo = Backbone.Model.extend({
  urlRoot: "/photos",

  sync: function(method, model, options) {
    var opts = {
      url: this.url(),
      success: function(data) {
        if (options.success) {
          options.success(data);
        }
      }
   };

   switch(method) {
     case "create":
       opts.type = "POST";
       opts.data = new FormData();
       opts.data.append("file", model.get('file'));
       opts.data.append("caption", model.get('caption'));
       opts.processData = false;
       opts.contentType = false;
       break;
     default:
       opts.type = "GET";
    }
    return $.ajax(opts);
  }
}); 

var Photos = Backbone.Collection.extend({
  model: Photo
});

var AddPhotoView = Backbone.View.extend({
  tagName: "form",
  initialize: function(options) {
    this.photos = options.photos; 
  },
  template: _.template($("#addPhotoView").html()),
  events: {
    "click button":"uploadFile"
  },
  render: function() {
    this.el.innerHTML = this.template();
    return this;
  },
  uploadFile: function(evt) {
    evt.preventDefault();
    var photo = new Photo({
      file: $("#imageUpload")[0].files[0],
      caption: $("#imageCaption").val()
    });
    this.photos.create(photo, {wait: true});
    this.el.reset();
  }
});

var NavView = Backbone.View.extend({
  template: _.template($("#navView").html()),
  render: function() {
    this.el.innerHTML = this.template(USER);
    return this;
  }
});

var AppRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.main = options.main;
    this.navView = new NavView();
  },
  routes: {
    '': 'index'
  },
  index: function() {
    this.main.html(this.navView.render().el);
  }
});

