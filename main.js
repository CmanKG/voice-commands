function setup(){
    canvas=createCanvas(900,600)
}
x=0
y=0
drawcircle=""
drawrectangle=""
var SpeechRecognition=window.webkitSpeechRecognition
var recognition=new SpeechRecognition()
function start(){
document.getElementById("status").innerHTML="system is listening please speak"
recognition.start()
}
recognition.onresult=function(event){
    console.log(event)
    var content=event.results[0][0].transcript
    document.getElementById("status").innerHTML="speech has been recognised as"+content
    if (content=="circle") {
       x=Math.floor(Math.random()*900) 
       y=Math.floor(Math.random()*600)
    document.getElementById("status").innerHTML="started drawing circle"
    drawcircle="set"   
    }
    if (content=="rectangle") {
        x=Math.floor(Math.random()*900) 
        y=Math.floor(Math.random()*600)
     document.getElementById("status").innerHTML="started drawing rectangle"
     drawrectangle="set"   
     }
    }
     function draw(){
        if (drawcircle=="set") {
        radius=Math.floor(Math.random()*100) 
        circle(x,y,radius)
        document.getElementById("status").innerHTML="circle is drawn"
        drawcircle=""
        }
        if (drawrectangle=="set") {
            rect(x,y,40,80)
            document.getElementById("status").innerHTML="rectangle is drawn"
            drawrectangle=""
            }
     }
