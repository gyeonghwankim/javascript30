
function init(){
    window.addEventListener("keydown", (e) => {
        const keyElements = [...document.getElementsByClassName("key")];
        
        keyElements.forEach(element => {
            const currentDataKey = parseInt(element.getAttribute("data-key"));
            if(currentDataKey == e.key.charCodeAt(0) - 32) element.classList.add("playing");
        });
        
    });

    window.addEventListener("keyup", (e) =>{
        const keyElements = [...document.getElementsByClassName("key")];
        
        keyElements.forEach(element => {
            const currentDataKey = parseInt(element.getAttribute("data-key"));
            if(currentDataKey == e.key.charCodeAt(0) - 32) element.classList.remove("playing");
        });
        
    });

}

init();