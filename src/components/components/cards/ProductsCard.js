import React from "react"
import LinkUrl from "../ui/Link"

const ProductsCard = ({ product }) => {
    return(
        <>
            <div className="products-card card">
                <div className="products-card__image" style={{
                    backgroundImage: `url(${product.productImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    width: '100%',
                }}></div>
                <div className="card-body pb-3">
                    <h5 className="card-title">{product.productTitle}</h5>
                </div>
                <div className="container-fluid">
                    <LinkUrl
                        linkText="Explore"
                        url=""
                        theme="dark"
                        icon="chevron-right"
                        justify="between"
                        disabled={true}
                    />
                </div>
            </div>
        </>
    )
}

export default ProductsCard