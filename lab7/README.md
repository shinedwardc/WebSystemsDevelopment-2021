# Edward Shin #
# Lab 7 #
## Part 1 ##
CREATE TABLE courses ( <br />
&emsp;&emsp;crn INT, <br />
&emsp;&emsp;prefix VARCHAR(4) NOT NULL, <br />
&emsp;&emsp;number SMALLINT NOT NULL, <br />
&emsp;&emsp;title VARCHAR(255) NOT NULL, <br />
&emsp;&emsp;PRIMARY KEY (crn) <br />
); <br />
<br />
CREATE TABLE students ( <br />
&emsp;&emsp;RIN INT, <br />
&emsp;&emsp;RCSID CHAR(7), <br />
&emsp;&emsp;first name VARCHAR(100) NOT NULL, <br />
&emsp;&emsp;last name VARCHAR(100) NOT NULL, <br />
&emsp;&emsp;alias VARCHAR(100) NOT NULL, <br />
&emsp;&emsp;phone INT, <br />
&emsp;&emsp;PRIMARY KEY (RIN) <br />
); <br />
## Part 2 ##
ALTER TABLE students <br />
ADD <br />
&emsp;&emsp;street VARCHAR(256), <br />
&emsp;&emsp;city VARCHAR(256), <br />
&emsp;&emsp;state VARCHAR(256), <br />
&emsp;&emsp;zip INT; <br />
<br />
ALTER TABLE students <br />
ADD <br />
&emsp;&emsp;section SMALLINT, <br />
&emsp;&emsp;year INT; <br />
<br />
CREATE TABLE grades ( <br />
&emsp;&emsp;id INT, <br />
&emsp;&emsp;crn INT, <br />
&emsp;&emsp;RIN INT, <br />
&emsp;&emsp;grade int(3) NOT NULL, <br />
&emsp;&emsp;PRIMARY KEY (id), <br />
&emsp;&emsp;FOREIGN KEY (crn) REFERENCES courses(crn), <br />
&emsp;&emsp;FOREIGN KEY (RIN) REFERENCES students(RIN) <br />
); <br />

INSERT INTO courses (crn,prefix,number,title)<br />
VALUES 
<br />&emsp;&emsp;('52708','CSCI','2200','Foundations of Computer Science'),<br />
&emsp;&emsp;('50049','CSCI','2500','Computer Organization'),<br />
&emsp;&emsp;('53470','ITWS','2110','Web Systems Development'),<br />
&emsp;&emsp;('53632','COMM','4420','Foundations of Hci Usability'); <br/>
<br />
INSERT INTO students (
