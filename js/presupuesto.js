// Función para validar el formulario
function validarFormulario() {
    var nombre = document.getElementById('nombre').value.trim();
    var apellidos = document.getElementById('apellidos').value.trim();
    var telefono = document.getElementById('telefono').value.trim();
    var email = document.getElementById('email').value.trim();
    
    var letrasSolo = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    var numerosSolo = /^[0-9]+$/;
    var emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    var errores = [];
  
    if (!nombre.match(letrasSolo) || nombre.length > 15) {
      errores.push("Por favor, introduzca un nombre válido (máximo 15 letras).\n");
    }
  
    if (!apellidos.match(letrasSolo) || apellidos.length > 40) {
      errores.push("Por favor, introduzca apellidos válidos (máximo 40 letras).\n");
    }
  
    if (!telefono.match(numerosSolo) || telefono.length > 9) {
      errores.push("Por favor, introduzca un teléfono válido (máximo 9 dígitos).\n");
    }
  
    if (!email.match(emailValido)) {
      errores.push("Por favor, introduzca un correo electrónico válido.\n");
    }
    if(errores.length > 0){
      alert(errores);
      return false;
    }
    return true;
  }
  
  // función para calcular el presupuesto final
  function calcularPresupuesto() {
    if (!validarFormulario()) return; // validar datos de contacto antes de calcular
    
    var precioBase = parseFloat(document.getElementById('producto').value);
    var plazo = parseInt(document.getElementById('plazo').value);
    var extras = document.getElementsByName('extras');
    var totalExtras = 0;
  
    for (var i = 0; i < extras.length; i++) {
      if (extras[i].checked) {
        totalExtras += parseFloat(extras[i].value);
      }
    }
  
    var descuento = 0;
    if (plazo >= 2) {
      descuento = precioBase * 0.1; // descuento del 10% precio base
    }
  
    var presupuestoFinal = precioBase + totalExtras - descuento;
    document.getElementById('presupuestoFinal').textContent = presupuestoFinal.toFixed(2) + '€';
  }
  
  // función para resetear el formulario
  function resetearFormulario() {
    document.getElementById('formularioPresupuesto').reset();
    document.getElementById('presupuestoFinal').textContent = '0€'; // restablecer el presupuesto inicial
  }
  
  // función para enviar el presupuesto (simulación)
  function enviarPresupuesto() {
    if (!validarFormulario()) return; // validar formulario antes de enviar (simulación)
    alert('Presupuesto enviado correctamente.'); // simular el envío real
  }
  