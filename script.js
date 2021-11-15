var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY, h:mm a"));
// console.log(today)

var workTime = moment();
workTime = workTime.startOf('hour');

var workHour = moment().startOf('day').add(9, 'hours');




//9a
var schedule9 = workHour.add(0, 'h');
schedule9 = schedule9.format('h a');
$("#schedule-9a").text(schedule9);

//10a
var schedule10 = workHour.add(1, 'h');
schedule10 = schedule10.format('h a');
$("#schedule-10a").text(schedule10);

//11a
var schedule11 = workHour.add(1, 'h');
schedule11 = schedule11.format('h a');
$("#schedule-11a").text(schedule11);

//12p
var schedule12 = workHour.add(1, 'h');
schedule12 = schedule12.format('h a');
$("#schedule-12p").text(schedule12);

//1p
var schedule1 = workHour.add(1, 'h');
schedule1 = schedule1.format('h a');
$("#schedule-1p").text(schedule1);

//2p
var schedule2 = workHour.add(1, 'h');
schedule2 = schedule2.format('h a');
$("#schedule-2p").text(schedule2);

//3p
var schedule3 = workHour.add(1, 'h');
schedule3 = schedule3.format('h a');
$("#schedule-3p").text(schedule3);

//4p
var schedule4 = workHour.add(1, 'h');
schedule4 = schedule4.format('h a');
$("#schedule-4p").text(schedule4);

//5p
var schedule5 = workHour.add(1, 'h');
schedule5 = schedule5.format('h a');
$("#schedule-5p").text(schedule5);


function checkSchedule() {

    if (workTime.isAfter(schedule9)) {
        $("#schedule-9a").addClass("past");
    }
    else if (workTime.isBefore(schedule9)) {
        $("#schedule-9a").addClass("future");
    }
    else if (workTime.isSame(schedule9)) {
        $("#schedule-9a").addClass("present");
    };
    if (workTime.isAfter(schedule10)) {
        $("#schedule-10a").addClass("past");
    }
    else if (workTime.isBefore(schedule10)) {
        $("#schedule-10a").addClass("future");
    }
    else if (workTime.isSame(schedule10)) {
        $("#schedule-10a").addClass("present");
    };

    if (workTime.isAfter(schedule11)) {
        $("#schedule-11a").addClass("past");
    }
    else if (workTime.isBefore(schedule11)) {
        $("#schedule-11a").addClass("future");
    }
    else if (workTime.isSame(schedule11)) {
        $("#schedule-11a").addClass("present");
    };
    
    if (workTime.isAfter(schedule12)) {
        $("#schedule-12p").addClass("past");
    }
    else if (workTime.isBefore(schedule12)) {
        $("#schedule-12p").addClass("future");
    }
    else if (workTime.isSame(schedule12)) {
        $("#schedule-12p").addClass("present");
    };
    
    if (workTime.isAfter(schedule1)) {
        $("#schedule-1p").addClass("past");
    }
    else if (workTime.isBefore(schedule1)) {
        $("#schedule-1p").addClass("future");
    }
    else if (workTime.isSame(schedule1)) {
        $("#schedule-1p").addClass("present");
    };
 
    if (workTime.isAfter(schedule2)) {
        $("#schedule-2p").addClass("past");
    }
    else if (workTime.isBefore(schedule2)) {
        $("#schedule-2p").addClass("future");
    }
    else if (workTime.isSame(schedule2)) {
        $("#schedule-2p").addClass("present");
    };

    if (workTime.isAfter(schedule3)) {
        $("#schedule-3p").addClass("past");
    }
    else if (workTime.isBefore(schedule3)) {
        $("#schedule-3p").addClass("future");
    }
    else if (workTime.isSame(schedule3)) {
        $("#schedule-3p").addClass("present");
    };

    if (workTime.isAfter(schedule4)) {
        $("#schedule-4p").addClass("past");
    }
    else if (workTime.isBefore(schedule4)) {
        $("#schedule-4p").addClass("future");
    }
    else if (workTime.isSame(schedule4)) {
        $("#schedule-4p").addClass("present");
    };

    if (workTime.isAfter(schedule5)) {
        $("#schedule-5p").addClass("past");
    }
    else if (workTime.isBefore(schedule5)) {
        $("#schedule-5p").addClass("future");
    }
    else if (workTime.isSame(schedule5)) {
        $("#schedule-5p").addClass("present");
    };
 
}

