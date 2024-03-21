function encriptar() {
    let textoAEncritar = parseInt(document.getElementById("texto").value);
    let textoCifrado = texto
        text.replace("a", "ai")
        text.replace("e", "enter")
        text.replace("i", "imes")
        text.replace("o", "ober")
        text.replace("u", "ufat")

    if(textoAEncritar != 0) {
        textoAEncritar = textoCifrado;
    } else {alert ("Ingresar texto")}
}

function desencriptar() {
    let textoAEncritar = parseInt(document.getElementById("texto").value);
    let textoCifrado = texto
        .replace(/ai/gi, "a")
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u")

    if(textoAEncritar != 0) {
        textoAEncritar = textoCifrado;
    } else {alert ("Ingresar texto")}
}