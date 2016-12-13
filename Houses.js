var houses = [];
var houseCount = 1;

function building(id,size,price,x,y){
	this.id = id;
	this.size = size;
	this.price = price;
	this.x = x;
	this.y = y;
	
	this.draw = function(){
		context.clearRect(this.x,this.y,this.size,this.size);
		context.fillRect(this.x,this.y,this.size,this.size);
	}
	
	this.free = function(){
		window["free"+this.type].push(this.id);
	}
	
}

function residence(id,size,price,x,y,appartements){
	this.type = 'Residence';
	this.inhabitants = [];
	this.appartements = appartements;
	
}
residence.prototype = new building();

function office(id,size,price,x,y,workspaces,company){
	this.type = 'Office';
	this.workspaces = workspaces;
	this.company = company;
	this.workers = [];
}
office.prototype = new building();

function shop(id,size,price,x,y,workspaces,company,productType,productPrice){
	this.type = 'Shop';
	this.workspaces = workspaces;
	this.company = company;
	this.productType = productType;
	this.customers = [];				// per month
	this.productPrice = productPrice;
	this.workers = [];
}
shop.prototype = new building();

function factory(id,size,price,x,y,workspaces,company,productType,productionRate){
	this.type = 'Factory';
	this.workspaces = workspaces;
	this.company = company;
	this.productType = productType;
	this.productionRate = productionRate; 		// per month
	this.customers = [];					// which shops
	this.workers = [];
}
factory.prototype = new building();

// !Build Functions

function buildResidence(size,price,x,y,appartments){
	houses[houseCount] = new residence();
	houses[houseCount].id = houseCount;
	houses[houseCount].size = size;
	houses[houseCount].price = price;
	houses[houseCount].x = x;
	houses[houseCount].y = y;
	houses[houseCount].appartments = appartments;
	
	
	needUpdate = true;
	
	houseCount ++;
}

function buildOffice(size,price,x,y,workspaces,company){
	houses[houseCount] = new office();
	houses[houseCount].id = houseCount;
	houses[houseCount].size = size;
	houses[houseCount].price = price;
	houses[houseCount].x = x;
	houses[houseCount].y = y;
	houses[houseCount].workspaces = workspaces;
	houses[houseCount].company = company;
	
	houses[houseCount].free();
	
	needUpdate = true;
	
	houseCount ++;
}

function buildShop(size,price,x,y,workspaces,company,product,productPrice){
	houses[houseCount] = new shop();
	houses[houseCount].id = housecount;
	houses[houseCount].size = size;
	houses[houseCount].price = price;
	houses[houseCount].x = x;
	houses[houseCount].y = y;
	houses[houseCount].workspaces = workspaces;
	houses[houseCount].company = company;
	houses[houseCount].productType = product;
	houses[houseCount].productPrice = productPrice;
	
	houses[houseCount].free();
	
	needUpdate = true;
	
	houseCount ++;
}

function buildFactory(size,price,x,y,workspaces,company,product){
	houses[houseCount] = new factory();
	houses[houseCount].id = houseCount;
	houses[houseCount].size = size;
	houses[houseCount].price = price;								//Production cost
	houses[houseCount].x = x;
	houses[houseCount].y = y;
	houses[houseCount].workspaces = workspaces;
	houses[houseCount].company = company;
	houses[houseCount].productType = product;
	houses[houseCount].productionRate = 0;
	
	houses[houseCount].free();
	
	needUpdate = true;
	
	houseCount ++;
}

buildResidence(10,20,100,100,50);
buildFactory(10,20,340,340,50,0,'none');