<?php

// Obtenemos los datos del formulario
$largo = $_POST["largo"];
$ancho = $_POST["ancho"];
$alto = $_POST["alto"];
$tipo_envio = $_POST["tipo_envio"];
$pais = $_POST["pais"];
$unidades = $_POST["unidades"];

// Calculamos el volumen
switch ($unidades) {
  case "cm":
    $volumen = $largo * $ancho * $alto / 1000000;
    break;
  case "pulgadas":
    $volumen = $largo * $ancho * $alto / 5787;
    break;
}

// Calculamos el factor de conversión
switch ($pais) {
  case "mexico":
    $factor_conversion = 333;
    break;
  case "estados_unidos":
    $factor_conversion = 6000;
    break;
  case "china":
    $factor_conversion = 1;
    break;
}

// Calculamos el peso volumetrico
$peso_volumetrico = $volumen * $factor_conversion;

// Devolvemos el resultado
echo "El peso volumetrico es de " . $peso_volumetrico . " kg.";

?>
