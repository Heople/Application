if ("Notification" in window) {
Notification.requestPermission(function (permission) {
// If the user accepts, let's create a notification
if (permission === 'granted') {
  var notification = new Notification("My title", {
       tag: 'message1',
       body: "My body"
  });
  notification.onshow  = function() { console.log('show'); };
  notification.onclose = function() { console.log('close'); };
  notification.onclick = function() { console.log('click'); };
}
});
}
