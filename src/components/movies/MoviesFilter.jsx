export default function MoviesFilter({
    categories,
    currentFilter,
    setCurrentFilter,
}) {
    const categoriesOptions = categories.map((el, i) => (
        <option key={i}>{el}</option>
    ));

    return (
        <div className="flex items-center gap-5 mb-6">
            <div>
                <label htmlFor="category-filter">Cetegory:</label>
                <select
                    id="category-filter"
                    className="px-2 py-1 ml-4 border rounded-md [&:bg-red-white]"
                    value={currentFilter.category}
                    onChange={(e) => {
                        setCurrentFilter({
                            ...currentFilter,
                            category: e.target.value,
                        });
                    }}
                >
                    <option>All</option>
                    {categoriesOptions}
                </select>
            </div>
            <div>
                <label htmlFor="category-filter">Rating:</label>
                <select
                    id="category-filter"
                    className="px-2 py-1 ml-4 border rounded-md"
                    value={currentFilter.rating}
                    onChange={(e) => {
                        setCurrentFilter({
                            ...currentFilter,
                            rating: e.target.value,
                        });
                    }}
                >
                    <option>All</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
        </div>
    );
}
