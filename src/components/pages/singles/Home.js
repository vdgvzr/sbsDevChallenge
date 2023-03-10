import React from "react"
import HomepageHeader from "../../components/headers/homepageHeader/homepageHeader"

const Home = ({ page }) => {
    return(
        <>
            <HomepageHeader 
                homepageHeader={page.homepageHeader}
            />
        </>
    )
}

export default Home