import React from "react"
import Icon from "../ui/Icon"
import Image from "../ui/Image"

const TestimonialCard = ({ testimonial, index }) => {
    return(
        <>
            <div className="testimonial-card card">
                <div className="card-body pb-3">
                    <div className="testimonial-card__rating d-flex mb-4">
                        {[...Array(testimonial.rating)].map((elem, i) => {
                            return <div className="testimonial-card__rating-star" key={i}><Icon name="star" fill="#EC6608" height="20" width="20" /></div>
                        })}
                    </div>
                    <Image src={testimonial.testimonialLogo} width="75" justify="start" padding="0" alt={`testimonial logo ${index}`} />
                    <p className="body-copy">{testimonial.testimonial}</p>
                    <p className="body-copy">{testimonial.client}</p>
                </div>
            </div>
        </>
    )
}

export default TestimonialCard