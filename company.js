var companys = [];
var companyCount = 0;

function Company(id, ceo, hq, type) {
	var that = this;
    this.id = id;
    this.ceo = ceo;
    this.hq =  hq;
    this.type = type;
    this.income = 0;
    this.capital = 20000;
    this.sallary = 0;
    this.monthlyCustomers = 0;

    this.employees = [];
    this.ownedBuildings = [];

/*
    this.payment = function(){
        this.capital += this.income;
        for (var i in this.employees) {
            population[this.employees[i]].money += this.sallary;
        }
    }
*/
	this.getOffice = function(){
		if(freeOffice.length === 0){
			state.construct.office();
			this.getOffice();
		}else{
			var office = freeOffice[0];
			if(this.capital >= houses[office].price){
				removeFreeOffice();
				if(this.ownedBuildings.length === 0){
					this.hq = office;
				}
				this.ownedBuildings.push(office);
				houses[office].company = this.id;
				payment(this,state,houses[office].price);
				return office;
			}else{
				return;
			}
		}
	}
	
	this.getCustomers = function(){
		for(var i in this.ownedBuildings){
			var id = this.ownedBuildings[i];
			if(houses[id].type != 'Office'){
				this.monthlyCustomers += houses[id].customers.length;
			}
		}
	}
}

function Production(id, ceo, hq){
	this.getFactory = function(){
		if(freeFactory.length === 0){
			return;
		}else{
			var factory = freeFactory[0];
			if(this.capital >= houses[factory].price){
				removeFreeFactory();
				this.ownedBuildings.push(factory);
				houses[factory].company = this.id;
				this.capital -= houses[factory].price;
				state.capital += houses[factory].price;
				return factory;
			}
		}
	}
}
Production.prototype = new Company();

function Selling(id, ceo, hq){
	 this.getShop = function(){
		if(freeShop.length === 0){
			return;
		}else{
			var shop = freeShop[0];
			if(this.capital >= houses[shop].price){
				removeFreeShop();
				this.ownedBuildings.push(shop);
				houses[shop].company = this.id;
				this.capital -= houses[shop].price;
				state.capital += houses[shop].price;
				return shop;
			}else{
				return;
			}
		}
	}
}
Selling.prototype = new Company();

function Construction(id, ceo, hq){
	
}
Construction.prototype = new Company();

function foundProductionCompany(ceo){
	companys[companyCount] = new Production();
	companys[companyCount].id = companyCount;
	companys[companyCount].ceo = ceo;
	companys[companyCount].type = 'Production';
	
	companys[companyCount].getOffice()
	
	companyCount ++;
}

function foundSellingCompany(ceo){
	companys[companyCount] = new Selling();
	companys[companyCount].id = companyCount;
	companys[companyCount].ceo = ceo;
	companys[companyCount].type = 'Selling';
	
	companys[companyCount].getOffice()
	
	companyCount ++;
}

function foundConstructionCompany(ceo){
	companys[companyCount] = new Construction();
	companys[companyCount].id = companyCount;
	companys[companyCount].ceo = ceo;
	companys[companyCount].type = 'Construction';
	
	companys[companyCount].getOffice()
	
	companyCount ++;
}


