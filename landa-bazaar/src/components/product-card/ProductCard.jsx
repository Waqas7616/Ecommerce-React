import React from 'react'
import './ProductCard.css'

function ProductCard(props) {

    return (
        <div className='product'>
            <div className="cards mt-3 ">

                <img src={props.image} alt="" />
                <span className='badge d-flex align-items-center justify-content-center px-3 py-2'>New</span>

                <div className="hover-box  justify-content-between align-items-center">
                    <div className="wishlistButton">
                        <i className="fa-regular fa-heart"></i>
                    </div>
                    <div className="addToCartButton">
                        <button><span><i className="fa fa-cart-shopping"></i></span>Add To Cart</button>
                    </div>
                    <div className="viewProductButton">
                        <i className="fa-solid fa-eye"></i>
                    </div>
                </div>
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

    )
}

export default ProductCard
