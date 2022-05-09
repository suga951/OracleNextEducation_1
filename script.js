const btnEncriptar = document.querySelector("#btnEncriptar");
const btnDesecnriptar = document.querySelector("#btnDesencriptar");
var textArea1 = document.getElementById("aEncriptar");
var textArea2 = document.getElementById("textoEncriptado");

btnEncriptar.onclick = function() {
    encriptar();
};

btnDesecnriptar.onclick = function() {
    desencriptar();
}

function encriptar() {
    let texto = textArea1.value;
    texto.toLowerCase();
    let tildes = texto.replace(/[Á-Ý]/g, "");
    let tildesMin = tildes.replace(/[á-ý]/g,"");
    let filtra = tildesMin.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ''); 
    let e = filtra.replace(/e/g, "enter"); 
    let i = e.replace(/i/g, "imes");    
    let a = i.replace(/a/g,"ai");     
    let o = a.replace(/o/g, "ober");   
    let final = o.replace(/u/g,"ufat");    
    textArea2.value = final;
    textArea1.value = "";
}

function desencriptar(){
    let texto = textArea2.value;
    let e = texto.replace(/enter/g, "e");
    let i = e.replace(/imes/g, "i");
    let a = i.replace(/ai/g, "a");
    let o = a.replace(/ober/g, "o")
    let final = o.replace(/ufat/g, "u")
    textArea1.value = final;
    textArea2.value = "";
}

document.querySelector("#textoEncriptado").addEventListener("dblclick",copy);

function copy() {
    var copyText = document.querySelector("#textoEncriptado");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Texto copiado.");
    location.reload();
 }


