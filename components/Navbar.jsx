import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src="/products/logo.png" alt="Logo" className="logo" />
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
