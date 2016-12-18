var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var needUpdate = true;

var info = {
    year: 0,
    population: 0,
    birth: 0,
    death: 0,
    anualBirth: 0,
    anualDeath: 0,
    groth: 0,
    relationship: 0,
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

function RelationshipStatusInHouse(){
	for(var i in houses){
		var males = 0;
		var females = 0;
		for(var j in houses[i].inhabitants){
			if(population[j].gender === 'Male'){
				males ++;
			}else{
				females ++;
			}
		}
		console.log("House: "+i+" Males: "+males+" Females: "+females);
	}
}