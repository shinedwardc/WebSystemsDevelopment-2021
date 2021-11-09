Lab 6
========
Edward Shin
========
PHP Calculator
---------
In this lab, I recreated a calculator using php basics, such as using interface, abstract classes, and the principles of polymoprhism. I added sub classes for subtraction, multiplication, division, and power using the abstract class Operation,
which serves as a function to construct the two values into member variables. For each sub class, the operate() function returns an appropriate value for each specific operator, and getEquation() class returns the appropriate equation for each operator.
For the remainding operator functions, I needed only one input, so I made another abstract class that constructs and saves only one member value. I added an interface called SingleInput that contains functions for calculating, and showing result for the classes that only needed one input. 
For example, the class 'Square' extends the second abstract class (with only one input), which also implements the interface SingleInput. I made an if and else if statement to determine whether the inputting text is for an operation requiring two inputs, or requiring one input.
I added some CSS styling so that the calculator looks neat, and not too flashy. I changed the overall interface so that they look more compact and clean.
