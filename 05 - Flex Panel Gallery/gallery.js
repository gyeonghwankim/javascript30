const panelList = document.querySelectorAll('.panel');

function toggleOpen(){
    this.classList.toggle('open');
}

function toggleActive(){
    this.classList.toggle('open-active');
}

function init(){
    panelList.forEach(panel => panel.addEventListener('click', toggleOpen));
    panelList.forEach(panel => panel.addEventListener('click', toggleActive));
}

init();