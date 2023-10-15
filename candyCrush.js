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


// NOTE: dragStart(), dragDrop() & dragEnd() are the most important visual functions; other drag functions are not much more than placeholders  

function dragStart() {
    // "this" is the tile clicked on to drag
    currTile = this;
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave(e) {
    e.preventDefault();
}

function dragDrop() {
    // "this" is the target tile (dropped on)
    otherTile = this;
}

function dragEnd() {
    // not swapping tags; are swapping image sources
    // check for coordinates of current & other
    let currCoords = currTile.id.split("-"); //id="0-0" --> ["0", "0"]
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);


    
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;

    // if (currTile.src.includes("blank") || otherTile.src.includes("blank")) {
    //     return;
    // }

    

    

    // DIRECTIONAL FUNCTIONALITY

    // let moveLeft = c2 == c-1 && r == r2;
    // let moveRight = c2 == c+1 && r == r2;

    // let moveUp = r2 == r-1 && c == c2;
    // let moveDown = r2 == r+1 && c == c2;
}