import React from "react"
import HomepageHeader from "../../components/headers/HomepageHeader"
import IntroTextPanel from "../../components/contentMain/IntroTextPanel"
import ProductsCarousel from "../../components/contentMain/ProductsCarousel"

const Home = ({ page }) => {
    return(
        <>
            <HomepageHeader 
                homepageHeader={page.homepageHeader}
            />
            <IntroTextPanel 
                contentMain={page.contentMain}
            />
            <ProductsCarousel
                contentMain={page.contentMain}
            />
        </>
    )
}

export default Home