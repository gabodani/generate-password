const btnone=document.querySelector("#generate");
const btntwo=document.querySelector("#copy");

btnone.addEventListener('click',()=>generatepass());
btntwo.addEventListener('click',()=>copypass())

function generatepass(){
    let chars="0123456789abcdefjhijklmnoopqrstuvwxyz!@#$%^&*:><?~+_-=ABCDEFJHIJKLMNOPQRSTUVWXYZ";
    passlength=8;
    password="";
    for(let i=0;i<=passlength;i++){
        let randompass=Math.floor(Math.random()*chars.length);
        password+=chars.substring(randompass,randompass+1);
    }
    document.getElementById("pass").value=password  
}

function copypass(){
    let copytext=document.getElementById("pass")
    copytext.select();
    document.execCommand('copy');
}