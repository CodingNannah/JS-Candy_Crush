const candies = ["Blue", "Orange", "Green", "Yellow", "Red", "Purple", "Choco"];

// empty 2D array:
const board = [];
const rows = 9;
const columns = 9;

let score = 0;

let currTile;
let otherTile;

window.onload = function() {
    startGame();
   
}

function randomCandy() {
    return candies[Math.floor(Math.random() * candies.length)]; 
}

function startGame() {
    // generate board w random candies on it
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            // <img id="0-0" src="./images/Red.png">
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = "./images/" + randomCandy() + ".png";

             // DRAG FUNCTIONALITY
             // click on a candy & initialize drag process
             tile.addEventListener("dragstart", dragStart); 
             // moving mouse to drag the candy
             tile.addEventListener("dragover", dragOver);  
             // dragging the candy onto another spot (another candy)
             tile.addEventListener("dragenter", dragEnter);
             // leaving the candy on the other candy 
             tile.addEventListener("dragleave", dragLeave); 
             // dropping the candy on the other candy
             tile.addEventListener("dragdrop", dragDrop); 
             // swap the candies
             tile.addEventListener("dragend", dragEnd); 

            // faster more efficient way to create a board (in js rather than html)
            document.getElementById("board").append(tile);
            row.push(tile);
        }
        board.push(row);
    }
    console.log(board);
}

function dragStart() {
    // the tile clicked on to drag
    currTile = this;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    // this is the target tile (dropped on)
    otherTile = this;
}