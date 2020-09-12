// This is a JavaScript file

$(document).on("click", "#alerta", function(){
navigator.notification.alert("Minha Mensagem",null,"aviso","aceito");
});

$(document).on("click", "#alerta", function(){
  function confirm(buttonIndex){
    if(buttonIndex == 1){
       navigator.notification.alert("Escolheu a opção A");
    }
   else{
       navigator.notification.alert("Escolheu a opção B");
   }
  }
navigator.notification.confirm("escolha A ou B",confirm,"Escolha"['A','B']);
});

$(document).on("click", "#beep", function(){
navigator.notification.beep(3);
});

$(document).on("click", "#vibrar", function(){
navigator.vibrate(3000);
});


 
function mostramapa(lat, long){
  
   L.mapquest.key = 'fClYReR5tspIzkh0ORT0u5Ae7OzPg5MG';

        var map = L.mapquest.map('map', {
          center: [lat, long],
          layers: L.mapquest.tileLayer('map'),
          zoom: 12
});

 map.addControl(L.mapquest.control());}

$(document).on("click", "#local", function(){
 var onSuccess = function(position) {
   mostramapa(position.coords.latitude,position.coords.longitude) };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
});

