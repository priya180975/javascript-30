let secondHand=document.querySelector(".sec")
let minuteHand=document.querySelector(".min")
let hourHand=document.querySelector(".hour")
let timeDisplay=document.querySelector("#time-display")

setInterval(
    function(){ 
        const d = new Date();   
        const minute = d.getMinutes()
        const hour = d.getHours()
        const second =d.getSeconds()
        
        let end=hour>12?"PM":"AM"
        let secc=second<10?`0${second}`:`${second}`

        timeDisplay.innerHTML=`${hour/2 -1}:${minute}:${secc} ${end}`

        secondHand.setAttribute('style',`transform:rotate(${second*6+180}deg)`)
        minuteHand.setAttribute('style',`transform:rotate(${minute*6+180}deg)`)
        hourHand.setAttribute('style',`transform:rotate(${hour*30+180}deg)`)
    }
,1000)


