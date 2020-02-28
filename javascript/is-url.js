const prompt = require("prompt-sync")();

function isURL(str) {
  return /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/.test(str);
}

const url = prompt("Insert url: ");
console.log(`${url} is ${isURL(url) ? "valid" : "invalid"} url`);
