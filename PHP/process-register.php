<?php

$errors = [];

// Check if form was submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    // Validate email
    if (!isset($_POST["email"]) || !filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Valid email is required";
    }

    // Validate password length
    if (!isset($_POST["password"]) || strlen($_POST["password"]) < 8) {
        $errors[] = "Password must be at least 8 characters";
    }

    // Check for at least one letter
    if (!isset($_POST["password"]) || !preg_match("/[a-z]/i", $_POST["password"])) {
        $errors[] = "Password must contain at least one letter";
    }

    // Check for at least one number
    if (!isset($_POST["password"]) || !preg_match("/[0-9]/i", $_POST["password"])) {
        $errors[] = "Password must contain at least one number";
    }

    // Check if passwords match
    if (!isset($_POST["password"]) || !isset($_POST["password-confirmation"]) || $_POST["password"] !== $_POST["password-confirmation"]) {
        $errors[] = "Passwords must match";
    }

    // If there are errors, display them and redirect to account page
    if (!empty($errors)) {
        // Use JavaScript alert to display the errors and redirect
        echo "<script>
                alert('" . implode("\\n", array_map('htmlspecialchars', $errors)) . "');
                window.location.href = '../HTML/account.php';
              </script>";
        exit;
    }

    // Process form data if no errors
    $password_hash = password_hash($_POST["password"], PASSWORD_DEFAULT);

    $mysqli = require __DIR__ . "/database.php";

    $sql = "INSERT INTO users(NAME, EMAIL, PASSWORD_HASH) VALUES (?, ?, ?)";

    $stmt = $mysqli->stmt_init();

    if (!$stmt->prepare($sql)) {
        $error_message = htmlspecialchars("SQL error: " . $mysqli->error, ENT_QUOTES);
        echo "<script>
                alert('$error_message');
                window.location.href = '../HTML/account.php';
              </script>";
        exit();
    }

    $stmt->bind_param("sss", $_POST["name"], $_POST["email"], $password_hash);

    if ($stmt->execute()) {
        header("Location: ../HTML/signup-success.html");
        exit();
    }
} else {
    // Handle the case when the form is not submitted
    echo "Form not submitted.";
}
?>
