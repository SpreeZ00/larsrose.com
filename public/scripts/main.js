observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('fadeInLeft');
        return;
        }
        entry.target.classList.remove('fadeInLeft');
    });
});

observer.observe(document.querySelector('#about-title'));
observer.observe(document.querySelector('#portfolio-title'));