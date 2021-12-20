import '../styles/Content.css'
import Many from './Money';
import Products from './Products'

function Contents () {
    return(
        <div className="Content">
            <Many/>

            <div>
                Shopping:
            </div>

            <div className="Products">

                <Products/>

            </div>
        </div>
    )
}

export default Contents;