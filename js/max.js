// console.log("test");

// setInterval(updateTime, milliseconds)



// $("").addEventListener("playing", )

function updateDuration(label, video, timeout) {
  var oldTime = label.textContent;
  var newTime = video.currentTime.toFixed(2).toString();
  if (video.paused) {
    label.textContent = newTime; // Update to final time
    // Finish
  } else {
    label.textContent = newTime;
    window.setTimeout(function() {
      updateDuration(label, video, timeout);
    }, timeout);
  }
}

function setupVideoDurationLabel(videoID) {
  var labelID = videoID  + "-duration";
  var video = document.getElementById(videoID);
  var label = document.getElementById(video);
  video.addEventListener("playing", function() {
    // console.log("Playing video event happened");
    // withoutAutoComplete.currentTime = 0;
    // label.textContent = "-1";
    updateDuration(label, video, 50);
  });
}

Reveal.addEventListener( 'ready', function( event ) {
  setupVideoDurationLabel("video-without-autocomplete");
  setupVideoDurationLabel("video-with-autocomplete");
});
    // event.currentSlide, event.indexh, event.indexv

//     Reveal.addEventListener( 'fragmentshown', function( event ) {
//       console.log("fragment shown");
//       // debugger;
//       if (event.fragment.id === "after-svg") {
//         var s = Snap("#sdk-arrows");
//         var arrows = s.selectAll("#Line");
//         // debugger;
//         // arrows.animate({"stroke-dasharray": "10,10"}, 2);

//         var app = s.select("#APP");
//         var hardcodedY = 312;
//         // debugger;

//         Snap.animate(0,10, function( value ) {
            
//             app.attr({transform: "t" + (200 + (value * 5)) + " " + hardcodedY});
//             // app.attr({cx: value * 5});
//         }, 2000, mina.easeout, function () {
//           console.log("animation finished");

//           Snap.animate(0,10, function( value ) {
//             arrows.attr({ 'stroke-dasharray': value + ',' + value});
//           }, 2000, mina.linear);

//         });

        
//         // app.animate({transform: "t300 200"}, 2);

//         // debugger;
//         // app.animate()
//         // app.transform("t100,100");

//         // $("svg #Line").attr("stroke-dasharray", "10,10")
//       }
//     });   // event.fragment = the fragment DOM element

//     // Reveal.addEventListener( 'slidechanged', function( event ) {
//     // // event.previousSlide, event.currentSlide, event.indexh, event.indexv
//     // console.log("slide changed");
//     //   debugger;
//     // } );

// } );