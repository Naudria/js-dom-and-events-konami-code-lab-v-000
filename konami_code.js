const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
    let index = 0;
    document.body.addEventListener('keydown', function(k) {
        const keyPressed = parseInt(k.detail || k.which);
        if (code[index] === keyPressed) {
            index++;
            alert('Sequence is Konami');
        } else {
            index = 0;
        }
    });
}