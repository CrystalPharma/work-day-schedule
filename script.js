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
// // console.log (currentTime);
// console.log(startTime);

//Color-code for past, present and future

var scheduleItem = $('.container').append('<div> Time </div>');
console.log(scheduleItem);
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
} createTimeSchedule ();
}


// function for save schedule in the local storage
// function saveSchedule() {

//     var keyName = $(this).parent().attr('id');
//     var keyValue = $(this).parent().children().eq(1).val();

//     localStorage.setItem(keyName, keyValue);
// }

// // functino to get back the data from the local storage and print it out in to the textarea attribute
// function loadSchedule() {

//     for (var hour = 9; hour < [totalHours+9]; hour++) {
//         var loadedSchedule = localStorage.getItem(`hour-${selectedTime}`);

//         $(`.${selectedTIme}`).val(loadedSchedule);
//     }

// }

// Enter event when select on timeblock
