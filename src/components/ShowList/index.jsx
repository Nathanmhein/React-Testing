import { useState } from 'react';
import ShowCard from '../ShowCard';
import { useShow } from '../../contexts';
import FilterShow from '../FilterShow';

export default function ShowList() {
    const { showData } = useShow();
    const [sortOrder, setSortOrder] = useState('all');

    function compareShows(a, b) {
        if (sortOrder === 'rating') {
            const aVal = a.rating.average || 0;
            const bVal = b.rating.average || 0;

            return bVal - aVal;
        }

        if (sortOrder === 'year') {
            const aVal = a.premiered?.slice(0, 4) || 0;
            const bVal = b.premiered?.slice(0, 4) || 0;

            return bVal - aVal;
        }

        return 0;
    }

    function renderShows() {
        return showData
            .sort(compareShows)
            .map(s => <ShowCard key={s.id} show={s} />);
    }

    return (
        <div className="show-list">
            <div className="filter-controls">
                <FilterShow sortOrder={sortOrder} setSortOrder={setSortOrder}/>
            </div>
            {showData.length === 0 ? 
            (<p>No shows found. Try another search.</p>) : 
            (renderShows())}
        </div>
    );
}