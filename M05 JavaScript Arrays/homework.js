/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
    for(let i =0 ; i < array.length ; i++){
         array[i]= array[i] + 1 ;
    }
    return array;
   }

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return  array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
    let frase="";
    if(palabras.length > 0){
       frase= frase+palabras[0]
    }
    for(let i=1 ;  i < palabras.length ; i++){
        //if(i===0)frase= frase+ palabras[i];
        frase= frase+" "+palabras[i]
    }
    return frase;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return  array.includes(elemento);
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let result=0;
   for(let i=0 ; i < arrayOfNums.length; i++){
        result= result + arrayOfNums[i]
   }
   return result;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let sumaNotas=0;
   for(let i=0 ; i < resultadosTest.length ; i++){
        sumaNotas= sumaNotas + resultadosTest[i]
   }
   let promedio= sumaNotas/ resultadosTest.length;
   return promedio;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   let numMayor=0;
   if(arrayOfNums.length > 0){
       numMayor=arrayOfNums[0];
       for(let i=0 ; i < arrayOfNums.length ; i++){
          if(arrayOfNums[i] > numMayor){
             numMayor= arrayOfNums[i];
          }
       }
   }
   return numMayor;
    
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   let result;
   if(arguments.length === 0){
       result=0;
   }else if(arguments.length ===1){
        result=arguments[0];
   }else{
         result=1;
         for(let i=0 ; i< arguments.length; i++){
             result= result * arguments[i];
         }
   }
    return result;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let cantidad=0;
  
       for(let i = 0 ; i< array.length ; i++){
            if(array[i]>18) cantidad++;
       }
    
    return cantidad;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   let mensaje="";
   switch (numeroDeDia) {
     case 1 : 
     mensaje="Es fin de semana";
           break;
     case 7 :
           mensaje="Es fin de semana";
           break;
     default:
           mensaje="Es dia laboral";
   }
   return mensaje;
}



function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
    let numberString=num.toString();
    return numberString.charAt(0) === "9";
    
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
    return array.every( x =>  array[0] === x );
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   let meses=[];
   let mes="";
   let eneroEsta=false;
   let marzoEsta=false;
   let noviembreEsta=false;
   for(let i=0 ; i < array.length; i++){
       mes=array[i]
       if(mes ==="Enero") {
           meses.push(mes);
           eneroEsta=true;
       }
       if(mes ==="Marzo"){
           meses.push(mes)
           marzoEsta=true;
       }
       if( mes ==="Noviembre"){
           meses.push(mes);
           noviembreEsta=true;
       }
   }

   if(eneroEsta && marzoEsta && noviembreEsta){
      return meses;
   }else{
       return "No se encontraron los meses pedidos";
   }
    
    
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let tablaDel6=[];
   for(let i =0 ; i < 11; i++){
        tablaDel6.push(6*i)
   }
   return tablaDel6;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
     let valoresMayoresACien=[];
     for(let i=0 ; i < array.length ; i++){
          if(array[i] > 100){
             valoresMayoresACien.push(array[i])
          }
     }
     return valoresMayoresACien;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   let numeros=[];
   let seInterrumpio=false;
   let sum=num;
   for(let i = 0 ; i < 10 ; i++){
       sum=sum +2;
       numeros.push(sum);
       if(sum === i){
         seInterrumpio=true;
         break;
      }
   }
   if(seInterrumpio){
       return "Se interrumpió la ejecución";
   }
   return numeros;

}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let numeros=[];
   let sum=num;
   for(let i = 0 ; i < 10 ; i++){
       if(i === 5 ) continue;
       sum=sum +2;
       numeros.push(sum);
   }
   return numeros;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
