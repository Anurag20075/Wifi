
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  Check,
  Zap,
  Star,
  Crown,
  Wifi,
  ShieldCheck,
  Headphones,
  Gauge,
  Tv,
  Download,
  Router,
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    speed: "40",
    price: "499",
    icon: Zap,
    badge: null,
    description: "Perfect for everyday browsing and staying connected.",
    gradient: "from-slate-100 to-white",
    accent: "blue",
    features: [
      "Free Installation & Wi-Fi Router Included",
      "Reliable Everyday Connectivity",
      "Smooth Browsing and HD Streaming",
    ],
    benefits: [
      "Ideal for everyday internet usage",
      "Browse websites smoothly",
      "Stay connected with family",
      "Reliable home connectivity",
    ],
  },
  {
    name: "Basic",
    speed: "60",
    price: "599",
    icon: Zap,
    badge: null,
    description: "More speed for multiple devices and everyday streaming.",
    gradient: "from-slate-100 to-white",
    accent: "blue",
    features: [
      "Free Installation & Wi-Fi Router Included",
      "Seamless Multi Device Connectivity",
      "Faster Browsing and Streaming",
    ],
    benefits: [
      "Connect multiple devices",
      "Smooth video streaming",
      "Faster downloads",
      "Better everyday performance",
    ],
  },
  {
    name: "Entertainment",
    speed: "100",
    price: "699",
    icon: Star,
    badge: "OTT PACK",
    description: "Enjoy entertainment with high-speed internet and OTT benefits.",
    gradient: "from-blue-50 to-cyan-50",
    accent: "blue",
    features: [
      "Free Installation & Wi-Fi Router Included",
      "ZEE5 + SonyLIV + Hotstar + 10 More OTTs",
      "Smooth 4K Streaming",
    ],
    benefits: [
      "Enjoy your favourite OTT platforms",
      "Smooth 4K streaming",
      "High-speed downloads",
      "Multi-device entertainment",
    ],
  },
  {
    name: "Binge Plus",
    speed: "150",
    price: "999",
    icon: Star,
    badge: "IPTV + OTT",
    description: "A complete entertainment experience with IPTV and OTT access.",
    gradient: "from-blue-50 to-cyan-50",
    accent: "blue",
    features: [
      "Free Installation & Wi-Fi Router Included",
      "Live IPTV + ZEE5 + SonyLIV + Hotstar + 10 More OTTs",
      "Seamless Multi Device Streaming",
    ],
    benefits: [
      "Live IPTV entertainment",
      "Access to OTT platforms",
      "Smooth multi-device streaming",
      "High-speed internet connectivity",
    ],
  },
  {
    name: "Pro Gamer",
    speed: "200",
    price: "1199",
    icon: Crown,
    badge: "HIGH PERFORMANCE",
    description: "High-speed connectivity for gamers and demanding users.",
    gradient: "from-purple-50 to-pink-50",
    accent: "purple",
    features: [
      "Free Installation & Wi-Fi Router Included",
      "Live IPTV + ZEE5 + SonyLIV + Hotstar + 10 More OTTs",
      "Ultra Low Latency and Fast Downloads",
    ],
    benefits: [
      "High-speed gaming connectivity",
      "Ultra-low latency experience",
      "Faster downloads",
      "Smooth online entertainment",
    ],
  },
  {
    name: "Ultra Elite",
    speed: "300",
    price: "1499",
    icon: Crown,
    badge: "ULTIMATE SPEED",
    description: "Our premium plan for users who want maximum speed.",
    gradient: "from-purple-50 to-pink-50",
    accent: "purple",
    features: [
      "Free Installation & Wi-Fi Router Included",
      "Live IPTV + ZEE5 + SonyLIV + Hotstar + 10 More OTTs",
      "Gigabit Ready Connectivity",
    ],
    benefits: [
      "Up to 300 Mbps internet speed",
      "Premium IPTV and OTT benefits",
      "Fast downloads and streaming",
      "Gigabit-ready connectivity",
    ],
  },
];

export default function PlanDetails() {
  const { planName } = useParams();
  const navigate = useNavigate();

  const plan = plans.find(
    (p) =>
      p.name.toLowerCase().replace(/\s+/g, "-") === planName
  );

  if (!plan) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-6">
        <Wifi className="w-16 h-16 text-blue-500 mb-5" />

        <h1 className="text-3xl font-black text-gray-900">
          Plan Not Found
        </h1>

        <p className="text-gray-500 mt-3">
          The internet plan you are looking for does not exist.
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-7 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const Icon = plan.icon;

  const isPremium = plan.accent === "purple";

  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-blue-50">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-12 md:py-20">

        {/* Back Navigation */}
        <button
          onClick={() => navigate("/#plans")}
          className="flex items-center gap-2 text-gray-500 hover:text-blue-600 font-semibold transition mb-12"
        >
          <ArrowLeft size={19} />
          Back to Internet Plans
        </button>

        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <div>

            <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold border ${
              isPremium
                ? "bg-purple-50 text-purple-600 border-purple-200"
                : "bg-blue-50 text-blue-600 border-blue-200"
            }`}>
              <Wifi size={16} />
              INTERNET PLAN DETAILS
            </span>

            <h1 className="mt-7 text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight">
              {plan.name}
              <span className={`block ${
                isPremium ? "text-purple-600" : "text-blue-600"
              }`}>
                Internet Plan
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-xl">
              {plan.description}
            </p>

            {/* Speed */}
            <div className="mt-9 flex items-center gap-5">

              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                isPremium
                  ? "bg-purple-100 text-purple-600"
                  : "bg-blue-100 text-blue-600"
              }`}>
                <Icon size={32} />
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-400">
                  INTERNET SPEED
                </p>

                <h2 className="text-3xl font-black text-gray-900">
                  {plan.speed} Mbps
                </h2>
              </div>

            </div>

            {/* Quick Benefits */}
            <div className="mt-9 grid grid-cols-2 gap-4">

              <div className="flex items-center gap-3">
                <ShieldCheck className="text-emerald-500 shrink-0" />
                <span className="text-sm font-semibold text-gray-600">
                  Free Installation
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Router className="text-emerald-500 shrink-0" />
                <span className="text-sm font-semibold text-gray-600">
                  Router Included
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Gauge className="text-emerald-500 shrink-0" />
                <span className="text-sm font-semibold text-gray-600">
                  High Speed Fiber
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Headphones className="text-emerald-500 shrink-0" />
                <span className="text-sm font-semibold text-gray-600">
                  Customer Support
                </span>
              </div>

            </div>

          </div>

          {/* Right Pricing Card */}
          <div className="relative">

            <div className={`absolute -inset-3 rounded-[35px] blur-2xl opacity-20 ${
              isPremium ? "bg-purple-500" : "bg-blue-500"
            }`} />

            <div className={`relative rounded-[30px] p-[1px] shadow-2xl ${
              isPremium
                ? "bg-gradient-to-br from-purple-500 via-pink-400 to-purple-200"
                : "bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-200"
            }`}>

              <div className={`rounded-[29px] bg-gradient-to-b ${plan.gradient} p-7 sm:p-10`}>

                <div className="flex justify-between items-center">

                  <div>
                    <p className="text-sm font-bold text-gray-400">
                      YOUR SELECTED PLAN
                    </p>

                    <h2 className="text-2xl font-black text-gray-900 mt-2">
                      {plan.name}
                    </h2>
                  </div>

                  {plan.badge && (
                    <span className="bg-blue-600 text-white px-3 py-2 rounded-full text-[10px] font-black tracking-wide">
                      {plan.badge}
                    </span>
                  )}

                </div>

                {/* Price */}
                <div className="mt-9 flex items-end gap-2">

                  <span className="text-2xl font-bold text-gray-400 mb-2">
                    ₹
                  </span>

                  <span className="text-6xl sm:text-7xl font-black tracking-tight text-gray-900">
                    {plan.price}
                  </span>

                  <span className="text-gray-400 font-semibold mb-3">
                    / month
                  </span>

                </div>

                <p className="mt-2 text-sm text-gray-400">
                  Monthly subscription price
                </p>

                <div className="h-px bg-gray-200 my-8" />

                {/* Included Features */}
                <h3 className="text-lg font-black text-gray-900 mb-6">
                  What's Included?
                </h3>

                <div className="space-y-5">

                  {plan.features.map((feature, index) => (

                    <div
                      key={index}
                      className="flex items-start gap-3"
                    >

                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                        <Check
                          size={15}
                          className="text-emerald-600"
                        />
                      </div>

                      <p className="text-sm font-semibold text-gray-600 leading-relaxed">
                        {feature}
                      </p>

                    </div>

                  ))}

                </div>

                {/* CTA */}
                <button
                  onClick={() => navigate("/#plans")}
                  className={`mt-10 w-full py-4 rounded-2xl font-bold text-white flex items-center justify-center gap-3 shadow-lg transition-all hover:-translate-y-1 ${
                    isPremium
                      ? "bg-gradient-to-r from-purple-600 to-pink-500 hover:shadow-purple-300"
                      : "bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-blue-300"
                  }`}
                >
                  Explore Other Plans
                  <ArrowRight size={19} />
                </button>

                <p className="mt-5 text-center text-xs text-gray-400">
                  Free installation and Wi-Fi router included.
                </p>

              </div>
            </div>
          </div>

        </div>

        {/* Benefits Section */}
        <section className="mt-24">

          <div className="text-center mb-12">

            <span className="text-blue-600 font-bold text-sm uppercase tracking-wider">
              Plan Benefits
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl font-black text-gray-900">
              Everything You Need
            </h2>

            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              Get more out of your internet connection with benefits included in your selected plan.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {plan.benefits.map((benefit, index) => {

              const benefitIcons = [
                <Wifi size={25} />,
                <Tv size={25} />,
                <Download size={25} />,
                <ShieldCheck size={25} />,
              ];

              return (

                <div
                  key={index}
                  className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
                >

                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                    {benefitIcons[index]}
                  </div>

                  <h3 className="font-bold text-gray-800 leading-relaxed">
                    {benefit}
                  </h3>

                </div>

              );
            })}

          </div>

        </section>

        {/* Bottom CTA */}
        <section className="mt-24">

          <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-8 sm:p-14 text-center">

            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

            <div className="relative">

              <Wifi className="mx-auto text-white mb-5" size={42} />

              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Ready for Faster Internet?
              </h2>

              <p className="mt-4 text-blue-100 max-w-xl mx-auto">
                Explore our internet plans and find the perfect connection for your home.
              </p>

              <button
                onClick={() => navigate("/#plans")}
                className="mt-8 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition inline-flex items-center gap-3"
              >
                View All Plans
                <ArrowRight size={19} />
              </button>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}
