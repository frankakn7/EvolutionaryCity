var companys = [];
var companyCount = 0;

function Company(id, ceo, hq, type, employees, ownedBuildings) {
	var that = this;
    this.id = id;
    this.ceo = ceo;
    this.hq =  hq;
    this.type = type;

    this.income = 0;
    this.capital = 20000;
    this.sallary = 0;
    this.monthlyCustomers = 0;

    this.employees = employees;
    this.ownedBuildings = ownedBuildings;


/*
    this.payment = function(){
        this.capital += this.income;
        for (var i in this.employees) {
            population[this.employees[i]].money += this.sallary;
        }
    }
*/
	this.getOffice = function(){
		if(free.Office.length === 0){
			state.construct.office();
			this.getOffice();
			return;
		}else{
			var office = free.Office[0];
			if(this.capital >= houses[office].price){
				free.removeBuilding('Office');
				if(this.hq === undefined){
					this.hq = office;
				}
				this.ownedBuildings.push(office);
				houses[office].company = this.id;
				payment(this,state,houses[office].price);
				return;
			}
		}
	}
	
	this.getBuilding = function(type){
		if(window["free" + type].length === 0){
			return;
		}else{
			var building = free[type][0]
			if(this.capital >= houses[building].price){
				window["removeFree" + type]();
				this.ownedBuildings.push(building);
				houses[building].company = this.id;
				return building;
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

//!Constructors

function Production(id, ceo, hq, type){
    this.employees = [];
    this.ownedBuildings = [];
	
/*
	this.getFactory = function(){
		if(freeFactory.length === 0){
			return;
		}else{
			var factory = freeFactory[0];
			if(this.capital >= houses[factory].price){
				removeFreeFactory();
				this.ownedBuildings.push(factory);
				houses[factory].company = this.id;
				//payment(this,state,houses[factory].price);
				return factory;
			}
		}
	}
*/
}
Production.prototype = new Company();

function Selling(id, ceo, hq, type){	
	this.employees = [];
    this.ownedBuildings = [];
	
/*
	this.getShop = function(){
		if(freeShop.length === 0){
			return;
		}else{
			var shop = freeShop[0];
			if(this.capital >= houses[shop].price){
				removeFreeShop();
				this.ownedBuildings.push(shop);
				houses[shop].company = this.id;
				//payment(this,state,houses[shop].price);
				return shop;
			}else{
				return;
			}
		}
	}
*/
}
Selling.prototype = new Company();

function Construction(id, ceo, hq, type){    
    this.employees = [];
    this.ownedBuildings = [];
    
/*
    this.getWarehouse = function(){
	    if(freeWarehouse.length === 0){
		    return;
	    }else{
		    var warehouse = freeWarehouse[0];
		    if(this.capital >= houses[shop].price){
			    removeFreeWarehouse();
			    this.ownedBuildings.push(warehouse);
			    houses[warehouse].company = this.id;
			    //payment(this,state,houses[warehouse].price);
			    return warehouse;
		    }else{
			    return;
		    }
	    }
    }
*/
}
Construction.prototype = new Company();

//! Found Functions

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


