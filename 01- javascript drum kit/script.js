window.addEventListener("keydown",playsound)

function playsound(e)
{
    if([65,83,68,70,71,72,74,75,76].includes(e.keyCode))
    {
        let selectedkey=document.querySelector(`[data-key="${e.keyCode}"]`)
        selectedkey.classList.add("animate")
        setTimeout(function(){selectedkey.classList.remove("animate")},200)

        let type=selectedkey.children[1].innerHTML;

        var audio=new Audio(`../sounds/${type}.wav`)
        audio.play()
    }
}