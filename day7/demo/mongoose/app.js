var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose', { useMongoClient: true, promiseLibrary: global.Promise });

var Cat = mongoose.model('Cat', { name: String });

var kitty = new Cat({ name: 'lion' });
console.log(kitty);
kitty.save(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('meow');
    }
});