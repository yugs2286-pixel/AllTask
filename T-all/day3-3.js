var date = new Date("2026-01-20T00:00:00") / 1000;
function setClock() {
    var New = new Date() / 1000;
    var totalSec =  date - New;
    var h = parseInt( totalSec / 3600 )
    var m = parseInt( totalSec / 60 ) % 60;
    var s = parseInt(totalSec % 60, 10);
    var result = h + " hours, " + m + " minutes " + s + " seconds";
    document.getElementById('timeRemaining').innerHTML = result;
    setTimeout(setClock, 1000);
}
document.write(setClock());


// for responsive @media (min-width: 768px) {
//     body {
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         height: 550px;
//     } 

//  ascii value charCodeAt(0)
