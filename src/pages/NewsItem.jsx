import { useParams, useNavigate } from 'react-router-dom';
import { newsItems } from '../data/newsData.js';
import './NewsItem.css';

function NewsItem() {
    const { id } = useParams();
    const navigate = useNavigate();
    const news = newsItems.find(item => item.id === parseInt(id));

    if (!news) {
        return (
            <div className="news-item-page">
                <h1>Новость не найдена</h1>
                <button onClick={() => navigate('/news')}>← Назад к новостям</button>
            </div>
        );
    }

    return (
        <div className="news-item-page">
            <button className="back-btn" onClick={() => navigate('/news')}>
                ← Назад к новостям
            </button>

            <article className="news-item">
                {news.image && (
                    <div className="news-item-image">
                        <img src={news.image} alt={news.title} />
                    </div>
                )}

                <div className="news-item-header">
                    <span className="news-item-date">{news.date}</span>
                    <h1>{news.title}</h1>
                    {news.subtitle && <p className="news-item-subtitle">{news.subtitle}</p>}
                </div>

                <div
                    className="news-item-content"
                    dangerouslySetInnerHTML={{ __html: news.content }}
                />
            </article>
        </div>
    );
}

export default NewsItem;