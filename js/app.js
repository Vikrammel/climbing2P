//todo add a ledge object and necessary functions
//also figure out how we will randomize ledge placement

//todo change player x,y to fit our game
//and change initial sprite
var Player = function() {
    this.xValue = [-2, 402];
    this.yValue = [-20, 380];
    this.sprite = 'images/char-boy.png';
    this.reset();
};

//todo complete checkCollisions so that it is called repeatedly
//each time a new animation frame is drawn
Player.prototype.update = function() {
    checkCollisions(this);
};

//this function is called repeatedly to animate the player character
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//todo determine what happens to player when game restarts
Player.prototype.reset = function() {
    this.x = 200;
    this.y = 380;
};

//todo handle input and change sprite when certain key is pressed
Player.prototype.handleInput = function(key) {
    if (key === 'left') {
        this.x -= (this.x - 101 < this.xValue[0]) ? 0 : 101;
    } else if (key === 'right') {
        this.x += (this.x + 101 > this.xValue[1]) ? 0 : 101;
    } else if (key === 'up') {
        this.y -= (this.y - 80 < this.yValue[0]) ? 0 : 80;
    } else if (key === 'down') {
        this.y += (this.y + 80 > this.yValue[1]) ? 0 : 80;
    }
};

//todo rewrite function to check if player has hit a ledge or not
function checkCollisions(Player){
    if (Player.y === -20) {
        // if player is on water, reset
        Player.reset();
    } else if (Player.y >= 60 && Player.y <= 220) {
        var self = Player;
        // if the player is on a road, loop through
        //  each bug and check if a bug is touching the player
        allEnemies.forEach(function(enemy) {   
            if (enemy.y === self.y) {
                if (enemy.x >= player.x - 60 && enemy.x <= player.x + 60) {
                    self.reset();
                }
            }
        });
    }
};

//todo change keys
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});

var player = new Player();
