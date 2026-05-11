import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import BackgroundLayer from "./components/layout/BackgroundLayer";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import FAB from "./components/layout/FAB";
import PageTransition from "./components/layout/PageTransition";
import CustomCursor from "./components/layout/CustomCursor";

import "./components/layout/layout.css";

export default function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div data-page={isHome ? "home" : "inner"}>
      <BackgroundLayer />
      <Nav />
      <main className="page-main">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
      <FAB />
      <CustomCursor />
    </div>
  );
}
