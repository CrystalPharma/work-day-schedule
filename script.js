//Time display for current day and time
var time = moment().format('dddd MMMM Do YYYY');
$("#currentDay").text(time);

// Timeblocks display for standard business hours create elements
var totalHours = 17 - 9; //8 hrs schedule from 9am until 17:00pm
// console.log(totalHours);
var AA;
var initialTime =  moment().startOf('day').add(9, 'hours').format('HH:aa');
console.log(initialTime);
var stageOfTime;
var currentTime = moment().format('HH: aa');


console.log(currentTime);

var timeContainer = $('.container');
var childNode = timeContainer.children;

childNode =
`<div class="row time-block">
                <div class="col-md-1 hour id="${hourEl}">${hourEl}</div>
                <textarea class="col-md-10 description ${stageOfTime}"></textarea>
                <button class="btn saveBtn col-md-1">
                    <i class="fas fa-save"></i>
                </button>
</div>`;
console.log(timeContainer.children);

//for loop to create meultiple childNodes
for (i= 0; i < 9; i++){
    timeContainer.append(childNode)[i];
    var hourEl = parseInt(initialTime) + i ;

    // if statement for determining the stage of time add associate class to textarea
    if (currentTime > hourEl){
    stageOfTime = 'future';
    }
    else if (currentTime == hourEl){
    stageOfTime = 'present';
    }
    else {
    stageOfTime = 'past';
    }

}





// for (hour = 0; hour < 9; hour++) { 
    
//     $('#time-contain').innerHTML = 9 + hour};
    


// //create form with 8 rows
// var directChild = $('.container').append('<div "hour" class="row time-block"></div>');
// var children = directChild.append('<div class="col-md-1 hour "id="time-contain">9</div><textarea class="col-md-10 description"></textarea>' ,
// '<button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>');
// function createPara(n) { 
//     var timeContainer = document.querySelector('#schedule-items');
//     var tmpTimeContainer = document.querySelector('#hour');
//     console.log(timeContainer)
//     console.log(tmpTimeContainer)
//     // console.log(totalHours)
//     for (let i = 0 ; i< n; i++) {    
//         var timeContainerEl = document.createElement("div");
//         timeContainerEl.innerHTML = parseInt(currentTime) +i
//         +'';


//         timeContainer.appendChild(timeContainerEl);
//         var timeTextArea = document.createElement('textarea');
//         timeTextArea.classList.add('col-md-10')
//         timeTextArea.classList.add('description')
//         timeContainer.appendChild(timeTextArea);

//         var timeBtn = document.createElement('button');
//         timeBtn.classList.add('btn')
//         timeBtn.classList.add('saveBtn')
//         timeBtn.classList.add('col-md-1')
//         var timeI = document.createElement('i');
//         timeI.classList.add('fas');
//         timeI.classList.add('fa-save');
//         timeBtn.appendChild(timeI)

//         timeContainer.appendChild(timeBtn);
    
//     }
//     console.log(timeContainer)
//   }
// createPara(totalHours);


// // time Slot for 9 - 17 in array
// var items;
// function timeSlot() {
//     const items = []
//     for (let hour = 9; hour < 18; hour++) {
//       items.push(moment({ hour }).format('h a'))
//     }
//     return items
//     timeSlot();
//   }
  



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