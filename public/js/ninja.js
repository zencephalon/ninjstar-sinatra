function Ninja(o) {
  ['x', 'y', 'speed', 'height', 'width', 'arena'].forEach(function(p) {
    this[p] = o[p];
  }, this);

  this.$ninja = $('<div id="ninja"></div>').appendTo('#arena');

  ['height', 'width'].forEach(function(property) {
    this.$ninja.css(property, this[property] + 'px')
  }, this);

  this.dir = "stopped";
  this.updatePosition();
}

Ninja.prototype.setDir = function(dir) {
  this.dir = dir;
}

Ninja.prototype.displayLocation = function() {
  console.log("My location x:", this.x, "location y:", this.y);
}

Ninja.prototype.isInBounds = function() {
  return this.arena.isInBounds(this);
}

Ninja.prototype.move = function() {
  var old_x = this.x;
  var old_y = this.y;
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
  if (! this.isInBounds()) {
    this.x = old_x;
    this.y = old_y;
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