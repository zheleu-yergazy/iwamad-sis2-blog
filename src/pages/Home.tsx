import { Link } from "react-router";

type HomeProps = {
  isLoggedIn: boolean;
  onLogin: () => void;
};

export default function Home({ isLoggedIn, onLogin }: HomeProps) {
  return (
    <section className="profile">
      <h2>Welcome to My Blog</h2>

      <img
        src={`${import.meta.env.BASE_URL}my-photo.jpg`}
        alt="My profile photo"
        width="180"
      />

      <p>This is my personal blog about web development.</p>
      <Link to="/posts">Read my posts</Link>

      {!isLoggedIn && (
        <p>
          <button onClick={onLogin}>Log in to view Profile</button>
        </p>
      )}

      {isLoggedIn && (
        <p>
          <Link to="/profile">Open Profile</Link>
        </p>
      )}
    </section>
  );
}