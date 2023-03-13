import React from "react"
import HomepageHeader from "../../components/headers/HomepageHeader"
import IntroTextPanel from "../../components/contentMain/IntroTextPanel"
import ProductsCarousel from "../../components/contentMain/ProductsCarousel"
import TestimonialCarousel from "../../components/contentMain/TestimonialsCarousel"
import CtaPanel from "../../components/contentMain/CtaPanel"
import TextWithImagePanel from "../../components/contentMain/TextWithImagePanel"
import PartnerPanel from "../../components/contentMain/PartnerPanel"
import PromisePanel from "../../components/contentMain/PromisePanel"

const Home = ({ page }) => {
    return(
        <>
            {/* <HomepageHeader 
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
            <TextWithImagePanel
                contentMain={page.contentMain}
            />
            <PartnerPanel
                contentMain={page.contentMain}
            /> */}
            <PromisePanel
                contentMain={page.contentMain}
            />
        </>
    )
}

export default Home