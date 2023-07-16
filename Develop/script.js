var hour = dayjs().get('hour');

function call() {
var NineAM = $("#hour-9");
var TenAM = $("#hour-10");
var ElevenAM = $("#hour-11");
var TwelvePM = $("#hour-12");
var OnePM = $("#hour-13");
var TwoPM = $("#hour-14");
var ThreePM = $("#hour-15");
var FourPM = $("#hour-16");
var FivePM = $("#hour-17");

function addColor() {
  setDivColors(9, NineAM);
  setDivColors(10, TenAM);
  setDivColors(11, ElevenAM);
  setDivColors(12, TwelvePM);
  setDivColors(13, OnePM);
  setDivColors(14, TwoPM);
  setDivColors(15, ThreePM);
  setDivColors(16, FourPM);
  setDivColors(17, FivePM);
}
  addColor();
};


function setDivColors(time, div) {
  if (hour < time) {
    div.attr("class", "row time-block future");
  } else if (hour === time) {
    div.attr("class", "row time-block present");
  } else {
    div.attr("class", "row time-block past");
  }
}


$("main").on("click", 'button', function() {
  var mainDiv = $("#everything-div");
  var saveText = $("#save-text");
    if (mainDiv) {
      window.localStorage.setItem("schedulesavestuff", mainDiv.html());
      saveText.html('Saved schedule to <span id="localStorageSpan">localStorage✔️</span>');
    }
  });

  $("main").on("input", 'textarea', function() {
    var target = $(this);
    target.html(target.val());
  })


  function init() {
    var mainDiv = $("#everything-div");
    var information = window.localStorage.getItem("schedulesavestuff");
    if (information === null) {
      return;
    } else {
      mainDiv.html(information);
    }
  }

function setTime() {
  var currentDay = $("#currentDay");
  var date = dayjs().format('dddd, MMMM D')
  function determineTH() {
    var day = dayjs().format('D');
    if (day === "1") {
      var result = 'st';
    } else if (day === "2") {
      var result = 'nd';
    } else if (day === "3") {
      var result = 'rd';
    } else {
      var result = 'th';
    } return result;
  } 
  var th = determineTH();
  currentDay.text(date + th);
}

init();
call();
setTime();

var clearAllButton = $("#clear-all");
clearAllButton.on("click", function() {
  var mainDiv = $("#everything-div");
  var allTextAreas = $("textarea");
  var saveText = $("#save-text");
  allTextAreas.text("");
  window.localStorage.setItem("schedulesavestuff", mainDiv.html());
  saveText.html('Removed all schedules from <span id="localStorageSpan">localStorage</span>');
  init();
})
