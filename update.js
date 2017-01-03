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
        "Houses: " + info.houses + "<br> " +
        "Annual Birth: " + info.annualBirth + "<br>" +
        "Annual Death: " + info.annualDeath + "<br>" +
        "Annual Houses: " + info.annualHouses;
    return pack;
}
var beforeBirth = 0; 
var beforeDeath = 0; 

var houseCalc = 0;

var homeless = 0;

function anualInfo() {
    info.annualBirth = info.birth - beforeBirth; 
    beforeBirth = info.birth; 
 
    info.annualDeath = info.death - beforeDeath; 
    beforeDeath = info.death; 
    
    info.annualHouses = houseCalc;
    houseCalc = 0;
}

function updateInfo() {
    info.year = year;
    info.population = living.length;
    info.growth = 0;
    info.houses = houses.length;

    document.getElementById("info").innerHTML = infoPack();
}

function evaluateDemand(){
	var construct = 0;
	var sell = 0;
	var produce = 0;
	
	if(companys.length > 0){	
		for(var i in companys){
			if(companys[i].type === 'Construction'){
				construct ++;
			}else if(companys[i].type === 'Selling'){
				sell ++;
			}else{
				produce ++;
			}
		}
	demand.construction = construct / companys.length;
	demand.selling = sell / companys.length;
	demand.production = produce / companys.length;
	}
}

function newMonth() {
	homeless = living.length;
	for(var i in living){
		var id = living[i];
		
		if(population[id].home != false){
			homeless --;
		}
		
		population[id].birthDay();
		population[id].getRelationship();
		population[id].getChild();
		population[id].foundCompany();
		population[id].findHome();
		population[id].die();
	}
	for(var i in houses){
		if(houses[i].type === "Residence"){
			houses[i].isFree();
		}
	}
	
	evaluateDemand();
	
	for(var i = 0; i < homeless; i += 50){
		if(free.Residence.length === 0){
			state.construct.residence();
			houseCalc ++;
		}
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