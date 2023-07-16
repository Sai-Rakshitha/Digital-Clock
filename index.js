const hour=document.getElementById("hours");
const min=document.getElementById("mins");
const sec=document.getElementById("secs");
const ap=document.getElementById("ampm");

function updateclock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm="AM"

    if(h>12){
        h=h-12;
        ampm="PM"
    }
    h=(h<10)?"0"+h:h;
    m=(m<10)?"0"+m:m;
    s=(s<10)?"0"+s:s;

    hour.innerText=h;
    min.innerText=m;
    sec.innerText=s;
    ap.innerText=ampm;
    
    setTimeout(()=>{
        updateclock();
    },1000)

}
updateclock();