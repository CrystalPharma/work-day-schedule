//Time display for current day and time
var time = moment().format('dddd MMMM Do YYYY');
$("#currentDay").text(time);

// Timeblocks display for standard business hours create elements
var currentTime = moment().format('HH');
var startTime = moment().startOf('day').add(8, 'hh');
console.log(startTime);
var stageOfTime;
// console.log (currentTime);

//Color-code for past, present and future

// Enter event when select on timeblock

// Save event local storage upon clicking save botton