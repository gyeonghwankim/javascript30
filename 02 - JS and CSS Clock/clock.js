const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

const setDate = () => {
    const curDate = new Date();
    console.log(curDate.getHours(), curDate.getMinutes(), curDate.getSeconds());
    const [h, m, s] = [curDate.getHours(), curDate.getMinutes(), curDate.getSeconds()];
    hourHand.style.transform = `rotate(${getDegrees(h, 12)}deg)` 
    minHand.style.transform = `rotate(${getDegrees(m, 60)}deg)`
    secondHand.style.transform = `rotate(${getDegrees(s, 60)}deg)` 
}

const getDegrees = (curVal, maxVal) => {
    return (curVal * 360 / maxVal) + 90;
}


function init(){
    setInterval(setDate, 1000);
}

init();