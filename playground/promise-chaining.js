require("../src/db/mongoose");
const User = require("../src/models/user");

User.findByIdAndUpdate("63eb799ac6263104deeee181", { age: 25 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 25 });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
