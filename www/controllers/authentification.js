$(document).ready(function() {

  // Mise a jour du DOM pour voir si le script est actif
  $('#message-login').html("Script Ready");

  //Fonction lancée à l'appuit du bouton de validation
  $('#button-connect').click(function() {
    //Récuperation des informations saisies par l'utilisateur
    $identifiant = $("#input-identifiant").val();
    $mdp = $('#input-password').val();
    $keep = $('#keep').is(':checked');

    //On vérifie que l'utilisateur à renseigné un champs
    if (!$identifiant.length && !$mdp.length) {
      $('#message-login').html('Veuillez remplir les champs');
    } else {
      //Envoi des identifiants au fichier php en charge du traitement
      $.ajax({
        type: 'POST',
        //Lien vers le fichier
        url: "http://ekine.iut-velizy.uvsq.fr/app/authentification.php",
        //Type de data au retour des résultats
        dataType: 'json',
        data: {
          //Informations passée au PHP
          identifiant: $identifiant,
          mdp: $mdp
        },
        // Fonction lancée à la fin de traitement PHP
        success: function(data) {
          if (data.state === "success") {
            //On garde en mémoire l'id de l'utilisateur (Cookie pour navigateur, localstorage pour mobile)
            Cookies.set('id', data.Id);
            //On vérifie si la personne souhauite maintenir la session
            if ($keep == true) {
              Cookies.set('keepMeAlive', "OhYes")
              //On set un cookie ou en localstorage une valeur. Cella va permettre de maintenir une connexion si la personne s'est authentifiée
            }

            //Si les identifiants sont corrects, alors on permet la connexion et on fait un redirection
            window.location.replace("home.html");
          } else {
            //Sinon, on affiche une erreur
            $('#message-login').html('Identifiant ou mot de passe incorrect');
          }
        }
      })
    }
  });
});
