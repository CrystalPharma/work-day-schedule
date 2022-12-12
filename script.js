//Time display for current day and time
var time = moment().format('dddd MMMM Do YYYY');
$("#currentDay").text(time);

// Timeblocks display for standard business hours create elements
var totalHours = 17 - 9; //8 hrs schedule from 9am until 17:00pm
// console.log(totalHours);
var currentTime = moment().format('HH');
var startTime = moment().startOf('09:00');
var timeTableElement;
var stageOfTime;
var selectedTIme;
// console.log (currentTime);
console.log(startTime);

//Color-code for past, present and future

var scheduleItem = $('.container').append('<div> </div>');
scheduleItem.addClass('row time-block');
function createTimeSchedule() {
    for (var i = 9; i < [totalHours + 9]; i++) {
        scheduleItem[i];
        if (selectedTIme == currentTime) {
            stageOfTime == 'present';
            scheduleItem.addClass('present');
        }
        else if (selectedTIme > currentTime) {
            stageOfTime == 'future';
            scheduleItem.addClass('future');
        }
        else {
            stageOfTime == 'past';
            scheduleItem.addClass('past');
        }
    }
}



// Enter event when select on timeblock

// Save event local storage upon clicking save botton