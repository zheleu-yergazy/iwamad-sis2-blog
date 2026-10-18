import { NavLink } from "react-router";

export default function Header() {
  return (
    <header className="header">
      <h1>Zheleu Yergazy | Blog</h1>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav>
    </header>
  );
}
