<?php

header('Access-Control-Allow-Origin: *');

//On utilise la fonction htmlspecialchars pour nous protéger contre une faille XSS
$idPatient = htmlspecialchars($_POST['idPatient']);

// Connexion à la BDD en PDO
try {
  $bdd = new PDO('mysql:host=localhost;dbname=e_kine','root','');
  $bdd->exec('SET NAMES "utf8"');
}
catch (Exeption $e) {
  die('Erreur : ' .$e->getMessage())  or die(print_r($bdd->errorInfo()));
}

// On utilise une requête préparée pour sécuriser notre requête contre une injection SQL
$req = $bdd->prepare("SELECT Nom_exo, Lien, Description FROM exercice, prog_exe, patient WHERE patient.id = ? AND patient.id_prog = prog_exe.id_prog AND prog_exe.id_exe = exercice.id_exe");
$req->execute(array($idPatient));

$result = $req->fetchAll(PDO::FETCH_ASSOC);

//On encode au format JSON puis on envoi les résulats au controller
echo json_encode($result);

?>
