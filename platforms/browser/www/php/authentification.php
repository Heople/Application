<?php
header('Access-Control-Allow-Origin: http://ekine.iut-velizy.uvsq.fr', true);


//On utilise la fonction htmlspecialchars pour nous protéger contre une faille XSS
$identifiant = htmlspecialchars($_POST['identifiant']);
$mdp = htmlspecialchars($_POST['mdp']);

// Connexion à la BDD en PDO
try {
  $bdd = new PDO('mysql:host=localhost;dbname=e_kine','root','Ah#19');
  $bdd->exec('SET NAMES "utf8"');
}
catch (Exeption $e) {
  die('Erreur : ' .$e->getMessage())  or die(print_r($bdd->errorInfo()));
}

// On utilise une requête préparée pour sécuriser notre requête contre une injection SQL
$req = $bdd->prepare("SELECT * FROM patient WHERE Login= ? AND Mdp= ?");
$req->execute(array($identifiant, $mdp));

$result = $req->fetchAll(PDO::FETCH_ASSOC);

//On récupère la valeur de l'id
foreach ($result as $row) {
  $id = $row['Id'];
}

   if (!empty($result)) {
     //On place deux valeurs dans un tableau, la première qui va permettre l'authentification, et une seconde qui sera gardée en mémoire et qui sera utilisée dans d'autres requetes
     echo json_encode(array("success",$id));
   }
   else {
     echo "error";
   }




//   $host_name = "db774640962.hosting-data.io";
//   $user_name = "dbo774640962";
//   $pass = "Abcd#1234";
//   $database = "db774640962";
//
//
//
//
//
//   $email = $_POST['email'];
//   $mdp = $_POST['mdp'];
//
// mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
// try {
//     $mysqli = mysqli_connect($host_name, $user_name, $pass, $database);
//     mysqli_set_charset($mysqli, $charset);
// } catch (\mysqli_sql_exception $e) {
//      throw new \mysqli_sql_exception($e->getMessage(), $e->getCode());
// }
//
//
//
//   if (isset($email)) {
//     $requete = "SELECT * FROM `login` WHERE `email`='$email' AND `mdp`='$mdp'";
//     $resultat = $mysqli->query($requete);
//     printf($resultat);
// //    if ($row == 0) {
// //      echo "succes";
// //    }
// //    else {
// //      echo "error";
// //    }
//   }
// //  //
// //  // else{
// //  //   echo "Renseigné un login";
// //  // }
//
// //  echo "email est : ". $email;



 ?>
