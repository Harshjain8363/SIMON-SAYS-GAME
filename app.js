let level = -1;
let h2 = document.querySelector("h2");

let userseq = [];
let gameseq = [];
let started = false;
let btns = ["purple","pink","skyblue","yellow"];
let highestScore = 0;
let currentScore = level;

document.addEventListener("keypress",function(){
    reset();
    if(started==false){
        console.log("Game started!");
        started = true;
        levelup();
    }
})

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 100);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 100);
}

let h4 = document.querySelector("h4");

function levelup(){
   
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    h4.innerHTML = `Current Score : ${level}`;

    let randnum = Math.floor(Math.random()*3);
    let randcol = btns[randnum];
    let randbtn = document.querySelector(`.${randcol}`);
    //console.log(randnum + 1);
    //console.log(randcol);
    //console.log(randbtn);
    gameseq.push(randcol);
    console.log(gameseq);
    gameflash(randbtn);
}

let h3 = document.querySelector("h3");

function reset(){
    
    started = false;
    gameseq = [];
    userseq = [];
    level = -1;
}

function checkans(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML = `Game over!`;
        setTimeout(() => {
            h2.innerHTML = `Your score is <b>${level}</b>. <br> Press any key to start.`;
        }, 2000);
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function()  {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        if(level > highestScore){
            highestScore = level;
            h3.innerHTML = `Highest Score : ${level}`;
        }
        
    }
    
}

function btnpress(){
    //console.log(this);
    let btn = this;
    userflash(btn);
    usercol = btn.getAttribute("id");
    userseq.push(usercol);

    checkans(userseq.length-1);
} 

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

