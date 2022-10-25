
function convertir(){
    var selectConv=document.getElementById('selectMonedas').value;

    var convInput=document.getElementById('convInput').value;
    convInput=parseFloat(convInput);
    var salida=0;
    var titulo='';
    if(selectConv=="1"){
        salida=convInput/6.96;
        salida
        titulo=convInput+'Bs ='+salida.toFixed(2)+" $";
    }
    if(selectConv=="2"){
        salida=convInput*6.96;
        salida
        titulo=convInput+' $ ='+salida.toFixed(2)+" Bs";
    }
    document.getElementById('resultadoConver').innerHTML=titulo;
}