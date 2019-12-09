var jpgcontainer = document.getElementById('jpg');
var files = {
  'jpg': 32
};

for (var jpgext in files) {
  for (var i = 0; i < files[jpgext]; i++) {
    var jpgsrc = "images/jpg/" + (i + 1) + "." + jpgext;
    var jpgimg = new Image();
    jpgimg.src = jpgsrc;
    jpgcontainer.appendChild(jpgimg);
  }
}

setTimeout(function(){
  $( "img" ).each(function(index, val){
    $(this).css( "left", (index + 1) * numberRandomizer() + 'px');
    $(this).css( "top", (index + 1) * numberRandomizer() + 'px');
  });
}, 100);

var container = document.querySelector("#jamf-container");
var mover = document.querySelector("#jamf-mover");

container.addEventListener("mousemove", function(e) {
  mover.style.backgroundPositionX = -e.offsetX + "px";
  mover.style.backgroundPositionY = -e.offsetY + "px";
});

container.addEventListener("mouseenter", function() {

  setTimeout(function() {
    mover.classList.add("no-more-slide");
    // container.removeEventListener("mouseenter");
  }, 250);

});

var timeout;
$('#jamf-container').mousemove(function(e){
  if(timeout) clearTimeout(timeout);
  setTimeout(callParallax.bind(null, e), 0);

});

allSlideElements = document.querySelectorAll('img');
allSlideElementsValues = []

for(var i = 0; i < allSlideElements.length; i++){
  allSlideElementsValues.push(getRandomArbitrary(1000, 5000) + 1000);
}

function callParallax(e){
  // console.log("hi");
  for(var i = 0; i < allSlideElements.length; i++){
    parallaxIt(e, allSlideElements[i], -allSlideElementsValues[i]);
  }
}

function parallaxIt(e, target, movement){
  var $this = $('#jamf-container');
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width()/2) / $this.width() * movement,
    y: (relY - $this.height()/2) / $this.height() * movement,
    ease: Power2.easeOut
  })
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function numberRandomizer(){
  var x = Math.floor((Math.random() * 100 ) + 1);
  return x;
}
