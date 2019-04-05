$(document).ready(function(){


  $('#message-login').html("Script Ready");




  $('#button-connect').click(function(){

    //Récuperation des informations saisies par l'utilisateur
    $identifiant = $("#input-identifiant").val();
    $mdp = $('#input-password').val();
    $keep = $('#keep').is(':checked');

    //On vérifie que l'utilisateur à renseigné un champs
    if ( !$identifiant.length && !$mdp.length ) {
      $('#message-login').html('Veuillez remplir les champs');
    }


    else {
      console.log("ok");
      //Envoi des identifiants au fichier php en charge du traitement
      $.ajax({
        type: 'POST',
        url: "http://ekine.iut-velizy.uvsq.fr/app/authentification.php",
        // url: 'php/authentification.php',
        dataType: 'json',
        data: {
          identifiant: $identifiant,
          mdp: $mdp
        },
        success: function(data){
          if (data.state === "success") {
            //On garde en mémoire l'id de l'utilisateur (Cookie pour navigateur, localstorage pour mobile)
            console.log("succes");

            Cookies.set('id', data.Id);
            //On vérifie si la personne souhauite maintenir la session
            if($keep == true){
              Cookies.set('keepMeAlive', "OhYes")
              //On set un cookie ou en localstorage une valeur. Cella va permettre de maintenir une connexion si la personne s'est authentifiée
            }

            //Si les identifiants sont corrects, alors on permet la connexion et on fait un redirection
            window.location.replace("home.html");
          }

          else {
            console.log("debug");
            $('#message-login').html('Identifiant ou mot de passe incorrect');
          }
        }
      })
    }



  });



});
