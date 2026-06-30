import Image from 'next/image'

// Images
import logo from '../../assets/img/logo1.png'
// CSS
import './navbar.css'

const Navbar = () => {

    return (
        <nav className='navbar'>
            <div className="nav-logo">
                <a href='/'><Image src={logo} alt="LOGO" Height='50px' Width='auto' id='logo' /></a>
            </div>
            <div className="nav-links">
                <ul>
                    <a href='/products'><li>All Products</li></a>
                    <a href='/collection'><li>Collection</li></a>
                    <a href="/pod"><li>POD</li></a>
                    <a href='/about'><li>About</li></a>
                    <a href='/pages/pod'><li>Contact</li></a>
                </ul>
            </div>
            <div className="nav-actions">
                <a href="/cart" className="nav-cart-btn">
                    Cart <span>(0)</span>
                </a>
                <a href="/admin" className="nav-admin-badge">Admin Panel</a>
            </div>
        </nav>
    )
}

export default Navbar