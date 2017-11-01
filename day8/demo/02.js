var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/demo', { useMongoClient: true });


var mySchema = new mongoose.Schema({
    username:String,
    age:Number,
    email:String
})
var a,b;
mySchema.statics.showInfo = function(callback){
    console.log(this);
    a=this
    this.findOne({username:'lion'},callback)
}
mySchema.methods.showInfo = function(callback){
    console.log(this);
    this.model('demo').findOne({username: 'lion'},callback)
    console.log(this.model('demo'));
    b = this.model('demo')
}

var myModel = mongoose.model('demo',mySchema)

var blog = new myModel({
    username:'lion',
    age:20,
    email:'150@qq.com'
})
/*blog.save()*/
myModel.showInfo(function(err,users){
    console.log(users);
})
blog.showInfo(function(err,user){
    console.log(user);
    console.log(a == b);
    console.log(a == myModel);
})

