# Edward Shin #
# Lab 7 #
## Part 1 ##
CREATE TABLE courses ( <br />
&emsp;&emsp;crn INT(11), <br />
&emsp;&emsp;prefix VARCHAR(4) NOT NULL, <br />
&emsp;&emsp;number SMALLINT(4) NOT NULL, <br />
&emsp;&emsp;title VARCHAR(255) NOT NULL, <br />
&emsp;&emsp;PRIMARY KEY (crn) <br />
); <br />
<br />
CREATE TABLE students ( <br />
&emsp;&emsp;RIN INT(9), <br />
&emsp;&emsp;RCSID CHAR(7), <br />
&emsp;&emsp;fname VARCHAR(100) NOT NULL, <br />
&emsp;&emsp;lname VARCHAR(100) NOT NULL, <br />
&emsp;&emsp;alias VARCHAR(100) NOT NULL, <br />
&emsp;&emsp;phone INT(10), <br />
&emsp;&emsp;PRIMARY KEY (RIN) <br />
); <br />
## Part 2 ##
ALTER TABLE students <br />
ADD street VARCHAR(256), <br />
ADD city VARCHAR(256), <br />
ADD state VARCHAR(256), <br />
ADD zip INT(6) <br />
<br />
ALTER TABLE courses <br />
ADD section SMALLINT, <br />
ADD year INT; <br />
<br />
CREATE TABLE grades ( <br />
&emsp;&emsp;id INT AUTO_INCREMENT, <br />
&emsp;&emsp;crn INT, <br />
&emsp;&emsp;RIN INT, <br />
&emsp;&emsp;grade int(3) NOT NULL, <br />
&emsp;&emsp;PRIMARY KEY (id), <br />
&emsp;&emsp;FOREIGN KEY (crn) REFERENCES courses(crn), <br />
&emsp;&emsp;FOREIGN KEY (RIN) REFERENCES students(RIN) <br />
); <br />

INSERT INTO courses (crn,prefix,number,title)<br />
VALUES 
<br />&emsp;&emsp;(52708,'CSCI',2200,'Foundations of Computer Science'),<br />
&emsp;&emsp;(50049,'CSCI',2500,'Computer Organization'),<br />
&emsp;&emsp;(53470,'ITWS',2110,'Web Systems Development'),<br />
&emsp;&emsp;(53632,'COMM',4420,'Foundations of Hci Usability'); <br/>
<br />
INSERT INTO students (RIN,RCSID,fname,lname,alias,phone)<br />
VALUES
<br />&emsp;&emsp;(661998257,'shine2','Edward','Shin','Eddie',8382170932, '15th Street', 'Troy', 'New York', 12180),<br />
&emsp;&emsp;(661998237,'wange','Eric','Wang','Eric',5183902940, '60 Rosewood Ave', 'Mount Vernon', 'Michigan', 48044),<br />
&emsp;&emsp;(661993847,'shena','Addy','Shen','Addy',3840291740, '213 South Woodland Ave', 'Pensacola', 'Florida', 32503),<br />
&emsp;&emsp;(669384028,'huc3','Catherine','Hu','Kait',3720394718, '532 Littleton Ave', 'Culpeper', 'Virginia', 22701)<br />
<br />
INSERT INTO grades (id,crn,RIN,grade) <br />
VALUES<br />
&emsp;&emsp;(1,52708,661998257,85), <br />
&emsp;&emsp;(2,50049,661998257,86), <br />
&emsp;&emsp;(3,53470,661998257,91), <br />
&emsp;&emsp;(4,53632,661998257,78), <br />
&emsp;&emsp;(5,52708,661998237,93), <br />
&emsp;&emsp;(6,50049,661998237,82), <br />
&emsp;&emsp;(7,53470,661998237,87), <br />
&emsp;&emsp;(8,53632,661998237,89), <br />
&emsp;&emsp;(9,52708,661993847,85), <br />
&emsp;&emsp;(10,50049,669384028,92) <br />
<br />
SELECT * FROM students
ORDER BY RIN, last name, RCSID, first name;<br />
RIN RCISD fname lname alias phone street city state zip <br />
661993847, shena, Addy, Shen, Addy, 3840291740, 213 South Woodland Ave, Pensacola, Florida, 32503 <br />
661998237, wange, Eric, Wang, Eric, 5183902940, 60 Rosewood Ave, Mount Vernon, Michigan, 48044 <br />
661998257, shine2, Edward, Shin, Eddie, 8382170932, 15th Street, Troy, New York, 12180 <br />
669384028, huc3, Catherine, Hu, Kait, 3720394718, 532 Littleton Ave, Culpeper, Virginia, 22701 <br />

<br />
SELECT RIN, fname, lname, street, city, state, zip FROM students WHERE RIN IN (SELECT RIN FROM grades WHERE grade > 90) <br />
RIN RCSID fname lname alias street city state zip <br />
661998237, wange, Eric, Wang, Eric, 5183902940, 60 Rosewood Ave, Mount Vernon, Michigan, 48044 <br />
661998257, shine2, Edward, Shin, Eddie, 8382170932, 15th Street, Troy, New York, 12180 <br />
669384028, huc3, Catherine, Hu, Kait, 3720394718, 532 Littleton Ave, Culpeper, Virginia, 22701 <br />
<br />
SELECT courses.prefix, courses.number, courses.title, grades.crn, AVG(grades.grade) AS Average FROM courses INNER JOIN grades ON courses.crn = grades.crn GROUP BY grades.crn; <br />
prefix number title crn Average <br />
CSCI, 2500, Computer Organization, 50049, 86.6667 <br />
CSCI, 2200, Foundations of Computer Science, 52708, 87.6667 <br />
ITWS, 2110, Web Systems Development, 53470, 89.0000 <br />
COMM, 4420, Foundations of Hci Usability, 53632, 83.5000 <br />
<br />
SELECT courses.prefix, courses.number, courses.title, grades.crn, COUNT(grades.grade) AS Average FROM courses INNER JOIN grades ON courses.crn = grades.crn GROUP BY grades.crn;
<br />
prefix number title crn students <br />
CSCI, 2500, Computer Organization, 50049, 3 <br />
CSCI, 2200, Foundations of Computer Science, 52708, 3 <br />
ITWS, 2110, Web Systems Development, 53470, 2 <br />
COMM, 4420, Foundations of Hci Usability, 53632, 2 <br />
<br />

For this php part of this lab, I first connected to mysql localhost, with username root and no password. Every submit button sends the data a user inputted to phpmyadmin through  querying each appropriate value and executeing it. If there were any missing input text boxes, it creates an error message, which I used jquery for alert. For particular input text boxes, the size was increased to 50 so that long inputs can be seen in one eye. For the CSS aspect of the website, I utilized fonts from google to give a clear visual. I was stuck in making the success alerts at first, because I was trying to make it through javascript. In the end, I did echo in html instead.
