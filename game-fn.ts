const board = [
	["A", "B", "C"],
	["D", "E", "F"],
	["G", "H", "I"],
];

const moves = [];
// Start at A (0,0) -> [row][col]
let row = 0;
let col = 0;
moves.push(board[row][col]); // A

// Define movement functions
function moveRight() {
	col++;
	moves.push(board[row][col]); 
}

function moveLeft() {
	col--;
	moves.push(board[row][col]); 
}
function moveUp() {
	row--;
	moves.push(board[row][col]); 
}

function moveDown() {
	row++;
	moves.push(board[row][col]); 
}

// Call the movement functions
moveRight(); // Move from A to B
moveRight(); // Move from B to C
moveDown(); // Move from C to F
moveLeft(); // Move from F to E
console.log("Path:", moves.join(" → "));
console.log("Total Moves (Start from 'A'):", moves.length - 1);

///////////////////////////////////////////////
//  function ที่ใช้ if-else
const theBoard = [
	["A", "B", "C"],
	["D", "E", "F"],
	["G", "H", "I"],
];
// console.log(theBoard.length);//row length
// console.log(theBoard[0].length);//col length
const rowLength = theBoard.length;
const colLength = theBoard[0].length;
const move: string[] = [];
// Start at A (0,0) -> [row][col]
let Row = 0;
let Col = 0;
move.push(theBoard[Row][Col]); // A
// Define movement functions
function move_Right() {
	if (Col < colLength) {
		Col++;
		move.push(theBoard[Row][Col]);
	} else {	
		console.log("Invalid move");
	}
}
function move_Left() {
	if (Col > 0) 
		Col--;
		move.push(theBoard[Row][Col]);
}
function move_Up() {
	if (Row > 0) 
	Row--;
	move.push(theBoard[Row][Col]);
}
function move_Down() {
	if (Row < rowLength) 
	Row++;
	move.push(theBoard[Row][Col]);
}
// Call the movement functions
move_Right(); // Move from A to B
move_Right(); // Move from B to C
move_Down(); // Move from C to F
move_Left(); // Move from F to E
console.log("Path:", move.join(" → "));
console.log("Total Moves (Start from 'A'):", move.length - 1);


