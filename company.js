var companys = [];
var companyCount = 1;

function Company(id, name, ceo, hq) {
	var that = this;
    this.id = id;
    this.name = name;
    this.ceo = ceo;
    this.hq =  hq;
    this.income = 0;
    this.capital = 0;
    this.sallary = 0;

    this.employees = [];
    this.ownedBuilding = [];

/*
    this.payment = function(){
        this.capital += this.income;
        for (var i in this.employees) {
            population[this.employees[i]].money += this.sallary;
        }
    }
*/
	this.build = { 
		office: function(){
			buildOffice(20,30,Math.round(Math.random()*500),Math.round(Math.random()*500),4,that.name);
			console.log(that);
		},
		factory: function(){
			buildFactory(20,30,Math.round(Math.random()*500),Math.round(Math.random()*500),4,that.name,'none')
		}
	}
	
	this.getOffice = function(){
		if(freeOffice.length === 0){
			return;
		}else{
			var office = freeOffice[0];
			removeFreeOffice();
			return office;
		}
	}
}

function foundCompany(name,ceo){
	companys[companyCount] = new Company();
	companys[companyCount].id = companyCount;
	companys[companyCount].name = name;
	companys[companyCount].ceo = ceo;
	companys[companyCount].hq = companys[companyCount].getOffice();
	
	companyCount ++;
}


buildOffice(20,30,250,200,4,'none');
//houses[2].company = companys[1].name;
