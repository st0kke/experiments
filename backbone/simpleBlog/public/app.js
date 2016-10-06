
 _.templateSettings = {
     interpolate: /\{\{(.+?)\}\}/g
};	

var Comment = Backbone.Model.extend();
var Comments = Backbone.Collection.extend({
  initialize: function(models, options) {
    this.url = options.postUrl + "/comments";
  }
});

var Post = Backbone.Model.extend({
  initialize: function()  {
    this.comments = new Comments([], {postUrl: this.url() });
  }
});
var Posts = Backbone.Collection.extend({
  model: Post,
  url: "/posts"
});



var PostListView = Backbone.View.extend({
	tagName: "li",
	template: _.template("<a href='/posts/{{id}}'>{{title}}</a>"),
	render: function() {
		this.el.innerHTML = this.template(this.model.toJSON());
		return this;
	},
        events: {
	  'click a': 'handleClick'
	},

	handleClick: function(e) {
	  e.preventDefault();
	  postRouter.navigate($(e.currentTarget).attr("href"),
	    {trigger: true});	  
	}	
});

var PostsListView = Backbone.View.extend({
	template: _.template("<h1>My Blog</h1><ul></ul>"),

  initialize: function(options) {
    this.collection.on('add', this.newPost, this);
  },


  newPost: function() {
    console.log('new post added');
  },
  
	render: function() {
	  this.el.innerHTML = this.template();
    var ul = this.$el.find("ul");
    this.collection.forEach(function(post) {
      console.log("adding");
      ul.append(new PostListView({model: post}).render().el);    
	   });
    return this;
  }
});

var PostView = Backbone.View.extend({
  template: _.template($("#postView").html()),
  
  events: {
    'click a' : 'handleClick'
  },
  render: function() {
    var model = this.model.toJSON();
    model.pubDate = new Date(Date.parse(model.pubDate)).toDateString();
    this.el.innerHTML = this.template(model);
    return this;
  },
  handleClick: function(e) {
    e.preventDefault();
    postRouter.navigate($(e.currentTarget).attr("href"), {trigger: true});
    //return false; 
  }
  
});

var PostFormView = Backbone.View.extend({
  tagName: 'form',
  template: _.template($("#postFormView").html()),
  initialize: function(options) {
    this.posts = options.posts;
  },
  events: {
    'click button' : 'createPost'
  },
  render: function() {
    this.el.innerHTML = this.template();
    return this;
  },
  createPost: function(e) {
    var postAttrs = {
      content: $("#postText").val(),
      title: $("#postTitle").val(),
      pubDate: new Date()
    };
    console.log(postAttrs);
    this.posts.create(postAttrs);
    postRouter.navigate("/", {trigger: true});
    return false;
  }

});

var CommentView = Backbone.View.extend({
  template: _.template($('#commentView').html()),
  render: function() {
    var model = this.model.toJSON();
    this.el.innerHTML = this.template(model);
    return this;
  }

});

var CommentFormView = Backbone.View.extend({
  tagName: "form",
  initialize: function(options) {
    this.post = options.post;
  },
  template: _.template($("#newCommentView").html()),
  events: {
    'click button': 'submitComment'
  },
  render: function() {
    this.el.innerHTML = this.template();
    return this;
  },
  submitComment: function(e) {
    e.preventDefault();
    var name = this.$("#cmtName").val();
    var comment = this.$("#cmtText").val();
    var commentAttrs = {
      postId: this.post.get("id"),
      name: name,
      text: comment,
      commentDate: new Date()
    };
    this.post.comments.create(commentAttrs);
    this.el.reset();

  }

});

var CommentsView = Backbone.View.extend({
  initialize: function(options) {
    this.post = options.post;
    this.post.comments.on('add', this.showNewComment, this);
  },
  render: function() {
    console.log("attempting render");
    this.$el.append("<h2>Comments</h2>");
    this.$el.append(new CommentFormView({post: this.post}).render().el);
    this.post.comments.fetch();
    return this;
  },
  showNewComment: function(comment) {
    this.$el.append(new CommentView({model: comment}).render().el);
  }

});


var PostRouter = Backbone.Router.extend({
  initialize: function(options) {
    this.posts = options.posts;
    this.main = options.main;
  },
  routes: {
    '': 'index',
    'posts/new': 'newPost',
    'posts/:id': 'singlePost'
  },
  index: function() {
    var pv = new PostsListView({collection: this.posts});
    this.main.html(pv.render().el);
  },
  singlePost: function(id) {
    var post = this.posts.get(id);
    var pv = new PostView({model: post});
    this.main.html(pv.render().el);   
    var cv = new CommentsView({post: post});
    this.main.append(cv.render().el);
  },
  newPost: function() {
    console.log('creating a new post');
    var pfv = new PostFormView({posts: this.posts});
    this.main.html(pfv.render().el);
  }

});





