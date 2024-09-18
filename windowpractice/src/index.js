const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const widthSize = document.querySelector("#width");

function updateSize() {
    if (widthSize < 500) {
        document.body.style.backgroundColor = colors[0];
    } else if (widthSize > 700) {
        document.body.style.backgroundColor = colors[1];
    } else {
        document.body.style.backgroundColor = colors[2];
    }
}

window.addEventListener("resize", updateSize);
