//usage: node concatenate.js > concatenated.json

let fs = require("fs");
let arrs = (fs.readFileSync("./scraped.json")+"").split("\n").map(s=>s.trim()).filter(s=>s!=="").map(str=>{
    return JSON.parse(str)
});

//connect them all up
let result = [...arrs[0]];
for(let i = 1; i < arrs.length; i++){
    let arr = arrs[i];
    let sub = result.slice(-arr.length);
    //loop through the sub to find the beginning of arr
    let matching = false;
    let head;
    for(let j = 0; j < sub.length; j++){
        let s = sub[j];
        if(matching && s !== arr[j-head]){
            throw new Error(`arr section stopped matching at i=${i} j=${j}`);
        }
        if(s === arr[0]){
            matching = true;
            head = j;
        }
    }
    if(!matching){
        throw new Error(`not matching i=${i}`);
    }
    
    let indertion_head = result.length-sub.length+head;
    for(let j = 0; j < arr.length; j++){
        result[j+indertion_head] = arr[j];
    }
}
console.log(JSON.stringify(result));
