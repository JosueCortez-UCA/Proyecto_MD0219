let coeficiente = document.querySelector("#potenciaBinomio");
let btn_calcular = document.querySelector("#app1-btn");
let div_impresion = document.querySelector("#App1 div.modal-body");

let calcularCoeficiente = (coe, numeros, estado) => {
    let impresion = document.createElement("div");
    impresion.className = "resultado";

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

    div_impresion.appendChild(impresion);
}

btn_calcular.addEventListener("click", () => {
    let numero = coeficiente.value;
    let resultado = [];

    isNaN(numero);
    console.log(numero)
    if (numero == 0) {
        resultado.push(1);
        calcularCoeficiente(numero, resultado, 1);
    }
    else if (numero/numero) {
        for (let i = 0; i <= numero; i++) {
            resultado.push(
                (factorial(numero)) / (factorial(i)*factorial(numero-i))
            );
        }

        calcularCoeficiente(numero, resultado, 2);
    }
    else {
        calcularCoeficiente(numero, resultado, 3);
    }
});

function factorial (n) {
	var total = 1; 
    
    for (let i = 1; i <= n; i++) {
		total = total * i; 
	}
	return total; 
};