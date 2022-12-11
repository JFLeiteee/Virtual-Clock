function virtualClock () {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours == 0){
        hours = 12;
    }

    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    
    let time = hours + ':' + minutes + ':' + seconds; 

    document.getElementById('clock').innerText = time;

    let tempo = setTimeout(function() {virtualClock()}, 1000);
}

virtualClock();

// function virtualTimer() {
//     let hours = getHours();
//     let minutes = getMinutes();
//     let seconds = getSeconds();
    
//     if (hours == 0) {
//         hours = 12;
//     }

//     hours = (hours < 10) ? '0' + hours : hours;
//     minutes = (minutes < 10) ? '0' + minutes : minutes;
//     seconds = (seconds < 10) ? '0' + seconds : seconds;
    
//     let time = hours + ':' + minutes + ':' + seconds;
//     document.getElementById('clock').innerText = time;

//     let tempo = setTimeout(function() {virtualTimer()}, 1000);
// }

// virtualTimer();