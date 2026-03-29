import { useParams, useNavigate } from 'react-router-dom';
import { catalogItems } from '../data/catalogData';
import { useCart } from '../context/CartContext';
import './CatalogItem.css';

function CatalogItem() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const item = catalogItems.find(i => i.id === parseInt(id));

    if (!item) {
        return (
            <div className="catalog-item-page">
                <h1>Товар не найден</h1>
                <button onClick={() => navigate('/catalog')}>← Назад к каталогу</button>
            </div>
        );
    }

    const genreColors = {
        metal: '#2c3e50',
        rock: '#e74c3c',
        classic: '#9b59b6',
        pop: '#f39c12',
        rnb: '#1abc9c',
        raggy: '#e67e22',
        jazz: '#3498db'
    };

    const handleAddToCart = () => {
        addToCart(item);
        alert(`Добавлено: ${item.title}`);
    };

    return (
        <div className="catalog-item-page">
            <button className="back-btn" onClick={() => navigate('/catalog')}>
                ← Назад к каталогу
            </button>

            <article className="catalog-item-detail">
                <div className="item-image-section">
                    <img src={item.image} alt={item.title} />
                </div>

                <div className="item-info-section">
                    <div className="item-header">
            <span
                className="item-genre-badge"
                style={{ background: genreColors[item.genre] || '#6c757d' }}
            >
              {item.genre}
            </span>
                        <h1>{item.title}</h1>
                        <p className="item-album">{item.album}</p>
                    </div>

                    <div className="item-artist-block">
                        <h3>Исполнитель</h3>
                        <p className="item-artist">{item.artist}</p>
                    </div>

                    <div className="item-description-block">
                        <h3>Описание</h3>
                        <p>{item.description}</p>
                    </div>

                    <div className="item-details-grid">
                        <div className="detail-item">
                            <span className="detail-label">Год выпуска</span>
                            <span className="detail-value">{item.year}</span>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Продажи за месяц</span>
                            <span className="detail-value sales-highlight">{item.monthlySales}</span>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">Продажи за всё время</span>
                            <span className="detail-value">{item.totalSales.toLocaleString()}</span>
                        </div>
                    </div>

                    <div className="item-price-block">
                        <span className="price-label">Цена:</span>
                        <span className="price-value">{item.price} ₽</span>
                    </div>

                    <button className="add-to-cart-large" onClick={handleAddToCart}>
                        🛒 Добавить в корзину
                    </button>
                </div>
            </article>
        </div>
    );
}

export default CatalogItem;