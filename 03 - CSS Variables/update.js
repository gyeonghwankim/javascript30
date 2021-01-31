const inputSpacing = document.querySelector("#spacing");
const inputBlur = document.querySelector("#blur");
const inputBaseColor = document.querySelector("#base");
const image  = document.querySelector("img");


function init(){
    const controlArr = [inputSpacing, inputBlur, inputBaseColor];
    const changeEvent = new Event("change");
    controlArr.forEach(function(currentValue)  {
        currentValue.addEventListener("change", updateCSSVariables);
        currentValue.dispatchEvent(changeEvent);
    });
    
    
}



function updateCSSVariables(){
   if(this === inputSpacing){
       const borderColor = image.style.borderColor;
       image.style.border = `${this.value}px solid ${borderColor}`
       
   }
   else if(this === inputBlur){
       image.style.filter = `blur(${this.value}px)`
   }
   else if(this === inputBaseColor){
       image.style.borderColor = `${this.value}`
       document.querySelector(".hl").style.color = `${this.value}`;
   }
   
}

init();