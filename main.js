const daysM = document.getElementById('days');
const hoursM = document.querySelector('#hours');
const minsM = document.querySelector('#mins');
const secsM = document.querySelector('#secs');

const launch = '1 jan 2023';

function countDown(){
    const launchDate = new Date(launch);
    const currentDate = new Date();

    const totalSeconds = (launchDate - currentDate) /1000;
    const days = Math.floor(totalSeconds / 3600 /24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const secs = Math.floor(totalSeconds) % 60;

    daysM.textContent = formatTime(days);
    hoursM.textContent = formatTime(hours);
    minsM.textContent = formatTime(mins);
    secsM.textContent = formatTime(secs);

}

function formatTime(time){
    return time < 10 ? `0${time}` : time
}

countDown();
setInterval(countDown, 1000);