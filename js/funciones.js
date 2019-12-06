/**
// Definimos una variable.
var x;
// Con la función "$(...)" obtenemos un objeto de tipo jQuery.
// Aquí obtenemos la referencia del objeto "document" del DOM.
x = $(document);

// El método ready tiene como parámetro un nombre de función.
// Esta función se ejecutará cuando todos los elementos de la página estén cargados (renderizados / dibujados).
// Sólo pasamos el nombre de la función y no escribimos los paréntesis de la función.
// Aquí ejecutamos la función "inicializarEventos".
x.ready(inicializarEventos);
/**/
// OTRA FORMA
// Se puede realizar todo en una sola línea.
$(document).ready(inicializarEventos);
/**/

function inicializarEventos()
{
  // Se ejecuta el evento "click" del elemento de Id "enviar" (el botón).
  $("#enviar").click(presionSubmit);
}

function presionSubmit()
{
  // Tomamos el valor del elemento con Id "nro"
  var valor = $("#nro").val();
  $.ajax({
           // Definimos si la comunicación será asincrónica (true) o sincrónica (false) 
           async:true, 
           // Definimos el método que se envían los datos (pudiendo ser GET o POST)
           type: "POST",
           // Definimos el tipo de datos que se va a recuperar (pudiendo ser "html","xml","json","script")
           dataType: "html",
           // Definimos como se empaquetan los datos para enviarlos al servidor (normalmente "application/x-www-form-urlencoded")
           contentType: "application/x-www-form-urlencoded",
           // Definimos el nombre de la página que procesará la petición de datos.
           url:"procesar.php",
           // Definimos los datos a enviar al servidor.
           data:"numero="+valor,
           // Definimos el nombre de la función que se ejecutará previo al envío de datos 
           // (por ejemplo mostramos el gif animado que indica que se inició el pedido de datos al servidor)
           beforeSend:inicioEnvio,
           // Definimos la función que se ejecuta cuando finalizó el envío de datos del servidor y además ocurrió todo en forma correcta 
           // (aquí recuperamos el dato devuelto y lo mostramos en la página)
           success:llegadaDatos,
           // Definimos el tiempo máximo a esperar por la petición de datos.
           timeout:4000,
           // Definimos el nombre de la función que se ejecuta si los datos no llegan del servidor.
           error:problemas
         });
  
  return false;
}

function inicioEnvio()
{
  // Se muestra la imagen de "Cargando" en el div de Id "resultados"
  $("#resultados").html('<img src="imagenes/cargando.gif">');
}

function llegadaDatos(datos)
{
  // Se muestra el resultado, contenido en el parámetro "datos", en el div de Id "resultados"
  $("#resultados").text(datos);
}

function problemas()
{
  // Se muestra el mensaje, de error en este caso, en el div de Id "resultados"
  $("#resultados").text('Problemas en el servidor.');
}