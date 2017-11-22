var express = require('express');
var app = express();


app.get('/', function(request, response){
    response.json({
        empleado: { nombre : "Iván Lynch", edad : 26, profesion : "Desarrollador" }
    });
});

app.listen(3000, function(){
    console.log("Servidor corriendo");
});