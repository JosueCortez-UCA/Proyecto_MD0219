let impresion_app3 = document.querySelector("#resultado_binomial");

function bin(){
    k = parseInt(document.datos.k.value);
    n = parseInt(document.datos.n.value);
    p = parseFloat(document.datos.p.value);
    let resultado;

    if((k/k) && (n/n) && (p/p)){
        if((p >= 0 && p < 1)){
            resultado = (factorial(n)/(factorial(n-k)*factorial(k))*Math.pow(p,k)*Math.pow(1-p,n-k)); 
            calcularDistribucion(resultado);
        }else{
            alert("El valor de la probabilidad individual debe ser un decimal entre cero y 1");
        }
    }else{
        alert("Debe ingresar numeros.");
    }

    
}

let calcularDistribucion = (numero) => {
    let resultado = Math.round(numero * 100);
    
    let impresion = document.createElement("div");
    impresion.id = "ident_child";
    impresion.innerHTML = `
        <hr class="linea_bonita">
        <h4>
            Resultado <br/>
            <small class="text-muted">La probabilidad de que el suceso ocurra es de: ${resultado}% </small>
        </h4>
            
    `;

    impresion_app3.replaceChild(impresion, document.getElementById("ident_child"));
}
