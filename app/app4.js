let numero = document.querySelector("#factorial");
let btn_calcular = document.querySelector("#app4-btn");
let div_impresion = document.querySelector("#App4 div.impresion");



function factorial(numero) {
	resultado = 1;
	for (var i = 1; i <= numero; i++) {
		resultado *= i;
	}
	return resultado;
}


/*<html>
 
 <head>
  
 <title>Factorial</title>
  
 <script language="javascript">
  
 function factorial (){
     var factorial = 1;
  
         for (var i=1; i <= document.getElementById ('n').value; i++){
             factorial *= i;
         }
  
         document.getElementById ('resultado').value = factorial;
 }
  
 </script>
  
 </head>
  
 <body>
  
 <form onsubmit="javascript: factorial ();return (false);">
  
 Número: <input type="text" name="n" id="n" />
  
 <br />
  
 Factorial: <input type="text" name="resultado" id="resultado" />
  
 <br />
  
 <input type="submit" value="Calcular" />
  
 </form>
  
 </body>
  
 </html>*/