const months = [ "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December", ];

    let d;
    let h;
    let m;
    let s;
setInterval(() => {
    let date = new Date();
    
    d = date.getDate() +" "+ months[date.getMonth()] + " " + date.getFullYear();
    day.innerHTML = `Date : ${d}`;
    h = date.getHours();
    hours.innerHTML = `Time : ${h} Hours`;
    m = date.getMinutes();
    minutes.innerHTML = `${m} Mins`;
    s = date.getSeconds();
    seconds.innerHTML = `${s} Secs`;
},1000)
// let date = new Date();
// let d = date.getDate() +" "+ months[date.getMonth()] + " " + date.getFullYear()
// let h = date.getHours()
// let m = date.getMinutes()
// let s = date.getSeconds()



let clock = document.getElementById("clock");

let day = document.createElement("h2");
// day.innerHTML = `Date : ${d}`
day.style.display="inline"
day.style.margin="30px"
clock.appendChild(day)

let hours = document.createElement("h2");
// hours.innerHTML = `${h} Hours`
hours.style.display="inline"
hours.style.margin="30px"
clock.appendChild(hours)

let minutes = document.createElement("h2");
// minutes.innerHTML = `${m} Mins`
minutes.style.display="inline"
minutes.style.margin="30px"
clock.appendChild(minutes)

let seconds = document.createElement("h2");
// seconds.innerHTML = `${s} Secs`
seconds.style.display="inline"
seconds.style.margin="30px"
clock.appendChild(seconds)