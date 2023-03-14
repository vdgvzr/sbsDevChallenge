import React from "react"
import Heading from "../ui/Heading"
import CarouselButton from "../ buttons/CarouselButton"
import ProductsCard from "../cards/ProductsCard"
import Flickity from 'react-flickity-component'

const ProductsCarousel = ({ contentMain }) => {
    let flkty

    const flickityOptions = {
        contain: true,
        pageDots: false,
        groupCells: 1,
        prevNextButtons: false,
    }

    const prev = () => {
        flkty.previous()
    }

    const next = () => {
        flkty.next()
    }

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
                                        <CarouselButton onClick={prev} icon="chevron-left" />
                                        <CarouselButton onClick={next} icon="chevron-right" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <Flickity
                        flickityRef={c => flkty = c}
                        options={flickityOptions}
                        disableImagesLoaded={false}
                        reloadOnUpdate
                        static
                    >
                            {productsCarousel.products.map((product, i) => {
                                return(
                                    <div key={i} className="mx-3">
                                        <a href={product.productUrl}>
                                            <ProductsCard product={product}/>
                                        </a>
                                    </div>
                                )
                            })}
                    </Flickity>
                </div>
            </div>
        </>
    )
}

export default ProductsCarousel