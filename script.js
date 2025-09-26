
const hr=document.querySelector("#hr");
const min=document.querySelector("#min");
const sec=document.querySelector("#sec");
setInterval(() => {
    let d= new Date();
    hr.innerText=d.getHours();
    min.innerText=d.getMinutes();
    sec.innerText=d.getSeconds();
    }, 1000);
