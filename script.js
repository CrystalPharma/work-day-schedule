//Time display for current day and time
var time = moment().format('dddd MMMM Do YYYY');
$("#currentDay").text(time);

// Timeblocks display for standard business hours create elements
var totalHours = 17 - 9; //8 hrs schedule from 9am until 17:00pm
// console.log(totalHours);
var currentTime = moment().format('HH');
var timeTableElement;
var stageOfTime;
var selectedTime;
// // console.log (currentTime);
// console.log(startTime);

//row element
let rowEl = $('<div>');
rowEl.addClass('row time-block $(stageOfTime)')
//build Time box 
let timeBlock = $('<div>');
timeBlock.addClass('col-md 2');

//build Time box element
let timeBlockEl = $('<span>');
timeBlockEl
//Color-code for past, present and future
var tableBlock = document.createElement(`<div class="row time-block ${stageOfTime}">
<div class="col-md-1 hour">${timeTableElement}</div>
<textarea class="col-md-10 description"></textarea>
<button class="btn saveBtn col-md-1">
    <i class="fas fa-save"></i>
</button>)     
</div>`);
$('.container').append(tableBlock);
    function createTimeSchedule() {
        for (var i = 9; i < [totalHours + 9]; i++) {
            timeTableElement = moment().startOf('day').add(9, 'hours').format('HH:mm A');

            if (selectedTIme == currentTime) {
                stageOfTime == 'present';
            }
            else if (selectedTIme > currentTime) {
                stageOfTime == 'future';
            }
            else {
                stageOfTime == 'past';
            }
        } 
        createTimeSchedule();
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

//Call function
createTimeSchedule();