// Precios constantes
let precioPastina = 2900; // Precio inicial de la pastina
let precioPegamento = 7400; // Precio inicial del pegamento

function calcular() {
    // Obtener los valores de los inputs
    const nombreCeramicas = document.getElementById('nombreModelo').value;
    const calidad=document.getElementById('calidad').value;
    
    const precioMetro = parseFloat(document.getElementById('precioMetro').value);
    const metrosCaja = parseFloat(document.getElementById('metrosCaja').value);
    const metrosSolicitados = parseFloat(document.getElementById('metrosSolicitados').value);
    const metrosPorPegamento=6;

    // Validar que los valores sean números y mayores que cero
    if (isNaN(precioMetro) || isNaN(metrosCaja) || isNaN(metrosSolicitados) || precioMetro <= 0 || metrosCaja <= 0 || metrosSolicitados <= 0) {
        alert('Por favor, ingrese valores válidos y mayores que cero.');
        return;
    }

    // Calcular el costo total
    const cajasNecesarias = Math.ceil(metrosSolicitados / metrosCaja);
    const metrosTotal=(cajasNecesarias * metrosCaja );
    const calcularPegamentosYPastinas= Math.ceil(metrosSolicitados/metrosPorPegamento);
   
    const calcularPrecioPegamentos=calcularPegamentosYPastinas *precioPegamento;
    const calcularPrecioPastinas= calcularPegamentosYPastinas*precioPastina;

   

    const costoTotalCeramicas = (metrosTotal*precioMetro) ;
    const costoTotalPegamentosYPastinas=costoTotalCeramicas+calcularPrecioPastinas+calcularPrecioPegamentos;

    // Crear el mensaje con el resultado
  /*  const mensaje = `Para cubrir ${metrosSolicitados} m2: Necesitas ${cajasNecesarias} cajas de cerámica ,son ${metrosTotal.toFixed(2)} m2 .
    El costo total(Solamente ceramicas) es de $${costoTotalCeramicas.toFixed(0)}.
    Costo total Pegamentos y pastinas:$${costoTotalPegamentosYPastinas.toFixed(0)},
    Son ${calcularPegamentosYPastinas} pegamentos($${precioPegamento}x unidad) y  ${calcularPegamentosYPastinas} pastinas($${precioPastina}x unidad)`;*/

    const mensaje=`${nombreCeramicas} ${calidad}\nPara cubrir: ${metrosSolicitados} m2 :${cajasNecesarias} cajas (${metrosTotal.toFixed(2)}m2)\nCosto total(solo ceramicas):\$${costoTotalCeramicas.toFixed(0)}\nCosto total (con pegamentos y pastinas):\$${costoTotalPegamentosYPastinas.toFixed(0)}\n${calcularPegamentosYPastinas} Pegamentos(\$${precioPegamento}por unidad)\n${calcularPegamentosYPastinas} Pastinas(\$${precioPastina}por unidad)`;
    

    // Crear el div contenedor
    const resultadoDiv = document.createElement('div');
    resultadoDiv.style.border = '1px solid #fff';
    resultadoDiv.style.padding = '10px';
    resultadoDiv.style.marginTop = '20px';
    resultadoDiv.style.backgroundColor = '#333';
    resultadoDiv.style.color = '#fff';
    

    // Crear el párrafo con el mensaje
    const mensajeP = document.createElement('p');
    mensajeP.textContent = mensaje;
    resultadoDiv.appendChild(mensajeP);

    // Crear el botón para copiar
    const copiarButton = document.createElement('button');
    copiarButton.textContent = 'Copiar mensaje';
    copiarButton.style.padding = '10px 20px';
    copiarButton.style.backgroundColor = '#007bff';
    copiarButton.style.color = '#fff';
    copiarButton.style.border = 'none';
    copiarButton.style.borderRadius = '5px';
    copiarButton.style.cursor = 'pointer';
    copiarButton.style.marginTop = '10px';

    // Añadir evento de click al botón para copiar el mensaje
    copiarButton.addEventListener('click', function() {
        // Crear un elemento de texto para seleccionar el contenido
        const textoParaCopiar = document.createElement('textarea');
        textoParaCopiar.value = mensaje;
        document.body.appendChild(textoParaCopiar);
        textoParaCopiar.select();
        document.execCommand('copy');
        document.body.removeChild(textoParaCopiar);

        // Cambiar el texto del botón a 'Copiado'
        copiarButton.textContent = 'Copiado';
        // Cambiar de nuevo a 'Copiar mensaje' después de 2 segundos
        setTimeout(() => {
            copiarButton.textContent = 'Copiar mensaje';
        }, 2000);
    });

    resultadoDiv.appendChild(copiarButton);

    // Mostrar el div en el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar cualquier contenido anterior
    resultado.appendChild(resultadoDiv);
}
function ingresarValores(){

}

/*Funciones para modularizar el codigo */
function calcularTotalPrecioCeramicas(metrosSolicitados){

}

function TotalConPegamentosYPastinas(precioTotalCeramicas){

}


function crearMensaje(mensaje){

}

function modificarPrecioPastina() {
    const nuevoPrecioPastina = parseFloat(prompt("Ingrese el nuevo precio de la pastina:"));
    if (!isNaN(nuevoPrecioPastina) && nuevoPrecioPastina > 0) {
        precioPastina = nuevoPrecioPastina;
        alert(`El nuevo precio de la pastina es $${precioPastina.toFixed(2)}.`);
    } else {
        alert('Por favor, ingrese un precio válido y mayor que cero.');
    }
}

function modificarPrecioPegamento() {
    const nuevoPrecioPegamento = parseFloat(prompt("Ingrese el nuevo precio del pegamento:"));
    if (!isNaN(nuevoPrecioPegamento) && nuevoPrecioPegamento > 0) {
        precioPegamento = nuevoPrecioPegamento;
        alert(`El nuevo precio del pegamento es $${precioPegamento.toFixed(2)}.`);
    } else {
        alert('Por favor, ingrese un precio válido y mayor que cero.');
    }
}
