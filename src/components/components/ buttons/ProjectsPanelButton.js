import React from "react"
import Icon from "../ui/Icon"

const ProjectsPanelButton = ({ icon, onClick }) => {
    return(
        <>
            <button aria-label="projects-panel-button" className="projects-panel-button" onClick={onClick}>
                <Icon name={icon} fill="#fff" height="20" width="20" />
            </button>
        </>
    )
}

export default ProjectsPanelButton