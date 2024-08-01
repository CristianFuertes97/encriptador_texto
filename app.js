// Variables a utilizar 
const botonCopiar = document.getElementById('copiar');
const respuesta = document.getElementById('mensaje');
const img = document.getElementById('imagen');
const mensaje = document.getElementById('titulo_mensaje');
const parrafo = document.getElementById('parrafo');
const imagen = document.getElementById('imagen');
const aviso = document.getElementById('aviso');
const txt = document.getElementById('mensaje');

// Funcion con las condiciones para encriptar el texto recibido 
function encriptador(textoEncriptar){
    
    let reemplazos = {
                'o': 'ober',
                'a': 'ai',
                'e': 'enter',
                'i': 'imes',
                'u': 'ufat',
            };
    let textoEncriptado = textoEncriptar.replace(/[aeiou]/g, vocal => reemplazos[vocal]);
    
    if (mayusculas(textoEncriptar)==true){
        swal('Ooops!','Ingrese solo letras minúsculas','error');
        parrafo.textContent = '';
    }
    else if (caracteresEspeciales(textoEncriptar)== true){
        swal('Ooops!','Ingrese solo letras sin caracteres','error');
        parrafo.textContent = '';
    }
    else if (textoEncriptar.length != 0){
        document.getElementById('mensaje').value = textoEncriptado;
        verdadero();
    }else{
        condicionesIniciales();
    }
    return textoEncriptar;

}

// Funcion que ejecuta la logica de encriptacion
function btnEncriptar() {
    const encriptar = encriptador(document.getElementById('textoarea').value);
    mensaje.value = encriptar;
    document.getElementById('textoarea').value = '';

}

// Funcion con las condiciones para desencriptar el texto recibido 
function desencriptar(textoDesencriptar) {
    let reemplazosInversos= {
        'ai': 'a',
        'enter':'e',
        'ober': 'o',
        'imes': 'i',
        'ufat': 'u',
    };
    let desencriptado = textoDesencriptar.replace(/ai|enter|ober|imes|ufat/g, frase=> reemplazosInversos[frase]);
    
    if (mayusculas(textoDesencriptar)==true){
        swal('Ooops!','Ingrese solo letras minúsculas','error');
        parrafo.textContent = '';
    }
    else if (caracteresEspeciales(textoDesencriptar)== true){
        swal('Ooops!','Ingrese solo letras sin caracteres','error');
        parrafo.textContent = '';
    }
    else if (textoDesencriptar.length != 0){
        document.getElementById('mensaje').value = desencriptado;
        verdadero();
    }else{
        condicionesIniciales();
    }
    return textoDesencriptar;
}

// Funcion que ejecuta la logica de desencriptacion
function btnDesencriptar() {
    const desEncriptar = desencriptar(document.getElementById('textoarea').value);
    mensaje.value = desEncriptar;
    document.getElementById('textoarea').value = '';

}

// Funcion que declara las condiciones cuando no hay texto en el text area
function condicionesIniciales() {
    mensaje.textContent = 'Ningún mensaje fue encontrado.';
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    botonCopiar.style.visibility ="hidden";
    img.style.visibility ="inherit";
    txt.style.visibility ='hidden';
}

// Funcion que declara todas las condiciones cuando hay valor en el textarea
function verdadero() {
    mensaje.textContent = '';
    parrafo.textContent = "";
    imagen.style.visibility ="hidden";
    botonCopiar.style.visibility ="inherit";
    txt.style.visibility ='inherit';
}

// funcion para validar que el texto no tenga letras mayusculas.
function mayusculas(valor) {
    for (let i = 0; i < valor.length; i++){
        if (valor[i] >= 'A' && valor[i] <= 'Z'){
            return true;
        }
    }
    return false;
}

// Función para validar que no tenga el texto caracteres especiales
function caracteresEspeciales(frase) {
    const simbolos = '0123456789/*-+@$%&#!?¿¡<>.)({}[]-_:;,|°"';
    for (let i = 0; i < frase.length; i++){
        const caracter = frase[i];
        if (simbolos.includes(caracter)){
            return true;
        }
    }
    return false;
}

botonCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiarbtn = respuesta;
    copiarbtn.select();
    document.execCommand("copy");
    swal('Copiado','Texto copiado con exito!',"success");
    document.getElementById('mensaje').value = '';


})
