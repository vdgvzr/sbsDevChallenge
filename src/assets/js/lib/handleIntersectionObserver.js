import { addStyle } from "./handleClasses";

export function handleIntersectionObserver() {
    const selectors = {
        'jsFade': 'data-js-fade',
        'jsRight': 'data-js-right',
        'jsLeft': 'data-js-left',
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

    Object.keys(selectors).forEach(key => {
        const elements = document.querySelectorAll(`[${selectors[key]}]`)
        elements.forEach(element => {
            intersectionObserver(`[${selectors[key]}]`, element.getAttribute(`${selectors[key]}`))
        })
    });
}