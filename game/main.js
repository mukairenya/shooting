document.getElementById("txt").innerText="これはゲームです";
const canvas=document.getElementById("gameCanvas")
const ctx=canvas.getContext("2d");

//fillRect(x座標(横),y座標(縦),横幅,縦幅)

//自分のキャラクターに見立てた四角形をとりあえず作ろう。

//width="480"height="640"
let keydown=225;
let y=40;
let a=60;
let tama=225
window.addEventListener("keydown",(e)=> {
    if(e.key==="ArrowLeft"){
        keydown-=10;
    }else if(e.key==="ArrowRight"){
         keydown+=10;
    }else if(e.key==="Space"){
        tama +=1;
    }
    });
    window.addEventListener("keydown",(e)=> {
    if(e.key==="Space"){
        tama +=1;
    }
});
function gameLoop(){
ctx.fillStyle="black";
ctx.fillRect(0,0,canvas.width,canvas.height);
ctx.fillStyle="blue";
ctx.fillRect(keydown,480,30,30);
ctx.fillStyle="red";
ctx.fillRect(40,y,30,30);
ctx.fillStyle="red";
ctx.fillRect(180,a,30,30);
keydown +=1;
y +=3;
a +=5;
ctx.fillStyle="blue";
ctx.fillRect(keydown+10,480-tama*10,10,10);

requestAnimationFrame(gameLoop);
}

gameLoop();


