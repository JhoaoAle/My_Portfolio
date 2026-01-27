const coordinatesDiv = document.getElementById('coordinates');

document.addEventListener('mousemove', function(event) {
    const x = event.clientX;
    const y = event.clientY;
    coordinatesDiv.textContent = `Mouse X: ${x}, Mouse Y: ${y}`;
});