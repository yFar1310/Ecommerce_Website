<!DOCTYPE html>
<html lang="en">
<?php
session_start(); // Démarre la session

$is_invalid = $_SESSION['is_invalid'] ?? false; // Récupère la variable de session ou définit à false
unset($_SESSION['is_invalid']); // Supprime la variable de session après utilisation
?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Auth | Lebron Store</title>
    <link rel="stylesheet" href="../STYLES/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="../JavaScript/index.js" defer></script>
    <link rel="stylesheet" href="../STYLES/darkMode.css">
</head>

<body>
    <div class="container">
        <div class="navbar">
            <div class="logo">
                <a href="index.html"><img src="../images/LogoLebron.png" alt="logo" width="125px"></a>
            </div>
            <nav>
                <ul id="MenuItems">
                    <li><a href="index.html">Accueil</a></li>
                    <li><a href="products.html">Produits</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="account.php">Compte</a></li>
                    <li><a id="darkModeToggle" class="mode-toggle"> <img src="../images/moon.png" alt="Switch to Dark Mode" id="modeIcon" width="40" height="40"></a></li> 
                       
                
                    <img src="../images/France.png" alt="Français" id="frenchFlag" width="40" height="40" style="cursor: pointer;">
                    <img src="../images/english.png" alt="Français" id="englishFlag" width="40" height="40" style="cursor: pointer;">
                </ul>
            </nav>
            <a href="cart.html"><img src="../images/cart.png" width="30px" height="30px"></a>
            <img src="../images/menu.png" class="menu-icon" onclick="menutoggle()">
        </div>
    </div>

    <!-- Account Page -->
    <div class="account-page">
        <div class="container">
            <div class="row">
                <div class="col-2">
                    <img src="../images/lebron.png" width="100%">
                </div>
                <div class="col-2">
                    <div class="form-container">
                        <div class="form-btn">
                            <span onclick="login()">Login</span>
                            <span onclick="register()">Register</span>
                            <hr id="Indicator">
                        </div>


                        <?php if($is_invalid): ?>
                            <em>Login non valide</em>
                        <?php endif; ?>
                        <form id="LoginForm" method="POST" action="../PHP/process-signup.php">
                            <label for="Name">Email</label>
                            <input type="text" name="email" placeholder="email"  value="<?= htmlspecialchars($_POST["email"] ?? "")?>">

                            <label for="password">Password</label>
                            <input type="password" name="password" placeholder="Password" required>
                            <button type="submit" class="btn">Login</button>
                            <a href="">Forget Password</a>
                        </form>
                      

                        <form id="RegForm" action="../PHP/process-register.php" method="post" novalidate>
                            <div>
                            <label for="Name">Name</label>
                            <input type="text" name="name" placeholder="Username" required>
                            </div>

                            <div>
                            <label for="email">Email</label>
                            <input type="email" name="email" placeholder="Email" required>
                            </div>

                            <div>
                            <label for="password">Password</label>
                            <input type="password" name="password" placeholder="Password" required>
                            </div>

                            <div>
                                <label for="password">Repeat password</label>
                                <input type="password" name="password-confirmation" placeholder="Password verif" required>
                                </div>

                            <button type="submit" class="btn">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- Footer -->
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="footer-col-1">
                    <h3>Download Our App</h3>
                    <p>Download App for Android and ios mobile phone.</p>
                    <div class="app-logo">
                        <img src="../images/play-store.png">
                        <img src="../images/app-store.png">
                    </div>
                </div>
                <div class="footer-col-2">
                    <img src="../images/LogoLebron.png">
                    <p>Notre objectif est de rendre durablement accessible au plus grand nombre le plaisir et les bienfaits du sport.
                    </p>
                </div>
                <div class="footer-col-3">
                    <h3>Useful Links</h3>
                    <ul>
                        <li>Coupons</li>
                        <li>Blog Post</li>
                        <li>Return Policy</li>
                        <li>Join Affiliate</li>
                    </ul>
                </div>
                <div class="footer-col-4">
                    <h3>Follow Us</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Youtube</li>
                    </ul>
                </div>
            </div>
            <hr>
            <p class="copyright">Copyright 2020 - Samwit Adhikary</p>
        </div>
    </div>

    <!-- javascript -->

    <script src="../JavaScript/account.js">
    </script>

</body>

</html>