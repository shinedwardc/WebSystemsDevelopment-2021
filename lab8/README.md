# Edward Shin #
# Lab 8 #
## Reflection ##
For this lab, I first created a json document with the top level object labeled as Websys_course, <br />
with Lectures and Labs seperated into two objects a level lower, with each lecture and lab information. <br />
Following the json file I developed the backend of the site using PHP for handling credential authentication. <br />
I made three total files for this, db.php, login.php, and logout.php. If the user is not logged in, the user will automatically go to login.php<br />
where the user inputs in a username and a password. This gets sent into db.php where the site connects to the local database, queries the database to see if the inputted username and password exists, and if so, goes to index.php. <br />
index.php allows the user to look at the topics covered in this course, with the option to archive a course's information into the local database. <br />
While I believe I managed to get the archive backend part, I had a lot of trouble with outputting the information into the website for some reason, which prevented me from archiving. The jQuery frontend was the hardest part because of parsing data and outputting did not work as intended. <br />
Therefore, I do not have the correct output for highlighting a topic's information, although I strongly believe my code has no clumsy mistakes.
