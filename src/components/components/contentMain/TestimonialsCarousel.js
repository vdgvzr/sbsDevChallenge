import React from "react"
import Heading from "../ui/Heading"
import CarouselButton from "../ buttons/CarouselButton"
import TestimonialCard from "../cards/TestimonialCard"
import Flickity from 'react-flickity-component'

const TestimonialCarousel = ({ contentMain }) => {
    let flkty

    const flickityOptions = {
        contain: true,
        prevNextButtons: false,
        groupCells: 3,
        watchCSS: true,
        pageDots: false
    }

    const prev = () => {
        flkty.previous()
    }

    const next = () => {
        flkty.next()
    }

    const testimonialCarousel = contentMain[2].testimonialscarousel
    return(
        <>
            <div className="testimonials-carousel">
                <div className="container-fluid p-0 mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex testimonials-carousel__header justify-content-between align-items-center">
                                    <Heading heading={testimonialCarousel.heading} margin={false} />
                                    <div className="d-flex align-items-center testimonials-carousel__button-container d-none d-lg-flex">
                                        <CarouselButton onClick={prev} icon="chevron-left" />
                                        <CarouselButton onClick={next} icon="chevron-right" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container pb-5">
                    <Flickity
                        flickityRef={c => flkty = c}
                        className="carousel"
                        options={flickityOptions}
                        disableImagesLoaded={false}
                        reloadOnUpdate
                        static
                    >
                        {testimonialCarousel.testimonials.map((testimonial, i) => {
                            return(
                                <div key={i} className="col-lg-4 col-12">
                                    <TestimonialCard testimonial={testimonial} index={i}/>
                                </div>
                            )
                        })}
                    </Flickity>
                </div>
            </div>
        </>
    )
}

export default TestimonialCarousel