const button=document.querySelector(".btn")
document.addEventListener("keypress", function(event) {
    sound(event.key)
})
function sound(key) {
    switch (key) {
      case "w":
        var s1 = new Audio('http://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg');
        s1.play();
        break;
    
      case "a":
        var s2 = new Audio('http://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a');
        s2.play();
        break;
    
      case "s":
        var s3 = new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/player_shoot.wav');
        s3.play();
        break;
    
      case "d":
        var s4 = new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/descent/background%20music.mp3');
        s4.play();
        break;
    
      case "j":
        var s5 = new Audio('http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/intromusic.ogg');
        s5.play();
        break;
    
      case "k":
        var s6 = new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3');
        s6.play();
        break;
    
      case "l":
        var s7 = new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/bonus.wav');
        s7.play();
        break;
    
      default: console.log(key);
    }
  }
