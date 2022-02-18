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

//on page load displays any events in local storage
function init() {
  var savedEvent = JSON.parse(localStorage.getItem(workHours));

  if (savedEvent !== null) {
    workHours = savedEvent;
  }

  storeEvents();
  displayEvents();
}

// puts object into local storage
function storeEvents() {
  localStorage.setItem("workHours", JSON.stringify(workHours));
}

//gets local storage data to the page
function displayEvents() {
  workHours.forEach(function (addBackEvents) {
    var hourBoxHour = addBackEvents.hour;
    var hourBoxEvent = addBackEvents.event;

    $("hourBoxHour").val(hourBoxEvent);
  });
}

// when save button is clicked grab the event data for the other funtions
function save(event) {
  event.preventDefault();
  console.log("clicked");
  var element = $(event.target);
  console.log(element);
  var saveEvent = $(element).siblings(".eventbox").attr(hour);

  workHours[saveEvent].reminder = $(element).siblings(".eventbox").val();

  storeEvents();
  displayEvents();
}

// function save(event) {
//   event.preventDefault();
//   var element = $(event.target);
//   console.log(element);
// }
saveBtnEl.on("click", ".saveBtn", save);

// Formats body of page with time blocks to write in
workHours.forEach(function (assignAppend) {
  var hourBlockEl = $("<div>");
  var saveButton = $("<button>");
  var hourBox = $("<div>");
  var eventInput = $("<textarea>");
  var saveIcon = $('<i class="far fa-save fa-lg"></i>');
  var hourBoxHour = assignAppend.time;

  // creates time block rows with add-ons
  hourBlockEl.addClass("row justify-content-center time-block");
  hourBlockEl.append(hourBox);
  hourBlockEl.append(eventInput);
  hourBlockEl.append(saveButton);

  //sets hour div's and their formatting
  hourBox.addClass("col-1 d-flex align-items-center hour");
  hourBox.text(hourBoxHour);

  //formats input fields and assigns id's
  eventInput.addClass("col-7 future description eventbox");
  eventInput.attr("id", assignAppend.hour);

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
      eventInput.removeClass("future");
      eventInput.addClass("past");
    } else if (assignAppend.hour == HH) {
      eventInput.removeClass("future");
      eventInput.addClass("present");
    } else {
      return;
    }
  }
});

// displays today's date
$("#currentDay").text(today.format("MMM Do, YY"));

//initializes page on load
init();
