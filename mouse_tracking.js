const coordinatesDiv = document.getElementById('coordinates');

document.addEventListener('mousemove', function(event) {
    const x = event.clientX;
    const y = event.clientY;
    coordinatesDiv.textContent = `Mouse X: ${x}, Mouse Y: ${y}`;

    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = x + 'px';
    p.style.top = y + 'px';
    document.body.appendChild(p);

    setTimeout(() => p.remove(), 600);
});