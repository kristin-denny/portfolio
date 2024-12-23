<?php

$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];

$to = "kristingdenny@gmail.com";
$subject = "contact message";


$txt ="Name = ". $name . "\r\n  Email = " 
    . $email . "\r\n Message =" . $message;

$headers = "From: noreply@portfolio.com" . "\r\n" ;
if($email != NULL) {
    mail($to, $subject, $txt, $headers);
}


header("Location:last.html");
?>