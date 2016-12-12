var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var needUpdate = true;

var freeOffice = [1,2];

function removeFreeOffice(){
	freeOffice.splice(0,1);
}