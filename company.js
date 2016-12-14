var companys = [];
var companyCount = 1;

function Company(id, name, ceo, hq) {
	var that = this;
    this.id = id;
    this.name = name;
    this.ceo = ceo;
    this.hq =  hq;
    this.income = 0;
    this.capital = 20000;
    this.sallary = 0;

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
/*
	this.build = { 
		office: function(){
			buildOffice(20,30,Math.round(Math.random()*500),Math.round(Math.random()*500),4,that.id);
			console.log(that);
		},
		factory: function(){
			buildFactory(20,30,Math.round(Math.random()*500),Math.round(Math.random()*500),4,that.id,'none')
		}
	}
*/
	
	this.getOffice = function(){
		if(freeOffice.length === 0){
			return;
		}else{
			var office = freeOffice[0];
			if(this.capital >= houses[office].price){
				removeFreeOffice();
				this.ownedBuildings.push(office);
				houses[office].company = this.id;
				this.capital -= houses[office].price;
				state.capital += houses[office].price;
				return office;
			}else{
				return;
			}
		}
	}
	
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

function foundCompany(ceo){
	companys[companyCount] = new Company();
	companys[companyCount].id = companyCount;
	companys[companyCount].ceo = ceo;
	companys[companyCount].hq = companys[companyCount].getOffice();
	
	companyCount ++;
}


buildOffice(20,3000,250,200,4,0);
//houses[2].company = companys[1].name;
