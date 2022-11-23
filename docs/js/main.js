let btn=document.getElementById("btn");
let list=true;

btn.addEventListener("click",function(){
    console.log("clicked");
    let show=document.getElementsByClassName("manu-phone")[0];
    
    if(list){
        show.style.display="block";
        show.style.animation="transitionIn 2.1s";
        list=!list;
    }
    else{
        show.style.display="none";
        list=!list;
    }
})