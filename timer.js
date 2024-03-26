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