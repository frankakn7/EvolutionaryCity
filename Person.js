var population = [];
var populationCount = 1;

var globalInterests = ['math','science','IT','art'];

function person(id,age,income,job,gender,interests,education,
				medicalState,spendingType,IQ,happiness,
				relationship,workplace) {
				
    this.id = id;
	this.age = age;
	this.income = income;
	this.job = job;
	this.gender = gender;
	this.interests = [];
	this.education = education;
	this.medicalState = medicalState;
	this.spendingType = spendingType;
	this.IQ = IQ;
	this.happiness = happiness;
	this.relationship = relationship;
	this.workplace = workplace;
	
	//this.inheritance = inheritance;
	
	this.randomGender = function(){
		if(Math.round(Math.random())){
			return 'Male'
		}else{
			return 'Female'
		}
	}
	
	this.randomInterests = function(){
		for(var i = 0; i < 3; i++){
			this.interests[i] = globalInterests[Math.round(Math.random()*3)];
		}
	}
	
	this.randomIQ = function(){
		var randomNum = Math.round(Math.random()*9)+1;
		if(randomNum === 1){
			return 100 + Math.round(Math.random()*50);
		}else if(randomNum === 2){
			return 100 - Math.round(Math.random()*50);
		}else{
			return 90 + Math.round(Math.random()*20);
		}
	} 
}

function bornBaby(){
	population[populationCount] = new person();
	population[populationCount].id = populationCount;
	population[populationCount].age = 0;
	population[populationCount].income = 0;
	population[populationCount].job = false;
	population[populationCount].gender = population[populationCount].randomGender();
	population[populationCount].randomInterests();
	population[populationCount].education = 0;
	population[populationCount].medicalState = 'Healthy';
	population[populationCount].spendingType = Math.round(Math.random()*2)+1;
	population[populationCount].IQ = population[populationCount].randomIQ();
	population[populationCount].happiness = 100;
	population[populationCount].relationship = false;
	population[populationCount].workplace = 'None';
	
	populationCount ++;
}

for(var i = 0; i < 10; i++){
	bornBaby();
}