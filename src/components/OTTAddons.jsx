
import { motion } from "framer-motion";
import { Plus, ArrowRight, Sparkles } from "lucide-react";

const ottServices = [
  {
    name: "Prime Video",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg",
    color:
      "hover:border-blue-300 hover:shadow-blue-100/60",
  },
  {
    name: "Disney+ Hotstar",
    logo:
      "https://images.indianexpress.com/2023/06/Disney-Hotstar-logo-featured.jpg?w=1200",
    color:
      "hover:border-blue-300 hover:shadow-blue-100/60",
  },
  {
    name: "SonyLIV",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/f/f7/SonyLIV_2020.png",
    color:
      "hover:border-purple-300 hover:shadow-purple-100/60",
  },
];

export default function OTTSection() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">

      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[700px] -translate-x-1/2 rounded-full bg-blue-500/[0.035] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden rounded-[32px] border border-gray-100 bg-gradient-to-br from-gray-50 via-white to-blue-50/40 p-6 shadow-sm sm:p-8 lg:rounded-[40px] lg:p-10 xl:p-12"
        >

          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/[0.06] blur-[80px]" />

          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-14">

            <div className="max-w-md text-center lg:text-left">

              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5">
                <Sparkles className="h-3.5 w-3.5 text-blue-600" />

                <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-blue-600">
                  OTT Add-ons
                </span>
              </div>

              <h3 className="text-2xl font-black tracking-tight text-gray-900 sm:text-3xl">
                Entertainment,
                <br className="hidden sm:block" />{" "}
                <span className="text-blue-600">
                  included your way.
                </span>
              </h3>

              <p className="mt-4 max-w-sm text-sm font-medium leading-6 text-gray-500 sm:text-[15px]">
                Add your favorite OTT subscriptions to your fiber plan and
                manage everything through one simple monthly bill.
              </p>

              <div className="mt-6 flex items-center justify-center gap-2 text-xs font-semibold text-gray-400 lg:justify-start">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                Available with selected plans
              </div>
            </div>

            <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-3 lg:max-w-[620px] lg:gap-4">

              {ottServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className={`group relative flex min-h-[150px] cursor-pointer flex-col items-center justify-center gap-5 overflow-hidden rounded-[22px] border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-xl ${service.color}`}
                >

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative flex h-10 w-full items-center justify-center">
                    <img
                      src={service.logo}
                      alt={`${service.name} logo`}
                      className="max-h-9 max-w-[105px] object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <button
                    type="button"
                    className="relative flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-blue-600 transition-all duration-300 group-hover:border-blue-200 group-hover:bg-blue-600 group-hover:text-white"
                  >
                    <Plus
                      size={13}
                      strokeWidth={3}
                    />

                    <span className="text-[10px] font-black uppercase tracking-wider">
                      Add
                    </span>
                  </button>
                </motion.div>
              ))}
              <motion.a
                href="#plans"
                whileHover={{
                  y: -6,
                }}
                className="group col-span-2 flex min-h-[110px] items-center justify-between rounded-[22px] border border-blue-100 bg-blue-50/60 px-5 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:shadow-xl sm:col-span-3 lg:col-span-3"
              >
                <div className="text-left">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-blue-600">
                    More entertainment
                  </p>

                  <p className="mt-1 text-sm font-bold text-gray-900">
                    Explore plans with OTT benefits
                  </p>
                </div>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm transition-all duration-300 group-hover:translate-x-1">
                  <ArrowRight size={18} />
                </div>
              </motion.a>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}