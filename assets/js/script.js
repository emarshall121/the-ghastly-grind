// Variables
var tasks = {
    '8': '',
    '9':'',
    '10':'',
    '11':'',
    '12':'',
    '1':'',
    '2':'',
    '3':'',
    '4':'',
    '5':''
};

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

// Saving tasks to localStorage by clicking save button
    var saveTasks = function() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    };

// Save task content when save button is clicked
$(".saveBtn").on("click", function() {
    tasks = JSON.parse(localStorage.setItem('tasks'));
    console.log(tasks);
    // saveTasks();
  });