var timeBlocksEL = $("#timeblocks");

var hours = "8am 9am 10am 11am 12pm 1pm 2pm 3pm 4pm 5pm 6pm";
var workHours = hours.split(" ");

// displays today's date
var today = moment();
$("#currentDay").text(today.format("MMM Do, YY"));

function init() {
  for (var i = 0; i < workHours.length; i++) {
    var hourBlockEl = $("<div>");
    var saveButton = $("<button>");
    var hourBox = $("<div>");
    var eventBox = $("<input>");

    hourBlockEl.addClass("row justify-content-center vw-100 time-block");
    hourBlockEl.append(hourBox);
    hourBlockEl.append(eventBox);
    hourBlockEl.append(saveButton);

    hourBox.addClass("col-1 hour");
    hourBox.text(workHours[i]);

    eventBox.addClass("col-6 description");

    saveButton.addClass("col-1 saveBtn");

    timeBlocksEL.append(hourBlockEl);
  }
}

init();
