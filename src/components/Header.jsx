import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useCart } from '../context/CartContext';
import './Header.css';

function Header() {
    const { getTotalItems } = useCart();
    const cartCount = getTotalItems();

    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="logo">
                    <img src={logo} alt="VinylShop" className="logo-img" />
                </Link>

                <nav className="nav">
                    <Link to="/news" className="nav-link">Новости</Link>
                    <Link to="/catalog" className="nav-link">Каталог</Link>
                    <Link to="/about" className="nav-link">О нас</Link>
                </nav>

                <div className="header-actions">

                    <Link to="/cart" className="cart-btn">
                        Корзина
                        {cartCount > 0 && (
                            <span className="cart-count">{cartCount}</span>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;