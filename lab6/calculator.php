<?php 

abstract class Operation {
  protected $operand_1;
  protected $operand_2;
  protected $value;
  public function __construct($o1, $o2) {
    // Make sure we're working with numbers...
    if (!is_numeric($o1) || !is_numeric($o2)) {
      throw new Exception('Non-numeric operand.');
    }
    
    // Assign passed values to member variables
    $this->operand_1 = $o1;
    $this->operand_2 = $o2;
  }
  public abstract function operate();
  public abstract function getEquation(); 
}

abstract class Operation2 {
  protected $value;
  public function __construct($input){
    if (!is_numeric($input)){
      throw new Exception('Non-numeric operand.');
    }

    $this->value = $input;
  }
}

interface SingleInput {
  public function Calculate();
  public function showResult();
}





// Addition subclass inherits from Operation
class Addition extends Operation {
  public function operate() {
    return $this->operand_1 + $this->operand_2;
  }
  public function getEquation() {
    return $this->operand_1 . ' + ' . $this->operand_2 . ' = ' . $this->operate();
  }
}


// Add subclasses for Subtraction, Multiplication and Division here
class Subtraction extends Operation {
  public function operate() {
    return $this->operand_1 - $this->operand_2;
  }
  public function getEquation() {
    return $this->operand_1 . ' - ' . $this->operand_2 . ' = ' . $this->operate();
  }
}

class Multiplication extends Operation {
  public function operate() {
    return $this->operand_1 * $this->operand_2;
  }
  public function getEquation() {
    return $this->operand_1 . ' * ' . $this->operand_2 . ' = ' . $this->operate();
  }
}

class Division extends Operation {
  public function operate() {
    return $this->operand_1 / $this->operand_2;
  }
  public function getEquation() {
    return $this->operand_1 . ' / ' . $this->operand_2 . ' = ' . $this->operate();
  }
}

class Power extends Operation {
  public function operate() {
    $base = $this->operand_1;
    $exponent = $this->operand_2;
    return pow($base, $exponent);
  }
  public function getEquation() {
    return $this->operand_1 . ' ^ ' . $this->operand_2 . ' = ' . $this->operate();
  }
}

class Square_root extends Operation2 implements SingleInput {
  public function Calculate(){
    $number = $this->value;
    return sqrt($number);
  }
  public function showResult(){
    return 'square root of ' . $this->value . ' = ' . $this->Calculate();
  }
}

class Square extends Operation2 implements SingleInput {
  public function Calculate(){
    return $this->value * $this->value;
  }
  public function showResult(){
    return 'The square of ' . $this->value . ' = ' . $this->Calculate();
  }
}

class Log extends Operation2 implements SingleInput {
  public function Calculate(){
    $number = $this->value;
    return log($number, 10);
  }
  public function showResult(){
    return 'Log base 10 of ' . $this->value . ' = ' . $this->Calculate();
  }
}

class Ln extends Operation2 implements SingleInput {
  public function Calculate(){
    $number = $this->value;
    return log($number, M_E);
  }
  public function showResult(){
    return 'Natural log of ' . $this->value . ' = ' . $this->Calculate();
  }
}

class Power10 extends Operation2 implements SingleInput {
  public function Calculate(){
    $number = $this->value;
    return pow(10, $number);
  }
  public function showResult(){
    return '10 ^ ' . $this->value . ' = ' . $this->Calculate();
  }
}

class EulerPower extends Operation2 implements SingleInput {
  public function Calculate(){
    $number = $this->value;
    return pow(M_E, $number);
  }
  public function showResult(){
    return 'e ^ ' . $this->value . ' = ' . $this->Calculate();
  }
}

class Sin extends Operation2 implements SingleInput {
  public function Calculate(){
    $number = $this->value;
    return sin($number);
  }
  public function showResult(){
    return 'Sine of ' . $this->value . ' = ' . $this->Calculate();
  }
}

class Cos extends Operation2 implements SingleInput {
  public function Calculate(){
    $number = $this->value;
    return cos($number);
  }
  public function showResult(){
    return 'Cosine of ' . $this->value . ' = ' . $this->Calculate();
  }
}

class Tan extends Operation2 implements SingleInput {
  public function Calculate(){
    $number = $this->value;
    return tan($number);
  }
  public function showResult(){
    return 'Tangent of ' . $this->value . ' = ' . $this->Calculate();
  }
}



// Some debugs - uncomment these to see what is happening...
// echo '$_POST print_r=>',print_r($_POST);
// echo "<br>",'$_POST vardump=>',var_dump($_POST);
// echo '<br/>$_POST is ', (isset($_POST) ? 'set' : 'NOT set'), "<br/>";
// echo "<br/>---";


// Check to make sure that POST was received 
// upon initial load, the page will be sent back via the initial GET at which time
// the $_POST array will not have values - trying to access it will give undefined message

  if($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (isset($_POST['value'])){
      $input = $_POST['value'];

    }
    else if (isset($_POST['op1']) && isset($_POST['op2'])){
      $o1 = $_POST['op1'];
      $o2 = $_POST['op2'];   
    }
    else{
      
    }

  }
  $err = Array();


// Instantiate an object for each operation based on the values returned on the form
// For example, check to make sure that $_POST is set and then check its value and 
// instantiate its object
// 
// The Add is done below.  Go ahead and finish the remiannig functions.  
// Then tell me if there is a way to do this without the ifs
// We might cover such a way on Tuesday...

  try {
    if (isset($_POST['add']) && $_POST['add'] == 'Add') {
      $op = new Addition($o1, $o2);
    }


// Put code for subtraction, multiplication, and division here
    else if (isset($_POST['sub']) && $_POST['sub'] == 'Subtract'){
      $op = new Subtraction($o1, $o2);
    }

    else if (isset($_POST['mult']) && $_POST['mult'] == 'Multiply'){
      $op = new Multiplication($o1, $o2);
    }

    else if (isset($_POST['divi']) && $_POST['divi'] == 'Divide'){
      $op = new Division($o1, $o2);
    }
    else if (isset($_POST['square_root']) && $_POST['square_root'] == 'Square root'){
      $op2 = new Square_root($input);
    }
    else if (isset($_POST['square']) && $_POST['square'] == 'Square'){
      $op2 = new Square($input);
    }
    else if (isset($_POST['power']) && $_POST['power'] == 'Power'){
      $op = new Power($o1, $o2);
    }
    else if (isset($_POST['log']) && $_POST['log'] == 'Log'){
      $op2 = new Log($input);
    }
    else if (isset($_POST['ln']) && $_POST['ln'] == 'Ln'){
      $op2 = new Ln($input);
    }
    else if (isset($_POST['power_10']) && $_POST['power_10'] == 'Power by 10'){
      $op2 = new Power10($input);
    } 
    else if (isset($_POST['euler_power']) && $_POST['euler_power'] == 'Power by e'){
      $op2 = new EulerPower($input);
    } 
    else if (isset($_POST['sin']) && $_POST['sin'] == 'Sin'){
      $op2 = new Sin($input);
    }  
    else if (isset($_POST['cos']) && $_POST['cos'] == 'Cos'){
      $op2 = new Cos($input);
    }  
    else if (isset($_POST['tan']) && $_POST['tan'] == 'Tan'){
      $op2 = new Tan($input);
    }  

  }
  catch (Exception $e) {
    $err[] = $e->getMessage();
  }
?>

<!doctype html>
<html>
<head>
<title>PHP Calculator</title>
<link href="style.css" rel="stylesheet" type="text/css" />
</head>
<body>
<div class="calculator">
  <h1>Calculator</h1>
  <pre id="result">
  <?php 
    if (isset($op)) {
      try {
        echo $op->getEquation();
      }
      catch (Exception $e) { 
        $err[] = $e->getMessage();
      }
    }
    else if (isset($op2)){
      try {
        echo $op2->showResult();
      }
      catch (Exception $e){
        $err[] = $e->getMessage();
      }
    }

    foreach($err as $error) {
        echo $error . "\n";
    } 
  ?>
  </pre>
  <form method="post" action="calculator.php" name="2_inputs">
    <input type="text" name="op1" id="name" value="" placeholder="1st Argument"/>
    <input type="text" name="op2" id="name" value="" placeholder="2nd Argument"/>
    <br/>
    <br/>
    <!-- Only one of these will be set with their respective value at a time -->
    <input type="submit" name="add" value="Add" />  
    <input type="submit" name="sub" value="Subtract" />  
    <input type="submit" name="mult" value="Multiply" />  
    <input type="submit" name="divi" value="Divide" />
    <input type="submit" name="power" value="Power" />  
  </form>
  <form method="post" action="calculator.php" name="1_input">
    <input type="text" name="value" id="name" value="" placeholder="Input"/>
    <br/>
    <br/>
    <input type="submit" name="square_root" value="Square root" />
    <input type="submit" name="square" value="Square" />
    <input type="submit" name="log" value="Log" />
    <input type="submit" name="ln" value="Ln" />
    <input type="submit" name="power_10" value="Power by 10" />
    <input type="submit" name="euler_power" value="Power by e" />
    
    <input type="submit" name="sin" value="Sin" />
    <input type="submit" name="cos" value="Cos" />
    <input type="submit" name="tan" value="Tan" />
  </form>
</div>

</body>
</html>
