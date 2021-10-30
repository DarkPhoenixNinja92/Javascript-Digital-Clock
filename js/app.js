function setClock() {
    let currentDate = new Date();
    let seconds = currentDate.getSeconds();
    let minute = currentDate.getMinutes();
    let hour = currentDate.getHours();

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