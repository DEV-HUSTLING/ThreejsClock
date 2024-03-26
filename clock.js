function numberh(event){
    if(event.target.value > 12){
        alert("keep it below 12")
    }
     textarea.value.match(/^\d+(\.\d+)?$/);
}
function numberm(event){
    return textarea.value.match(/^\d+(\.\d+)?$/);
}
function numbers(event){
    return textarea.value.match(/^\d+(\.\d+)?$/);
}

function startCountdown() {
    var hours = document.querySelector(".th").value;
    var minutes = document.querySelector(".tm").value;
    var seconds = document.querySelector(".ts").value;

    var totalSeconds = hours * 3600 + minutes * 60 + seconds * 1;

    var countdownInterval = setInterval(function() {
        if (totalSeconds <= 0) {
            clearInterval(countdownInterval);
            var audio = new Audio('audio_file.mp3');
            audio.play();
            setTimeout(function() {
                alert("TimeOut!!")
                audio.pause();
            },5000);
            document.getElementById("timer_inp").style.visibility = "hidden";
        } else {
            hours = Math.floor(totalSeconds / 3600);
            minutes = Math.floor((totalSeconds % 3600) / 60);
            seconds = totalSeconds % 60;

            document.querySelector(".th").value = hours;
            document.querySelector(".tm").value = minutes;
            document.querySelector(".ts").value = seconds;

            totalSeconds--;
        }
    }, 1000);
}
function clock() {
    const time =new Date();
    let hours  = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    if(min.toString().length<2){
        document.querySelector(".minute1").innerHTML =  0
        document.querySelector(".minute2").innerHTML =  min
    }
    else if(min.toString().length==2){
        const digits = min.toString().split('');
        document.querySelector(".minute1").innerHTML =  digits[0];
        document.querySelector(".minute2").innerHTML =  digits[1];
    }
    if(hours.toString().length<2){
        document.querySelector(".hour1").innerHTML =  0
        document.querySelector(".hour2").innerHTML =  hours
    }
    else if(hours.toString().length==2){
        const digits = hours.toString().split('');
        document.querySelector(".hour1").innerHTML =  digits[0];
        document.querySelector(".hour2").innerHTML =  digits[1];
    }
    if(sec.toString().length<2){
        document.querySelector(".sec1").innerHTML =  0
        document.querySelector(".sec2").innerHTML =  sec
    }
    else if(sec.toString().length==2){
        const digits = sec.toString().split('');
        document.querySelector(".sec1").innerHTML =  digits[0];
        document.querySelector(".sec2").innerHTML =  digits[1];
    }
    let currentTime = hours+":"+min+":"+sec
    // document.querySelector(".clock").innerHTML =  hours.toString().length
    
}
setInterval(clock, 1000);
