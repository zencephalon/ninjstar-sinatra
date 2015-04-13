$(document).ready(function() {
  var arena = new Arena(600, 600);
  var ninja = new Ninja({x: 100, y: 100, speed: 5, height: 17, width: 17, arena: arena});

  ['right', 'left', 'up', 'down'].forEach(function(dir) {
    Mousetrap.bind(dir, function() {
      ninja.setDir(dir);
    })
  });

  setInterval(function() {
    ninja.move();
  }, 20) // 1000 ms / 50 FPS = 20 ms / frame
})