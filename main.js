var SpeechRecognition=window.webkitSpeechRecognition; 
var recognition=new SpeechRecognition();
function start() {
    document.getElementById("textbox").innerHTML="";
    recognition.start(); 
} 
recognition.onresult=function(event){
    console.log(event);
    var Content=event.results[0][0].transcript; 
    console.log(Content);
    document.getElementById("textbox").innerHTML="Content";
    if(Content=="Toma mi selfie"){
        console.log("Tomando selfie...")
        speak(); 

    }
} 
function speak() {
var synth=window.speechSynthesis;

var speak_data="tomando selfie en 3 segundos";
var utterThis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis); 
Webcam.attach(camera); 
setTimeout(function() {
    take_snapshot();
    save();
}, 3000);
} 
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:120
});
camera=document.getElementById("camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="selfie_image">'; 

    });
} 
function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
link.href=image;
link.click();

}