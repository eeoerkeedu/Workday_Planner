var timeBlocksEL = $("#timeblocks");
var saveBtnEl = $(".saveBtn");

var workHours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

// displays today's date
var today = moment();
$("#currentDay").text(today.format("MMM Do, YY"));

function init() {
  for (var i = 0; i < workHours.length; i++) {
    var eventBox = $("<input>");
    var hourBoxHour = workHours[i];

    eventTimeSet();
  }

  function eventTimeSet() {
    var h = moment().get("hour");
    console.log(h);

    if (hourBoxHour < h) {
      eventBox.removeClass("future");
      eventBox.addClass("past");
    } else if (hourBoxHour == h) {
      eventBox.removeClass("future");
      eventBox.addClass("present");
    } else {
      return;
    }
  }
}

function handApptSubmit(event) {
  event.preventDefault();

  const appt = document.querySelector("input").val;

  console.log(appt);
}

saveBtnEl.on("click", handApptSubmit);

init();
