var houses = [];
var houseCount = 1;

function building(size,price,x,y){
	this.size = size;
	this.price = price;
	this.x = x;
	this.y = y;
	
	this.draw = function(){
		context.clearRect(this.x,this.y,this.size,this.size);
		context.fillRect(this.x,this.y,this.size,this.size);
	}
}

function residence(size,price,x,y,appartements){
	this.type = 'residence';
	this.inhabitants = [];
	this.appartements = appartements;
	
}
residence.prototype = new building();

function office(size,price,x,y,workspaces,company){
	this.type = 'office';
	this.workspaces = workspaces;
	this.company = company;
	this.workers = [];
}
office.prototype = new building();

function shop(sie,price,x,y,workspaces,company,productType,productPrice){
	this.type = 'shop';
	this.workspaces = workspaces;
	this.company = company;
	this.productType = productType;
	this.customers = [];				// per month
	this.productPrice = productPrice;
	this.workers = [];
}
shop.prototype = new building();

function factory(size,price,x,y,workspaces,company,productType,productionRate){
	this.type = 'factory';
	this.workspaces = workspaces;
	this.company = company;
	this.productType = productType;
	this.productionRate = productionRate; 		// per month
	this.customers = [];					// which shops
	this.workers = [];
}
factory.prototype = new building();


function buildResidence(size,price,x,y,appartments){
	houses[houseCount] = new residence();
	houses[houseCount].size = size;
	houses[houseCount].price = price;
	houses[houseCount].x = x;
	houses[houseCount].y = y;
	houses[houseCount].appartments = appartments;
	
	houseCount ++;
}

function buildOffice(size,price,x,y,workspaces,company){
	houses[houseCount] = new office();
	houses[houseCount].size = size;
	houses[houseCount].price = price;
	houses[houseCount].x = x;
	houses[houseCount].y = y;
	houses[houseCount].workspaces = workspaces;
	houses[houseCount].company = company;
	
	houseCount ++;
}

buildResidence(10,20,100,100,50);
buildOffice(20,30,250,200,4,'Evil corp.');

for(var i in houses){
	houses[i].draw();
}
