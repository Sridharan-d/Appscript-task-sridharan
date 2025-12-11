import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import ProductsClient from "@/components/ProductsClient";
import Footer from "@/components/Footer";

export default async function Page() {
  // Fetch products from fakestoreapi
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  // Derive categories from fetched products (keep consistent with fakestore categories)
  const derived = Array.from(new Set(products.map((p) => p.category))) || [];
  const categories = ["All", ...derived.map((c) => c.charAt(0).toUpperCase() + c.slice(1))];
  const selectedCategory = "All";

  return (
    <main>
      <Navbar />
      <Header />

      <div style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "20px" }}>
        {/* Client wrapper will handle filtering and interactivity on the client. */}
        <ProductsClient initialProducts={products} categories={categories} initialSelected={selectedCategory} />
      </div>

      <Footer />
    </main>
  );
}
