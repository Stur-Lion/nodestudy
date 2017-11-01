var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
mongoose.Promise = global.Promise;

//var Cat = mongoose.model('Cat', { name: String });
var mouse = mongoose.model('mouse', { name: String ,age:String});

//var kitty = new Cat({ name: 'Zildjian' });
var mou = new mouse({ name: 'lion',age: '30'});
/*kitty.save(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('meow');
    }
});*/
/*mou.save(function(){
    console.log('ceshi');
})*/

mouse.find({'name':'lion','age':'13'},function(err,data){
    console.log(data);
    data[0].age='100'
    data[0].save()
})