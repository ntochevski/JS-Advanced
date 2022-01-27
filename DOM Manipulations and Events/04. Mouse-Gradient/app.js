function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', onMouseMove);

    function onMouseMove(e) {
        let power = (e.offsetX / e.target.clientWidth) * 100;
        power = Math.floor(power);
        console.log(power);
        document.getElementById('result').textContent = power + '%';
    }
}