var houses = [];
var houseCount = 1;

function building(type,size,price,x,y){
	this.type = type;
	this.size = size;
	this.price = price;				// per m^2
	this.x = x;
	this.y = y;
}

function residence(size,price,x,y,maxInhabitants,appartments){
	var self = building();
	self.type = 'residence';
	self.size = size;
	self.price = price;
	self.x = x;
	self.y = y;
	
	self.inhabitants = [];
	self.appartements = appartements;
	
}

function office(size,price,x,y,workspaces,company){
	var self = building();
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
	var self = building();
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
	var self = building();
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