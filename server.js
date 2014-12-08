var express = require('express');
var faker = require('faker');

var app = express();

app.get('/api/random-user', function (req, res) {
  var user = faker.Helpers.userCard();

  user.avatar = faker.Image.avatar();
  res.json(user);

});

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/app.html'));


app.listen(3000, function () {
  console.log('Listening on port 3000...');
});
