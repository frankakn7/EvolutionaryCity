// Update
function updatCanvas() {
    context.clearRect(0, 0, 500, 500);
    for (var i in houses) {
        houses[i].draw();
    }
    needUpdate = false;

}

function infoPack(){
    var pack = "Year: " + info.year + "<br>" + "Population: " + info.population + "<br>" + "Relationships: " + info.relationship + "<br>" + "Births: " + info.birth + "<br>" + "Deaths: " + info.death;

    return pack;

}

function updateInfo() {
    info.year = year;
    info.population = living.length;
    info.anualBirth = 0;
    info.anualDeath = 0;
    info.groth = 0;

    document.getElementById("info").innerHTML = infoPack();
}

function newMonth() {
	for(var i in living){
		var id = living.indexOf(living[i]);
		
		population[id].birthDay();
		population[id].getRelationship();
		population[id].getChild();
		population[id].die();
		if(freeResidence.length === 0){
			buildResidence(10,20000,Math.round(Math.random()*500),Math.round(Math.random()*500),50);
		}
	}
	
	if(month < 12){
		month ++;
	}else{
		year ++;
		month = 1;
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