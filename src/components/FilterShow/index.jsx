export default function FilterShow({ sortOrder, setSortOrder }) {
    return (
        <>
            <label htmlFor="filterShows">Choose Filter:</label>

            <select
                name="filterShows"
                id="filterShows"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
            >
                <option value="all">All Shows</option>
                <option value="rating">Rating (Descending)</option>
                <option value="year">Year (Descending)</option>
            </select>
        </>
    );
}