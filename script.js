var timeBlocksEL = $("#timeblocks");
var saveBtnEl = $(".saveBtn");
var eventBoxEL = $(".eventBox");
var today = moment();

//objects to determine hours blocks and appt info
var workHours = [
  {
    time: "8:00 am",
    hour: 08,
    event: "",
  },
  {
    time: "9:00 am",
    hour: 09,
    event: "",
  },
  {
    time: "10:00 am",
    hour: 10,
    event: "",
  },
  {
    time: "11:00 am",
    hour: 11,
    event: "",
  },
  {
    time: "12:00 pm",
    hour: 12,
    event: "",
  },
  {
    time: "1:00 pm",
    hour: 13,
    event: "",
  },
  {
    time: "2:00 pm",
    hour: 14,
    event: "",
  },
  {
    time: "3:00 pm",
    hour: 15,
    event: "",
  },
  {
    time: "4:00 pm",
    hour: 16,
    event: "",
  },
  {
    time: "5:00 pm",
    hour: 17,
    event: "",
  },
  {
    time: "6:00 pm",
    hour: 18,
    event: "",
  },
];

// puts object into local storage
function storeEvents() {
  localStorage.setItem("workHours", JSON.stringify(workHours));
}

function init() {
  var savedEvent = JSON.parse(localStorage.getItem(workHours));

  if (savedEvent !== null) {
    workHours = savedEvent;
  }

  storeEvents();
  displayEvents();
}

// Formats body of page with time blocks to write in
workHours.forEach(function (assignAppend) {
  var hourBlockEl = $("<form>");
  var saveButton = $("<button>");
  var hourBox = $("<div>");
  var eventBox = $("<div>");
  var eventInput = $("<textarea>");
  var saveIcon = $('<i class="far fa-save fa-lg"></i>');
  var hourBoxHour = assignAppend.time;

  // creates time block rows with add-ons
  hourBlockEl.addClass("row justify-content-center time-block");
  hourBlockEl.append(hourBox);
  hourBlockEl.append(eventBox);
  hourBlockEl.append(saveButton);

  //sets hour div's and their formatting
  hourBox.addClass("col-1 d-flex align-items-center hour");
  hourBox.text(hourBoxHour);

  //formats main time blocks and adds text field to write in events
  eventBox.addClass("col-7 future description");
  eventInput.attr("id", assignAppend.hour);
  eventBox.append(eventInput);

  //builds save icon
  saveButton.append(saveIcon);
  saveButton.addClass("col-1  saveBtn");

  //runs function to check time
  eventTimeSet();

  //adds made rows to their parent
  timeBlocksEL.append(hourBlockEl);

  //checks formatting for the fields to color code
  function eventTimeSet() {
    var HH = moment().get("hour");

    if (assignAppend.hour < HH) {
      eventBox.removeClass("future");
      eventBox.addClass("past");
    } else if (assignAppend.hour == HH) {
      eventBox.removeClass("future");
      eventBox.addClass("present");
    } else {
      return;
    }
  }
});

// displays today's date
$("#currentDay").text(today.format("MMM Do, YY"));
