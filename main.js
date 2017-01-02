var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var needUpdate = true;

var info = {
    year: 0,
    population: 0,
    birth: 0,
    death: 0,
    annualBirth: 0,
    annualDeath: 0,
    growth: 0,
    relationship: 0,
    houses: 0,
    annualHouses: 0,
}

var freeOffice = [];
var freeShop = [];
var freeFactory = [];
var freeResidence = [];

var demand = {
	construction: 0,
	selling: 0,
	production: 0,
}

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

function payment(payer,reciever,amount){
	payer.capital -= amount;
	reciever.capital += amount;
}