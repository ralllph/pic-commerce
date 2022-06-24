import  { useContext} from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHeartCirclePlus, faCartPlus, faCircleMinus } from '@fortawesome/free-solid-svg-icons'
import {Context} from "../Context"
import useHover from "../hooks/useHover"

function Image({className, img}) {
    const [hovered, enter, leave] = useHover()
    const {toggleFavorite, addToCart, cartItems, removeFromCart} = useContext(Context)
    
    function heartIcon() {
        if(img.isFavorite) {
            return <FontAwesomeIcon icon={faHeart} className="favorite" onClick={() => toggleFavorite(img.id)} />
        } else if(hovered) {
            return <FontAwesomeIcon icon={faHeartCirclePlus} className="favorite" onClick={() => toggleFavorite(img.id)} />
        }
    }
    
    function cartIcon() {
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if(alreadyInCart) {
            return <FontAwesomeIcon icon = {faCircleMinus} className="cart" onClick={() => removeFromCart(img.id)} />
        } else if(hovered) {
            return <FontAwesomeIcon icon = {faCartPlus} className="cart" onClick={() => addToCart(img)} />
        }
    }

    return (
        <div 
            className={`${className} image-container`}
            onMouseEnter = {enter}
            onMouseLeave = {leave}
        >
            <img src={img.url} className="image-grid" alt=""/>
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image
