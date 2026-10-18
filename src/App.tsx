import { useState } from "react";
import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isLoggedIn={isLoggedIn}
                onLogin={() => setIsLoggedIn(true)}
              />
            }
          />
          <Route path="/posts" element={<Posts />} />
          <Route path="/contact" element={<Contact />} />

          <Route
            path="/profile"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}