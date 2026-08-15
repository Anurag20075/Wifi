
import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  Headphones,
  Tag,
  UserRoundCheck,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Blazing Fast Speed",
    description:
      "Experience ultra-fast fiber internet for gaming, streaming, and seamless connectivity.",
    gradient: "from-cyan-400 to-blue-500",
    glow: "group-hover:shadow-cyan-400/30",
  },
  {
    icon: ShieldCheck,
    title: "Reliable & Secure",
    description:
      "Enterprise-grade infrastructure with advanced protection and maximum uptime.",
    gradient: "from-blue-500 to-indigo-600",
    glow: "group-hover:shadow-blue-500/30",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our support experts are available around the clock whenever you need help.",
    gradient: "from-sky-400 to-cyan-500",
    glow: "group-hover:shadow-sky-400/30",
  },
  {
    icon: Tag,
    title: "Affordable Plans",
    description:
      "Premium internet experiences designed for every budget and lifestyle.",
    gradient: "from-indigo-500 to-purple-500",
    glow: "group-hover:shadow-indigo-500/30",
  },
  {
    icon: UserRoundCheck,
    title: "Quick Installation",
    description:
      "Fast same-day installation with hassle-free setup by our fiber experts.",
    gradient: "from-blue-500 to-cyan-400",
    glow: "group-hover:shadow-blue-400/30",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function WhyChoose() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden py-28 bg-gradient-to-b from-white via-slate-50 to-blue-50"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-200/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />

            <span className="text-sm font-semibold text-primary">
              Why Customers Love FiberNet
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight mb-6">
            Built For Speed. <br />
            Designed For Reliability.
          </h2>

          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-500">
            We combine blazing-fast fiber technology with premium customer
            experience to deliver internet that simply works — everywhere,
            every time.
          </p>
        </motion.div>


        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6"
        >
          {features.map(
            ({ icon: Icon, title, description, gradient, glow }) => (
              <motion.div
                key={title}
                variants={item}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className={`group relative overflow-hidden rounded-[32px] border border-white/40 bg-white/70 backdrop-blur-xl p-8 shadow-xl transition-all duration-500 ${glow}`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-white/40 to-transparent" />

                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradient}`}
                />

                <div className="relative mb-8">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} p-[1px] shadow-lg`}
                  >
                    <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                      <Icon
                        className="w-7 h-7 text-gray-900"
                        strokeWidth={1.8}
                      />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-snug">
                    {title}
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-500">
                    {description}
                  </p>
                </div>

                <div className="absolute bottom-6 right-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center shadow-lg`}
                  >
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}