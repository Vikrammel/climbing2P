//todo generate a 2D array where each row has one ledge
var GameTable = function(){
    this.score = 0;
};

//moves the player based on key pressed
GameTable.prototype.handleInput = function(key) {
    //todo make this function change player sprite based on keypress
    //and move next row of ledges down if player has hit correct key
    if (key === 0) {

    } else if (key === 1) {

    } else {

    } 
};

GameTable.prototype.update = function(){

};

// Draw the game board on the screen, required method for game
GameTable.prototype.render = function() {
    var row, col;
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    for(row = 0; row <=)
};

var Ledge = function(){
    //todo determine values of x that will center each row of blocks to canvas
    //even when canvas is resized 
    this.xValues = [0,400,800]; //place holders
    this.yValues = [60, 140, 220, 300, 380]; //place holders
    this.sprite = 'images/Rock.png';
};

//not sure if this is necessary, but this function should return an array of x values
//that maintain proportionality when canvas is resized
Ledge.prototype.generateX = function(){
    var xArray = [];


    return xArray;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Ledge.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    var maxX = this.xValues[1];
    this.x += this.speed * dt;
    //resets enemy when it has travelled offscreen
    if (this.x > maxX) {
        this.reset();
    }
};

//helper function to get a random place in row to put ledge
Ledge.prototype.getRandX = function() {
    return this.xValues[Math.floor(Math.random() * this.xValues.length)];
};


//defines the attributes of the player object
var Player = function() {
    //todo find x values that center player on screen
    this.xValue = [-2, 402]; //place holders
    this.yValue = [-20, 380]; //place holders
    //three placeholder sprites one for default, two for left or right grab
    this.sprite = ['images/char-boy.png','image/char-pink-girl.png','images/char-princess.png'];
    this.reset();
};


Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//resets player's x,y to starting position
Player.prototype.reset = function() {
    //todo determine where to put player
    this.x = 200;
    this.y = 380;
};

//todo check if player has hit key corresponding to which row element contains ledge
function checkLedge(Player){

};


// This listens for key presses and sends the keys to your
//  Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        81: 0,
        87: 1,
        69: 2
    };
    game.handleInput(allowedKeys[e.keyCode]);
});
var game = new Game();
var player = new Player();
