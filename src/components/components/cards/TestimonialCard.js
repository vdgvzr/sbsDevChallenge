import React from "react"
import Icon from "../ui/Icon"

const TestimonialCard = ({ testimonial }) => {
    return(
        <>
            <div className="testimonial-card card">
                <div className="card-body pb-3">
                    <div className="testimonial-card__rating d-flex mb-4">
                        {[...Array(testimonial.rating)].map((elem, i) => {
                            return <div className="testimonial-card__rating-star" key={i}><Icon name="star" color="#EC6608" height="20" width="20" /></div>
                        })}
                    </div>
                    <div className="testimonial-card__image-container">
                        <img className="w-75 testimonial-card__image-container-image" src={testimonial.testimonialLogo} alt={testimonial.testimonialLogo} />
                    </div>
                    <p className="body-copy">{testimonial.testimonial}</p>
                    <p className="body-copy">{testimonial.client}</p>
                </div>
            </div>
        </>
    )
}

export default TestimonialCard