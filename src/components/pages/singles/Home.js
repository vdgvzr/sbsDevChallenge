import React from "react"
import HomepageHeader from "../../components/headers/homepageHeader"
import IntroTextPanel from "../../components/contentMain/IntroTextPanel"

const Home = ({ page }) => {
    return(
        <>
            <HomepageHeader 
                homepageHeader={page.homepageHeader}
            />
            <IntroTextPanel 
                contentMain={page.contentMain}
            />

        </>
    )
}

export default Home