const categoryFilter = ({ categories, handleFilterChange }) => (
  <select className="catSelect" onChange={e => handleFilterChange(e.currentTarget.value)}>
    <option value="All">All</option>
    {categories.map(category => (
      <option value={category} key={category}>
        {category}
      </option>
    ))}
  </select>
);

export default categoryFilter;
