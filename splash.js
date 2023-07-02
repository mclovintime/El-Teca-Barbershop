window.onload = function() {
    const logoDisplayDuration = 2000;

    setTimeout(function() {
        let splashScreen = document.getElementById('splashScreen');
        splashScreen.classList.add('hide');

        setTimeout(function() {
            splashScreen.style.display = 'none';
        }, 500);
    }, logoDisplayDuration);
}
