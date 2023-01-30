import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { UserContextProvider } from "./contexts/UserContext";

export default function App() {
  return (
    <>
      <UserContextProvider>
        <Header />
        <main>
          <Routes>
            <Route exact="true" path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <Footer />
      </UserContextProvider>
    </>
  );
}
