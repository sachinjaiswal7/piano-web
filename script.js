let keys = document.querySelectorAll(".key");
keys.forEach((e)=>{
   
   e.addEventListener("click",()=>playAudio(e))
})

function playAudio(elem){
    elem.classList.add("active")
    let audioElem = document.getElementById(elem.dataset.note);
  audioElem.currentTime = 0;
    audioElem.play();
    audioElem.addEventListener("ended",()=>{
        elem.classList.remove("active");
    })
}
const WHITE_KEYS = ['z','x','c','v','b','n','m'];
const BLACK_KEYS = ['s','d','g','h','j'];
let whites = document.querySelectorAll(".key.white")
let blacks = document.querySelectorAll(".key.black")

document.addEventListener("keydown",e=>{
   let key = e.key
   let whiteIndex = WHITE_KEYS.indexOf(key);
   let blackIndex = BLACK_KEYS.indexOf(key);
   if(whiteIndex!=-1) playAudio(whites[whiteIndex]);
   if(blackIndex!=-1)playAudio(blacks[blackIndex])

})