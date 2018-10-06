var fs = require("fs");

console.log("Going to create directory /html/test_dir");
fs.mkdir('html/test_dir',function(err){
   if (err) {
      return console.error(err);
   }
   console.log("Directory created successfully!");
});