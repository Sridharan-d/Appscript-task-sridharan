"use client";

import { useState } from "react";
import "../styles/filters.css";

export default function Filters({ categories, selectedCategory, onSelect }) {
  const [active, setActive] = useState(selectedCategory || "All");

  function handleSelect(cat) {
    setActive(cat);
    if (typeof onSelect === "function") onSelect(cat);
    // Local client-side handler; replace with navigation or event dispatch if needed
    console.log("Selected category:", cat);
  }

  return (
    <aside className="filters" aria-label="Product Filters">
      <h3>Filter by Category</h3>
      <ul>
        {categories.map((cat) => (
          <li
            key={cat}
            className={active === cat ? "active" : ""}
            onClick={() => handleSelect(cat)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" ? handleSelect(cat) : null)}
          >
            {cat}
          </li>
        ))}
      </ul>
    </aside>
  );
}
