
var list = ["box1",
            "box2",
            "box3",
            "box4",
            "box5",
            "box6",
            "box7",
            "box8"
          ];
$("body").on("mousedown",function(e){


    var index = Math.floor( Math.random() * list.length);
    var classname = list[ index ];

    var myNewCat = $("<div>").addClass( classname );
    myNewCat.css("top", e.pageY );
    myNewCat.css("left", e.pageX );

    $(".content").append(myNewCat);
});
//
// var dragItem = document.querySelector("#box");
//     var container = document.querySelector("#content");
//
//     var active = false;
//     var currentX;
//     var currentY;
//     var initialX;
//     var initialY;
//     var xOffset = 0;
//     var yOffset = 0;
//
//     content.addEventListener("touchstart", dragStart, false);
//     content.addEventListener("touchend", dragEnd, false);
//     content.addEventListener("touchmove", drag, false);
//
//     content.addEventListener("mousedown", dragStart, false);
//     content.addEventListener("mouseup", dragEnd, false);
//     content.addEventListener("mousemove", drag, false);
//
//     function dragStart(e) {
//       if (e.type === "touchstart") {
//         initialX = e.touches[0].clientX - xOffset;
//         initialY = e.touches[0].clientY - yOffset;
//       } else {
//         initialX = e.clientX - xOffset;
//         initialY = e.clientY - yOffset;
//       }
//
//       if (e.target === dragItem) {
//         active = true;
//       }
//     }
//
//     function dragEnd(e) {
//       initialX = currentX;
//       initialY = currentY;
//
//       active = false;
//     }
//
//     function drag(e) {
//       if (active) {
//
//         e.preventDefault();
//
//         if (e.type === "touchmove") {
//           currentX = e.touches[0].clientX - initialX;
//           currentY = e.touches[0].clientY - initialY;
//         } else {
//           currentX = e.clientX - initialX;
//           currentY = e.clientY - initialY;
//         }
//
//         xOffset = currentX;
//         yOffset = currentY;
//
//         setTranslate(currentX, currentY, dragItem);
//       }
//     }
//
//     function setTranslate(xPos, yPos, el) {
//       el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
//     }
