import { useState, useEffect, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import {
  Wifi,
  Menu,
  X,
  Phone,
  ArrowRight,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

const NAV_LINKS = [
  { name: "Home", id: "home" },
  { name: "Plans", id: "plans" },
  { name: "Why Us", id: "why-us" },
];

const WHATSAPP_NUMBER = "918482999399";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersect,
      options
    );

    NAV_LINKS.forEach((link) => {
      const element = document.getElementById(link.id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);

    if (element) {
      const offset = 80;

      const bodyRect =
        document.body.getBoundingClientRect().top;

      const elementRect =
        element.getBoundingClientRect().top;

      const elementPosition =
        elementRect - bodyRect;

      const offsetPosition =
        elementPosition - offset;

      window.scrollTo({
        top: id === "home" ? 0 : offsetPosition,
        behavior: "smooth",
      });
    }

    setMobileOpen(false);
  }, []);

  const openWhatsApp = useCallback(() => {
    const message = encodeURIComponent(
      "Hi FiberNet, I need help regarding my fiber connection."
    );

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  }, []);


  useEffect(() => {
    document.body.style.overflow = mobileOpen
      ? "hidden"
      : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  return (
    <>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`fixed left-0 right-0 top-0 z-[60] transition-all duration-300 ${
          isScrolled
            ? "border-b border-gray-200/60 bg-white/75 py-3 shadow-sm backdrop-blur-xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8">

          <button
            onClick={() => scrollToSection("home")}
            className="group flex items-center gap-2.5"
            aria-label="Go to homepage"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-200 transition-transform duration-300 group-hover:rotate-6">
              <Wifi className="h-5 w-5 text-white" />
            </div>

            <div className="flex flex-col text-left">
              <span className="text-xl font-bold leading-none tracking-tight text-gray-900">
                FiberNet
              </span>

              <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-blue-600">
                Ultra-Gigabit
              </span>
            </div>
          </button>

          <nav className="hidden items-center rounded-2xl border border-gray-200/30 bg-gray-100/50 p-1.5 backdrop-blur-sm lg:flex">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-5 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.id
                    ? "text-blue-600"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {activeSection === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-xl bg-white shadow-sm"
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.6,
                    }}
                  />
                )}

                <span className="relative z-10">
                  {link.name}
                </span>
              </button>
            ))}
          </nav>

          <div className="hidden items-center lg:flex">

         <motion.button
            onClick={openWhatsApp}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-100 hover:text-gray-900"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-100 transition-all duration-300 group-hover:bg-[#25D366]/10">
              <FaWhatsapp className="h-4 w-4 text-[#25D366]" />
            </div>

            <span>Support</span>
          </motion.button>
          </div>

          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-900 transition-colors hover:bg-gray-200 lg:hidden"
            aria-label={
              mobileOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={mobileOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[70] bg-gray-900/40 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 27,
                stiffness: 220,
              }}
              className="fixed bottom-0 right-0 top-0 z-[80] flex w-[82%] max-w-sm flex-col bg-white p-6 shadow-2xl sm:p-8"
            >

              <div className="mb-10 flex items-center justify-between">

                <button
                  onClick={() => {
                    scrollToSection("home");
                    setMobileOpen(false);
                  }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-100">
                    <Wifi className="h-5 w-5 text-white" />
                  </div>

                  <div className="flex flex-col text-left">
                    <span className="text-lg font-bold leading-none text-gray-900">
                      FiberNet
                    </span>

                    <span className="mt-1 text-[8px] font-bold uppercase tracking-[0.18em] text-blue-600">
                      Ultra-Gigabit
                    </span>
                  </div>
                </button>

                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-gray-200"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-2.5">

                {NAV_LINKS.map((link, i) => (
                  <motion.button
                    key={link.id}
                    initial={{
                      opacity: 0,
                      x: 25,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: i * 0.07,
                      duration: 0.3,
                    }}
                    onClick={() =>
                      scrollToSection(link.id)
                    }
                    className={`group flex items-center justify-between rounded-2xl p-4 text-left text-lg font-bold transition-all duration-300 ${
                      activeSection === link.id
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-800 hover:bg-gray-50"
                    }`}
                  >
                    <span>{link.name}</span>

                    <ArrowRight
                      className={`h-5 w-5 transition-all duration-300 ${
                        activeSection === link.id
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      }`}
                    />
                  </motion.button>
                ))}

              </div>

              <div className="mt-auto border-t border-gray-100 pt-8">

                <div className="flex flex-col gap-4">

                  <motion.button
                    onClick={openWhatsApp}
                    whileTap={{ scale: 0.98 }}
                    className="group flex w-full items-center gap-4 rounded-2xl bg-gray-50 p-4 text-left transition-all duration-300 hover:bg-[#25D366]/10"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366] transition-all duration-300 group-hover:bg-[#25D366] group-hover:text-white">
                      <FaWhatsapp size={21} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                        WhatsApp Support
                      </p>

                      <p className="mt-1 font-bold text-gray-900">
                        Chat with us
                      </p>
                    </div>

                    <ArrowRight className="ml-auto h-5 w-5 shrink-0 text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#25D366]" />
                  </motion.button>

                  <motion.button
                    whileHover={{
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    onClick={() =>
                      scrollToSection("plans")
                    }
                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 py-4 font-bold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:bg-blue-700"
                  >
                    Get Fiber Connection

                    <ArrowRight size={18} />
                  </motion.button>

                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}