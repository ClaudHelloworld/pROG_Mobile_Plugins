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