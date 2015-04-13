$(document).ready(function() {
  var ninja = new Ninja(100, 100);

  ['right', 'left', 'up', 'down'].forEach(function(dir) {
    Mousetrap.bind(dir, function() {
      ninja.setDir(dir);
    })
  });

  setInterval(function() {
    ninja.move();
  }, 20) // 1000 ms / 50 FPS = 20 ms / frame
})