var textHibaUzenet;
var betuHibaUzenet;

var mintaSzovegInput;
var betuMeretInput;
var betuSzinInput;
var hatterSzinInput;


function init() {
    mintaSzovegInput = document.getElementById('mintaSzoveg');
    betuMeretInput = document.getElementById('betuMeret');
    betuSzinInput = document.getElementById('betuSzin');
    hatterSzinInput = document.getElementById('hatterSzin');
    
    document.getElementById('elonezet').innerHTML = mintaSzovegInput.value;
    mintaSzovegInput.addEventListener("input", szovegValtozas); 
    textHibaUzenet = document.getElementById("textHibaUzenet");
    mintaSzovegInput.addEventListener("input", szovegEllenorzes); 
    

    document.getElementById('elonezet').style.fontSize = betuMeretInput.value + "pt";
    betuMeretInput.addEventListener("input", betuMeretValtozas);
    betuHibaUzenet = document.getElementById("betuHibaUzenet");
    betuMeretInput.addEventListener("input", betuEllenorzes);

    betuSzinInput.addEventListener("input", betuSzinValtozas);
    hatterSzinInput.addEventListener("input", hatterSzinValtozas);
    document.getElementById('alaphelyzet').addEventListener("click", alaphelyzetbeAllitas);
}

function szovegValtozas() {
    document.getElementById('elonezet').innerHTML = mintaSzovegInput.value;
}

function betuMeretValtozas() {
    document.getElementById('elonezet').style.fontSize = betuMeretInput.value + "pt";
}

function betuSzinValtozas() {
    document.getElementById('elonezet').style.color = betuSzinInput.value;
}

function hatterSzinValtozas() {
    document.getElementById('elonezet').style.backgroundColor = hatterSzinInput.value;
}

function alaphelyzetbeAllitas() {
    document.getElementById('mintaSzoveg').reset();
}

function szovegEllenorzes() {
    var szoveg = mintaSzovegInput.value.length;
    console.log(szoveg);    
    if (szoveg != 0) {
        console.log("nincs hiba");
        textHibaUzenet.style.color = "#d3d3d3"
    } else {
        console.log("hiba");
        textHibaUzenet.style.color = "#ff0000"
    }
}

function betuEllenorzes() {
    var szam = betuMeretInput.value;
    console.log(szam);    
    if (szam > 1) {
        console.log("nincs hiba");
        betuHibaUzenet.style.color = "#d3d3d3"
    } else {
        console.log("hiba");
        betuHibaUzenet.style.color = "#ff0000"
    }
}
document.addEventListener('DOMContentLoaded', init);





