// Update
function updatCanvas() {
    context.clearRect(0, 0, 500, 500);
    for (var i in houses) {
        houses[i].draw();
    }
    needUpdate = false;

}

function update() {
    if (needUpdate === true)
        updatCanvas();

}

setInterval(update, 1000 / 25);