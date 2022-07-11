const SortBy = ({ index }) => {
  return (
    <div className="text-base flex items-center gap-2">
      Sort By
      <select
        className="text-base"
        onChange={(e) => index(e.target.selectedIndex)}
      >
        <option hidden>--Choose--</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
      </select>
    </div>
  );
};

export default SortBy;
