const divSet = document.querySelector('div');
const spanSet = document.querySelector('span');
document.addEventListener('mousemove',function(event){
    spanSet.style.top = event.clientY - 11 + 'px';
    spanSet.style.left = event.clientX - 11 + 'px';
    spanSet.style.transform = `rotate(${event.clientX}deg)`;

    const xElements = event.offsetX;
    const yElements = event.offsetY;
    const halfWidth = divSet.clientWidth / 2;
    const halfHeight = divSet.clientHeight / 2;
    if(xElements > halfWidth && yElements < halfHeight){
        divSet.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
    }
    if(xElements < halfWidth && yElements > halfHeight){
        divSet.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
    }
    if(xElements > halfWidth && yElements > halfHeight){
        divSet.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
    }
    if(xElements < halfWidth && yElements < halfHeight){
        divSet.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
    }
})