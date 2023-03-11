import React from "react"
import Heading from "../ui/Heading"
import CarouselButton from "../ buttons/CarouselButton"

const ProductsCarousel = ({ contentMain }) => {
    const productsCarousel = contentMain[1].productscarousel
    return(
        <>
            <div className="products-carousel">
                <div className="container-fluid p-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex justify-content-between align-items-center">
                                    <Heading heading={productsCarousel.heading} margin={false} />
                                    <div className="d-flex align-items-center products-carousel__button-container">
                                        <CarouselButton icon="chevron-left" />
                                        <CarouselButton icon="chevron-right" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsCarousel