import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Cart.css';

function Cart() {
    const navigate = useNavigate();
    const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="cart-page">
                <h1>🛒 Корзина</h1>
                <div className="cart-empty">
                    <p>Корзина пуста 😕</p>
                    <button onClick={() => navigate('/catalog')} className="go-to-catalog">
                        Перейти в каталог
                    </button>
                </div>
            </div>
        );
    }

    const total = getTotalPrice();

    return (
        <div className="cart-page">
            <h1>🛒 Корзина</h1>

            <div className="cart-items">
                {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                        <div className="cart-item-image">
                            <img src={item.image} alt={item.title} />
                        </div>

                        <div className="cart-item-info">
                            <h3 className="cart-item-title">{item.title}</h3>
                            <p className="cart-item-artist">{item.artist}</p>
                            <p className="cart-item-album">{item.album}</p>
                            <p className="cart-item-price">{item.price} ₽</p>
                        </div>

                        <div className="cart-item-quantity">
                            <button
                                className="qty-btn"
                                onClick={() => updateQuantity(item.id, -1)}
                                disabled={item.quantity <= 1}
                            >
                                −
                            </button>
                            <span className="qty-value">{item.quantity}</span>
                            <button
                                className="qty-btn"
                                onClick={() => updateQuantity(item.id, 1)}
                            >
                                +
                            </button>
                        </div>

                        <div className="cart-item-total">
                            {item.price * item.quantity} ₽
                        </div>

                        <button
                            className="remove-btn"
                            onClick={() => removeFromCart(item.id)}
                        >
                            ✕
                        </button>
                    </div>
                ))}
            </div>

            <div className="cart-summary">
                <div className="summary-row">
                    <span>Товаров:</span>
                    <span>{cartItems.reduce((sum, i) => sum + i.quantity, 0)}</span>
                </div>
                <div className="summary-row total">
                    <span>Итого:</span>
                    <span>{total.toLocaleString()} ₽</span>
                </div>

                <div className="cart-actions">
                    <button className="action-btn delivery-btn" onClick={() => alert('Доставка оформляется...')}>
                        Оформление доставки
                    </button>
                    <button className="action-btn payment-btn" onClick={() => alert('Переход к оплате...')}>
                        Оплата
                    </button>
                </div>

                <button className="clear-cart-btn" onClick={clearCart}>
                    Очистить корзину
                </button>
            </div>
        </div>
    );
}

export default Cart;