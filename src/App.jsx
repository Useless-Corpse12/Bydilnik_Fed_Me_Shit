import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import News from './pages/News';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';
import About from './pages/About';
import NewsList from './components/NewsList';
import NewsItem from './pages/NewsItem';
import CatalogList from './components/CatalogList';
import CatalogItem from './pages/CatalogItem';
import { newsItems } from './data/newsData';
import { catalogItems } from './data/catalogData';
import './App.css';

function App() {
    const topSales = [...catalogItems]
        .sort((a, b) => b.monthlySales - a.monthlySales)
        .slice(0, 5);

    return (
        <div className="app">
            <Header />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={
                        <div className="home-page">
                            <div className="welcome-banner">
                                <h1>Welcome to the Vinyl Zone</h1>
                                <p>Only true tracks on our vinyl. Warmth of analog feels like home.</p>
                            </div>

                            <section className="top-sales-section">
                                <h2 className="section-title">Топ продаж за месяц</h2>
                                <CatalogList items={topSales} showAddButton={true} />
                            </section>

                            <section className="news-section">
                                <h2 className="section-title">Последние новости</h2>
                                <NewsList items={newsItems.slice(0, 3)} />
                            </section>
                        </div>
                    } />
                    <Route path="/news" element={<News />} />
                    <Route path="/news/:id" element={<NewsItem />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/catalog/:id" element={<CatalogItem />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;