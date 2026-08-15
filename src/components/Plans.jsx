import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  Zap,
  Star,
  Crown,
  Tv,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";


// const plans = [
//   {
//     name: "Starter",
//     speed: "40",
//     price: "499",
//     icon: Zap,
//     badge: null,
//     gradient: "from-slate-100 via-white to-slate-50",
//     glow: "shadow-slate-200/70",
//     button: "bg-gray-900 hover:bg-black text-white",
//     features: [
//       "Free Installation & Wi-Fi Router Included",
//       "Reliable Everyday Connectivity",
//       "Smooth Browsing and HD Streaming",
//     ],
//   },
//   {
//     name: "Basic",
//     speed: "60",
//     price: "599",
//     icon: Zap,
//     badge: null,
//     gradient: "from-slate-100 via-white to-slate-50",
//     glow: "shadow-slate-200/70",
//     button: "bg-gray-900 hover:bg-black text-white",
//     features: [
//       "Free Installation & Wi-Fi Router Included",
//       "Seamless Multi Device Connectivity",
//       "Faster Browsing and Streaming",
//     ],
//   },
//   {
//     name: "Entertainment",
//     speed: "100",
//     price: "699",
//     icon: Star,
//     badge: "OTT Pack",
//     gradient: "from-blue-50 via-white to-cyan-50",
//     glow: "shadow-blue-300/40",
//     button: "bg-blue-600 hover:bg-blue-700 text-white",
//     features: [
//       "Free Installation & Wi-Fi Router Included",
//       "ZEE5 + SonyLIV + Hotstar + 10 More OTTs",
//       "Smooth 4K Streaming",
//     ],
//   },
//   {
//     name: "Binge Plus",
//     speed: "150",
//     price: "999",
//     icon: Star,
//     badge: "IPTV + OTT",
//     gradient: "from-blue-50 via-white to-cyan-50",
//     glow: "shadow-blue-300/40",
//     button: "bg-blue-600 hover:bg-blue-700 text-white",
//     features: [
//       "Free Installation & Wi-Fi Router Included",
//       "Live IPTV + ZEE5 + SonyLIV + Hotstar + 10 More OTTs",
//       "Seamless Multi Device Streaming",
//     ],
//   },
//   {
//     name: "Pro Gamer",
//     speed: "200",
//     price: "1199",
//     icon: Crown,
//     badge: "High Performance",
//     gradient: "from-purple-50 via-white to-pink-50",
//     glow: "shadow-purple-300/40",
//     button: "bg-gradient-to-r from-purple-600 to-pink-500 text-white",
//     features: [
//       "Free Installation & Wi-Fi Router Included",
//       "Live IPTV + ZEE5 + SonyLIV + Hotstar + 10 More OTTs",
//       "Ultra Low Latency and Fast Downloads",
//     ],
//   },
//   {
//     name: "Ultra Elite",
//     speed: "300",
//     price: "1499",
//     icon: Crown,
//     badge: "Ultimate Speed",
//     gradient: "from-purple-50 via-white to-pink-50",
//     glow: "shadow-purple-300/40",
//     button: "bg-gradient-to-r from-purple-600 to-pink-500 text-white",
//     features: [
//       "Free Installation & Wi-Fi Router Included",
//       "Live IPTV + ZEE5 + SonyLIV + Hotstar + 10 More OTTs",
//       "Gigabit Ready Connectivity",
//     ],
//   },
// ];

const plans = [
  {
    name: "Basic",
    speed: "40",
    price: "499",
    type: "Internet",
    badge: null,
    features: [
      "Free Installation",
      "Free Wi-Fi Router to Use",
      "Reliable Internet Connectivity",
    ],
  },
  {
    name: "Standard",
    speed: "60",
    price: "599",
    type: "Internet",
    badge: null,
    features: [
      "Free Installation",
      "Free Wi-Fi Router to Use",
      "Reliable Internet Connectivity",
    ],
  },
  {
    name: "Entertainment",
    speed: "100",
    price: "699",
    type: "OTT",
    badge: "OTT Included",
    features: [
      "Free Installation",
      "Free Wi-Fi Router to Use",
      "ZEE5 + SonyLIV + Hotstar + 10 More OTTs",
    ],
  },
  {
    name: "Family",
    speed: "150",
    price: "999",
    type: "IPTV",
    badge: "IPTV + OTT",
    features: [
      "Free Installation",
      "Free Wi-Fi Router to Use",
      "Available IPTV",
      "ZEE5 + SonyLIV + Hotstar + 10 More OTTs",
    ],
  },
  {
    name: "Premium",
    speed: "200",
    price: "1199",
    type: "IPTV",
    badge: "IPTV + OTT",
    features: [
      "Free Installation",
      "Free Wi-Fi Router to Use",
      "Available IPTV",
      "ZEE5 + SonyLIV + Hotstar + 10 More OTTs",
    ],
  },
  {
    name: "Ultra",
    speed: "300",
    price: "1499",
    type: "IPTV",
    badge: "IPTV + OTT",
    features: [
      "Free Installation",
      "Free Wi-Fi Router to Use",
      "Available IPTV",
      "ZEE5 + SonyLIV + Hotstar + 10 More OTTs",
    ],
  },
];
export default function Plans() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? plans.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === plans.length - 1 ? 0 : prev + 1));
  };

  const getVisibleDesktopPlans = () => {
    return [
      plans[currentIndex],
      plans[(currentIndex + 1) % plans.length],
      plans[(currentIndex + 2) % plans.length],
    ];
  };

  return (
    <section
      id="plans"
      className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-blue-50 min-h-screen flex flex-col justify-center"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600 border border-blue-200/60">
            Flexible Internet Plans
          </span>

          <h2 className="mt-6 text-4xl sm:text-5xl font-black tracking-tight text-gray-900 leading-tight">
            Ultra Fast Fiber Plans <br />
            Built For Modern Homes
          </h2>

          <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Stream, game, work, and connect seamlessly with blazing-fast fiber
            internet designed for families, creators, and businesses.
          </p>

          <div className="mt-6 inline-flex flex-wrap justify-center gap-4 sm:gap-6 text-sm font-bold text-emerald-600 bg-emerald-50 border border-emerald-200/60 px-5 py-2.5 rounded-2xl shadow-sm">
            <span className="flex items-center gap-1.5">⚡ Free Installation</span>
            <span className="text-emerald-300 hidden sm:inline">|</span>
            <span className="flex items-center gap-1.5">🌐 100% Fiber-to-the-Home Connection</span>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4">

          <div className="absolute top-1/2 -left-2 xl:-left-14 z-20 -translate-y-1/2">
            <button
              onClick={handlePrev}
              className="p-3.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-black shadow-xl transition-all active:scale-95"
              aria-label="Previous plans"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="absolute top-1/2 -right-2 xl:-right-14 z-20 -translate-y-1/2">
            <button
              onClick={handleNext}
              className="p-3.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-black shadow-xl transition-all active:scale-95"
              aria-label="Next plans"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="hidden md:grid grid-cols-3 gap-8 items-stretch min-h-[580px]">
            <AnimatePresence mode="popLayout" initial={false}>
              {getVisibleDesktopPlans().map((plan, index) => {
                const Icon = plan.icon;
                const isPremiumOrPopular = plan.badge !== null;

                return (
                  <motion.div
                    key={`${plan.speed}-${index}`}
                    layout
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    whileHover={{ y: -8, scale: 1.01 }}
                    className={`group relative rounded-3xl p-[1px] flex flex-col justify-between ${isPremiumOrPopular
                      ? "bg-gradient-to-b from-blue-500 via-purple-400 to-pink-300 shadow-xl"
                      : "bg-white/60 border border-slate-200/80"
                      }`}
                  >
                    <div className={`relative flex flex-col justify-between h-full rounded-3xl bg-gradient-to-b ${plan.gradient} p-8 lg:p-9 shadow-2xl ${plan.glow}`}>
                      <div>
                        {plan.badge && (
                          <div className="absolute top-5 right-5">
                            <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-blue-600 text-white tracking-wide uppercase">
                              {plan.badge}
                            </span>
                          </div>
                        )}

                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-white shadow-md border border-slate-100">
                          <Icon className="w-7 h-7 text-blue-600" />
                        </div>

                        <div className="mb-5">
                          <h3 className="text-2xl font-black text-gray-900">{plan.name}</h3>
                          <p className="mt-1 text-sm text-gray-500 font-medium">
                            Speed up to <span className="font-bold text-gray-900 text-base">{plan.speed} Mbps</span>
                          </p>
                        </div>

                        <div className="mb-6 flex items-end gap-1">
                          <span className="text-xl font-bold text-gray-500 mb-1.5">₹</span>
                          <span className="text-5xl font-black tracking-tight text-gray-900">{plan.price}</span>
                          <span className="text-gray-400 font-medium mb-1.5 text-sm">/month</span>
                        </div>

                        <div className="h-px bg-slate-200/80 mb-6" />

                        <ul className="space-y-3.5 mb-8">
                          {plan.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3">
                              <div className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center bg-emerald-100 shrink-0">
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                              </div>
                              <span className="text-gray-600 text-sm font-medium leading-normal">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-3.5 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-md transition-all ${plan.button}`}
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <div className="block md:hidden overflow-hidden touch-pan-y min-h-[520px]">
            <AnimatePresence mode="wait">
              {(() => {
                const mobilePlan = plans[currentIndex];
                const Icon = mobilePlan.icon;
                const isPremiumOrPopular = mobilePlan.badge !== null;

                return (
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -60 }}
                    transition={{ type: "spring", stiffness: 260, damping: 26 }}
                    className={`relative rounded-3xl p-[1px] h-full flex flex-col justify-between ${isPremiumOrPopular
                      ? "bg-gradient-to-b from-blue-500 via-purple-400 to-pink-300"
                      : "bg-white/60 border border-slate-200"
                      }`}
                  >
                    <div className={`relative h-full rounded-3xl bg-gradient-to-b ${mobilePlan.gradient} p-8 shadow-xl ${mobilePlan.glow}`}>
                      {mobilePlan.badge && (
                        <div className="absolute top-5 right-5">
                          <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-blue-600 text-white uppercase tracking-wide">
                            {mobilePlan.badge}
                          </span>
                        </div>
                      )}

                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-white shadow-md border border-slate-100">
                        <Icon className="w-7 h-7 text-blue-600" />
                      </div>

                      <div className="mb-5">
                        <h3 className="text-2xl font-black text-gray-900">{mobilePlan.name}</h3>
                        <p className="mt-1 text-sm text-gray-500 font-medium">
                          Speed up to <span className="font-bold text-gray-900 text-base">{mobilePlan.speed} Mbps</span>
                        </p>
                      </div>

                      <div className="mb-6 flex items-end gap-1">
                        <span className="text-xl font-bold text-gray-500 mb-1.5">₹</span>
                        <span className="text-5xl font-black tracking-tight text-gray-900">{mobilePlan.price}</span>
                        <span className="text-gray-400 font-medium mb-1.5 text-sm">/month</span>
                      </div>

                      <div className="h-px bg-slate-200 mb-6" />

                      <ul className="space-y-3.5 mb-8">
                        {mobilePlan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <div className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center bg-emerald-100 shrink-0">
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            </div>
                            <span className="text-gray-600 text-sm font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <button className={`w-full py-3.5 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-md ${mobilePlan.button}`}>
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>

            <div className="flex justify-center gap-2 mt-8">
              {plans.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index ? "w-6 bg-blue-600" : "w-2 bg-slate-300"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

