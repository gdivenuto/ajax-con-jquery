<html>
	<head>
		<title>Ejemplo de Ajax con jQuery</title>
		<!-- Incluímos la librería jQuery -->
		<script type="text/javascript" src="js/jquery-3.4.1.js"></script>

		<!-- Incluímos funciones JS propias donde utilizamos jQuery -->
		<script type="text/javascript" src="js/funciones.js"></script>
	</head>
	<body>
		<form method="post" id="formulario">
			Ingrese un n&uacute;mero: <input type="text" name="nro" id="nro" size="10">
			<br><br>
			<input type="submit" value="Calcular el cuadrado" id="enviar">
			<br><br>
			<!-- Aquí se muestra el resultado de la petición realizada con Ajax -->
			<div id="resultados"></div>
		</form>
	</body>
</html>