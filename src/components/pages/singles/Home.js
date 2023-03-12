import React from "react"
import HomepageHeader from "../../components/headers/HomepageHeader"
import IntroTextPanel from "../../components/contentMain/IntroTextPanel"
import ProductsCarousel from "../../components/contentMain/ProductsCarousel"
import TestimonialCarousel from "../../components/contentMain/TestimonialsCarousel"
import CtaPanel from "../../components/contentMain/CtaPanel"

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
            <TestimonialCarousel
                contentMain={page.contentMain}
            />
            <CtaPanel
                contentMain={page.contentMain}
            />
        </>
    )
}

export default Home