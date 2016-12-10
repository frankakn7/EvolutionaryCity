var population = [];
var populationCount = 1;

var interests = ['math', 'science', 'IT', 'art' ];

function person(id,age,income,job,gender,interests,education,
				medicalState,spendingType,IQ,happiness,
				relationship,workplace) {
				
    this.id = id;
	this.age = age;
	this.income = income;
	this.job = job;
	this.gender = gender;
	this.interests = interests;
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
			switch(Math.round(Math.random()*4)+1){
				case 1:
					this.interests[i] = 'Math';
					break;
				case 2:
					this.interests[i] = 'Biology';
					break;
				case 3:
					this.interests[i] = 'IT';
					break;
				case 4:
					this.interests[i] = 'Design';
					break;
				case 5:
					this.interests[i] = 'Music';
					break;
			}
		}
	} 
}

function bornBaby(){
	population[populationCount] = new person();
	population[populationCount].age = 0;
	population[populationCount].income = 0;
	population[populationCount].job = false;
	population[populationCount].gender = population[populationCount].randomGender();
	population[populationCount].interests = [];
	population[populationCount].randomInterests();
	population[populationCount].education = 0;
	population[populationCount].medicalState = 'Healthy';
	population[populationCount].spendingType = Math.round(Math.random()*2)+1;
	population[populationCount].IQ = Math.round(Math.random()*30)+90;
	population[populationCount].happiness = 100;
	population[populationCount].relationship = false;
	population[populationCount].workplace = 'None';
	
	populationCount ++;
}

for(var i = 0; i < 5; i++){
	bornBaby();
}