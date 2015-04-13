function Arena(width, height) {
  this.width = width;
  this.height = height;
  this.$ele = $('<div id="arena"></div>').appendTo($('body'));
  this.$ele.css('height', this.height);
  this.$ele.css('width', this.width);
}

Arena.prototype.isInBounds = function(sprite) {
  return !(sprite.x < 0 || sprite.x + sprite.width > this.width ||
           sprite.y < 0 || sprite.y + sprite.height > this.height)

}