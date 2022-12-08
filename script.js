var colors=["Blue","Green","Red","Yellow"];
var checkMark=document.querySelector('#checkMark');
var wrong=document.querySelector('#wrong');
var correctlyAnswered=document.querySelector('.correct');
var correctInt=0;
function checkColor(color,correctAnswer){
    try {
        if(color===correctAnswer){
            correctInt=correctInt+1;
            checkMark.classList.remove("fadeAway");
        }else{
            wrong.classList.remove("fadeAway");
        }
        setTimeout(() => {
            checkMark.classList.add("fadeAway");
            wrong.classList.add("fadeAway");
        }, 500);
        reset();
        correctlyAnswered.innerHTML=correctInt;
    } catch (error) {
        console.log(error)
    }
   
}

const reset=()=>{
    try {
        var random1=Math.floor(Math.random()*2);
        if (random1==0){
            var color1=document.querySelector(".color1");
            var color2=document.querySelector(".color2");
        }else{
            var color1=document.querySelector(".color2");
            var color2=document.querySelector(".color1");
        }
        document.querySelector("#start").style.display="none";
        var random=Math.floor(Math.random()*4);
        var correctAnswer=colors[random];
        color1.innerHTML=correctAnswer;
        color2.style.color=correctAnswer;
        if(random+1==4){
            color2.innerHTML=colors[random-3];
        }else{
            color2.innerHTML=colors[random+1];
        }
        if(random-1==-1){
            color1.style.color=colors[random+3];
        }else{
            color1.style.color=colors[random-1];
        }
        color1.style.display="block";
        color2.style.display="block";
        addClick("Blue",correctAnswer);
        addClick("Green",correctAnswer);
        addClick("Red",correctAnswer);
        addClick("Yellow",correctAnswer);
    
    } catch (error) {
        console.log(error)
    }
   

}
function addClick(color,correctAnswer){
    var colorspan=document.getElementById(color);
    let onclick=
    "checkColor('".concat(color,"','",correctAnswer,"')");
    colorspan.setAttribute("onClick",onclick);
    

}


countDown=30;
const startGame=()=>{
setInterval(timer,1000);
document.querySelector('.time').style.display="block";
document.querySelector('.correct').style.display="block";

reset();

}
const timer=()=>{
    document.querySelector('.time').innerHTML=countDown;
    if(countDown==0){
        clearInterval(timer);
        alert(`Game Over. Your Score : ${correctInt}`);
        location.reload()
    }
    countDown--;

}