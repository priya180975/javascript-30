window.addEventListener("keydown",playsound,false)

function playsound(e)
{
    console.log(e.keyCode)
    // a=65 s=83 d=68 f=70 g=71 h=72 j=74 k=75 l=76

    if([65,83,68,70,71,72,74,75,76].includes(e.keyCode))
    {
        let selectedkey=document.querySelector(`[data-key="${e.keyCode}"]`)
        selectedkey.classList.add("animate")
        setTimeout(function(){selectedkey.classList.remove("animate")},200)
    }
    
}