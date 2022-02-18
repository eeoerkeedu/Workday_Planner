var timeBlocksEL = $("#timeblocks");
var saveBtnEl = $(".saveBtn");
var eventBoxEL = $(".eventBox");
var today = moment();

//objects to determine hours blocks and appt info
var workHours = [
  {
    pos: 0,
    time: "8:00 am",
    hour: 08,
    event: "",
  },
  {
    pos: 1,
    time: "9:00 am",
    hour: 09,
    event: "",
  },
  {
    pos: 2,
    time: "10:00 am",
    hour: 10,
    event: "",
  },
  {
    pos: 3,
    time: "11:00 am",
    hour: 11,
    event: "",
  },
  {
    pos: 4,
    time: "12:00 pm",
    hour: 12,
    event: "",
  },
  {
    pos: 5,
    time: "1:00 pm",
    hour: 13,
    event: "",
  },
  {
    pos: 6,
    time: "2:00 pm",
    hour: 14,
    event: "",
  },
  {
    pos: 7,
    time: "3:00 pm",
    hour: 15,
    event: "",
  },
  {
    pos: 8,
    time: "4:00 pm",
    hour: 16,
    event: "",
  },
  {
    pos: 9,
    time: "5:00 pm",
    hour: 17,
    event: "",
  },
  {
    pos: 10,
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

    $(hourBoxHour).val(hourBoxEvent);
  });
}

function save(event) {
  alert("Event Saved");
  var element = $(event.target);

  var saveEventTime = $(element).siblings(".eventbox").attr("id");
  console.log(saveEventTime);

  var saveEventText = $(element).siblings(".eventbox").val();
  console.log(saveEventText);

  var saveEventButton = $(element).attr("id");
  console.log(saveEventButton);

  workHours[saveEventButton].event = saveEventText;

  storeEvents();
  displayEvents();
}

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
  saveButton.attr("id", assignAppend.pos);
  saveButton.addClass("col-1 saveBtn");

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

$(".saveBtn").on("click", save);

//initializes page on load
// init();
