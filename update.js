// Update
function updatCanvas() {
    context.clearRect(0, 0, 500, 500);
    for (var i in houses) {
        houses[i].draw();
    }
    needUpdate = false;

}

function infoPack(){
    var pack = "Year: " + info.year + "<br>" +
        "Population: " + info.population + "<br>" +
        "Relationships: " + info.relationship + "<br>" +
        "Births: " + info.birth + "<br>" +
        "Deaths: " + info.death + "<br>" +
        "Anual Birth: " + info.anualBirth + "<br>" +
        "Anual Death: " + info.anualDeath;
    return pack;
}

var beforeBirth = 0;
var beforeDeath = 0;

function anualInfo() {
    info.anualBirth = info.birth - beforeBirth;
    beforeBirth = info.birth;

    info.anualDeath = info.death - beforeDeath;
    beforeDeath = info.death;
}

function updateInfo() {
    info.year = year;
    info.population = living.length;
    //info.anualBirth = 0;
    //info.anualDeath = 0;
    info.groth = 0;

    document.getElementById("info").innerHTML = infoPack();
}

function newMonth() {
	for(var i in living){
		var id = living[i];
		
		population[id].birthDay();
		population[id].getRelationship();
		population[id].getChild();
		population[id].foundCompany();
		population[id].die();
	}
	for(var i in houses){
		if(houses[i].type === "Residence"){
			houses[i].isFree();
		}
	}
	
	if(freeResidence.length === 0){
		buildResidence(10,20000,Math.round(Math.random()*500),Math.round(Math.random()*500),50);
	}
	
	if(month < 12){
		month ++;
	}else{
		year ++;
		month = 1;
		anualInfo();
	}
	updateInfo();
}

function update() {
    if(needUpdate === true){
        updatCanvas();
    }
}

setInterval(newMonth, 1000/12);
setInterval(update, 1000 / 25);