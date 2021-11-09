
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
    document.getElementById('elonezet').style.fontSize = betuMeretInput.value + "pt";
    betuMeretInput.addEventListener("input", betuMeretValtozas);
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

document.addEventListener('DOMContentLoaded', init);





