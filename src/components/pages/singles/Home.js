import React from "react"
import HomepageHeader from "../../components/headers/HomepageHeader"
import IntroTextPanel from "../../components/contentMain/IntroTextPanel"
import ProductsCarousel from "../../components/contentMain/ProductsCarousel"
import TestimonialCarousel from "../../components/contentMain/TestimonialsCarousel"
import CtaPanel from "../../components/contentMain/CtaPanel"
import TextWithImagePanel from "../../components/contentMain/TextWithImagePanel"
import PartnerPanel from "../../components/contentMain/PartnerPanel"
import PromisePanel from "../../components/contentMain/PromisePanel"

const Home = ({ page, loading }) => {
    return(
        <>
            <HomepageHeader 
                homepageHeader={page.homepageHeader}
                loading={loading}
            />
            <IntroTextPanel 
                contentMain={page.contentMain}
                loading={loading}
            />
            <ProductsCarousel
                contentMain={page.contentMain}
                loading={loading}
            />
            <TestimonialCarousel
                contentMain={page.contentMain}
                loading={loading}
            />
            <CtaPanel
                contentMain={page.contentMain}
                loading={loading}
            />
            <TextWithImagePanel
                contentMain={page.contentMain}
                loading={loading}
            />
            <PartnerPanel
                contentMain={page.contentMain}
                loading={loading}
            />
            <PromisePanel
                contentMain={page.contentMain}
                loading={loading}
            />
        </>
    )
}

export default Home