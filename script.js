//Time display for current day and time
var time = moment().format('dddd MMMM Do YYYY');
$("#currentDay").text(time);

// Timeblocks display for standard business hours create elements
var totalHours = 17 - 9; //8 hrs schedule from 9am until 17:00pm
// console.log(totalHours);
var currentTime = moment().format('HH');
var timeTableElement = moment().startOf('day').add(9, 'hours').format('HH:mm A');;
var stageOfTime;
var selectedTime;
// // console.log (currentTime);
// console.log(startTime);

//Color-code for past, present and future

function createTimeSchedule() {
    for (var i = 9; i <= 17; i++) {
        var timeTableElement = moment().startOf('day').add(9, 'hours').format('HH:mm A');;
        var currentTime = i;
        if (selectedTIme == currentTime) {
            stageOfTime == 'present';
        }
        else if (selectedTIme > currentTime) {
            stageOfTime == 'future';
        }
        else {
            stageOfTime == 'past';
        }
        var tableBlock =
            `<div id="hour-${currentTime}" class="row time-block ${stageOfTime}">
            <div class="col-md-1 hour">${timeTableElement}</div>
            <textarea class="col-md-10 description ${currentTime}"></textarea>
            <button class="btn saveBtn col-md-1">
            <i class="fas fa-save"></i>
            </button>
            </div>`;
        $('.container').append(tableBlock);
    }
    loadSchedule();
}

function loadSchedule() {

    for (var i = 9; i <= 17; i++) {
        var currentTime = i;
        var loadedSchedule = localStorage.getItem(`hour-${currentTime}`);

        $(`.${currentTime}`).val(loadedSchedule);
    }

}