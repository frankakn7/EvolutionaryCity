var companys = [];
var companyCount = 1;

function Company(id, name, ceo, hq) {
    this.id = id;
    this.name = name;
    this.ceo = ceo;
    this.hq =  hq;
    this.income = 0;
    this.capital = 0;
    this.sallary = 0;

    this.employees = [];

    this.payment = function(){
        this.capital += this.income;
        for (var i in this.employees) {
            population[this.employees[i]].money += this.sallary;
        }
    }
}

function foundCompany(name,ceo,hq){
	companys[companyCount] = new Company();
	companys[companyCount].id = companyCount;
	companys[companyCount].name = name;
	companys[companyCount].ceo = ceo;
	companys[companyCount].hq = hq;
	
	companyCount ++;
}
foundCompany('Evil corp.',population[1].id,houses[2].id);
