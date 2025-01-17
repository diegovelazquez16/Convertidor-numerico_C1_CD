function textoABinario(texto) {
    return texto
        .split("")
        .map((caracter) => caracter.charCodeAt(0).toString(2).padStart(8, "0"))
        .join(" ");
}

function textoAHexadecimal(texto) {
    return texto
        .split("")
        .map((caracter) => caracter.charCodeAt(0).toString(16).toUpperCase())
        .join(" ");
}

function textoAAscii(texto) {
    return texto.split("").map((caracter) => caracter.charCodeAt(0)).join(" ");
}

function binarioATexto(binario) {
    return binario
        .split(" ")
        .map((bin) => String.fromCharCode(parseInt(bin, 2)))
        .join("");
}

function hexadecimalATexto(hexadecimal) {
    return hexadecimal
        .split(" ")
        .map((hex) => String.fromCharCode(parseInt(hex, 16)))
        .join("");
}

function asciiATexto(ascii) {
    return ascii
        .split(" ")
        .map((codigo) => String.fromCharCode(parseInt(codigo, 10)))
        .join("");
}

document.getElementById("botonConvertir").addEventListener("click", () => {
    const entrada = document.getElementById("entradaTexto").value.trim();
    const tipoConversion = document.getElementById("tipoConversion").value;
    const resultadoDiv = document.getElementById("resultado");

    if (entrada === "") {
        resultadoDiv.textContent = "Por favor, ingresa un texto o número válido.";
        return;
    }

    let resultado;
    switch (tipoConversion) {
        case "textoABinario":
            resultado = textoABinario(entrada);
            break;
        case "textoAHexadecimal":
            resultado = textoAHexadecimal(entrada);
            break;
        case "textoAAscii":
            resultado = textoAAscii(entrada);
            break;
        case "binarioATexto":
            resultado = binarioATexto(entrada);
            break;
        case "hexadecimalATexto":
            resultado = hexadecimalATexto(entrada);
            break;
        case "asciiATexto":
            resultado = asciiATexto(entrada);
            break;
        default:
            resultado = "Conversión no válida.";
    }

    resultadoDiv.textContent = `Resultado: ${resultado}`;
});

document.getElementById("entradaTexto").addEventListener("input", (e) => {
    const maxLength = 20;
    if (e.target.value.length > maxLength) {
        e.target.value = e.target.value.slice(0, maxLength);
    }
});
