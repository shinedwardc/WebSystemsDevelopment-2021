<!DOCTYPE html>
<html lang="en">
<head>
    <title>Quiz 2</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
</head>
<body>
    <h1>Quiz 2</h1>

    <div class="jumbotron jumbotron-fluid bg-primary text-white text-center">
        <h2>Store</h2>
        <br />

        <a class="button" href="index.php?items">Items</a>
        <a class="button" href="index.php?discount">Apply Discounts</a>
        <a class="button" href="index.php?average">Average</a>
        <br />
        <table id = "box" class = "container p-3 my-3 text-center border">
            <?php
            $user = 'root';
            $pass = '';
            try {
                $db = new PDO('mysql:host=localhost; dbname=websys_quiz',$user,$pass);
                $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            }
            catch (PDOException $e){
                echo 'Connection failed!: ' . $e->getMessage();
            }
            if (isset($_GET['discount'])){
                $passedstmt = $db->prepare("SELECT *, IFNULL(ROUND(items.price*(1-discounts.discount),2),price) AS discounted_price, 
                ROUND(IFNULL(discount,0)*100) AS discount_percent
                FROM items LEFT JOIN discounts ON items.id=discounts.item_id ORDER BY discounted_price");
            }
            else if (isset($_GET['average'])){
                $passedstmt = $db->prepare("SELECT 'Average Discounted Price' AS name, 0 AS price, 0 AS discount, 
                ROUND(AVG(IFNULL(ROUND(items.price*(1-discounts.discount),2), price)), 2) AS discounted_price 
                FROM items LEFT JOIN discounts ON items.id=discounts.item_id WHERE discount!=0 ORDER BY price;");
            }
            else{
                $passedstmt = $db->prepare("SELECT *, IFNULL(ROUND(items.price*(1-discounts.discount),2), price) AS discounted_price,
                ROUND(IFNULL(discount,0)*100) AS discount_percent FROM items LEFT JOIN discounts 
                ON items.id=discounts.item_id ORDER BY price;");
            }
            $passedstmt->execute();
            while ($row = $passedstmt->fetch()){
                print("<tr>
                <td class='name'>".$row['name']."</td>
                <td class='price'>".($row['price']==0?"":"$".number_format($row['price'], 2))."</td>
                <td class='discount'>".($row['discount']==0?"":"<p>".$row['discount_percent']."% off</p>")."</td>
                <td class='discounted'><p id = 'discounted'>Discounted price: </p>$".number_format($row['discounted_price'], 2)."</td>
                </tr>");    
            }
            ?>
        </table>
    </div>
</body>
</html>