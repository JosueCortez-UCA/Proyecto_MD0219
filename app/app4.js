let numero_app4 = document.querySelector("#factorial");
let btn_calcular_app4 = document.querySelector("#app4-btn");
let div_impresion_app4 = document.querySelector("#App4 div.impresion");

btn_calcular_app4.addEventListener("click", () => {
    let numero = numero_app4.value;

    if (numero/numero) {
        imprimir_app4(numero, factorial(numero));
    }
    else {
        alert("Debe ingresar un numero");
    }
});

function factorial(numero) {
	resultado = 1;

    for (var i = 1; i <= numero; i++) {
		resultado *= i;
	}
	return resultado;
};

let imprimir_app4 = (numero, resultado) => {
    let objeto_impresion = document.createElement("div");
    objeto_impresion.className = "resultado";
    objeto_impresion.id = "impresion_app4";

    objeto_impresion.innerHTML = `
        <hr class="linea_bonita">
        <h4>
            Resultado <br/>
            <small class="text-muted">El factorial de ${numero}! es ${resultado} </small>
        </h4>
    `;

    div_impresion_app4.replaceChild(objeto_impresion, document.getElementById("impresion_app4"));
};
