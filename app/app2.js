let palabraPermutacion = document.getElementById("palabraPermutacion");
let btn_calcular_app2 = document.getElementById("app2-btn");
let div_impresion_app2 = document.querySelector("#App2 div.modal-body");

class Letra{
    constructor(nombre,valor){
        this.nombre = nombre;
        this.valor = valor;
    }
}


let calcularCoeficiente_app2 = (palabra) => {
    let arrayLetras = [];
    let arraySumas = [];
    let arraySumasAux = [];
    let contador = 0;
    let total = 0;
    for (let i = 0; i < palabra.length; i++) {
        const letra = new Letra(palabra[i],0);
       arrayLetras.push(letra);
        
    }
    // for (let i = 0; i < palabra.length; i++) {
    //     switch (arrayLetras[i].nombre) {
    //         case "a": case "A": case "á": case "Á":
    //             arrayLetras[i].valor++;
    //             break;
        
    //         default:
    //             break;
    //     }
        
    // }
    for (let i = 0; i < palabra.length; i++) {
        for (let j = 0; j < palabra.length; j++) {
            if(arrayLetras[i].nombre == arrayLetras[j].nombre){
                contador++;
                arrayLetras[i].valor++;
                // console.log(arrayLetras[i].nombre + " == "+ arrayLetras[j].nombre);
            }
           
        }
        
        
        contador = 0;
    }
    for (let i = 0; i < palabra.length; i++) {
        for (let j = 0; j < palabra.length; j++) {
            if(arrayLetras[i].nombre == arrayLetras[j].nombre){
                contador++;
               
            }
           
        }
        
        if(contador>1){
            arraySumas.push(arrayLetras[i])
        }
        
        contador = 0;
    }
    for (let i = 0; i < arraySumas.length; i++) {
        for (let j = 0; j < arraySumas.length; j++) {
            
            if(arraySumas[i].nombre == arraySumas[j].nombre){
                contador++;
               
            }
            
        }
        console.log(contador);
    }
    
    console.log(arrayLetras);
    console.log(arraySumas);
    console.log(arraySumasAux);
    imprimirDatos(palabra);
}



let calcularFactorial = (numero) =>{
    if(numero == 0){
        return 1;
    }else{
        return numero*calcularFactorial(numero-1);
    }
}



let imprimirDatos = (palabra) =>{
    let impresion = document.createElement("div");
    

    impresion.className = "resultado";
    impresion.innerHTML = `
        <hr class="linea_bonita">
        <h4>
            Resultado <br/>
            <small class="text-muted">Total de Permutaciones con Repetición : ${palabra} </small>
        </h4>
        
    `;
    
    div_impresion_app2.appendChild(impresion);
}


btn_calcular_app2.addEventListener("click", ()=>{
    calcularCoeficiente_app2(palabraPermutacion.value);
});




