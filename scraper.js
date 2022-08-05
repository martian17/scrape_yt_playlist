//paste this into your console while playing a playlist
//keep pasting the result into scraped.json with newline until the end of the playlist

let getSnapshot = function(){
    let items = [...document.querySelector("#secondary-inner>#playlist>#container>#items").children].map(item=>{
    return item.querySelector("#wc-endpoint").getAttribute("href").split(/[\?\&]/)[1];
});
    console.log(items.length);
    return JSON.stringify(items);
}
console.log(getSnapshot());