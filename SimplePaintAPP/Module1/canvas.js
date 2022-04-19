// declaring local variables for canvas, canvas context and clear button
const canvas = document.querySelector("canvas");

const c = canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;


// variables to point at starting and ending indices of imaginary rectangle, inside which triangle will be drawn
let beginX = 0;
let beginY = 0;
let finishX = 0;
let finishY = 0;


// mousedown event mimicks to drag start event and stores x, y cords to start the imaginary rectangle
canvas.addEventListener("mousedown", e => {
    let cX = canvas.getBoundingClientRect().left + window.scrollX;
    let cY = canvas.getBoundingClientRect().top + window.scrollY;
    beginX = e.pageX - cX;
    beginY = e.pageY - cY;
});


// mouseup event mimicks to drag end event and stores x, y cords to end the imaginary rectangle
canvas.addEventListener("mouseup", e => {
    let cX = canvas.getBoundingClientRect().left + window.scrollX;
    let cY = canvas.getBoundingClientRect().top + window.scrollY;
    finishX = e.pageX - cX;
    finishY = e.pageY - cY;

    if (beginX !== finishX) {
        if (beginY > finishY) {
            let tempX = beginX;
            let tempY = beginY;
            beginX = finishX;
            beginY = finishY;
            finishX = tempX;
            finishY = tempY;
        }
        drawRectangle();
    }

});

canvas.addEventListener("dblclick",(e)=>{
    dimension.clearRect(canvas.left, canvas.top, canvas.width, canvas.height);
})

// draws triangle with given x, y cords and random color
function drawRectangle() {
    c.beginPath();
    c.fillStyle = randomColor(); // method to get random color
    c.strokeStyle = "black";
    c.lineWidth = 1;
    c.moveTo(beginX + (finishX - beginX) / 2, beginY);
    c.lineTo(beginX, finishY);
    c.lineTo(finishX, finishY);
    c.lineTo(beginX + (finishX - beginX) / 2, beginY);
    c.stroke();
    c.fill();
    c.closePath();
    
}


// function returns random colors
function randomColor() {
    let colors = [
        "royalblue",
        "yellow",
        "pink",
        "orange",
        "gray",
        "white",
        "red",
        "green",
        "brown",
        "black"
    ];
    
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
 
    
}

