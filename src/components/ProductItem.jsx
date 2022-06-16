import React, { useContext } from 'react'
import '@styles/ProductItem.scss'
import AppContext from '@context/AppContext'
import addToCartImg from '@icons/bt_add_to_cart.svg'
const bikeImg = 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext)

  const handleClick = (item) => {
    addToCart(item)
  }

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)} >
          <img src={addToCartImg} alt="add to cart icon" />
        </figure>
      </div>
    </div>
  )
}

export default ProductItem