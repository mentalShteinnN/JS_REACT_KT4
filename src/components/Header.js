import { Link } from "react-router-dom"

function Header(){
    return(
        <div className="header">
            <div className="logo"></div>
            <div className="menu_wrapper">
                <Link className="menuSelector" to={'/'}>
                    <p>Home</p>
                </Link>
                <Link className="menuSelector" to={'/products'}>
                    <p>Products</p>
                </Link>
                {/* <a href="/"> Home </a>
                <a href="/about"> About </a>
                <a href="/contacts"> Contacts </a> */}
            </div>
        </div>
    )
}
export default Header