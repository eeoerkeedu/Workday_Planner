var timeBlocksEL = $("#timeblocks");
var saveBtnEl = $(".saveBtn");

var workHours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

// displays today's date
var today = moment();
$("#currentDay").text(today.format("MMM Do, YY"));

function init() {
  for (var i = 0; i < workHours.length; i++) {
    var hourBlockEl = $("<form>");
    var saveButton = $("<button>");
    var hourBox = $("<div>");
    var eventBox = $("<input>");
    // var saveIcon = $('<FontAwesomeIcon icon="fa-regular fa-floppy-disk" />');
    var hourBoxHour = workHours[i];

    eventTimeSet();

    //   hourBlockEl.addClass(
    //     "row justify-content-center vw-100 time-block hourRow"
    //   );
    //   hourBlockEl.append(hourBox);
    //   hourBlockEl.append(eventBox);
    //   hourBlockEl.append(saveButton);

    //   hourBox.addClass("col-1 d-flex align-items-center hour");
    //   hourBox.text(hourBoxHour + ":00");

    //   eventBox.addClass("col-6 future description text-dark appointmentInput");

    //   // saveButton.append(saveIcon);
    //   saveButton.addClass("col-1 saveBtn");

    //   timeBlocksEL.append(hourBlockEl);
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

init();
