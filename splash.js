window.onload = function() {
    const logoDisplayDuration = 2000;

    setTimeout(function() {
        let splashScreen = document.getElementById('splashScreen');
        splashScreen.classList.add('hide');

        setTimeout(function() {
            splashScreen.style.display = 'none';
        }, 500);
    }, logoDisplayDuration);

    var smoothScroll = function (elementId) {
        var duration = 500; // Adjust this value to change the speed of the scroll
        var target = document.getElementById(elementId);
        var targetPosition = target.getBoundingClientRect().top;
        var startPosition = window.pageYOffset;
        var distance = targetPosition;
        var startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            var timeElapsed = currentTime - startTime;
            var run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }

    var linkElems = document.querySelectorAll('a');
    for (var i = 0; i < linkElems.length; i++) {
        var linkElem = linkElems[i];
        if (linkElem.getAttribute("href").charAt(0) === '#') {
            linkElem.addEventListener('click', function (event) {
                event.preventDefault();
                var href = this.getAttribute("href").substring(1);
                smoothScroll(href);
            });
        }
    }
}
