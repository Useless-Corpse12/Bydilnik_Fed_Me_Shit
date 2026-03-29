import NewsList from '../components/NewsList';
import { newsItems } from '../data/newsData';

function News() {
    return (
        <div className="news-page">
            <div className="news-hero">
                <h1>Новости</h1>
            </div>
            <NewsList items={newsItems} />
        </div>
    );
}

export default News;