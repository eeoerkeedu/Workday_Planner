var timeBlocksEL = $("#timeblocks");
var saveBtnEl = $(".saveBtn");
var eventInputEL = $(".eventBox");
var today = moment();

//objects to determine hours blocks and appt info
var workHours = [
  {
    pos: 0,
    time: "8:00 am",
    hour: 08,
    apptTxt: "",
  },
  {
    pos: 1,
    time: "9:00 am",
    hour: 09,
    apptTxt: "",
  },
  {
    pos: 2,
    time: "10:00 am",
    hour: 10,
    apptTxt: "",
  },
  {
    pos: 3,
    time: "11:00 am",
    hour: 11,
    apptTxt: "",
  },
  {
    pos: 4,
    time: "12:00 pm",
    hour: 12,
    apptTxt: "",
  },
  {
    pos: 5,
    time: "1:00 pm",
    hour: 13,
    apptTxt: "",
  },
  {
    pos: 6,
    time: "2:00 pm",
    hour: 14,
    apptTxt: "",
  },
  {
    pos: 7,
    time: "3:00 pm",
    hour: 15,
    apptTxt: "",
  },
  {
    pos: 8,
    time: "4:00 pm",
    hour: 16,
    apptTxt: "",
  },
  {
    pos: 9,
    time: "5:00 pm",
    hour: 17,
    apptTxt: "",
  },
  {
    pos: 10,
    time: "6:00 pm",
    hour: 18,
    apptTxt: "",
  },
];

//on page load displays any events in local storage
function init() {
  displayEvents();
}

// puts object into local storage
function storeEvents() {
  localStorage.setItem("workHours", JSON.stringify(workHours));

  
}

//gets local storage data to the page
function displayEvents() {
  var savedEvent = JSON.parse(localStorage.getItem("workHours"));

  if (savedEvent !== null) {
    savedEvent.forEach(function (addBackEvents) {
    // var hourBoxHour = addBackEvents.hour;
    i = addBackEvents.hour;
    var addApptText = addBackEvents.apptTxt;
    var hourBoxFind = document.getElementById(i);

    $(hourBoxFind).text(addApptText);
    })
  }
}


//when save button is pushed the value is placed in local storage, still buggy
function save(event) {
  // alert("Event Saved");
  var element = event.target;
  var buttonPartType = $(element).attr("class");
  console.log(buttonPartType);

  var saveEventButton = $(element).attr("id");
  // console.log(saveEventButton);
  console.log(saveEventButton);


  if (buttonPartType === "col-1 saveBtn") {
    var saveApptText = $(element).siblings(".eventbox").val();
    console.log(saveApptText);
  } else {
    var iconIsAButtonToo =element.parentElement
    var saveApptText = $(iconIsAButtonToo).siblings(".eventbox").val();
    console.log(iconIsAButtonToo)
    console.log(saveApptText);
  }

  if (saveApptText !== undefined) {
    workHours[saveEventButton].apptTxt = saveApptText;
  }

  storeEvents();
  // displayEvents();
}

// Formats body of page with time blocks to write in
workHours.forEach(function (assignAppend) {
  var hourBlockEl = $("<div>");
  var saveButton = $("<button>");
  var hourBox = $("<div>");
  var eventInput = $("<textarea>");
  var saveIcon = $('<i class="far fa-save fa-lg icon"></i>');
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
  saveIcon.attr("id", assignAppend.pos);
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
init();
