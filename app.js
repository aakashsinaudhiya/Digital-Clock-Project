const Time = document.getElementById('time');
const timeformat = document.getElementById('timeformat');


document.addEventListener('DOMContentLoaded', () => {
    setInterval(showTime, 1000);
})


const showTime = () => {

    const date = new Date();


    let hr = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    
    hr = hr<10 ? `0${hr}`:hr;
    mins = mins<10 ? `0${mins}`:mins;
    secs = secs<10 ? `0${secs}`:secs;

    timeformat.innerHTML = hr>12 ? "AM" : "PM";

    Time.innerHTML = `${hr} : ${mins} : ${secs}`;
    
}