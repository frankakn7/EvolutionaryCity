var houses = [];
var houseCount = 0;

function building(id, size, price, x, y, workspaces, company, color) {
    this.id = id;
    this.size = size;
    this.price = price;
    this.x = x;
    this.y = y;
    this.company = company;
    this.color = color;
    this.workspaces = workspaces;

    this.draw = function () {
	    context.fillStyle = this.color;
        context.clearRect(this.x, this.y, this.size, this.size);
        context.fillRect(this.x, this.y, this.size, this.size);
    }

    this.free = function () {
        window["free" + this.type].push(this.id);
    }

}

function residence(id, size, price, x, y, appartements,company) {
    this.type = 'Residence';
    this.inhabitants = [];
    this.appartements = appartements;
    this.color = '#008000';				// Greenish

    this.isFree = function () {
        if(this.inhabitants.length >= this.appartements) {
	        for(var i in freeResidence){
		        if(freeResidence[i] === this.id){
		            removeFreeResidence(this.id);
					//console.warn("Removed: "+this.id);
				}
			}
            return false;
        }else{
	        for(var i in freeResidence){
		        if(freeResidence[i] === this.id){
			        return true;
		        }
	        }
	        freeResidence.push(this.id);
	        //console.warn("Added: "+this.id);
        }
    }
}
residence.prototype = new building();

function office(id, size, price, x, y, workspaces, company) {
    this.type = 'Office';
    this.workers = [];
    this.color = '#a6a6a6';		//grayish
}
office.prototype = new building();

function shop(id, size, price, x, y, workspaces, company, productType, maxProducts, productPrice, customerPerWorker) {
    this.type = 'Shop';
    this.productType = productType;
    this.maxProducts = maxProducts;
    this.productNum = 0;
    this.customers = [];				// per month
    this.productPrice = productPrice;
    this.customerPerWorker = customerPerWorker;
    this.workers = [];
    this.color = '#0099ff';			// blueish
}
shop.prototype = new building();

function factory(id, size, price, x, y, workspaces, company, productType, productionPerWorker, productionRate) {
    this.type = 'Factory';
    this.productType = productType;
    this.productionPerWorker = productionPerWorker;
    this.productionRate = productionRate; 		// per month
    this.customers = [];					// which shops
    this.workers = [];
    this.color = '#ff9900';		//sort of orange
}
factory.prototype = new building();

function warehouse(id, size, price, x, y, workspaces, company, storageSpace){
	this.type = 'Warehouse';
	this.storageSpace = storageSpace;
	this.itemsStored = 0;
	this.color = '#563509'; 	// Brownish
}
warehouse.prototype = new building();

// !Build Functions

function buildResidence(size, price, x, y, appartements) {
    houses[houseCount] = new residence();
    houses[houseCount].id = houseCount;
    houses[houseCount].size = size;
    houses[houseCount].price = price;					//of the building itself
    houses[houseCount].x = x;
    houses[houseCount].y = y;
    houses[houseCount].appartements = appartements;

    houses[houseCount].free();

    needUpdate = true;

    houseCount++;
}

function buildOffice(size, price, x, y, workspaces, company) {
    houses[houseCount] = new office();
    houses[houseCount].id = houseCount;
    houses[houseCount].size = size;
    houses[houseCount].price = price;				//of the building itself
    houses[houseCount].x = x;
    houses[houseCount].y = y;
    houses[houseCount].workspaces = workspaces;
    houses[houseCount].company = company;

    houses[houseCount].free();

    needUpdate = true;

    houseCount++;
}

function buildShop(size, price, x, y, workspaces, company, product, productPrice) {
    houses[houseCount] = new shop();
    houses[houseCount].id = housecount;
    houses[houseCount].size = size;
    houses[houseCount].price = price;				//of the building itself
    houses[houseCount].x = x;
    houses[houseCount].y = y;
    houses[houseCount].workspaces = workspaces;
    houses[houseCount].company = company;
    houses[houseCount].productType = product;
    houses[houseCount].maxProducts = 0;
    houses[houseCount].productPrice = productPrice;

    houses[houseCount].free();

    needUpdate = true;

    houseCount++;
}

function buildFactory(size, price, x, y, workspaces, company, product) {
    houses[houseCount] = new factory();
    houses[houseCount].id = houseCount;
    houses[houseCount].size = size;
    houses[houseCount].price = price;								//of the building itself
    houses[houseCount].x = x;
    houses[houseCount].y = y;
    houses[houseCount].workspaces = workspaces;
    houses[houseCount].company = company;
    houses[houseCount].productType = product;
    houses[houseCount].productionRate = 0;

    houses[houseCount].free();

    needUpdate = true;

    houseCount++;
}

function buildWarehouse(size, price, x, y, workspaces, company, storageSpace) {
    houses[houseCount] = new warehouse();
    houses[houseCount].id = houseCount;
    houses[houseCount].size = size;
    houses[houseCount].price = price;								//of the building itself
    houses[houseCount].x = x;
    houses[houseCount].y = y;
    houses[houseCount].workspaces = workspaces;
    houses[houseCount].company = company;
    houses[houseCount].storageSpace = storageSpace;
    houses[houseCount].productionRate = 0;

    houses[houseCount].free();

    needUpdate = true;

    houseCount++;
}