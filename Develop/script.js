var today = dayjs();
console.log(today);

var hour = dayjs().get('hour');
console.log(hour);


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
    if (mainDiv) {
      window.localStorage.setItem("Information", mainDiv.html());
    }
  });

  $("main").on("input", 'textarea', function() {
    var target = $(this);
    target.html(target.val());
  })


  function init() {
    var mainDiv = $("#everything-div");
    var information = window.localStorage.getItem("Information");
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


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
