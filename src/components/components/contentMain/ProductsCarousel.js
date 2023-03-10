import React, { useRef } from "react"
import Heading from "../ui/Heading"
import CarouselButton from "../ buttons/CarouselButton"
import ProductsCard from "../cards/ProductsCard"

const ProductsCarousel = ({ contentMain }) => {
    const carousel = useRef(null);
    const card = useRef(null);

    const scroll = (scrollOffset) => {
        carousel.current.scrollLeft += scrollOffset;
    };

    const productsCarousel = contentMain[1].productscarousel
    return(
        <>
            <div className="products-carousel">
                <div className="container-fluid p-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex products-carousel__header justify-content-between align-items-center pt-lg-0 pt-3">
                                    <Heading heading={productsCarousel.heading} margin={false} />
                                    <div className="d-flex align-items-center products-carousel__button-container">
                                        <CarouselButton onClick={() => scroll(-card.current.offsetWidth)} icon="chevron-left" />
                                        <CarouselButton onClick={() => scroll(card.current.offsetWidth)} icon="chevron-right" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid h-scrollable p-0 py-5" ref={carousel}>
                    <div className="container">
                        <div className="row d-block">
                            {productsCarousel.products.map((product, i) => {
                                return(
                                    <div key={i} className="col-lg-3 col-10" ref={card}>
                                        <a href={product.productUrl}>
                                            <ProductsCard product={product}/>
                                        </a>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsCarousel