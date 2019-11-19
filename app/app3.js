let btn_calcular_app3 = document.querySelector("#app3-btn");
let div_impresion_app3 = document.querySelector("#App3 div.impresion");

// matriz
let n_filas_matriz = document.querySelector("#n_filas_matriz");
let n_columnas_matriz = document.querySelector("#n_columnas_matriz");
// submatriz
let n_filas_submatriz = document.querySelector("#n_filas_submatriz");
let n_columnas_submatriz = document.querySelector("#n_columnas_submatriz");

btn_calcular_app3.addEventListener("click", () => {
    // respuestas
    let filas;
    let columnas;
    let resultado;
    // valores
    let filas_matriz = n_filas_matriz.value;
    let columnas_matriz = n_columnas_matriz.value;
    let filas_submatriz = n_filas_submatriz.value;
    let columnas_submatriz = n_columnas_submatriz.value;

    if ((filas_matriz/filas_matriz) && (columnas_matriz/columnas_matriz) && (filas_submatriz/filas_submatriz) && (columnas_submatriz/columnas_submatriz)) {
        filas = (
            (factorial(filas_matriz))
            /
            ( (factorial(filas_submatriz)) * (factorial(filas_matriz-filas_submatriz)) )
        );
        columnas = (
            (factorial(columnas_matriz))
            /
            ( (factorial(columnas_submatriz)) * (factorial(columnas_matriz-columnas_submatriz)) )
        );

        resultado = filas * columnas;

        imprimir_app3(filas_submatriz, columnas_submatriz, resultado);
    }
    else {
        alert("Debe ingresar numeros enteros");
    }
});

let imprimir_app3 = (filas_submatriz, columnas_submatriz, resultado) => {
    let objeto_impresion = document.createElement("div");
    objeto_impresion.className = "resultado";
    objeto_impresion.id = "impresion_app3";

    objeto_impresion.innerHTML = `
        <hr class="linea_bonita">
        <h4>
            Resultado <br/>
            <small class="text-muted">Se pueden obtener ${resultado} submatrices de orden ${filas_submatriz} x ${columnas_submatriz}</small>
        </h4>
    `;

    div_impresion_app3.replaceChild(objeto_impresion, document.getElementById("impresion_app3"));
};
