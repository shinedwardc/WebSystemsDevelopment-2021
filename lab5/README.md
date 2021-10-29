Lab 5
============
Edward Shin
============
Frontend Optimization
-------------
This lab's focus was to learn how optimizing front end can impact a webpage's performance in various ways. For the 7 optimizations,
1. I made CSS and Javascript external
2. Put CSS reference at top, used defer tag for Javascript
3. Minified CSS and Javascript for efficiency
   - I combined identical CSS rules into one, wrote effecient selectors
4. Converted unncesary Javascript into CSS
  - I changed the existing functions display, type, and untype functions to make the functionalities simpler and to reduce unnesccary lines of Javascript code.
  - I removed parts from the window onload function so that they are just loaded through CSS
5. Used image sprites to combine the alphabets to save request overhead 
6. Compress Javascript using JSCompress
7. Enabled GZip compression 
  - I configured GZip compression by editing the apache file httpd.conf, by inputting these lines at the end of the file:
  - AddOutputFilterByType DEFLATE text/plain
  -  AddOutputFilterByType DEFLATE text/html
  -  AddOutputFilterByType DEFLATE text/xml
  -  AddOutputFilterByType DEFLATE text/css
  -  AddOutputFilterByType DEFLATE application/xml
  -  AddOutputFilterByType DEFLATE application/xhtml+xml
  -  AddOutputFilterByType DEFLATE application/rss+xml
  -  AddOutputFilterByType DEFLATE application/javascript
  -  AddOutputFilterByType DEFLATE application/x-javascript

Additional functionality/changes
----------
- I slightly changed light/dark mode so that dark mode changed the text to white so that it is more visually appealing.
- I changed the functions so that the hexagons when pressed will change color instead of changing size, for the reason that the original method of changing hexagon sizes were inefficient.
- I added the highest score section. The number does not change until a new high score is reached within the week, and the high score will be saved and carried on for the remainder of the week. This was implemented using localStorage in order to store data even when the browser is closed the data will not be deleted. The high score will be resetted every week, which I implemented Date.now() for this.

Comments & Reflection
--------------
Over the week I managed to first find a list of  what optimizations were appropriate for this website. I chose some of the optimizations above, starting with the basics such as implementing external CSS and Javascript files, to the code functionalities because a lot looked tedious or unnecessary.
I struggled in making the changed Javascript work because the function methods are a lot different in terms of display. I also had trouble in enabling Gzip compression, because I could not understand what the httpd.conf file was, and I had a hard time trying to found resources that told the location of the file. Managing to access the right width for the alphabet I wanted from the sprite was hard to implement in the beginning as well, but I managed to subtract the wanted alphabet's ascii number by 97, to get the index of the right alphabet. The sprite was in alphabetical order for this reason of convenience. 
