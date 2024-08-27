var speechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognitionAlternative();

function start() {
    document.getElementById("text-box").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    var Content = event.results[0][0].transcript;

    document.getElementById("text-box").innerHTML = content;
    console.log(Content);
    if(Content == "toma mi selfie ---")
    {
        speak() 
    }
        
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Tomando tu selfie en 5 minutos ...";
}