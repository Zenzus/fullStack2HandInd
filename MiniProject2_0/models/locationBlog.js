var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var LocationBlogSchema = new Schema({
    info: {type: String,required:true },
    img : String,
    pos : {
        longitude : {type : Number, required:true},
        latitude : {type : Number, required:true}

    },
  //  author: {type: Schema.ObjectId,}
    author: {type: Schema.Types.ObjectId,red:"User",required:true},
    likeBy: [Schema.Types.ObjectId],
    created : {type: Date, default: Date.now},
    lastUpdated : Date,
})

LocationBlogSchema.virtual("likedBycount").get(function(){
    return this.likedBy.length;
})

LocationBlogSchema.pre("update",function(next){
    this.update({},{$set: {lastUpdated: new Date()}})
    next();
   })
   var locationBlog = mongoose.model("LocationBlog", LocationBlogSchema);
   module.exports = locationBlog;