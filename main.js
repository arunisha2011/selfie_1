var speechRecognition=window.webkitSpeechRecognition
var recognition=new speechRecognition()
function Start(){
document.getElementById("textbox").innerHTML=" "
recognition.start()
}
recognition.onresult=function Run(event){
console.log(event)
var text_content=event.results[0][0].transcript
console.log(text_content)
document.getElementById("textbox").innerHTML=text_content
}
