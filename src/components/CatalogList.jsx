import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './CatalogList.css';

function CatalogList({ items, showAddButton = true }) {
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const handleAddToCart = (e, item) => {
        e.stopPropagation();
        addToCart(item);
    };

    return (
        <div className="catalog-grid">
            {items.map((item) => (
                <article
                    key={item.id}
                    className="catalog-card"
                    onClick={() => navigate(`/catalog/${item.id}`)}
                >
                    <div className="catalog-image">
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div className="catalog-content">
                        <h3 className="catalog-title">{item.title}</h3>
                        <p className="catalog-artist">{item.artist}</p>
                        <p className="catalog-price">{item.price} ₽</p>
                        {showAddButton && (
                            <button
                                className="add-to-cart-btn"
                                onClick={(e) => handleAddToCart(e, item)}
                            >
                                В корзину
                            </button>
                        )}
                    </div>
                </article>
            ))}
        </div>
    );
}

export default CatalogList;