//go back to the top of the playlist
//run it like this: await back_to_top();
//if it stops in the middle, run it again
let back_to_top = async function(){
    let prevHead = null;
    while(true){
        let links = [...document.querySelectorAll("#container>#items>ytd-playlist-panel-video-renderer>a")];
        let shot = links.map(a=>a.getAttribute("href"));
        let head = shot[0];
        if(head === prevHead)break;
        prevHead = head;
        links[0].parentNode.parentNode.scrollTo(0,0);
        links[0].click();
        //timeout before clicking the next link
        await new Promise((r)=>setTimeout(r,1000));
    }
};
//function to scrape everything
//run it like this: let result = await scrape();
//if it stops in the middle, run await back_to_top();, and try again
let scrape = async function(){
    let snapshots = [];
    let prevTail = null;
    while(true){
        let links = [...document.querySelectorAll("#container>#items>ytd-playlist-panel-video-renderer>a")];
        let shot = links.map(a=>a.getAttribute("href").split(/[\?\&]/)[1]);
        console.log(`took snapshot of length: ${shot.length}`);
        let tail = shot[shot.length-1];
        if(tail === prevTail)break;
        prevTail = tail;
        snapshots.push(shot);
        console.log(`snapshot: ${JSON.stringify(shot)}`);
        links[0].parentNode.parentNode.scrollTo(0,100000);
        links[links.length-1].click();
        //timeout before clicking the next link
        await new Promise((r)=>setTimeout(r,3000));
    }
    return concatenate(snapshots);
};
//internal function to concatenate sections of array with overlapping contents
let concatenate = function(arrs){
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
    return result;
};

let result = await scrape();
console.log("the result is here!");
console.log(JSON.stringify(result));