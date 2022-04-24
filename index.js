for(var i=0;i<7;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var buttoninner=this.value;
        makesound(buttoninner);
        buttonani(buttoninner);
    });
}
document.addEventListener("keypress",function(e){
    makesound(e.key);
    buttonani(e.key);
})
function makesound(buttoninner){
    switch(buttoninner){
        case "w":
            var audio=new Audio("sounds/choti bacchi.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/angrychinu.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("sounds/nice.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("sounds/majaaagya.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("sounds/hehe.mp3");
            audio.play();
            break;
        // case "k":
        //     var audio=new Audio("sounds/crash.mp3");
        //     audio.play();
        //     break;
        // case "l":
        //     var audio=new Audio("sounds/kick-bass.mp3");
        //     audio.play();
        //     break;
    }
}
function buttonani(curr){
    var active=document.querySelector("."+curr);
    active.classList.add("pressed");
    setTimeout(function(){
        active.classList.remove("pressed");
    },100);

}