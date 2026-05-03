const counters = document.querySelectorAll('.counter');

const startCounter = (counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.textContent;
        const increment = target / 200;

        if (c < target) {
            if (Number.isInteger(target)) {
                counter.textContent = Math.ceil(c + increment);
            } else {
                counter.textContent = (c + increment).toFixed(1);
            }
            setTimeout(updateCounter, 10);
        } else {
            counter.textContent = target;
        }
    };

    updateCounter();
};

const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounter(entry.target);
            obs.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.5 
});

counters.forEach(counter => {
    observer.observe(counter);
});