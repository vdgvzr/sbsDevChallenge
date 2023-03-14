import React, { useState, useCallback, useEffect, useRef } from "react"
import ProjectsPanelButton from "../ buttons/ProjectsPanelButton"
import LinkUrl from "../ui/Link"
import Icon from "../ui/Icon"

const HomepageHeader = ({ homepageHeader }) => {
    const headerContent = homepageHeader[0].headerContent
    const projectsPanel = homepageHeader[1].projectsPanel
    const headerContainer = useRef()
    const icons = useRef([])
    
    const mod = (n, m) => ((n % m) + m) % m
    const projects = projectsPanel.projects

    const [project, setProject] = useState(0)

    const handleNextProject = useCallback(() => {
        setProject(state => mod(state + 1, projects.length)),
        [setProject, projects]
    })

    const handlePrevProject = useCallback(() => {
        setProject(state => mod(state - 1, projects.length)),
        [setProject, projects]
    })

    useEffect(() => {
        headerContainer.current.addEventListener("mousemove", parallax);

        function parallax(event) {
            icons.current.forEach((icon) => {
                window.requestAnimationFrame(() => {
                    const headerRect = headerContainer.current.getBoundingClientRect()
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
    }, [])

    return(
        <>
            <div className="homepage-header" style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, ${headerContent.backgroundImageOpacity}), rgba(0, 0, 0, ${headerContent.backgroundImageOpacity})), url(${headerContent.backgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                position: "relative",
                overflow: "hidden"
            }} ref={headerContainer}>
                <div className="d-none d-lg-block">
                    <Icon 
                        name="sbs" 
                        stroke="rgba(255,255,255,0.4)" 
                        fill="none" 
                        height="60vw" 
                        width="60vw" 
                        position="absolute"
                        top="35%"
                        right="-30%"
                        value="-15"
                        ref={ref=>icons.current.push(ref)}
                    />
                    <Icon 
                        name="sbs" 
                        stroke="rgba(255,255,255,0.4)" 
                        fill="none" 
                        height="20vw" 
                        width="20vw" 
                        position="absolute"
                        top="55%"
                        right="-3%"
                        value="5"
                        ref={ref=>icons.current.push(ref)}
                    />
                    <Icon 
                        name="sbs" 
                        stroke="none" 
                        fill="rgba(255,255,255,0.4)" 
                        height="25vw" 
                        width="25vw" 
                        position="absolute"
                        top="40%"
                        right="10%"
                        value="30"
                        ref={ref=>icons.current.push(ref)}
                    />
                    <Icon 
                        name="sbs" 
                        stroke="none" 
                        fill="rgba(255,255,255,0.4)" 
                        height="35vw" 
                        width="35vw" 
                        position="absolute"
                        top="55%"
                        right="-3%"
                        value="-5"
                        ref={ref=>icons.current.push(ref)}
                    />
                </div>
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-12 p-0">
                            <div className="row">
                                <div className="col-lg-8 col-12 z-index-2">
                                    <h1 className="homepage-header__heading h1-default mb-5">{headerContent.headerText}</h1>
                                    <p className="homepage-header__sub-heading">{headerContent.subHeader}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="projects-panel d-flex h-100 z-index-2">
                                        <div className="d-flex projects-panel__inner">
                                            <ProjectsPanelButton
                                                icon="chevron-right"
                                                onClick={handleNextProject}
                                            />
                                            <ProjectsPanelButton
                                                icon="chevron-left"
                                                onClick={handlePrevProject}
                                            />
                                        </div>
                                        <div className="container py-3">
                                            <div className="row h-lg-100">
                                                <div className="col-lg-4 col-12 d-flex flex-lg-column justify-content-between h-100">
                                                    <div className="col-4">
                                                        <p>{projects.length < 10 ? "0" : null}{project + 1}</p>
                                                    </div>
                                                    <div className="col-8">
                                                        <div className="d-flex justify-content-between">
                                                            <h3 className="m-0">{projects[project].projectTitle}</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-12 d-flex align-items-end justify-content-center my-lg-0 my-4">
                                                    <div className="projects-panel__link">
                                                        <LinkUrl
                                                            linkText="Explore Project"
                                                            url={projects[project].url}
                                                            theme="light"
                                                            icon="chevron-right"
                                                            justify="end"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-5 col-12">
                                                    <div className="projects-panel__image h-lg-100" style={{
                                                        backgroundImage: `url(${projects[project].projectImage})`,
                                                        backgroundRepeat: 'no-repeat',
                                                        backgroundSize: 'cover',
                                                    }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomepageHeader