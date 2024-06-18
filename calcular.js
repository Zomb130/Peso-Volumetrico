function calcularPesoVolumetrico() {
  const largo = document.getElementById("largo").value;
  const ancho = document.getElementById("ancho").value;
  const alto = document.getElementById("alto").value;
  const tipoEnvio = document.getElementById("tipo_envio").value;
  const pais = document.getElementById("pais").value;
  const unidades = document.getElementById("unidades").value;

  // Calculamos el volumen
  const volumen = largo * ancho * alto;

  // Calculamos el factor de conversión
  const factorConversion = 0;
  switch (pais) {
    case "mexico":
      factorConversion = 333;
      break;
    case "estados_unidos":
      factorConversion = 6000;
      break;
    case "china":
      factorConversion = 1;
      break;
  }

  // Calculamos el peso volumetrico
  const pesoVolumetrico = volumen * factorConversion;

  // Actualizamos el resultado en el campo de texto
  document.getElementById("peso_volumetrico").value = pesoVolumetrico.toFixed(2);
}

// Agregamos un evento input al campo de texto
document.getElementById("peso_volumetrico").addEventListener("input", calcularPesoVolumetrico);

window.onload = calcularPesoVolumetrico;
