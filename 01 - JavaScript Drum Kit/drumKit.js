
function init(){
    window.addEventListener("keydown", (e) => {
        const keyElements = [...document.getElementsByClassName("key")];
        const audioElements = [...document.getElementsByTagName("audio")];
        
        keyElements.forEach(element => {
            const currentDataKey = parseInt(element.getAttribute("data-key"));
            if(currentDataKey == e.key.charCodeAt(0) - 32) {
                element.classList.add("playing");
            }
        });

        audioElements.forEach(element => {
            const currentDataKey = parseInt(element.getAttribute("data-key"));
            if(currentDataKey == e.key.charCodeAt(0) - 32) {
                element.play();
            }
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