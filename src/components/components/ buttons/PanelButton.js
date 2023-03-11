import React from "react"
import Icon from "../ui/Icon"

const panelButton = ({ icon, onClick }) => {
    return(
        <>
            <button className="projects-panel-button" onClick={onClick}>
                <Icon name={icon} color="#fff" height="20" width="20" />
            </button>
        </>
    )
}

export default panelButton