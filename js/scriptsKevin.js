console.log("Mi primer script");

let primerNombre = "Kevin";
let segundoNombre = "Lizandro";
let apellidoPaterno = "Gasca";
let apellidoMaterno = "Pérez";

let fechaNacimiento = "01/11/2002"; 
const userRfc = "GAPK021101"

let concatenarUno = primerNombre + " " + segundoNombre;
let concatenarDos =  `Mi RFC es: ${primerNombre} ${segundoNombre} ${apellidoPaterno} ${apellidoMaterno}`;
let concatenarTres  =  concatenarUno + concatenarDos;



// console.log("(1,2): "    + apellidoPaterno.substr(0,2));  
// console.log("(1,2): "    + apellidoMaterno.substr(0,1));  
// console.log("(1,2): "    + primerNombre.substr(0,1));   

// console.log("(1,2): "    + fechaNacimiento.substr(8,2));   
  
// console.log("(5,7): "    + fechaNacimiento.substr(3,2));   
// console.log("(1,4): "    + fechaNacimiento.substr(0,2));   


///
///  Se extrajeron y concatenaron caracteres de los datos para hacer un RFC   
///
let rfcCalculado = apellidoPaterno.substr(0,2)
                    + apellidoMaterno.substr(0,1) 
                    + primerNombre.substr(0,1)
                    + fechaNacimiento.substr(8,2)
                    + fechaNacimiento.substr(3,2)
                    + fechaNacimiento.substr(0,2);

///
///   se utiliza la función .toUpperCase para convertir todo en mayusculas 
///
rfcCalculado = rfcCalculado.toUpperCase();

console.log(rfcCalculado);

// console.log()

