const stars = document.getElementById('stars') ;
const moon = document.getElementById('moon') ;
const mountains3 = document.getElementById('mountains3') ;
const mountains4 = document.getElementById('mountains4') ;
const river = document.getElementById('river') ;
const boat = document.getElementById('boat') ;
const dzShadow = document.querySelector(".dz_shadow");


let sizePx = 30;

      
window.onscroll = function(){
    let value = scrollY;
    // console.log(value);
    for (let i = 0; i <=20; i++) {
        dzShadow.style.fontSize = i+sizePx + "px";
       }
   if (value <= 200) {
    dzShadow.style.fontSize = sizePx + "px";
   }
   if (value >= 350) {
       dzShadow.style.position = "fixed";
       dzShadow.style.top = "20%";

   }else{
    dzShadow.style.position = "relative";

    for (let i = 0; i <=20; i++) {
        let sizePx = 50;
        dzShadow.style.fontSize = sizePx - i + "px";
       }
       
       dzShadow.style.top = "70%";
   }
    stars.style.left = value + 'px';
    moon.style.top = value * 2 + 'px';
    mountains3.style.top = value + 'px';
    mountains4.style.top = value + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value + 'px';
    if(value >=450){
        moon.style.display = "none";
        mountains3.style.display = "none";
        mountains4.style.display = "none";
        moon.style.bottom = value * 2 + 'px';
    }
    else{
        moon.style.display = "block";
        mountains3.style.display = "block";
        mountains4.style.display = "block";
    }

    if(value >= 350){
        document.body.style.background = "linear-gradient(#3e70df, #200016)";
        stars.style.display = "none";
    }
    else{
        document.body.style.background = "linear-gradient(#200016, #10001f)";
        stars.style.display = "block";
    }


    

   
}