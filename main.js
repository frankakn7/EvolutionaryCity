/* To DO:
	-Economy
		-Money system
	-Person
		-Automatic Relationships
		-Automatic reproduction
		-Death
		-Health (Small Deseases)
		-Criminality
		-Happyness
		-Social System
		-Spending Type
		-Shopping
		-? Family Disputes
		- Rich / Poor
	-Building's
		-Appartements
		-Houses (Single Family)
	-Companys
		-company types (Construction, Production, Selling) (Only one type)
			-Entertainment System (Cinema, Theaters)
		-Mother Company (can own companys of different types)
			-Subsidiary company's (Tochterfirma) 
		-Buy Factory's / Shops
		-Demand Construction of Building
		-Workplaces
		-Build Houses
		-Pay Workers
		-Logistics
		-Import / Export
	-State
		-taxes
		-Roads
			-Upgrade Roads
		-Schools/education
		-Health Care (Hospital)
		-Emergency System (Police,Fire Department, Ambulance)
		-? pension
	-Catastrophe's 
		-Tornados
		-Epidemics
	-Other City's
		-Communication
		-Airports
		-Trading
		-? War
		
	<-----------------VISUAL------------->
		-Pictures (Houses ...)
		-Movement of Canvas
*/

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var needUpdate = true;

var freeOffice = [];
var freeShop = [];
var freeFactory = [];

var freeResidence = [];

var month = 1;
var year = 1;

function removeFreeOffice(){
	freeOffice.splice(0, 1);
}

function removeFreeShop() {
    freeShop.splice(0, 1);
}

function removeFreeFactory() {
    freeFactory.splice(0, 1);
}

function removeFreeResidence(id) {
	var index = freeResidence.indexOf(id);
	freeResidence.splice(index, 1);
}