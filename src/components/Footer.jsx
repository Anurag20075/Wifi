import { motion } from "framer-motion";
import {
  Wifi,
  MapPin,
  Phone,
  ChevronRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import { RiTwitterXFill } from "react-icons/ri";

const WHATSAPP_NUMBER = "919767979921";
const PHONE_NUMBER = "+919767979921";

const WHATSAPP_MESSAGE =
  "Hi AlandiCity Broadband, I need help regarding my fiber connection.";

const footerLinks = {
  quick: [
    "Home",
    "Plans",
    "About Us",
    "Why Us",
    "Support",
    "Contact",
  ],

  support: [
    { name: "Help Center", href: "#" },
    { name: "Installation Guide", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
  ],
};

const socialLinks = [
  {
    icon: <FaFacebookF size={16} />,
    color: "hover:bg-[#1877F2]",
  },
  {
    icon: <FaInstagram size={16} />,
    color:
      "hover:bg-gradient-to-br hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7]",
  },
  {
    icon: <RiTwitterXFill size={16} />,
    color: "hover:bg-white hover:text-black",
  },
  {
    icon: <FaYoutube size={16} />,
    color: "hover:bg-[#FF0000]",
  },
  {
    icon: <FaLinkedinIn size={16} />,
    color: "hover:bg-[#0077b5]",
  },
];

export default function Footer() {
  const openWhatsApp = () => {
    const message = encodeURIComponent(WHATSAPP_MESSAGE);

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <footer className="relative overflow-hidden bg-[#050816] text-white">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-[-220px] h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-blue-500/[0.08] blur-[150px]" />

      <div className="pointer-events-none absolute bottom-0 left-[-200px] h-[350px] w-[350px] rounded-full bg-cyan-500/[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-20 lg:px-8 lg:pt-24">

        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.1fr] lg:gap-12 xl:gap-16">

          {/* Brand */}
          <div className="max-w-md">

            <div className="mb-6 flex items-center gap-4">

              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] bg-gradient-to-br from-blue-500 to-cyan-400 shadow-[0_12px_40px_rgba(59,130,246,0.3)]">

                <div className="absolute inset-[1px] rounded-[17px] bg-gradient-to-br from-blue-500 to-cyan-400" />

                <Wifi className="relative z-10 h-7 w-7 text-white" />

              </div>

              <div>
                <h2 className="text-[28px] font-black leading-none tracking-[-0.04em]">
                  AlandiCity
                </h2>

                <p className="mt-1.5 text-[9px] font-bold uppercase tracking-[0.32em] text-blue-300">
                  Broadband
                </p>
              </div>

            </div>

            <p className="max-w-[390px] text-[15px] leading-7 text-slate-400">
              Experience reliable fiber connectivity with fast speeds,
              smooth streaming, and dependable customer support for
              your everyday digital needs.
            </p>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href="#"
                  aria-label="Social media"
                  whileHover={{
                    y: -5,
                    scale: 1.06,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-slate-400 backdrop-blur-xl transition-all duration-300 hover:border-transparent hover:text-white hover:shadow-lg ${social.color}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

          </div>

          {/* Company */}
          <div>
            <h3 className="mb-6 text-[11px] font-extrabold uppercase tracking-[0.24em] text-white">
              Company
            </h3>

            <ul className="space-y-4">
              {footerLinks.quick.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="group flex items-center gap-2.5 text-[14px] font-medium text-slate-400 transition-all duration-300 hover:text-white"
                  >
                    <ChevronRight
                      size={14}
                      className="-ml-4 text-blue-400 opacity-0 transition-all duration-300 group-hover:ml-0 group-hover:opacity-100"
                    />

                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-6 text-[11px] font-extrabold uppercase tracking-[0.24em] text-white">
              Support
            </h3>

            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2.5 text-[14px] font-medium text-slate-400 transition-all duration-300 hover:text-white"
                  >
                    <ChevronRight
                      size={14}
                      className="-ml-4 text-blue-400 opacity-0 transition-all duration-300 group-hover:ml-0 group-hover:opacity-100"
                    />

                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-white/[0.035] p-6 backdrop-blur-xl">

            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/[0.12] blur-[60px]" />

            <div className="relative">

              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-white">
                  Contact
                </h3>

                <span className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider text-emerald-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Online
                </span>
              </div>

              <div className="space-y-5">

                {/* Phone */}
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="group flex items-center gap-3.5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-500/[0.18] bg-blue-500/[0.08] text-blue-400 transition-all duration-300 group-hover:bg-blue-500/[0.15]">
                    <Phone size={17} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
                      Call Us
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white transition-colors group-hover:text-blue-300">
                      +91 9767979921
                    </p>
                  </div>
                </a>

                {/* WhatsApp */}
                <button
                  onClick={openWhatsApp}
                  className="group flex w-full items-center gap-3.5 text-left"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#25D366]/[0.18] bg-[#25D366]/[0.08] text-[#25D366] transition-all duration-300 group-hover:bg-[#25D366]/[0.15]">
                    <FaWhatsapp size={18} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
                      WhatsApp
                    </p>

                    <p className="mt-1 text-sm font-semibold text-white transition-colors group-hover:text-[#25D366]">
                      Chat with us
                    </p>
                  </div>
                </button>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-purple-500/[0.18] bg-purple-500/[0.08] text-purple-400">
                    <MapPin size={17} />
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
                      Address
                    </p>

                    <p className="mt-1 text-sm font-semibold leading-5 text-white">
                      123 Tech Park,
                      <br />
                      Bangalore, India
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="my-14 h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">

          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
            © 2026 AlandiCity Broadband. All Rights Reserved.
          </p>

          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">
            Made with{" "}
            <span className="mx-1 text-sm text-red-500">♥</span>
            in India
          </p>

        </div>

      </div>

      {/* Floating WhatsApp */}
      <div className="group fixed bottom-6 right-6 z-[100] flex flex-col items-end sm:bottom-8 sm:right-8">

        <motion.div
          initial={{
            opacity: 0,
            y: 6,
            x: 6,
          }}
          whileHover={{
            opacity: 1,
          }}
          className="pointer-events-none mb-3 rounded-xl border border-white/[0.08] bg-[#0f172a]/95 px-3.5 py-2.5 opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-300 group-hover:opacity-100"
        >
          <p className="whitespace-nowrap text-xs font-semibold text-white">
            Chat with us
          </p>
        </motion.div>

        <motion.button
          onClick={openWhatsApp}
          aria-label="Chat with us on WhatsApp"
          whileHover={{
            scale: 1.08,
            rotate: 4,
          }}
          whileTap={{
            scale: 0.92,
          }}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_16px_50px_rgba(37,211,102,0.35)] sm:h-16 sm:w-16"
        >
          <div className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-20" />

          <FaWhatsapp
            size={30}
            className="relative text-white sm:text-[32px]"
          />
        </motion.button>

      </div>

    </footer>
  );
}