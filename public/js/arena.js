function Arena(width, height) {
  this.width = width;
  this.height = height;
  this.$ele = $('<div id="arena"></div>').appendTo($('body'));
  this.$ele.css('height', this.height);
  this.$ele.css('width', this.width);
}