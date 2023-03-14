export function parallax(container, icons) {
    return function executeOnEvent (event) {
        icons.forEach((icon) => {
            window.requestAnimationFrame(() => {
                const headerRect = container.getBoundingClientRect()
                const iconRect = icon.getBoundingClientRect()
                const position = icon.getAttribute("value");

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
        })
    }
}

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

export function parallaxY(container, icons) {
    return function executeOnEvent (e) {
        e.preventDefault()
        icons.forEach(icon => {
            window.requestAnimationFrame(() => {
                const bannerRect = container.getBoundingClientRect()
                const position = icon.getAttribute("value");
                const scrollPos = window.scrollY
                const iconCenter = icon.clientWidth + (icon.clientHeight / 2)
                const offset = scrollPos - iconCenter
                const displacement = (10 + (offset / bannerRect.width * position) * 5).toFixed(6)

                icon.style.transform = `translateY(${displacement}px)`;
            })
        })
    }
}