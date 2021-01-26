var imags=[];
var slider;
var imgAtual;
var maxImg;
var tmp;

function preCarregameto(){
    var s=1;
    for(var i=0;i<2;i++){
        imags[i]=new Image();
        imags[i].src="s"+s+".jpg";
        s++;
    }
}
function carregarImg(img){
    slider.style.backgroundImage="url('"+imags[img].src+"')"
}
function inicia(){
    preCarregameto();
    imgAtual=0;
    maxImg=imags.length-1;
    slider=document.getElementById("ctn_slider");
    carregarImg(imgAtual); 
    tmp=setInterval(troca,3000);
}
function troca(){
    imgAtual++;
    if(imgAtual>maxImg){
        imgAtual=0;
    }
    carregarImg(imgAtual);
}
function scroll(){
    let btn= document.getElementById("btnTop")
    if(document.documentElement.scrollTop > 50){
        btn.style.display="block";
    }
    else{
        btn.style.display="none";
    }
}
function backTop(){
    document.documentElement.scrollTop = 0;
}
window.onscroll=function(){
    scroll();
}

window.addEventListener("load",inicia);

if (window.onload) {
    document.getElementById("teste").innerText="A pagina foi carregada";
}else{
    document.getElementById("teste").innerText="A pagina não foi carregada ";
}
