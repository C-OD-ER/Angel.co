// Counter js
const Counter = document.querySelector(".counter");
const incrementSpeed = 100;
const updateCounter = () =>{
         const finalValue = 6000000;
         const countString = Counter.innerText.replace(/\D/g,'');
         const countInt = parseInt(countString);
   
         const incrementValue = finalValue/incrementSpeed;
      
         if(countInt < finalValue){
   
            Counter.innerText = (countInt+incrementValue).toLocaleString();
            setTimeout(updateCounter, 200);
   
         } else{
            countString.innerText=finalValue;
         }
      }

loadMatchesMade = () => {
    if (window.scrollY > 390) {
        updateCounter();
    }
};
window.addEventListener("scroll", () => loadMatchesMade(), true);



// Onclick js


var check = false;
function clickFunction() {
    check = !check;
    if(check){
        document.getElementById("myElement").className = "myClass"; 
        document.getElementById("hamburger").className = "hamBurger";
        document.getElementById("myHeader").className = "header";
        
    }
    else{
        document.getElementById("myElement").className = "myClass2";
        document.getElementById("hamburger").className = "menu-hamburger-icon";
        document.getElementById("myHeader").className = "main-nav-div"
    }
}





