#!/usr/bin/node

let filename = process.argv[2];
const fs = require('fs');
fs.readFile(filename, 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  } else {
    process.stdout.write(data);
  }
});
