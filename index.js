var jpgcontainer = document.getElementById('jpg');
var files = {
  'jpg': 220
};

for (var jpgext in files) {
  for (var i = 0; i < files[jpgext]; i++) {
    var jpgsrc = "Images/jpg/" + (i + 1) + "." + jpgext;
    var jpgimg = new Image();
    // var jpgstyletop =  Math.floor(Math.random() * 500) + 1; + 'px'
    jpgimg.src = jpgsrc;
    jpgcontainer.appendChild(jpgimg);
  }
}

setTimeout(function(){
  $( "img" ).each(function(index, val){
    // $(this).css('left', '50px');
    $(this).css( "left", (index + 1) * numberRandomizer() + 'px');
    $(this).css( "top", (index + 1) * numberRandomizer() + 'px');
  });
}, 100);


// function numberRandomizer(){
//   var x = Math.floor((Math.random() * 450) + 1);
//   return x;
// }
// $( ".img" ).each(
// $(this).css( "left", function(index) {
//   return index * numberRandomizer() ;
// })
// );

// $( ".img" ).css( "top", function(index) {
//   return index * numberRandomizer() ;
// });

// document.querySelectorAll("#img").style.top = getRandomArbitrary(1, 500) + "px";
var mouse_left;
var mouse_top;

$('body').on('mousemove',function(e){
  // create a div with class circle
  mouse_left  = e.pageX;
  mouse_top   = e.pageY;
})


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
  allSlideElementsValues.push(getRandomArbitrary(2000, 20000) + 1000);
  // console.log(getRandomArbitrary(50, 1300));
}

function callParallax(e){
  // console.log("hi");
  for(var i = 0; i < allSlideElements.length; i++){
    parallaxIt(e, allSlideElements[i], -allSlideElementsValues[i]);
  }
  // parallaxIt(e, '.slide', -120);
  // parallaxIt(e, '.slide', -100);
  // parallaxIt(e, '.slide', -90);
  // parallaxIt(e, '.slide', -110);
  // parallaxIt(e, '.slide', -50);
  // parallaxIt(e, '.slide', -200);
  // parallaxIt(e, '.slide', -90);
  // parallaxIt(e, 'img', -2000);
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


//
// document.querySelector('.img').style.top = Math.floor(Math.random() * 500) + 1; + 'px';

// document.querySelector('#img').style.top = Math.floor(Math.random() * 500) + 1; + 'px';
// document.querySelector('#img').style.left = numberRandomizer() + 'px';


// var randomTop = Math.random() * 450) + 1;
// var top = randomTop.toString();


function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

// document.querySelectorAll("#img").style.top = getRandomArbitrary(1, 500) + "px";


function numberRandomizer(){
  var x = Math.floor((Math.random() * 60 ) + 1);
  return x;
}
