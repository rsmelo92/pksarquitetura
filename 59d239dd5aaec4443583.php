<?php 
$name = $_POST['name'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$message = $_POST['message'];
$formcontent="De: $name \n Email: $email \n Telefone: $tel \n\n Messagem: $message";
$recipient = "rsmelo_@hotmail.com, paulomelo.ba@gmail.com";
$subject = "PKS Arquitetura, mensagem de $name";
$mailheader = "De: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Erro! Algo de errado aconteceu");
echo "Obrigado, $name ! Em breve entraremos em contato.";
?>
<!doctype hmtl>
<html>
<head>
<META NAME="ROBOTS" CONTENT="NOINDEX, NOFOLLOW">
</head>
</html>