import { useNavigate } from 'react-router-dom';
import '/src/pages/News.css';  // Было './NewsList.css' - измени на это

function NewsList({ items }) {
    const navigate = useNavigate();

    return (
        <div className="news-grid">
            {items.map((item) => (
                <article
                    key={item.id}
                    className="news-card"
                    onClick={() => navigate(`/news/${item.id}`)}
                >
                    <div className="news-image">
                        {item.image && <img src={item.image} alt={item.title} />}
                        <span className="news-tag" data-tag={item.tag}>{item.tag}</span>
                    </div>
                    <div className="news-content">
                        <span className="news-date">{item.date}</span>
                        <h2>{item.title}</h2>
                        <p>{item.subtitle}</p>
                    </div>
                </article>
            ))}
        </div>
    );
}

export default NewsList;