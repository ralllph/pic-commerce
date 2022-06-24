import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'


function Header() {
    return (
        <header>
            <Link to="/"> <h2>Pic Some</h2> </Link>
            <Link to="/cart">
                <FontAwesomeIcon icon={faCartArrowDown} className="header-icon"/>
            </Link>
            
        </header>
    )
}

export default Header