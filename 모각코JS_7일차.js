var h = 0, m = 0, s = 0;
var time = document.getElementsByClassName("time");
var now = "";
var set;

function start() {
    set = setTimeout(timer, 1000);
}

function stop() {
    clearTimeout(set);
}

function reset() {
    clearTimeout(set);
    now = "00 : 00 : 00";
    h = 0;
    m = 0;
    s = 0;
    time[0].innerHTML = now;
}

function timer() {
    now = "";
    s++;

    if (s==60) {
        m++;
        s = 0;
    }

    if (m==60) {
        h++;
        m = 0;
    }

    if (h==99 && m==59 && s==59) {
        stop();
    }

    if (h<10) {
        now+="0";
        now+=h;
        now+=" : ";
    } else {
        now += h;
        now += " : ";
    }

    if (m<10) {
        now+="0";
        now+=m;
        now+=" : ";
    } else {
        now += m;
        now += " : ";
    }

    if (s<10) {
        now+="0";
        now+=s;
    } else {
        now += s;
    }

    time[0].innerHTML = now;
    start();
}