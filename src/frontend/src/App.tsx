import { Toaster } from "@/components/ui/sonner";
import { AnimatePresence } from "motion/react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import FloatingButtons from "./components/layout/FloatingButtons";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import ExportsPage from "./pages/ExportsPage";
import HomePage from "./pages/HomePage";
import IndustriesPage from "./pages/IndustriesPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductsPage from "./pages/ProductsPage";
import QualityPage from "./pages/QualityPage";

function AppRoutes() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:slug" element={<ProductDetailPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/quality" element={<QualityPage />} />
          <Route path="/exports" element={<ExportsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Fallback to home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <FloatingButtons />
      <Toaster />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
