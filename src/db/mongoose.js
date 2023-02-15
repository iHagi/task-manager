const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
});

// const taskOne = new Task({ description: "Clean the kitchen  " });

// taskOne
//   .save()
//   .then(() => {
//     console.log(taskOne);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const you = new User({
//   name: "Ivko",
//   email: "ivko@abv.bg",
//   password: "Passi123",
//   age: 30,
// });

// const me = new User({
//   name: "Ivan",
//   age: 27,
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
