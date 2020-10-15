<?php
    $fullName = $_POST['fullname'];
    $addr = $_POST['address'];
    $phone = $_POST['phoneNumber'];
    $email = $_POST['email'];

    if(!empty($fullName)||!empty($addr)||!empty($phone)||!empty($email)){
        $host = "localhost:3306";
        $dbUsername = "root";
        $dbPassword = "";
        $dbname = "DivineWater";

        echo"New record inserted successfully";

        
        $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);
        
        if (mysqli_connect_error()) {
            die('Connect Error('.mysqli_connect_error().')'.mysqli_connect_error());
        } else {
            $INSERT = "INSERT Into Customer (fullname, cAddress, phoneNumber, email) VALUES (?,?,?,?)";
            $stmt = $conn->prepare($SELECT);
            $stmt->bind_param("s", $email);
            $stmt->execute();
            $stmt->bind_result($email);
            $stmt->store_result();
            $rnum = $stmt->num_rows;
            if($rnum==0){
                $stmt = $conn->prepare($INSERT);
                $stmt->bind_param("ssss", $fullName, $addr, $phone, $email);
                $stmt->execute();
                echo"New record inserted successfully";
            }else{
                echo"Someone already registered using this email";
            }
            $stmt->close();
            $conn->close();
        }
        

    }else{
        echo "All fields are required";
        die();
    }
    
    /*
    include_once 'dbh.inc.php';

    $first = $_POST['first'];
    $sur = $_POST['sur'];
    $addr = $_POST['addr'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];

    $sql = "INSERT INTO Customer (customerID, fullname, cAddress, phoneNumber, email) VALUES (?,?,?,?,?)";
    mysqli_query($conn,$sql);
    header("Location: HomePage.html?order=success");
    */
?>