const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPassword = process.env.password;

bcrypt.hash(myPassword, saltRounds, function(err, hash) {
  console.log(hash)
});
