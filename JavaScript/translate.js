// Translation object mapping English to French and vice versa
const translations = {
    "Accueil": "Home",
    "Home": "Accueil",
    "Produits": "Products",
    "Products": "Produits",
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
    "Chaussettes noires/grises/blanches": "Black/Gray/White Socks",
    "Black/Gray/White Socks": "Chaussettes noires/grises/blanches",
    "Montre noire Fossil": "Black Fossil Watch",
    "Black Fossil Watch": "Montre noire Fossil",
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
    "Our Purpose Is To Sustainably Make the Pleasure and Benefits of Sports Accessible to the Many.":"Notre objectif est de rendre durablement accessible au plus grand nombre le plaisir et les bienfaits du sport.",
    "Tri par défaut" : "Sort by default",
    "Trier par prix" : "Sort by price",
    "Trier par popularité":"Sort by popularity",
    "Trier par note":"Sort by rating",
    "Trier par promotion":"Sort by promotion",
    "Sort by default":"Tri par défaut",
    "Sort by price":"Trier par prix",
    "Sort by popularity":"Trier par popularité",
    "Sort by rating":"Trier par note",
    "Sort by promotion":"Trier par promotion",
    "Tous les produits":"All Products",
    "All Products":"Tous les produits",
    "J'ai commandé le T-shirt jaune pour mon fils, et il est parfait ! Le tissu est doux et respirant, idéal pour ses séances d'entraînement basket. La coupe correspondait exactement à la description sur le site. Je recommande vivement !":"I ordered the yellow T-shirt for my son, and it is perfect! The fabric is soft and breathable, ideal for his basketball training sessions. The fit was exactly as described on the website. Highly recommend!",
    "I ordered the yellow T-shirt for my son, and it is perfect! The fabric is soft and breathable, ideal for his basketball training sessions. The fit was exactly as described on the website. Highly recommend!":"J'ai commandé le T-shirt jaune pour mon fils, et il est parfait ! Le tissu est doux et respirant, idéal pour ses séances d'entraînement basket. La coupe correspondait exactement à la description sur le site. Je recommande vivement !",
    "J'ai acheté les chaussures de course noires, et je suis impressionné. Elles offrent un excellent soutien pour les longues courses, et je n'ai rencontré aucun problème de durabilité jusqu'à présent. En plus, elles sont stylées !":"I bought the black running shoes, and I am impressed. They offer great support for long runs, and I haven't encountered any durability issues so far. Plus, they're stylish!",
    "I bought the black running shoes, and I am impressed. They offer great support for long runs, and I haven't encountered any durability issues so far. Plus, they're stylish!":"J'ai acheté les chaussures de course noires, et je suis impressionné. Elles offrent un excellent soutien pour les longues courses, et je n'ai rencontré aucun problème de durabilité jusqu'à présent. En plus, elles sont stylées !",
    "La montre Fossil était un cadeau, et elle a fait un carton ! Elle est encore plus belle en vrai, avec un look moderne et épuré qui va avec tout. Elle est arrivée à temps, en plus !":"The Fossil watch was a gift, and it was a hit! It’s even more beautiful in person, with a modern and sleek design that goes with everything. It arrived on time, too!",
    "The Fossil watch was a gift, and it was a hit! It’s even more beautiful in person, with a modern and sleek design that goes with everything. It arrived on time, too!":"La montre Fossil était un cadeau, et elle a fait un carton ! Elle est encore plus belle en vrai, avec un look moderne et épuré qui va avec tout. Elle est arrivée à temps, en plus !"

};

// Function to get translation for a given text
const getTranslation = (text) => translations[text] || text;

// List of translatable elements with their default texts
const translatableItems = [
    { selector: "#MenuItems li:nth-child(1) a", defaultText: "Accueil" },
    { selector: "#MenuItems li:nth-child(2) a", defaultText: "Produits" },
    { selector: "#MenuItems li:nth-child(3) a", defaultText: "Contact" },
    { selector: "#MenuItems li:nth-child(4) a", defaultText: "Compte" },
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
    { selector: "#prom .col-4:nth-child(2) h4", defaultText: "Chaussettes noires/grises/blanches" },
    { selector: "#prom .col-4:nth-child(3) h4", defaultText: "Montre noire Fossil" },
    { selector: "#prom2 .col-4:nth-child(1) h4", defaultText: "Montre cuire" },
    { selector: "#prom2 .col-4:nth-child(2) h4", defaultText: "Basket de course" },
    { selector: "#prom2 .col-4:nth-child(3) h4", defaultText: "Pantalon noir" },
    { selector: "#footerPurpose", defaultText: "Notre objectif est de rendre durablement accessible au plus grand nombre le plaisir et les bienfaits du sport." },
    { selector: "#product1 h4", defaultText: "T-shirt Lakers jaune" },
    { selector: "#product2 h4", defaultText: "Ballon de Basket" },
    { selector: "#product3 h4", defaultText: "Casquette Lakers" },
    { selector: "#product4 h4", defaultText: "Ensemble Bleu gris" },
    { selector: "#product5 h4", defaultText: "Survette Jaune Mauve Lakers" },
    { selector: "#product6 h4", defaultText: "Chaussettes noires/grises/blanches" },
    { selector: "#product7 h4", defaultText: "Montre noire Fossil" },
    { selector: "#product8 h4", defaultText: "Basket de course" },
    { selector: "#product9 h4", defaultText: "Pantalon noir" },
    { selector: "#product10 h4", defaultText: "Montre en cuir" },
    { selector: "#sortOptions option:nth-child(1)", defaultText: "Tri par défaut", enText: "Sort by default" },
    { selector: "#sortOptions option:nth-child(2)", defaultText: "Trier par prix", enText: "Sort by price" },
    { selector: "#sortOptions option:nth-child(3)", defaultText: "Trier par popularité", enText: "Sort by popularity" },
    { selector: "#sortOptions option:nth-child(4)", defaultText: "Trier par note", enText: "Sort by rating" },
    { selector: "#sortOptions option:nth-child(5)", defaultText: "Trier par promotion", enText: "Sort by promotion" },
    { selector: "#allProductsTitle", defaultText: "Tous les produits", enText: "All Products" },
    { selector:"#comment1", defaultText:"J'ai commandé le T-shirt jaune pour mon fils, et il est parfait ! Le tissu est doux et respirant, idéal pour ses séances d'entraînement basket. La coupe correspondait exactement à la description sur le site. Je recommande vivement !"},
    { selector:"#comment2", defaultText:"J'ai acheté les chaussures de course noires, et je suis impressionné. Elles offrent un excellent soutien pour les longues courses, et je n'ai rencontré aucun problème de durabilité jusqu'à présent. En plus, elles sont stylées !"},
    { selector:"#comment3", defaultText:"La montre Fossil était un cadeau, et elle a fait un carton ! Elle est encore plus belle en vrai, avec un look moderne et épuré qui va avec tout. Elle est arrivée à temps, en plus !"}
    
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
