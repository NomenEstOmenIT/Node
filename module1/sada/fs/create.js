const fs = require("fs");

fs.appendFile("test.txt", "Hello World !!!", err => {
  if (err) {
    console.error(err);
  }
});

fs.open("test2.txt", "w", err => {
  if (err) {
    console.error(err);
  }
});
