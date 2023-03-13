import React, { useState, useCallback, useRef } from "react"
import VerticalCta from "../ buttons/VerticalCta"
import ProjectsPanelButton from "../ buttons/ProjectsPanelButton"
import LinkUrl from "../ui/Link"
import Icon from "../ui/Icon"
import { handleZIndex } from "../../../assets/js/main"

const HomepageHeader = ({ homepageHeader }) => {
    const headerContent = homepageHeader[0].headerContent
    const projectsPanel = homepageHeader[1].projectsPanel
    const contactCta = homepageHeader[2].contactCta

    const dataAddZIndex = useRef([])
    
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

    handleZIndex(dataAddZIndex.current)

    return(
        <>
            <div className="homepage-header" style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, ${headerContent.backgroundImageOpacity}), rgba(0, 0, 0, ${headerContent.backgroundImageOpacity})), url(${headerContent.backgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                position: "relative",
                overflow: "hidden"
            }}> 
                <VerticalCta
                    type="button"
                    buttonText={contactCta.cta}
                    url={contactCta.url}
                    ref={(ref) => ref && dataAddZIndex.current.push(ref)}
                />
                <Icon 
                    name="sbs" 
                    stroke="#fff" 
                    fill="none" 
                    height="600px" 
                    width="600px" 
                    position="absolute"
                    top="0"
                    right="0"
                />
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-12 p-0">
                            <div className="row">
                                <div className="col-lg-8 col-12" ref={(ref) => ref && dataAddZIndex.current.push(ref)}>
                                    <h1 className="homepage-header__heading h1-large mb-5">{headerContent.headerText}</h1>
                                    <p className="homepage-header__sub-heading">{headerContent.subHeader}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="projects-panel d-flex h-100" ref={(ref) => ref && dataAddZIndex.current.push(ref)}>
                                        <div className="d-flex flex-column">
                                            <ProjectsPanelButton
                                                icon="chevron-right"
                                                onClick={handleNextProject}
                                            />
                                            <ProjectsPanelButton
                                                icon="chevron-left"
                                                onClick={handlePrevProject}
                                            />
                                        </div>
                                        <div className="container px-5 py-3">
                                            <div className="row h-100">
                                                <div className="col-6 d-flex flex-column justify-content-between h-100">
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <p >{projects.length < 10 ? "0" : null}{project + 1}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="d-flex justify-content-between">
                                                                <h3 className="m-0">{projects[project].projectTitle}</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-6 d-flex align-items-end">
                                                    <LinkUrl
                                                        linkText="Explore Project"
                                                        url={projects[project].url}
                                                        theme="light"
                                                        icon="chevron-right"
                                                        justify="end"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="projects-panel__image h-100" style={{
                                            backgroundImage: `url(${projects[project].projectImage})`,
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover',
                                        }}>
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