const mymodule = require('./mymodule')

mymodule(process.argv[2], process.argv[3], (err, result) => {
  if (err) console.log(err);
  console.log(result.join("\n"));
});
