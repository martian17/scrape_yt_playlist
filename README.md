# Scrape Youtube Playlist
This script can scrape any playlist as well as my mix  
1. First open play your playlist, and open the developer console.  
2. Then paste in the `scraper.js` content, and hit enter. The currently displayed section of my mix will be scraped and 
the resulting JSON will appear on the console.  
3. Copy the JSON text, and paste it to `scraped.json` (create it yourself).  
4. Click on the bottom-most video, and repeat the step 2, 3, 4 until you run out of videos (in my case the total length ended up 
being 524). When you paste in new JSON, make sure to insert a newline after the previous JSON.  
5. In your terminal, run `node concatenate.js > concatenated.json`. `concatenated.json` file will be generated. 
This file will include all your video IDs in `v=JKHcbahE` format.  
6. In your terminal, run `node to_urls.js > urls.txt`. This will create `urls.txt`, which will contain urls grouped every 200 entries.  
7. Go to https://soundiiz.com/, and sign up. Open YouTube tab and select connect. Then open "Playlist", and you will see all your playlist here.  
8. On the top right corner, click "Import Playlist". Then select "From Plain Text"  
9. From `urls.txt`, paste in your first 200 urls, and follow the instruction to create your playlist. Name it "number 1" 
or something with number so you can recognize the ordering of.  
10. Repeat 8 and 9 until you run out of things to paste from `url.txt`.  
11. On YouTube, create a new playlist containing no content, and name it to your liking. This will be your final playlist.  
12. Go to your "number 1" playlist you created in the step 9. Click on the left options (three dots), and select "Add all to". 
Then select the playlist you created in step 11. The contents of the "number 1" playlist will be appended to the playlist.  
13. Repeat step 12 until you run out of playlist to add.  