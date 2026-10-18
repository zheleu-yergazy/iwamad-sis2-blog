export default function Profile() {
  return (
    <section className="profile">
      <h2>My Profile</h2>
      <img
        src={`${import.meta.env.BASE_URL}my-photo.jpg`}
        alt="My profile photo"
        width="180"
      />
      <p>This is my protected profile page.</p>
    </section>
  );
}
