require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("63eb59a0ce5f1806cc5b1650")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("63eb7c062747deeba350d602")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
