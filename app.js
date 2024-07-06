const botonCopiar = document.getElementById('copiar');
const respuesta = document.getElementById('mensaje');

function encriptador(){
    let texto = document.getElementById('textoarea').value;
    let mensaje = document.getElementById('titulo_mensaje');
    let parrafo = document.getElementById('parrafo');
    let imagen = document.getElementById('imagen');
    let boton = document.getElementById('copiar');
    let aviso = document.getElementById('aviso');

    let reemplazos = {
                'o': 'ober',
                'a': 'ai',
                'e': 'enter',
                'i': 'imes',
                'u': 'ufat',
            };
    let textoEncriptado = texto.replace(/[aeiou]/g, vocal => reemplazos[vocal]);

    if (texto.length != 0){
        document.getElementById('mensaje').value = textoEncriptado;
        mensaje.textContent = 'Texto Cifrado con exito!!';
        parrafo.textContent = "";
        aviso.textContent = "Solo letras minúsculas y sin acentos."
        imagen.remove();
        boton.style.visibility ="inherit";
    }else{
        imagen.src = "./assets/hacker.png";
        mensaje.textContent = 'Ningún mensaje fue encontrado';
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        aviso.textContent = "Ingresa un texto antes de continuar!!";
        aviso.style.color ="whitesmoke";
        aviso.style.fontWeight ="400";
        aviso.style.fontSize ="14px";
    }
    return textoEncriptado;
}


function desencriptar() {
    let texto = document.getElementById('textoarea').value;
    let mensaje = document.getElementById('titulo_mensaje');
    let parrafo = document.getElementById('parrafo');
    let imagen = document.getElementById('imagen');
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
        mensaje.textContent = 'Texto descifrado con exito';
        parrafo.textContent = "";
        imagen.remove();
    }else{
        imagen.src = "./assets/hacker.png";
        mensaje.textContent = 'Ningún mensaje fue encontrado';
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        
    }
    return desencriptado;
}

botonCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiarbtn = respuesta;
    copiarbtn.select();
    document.execCommand("copy");

})

