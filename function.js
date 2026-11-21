let OpenButton = 
document.getElementById 
("letter-open")
let letter = 
document.getElementById
("letter")
let div1w = 
document.getElementById 
("letterlabel")
let word2 =
document.getElementById
("a1")
let letterbox2 = [OpenButton, letter, div1w, word2]
let audio = new Audio("yipee.mp3")
let mainletter = 
document.getElementById("mmm")
let topletter = 
document.getElementById("hehe")
let main = 
document.getElementById("www")
let decor1 =
document.getElementById("flower")
let decor2 = 
document.getElementById("branch")
let Mm2 =
document.getElementById("hehe")
let Mm3 = 
document.getElementById("pepe")
let last = [main, topletter, mainletter, decor1, decor2, Mm2, Mm3].flat();
let bgmusic = document.getElementById("bgmusic");

bgmusic.volume = 0.3;

letterbox2.forEach(function(element) {element.style.display = "none"});
  
last.forEach(function(element){
    element.style.display= "none";
});

OpenButton.onclick = function()  {
    letter.style.animation = "fade-out 2s ease 0s forwards";
    div1w.style.animation = "fade-out 2s ease 0s forwards";
    word2.style.animation = "fade-out 2s ease 0s forwards";
    OpenButton.style.display = "none";
    audio.currentTime = 0;
   audio.play();
   
   last.forEach(function(element){
       element.style.display = "block";
   });
   main.style.animation = "fade-in 2s ease 0s forwards";
   topletter.style.animation = "fade-in 2s ease 0s forwards";
   mainletter.style.animation = "fade-in 2s ease 0s forwards";
   decor1.style.animation = "fade-in 2s ease 0s forwards";
   decor2.style.animation = "fade-in 2s ease 0s forwards";
   
      bgmusic.play()
}

let passdiv = 
document.getElementById
("entrance")   
let pass = 
document.getElementById
("pass") 
let name = 
document.getElementById
("name")
let enter = 
document.getElementById
("inter")
let heart1 = 
document.getElementById
("heart")
let heart2 = 
document.getElementById
("heart2")
let headline1 = 
document.getElementById
("Guess")

let Bruh = new Audio("Bruhhh.mp3")
let sh1 = new Audio("heart1.mp3")
let sh2 = new Audio("heart 2.mp3")
let Fah = new Audio("FAHHH.mp3")
let hooray = new Audio("hooray.mp3")
let spf = new Audio("Spongeob.mp3")

let failsound = [Bruh, Fah, spf ]
let inputs = [passdiv, pass, name, enter, heart1, heart2, headline1, Bruh, sh1, sh2, Fah, hooray, spf]
let hideips = [Bruh, sh1, sh2, Fah, hooray]


enter.onclick = function() {
    if (
        name.value === "Michiko Jin C. Nakayama" &&
        pass.value === "030925") 
    {
       
        hooray.play();
        hooray.currentTime = 0;
        
        letterbox2.forEach(function(element){
      element.style.animation = "fade-in 2s ease 0s forwards";})
     

      
        
        inputs.forEach(function(element){
       element.style.animation="fade-out 2s ease 0s forwards";});
       inputs.forEach(function(element){
       element.style.display = "none"
         });
         letterbox2.forEach(function(element) {
             element.style.display = "block";
         });
       }
     else {

        let randomfail = Math.floor(Math.random() * failsound.length)
        

failsound[randomfail].currentTime = 0;
failsound[randomfail].play();


    }
}


heart1.onclick = function() {
sh1.currentTime = 0;
    sh1.play();
    
}
heart2.onclick = function() {
    sh2.play();
    sh2.currentTime = 0; 
}
let particles = 
document.getElementById
("particles")
let particle =
document.createElement
("div")  
