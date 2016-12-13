// Update
function updatCanvas() {
    context.clearRect(0, 0, 500, 500);
    for (var i in houses) {
        houses[i].draw();
    }
    needUpdate = false;

}

function newMonth() {

}

function update() {
    if (needUpdate === true)
        updatCanvas();

}

setInterval(newMonth, 1000 / 25);
setInterval(update, 1000 / 25);