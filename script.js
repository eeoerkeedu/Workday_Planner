var timeBlocksEL = $("#timeblocks");
var saveBtnEl = $(".saveBtn");
var eventBoxEL = $(".eventBox");

var workHours = [08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18];

// displays today's date
var today = moment();
$("#currentDay").text(today.format("MMM Do, YY"));

function init() {
  for (var i = 0; i < workHours.length; i++) {
    var hourBlockEl = $("<form>");
    var saveButton = $("<button>");
    var hourBox = $("<div>");
    var eventBox = $("<div>");
    var eventInput = $("<textarea>");
    var saveIcon = $('<i class="far fa-save fa-lg"></i>');
    var hourBoxHour = workHours[i];

    hourBlockEl.addClass("row justify-content-center time-block");
    hourBlockEl.append(hourBox);
    hourBlockEl.append(eventBox);
    hourBlockEl.append(saveButton);

    hourBox.addClass("col-1 d-flex align-items-center hour");
    hourBox.text(hourBoxHour + ":00");

    eventBox.addClass("col-9 future description");
    eventBox.append(eventInput);

    saveButton.append(saveIcon);
    saveButton.addClass("col-1  saveBtn");

    eventTimeSet();
    timeBlocksEL.append(hourBlockEl);
  }

  function eventTimeSet() {
    var HH = moment().get("hour");
    console.log(HH);

    if (hourBoxHour < HH) {
      eventBox.removeClass("future");
      eventBox.addClass("past");
    } else if (hourBoxHour == HH) {
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
