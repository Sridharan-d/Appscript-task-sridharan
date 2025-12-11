import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <img src="/products/jeans-blue.jpg" alt="Products banner" className="banner" />
      <h1>Appscrip Products</h1>
      <h2>Explore our curated product collection</h2>
      <p>Browse categories and find your next purchase</p>
    </header>
  );
}
