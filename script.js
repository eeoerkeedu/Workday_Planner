var timeBlocksEL = $("#timeblocks");
var saveBtnEl = $(".saveBtn");
var eventBoxEL = $(".eventBox");
var today = moment();

//objects to determine hours blocks and appt info
var workHours = [
  {
    time: "8:00 am",
    hour: 08,
    appt: "",    
  },
  {
    time: "9:00 am",
    hour: 09,
    appt: "",    
  },
  {
    time: "10:00 am",
    hour: 10,
    appt: "",    
  },
  {
    time: "11:00 am",
    hour: 11,
    appt: "",    
  },
  {
    time: "12:00 pm",
    hour: 12,
    appt: "",    
  },
  {
    time: "1:00 pm",
    hour: 13,
    appt: "",    
  },
  {
    time: "2:00 pm",
    hour: 14,
    appt: "",    
  },
  {
    time: "3:00 pm",
    hour: 15,
    appt: "",    
  },
  {
    time: "4:00 pm",
    hour: 16,
    appt: "",    
  },
  {
    time: "5:00 pm",
    hour: 17,
    appt: "",    
  },
  {
    time: "6:00 pm",
    hour: 18,
    appt: "",    
  }
];


function storeAppts ( {
  
})

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

    eventBox.addClass("col-7 future description");
    eventInput.attr("id", [i]);
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

// function handApptSubmit(event) {
//   event.preventDefault();

//   const appt = document.querySelector("input").val;

//   console.log(appt);
// }

// saveBtnEl.on("click", handApptSubmit);

// displays today's date
$("#currentDay").text(today.format("MMM Do, YY"));
//initializes planner on page load
init();
