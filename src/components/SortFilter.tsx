import React from "react";

interface SortFilterProps {
  sortOption: "date" | "title";
  sortDirection: "asc" | "desc";
  dateDirection: "asc" | "desc";
  handleSortChange: (option: "date" | "title") => void;
}

const SortFilter: React.FC<SortFilterProps> = ({ sortOption, sortDirection, dateDirection, handleSortChange }) => {
  return (
    <div className="section sort">
      <h2>Sort By</h2>
      <ul>
        <li>
          <input
            type="radio"
            name="sort"
            id="date"
            checked={sortOption === "date"}
            onClick={() => handleSortChange("date")}
          />
          <label htmlFor="date">
            Date {sortOption === "date" && dateDirection === "asc" ? "↑" : "↓"}
          </label>
        </li>
        <li>
          <input
            type="radio"
            name="sort"
            id="title"
            checked={sortOption === "title"}
            onClick={() => handleSortChange("title")}
          />
          <label htmlFor="title">
            Title {sortOption === "title" && sortDirection === "asc" ? "↑" : "↓"}
          </label>
        </li>
      </ul>
    </div>
  );
};

export default SortFilter;
