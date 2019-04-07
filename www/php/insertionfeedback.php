<?php

header('Access-Control-Allow-Origin: *');

//On utilise la fonction htmlspecialchars pour nous protéger contre une insertion malveillante
$text = htmlspecialchars($_POST['text']);
$lvl = htmlspecialchars($_POST['lvl']);
$idPatient = htmlspecialchars($_POST['idPatient']);

// Connexion à la BDD en PDO
try {
  $bdd = new PDO('mysql:host=localhost;dbname=e_kine','root','Ah#19!');
  $bdd->exec('SET NAMES "utf8"');
}
catch (Exeption $e) {
  die('Erreur : ' .$e->getMessage())  or die(print_r($bdd->errorInfo()));
}

// On utilise une requête préparée pour sécuriser notre requête contre une injection SQL
$req = $bdd->prepare("UPDATE programme, patient SET FeedBack = ? , `TexteFeedBack` = ? WHERE programme.id_prog=patient.id_prog AND patient.Id= ? ");
$req->execute(array($lvl, $text, $idPatient));

$result = $req->fetchAll(PDO::FETCH_ASSOC);


//On encode au format JSON puis on envoi les résulats au controller
echo json_encode($result);

?>
²
