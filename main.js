const colordiv = document.getElementById("colordiv");
const textinput =  document.getElementById("start-input");
console.log(colordiv + textinput);
console.log(textinput);


colordiv.style.backgroundColor="blue";
let x=0;
let previndex=5;
let myInterval;
function everyTime() {
    var colorArray = ["blue","red","green","yellow"];
    let index = Math.floor(Math.random()*4);
    while(index == previndex)
    {
        index = Math.floor(Math.random()*4);
    }
    previndex=index;
    console.log(colorArray[previndex]);
    colordiv.style.backgroundColor=colorArray[index];
    x++;
    if(x==16)
        clearInterval(myInterval);

}
function myKeyUpFunction(){
    console.log("function called");
    myInterval = setInterval(everyTime, 1000);
}