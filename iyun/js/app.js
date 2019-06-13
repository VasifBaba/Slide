let box = document.getElementById("box");
let sag = document.getElementById("sag");
let sol =document.getElementById("sol")
let pos = 0;

sag.addEventListener('click', sagbox);
sol.addEventListener('click', solbox)

function sagbox(){
    pos++;
    let leftPos=-(1140*pos)+"px"
    if(box.querySelectorAll ("#box li").length>pos){
        box.querySelector("#box ul").style.left=leftPos;
    }
    else{
        pos=0;
        box.querySelector("#box ul").style.left=0;
    }
}
function solbox(){
    pos--;
    if(pos==-1){
        pos=box.querySelectorAll("#box li").length-1;
    }
    
        box.querySelector(" ul").style.left=-(1140*pos)+"px"

}