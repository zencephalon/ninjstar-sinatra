function Ninja(x, y) {
  this.x = x;
  this.y = y;
  this.$ninja = $('<div id="ninja"></div>').appendTo('#arena')
  this.updatePosition();
}

Ninja.prototype.move = function() {
  this.x += 5;
  this.updatePosition();
}

Ninja.prototype.updatePosition = function() {
   this.$ninja.css('top', this.y + 'px');
  this.$ninja.css('left', this.x + 'px');
}

Ninja.shout = function() {
  return "KIAI";
}