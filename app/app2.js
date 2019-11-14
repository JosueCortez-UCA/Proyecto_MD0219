let palabraPermutacion = document.getElementById("palabraPermutacion");
let btn_calcular_app2 = document.getElementById("app2-btn");
let div_impresion_app2 = document.querySelector("#App2 div.modal-body");



let calcularCoeficiente_app2 = (palabra) => {
    let impresion = document.createElement("div");
    
    impresion.className = "resultado";
    impresion.innerHTML = `
        <hr class="linea_bonita">
        <h4>
            Resultado <br/>
            <small class="text-muted">Total de Permutaciones con Repetición : ${palabra} </small>
        </h4>
            
       

    `;
    //<p class="text-success"> ${palabra}</p>

    
    div_impresion_app2.appendChild(impresion);
}


btn_calcular_app2.addEventListener("click", ()=>{
    calcularCoeficiente_app2(palabraPermutacion.value);
})