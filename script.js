//Time display for current day and time
var time = moment().format('dddd MMMM Do YYYY');
$("#currentDay").text(time);

// Timeblocks display for standard business hours create elements
var totalHours = 17 - 9; //8 hrs schedule from 9am until 17:00pm
// console.log(totalHours);

var initialTime = moment().startOf('day').add(9, 'hours').format('HH');
// console.log(initialTime);
var stageOfTime;
var currentTime = moment().format('HH');
// console.log(currentTime);

var timeContainer = $('.container');
// var childNode = timeContainer.children;
// console.log(timeContainer.children);

//text inside textarea of div


// All save button elements
var buttons = $('.saveBtn');

// text

//for loop to create meultiple childNodes
for (var i = 0; i < 9; i++) {
    var hourEl = parseInt(initialTime) + i;
    console.log(hourEl);
    // if statement for determining the stage of time add associate class to textarea
    if (currentTime < hourEl) {
        stageOfTime = 'future';
    }
    else if (currentTime == hourEl) {
        stageOfTime = 'present';
    }
    else {
        stageOfTime = 'past';
    }
    var childNode =
        `<div class="row time-block">
                    <div class="col-md-1 hour id="${hourEl}">${hourEl}</div>
                    <textarea class="col-md-10 description ${stageOfTime} text-${hourEl}"></textarea>
                    <button class="btn saveBtn col-md-1 btn-${hourEl}">
                        <i class="fas fa-save"></i>
                    </button>
    </div>`;

    timeContainer.append(childNode);
}
console.log(childNode);

// //save content function
// buttons.click(function(event){
//     var element = event.target;
//     console.log(element);

// });
function saveSchedule() {

    var keyName = $(this).parent().attr('id');
    var keyValue = $(this).parent().children().eq(1).val();

    localStorage.setItem(keyName, keyValue);
}

// functino to get back the data from the local storage and print it out in to the textarea attribute
function loadSchedule() {

    for (var i = 0; i < totalHours; i++) {
        var hourEl = parseInt(initialTime) + i;
        var loadedSchedule = localStorage.getItem(`hour-${hourEl}`);

        $(`.${hourEl}`).val(loadedSchedule);
    }

}

$('.saveBtn').on('click', saveSchedule);