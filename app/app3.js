
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
    
    if(p >= 0 && p < 1){
        document.datos.prob.value = Math.round((fact(n)/(fact(n-k)*fact(k))*Math.pow(p,k)*Math.pow(1-p,n-k))*100) + "%"; 
    }else{
        document.datos.prob.value = "ERROR!";
    }

    
}