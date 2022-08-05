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
        
        let end=hour>11?"PM":"AM"
        let hr=hour?hour>12?hour%12:hour:12
        function add0(num)
        {
            return num<10?`0${num}`:`${num}` 
        }

        timeDisplay.innerHTML=`${add0(hr)}:${add0(minute)}:${add0(second)} ${end}`

        function backTo0(secondHand)
        {
            secondHand.style.transform = "rotate(360deg)";
            setTimeout(function() {
                secondHand.style.transition = "0s linear";
                secondHand.style.transform = "rotate(0deg)";
            },
            50);
        }

        secondHand.setAttribute('style',`transform:rotate(${second==0?backTo0(secondHand):second*6}deg)`)
        minuteHand.setAttribute('style',`transform:rotate(${minute*6}deg)`)
        hourHand.setAttribute('style',`transform:rotate(${hour*30}deg)`)
    }
,1000)