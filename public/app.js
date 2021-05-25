
function pageChange(){
    window.location.assign("timer.html")
    console.log("ss")
}

// let getHours = document.getElementById("hour");
let getMin = document.getElementById("min");
let getSec = document.getElementById("sec");
let getMsec = document.getElementById("msec");

// let hour = parseInt(getHours.value);


let min ;
let sec;
let msec ;
let interval;

function getValue(){
    
    min = parseInt(getMin.value);
    sec = parseInt(getSec.value);
    msec = parseInt(getMsec.value);
}


function timer() {
    
        msec++
        getMsec.value = msec
        if (msec == 100) {
            sec--
            getSec.value = sec
            msec = "00"
        }
        else if (sec <= 0) {
            min--
            getMin.value = min
            sec = 60
    
        }
        
        if(min == 0 && sec == 0 ){
            clearInterval(interval)
            // hour = "00"
            msec = "00"
            min = "00"
            sec = "00"
            getMin.value = min
            getSec.value = sec
            getMsec.value = msec
            var startbtn = document.getElementById("startbtn").disabled = false

            
        }
            
    
    

    
}


function start() {
    if(getMin.value <=  00 && getSec.value <= 00){
        alert("Pleaes enter a value")
        
    }
    else{
    interval = setInterval(timer, 10)
    // alert("values")
    var startbtn = document.getElementById("startbtn").disabled = true
}
}


function pause(){
    clearInterval(interval)
    var startbtn = document.getElementById("startbtn").disabled = false

}
function resett(){

    clearInterval(interval)
    min = "00";
    sec = "00";
    msec = "00";

    getMin.value = min
    getSec.value = sec
    getMsec.value = msec

}

// function valueChange(){
//     let min = getMin.value
//     console.log(min)

// }



// var dated = new Date( 0 , 0 , 0 ,  hour ,min , sec ).getTime();
// var now = new Date().getTime()
// console.log(dated)
// var differ = now - dated

// var day = Math.floor(differ / (1000*60*60*24));
// var datedHours = Math.floor(differ % (1000*60*60*24) / (1000*60*60)) ;
// var datedMin = Math.floor(differ % (1000*60*60) / (1000*60)) ;
// var datedSec = Math.floor(differ % (1000*60) / (1000)) ;
// console.log(datedHours)
// console.log(datedMin)
// console.log(datedSec)


// function stopWatch() {
//     msec++
//     getMsec.value = msec
//     if (msec >= 100) {
//         sec++
//         getSec.value = sec
//         msec = 0
//     }
//     else if (sec >= 5) {
//         min++
//         getMin.value = min
//         sec = 0
//     }
//     else if (min >= 5) {
//         hour++
//         getHours.value = hour
//         min = 0
//     }


// }
// console.log((sec))
