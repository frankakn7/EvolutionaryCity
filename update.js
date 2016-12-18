// Update
function updatCanvas() {
    context.clearRect(0, 0, 500, 500);
    for (var i in houses) {
        houses[i].draw();
    }
    needUpdate = false;

}

function newMonth() {
	for(var i in population){
		population[i].birthDay();
		population[i].getRelationship();
		population[i].getChild();
	}
	
	if(month < 12){
		month ++;
	}else{
		year ++;
		month = 1;
	}
}

function update() {
    if(needUpdate === true){
        updatCanvas();
    }
}

setInterval(newMonth, 1000);
setInterval(update, 1000 / 25);