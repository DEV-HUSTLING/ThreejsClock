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
