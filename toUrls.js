let fs = require("fs");


let ids = JSON.parse(fs.readFileSync("./connected.json"));
let urls = ids.map(id=>"https://www.youtube.com/watch?"+id);
console.log(urls.slice(0,200).join("\n"));
console.log("\n\n\n");
console.log(urls.slice(200,400).join("\n"));
console.log("\n\n\n");
console.log(urls.slice(400,600).join("\n"));
console.log(urls.length);