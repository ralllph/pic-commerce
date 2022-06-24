import {Routes, Route} from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import { faTrash, faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { faCartArrowDown } from "@fortawesome/fontawesome-free-solid"
//font awesome library 
library.add(fab, faTrash,faTrashCan, faCartArrowDown)

function App() {    
    return (
        <div>
            <Header />
            <Routes>
                <Route  path="/" element = { <Photos /> } />
                <Route path="/cart" element = { <Cart />} />
            </Routes>
        </div>
    )
}

export default App