window.addEventListener("DOMContentLoaded", () => {

    const box = document.querySelector("#box");
    const startX = 0;
    const startY = 0;
    const step = 3;
    const msPerUpdate = 16;

    let timer = null;
    let path = 1;
    let x = startX;
    let y = startY;

    const animation = function () {
        switch (path) {
            case 1:
                if (x > 500) {
                    path++;
                    break;
                }
                x += step;
                break;
            case 2:
                if (y > 500) {
                    path++;
                    break;
                }
                y += step;
                break;
            default:
                clearInterval(timer);
        }

        box.style.left = x + 'px';
        box.style.top = y + 'px';
    }

    timer = setInterval(animation, msPerUpdate);

});