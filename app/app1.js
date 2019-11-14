let coeficiente = document.querySelector("#potenciaBinomio");
let btn_calcular = document.querySelector("#app1-btn");
let div_impresion = document.querySelector("#App1 div.modal-body");

let calcularCoeficiente = (coe, numeros) => {
    let impresion = document.createElement("div");
    
    impresion.className = "resultado";
    impresion.innerHTML = `
        <hr class="linea_bonita">
        <h4>
            Resultado <br/>
            <small class="text-muted">Coeficientes de un binomio elevado a la ${coe} </small>
        </h4>
            
        <p class="text-success"> ${numeros} dd</p>

    `;

    div_impresion.appendChild(impresion);
}

btn_calcular.addEventListener("click", () => {
    calcularCoeficiente();
});
