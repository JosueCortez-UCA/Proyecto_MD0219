let impresion_app3 = document.querySelector("#resultado_binomial");
let flag = false;
let impresion_vieja_app3;


function fact(n){
    f=1;
    
    for (i=1;i <n+1; i++){
        f=f*i 
    };
    return f 
}

function bin(){
    k = parseInt(document.datos.k.value);
    n = parseInt(document.datos.n.value);
    p = parseFloat(document.datos.p.value);
    let resultado;

    if((k/k) && (n/n) && (p/p)){
        if((p >= 0 && p < 1)){
            resultado = (fact(n)/(fact(n-k)*fact(k))*Math.pow(p,k)*Math.pow(1-p,n-k)); 
            calcularDistribucion(resultado);
        }else{
            alert("El valor de la probabilidad individual debe ser un decimal entre cero y 1");
        }
    }else{
        alert("Debe ingresar numeros.");
    }

    
}

let calcularDistribucion = (numero) => {
    let impresion = document.createElement("div");
    let resultado = Math.round(numero * 100);
    impresion.id = "ident_child";
    impresion.innerHTML = `
        <hr class="linea_bonita">
        <h4>
            Resultado <br/>
            <small class="text-muted">La probabilidad de que el suceso ocurra es de: ${resultado}% </small>
        </h4>
            
    `;

    if (flag) {
        impresion_app3.replaceChild(impresion, impresion_vieja_app3);
    } else {
        impresion_app3.appendChild(impresion);
        flag = true;
    }

    impresion_vieja_app3 = document.getElementById("ident_child");
    


}