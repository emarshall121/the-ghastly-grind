// Variables
var now = dayjs().hour()

// Variable to hold the hours and events and reload any tasks saved in local storage
var tasks = ["", "", "", "", "", "", "", "",]
    if (localStorage.getItem("tasks")){
        tasks = JSON.parse(localStorage.getItem("tasks"))
    }

// Saving items in localStorage
localStorage.setItem("tasks", JSON.stringify(tasks))

// Retrieve from localStorage
var mySavedTasks = JSON.parse(localStorage.getItem("tasks"));
mySavedTasks.forEach( function(element, index) {
document.getElementById(index+"textarea").value = element
})

// Save task to localStorage when save button is clicked
$(".saveBtn").click(function(event){
    var buttonId = event.currentTarget.id
    var newTask = document.getElementById(buttonId[0] + "textarea").value
    var taskNumber = parseInt(buttonId[0]);
    tasks[taskNumber]=newTask;
    localStorage.setItem("tasks", JSON.stringify(tasks));
})

// This creates the current day and date in the heading
$('#currentDay').text("Today is: " + moment().format('dddd') + ", " + moment().format('MMMM Do YYYY'));

// Make hour blocks editable by clicking on them
$(".description").on("click", "p", function() {
    // get current text of p element
    var text = $(this)
      .text()
      .trim();
  
    // replace p element with a new textarea
    var textInput = $("<textarea>")
      .addClass("form-control")
      .val(text);
    $(this).replaceWith(textInput);
  
    // auto focus new element
    textInput.trigger("focus");
  });

// Check each block and compare current time to agenda time
$(".time-block").each(function () {
    var agendaHour = $(this).attr("id");

    //color code based on past, present, future
    if (agendaHour < now) {
    $(this).addClass("past");
    $(this).removeClass("present");
    $(this).removeClass("future");
    }
    
    else if (agendaHour == now) {
    $(this).removeClass("past");
    $(this).addClass("present");
    $(this).removeClass("future");
    }
    
    else {
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
    }
})
