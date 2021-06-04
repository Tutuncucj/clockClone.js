
let fullname = prompt("Adınızı Giriniz")
let fname = document.querySelector("#fname")
fname.innerHTML = (fullname)

window.onload = startTime;

function startTime() { 

let myclock = document.querySelector("#myClock")

let h = new Date().getHours()
let min = new Date().getMinutes();
let sec = new Date().getSeconds();
let day = new Date().getDay(toString);
let days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
];
if (h<10)
h = "0"+ h;
else
h = h;

if(min<10)
min = "0"+ min;
else
min = min;

if(sec<10)
sec = "0"+ sec;
else
sec = sec;

saat = `${h}:${min}:${sec}: ${days[day]} ` 

t=setTimeout('startTime()',1000);

myclock.innerHTML= saat

 } 

