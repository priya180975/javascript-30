var root=document.querySelector(':root')
let inputs=document.querySelectorAll(".inputs input")

inputs.forEach(el=>el.addEventListener("input",altered))
function altered()
{
    let end=this.dataset.end||''
    root.style.setProperty(`--${this.name}`,`${this.value}${end}`)
}