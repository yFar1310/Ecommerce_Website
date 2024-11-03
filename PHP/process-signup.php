<?php
session_start(); // Démarre la session

$is_invalid = false;

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $mysqli = require __DIR__ . "/database.php";

    $email = $_POST["email"] ?? '';
    $sql = sprintf("SELECT * FROM users WHERE email = '%s'", $mysqli->real_escape_string($email));
    $result = $mysqli->query($sql);

    // Vérifie si l'utilisateur existe
    if ($result) {
        $user = $result->fetch_assoc();

        // Vérifie si l'utilisateur a été trouvé
        if ($user) {
            // Utilise la clé correcte pour vérifier le mot de passe
            if (password_verify($_POST["password"], $user["PASSWORD_HASH"])) {
                // Authentification réussie
                $_SESSION["user_name"] = $user["NAME"];
                $_SESSION["user_email"] = $user["EMAIL"];
                header("Location: ../HTML/welcome.php");
                exit;
            } else {
                // Mot de passe incorrect
                $is_invalid = true;
                echo "Mot de passe incorrect.";
            }
        } else {
            // Email non trouvé
            $is_invalid = true;
            echo "Email non trouvé.";
        }
    } else {
        // Erreur lors de la requête
        echo "Erreur lors de la requête.";
    }

    // Si l'authentification échoue, redirige vers une page d'erreur
    header("Location: error.php"); // Remplace "error.php" par le nom de ta page d'erreur
    exit;
}
?>
