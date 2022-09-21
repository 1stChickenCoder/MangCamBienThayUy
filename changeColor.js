var check = 0;
var checked = false;
// var valueContent = document.getElementById("content");
var valueTemp = 0;
// var boxIn = 1;
function changeHandler(evt){
    var backgroundDiv = document.getElementById("content");
    var arr = ['#66d4fc', '#006ef8', '#0745f8',
    '#a6fb84','#57fa23','#00e033',"#ffd800",
    "#fea601","#fe8114","#fe1d02","#cc0171","#9800cb"];
    // console.log(evt.target.value);
    // boxIn = evt.target.value;
    backgroundDiv.style.background = arr[evt.target.value]
}
// console.log(boxIn);
// function changeBgColor(e){
//     var arr = ['#66d4fc', '#006ef8', '#0745f8',
//     '#a6fb84','#57fa23','#00e033',"#ffd800",
//     "#fea601","#fe8114","#fe1d02","#cc0171","#9800cb"];
//     // e.target.style.background = arr[boxIn];
//     // div.style.background = arr[boxIn];
// }
function wheelHandler(evt)  {
    var valueTemperatue = document.getElementById("valueTemperature");
    // var inputValue = document.getElementById("inputValue");
    var arr = ['#66d4fc', '#006ef8', '#0745f8',
    '#a6fb84','#57fa23','#00e033',"#ffd800",
    "#fea601","#fe8114","#fe1d02","#cc0171","#9800cb"];
    var fontSize = evt.target.style.fontSize;// 12px, 13px,...
    var colorP = evt.target.style.background;
    var valueColor = "";
    // var value = Number(fontSize.substr(0, fontSize.length-2)); // 12, 13,..
    console.log("target :",evt.target)
    // console.log("value :",value)
    if (evt.deltaY < 0) {
        if (valueTemp % 10 === 0) {
            check++
        }
        valueColor = arr[check]
        // if (check === arr.length) {
        //     checked = true;
        // }
        // else if (check ===0 ){
        //     checked=false;
        // }
        
        // if (checked === false) {
        //     check++;
        // }
        // else {
        //     check--;
        // }
        valueTemp++;
    }
    if(evt.deltaY > 0)  {
        if (valueTemp % 10 === 0) {
            check--
        }
        valueColor = arr[check]
        // if (check === arr.length) {
        //     checked = true;
        // }
        // else if (check ===0 ){
        //     checked=false;
        // }
        
        // if (checked === false) {
        //     check++;
        // }
        // else {
        //     check--;
        // }
        valueTemp--;
    }
    valueTemperatue.innerHTML = valueTemp + "°C"
    
    // evt.target.style.fontSize = value;
    // console.log(value);
    evt.target.style.background = valueColor;
    // value.
 }
 