"use client";

import { useState, useMemo } from "react";
import Filters from "./Filters";
import "../styles/productgrid.css";
import "../styles/productcard.css";

export default function ProductsClient({ initialProducts = [], categories = [], initialSelected = "All" }) {
  const [active, setActive] = useState(initialSelected);

  const filtered = useMemo(() => {
    if (!initialProducts) return [];
    if (active === "All") return initialProducts;
    // Match by category case-insensitive
    return initialProducts.filter((p) => (p.category || "").toLowerCase().includes(active.toLowerCase()));
  }, [initialProducts, active]);

  return (
    <section className="container">
      <div className="content">
        <Filters categories={categories} selectedCategory={active} onSelect={(c) => setActive(c)} />

        <div className="product-grid">
        {filtered.map((product) => (
          <article key={product.id} className="card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>₹{product.price}</p>
            <button>Add to Cart</button>
          </article>
        ))}
        </div>
      </div>
    </section>
  );
}
