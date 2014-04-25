<?php

$email = $_POST['email'];
$password = $_POST['password'];

$sql="INSERT INTO pessoa(email, password) VALUES ('$email', '$password')";
$res= mysql_query($sql);