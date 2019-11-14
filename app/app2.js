let palabraPermutacion = document.getElementById("palabraPermutacion");
let btn_calcular_app2 = document.getElementById("app2-btn");
let div_impresion_app2 = document.querySelector("#App2 div.modal-body");

class Letra{
    constructor(nombre,valor){
        this.nombre = nombre;
        this.valor = valor;
    }
}


let calcularArregloLetrasRepetidas = (palabra) => {
    let arrayLetras = [];
    let arraySumas = [];
    let contador = 0;
    
    let palabraOriginal = palabra;
    let palabraTratada = convertirPalabra(palabra);
    console.log(palabraTratada);
    
    for (let i = 0; i < palabraTratada.length; i++) {
        const letra = new Letra(palabraTratada[i],0);
       arrayLetras.push(letra);
        
    }
   
    for (let i = 0; i < palabraTratada.length; i++) {
        for (let j = 0; j < palabraTratada.length; j++) {
            if(arrayLetras[i].nombre == arrayLetras[j].nombre){
                contador++;
                arrayLetras[i].valor++;
                // console.log(arrayLetras[i].nombre + " == "+ arrayLetras[j].nombre);
            }
           
        }
        
        
        contador = 0;
    }
    for (let i = 0; i < palabraTratada.length; i++) {
        for (let j = 0; j < palabraTratada.length; j++) {
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
            
            if((arraySumas[i].nombre == arraySumas[j].nombre) && arraySumas[i].valor > 1){
                contador++;
                arraySumas.pop();
            }
        }
       
        contador=0;
    }
    
    console.log(arrayLetras);
    console.log(arraySumas);
  
    imprimirDatos(palabraOriginal);
}




//Esta funcion sirve para convertir la palabra a minusculas y eliminar las tildes
// para que sea más facil de que el usuario ingrese alguna palabra 
let convertirPalabra = (palabra) =>{
    palabra = palabra.toLowerCase();

    return palabra.normalize('NFD').replace(/[\u0300-\u036f]/g,"");//es descompuesto en su equivalencia de caracter base
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
    calcularArregloLetrasRepetidas(palabraPermutacion.value);
});




