import React from 'react'
import './ProductCard.css'

function ProductCard(props) {

    return (
        <> <div className="card mt-3">
            <div className="card-image">
                <img src={props.image} alt="" />
            </div>
            <div className="product-details mt-5">
                <h6 className="product-title">{props.title}</h6>
                <div className="product-rating">
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                </div>
                <div className="pricing">
                    <h6 className="price-tag">{props.price}- <strike>{props.discount}</strike></h6>
                </div>
            </div>
        </div>

        </>

    )
}

export default ProductCard
