import { useState, useMemo } from 'react';
import { catalogItems } from '../data/catalogData';
import CatalogList from '../components/CatalogList';
import './Catalog.css';

function Catalog() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('all');
    const [sortBy, setSortBy] = useState('default');

    const filteredItems = useMemo(() => {
        let result = [...catalogItems];

        if (searchTerm) {
            result = result.filter(item =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.artist.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedGenre !== 'all') {
            result = result.filter(item => item.genre === selectedGenre);
        }

        switch (sortBy) {
            case 'monthly':
                result.sort((a, b) => b.monthlySales - a.monthlySales);
                break;
            case 'total':
                result.sort((a, b) => b.totalSales - a.totalSales);
                break;
            case 'price-asc':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                result.sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }

        return result;
    }, [searchTerm, selectedGenre, sortBy]);

    return (
        <div className="catalog-page">
            <div className="catalog-header">
                <h1>Каталог виниловых пластинок</h1>
                <p className="catalog-subtitle">{filteredItems.length} пластинок в наличии</p>
            </div>

            <div className="catalog-filters">
                <div className="filter-group">
                    <input
                        type="text"
                        placeholder="🔍 Поиск по названию или исполнителю..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                </div>

                <div className="filter-group">
                    <select
                        value={selectedGenre}
                        onChange={(e) => setSelectedGenre(e.target.value)}
                        className="filter-select"
                    >
                        <option value="all">Все жанры</option>
                        <option value="metal">Metal</option>
                        <option value="rock">Rock</option>
                        <option value="classic">Classic</option>
                        <option value="pop">Pop</option>
                        <option value="rnb">RnB</option>
                        <option value="raggy">Raggy</option>
                        <option value="jazz">Jazz</option>
                    </select>
                </div>

                <div className="filter-group">
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="filter-select"
                    >
                        <option value="default">По умолчанию</option>
                        <option value="monthly">Популярные за месяц</option>
                        <option value="total">Популярные за всё время</option>
                        <option value="price-asc">Цена: по возрастанию</option>
                        <option value="price-desc">Цена: по убыванию</option>
                    </select>
                </div>
            </div>

            <CatalogList items={filteredItems} showAddButton={true} />

            {filteredItems.length === 0 && (
                <div className="no-results">
                    <p>Ничего не найдено</p>
                    <p>Попробуйте изменить параметры поиска</p>
                </div>
            )}
        </div>
    );
}

export default Catalog;