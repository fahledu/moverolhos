document.addEventListener('DOMContentLoaded', () => {

    const olhos = [...document.getElementsByClassName("globo")]
    let mouseX = 0;
    let mouseY = 0;


    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        olhos.forEach((o) => {
            const rectOlho = o.getBoundingClientRect();
            const olhoCentroX = rectOlho.left + rectOlho.width / 2;
            const olhoCentroY = rectOlho.top + rectOlho.height / 2;

            const deltaX =  mouseX - olhoCentroX;
            const deltaY =  mouseY - olhoCentroY;
            const rotacao = - (Math.atan2(deltaY, deltaX) * (180 / Math.PI))
        
            o.style.transform = `rotateY(180deg) rotate(${rotacao}deg)`;
            
        });
    });

});

