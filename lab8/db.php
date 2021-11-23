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


function validate($word){
    $word = trim($word);
    $word = htmlspecialchars($word);
    return $word;
}

$errors = '';

if (isset($_POST["sign_in"])) { 

    $username = validate($_POST["username"]);
    $password = validate($_POST["password"]);
    

    if (empty($username)) {
        header("Location: login.php?error=Username is required");
        exit();
    }
    else if (empty($password)) {
        header("Location: login.php?error=Password is required");
        exit();
    }
    
    else {
        $usernamedb = validate($_POST["username"]);
        $passworddb = validate($_POST["password"]);

        $string  = "SELECT username from users where username='" . $usernamedb . "' AND password='" . $passworddb . "'";
    
        $result = $db->query($string);
        if ($result->rowCount() == 0) {
            header("Location: login.php?error=Wrong username and/or password");
            exit();
        }
        else { 
            $row = $result->fetch(PDO::FETCH_ASSOC);
            $_SESSION["userid"] = $row['username'];
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
