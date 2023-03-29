// Function to handle main header icon cluster parallax
export function parallax(container, icons) {
    return function executeOnEvent (event) {
        icons.forEach((icon, i) => {
            if (icon) {
                window.requestAnimationFrame(() => {
                    // Magic values used here for position here use because value attribute wasn't accessible from function abstraction
                    if (i % 2 === 0) {
                        i = i * 10
                    } else if (i % 2 === 1) {
                        i = (i - 10) * 10
                    } else if (i === 0) {
                        i = i + 10
                    }
                    const headerRect = container.getBoundingClientRect()
                    const iconRect = icon.getBoundingClientRect()
                    const position = i;
    

                    const mousePos = {
                        'x': event.pageX,
                        'y': event.pageY,
                    }
                    
                    const iconCenter = {
                        'x': iconRect.left + (iconRect.width / 2),
                        'y': iconRect.top + (iconRect.height / 2),
                    }
    
                    const offset = {
                        'x': mousePos.x - iconCenter.x,
                        'y': mousePos.y - iconCenter.y,
                    }
    
                    const displacement = {
                        'x': (100 + (offset.x / headerRect.width * position)).toFixed(6),
                        'y': (100 + (offset.y / headerRect.height * position)).toFixed(6),
                    }
    
                    icon.style.transform = `translateX(${displacement.x}px) translateY(${displacement.y}px)`;
                })
            }
        })
    }
}

// Function to handle homepage header background image parallax
export function imageParallax(container) {
    return function executeOnEvent (e) {
        e.preventDefault()
        window.requestAnimationFrame(() => {
            const scrollPos = window.scrollY
            const displacement = Math.abs((scrollPos / 40).toFixed(6)) + 150

            container.style.backgroundSize = `${displacement}%`;
        })
    }
}

// Function to handle scrolling parallax 
export function parallaxY(container, icons) {
    return function executeOnEvent (e) {
        e.preventDefault()
        icons.forEach((icon, i) => {
            window.requestAnimationFrame(() => {
                if (icon) {
                    const bannerRect = container.getBoundingClientRect()
                    const position = i * 10;
                    const scrollPos = window.scrollY
                    const iconCenter = icon.clientWidth + (icon.clientHeight / 2)
                    const offset = scrollPos - iconCenter
                    const displacement = (10 + (offset / bannerRect.width * position) * 5).toFixed(6)

                    icon.style.transform = `translateY(${displacement}px)`;
                }

            })
        })
    }
}