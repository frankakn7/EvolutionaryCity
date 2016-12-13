var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var needUpdate = true;

var freeOffice = [1, 2];
var freeShop = [];
var freeFactory = [];

function removeFreeOffice(){
	freeOffice.splice(0,1);
}

function removeFreeShop() {
    freeShop.splice(0, 1);
}

function removeFreeFactory() {
    freeFactory.splice(0, 1);
}