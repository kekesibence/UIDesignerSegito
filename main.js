
var mintaSzovegInput;
var betuMeretInput;
var betuSzinInput;
var hatterSzinInput;

var mintaSzoveg;
var betuMeret;
var betuSzin;
var hatterSzin;

function init() {
    mintaSzovegInput = document.getElementById('mintaSzoveg');
    mintaSzoveg = mintaSzovegInput.value;
    betuMeretInput =document.getElementById('betuMeret');
    betuMeret = betuMeretInput.value;
    betuSzinInput = document.getElementById('betuSzin');
    betuSzin = betuSzinInput.value;
    hatterSzinInput = document.getElementById('hatterSzin');
    hatterSzin = hatterSzinInput.value;
    document.getElementById('elonezet').innerHTML = mintaSzoveg;
    mintaSzovegInput.addEventListener("input", szovegValtozas); 
    document.getElementById('elonezet').style.fontSize = betuMeret + "pt";
    betuMeretInput.addEventListener("input", betuMeretValtozas);
    betuSzinInput.addEventListener("input", betuSzinValtozas);
    hatterSzinInput.addEventListener("input", hatterSzinValtozas);
}

function szovegValtozas() {
    mintaSzoveg = mintaSzovegInput.value;
    document.getElementById('elonezet').innerHTML = mintaSzoveg;
}

function betuMeretValtozas() {
    betuMeret = betuMeretInput.value;
    document.getElementById('elonezet').style.fontSize = betuMeret + "pt";
    console.log(betuMeret);
}

function betuSzinValtozas() {
    betuSzin = betuSzinInput.value;
    document.getElementById('elonezet').style.color = betuSzin;
    console.log(betuSzin);
}

function hatterSzinValtozas() {
    hatterSzin = hatterSzinInput.value;
    document.getElementById('elonezet').style.backgroundColor = hatterSzin;
    console.log(hatterSzin);
}

document.addEventListener('DOMContentLoaded', init);





