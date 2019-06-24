setInterval(setDate, 1000);

function $(component) {
    return document.querySelector(component);
}

function setDate() {
    const now = new Date();

    const second = now.getSeconds();
    const secondDegree = ((second / 60) * 360) + 90;
    $(".second-hand").style.transform = `rotate(${secondDegree}deg)`;
    
    const minute = now.getMinutes();
    const minuteDegree = ((minute / 60) * 360) + 90;
    $(".min-hand").style.transform = `rotate(${minuteDegree}deg)`;

    const hour = now.getHours();
    const hourDegree = ((hour / 12) * 360) + ((minute / 60) * 360)/12  + 90;
    $(".hour-hand").style.transform = `rotate(${hourDegree}deg)`;
}