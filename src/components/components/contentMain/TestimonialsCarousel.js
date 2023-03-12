import React, { useRef } from "react"
import Heading from "../ui/Heading"
import CarouselButton from "../ buttons/CarouselButton"
import TestimonialCard from "../cards/TestimonialCard"

const TestimonialCarousel = ({ contentMain }) => {
    const carousel = useRef(null);
    const card = useRef(null);

    const scroll = (scrollOffset) => {
        carousel.current.scrollLeft += scrollOffset;
    };

    const testimonialCarousel = contentMain[2].testimonialscarousel
    return(
        <>
            <div className="testimonials-carousel">
                <div className="container-fluid p-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex justify-content-between align-items-center">
                                    <Heading heading={testimonialCarousel.heading} margin={false} />
                                    <div className="d-flex align-items-center testimonials-carousel__button-container">
                                        <CarouselButton onClick={() => scroll(-card.current.offsetWidth)} icon="chevron-left" />
                                        <CarouselButton onClick={() => scroll(card.current.offsetWidth)} icon="chevron-right" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container h-scrollable p-0 p-5 my-5 testimonials-carousel__wrapper" ref={carousel}>
                    <div className="row d-block">
                        {testimonialCarousel.testimonials.map((testimonial, i) => {
                            return(
                                <div key={i} className="col-4" ref={card}>
                                    <TestimonialCard testimonial={testimonial}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialCarousel