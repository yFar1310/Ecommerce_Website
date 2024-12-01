<?php
session_start(); // Démarre la session

// Vérifie si l'utilisateur est connecté
if (!isset($_SESSION["user_name"]) || !isset($_SESSION["user_email"])) {
    // Redirige vers la page de connexion si l'utilisateur n'est pas connecté
    header("Location: ../HTML/account.php"); // Remplace par le nom de ta page de connexion
    exit;
}

// Récupère le nom et l'email de la session
$user_name = $_SESSION["user_name"];
$user_email = $_SESSION["user_email"];
?>

<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lebron Store</title>
    <link rel="stylesheet" href="../STYLES/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="../JavaScript/index.js" defer></script>
    <script src="../JavaScript/translate.js" defer></script>
    <link rel="stylesheet" href="../STYLES/darkMode.css" >
</head>

<body>
<div class="header">
        <div class="container">
            <div class="navbar">
                <div class="logo">
                    <a href="index.html"><img src="../images/LogoLebron.png" alt="logo" width="100px"></a>
                </div>
                <nav>
                    <ul id="MenuItems">
                        <li><a href="index.html">Accueil</a></li>
                        <li><a href="products.html">Produits</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="account.php">Compte</a></li>
                    </ul>
                </nav>
               <a id="darkModeToggle" class="mode-toggle"> <img src="../images/moon.png" alt="Switch to Dark Mode" id="modeIcon" width="40" height="40"></a> 
                           
                    
                    <img src="../images/France.png" alt="Français" id="frenchFlag" width="40" height="40" style="cursor: pointer;">
                    <img src="../images/english.png" alt="Français" id="englishFlag" width="40" height="40" style="cursor: pointer;">
                <a href="cart.html"><img src="../images/cart.png" width="30px" height="30px"></a>
                <img src="../images/menu.png" class="menu-icon" onclick="menutoggle()">
            </div>
            <div class="row">
                <div class="col-2">
                    <h1>Donnez un nouveau style <br> à votre entraînement!</h1>
                    <p>Le succès n'est pas toujours une question de grandeur, il est une question de cohérence.<br> </p>
                    <a href="" class="btn" id="buyIt">ACHETEZ MAINTENANT</a>
                </div>
                <div class="col-2">
                    <a class="image-container">  <img src="../images/lebron3.png">
                    <div class="text-cloud">Hi, welcome to my store!<br> I'm LeBron James!</div></a>
                  
                </div>
            </div>
        </div>
    </div>
    <div class="container2">
        <h1 id="welcomeMessage">🎉 Bienvenue, <?php echo htmlspecialchars($user_name); ?>!</h1>
        <p id="userEmail">Votre email: <?php echo htmlspecialchars($user_email); ?></p>
        <a href="products.html" class="btn" id="discoverProducts">Découvrez nos produits</a>
    </div>


     <!-- Offer -->
     <div class="offer">
        <div class="small-container">
            <div class="row">
                <div class="col-2">
                    <img src="../images/LEBRON+WITNESS+VIII+IPS.png" class="offer-img">
                </div>
                <div class="col-2">
                    <p id="offerText">Disponible exclusivement sur Lebron Store</p>
                    <h1 id="offerTitle">LeBron Witness 8 <br> «I Promise School»</h1>
                    <small id="offerDescription">La LeBron Witness 8 « I Promise School » célèbre l’engagement de LeBron James envers l’éducation, avec un design inspiré de son école « I Promise » à Akron, Ohio. Alliant performance et style, cette paire offre un soutien optimal et une esthétique qui reflète l’espoir et la résilience de cette initiative éducative.</small>
                    <br>
                    <a href="products.html" class="btn" id="offerBtn">Acheter Maintenant &#8594;</a>
                </div>
            </div>
        </div>
    </div>

    <!-- Testimonial -->
    <div class="testimonial">
        <div class="small-container">
            <div class="row">
                <div class="col-3">
                    <i class="fa fa-quote-left"></i>
                    <p>I ordered the red printed T-shirt, and it’s perfect! The fabric is soft and breathable, great for my workouts. The fit was exactly as described on the site. Highly recommend!</p>
                    <div class="rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <img src="../images/user-1.png">
                    <h3>Sean Parker</h3>
                </div>
                <div class="col-3">
                    <i class="fa fa-quote-left"></i>
                    <p>I bought the black running shoes, and I’m impressed. They provide excellent support for long runs, and I’ve had zero issues with durability so far. Plus, they look stylish!</p>
                    <div class="rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <img src="../images/user-2.png">
                    <h3>Mike Smith</h3>
                </div>
                <div class="col-3">
                    <i class="fa fa-quote-left"></i>
                    <p>The Fossil watch was a gift, and it was such a hit! It’s even more beautiful in person, with a clean, modern look that goes with everything. Arrived on time, too!</p>
                    <div class="rating">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <img src="./../images/user-3.png">
                    <h3>Mabel Joe</h3>
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
                    <p id="footerPurpose">Notre objectif est de rendre durablement accessible au plus grand nombre le plaisir et les bienfaits du sport.</p>
                </div>
                <div class="footer-col-3">
                    <h3>Liens utiles</h3>
                    <ul>
                        <li>Coupons</li>
                        <li>Blog Post</li>
                        <li>Return Policy</li>
                        <li>Join Affiliate</li>
                    </ul>
                </div>
                <div class="footer-col-4">
                    <h3>Suivez nous sur les réseaux sociaux</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Youtube</li>
                    </ul>
                </div>
            </div>
            <hr>
            <p class="copyright">Copyright 2024 | FAREHAN Yahya</p>
        </div>
    </div>
</body>

</html>
