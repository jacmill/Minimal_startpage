
function Time() {
var d = new Date();
var h = d.getHours(); //hours
var m = d.getMinutes(); //minutes

h = correctDisplay(h); //add zero if less than 10
m = correctDisplay(m);

document.getElementById("Clock").innerText= h + ":" + m;
setTimeout("Time()",1000);
}

function correctDisplay(k) {

    if(k < 10) {
        return "0"+k;
    }
    else{
        return k;
    }
}


