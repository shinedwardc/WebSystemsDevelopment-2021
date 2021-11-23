<?php
	session_start();
	if (!isset($_SESSION['userid'])) {
		header('Location: db.php');
	}
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Homepage</title>
    <meta charset="utf-8"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <link href="style.css" rel="stylesheet" type="text/css" />
    <script src="navBar.js" defer></script>
    <script src="NavAnimations.js" defer></script>
    
  </head> 

<body id = "body">  
  <div class = "jumbotron jumbotron-fluid bg-primary text-white text-center">
    <h1>Lab 8: Course Content and Labs</h1>
  </div>
  <div id = "container" class = "container p-3 my-3 text-center border">
    <h2>Click the navigation bar for information of the topics covered in this class</h2>
  </div>
  <div id="mySideBar" class="sidebar">
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
      <a href = "logout.php" class="logout-btn">Logout<i class = "bi bi-power"></i></a></br>
  </div>
  <button class="openbtn" onclick="openNav()">☰ Open Lectures/Labs list</button>
  <div id = "LectureInfo"></div>

    <?php
    $user = 'root';
    $pass = '';
      try {
        $db = new PDO('mysql:host=localhost;dbname=insecure_login',$user,$pass);
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      }
      catch (PDOException $e){
        echo 'Connection failed!: ' . $e->getMessage();
      }
  
      if (isset($_SESSION["userid"])) {
        if ($db) {
          if(isset($_GET['title']) && isset($_GET['description'])){
            $query = "INESRT INTO courses (`username`,`Title`,`Description`) VALUES (:username, :Title, :Description q)";
            $insert = $db->prepare($query);
            $insert->bindParam(':username',$_SESSION['userid']);
            $insert->bindParam(':Title',$_GET['title']);
            $insert->bindParam(':Description',$_GET['description']);
            $insert->execute();
          }
        }
      }else{
        echo "<h1>ERROR</h1>";
      }
    ?>

</body>
</html>
