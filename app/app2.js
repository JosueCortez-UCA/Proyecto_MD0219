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
    let contadorAux = 0; //para saber si no hay repeticion
    
     let palabraTratada = convertirPalabra(palabra);
    
    
    
    for (let i = 0; i < palabraTratada.length; i++) {
        const letra = new Letra(palabraTratada[i],0);
       arrayLetras.push(letra);
        
    }
    
    for (let i = 0; i < palabraTratada.length; i++) {
        for (let j = 0; j < palabraTratada.length; j++) {
            if(arrayLetras[i].nombre == arrayLetras[j].nombre){
                contador++;
                arrayLetras[i].valor++;
            }
           
        }
        
        
        contador = 0;
    }

    for (let i = 0; i < arrayLetras.length; i++) {
        if(arrayLetras[i].valor == 1){
            contadorAux++;
        }
        
    }
    //validacion cuando no se repite ni una letra
    if(contadorAux == arrayLetras.length){
        imprimirDatos(palabraTratada,arrayLetras, calcularPermutaciones(arrayLetras,palabraTratada));
    }else{
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
            for (let j = 0; j < arraySumas.length-1; j++) {
                
                if((arraySumas[i].nombre == arraySumas[j].nombre)){
                   arraySumas.pop(); 
                }
            }
           
            contador=0;
        }
       
        imprimirDatos(palabraTratada,arraySumas, calcularPermutaciones(arraySumas,palabraTratada));
    }

    
    
    
    
}

let calcularPermutaciones = (arrayLetras , palabra) => {
    
    let numerador = calcularFactorial(palabra.length);
    let denominador = 1;
    let denominadorArray =[];
    let totalPermutaciones = 0;
    for (let i = 0; i < arrayLetras.length; i++) {

        denominador *= calcularFactorial(arrayLetras[i].valor);
      
    }
    
   
    return totalPermutaciones = numerador/denominador;
    
}



//Esta funcion sirve para convertir la palabra a minusculas y eliminar las tildes
// para que sea más facil de que el usuario ingrese alguna palabra 
let convertirPalabra = (palabra) =>{
    
    let palabraNueva = "";
    
    palabra = palabra.toLowerCase();

    for (let i = 0; i < palabra.length; i++) {
        if(palabra[i] != " "){
            palabraNueva += palabra[i];
        }
    }

    let palabraLimpia = new String(palabraNueva);
    
   
    return palabraLimpia.normalize('NFD').replace(/[\u0300-\u036f]/g,"");//es descompuesto en su equivalencia de caracter base
}


let calcularFactorial = (numero) =>{
    if(numero == 0){
        return 1;
    }else{
        return numero*calcularFactorial(numero-1);
    }
}



let imprimirDatos = (palabra, arrayLetras, total) =>{
    limpiarResultado();
    let impresion = document.createElement("div");
    let denominadorDatos = "";
    let letrasRepetidas ="";
    

   
    for (let i = 0; i < arrayLetras.length; i++) {
       if(i+1 == arrayLetras.length){
        denominadorDatos += arrayLetras[i].valor + "!";
       }else{
        denominadorDatos += arrayLetras[i].valor + "!x";
       }
    }
    for (let i = 0; i < arrayLetras.length; i++) {
      letrasRepetidas += arrayLetras[i].nombre +"="+ arrayLetras[i].valor + "<br/>";
    }
    
    impresion.className = "resultado";
    impresion.innerHTML = `
        <hr class="linea_bonita">
        <h4>
            Resultado <br/><br/>
            <small class="text-muted">${letrasRepetidas} <br/></small>
            <small class="text-muted">Total de Permutaciones con Repetición : ${palabra.length} !/</small>
            <small class="text-muted">${denominadorDatos} = </small>
            <p class="text-success"> ${total}</p>
        </h4>
        
    `;
    
    div_impresion_app2.appendChild(impresion);
   
}

let validarSoloLetras = (palabra) =>{
    let numeros="0123456789";

    for(i=0; i<palabra.length; i++){
        if (numeros.indexOf(palabra.charAt(i),0)!=-1){
            return 1;
        }
    }
    return 0;
    }



btn_calcular_app2.addEventListener("click", ()=>{
    const pattern = new RegExp('[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$', 'i');

    if (!palabraPermutacion.value) {
        
        palabraPermutacion.value = "Error, dato vacío, ingrese una palabra.";
        limpiarResultado();
    }else if(!pattern.test(palabraPermutacion.value)){
        
        palabraPermutacion.value = "Error, solo se admiten letras";
        limpiarResultado();
        
    }else{
        
        calcularArregloLetrasRepetidas(palabraPermutacion.value);
    }
   
});


let limpiarResultado = () =>{
    if (div_impresion_app2.lastElementChild.className == "resultado") {
        div_impresion_app2.removeChild(div_impresion_app2.lastElementChild);
    }
}

