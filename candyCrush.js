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

     //1/10th of a second
     window.setInterval(function(){
        crushCandy();
        // slideCandy();
        // generateCandy();
    }, 100);
   
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
             tile.addEventListener("drop", dragDrop); 
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

function dragLeave() {
    
}

function dragDrop() {
    // "this" is the target tile (dropped on)
    otherTile = this;
}

function dragEnd() {
    if (currTile.src.includes("blank") || otherTile.src.includes("blank")) {
        return;
    }

    // not swapping tags; are swapping image sources
    // COORDINATES CHECK: current & other
    let currCoords = currTile.id.split("-"); //id="0-0" --> ["0", "0"]
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);

    // ADJACENCY CHECK
    let moveLeft = c2 == c-1 && r == r2;
    let moveRight = c2 == c+1 && r == r2;

    let moveUp = r2 == r-1 && c == c2;
    let moveDown = r2 == r+1 && c == c2;

    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

    if (isAdjacent) {
        let currImg = currTile.src;
        let otherImg = otherTile.src;
        currTile.src = otherImg;
        otherTile.src = currImg;

        // let validMove = checkValid();
        // if (!validMove) {
        //     let currImg = currTile.src;
        //     let otherImg = otherTile.src;
        //     currTile.src = otherImg;
        //     otherTile.src = currImg;  
        // }
    }
    
}

function crushCandy() {
    // crushThree
    crushThree();
    document.getElementById("score").innerText = score;
}

function crushCandy() {
    // crushFour
    crushFour();
    document.getElementById("score").innerText = score;
}

function crushCandy() {
    // crushFive
    crushFive();
    document.getElementById("score").innerText = score;
}

function crushThree() {
    // check rows
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns-2; c++) {
            let candy1 = board[r][c];
            let candy2 = board[r][c+1];
            let candy3 = board[r][c+2];
            // check if img src same 
            if (candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("blank")) {
                candy1.src = "./images/blank.png";
                candy2.src = "./images/blank.png";
                candy3.src = "./images/blank.png";
                score += 30;
            }
        }
    }

    // check columns
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows-2; r++) {
            let candy1 = board[r][c];
            let candy2 = board[r+1][c];
            let candy3 = board[r+2][c];
            if (candy1.src == candy2.src && candy2.src == candy3.src && !candy1.src.includes("blank")) {
                candy1.src = "./images/blank.png";
                candy2.src = "./images/blank.png";
                candy3.src = "./images/blank.png";
                score += 30;
            }
        }
    }
}

function crushFour() {
    // check rows
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns-3; c++) {
            let candy1 = board[r][c];
            let candy2 = board[r][c+1];
            let candy3 = board[r][c+2];
            let candy4 = board[r][c+3];
            if (candy1.src == candy2.src && candy2.src == candy3.src && candy3.src == candy4.src && !candy1.src.includes("blank")) {
                candy1.src = "./images/blank.png";
                candy2.src = "./images/blank.png";
                candy3.src = "./images/blank.png";
                candy4.src = "./images/blank.png";
                score += 50;
            }
        }
    }

    //check columns
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows-3; r++) {
            let candy1 = board[r][c];
            let candy2 = board[r+1][c];
            let candy3 = board[r+2][c];
            let candy4 = board[r+3][c];
            if (candy1.src == candy2.src && candy2.src == candy3.src && candy3.src == candy4.src && !candy1.src.includes("blank")) {
                candy1.src = "./images/blank.png";
                candy2.src = "./images/blank.png";
                candy3.src = "./images/blank.png";
                candy4.src = "./images/blank.png";
                score += 50;
            }
        }
    }
}

function crushFive() {
    // check rows
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns-4; c++) {
            let candy1 = board[r][c];
            let candy2 = board[r][c+1];
            let candy3 = board[r][c+2];
            let candy4 = board[r][c+3];
            let candy5 = board[r][c+4];
            if (candy1.src == candy2.src && candy2.src == candy3.src && candy3.src == candy4.src && candy4.src == candy5.src && !candy1.src.includes("blank")) {
                candy1.src = "./images/blank.png";
                candy2.src = "./images/blank.png";
                candy3.src = "./images/blank.png";
                candy4.src = "./images/blank.png";
                candy5.src = "./images/blank.png";
                score += 75;
            }
        }
    }

    //check columns
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows-4; r++) {
            let candy1 = board[r][c];
            let candy2 = board[r+1][c];
            let candy3 = board[r+2][c];
            let candy4 = board[r+3][c];
            let candy5 = board[r+4][c];
            if (candy1.src == candy2.src && candy2.src == candy3.src && candy3.src == candy4.src && candy4.src == candy5.src && !candy1.src.includes("blank")) {
                candy1.src = "./images/blank.png";
                candy2.src = "./images/blank.png";
                candy3.src = "./images/blank.png";
                candy4.src = "./images/blank.png";
                candy5.src = "./images/blank.png";
                score += 75;
            }
        }
    }
}