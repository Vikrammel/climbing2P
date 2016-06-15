var GameBoard = function(){
    var row, ledgeRow;
    var self = this;
    self.score = 0;
    this.correct = false;
    self.background = 0;
    self.player = new Player();
    self.block = 'images/stone-block.png';
    self.ledgeSprite = 'images/Rock.png'; //place holder ledge image

    self.yValues = [-20, 60, 140, 220, 300, 380,460];
    self.xValues = [0,100,200]; //place holders
    self.gameArrayLength = this.yValues.length - 1;
    //create an array of 6 elements
    self.gameRows = new Array(this.gameArrayLength);
    //set each array element to a LedgeRow
    for(row = 0; row <= this.gameArrayLength; row++){
        ledgeRow = new LedgeRow();
        self.gameRows[row] = ledgeRow.ledgeArray;
    }
};

//moves the player based on key pressed
 function handleInput(key) {
    //todo make this function change player sprite based on keypress
    //and move next row of ledges down if player has hit correct key
    if (key === 0 && game.gameRows[5][0] === 1) {
        game.correct = true;
        console.log('working');
    } else if (key === 1 && game.gameRows[5][1] === 1) {
        game.correct = true;
        console.log('working');
    } else if (key === 2 && game.gameRows[5][2] === 1){
        game.correct = true;
        console.log('working');
    } else {
        console.log('wrong');
    }
};

GameBoard.prototype.update = function(){
    var n = 0;
    if(this.correct = true){
        for(n; n <= this.gameArrayLength; n++){
            this.gameRows[n+1] = this.gameRows[n];
        }
        this.gameRows[0] = new LedgeRow();
    }
    this.correct = false;
};

// Draw the game board on the screen, required method for game
GameBoard.prototype.render = function() {
    var row = 0;
    var col;
    while(row < 3){
        for(col = 0; col <= this.gameArrayLength; col++){
            ctx.drawImage(Resources.get(this.block), this.xValues[row], this.yValues[col]);
        }
        if(this.gameRows[this.gameArrayLength])
        row++;
    }
    
};

var LedgeRow = function(){
    this.ledgeArray = this.generateX();
    //todo determine values of x that will center each row of blocks to canvas
    //even when canvas is resized 
    this.xValues = [0,100,200]; //place holders
};

LedgeRow.prototype.generateX = function(){
    var xArray = [0,0,0];
    xArray[this.getRandX()] = 1;

    return xArray;
};


//helper function to get a random place in row to put ledge
LedgeRow.prototype.getRandX = function() {
    return Math.floor(Math.random() * 3);
};

//defines the attributes of the player object
var Player = function() {
    //todo find x values that center player on screen regardless of canvas size
    this.xValue = 100; //place holders
    this.yValue = 460; //place holders
    this.currentSprite = 0;
    //three place holder sprites one for default, two for left or right grab
    this.sprite = ['images/char-boy.png','image/char-pink-girl.png','images/char-princess.png'];
    this.reset();
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite[this.currentSprite]), this.xValue, this.yValue);
};

Player.prototype.reset = function() {
    this.currentSprite = 0;
};

// This listens for key presses and sends the keys to your
//  Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        81: 0,
        87: 1,
        69: 2
    };
    handleInput(allowedKeys[e.keyCode]);
});
var game = new GameBoard();
var player = new Player();
