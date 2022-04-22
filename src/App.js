import Header from "./components/header/header.component";
import HomePage from "./pages/HomePage/homepage.component";
import ShopPage from "./pages/ShopPage/shoppage.component";
import SignInSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signin" element={<SignInSignUp />} />
      </Routes>
    </>
  );
}

export default App;
