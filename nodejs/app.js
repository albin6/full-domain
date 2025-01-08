// error first callback
// --------------------
// these are standard pattern in nodejs for handling asynchronous operations where the first parameter of the callback is reserved
// for an error(If any occur).

const fs = require("fs");

fs.readFile("myFile.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error occured while reading file", err);
  }
  console.log(data);
});

function myFunc(cb) {
  const data = { name: "Albin" };
  const err = null;

  cb(err, data);
}

function errFunc(err, data) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
}

myFunc(errFunc);
