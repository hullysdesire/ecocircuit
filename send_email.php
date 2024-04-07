<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ecocircuit</title>
</head>
<body>
    
</body>

<?php
    Récupérez les données du formulaire
    $depart = $_POST['Depart'];
    $destination = $_POST['Destination'];
    $name = $_POST['Name'];
    $email = $_POST['Email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    Adresse e-mail de destination
    $to_email = "hullysdesire1@gmail.com";

    Sujet de l'e-mail
    $subject = "Nouvelle réservation de véhicule";

    Contenu de l'e-mail
    $email_content = "Point de départ : $depart\nDestination : $destination\nNom : $name\nEmail : $email\nTéléphone : $phone\nMessage : $message";

    Entête de l'e-mail
    $headers = "From: $email";

    Envoi de l'e-mail
    if (mail($to_email, $subject, $email_content, $headers)) {
        echo "Votre réservation a été envoyée avec succès.";
    } else {
        echo "Une erreur est survenue lors de l'envoi de la réservation. Veuillez réessayer.";
    }
?>


<?php
    $to_email = "hullysdesire1@example.com";
    $subject = "Nouvelle réservation de véhicule";
    $message = "Point de départ : ".$_POST['Depart']."\nDestination : ".$_POST['Destination']."\nNom : ".$_POST['Name']."\nEmail : ".$_POST['Email']."\nTéléphone : ".$_POST['phone']."\nMessage : ".$_POST['message'];
    $headers = "From: webmaster@example.com";
    mail($to_email, $subject, $message, $headers);
?>








</html>









