const colordiv = document.getElementById("colordiv");
const myBtn =  document.getElementById("my-btn");
//console.log(colordiv + textinput);
console.log(myBtn);

let myArr=[];
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
    myArr.push(colorArray[previndex]);
    colordiv.style.backgroundColor=colorArray[index];
    x++;
    if(x==16){
        clearInterval(myInterval);
        console.log(myArr);
         myArr.map((item,index) => {
            var name = document.createElement('div');
            name.innerHTML=index + " : "+ item ;
            name.style.color=item;
           
            
            document.getElementById("colDiv").appendChild(name);
        });
        console.log(document.getElementById("colDiv"));
    }

}
function clickHandlar(){
    console.log("function called");
    myBtn.style.display="none";
    const time =  document.getElementById("time").value;
    console.log(time);
    myInterval = setInterval(everyTime,time || 1000);
}