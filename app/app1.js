let coeficiente = document.querySelector("#potenciaBinomio");
let btn_calcular = document.querySelector("#app1-btn");
let div_impresion = document.querySelector("#App1 div.impresion");
let bandera = false;

let calcularCoeficiente = (estado, coe, numeros) => {
    let impresion = document.createElement("div");
    impresion.className = "resultado";
    impresion.id = coe;

    if (estado == 1) {
        impresion.innerHTML = `
            <hr class="linea_bonita">
            <h4>
                Resultado <br/>
                <small class="text-muted">Coeficientes de un binomio elevado a la ${coe} </small>
            </h4>
                
            <p class="text-success"> El binomio elevado a la 0 es 1 </p>
        `;
    }
    else if (estado == 2) {
        impresion.innerHTML = `
            <hr class="linea_bonita">
            <h4>
                Resultado <br/>
                <small class="text-muted">Coeficientes de un binomio elevado a la ${coe} </small>
            </h4>
                
            <p class="text-success"> ${numeros} </p>
        `;
    } else {
        impresion.innerHTML = `
            <hr class="linea_bonita">
            <h4 class="nope">
                ERROR!
            </h4>
        `;
    }


    if (bandera) {
        div_impresion.replaceChild(impresion, impresion_vieja);
    } else {
        div_impresion.appendChild(impresion);
        bandera = true;
    }

    impresion_vieja = document.getElementById(coe);
}

btn_calcular.addEventListener("click", () => {
    let numero = coeficiente.value;
    let resultado = [];

    if (numero.length == 0) {
        calcularCoeficiente();
    }
    else if (numero == 0) {
        calcularCoeficiente(1, numero);
    }
    else if (numero/numero) {
        for (let i = 0; i <= numero; i++) {
            resultado.push(
                (factorial(numero)) / (factorial(i)*factorial(numero-i))
            );
        }

        calcularCoeficiente(2, numero, resultado);
    }
    else {
        calcularCoeficiente();
    }
});

function factorial (n) {
	var total = 1; 
    
    for (let i = 1; i <= n; i++) {
		total = total * i; 
	}
	return total; 
};
