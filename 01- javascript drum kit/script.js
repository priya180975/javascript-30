window.addEventListener("keydown",playsound)
let keys=document.querySelectorAll(".keys")
keys.forEach(k=>k.addEventListener("click",function(){playsound(k)}))

function playsound(e)
{
    let keyCode=e.keyCode||parseInt(e.dataset.key)
    if([65,83,68,70,71,72,74,75,76].includes(keyCode))
    {
        let selectedkey=document.querySelector(`[data-key="${keyCode}"]`)
        selectedkey.classList.add("animate")
        setTimeout(function(){selectedkey.classList.remove("animate")},200)

        let type=selectedkey.children[1].innerHTML;

        var audio=new Audio(`sounds/${type}.wav`)
        audio.play()
    }
}