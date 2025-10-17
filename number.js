const button=document.getElementById("b1");
const label1=document.getElementById("l1");
const label2=document.getElementById("l2");
const label3=document.getElementById("l3");
const min=0,max=8;
let randomnum1;
let randomnum2;
let randomnum3;
button.onclick=function(){
    randomnum1=Math.floor(Math.random() * (max - min + 1)) + min;
    randomnum2=Math.floor(Math.random() * (max - min + 1)) + min;
    randomnum3=Math.floor(Math.random() * (max - min + 1)) + min;
    label1.textContent=randomnum1;
    label2.textContent=randomnum2;
    label3.textContent=randomnum3;

}