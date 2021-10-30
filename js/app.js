const sunday = document.querySelector(".sunday");
const monday = document.querySelector(".monday");
const tuesday = document.querySelector(".tuesday");
const wednesday = document.querySelector(".wednesday");
const thursday = document.querySelector(".thursday");
const friday = document.querySelector(".friday");
const saturday = document.querySelector(".saturday");

function setClock() {

    let currentDate = new Date();
    let day = currentDate.getDay();
    let seconds = currentDate.getSeconds();
    let minute = currentDate.getMinutes();
    let hour = currentDate.getHours();

    switch (day) {
        case 0:
            sunday.style.color = "red";
            break;
        case 1:
            monday.style.color = "red";
            break;
        case 2:
            tuesday.style.color = "red";
            break;
        case 3:
            wednesday.style.color = "red";
            break;
        case 4:
            thursday.style.color = "red";
            break;
        case 5:
            friday.style.color = "red";
            break;
        case 6:
            saturday.style.color = "red";
            break;
    }

    let amPm = (hour < 12) ? "AM" : "PM";

    hour = (hour > 12) ? hour - 12 : hour;

    hour = ("0" + hour).slice(-2);
    minute = ("0" + minute).slice(-2);
    seconds = ("0" + seconds).slice(-2);

    document.querySelector(".hour").innerHTML = hour;
    document.querySelector(".minute").innerHTML = minute;
    document.querySelector(".second").innerHTML = seconds;
    document.querySelector(".am-pm").innerHTML = amPm;

    let time = setTimeout(setClock, 500);
}

setClock();