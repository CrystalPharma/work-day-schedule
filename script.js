//Time display for current day and time
var time = moment().format('dddd MMMM Do YYYY');
$("#currentDay").text(time);

// Timeblocks display for standard business hours create elements
var totalHours = 17 - 9; //8 hrs schedule from 9am until 17:00pm
// console.log(totalHours);
var currentTime = moment().format('HH');
console.log(currentTime);
var stageOfTime;
var selectedTime;
// // console.log (currentTime);
// console.log(startTime);
var timeContainer = document.querySelector('#time-contain');
var timeContainerEl = document.createElement("p");
timeContainer.appendChild(timeContainerEl);

for (var hour = 9; hour <= 17; hour ++) {
    timeContainerEl.innerHTML = hour ;
}




//Color-code for past, present and future
// for (var i = 9; i <= 17; i++) {
    
//     if (selectedTIme == currentTime) {
//         stageOfTime == 'present';
//     }
//     else if (selectedTIme > currentTime) {
//         stageOfTime == 'future';
//     }
//     else {
//         stageOfTime == 'past';
//     }

// }

// function createTimeSchedule() {
//     for (var i = 9; i <= 17; i++) {
    
//         if (selectedTIme == currentTime) {
//             stageOfTime == 'present';
//         }
//         else if (selectedTIme > currentTime) {
//             stageOfTime == 'future';
//         }
//         else {
//             stageOfTime == 'past';
//         }
   
//     }

// }

// function loadSchedule() {

//     for (var i = 9; i <= 17; i++) {
//         var currentTime = i;
//         var loadedSchedule = localStorage.getItem(`hour-${currentTime}`);

//         $(`.${currentTime}`).val(loadedSchedule);
//     }

// }