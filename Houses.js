var houses = [];
var houseCount = 1;

function building(type,size,price,x,y){
	this.type = type;
	this.size = size;
	this.price = price;				// per m^2
	this.x = x;
	this.y = y;
}

function residence(size,price,x,y,maxInhabitants,appartements){
	var self = new building();
	self.type = 'residence';
	self.size = size;
	self.price = price;
	self.x = x;
	self.y = y;
	
	self.inhabitants = [];
	self.appartements = appartements;
	
}

function office(size,price,x,y,workspaces,company){
	var self = new building();
	self.type = 'office';
	self.size = size;
	self.price = price;
	self.x = x;
	self.y = y;
	
	self.workspaces = workspaces;
	self.company = company;
	self.workers = [];
}

function shop(sie,price,x,y,workspaces,company,productType,productPrice){
	var self = new building();
	self.type = 'shop';
	self.size = size;
	self.price = price;
	self.x = x;
	self.y = y;
	
	self.workspaces = workspaces;
	self.company = company;
	self.productType = productType;
	self.customers = [];				// per month
	self.productPrice = productPrice;
	self.workers = [];
}

function factory(size,price,x,y,workspaces,company,productType,productionRate){
	var self = new building();
	self.type = 'factory';
	slef.size = size;
	self.price = price;
	self.x = x;
	self.y = y;
	
	self.workspaces = workspaces;
	self.company = company;
	self.productType = productType;
	self.productionRate = productionRate; 		// per month
	self.customers = [];					// which shops
	self.workers = [];
}

function buildResidence(size,price,x,y,appartments){
	houses[houseCount] = new residence();
	houses[houseCount].size = size;
	houses[houseCount].price = price;
	houses[houseCount].x = x;
	houses[houseCount].y = y;
	houses[houseCount].appartments = appartments;
	
	houseCount ++;
}

buildResidence(500,20,100,100,50);