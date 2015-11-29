// console.log("test");

// setInterval(updateTime, milliseconds)



// $("").addEventListener("playing", )

function addCodeCallout(elements) {
  var color = "#3f3f3f";

  elements.addClass("code-callout");
  elements.css("color", color);
  elements.find("*").css("color", color);
  elements.css("font-weight", "600");
  elements.find("*").css("font-weight", "600");
}
function removeCodeCallout(elements) {
  elements.removeClass("code-callout");
  elements.css("color","");
  elements.css("font-weight","");
  elements.find("*").css("color","");
  elements.find("*").css("font-weight","");
}

function updateDuration(label, video, timeout) {
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
  video.addEventListener("playing", function() {
    console.log("Playing video event happened");
    // withoutAutoComplete.currentTime = 0;
    // label.textContent = "-1";
    var label = document.getElementById(labelID);
    updateDuration(label, video, 50);
  });
}

Reveal.addEventListener( 'ready', function( event ) {
  console.log("setting up duration labels");
  setupVideoDurationLabel("video-without-autocomplete");
  setupVideoDurationLabel("video-with-autocomplete");
});

Reveal.addEventListener( 'fragmentshown', function( event ) {
  console.log("fragment shown");
  var fragment = $(event.fragment);
  var currentHighlightId = fragment.data("proxy-current");
  var nextHighlightId = fragment.data("proxy-next");
  if (currentHighlightId) {
    var old = $("#" + currentHighlightId)
    removeCodeCallout(old);
    // old.removeClass("code-callout");
    // old.css("color","");
    // old.css("font-weight","");
    // old.find("*").css("color","");
    // old.find("*").css("font-weight","");
  }
  if (nextHighlightId) {
    var newSpan = $("#" + nextHighlightId);
    addCodeCallout(newSpan);
    // newSpan.addClass("code-callout");

    // var color = "#3f3f3f";
    // newSpan.css("color", color);
    // newSpan.find("*").css("color", color);
    // newSpan.css("font-weight", "600");
    // newSpan.find("*").css("font-weight", "600");
  }
} );
Reveal.addEventListener( 'fragmenthidden', function( event ) {
  var fragment = $(event.fragment);
  var previousHighlightId = fragment.data("proxy-current");
  var currentHighlightId = fragment.data("proxy-next");

  if (currentHighlightId) {
    removeCodeCallout($("#" + currentHighlightId));
  }

  if (previousHighlightId) {
    addCodeCallout($("#" + previousHighlightId));
  }

} );


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