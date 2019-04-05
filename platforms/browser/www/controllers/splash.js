$(window).ready(function(){

  var cookie = Cookies.get();
  if (cookie.keepMeAlive == "OhYes") {
    redirection("home.html");
  }

  else {
    redirection("authentification.html");
  }

  function redirection(url){
    setTimeout(function(){
      window.location.replace(url);
    }, 1000 );
  }

});
