<?php 
session_start();


$user = 'root';
$pass = '';

try {
    $db = new PDO('mysql:host=localhost;dbname=insecure_login',$user,$pass);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}
catch (PDOException $e){
    echo 'Connection failed!: ' . $e->getMessage();
}
//$db = mysqli_connect('localhost', 'root', '', 'insecure_login');

function validate($word){
    $word = trim($word);
    $word = htmlspecialchars($word);
    return $word;
}

$errors = '';

if (isset($_POST["sign_in"])) { 

    $username = validate($_POST["username"]);
    $password = validate($_POST["password"]);
    
    //if a field is blank, print out an error
    if (empty($username)) {
        header("Location: login.php?error=Username is required");
        exit();
    }
    else if (empty($password)) {
        header("Location: login.php?error=Password is required");
        exit();
    }
    
    else { //if no errors
        $usernamedb = validate($_POST["username"]);
        $passworddb = validate($_POST["password"]);
        
        
        //queries into user database and checks whether or not
        //the email and password match a row in the users table
        $string  = "SELECT username from users where username='" . $usernamedb . "' AND password='" . $passworddb . "'";
        //$query = "SELECT * FROM users WHERE username='$usernamedb' AND password='$encrypt'";
        $result = $db->query($string);
        if ($result->rowCount() == 0) {
            header("Location: login.php?error=Wrong username and/or password");
            exit();
        }
        else { //if there is a match to a user in the table
            $row = $result->fetch(PDO::FETCH_ASSOC);
            $_SESSION["userid"] = $row['username']; //set session userid to the corresponding value
            header("Location: index.php"); 
            exit;
        }
    
    }
}
else {
    header("Location: login.php");
    exit();
} 
?>
