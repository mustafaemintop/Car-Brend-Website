
var counters = document.querySelectorAll(".counter");

// =======================================================================================
function startCounter(counter) {
    counter.innerText = "0";

    function update() {
        var target = Number(counter.getAttribute("data-target"));
        var current = Number(counter.innerText);

        var step = target / 200;

        if (current < target) {
            if (Number.isInteger(target)) {
                counter.innerText = Math.ceil(current + step);
            } 
            else {
                counter.innerText = (current + step).toFixed(1);
            }

            setTimeout(update, 10);
        } 
        else {
            counter.innerText = target;
        }
    }

    update();
}

// =======================================================================================
var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            startCounter(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});


counters.forEach(function(counter) {
    observer.observe(counter);
});

// animation =======================================================================
function revealElements() {
    var elements = document.querySelectorAll(".reveal-left, .reveal-right");

    elements.forEach(function(el) {
        var windowHeight = window.innerHeight;
        var elementTop = el.getBoundingClientRect().top;

        var visibleDistance = 150;

        if (elementTop < windowHeight - visibleDistance) {
            el.classList.add("reveal-active");
        }
    });
}

// ========================================================================================
window.addEventListener("scroll", revealElements);

revealElements();