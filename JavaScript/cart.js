function updateCartTotals() {
    const taxRate = 0.175; // Taux de taxe (par exemple 17,5%)
    let subtotal = 0;

    // Parcours des lignes de produit
    document.querySelectorAll('tr').forEach((row) => {
        const quantityInput = row.querySelector('.quantity');
        const subtotalElement = row.querySelector('.subtotal');

        if (quantityInput && subtotalElement) {
            const price = parseFloat(quantityInput.dataset.price);
            const quantity = parseInt(quantityInput.value, 10);
            const rowSubtotal = price * quantity;
            
            subtotalElement.textContent = rowSubtotal.toFixed(2) + " €";
            subtotal += rowSubtotal;
        }
    });

    // Calcul de la taxe et du total
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    // Mise à jour des valeurs de l'interface
    document.getElementById('cart-subtotal').textContent = subtotal.toFixed(2) + " €";
    document.getElementById('cart-tax').textContent = tax.toFixed(2) + " €";
    document.getElementById('cart-total').textContent = total.toFixed(2) + " €";
}

// Écouter les changements de quantité
document.querySelectorAll('.quantity').forEach((input) => {
    input.addEventListener('change', updateCartTotals);
});

// Initialiser les totaux du panier
updateCartTotals();

document.getElementById('pay-button').addEventListener('click', function () {
    // Créez une session de paiement via une requête AJAX ou via votre backend
    fetch('../PHP/check-out-Session.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            amount: 2000 // Montant en centimes (par exemple, 20.00€ = 2000 centimes)
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // Affiche la réponse JSON de l'API
        window.location.href = `https://checkout.stripe.com/pay/${data.id}`;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

// Fonction pour calculer le total à envoyer en paiement (en centimes pour Stripe)
function calculateTotalAmount() {
    const total = parseFloat(document.getElementById('cart-total').textContent);
    return Math.round(total * 100); // Convertir en centimes pour Stripe
}
