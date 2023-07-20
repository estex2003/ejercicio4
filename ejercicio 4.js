// cadena de texto con mi nombre
let nombre = "esteban";
let apellido = "velasco riaño"; 
let estudiante = nombre+ " " +apellido;
console.log(estudiante);

//minuscula y mayuscula
let estudiantemayus = nombre+ " " +apellido;
let estudianteminus = nombre+ " " +apellido;

console.log(estudiantemayus.toUpperCase());
console.log(estudianteminus.toLowerCase()); 

//numero de caracteres de estudiante
let numero_de_caracteres_E = estudiante.length;
console.log(numero_de_caracteres_E);

//primera letra de mi nombre
let primer_caracter = estudiante.charAt(0);
console.log(primer_caracter)

let segundo_caracter = estudiante.charAt(8);
console.log(segundo_caracter)

let tercer_caracter = estudiante.charAt(16);
console.log(tercer_caracter)

let sin_espacios = estudiante.trim();
let contador_de_espacios = estudiante.length
console.log(sin_espacios,contador_de_espacios+" " +"espacios")


//boleana true
function nombrestrue(estudianteminus){
    let minombreestrue = estudianteminus.toLowerCase()
    console.log(minombreestrue.includes("esteban velasco riaño"))
    console.log(minombreestrue.includes("esteban"))    
}
nombrestrue(""); 