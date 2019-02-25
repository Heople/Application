<?php
//  header("Access-Control-Allow-Origin: *");
//  header('Access-Control-Allow-Methods: GET, POST');

  $host_name = "db774640962.hosting-data.io";
  $user_name = "dbo774640962";
  $pass = "Abcd#1234";
  $database = "db774640962";
//
//  $dsn = "mysql:dbname=$database;host=$host_name";



  $email = $_POST['email'];
  $mdp = $_POST['mdp'];

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
try {
    $mysqli = mysqli_connect($host_name, $user_name, $pass, $database);
    mysqli_set_charset($mysqli, $charset);
} catch (\mysqli_sql_exception $e) {
     throw new \mysqli_sql_exception($e->getMessage(), $e->getCode());
}


//   try {
//     $connect = new PDO($dsn, $user_name,  $pass);
//   } catch (PDOExeption $e) {
//     echo 'Erreur lors de la connexion : '. $e->getMessage();
//   }


  if (isset($email)) {
    $requete = "SELECT * FROM `login` WHERE `email`='$email' AND `mdp`='$mdp'";
    $resultat = $mysqli->query($requete);
    printf($resultat);
//    if ($row == 0) {
//      echo "succes";
//    }
//    else {
//      echo "error";
//    }
  }
//  //
//  // else{
//  //   echo "Renseigné un login";
//  // }

//  echo "email est : ". $email;

 ?>
