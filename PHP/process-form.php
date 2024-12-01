<?php
session_start();
$name = $_POST["name"];
$message = $_POST["message"];
$priority = filter_input(INPUT_POST,"priority",FILTER_VALIDATE_INT);
$type = filter_input(INPUT_POST,"type",FILTER_VALIDATE_INT);
$terms = filter_input(INPUT_POST,"terms",FILTER_VALIDATE_BOOL);

if( ! $terms){
    die("Terms must be accepted");
}

$host ="localhost";
$dbname = "project_db";
$username = "root";
$password = "";

$conn = mysqli_connect(hostname: $host,username: $username,password: $password,database: $dbname);

if(mysqli_connect_errno()){
    die("Connection error: " . mysqli_connect_error());
}

$sql = "INSERT INTO messages(NAME,BODY,PRIORITY,TYPE)
        VALUES (?,?,?,?)";

$stmt = mysqli_stmt_init($conn);

if(! mysqli_stmt_prepare($stmt,$sql)){
    die(mysqli_error($conn));
}

mysqli_stmt_bind_param($stmt,"ssii",$name,$message,$priority,$type);

if (mysqli_stmt_execute($stmt)) {
    $_SESSION['success_message'] = "Votre message a bien été envoyé.";
} else {
    $_SESSION['error_message'] = "Erreur lors de l'envoi du message : " . mysqli_stmt_error($stmt);
}

mysqli_stmt_close($stmt);
mysqli_close($conn);

// Redirection après l'exécution
header("Location: ../HTML/contact.html");
exit();
?>