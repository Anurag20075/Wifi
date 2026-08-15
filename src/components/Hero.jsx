import { motion } from "framer-motion";
import {
  Wifi,
  Router,
  Gamepad2,
  Tv,
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "919767979921";

const WHATSAPP_MESSAGE = encodeURIComponent(
 "Hi AlandiCity Broadband, I want to know more about your wifi plans and services."
);

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-white pt-24 lg:min-h-screen lg:pt-20"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute right-[-120px] top-[-100px] h-[500px] w-[500px] rounded-full bg-blue-500/[0.07] blur-[130px]" />

        <div className="absolute bottom-[-120px] left-[-100px] h-[450px] w-[450px] rounded-full bg-cyan-400/[0.06] blur-[120px]" />

        <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/[0.035] blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 lg:px-8 lg:py-20">

        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 xl:gap-16">

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/80 px-4 py-2 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
              </span>

              <Zap className="h-3.5 w-3.5 fill-blue-600 text-blue-600" />

              <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-blue-600 sm:text-xs">
                100% Fiber. 100% Speed.
              </span>
            </motion.div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.04] tracking-[-0.045em] text-gray-900 sm:text-6xl lg:text-6xl xl:text-7xl">
              Lightning Fast
              <br />

              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Fiber Internet
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-gray-500 sm:text-lg sm:leading-8 lg:text-[18px]">
              Experience ultra-fast, reliable, and secure internet built for
              streaming, gaming, remote work, and everything you do online.
            </p>

            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row">

              <a
                href="#plans"
                className="group flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-8 py-4.5 text-base font-bold text-white shadow-xl shadow-blue-200 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-200 sm:px-9 sm:py-5 sm:text-lg"
              >
                View Plans

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 rounded-2xl border-2 border-gray-100 bg-white px-8 py-4.5 text-base font-bold text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366]/20 hover:bg-[#25D366]/5 hover:text-[#25D366] sm:px-9 sm:py-5 sm:text-lg"
              >
                <FaWhatsapp className="h-5 w-5 text-[#25D366]" />

                WhatsApp Chat
              </a>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-semibold text-gray-400 sm:text-sm">

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>100% Fiber Network</span>
              </div>

              <span className="hidden text-gray-300 sm:block">•</span>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Reliable Speeds</span>
              </div>

              <span className="hidden text-gray-300 sm:block">•</span>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>24/7 Support</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[620px]"
          >

            <div className="relative flex aspect-square items-center justify-center">

              <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.08] blur-[70px] sm:h-[380px] sm:w-[380px]" />

              <div className="absolute bottom-[16%] h-16 w-[70%] rounded-[100%] bg-blue-500/[0.18] blur-2xl" />

              <div className="absolute bottom-[18%] flex h-28 w-[68%] rotate-x-60 items-center justify-center rounded-[100%] border border-blue-100 bg-white/90 shadow-2xl backdrop-blur-sm sm:h-32">

                <div className="h-[78%] w-[78%] animate-spin-slow rounded-full border-2 border-dashed border-blue-500/20" />

                <div className="absolute h-[55%] w-[55%] rounded-full bg-blue-500/[0.035]" />
              </div>

              {[1, 2, 3].map((ring) => (
                <motion.div
                  key={ring}
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: [0, 0.3, 0],
                    scale: [0.7, 1.5],
                  }}
                  transition={{
                    duration: 3.5,
                    delay: ring * 1.1,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className="absolute h-48 w-48 rounded-full border border-blue-500/30 sm:h-64 sm:w-64 lg:h-72 lg:w-72"
                />
              ))}

              <motion.div
                animate={{
                  y: [0, -14, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-20"
              >

                <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.12] blur-3xl sm:h-56 sm:w-56" />

                <div className="relative flex h-48 w-48 items-center justify-center overflow-hidden rounded-[28px] border border-white bg-gradient-to-br from-white via-white to-blue-50 shadow-[0_30px_80px_rgba(37,99,235,0.18)] sm:h-56 sm:w-56 lg:h-64 lg:w-64">

                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(37,99,235,0.12),transparent_58%)]" />

                  <div className="absolute right-5 top-5 h-10 w-10 rounded-full bg-blue-500/[0.05]" />

                  <Router
                    className="relative z-10 h-24 w-24 text-blue-600 sm:h-28 sm:w-28 lg:h-32 lg:w-32"
                    strokeWidth={1.1}
                  />

                  <div className="absolute bottom-6 flex items-center gap-1.5">
                    {[1, 2, 3].map((light) => (
                      <motion.span
                        key={light}
                        animate={{
                          opacity: [0.35, 1, 0.35],
                        }}
                        transition={{
                          duration: 1.5,
                          delay: light * 0.25,
                          repeat: Infinity,
                        }}
                        className="h-1.5 w-1.5 rounded-full bg-green-500"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              <FloatingCard
                icon={<Tv className="h-4 w-4 text-orange-500" />}
                title="4K Ultra HD"
                className="right-[-1%] top-[13%] sm:right-[3%]"
                delay={0}
              />

              <FloatingCard
                icon={<Gamepad2 className="h-4 w-4 text-purple-500" />}
                title="Low Latency"
                className="bottom-[29%] left-[-1%] sm:left-[1%]"
                delay={1}
              />

              <FloatingCard
                icon={<ShieldCheck className="h-4 w-4 text-green-500" />}
                title="Secure"
                className="left-[2%] top-[25%] sm:left-[7%]"
                delay={2}
              />

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[13%] right-[4%] z-30 hidden rounded-2xl border border-blue-100 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md sm:block"
              >
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-gray-400">
                  Network
                </p>

                <div className="mt-1 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500" />

                  <span className="text-sm font-black text-gray-900">
                    100% Fiber
                  </span>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

      <style jsx>{`
        .rotate-x-60 {
          transform: rotateX(65deg);
        }

        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}

function FloatingCard({
  icon,
  title,
  className,
  delay,
}) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3.2,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute z-30 flex items-center gap-2.5 rounded-2xl border border-white/80 bg-white/85 p-2.5 shadow-xl backdrop-blur-md sm:gap-3 sm:p-3 ${className}`}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gray-50">
        {icon}
      </div>

      <span className="whitespace-nowrap text-[10px] font-extrabold text-gray-800 sm:text-xs">
        {title}
      </span>
    </motion.div>
  );
}