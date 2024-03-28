
//-----Selección de elementos----//
const botonEncriptar =document.querySelector("#boton1");
const botonDesencriptar = document.querySelector("#boton3");
const botonCopiar = document.querySelector("#boton2");
const textEncriptar = document.querySelector("#mensajeParaEncriptar");
const aviso = document.querySelector(".nota");
const respuesta = document.querySelector("#mensajeEncriptado");

//-----Boton de encriptar----//

botonEncriptar.addEventListener("click", e=>{ e.preventDefault();
    let texto = textEncriptar.value;
    //esta expresión sirvio para separar el texto canonicamente con el NFD y despues remplazar los caracteres especiales con espacios o bien borrar acentos//
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " )
    //console.log(txt);
    if (texto == ""){
        aviso.style.fontWeight = "550";
        aviso.style.color = "#FA0101";
        aviso.textContent = "El campo de texto no debe estar vacío.";
        //tiempo para que salga la condicion si clickean sin texto//
        setTimeout(() => {
            aviso.removeAttribute("style");
            aviso.textContent = "El encriptador no funciona con letras mayúsculas ni caracteres especiales.";
          }, "1500");

    }
    //por si escriben caracteres especiales
    else if(texto !== txt){
        aviso.style.fontWeight = "550";
        aviso.style.color = "#FA0101";
        aviso.textContent = "No debe tener caracteres especiales ni acentos.";
        //tiempo para que salga la condicion si clickean sin texto//
        setTimeout(() => {
            aviso.removeAttribute("style");
            aviso.textContent = "El encriptador no funciona con letras mayúsculas ni caracteres especiales.";
          }, "1500");
    }
    // por si escriben mayusculas
    else if(texto !== texto.toLowerCase()){
        aviso.style.fontWeight = "550";
        aviso.style.color = "#FA0101";
        aviso.textContent = "El texto debe ser solo en minúsculas.";
        //tiempo para que salga la condicion si clickean sin texto//
        setTimeout(() => {
            aviso.removeAttribute("style");
            aviso.textContent = "El encriptador no funciona con letras mayúsculas ni caracteres especiales.";
          }, "1500");
    }

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto;
    }

    
})

//Boton desencriptar//

botonDesencriptar.addEventListener("click", e=>{ e.preventDefault();

    let texto = textEncriptar.value;
    //esta expresión sirvio para separar el texto canonicamente con el NFD y despues remplazar los caracteres especiales con espacios o bien borrar acentos//
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " )
    //console.log(txt);
    if (texto == ""){
        aviso.style.fontWeight = "550";
        aviso.style.color = "#FA0101";
        aviso.textContent = "El campo de texto no debe estar vacío.";
        //tiempo para que salga la condicion si clickean sin texto//
        setTimeout(() => {
            aviso.removeAttribute("style");
            aviso.textContent = "El encriptador no funciona con letras mayúsculas ni caracteres especiales.";
          }, "1500");

    }
    //por si escriben caracteres especiales
    else if(texto !== txt){
        aviso.style.fontWeight = "550";
        aviso.style.color = "#FA0101";
        aviso.textContent = "No debe tener caracteres especiales ni acentos.";
        //tiempo para que salga la condicion si clickean sin texto//
        setTimeout(() => {
            aviso.removeAttribute("style");
            aviso.textContent = "El encriptador no funciona con letras mayúsculas ni caracteres especiales.";
          }, "1500");
    }
    // por si escriben mayusculas
    else if(texto !== texto.toLowerCase()){
        aviso.style.fontWeight = "550";
        aviso.style.color = "#FA0101";
        aviso.textContent = "El texto debe ser solo en minúsculas.";
        //tiempo para que salga la condicion si clickean sin texto//
        setTimeout(() => {
            aviso.removeAttribute("style");
            aviso.textContent = "El encriptador no funciona con letras mayúsculas ni caracteres especiales.";
          }, "1500");
    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        respuesta.innerHTML = texto;
    }
})

//Boton de Copiar//

botonCopiar.addEventListener("click", e=>{ e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");
})