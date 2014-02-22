function enviarDatos(nom,mail,tel,foto){
    $.ajax({
        type: "POST",
        url: "http://igitsoft.com/pgtest.php",
        data: "nom=" + nom + "&mail="+ mail +"&tel="+tel
    }).done(function(msg){
        if(msg==1){
            subirFoto(foto, nom);
        }else{
            navigator.notification.alert("Error al procesar datos", null, "Error", "Aceptar");
        }
    });
}

function sicronizarReserva(th,pe,di,ha){
    $.ajax({
        type: "POST",
        url: "http://igitsoft.com/pgtest.php",
        data: "th=" + th + "&pe="+ pe +"&di="+ di + "&ha="+ ha + "&id="+infoDispositivo('id')
    }).done(function(msg){
        if(msg==1){
            navigator.notification.alert("Reservacion completa", null, "Felicidades", "Aceptar");
        }else{
            navigator.notification.alert("Error al procesar datos", null, "Error", "Aceptar");
        }
    });
}