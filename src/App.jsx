import { Route, Routes } from "react-router-dom";
import BtmHeader from "./components/header/BtmHeader";
import TopHeader from "./components/header/TopHeader";
import Home from "./page/home/Home";
import ProductDetails from "./page/productDetails/ProductDetails";
import Cart from "./page/cart/Cart";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop";
import { AnimatePresence } from "motion/react";
import CategoryPage from "./page/categoryPage/CategoryPage";
import SearchResult from "./page/SearchResult";
import Favourite from "./page/favourite/Favourite";
import About from "./page/about/About";
import ContactForm from "./page/contactForm/ContactForm";
import Login from "./page/registration/Login";
import { AuthProvider } from "./components/context/AuthFormContext";
import Register from "./page/registration/Register";
import "./variables.css"

function App() {

  return (
    <>
      <header>
        <TopHeader />
        <BtmHeader />
      </header>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: `#e9e9e9`,
            borderRadius: `5px`,
            padding: `14px`,
          },
        }}
      />

      <ScrollToTop />
      
      <AuthProvider>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/Search" element={<SearchResult />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/category/:category" element={<CategoryPage />} />
          </Routes>
        </AnimatePresence>
      </AuthProvider>
    </>
  );
}

export default App;
