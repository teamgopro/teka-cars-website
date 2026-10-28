import { useEffect, type ReactElement } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { ROUTES, RouterProvider, useRouter } from "./router";
import Home from "./pages/Home";
import TheCar from "./pages/TheCar";
import Design from "./pages/Design";
import Technology from "./pages/Technology";
import OurVision from "./pages/OurVision";
import Invitation from "./pages/Invitation";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const PAGE_TITLES: Record<string, string> = {
  [ROUTES.home]: "TEKA CARS — Built Beyond Ordinary. Invite Only.",
  [ROUTES.theCar]: "The Car — TEKA ONE | TEKA CARS",
  [ROUTES.design]: "Design Gallery | TEKA CARS",
  [ROUTES.technology]: "Technology Vision | TEKA CARS",
  [ROUTES.vision]: "Our Vision | TEKA CARS",
  [ROUTES.invitation]: "Invitation Only | TEKA CARS",
  [ROUTES.contact]: "Contact | TEKA CARS",
  [ROUTES.privacy]: "Privacy Policy | TEKA CARS",
  [ROUTES.terms]: "Terms of Use | TEKA CARS",
};

function PageSwitch() {
  const { path } = useRouter();

  useEffect(() => {
    document.title = PAGE_TITLES[path] ?? "Page Not Found | TEKA CARS";
  }, [path]);

  let page: ReactElement;
  switch (path) {
    case ROUTES.home:
      page = <Home />;
      break;
    case ROUTES.theCar:
      page = <TheCar />;
      break;
    case ROUTES.design:
      page = <Design />;
      break;
    case ROUTES.technology:
      page = <Technology />;
      break;
    case ROUTES.vision:
      page = <OurVision />;
      break;
    case ROUTES.invitation:
      page = <Invitation />;
      break;
    case ROUTES.contact:
      page = <Contact />;
      break;
    case ROUTES.privacy:
      page = <Privacy />;
      break;
    case ROUTES.terms:
      page = <Terms />;
      break;
    default:
      page = <NotFound />;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={path}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        {page}
      </motion.main>
    </AnimatePresence>
  );
}

function Shell() {
  const { path } = useRouter();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [path]);

  return (
    <div className="min-h-screen bg-ink text-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:bg-white focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Navbar />
      <div id="main-content">
        <PageSwitch />
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <Shell />
    </RouterProvider>
  );
}
