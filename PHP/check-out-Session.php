<?php

require '../vendor/autoload.php'; // Charger Stripe via Composer

\Stripe\Stripe::setApiKey('sk_test_XXXXXXXXXXXXXXXXXXXXXXXX'); // Remplacez par votre clé secrète de test

header('Content-Type: application/json');

try {
    // Récupérer le corps de la requête JSON
    $data = json_decode(file_get_contents('php://input'), true);

    // Vérifier si le montant est défini
    if (!isset($data['amount'])) {
        throw new Exception('Le montant n\'est pas défini.');
    }

    $YOUR_DOMAIN = 'http://localhost'; // Utilisez localhost pour le développement local

    // Créer la session de paiement Stripe
    $checkout_session = \Stripe\Checkout\Session::create([
        'payment_method_types' => ['card'],
        'line_items' => [[
            'price_data' => [
                'currency' => 'eur',
                'product_data' => [
                    'name' => 'Total de votre panier',
                ],
                'unit_amount' => $data['amount'], // Total en centimes
            ],
            'quantity' => 1,
        ]],
        'mode' => 'payment',
        'success_url' => $YOUR_DOMAIN . '/cart.html',
        'cancel_url' => $YOUR_DOMAIN . '/cart.html',
    ]);

    // Retourner l'ID de la session en JSON
    echo json_encode(['id' => $checkout_session->id]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
?>
