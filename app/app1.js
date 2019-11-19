let coeficiente_app1 = document.querySelector("#potenciaBinomio");
let btn_calcular_app1 = document.querySelector("#app1-btn");
let div_impresion_app1 = document.querySelector("#App1 div.impresion");

let calcularCoeficiente = (estado, coeficiente, numeros) => {
    let objeto_impresion = document.createElement("div");
    objeto_impresion.className = "resultado";
    objeto_impresion.id = "impresion_app1";

    if (estado == 1) {
        objeto_impresion.innerHTML = `
            <hr class="linea_bonita">
            <h4>
                Resultado <br/>
                <small class="text-muted">Coeficientes de un binomio elevado a la ${coeficiente} </small>
            </h4>
                
            <p class="text-success"> El binomio elevado a la 0 es 1 </p>
        `;
    }
    else if (estado == 2) {
        objeto_impresion.innerHTML = `
            <hr class="linea_bonita">
            <h4>
                Resultado <br/>
                <small class="text-muted">Coeficientes de un binomio elevado a la ${coeficiente} </small>
            </h4>
                
            <p class="text-success"> ${numeros} </p>
        `;
    } else {
        objeto_impresion.innerHTML = `
            <hr class="linea_bonita">
            <h4 class="nope">
                ERROR!
            </h4>
        `;
    }

    div_impresion_app1.replaceChild(objeto_impresion, document.getElementById("impresion_app1"));
}

btn_calcular_app1.addEventListener("click", () => {
    let numero = coeficiente_app1.value;
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
