const noBtn = document.getElementById('no');
const yesBtn = document.getElementById('yes');
const ques = document.getElementById('question');
const reload = document.getElementById('reload');

reload.style.display = "none";

noBtn.addEventListener("click", ()=> {
    let rand = Math.floor(Math.random() * (300 - 100) + 1);
    let rand2 = Math.floor(Math.random() * (-150 - 100) + 1);
    noBtn.style.transform = "translate("+rand+"px,"+rand2+"px)";
});

yesBtn.addEventListener("click", ()=>{
    ques.innerHTML = "Wala eh ako na to eh. HAHAHAHAHA CHZ";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    reload.style.display = "block";
});