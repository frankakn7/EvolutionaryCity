var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var needUpdate = true;

var info = {
    year: 0,
    population: 0,
    anualBirth: 0,
    anualDeath: 0,
    groth: 0,
}

var freeOffice = [];
var freeShop = [];
var freeFactory = [];

var freeResidence = [];

var month = 1;
var year = 1;

function removeFreeOffice(){
	freeOffice.splice(0, 1);
}

function removeFreeShop() {
    freeShop.splice(0, 1);
}

function removeFreeFactory() {
    freeFactory.splice(0, 1);
}

function removeFreeResidence(id) {
	var index = freeResidence.indexOf(id);
	freeResidence.splice(index, 1);
}