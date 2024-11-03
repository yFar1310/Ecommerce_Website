// Translation object mapping English to French and vice versa
const translations = {
    "Accueil": "Home",
    "Home": "Accueil",
    "Produits": "Products",
    "Products": "Produits",
    "À propos": "About",
    "About": "À propos",
    "Contact": "Contact",
    "Compte": "Account",
    "Account": "Compte",
    "Mode Sombre": "Dark Mode",
    "Dark Mode": "Mode Sombre",
    "Traduire en français": "Translate to English",
    "Translate to English": "Traduire en français",
    "Donnez un nouveau style <br> à votre entraînement!": "Give a new style <br> to your workout!",
    "Give a new style <br> to your workout!": "Donnez un nouveau style <br> à votre entraînement!",
    "Le succès n'est pas toujours une question de grandeur, il est une question de cohérence.": "Success is not always about size; it's about consistency.",
    "Success is not always about size; it's about consistency.": "Le succès n'est pas toujours une question de grandeur, il est une question de cohérence.",
    "ACHETEZ MAINTENANT": "BUY NOW",
    "BUY NOW": "ACHETEZ MAINTENANT",
    "OFFRES DE LA SEMAINE": "WEEKLY OFFERS",
    "WEEKLY OFFERS": "OFFRES DE LA SEMAINE",
    "T-shirt Lakers jaune": "Yellow Lakers T-Shirt",
    "Yellow Lakers T-Shirt": "T-shirt Lakers jaune",
    "Ballon de Basket": "Basketball",
    "Basketball": "Ballon de Basket",
    "Casquette Lakers": "Lakers Hat",
    "Lakers Hat": "Casquette Lakers",
    "Ensemble Bleu gris": "Blue-gray outfit",
    "Blue-gray outfit": "Ensemble Bleu gris",
    "PROMOS": "PROMOTIONS",
    "PROMOTIONS": "PROMOS",
    "Basket grise": "Gray Sneakers",
    "Gray Sneakers": "Basket grise",
    "Survette Jaune Mauve Lakers": "yellow purple Lakers tracksuit",
    "yellow purple Lakers tracksuit": "Survette Jaune Mauve Lakers",
    "chaussettes noirs/gris/blancs": "Black/Gray/White Socks",
    "Black/Gray/White Socks": "chaussettes noirs/gris/blancs",
    "Montre noir Fossil": "Black Fossil Watch",
    "Black Fossil Watch": "Montre noir Fossil",
    "Montre cuire": "Leather Watch",
    "Leather Watch": "Montre cuire",
    "Basket de course": "Running Sneakers",
    "Running Sneakers": "Basket de course",
    "Basket gris": "Gray Sneakers",
    "Pantalon noir": "Black Pants",
    "Black Pants": "Pantalon noir",
    "Disponible exclusivement sur Lebron Store": "Available exclusively on Lebron Store",
    "Available exclusively on Lebron Store": "Disponible exclusivement sur Lebron Store",
    "Acheter Maintenant →": "Buy Now",
    "Buy Now": "Acheter Maintenant →",
    "La LeBron Witness 8 « I Promise School » célèbre l’engagement de LeBron James envers l’éducation, avec un design inspiré de son école « I Promise » à Akron, Ohio. Alliant performance et style, cette paire offre un soutien optimal et une esthétique qui reflète l’espoir et la résilience de cette initiative éducative.": "The LeBron Witness 8 “I Promise School” celebrates LeBron James' commitment to education, with a design inspired by his “I Promise” school in Akron, Ohio. Combining performance and style, this pair offers optimal support and an aesthetic that reflects the hope and resilience of this educational initiative.",
    "The LeBron Witness 8 “I Promise School” celebrates LeBron James' commitment to education, with a design inspired by his “I Promise” school in Akron, Ohio. Combining performance and style, this pair offers optimal support and an aesthetic that reflects the hope and resilience of this educational initiative.": "La LeBron Witness 8 « I Promise School » célèbre l’engagement de LeBron James envers l’éducation, avec un design inspiré de son école « I Promise » à Akron, Ohio. Alliant performance et style, cette paire offre un soutien optimal et une esthétique qui reflète l’espoir et la résilience de cette initiative éducative.",
    "Notre objectif est de rendre durablement accessible au plus grand nombre le plaisir et les bienfaits du sport.":"Our Purpose Is To Sustainably Make the Pleasure and Benefits of Sports Accessible to the Many.",
    "Our Purpose Is To Sustainably Make the Pleasure and Benefits of Sports Accessible to the Many.":"Notre objectif est de rendre durablement accessible au plus grand nombre le plaisir et les bienfaits du sport."
};

// Function to get translation for a given text
const getTranslation = (text) => translations[text] || text;

// List of translatable elements with their default texts
const translatableItems = [
    { selector: "#MenuItems li:nth-child(1) a", defaultText: "Accueil" },
    { selector: "#MenuItems li:nth-child(2) a", defaultText: "Produits" },
    { selector: "#MenuItems li:nth-child(3) a", defaultText: "À propos" },
    { selector: "#MenuItems li:nth-child(4) a", defaultText: "Contact" },
    { selector: "#MenuItems li:nth-child(5) a", defaultText: "Compte" },
    { selector: ".col-2 h1", defaultText: "Donnez un nouveau style <br> à votre entraînement!" },
    { selector: ".col-2 p", defaultText: "Le succès n'est pas toujours une question de grandeur, il est une question de cohérence." },
    { selector: "#buyIt", defaultText: "ACHETEZ MAINTENANT" },
    { selector: "#offerText", defaultText: "Disponible exclusivement sur Lebron Store" },
    { selector: "#offerDescription", defaultText: "La LeBron Witness 8 « I Promise School » célèbre l’engagement de LeBron James envers l’éducation, avec un design inspiré de son école « I Promise » à Akron, Ohio. Alliant performance et style, cette paire offre un soutien optimal et une esthétique qui reflète l’espoir et la résilience de cette initiative éducative."},
    { selector: "#offerBtn", defaultText: "Acheter Maintenant →" },
    { selector: ".title:nth-of-type(1)", defaultText: "OFFRES DE LA SEMAINE" },
    { selector: ".col-4:nth-child(1) h4", defaultText: "T-shirt Lakers jaune" },
    { selector: ".col-4:nth-child(2) h4", defaultText: "Ballon de Basket" },
    { selector: ".col-4:nth-child(3) h4", defaultText: "Casquette Lakers" },
    { selector: ".col-4:nth-child(4) h4", defaultText: "Ensemble Bleu gris" },
    { selector: ".title:nth-of-type(2)", defaultText: "PROMOS" },
    { selector: "#prom .col-4:nth-child(1) h4", defaultText: "Survette Jaune Mauve Lakers" },
    { selector: "#prom .col-4:nth-child(2) h4", defaultText: "chaussettes noirs/gris/blancs" },
    { selector: "#prom .col-4:nth-child(3) h4", defaultText: "Montre noir Fossil" },
    { selector: "#prom2 .col-4:nth-child(1) h4", defaultText: "Montre cuire" },
    { selector: "#prom2 .col-4:nth-child(2) h4", defaultText: "Basket de course" },
    { selector: "#prom2 .col-4:nth-child(3) h4", defaultText: "Pantalon noir" },
    { selector: "#footerPurpose", defaultText: "Notre objectif est de rendre durablement accessible au plus grand nombre le plaisir et les bienfaits du sport." }
    
];

// Initialize translation state
let isTranslated = true;

const switchLanguage = () => {
    translatableItems.forEach(item => {
        const element = document.querySelector(item.selector);
        if (element) {
            // Get the current text based on translation state
            const currentText = isTranslated ? item.defaultText : getTranslation(item.defaultText);
            element.innerHTML = getTranslation(currentText);
        }
    });

    isTranslated = !isTranslated; // Toggle translation state
};

// Add event listeners for both flags
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("frenchFlag").addEventListener("click", () => {
        if (!isTranslated) switchLanguage();
    });

    document.getElementById("englishFlag").addEventListener("click", () => {
        if (isTranslated) switchLanguage();
    });
});
