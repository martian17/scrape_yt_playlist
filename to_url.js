let fs = require("fs");


let ids = JSON.parse(fs.readFileSync("./concatenated.json"));
let urls = ids.map(id=>"https://www.youtube.com/watch?"+id);
console.log("\n\n\n");
for(let i = 0; i < urls.length; i+=200){
    console.log(urls.slice(i,i+200).join("\n"));
    console.log("\n\n\n");
}
console.log(`total size: ${urls.length}`);