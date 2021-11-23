<!DOCTYPE html>
<html>
<head>
    <title>Login form</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/> 
	<link href="style.css" rel="stylesheet" type="text/css"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
</head>

<body id = "login">
    <section>
        <form action="db.php" method="post" onsubmit="return validateSignIn(this);">
            <fieldset>
            <?php if (isset($_GET['error'])) { ?>
                <p class="error"><?php echo $_GET['error']; ?></p>
            <?php } ?>
                <legend>Sign in</legend>
                <div class="formData">
                    <input type="text" size="30" name="username" id="username" placeholder="Username"><br/><br/>
                    <input type="password" size="30" name="password" id="username" placeholder="Password"><br/><br/>
                    <input class="btn btn-success btn-large btn-block" type="submit" value="Sign In" id="sign_in" name="sign_in"/>
                </div>
            </fieldset>
        </form>
    </section>
</body>
</html>