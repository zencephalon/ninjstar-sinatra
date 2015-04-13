function Ninja(o) {
  this.x = o.x;
  this.y = o.y;
  this.arena = o.arena;
  this.speed = 5;
  this.$ninja = $('<div id="ninja"></div>').appendTo('#arena')
  this.dir = "stopped";
  this.updatePosition();
}

Ninja.prototype.setDir = function(dir) {
  this.dir = dir;
}

Ninja.prototype.move = function() {
  switch (this.dir) {
    case 'up':
      this.y -= this.speed;
      break;
    case 'down':
      this.y += this.speed;
      break;
    case 'left':
      this.x -= this.speed;
      break;
    case 'right':
      this.x += this.speed;
      break;
  }
  this.updatePosition();
}

Ninja.prototype.updatePosition = function() {
   this.$ninja.css('top', this.y + 'px');
  this.$ninja.css('left', this.x + 'px');
}

Ninja.shout = function() {
  return "KIAI";
}