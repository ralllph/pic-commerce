import {useContext} from "react"
import PropTypes from "prop-types"
import {Context} from "../Context"
import useHover from "../hooks/useHover"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faTrashCan } from '@fortawesome/free-solid-svg-icons'

function CartItem({item}) {
    const [hovered] = useHover()
    const {removeFromCart} = useContext(Context)
    
    const iconClassName = hovered ? faTrash : faTrashCan
    
    return (
        <div className="cart-item">
            <FontAwesomeIcon 
                icon={iconClassName}
                onClick={() => removeFromCart(item.id)}
            />
            
            
            <img src={item.url} width="130px" alt=""/>
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}


export default CartItem