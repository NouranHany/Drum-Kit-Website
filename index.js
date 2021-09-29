//Change nodelist to Array
//to be able to apply the indexOf method on the list
var buttonsList = Array.from(document.querySelectorAll(".drum"));

var keys = ['w','a','s','d','j','k','l'];
var soundFiles = ['crash.mp3','kick-bass.mp3','snare.mp3','tom-1.mp3','tom-2.mp3','tom-3.mp3','tom-4.mp3'];

for(var i=0; i< buttonsList.length; i++){
  buttonsList[i].addEventListener("click", function (){
    var buttonIndex = buttonsList.indexOf(this);
    playSound(buttonIndex);
    buttonAnimation(buttonIndex);
  });
}


document.addEventListener("keydown",function(e){
  var keyIndex = keys.indexOf(e.key);
  playSound(keyIndex);
  buttonAnimation(keyIndex);
});

function playSound(index){
  var audio = new Audio('sounds/'+soundFiles[index]);
  audio.play();
}

function buttonAnimation(index){
  var activeButtonElement = buttonsList[index];
  activeButtonElement.classList.add("pressed");
  setTimeout(function(){activeButtonElement.classList.remove("pressed");}
              ,100);
}
