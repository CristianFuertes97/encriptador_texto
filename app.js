// Variables a utilizar 
const botonCopiar = document.getElementById('copiar');
const respuesta = document.getElementById('mensaje');
const img = document.getElementById('imagen');
const mensaje = document.getElementById('titulo_mensaje');
const parrafo = document.getElementById('parrafo');
const imagen = document.getElementById('imagen');
const aviso = document.getElementById('aviso');
const txt = document.getElementById('mensaje');

function encriptador(){
    let texto = document.getElementById('textoarea').value;
    let reemplazos = {
                'o': 'ober',
                'a': 'ai',
                'e': 'enter',
                'i': 'imes',
                'u': 'ufat',
            };
    let textoEncriptado = texto.replace(/[aeiou]/g, vocal => reemplazos[vocal]);
    
    if (mayusculas(texto)==true){
        mensaje.textContent = 'Ingrese letras minúsculas';
        parrafo.textContent = '';
    }
    else if (caracteresEspeciales(texto)== true){
        mensaje.textContent = 'Ingrese solo letras sin caracteres.';
        parrafo.textContent = '';
    }
    else if (texto.length != 0){
        document.getElementById('mensaje').value = textoEncriptado;
        verdadero();
    }else{
        condicionesIniciales();
    }
    return;
}

function desencriptar() {
    let texto = document.getElementById('textoarea').value;
    let reemplazosInversos= {
        'ai': 'a',
        'enter':'e',
        'ober': 'o',
        'imes': 'i',
        'ufat': 'u',
    };
    let desencriptado = texto.replace(/ai|enter|ober|imes|ufat/g, frase=> reemplazosInversos[frase]);
    if (texto.length != 0){
        document.getElementById('mensaje').value = desencriptado;
        verdadero();
    }else{
        condicionesIniciales();
    }
    return;
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

function mayusculas(valor) {
    for (let i = 0; i < valor.length; i++){
        if (valor[i] >= 'A' && valor[i] <= 'Z'){
            return true;
        }
    }
    return false;
}

function caracteresEspeciales(frase) {
    const simbolos = '0123456789/*-+@$%&#!?¿¡';
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

})
