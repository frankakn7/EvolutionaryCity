var population = [];
var populationCount = 0;
var initialPopulation = 10;

var globalInterests = ['math','biology','physiks','IT','art','psychology','chemistry'];

function person(id,age,income,job,gender,interests,education,
				medicalState,spendingType,IQ,happiness,
				relationship,workplace,birthMonth,home,father,mother) {
				
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
	this.birthMonth = birthMonth;
	this.home = home;
	this.father = father;
	this.mother = mother;
	this.money = 0;
	
	this.babyChance = 0.1;
	this.relationshipChance = 0.3;
	
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
			var random = Math.round(Math.random()*(globalInterests.length-1));
			this.interests.push(globalInterests[random]);
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
	
	this.foundCompany = function(){
		foundCompany(this.id);
	}
	
	this.findHome = function(){
		if(!(this.home) && this.age >= 18){
			if(freeResidence.length === 0){
				return;
			}else{
				var residence = freeResidence[0];
				//if(this.capital >= houses[residence].price){
					if(houses[residence].isFree()){
						houses[residence].inhabitants.push(this.id);
						this.home = houses[residence].id;
						return residence;
					}else{
						this.findHome();
					}
				//}
			}
		}else if(age < 18){
			this.home = population[this.father].home;
			houses[this.home].inhabitants.push(this.id);
		}
	}
	
	this.birthDay = function(){
		if(month === this.birthMonth){
			this.age ++;
			if(this.age === 18){
				this.home = false;
			}
		}
		this.findHome();
	}
	
	this.evaluateRelationshipPartner = function(){
		var bestPartner = [0,0];
		for(var i in houses[this.home].inhabitants){
			//IQ, age, 1*same interest, education, medical state
			var partner = population[i];
			var score = 0;
			
			if(partner.id === this.id || partner.gender === this.gender){
				continue;
			}
			
			if(Math.abs(this.IQ - partner.IQ) < 10){
				score ++;
			}
			if(Math.abs(this.age - partner.age) < 5){
				score ++;
			}
			if(this.education === partner.education){
				score ++;
			}
			if(partner.medicalState > 7){
				score ++;
			}
			for(var i in this.interests){
				for(var j in partner.interests){
					if(this.interests[i] === partner.interests[j]){
						score ++;
					}
				}
			}
			
			if(bestPartner[1] < score){
				bestPartner[0] = partner;
				bestPartner[1] = score;
			}
		}
		console.log(bestPartner[0].id+" "+bestPartner[1]);
		return bestPartner[0];
	}	
	
	this.getRelationship = function(){
		//Add Workplace search
		//Loop through interests
		//Maybe same IQ
	    if (this.age >= 18 && !(this.relationship)) {
                var partner = this.evaluateRelationshipPartner();
                console.log(this.relationshipChance);
                if(Math.random() < this.relationshipChance){
	                if(partner.gender != this.gender && partner.relationship === false && partner.age >= 18){
	                    this.relationship = partner.id;
	                    partner.relationship = this.id;
	                    console.warn(this.id + " & " + partner.id + " are now in a relationship");
	                    return;
	                }
            	}
	        return
		}
		console.log("Not capable for relationship")
	}

	this.getChild = function () {
	    if(this.relationship != false && this.gender === 'Female' && Math.random() < 1) {
	        bornBaby(this.relationship, this.id);
            console.warn('villager ' + this.id + ' procreated')
            this.babyChance /= 2;
	    }
	}
}

function bornBaby(father, mother){
	population[populationCount] = new person();
	population[populationCount].id = populationCount;
	population[populationCount].age = 0;
	population[populationCount].income = 0;
	population[populationCount].job = false;
	population[populationCount].gender = population[populationCount].randomGender();
	population[populationCount].randomInterests();
	population[populationCount].education = 0;
	population[populationCount].medicalState = 10;
	population[populationCount].spendingType = Math.round(Math.random()*2)+1;
	population[populationCount].IQ = population[populationCount].randomIQ();
	population[populationCount].happiness = 100;
	population[populationCount].relationship = false;
	population[populationCount].workplace = 'None';
	population[populationCount].birthMonth = month;
	population[populationCount].home = false;
	population[populationCount].father = father;
	population[populationCount].mother = mother;
	
	if(populationCount < initialPopulation){
		population[populationCount].age = 18;
	}
	
	population[populationCount].findHome();
	
	populationCount ++;
}

for(var i = 0; i < 10; i++){
	bornBaby(0,0);
}