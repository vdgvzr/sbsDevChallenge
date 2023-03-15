import { addStyle } from "./handleClasses";

export function handleIntersectionObserver() {
    const selectors = {
        'jsFade': '[data-js-fade]',
        'jsFadeDelay': '[data-js-fade-delay]',
        'jsRight': '[data-js-right]',
        'jsLeft': '[data-js-left]',
    }

    const classes = {
        'fadeScrolled': 'fade-scrolled',
        'rightScrolled': 'right-scrolled',
        'leftScrolled': 'left-scrolled',
    }

    const observerOptions = {
        root: null,
        threshold: 0,
        rootMargin: '0px 0px -50px 0px'
    };

    function intersectionObserver(selector, style) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    addStyle(entry.target, style)
                    observer.unobserve(entry.target)
                }
            });
        }, observerOptions);
        
        
        if (document.readyState !== 'loading') {
            const elements = document.querySelectorAll(selector)
            elements.forEach(element => {
                observer.observe(element)
            })
        };
    }

    intersectionObserver(selectors.jsFade, classes.fadeScrolled)
    intersectionObserver(selectors.jsRight, classes.rightScrolled)
    intersectionObserver(selectors.jsLeft, classes.leftScrolled)
}