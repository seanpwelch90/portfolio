import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
}

const cards = [
  {
    title: 'Frontend',
    text: 'React, TypeScript, Tailwind, Next.js — focused on UX and maintainability.',
    icon: '◆',
    color: 'from-cyan-400/10 to-transparent',
  },
  {
    title: 'Backend',
    text: 'Node.js, AWS Lambda, API Gateway, DynamoDB/Aurora — serverless-first systems.',
    icon: '▲',
    color: 'from-violet-400/10 to-transparent',
  },
  {
    title: 'AI / Automation',
    text: 'AI-assisted workflows, refactors, and tooling to ship faster and safer.',
    icon: '●',
    color: 'from-blue-400/10 to-transparent',
  },
]

export default function Home() {
  return (
    <section className="flex min-h-[calc(100vh-280px)] flex-col justify-center sm:py-12">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-sm font-medium tracking-widest uppercase text-cyan-400/80"
          >
            Software Engineer
          </motion.p>

          <motion.h1
            variants={fadeUp}
            custom={1}
            className="mt-4 text-5xl font-bold tracking-tight sm:text-7xl"
          >
            Sean <span className="gradient-text-animated">Welch</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mt-2 text-2xl font-light text-zinc-500 sm:text-3xl"
          >
            Full-stack <span className="gradient-text font-normal">· AI/Automation</span>
          </motion.p>

          <motion.div variants={fadeUp} custom={2.5} className="glow-line mt-6 w-24" />

          <motion.p
            variants={fadeUp}
            custom={3}
            className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            I build reliable product experiences end-to-end: modern React
            frontends, serverless backends, and pragmatic AI-assisted automation.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={4}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/about"
              className="btn-glow group inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-2.5 text-sm font-semibold text-black transition-all hover:bg-cyan-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]"
            >
              About Me
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full border border-white/10 px-6 py-2.5 text-sm font-semibold text-zinc-300 transition-all hover:border-cyan-400/40 hover:text-white hover:shadow-[0_0_16px_rgba(34,211,238,0.1)]"
            >
              Get in Touch
            </Link>
            <a
              href="/resume.pdf"
              className="inline-flex items-center rounded-full border border-white/10 px-6 py-2.5 text-sm font-semibold text-zinc-300 transition-all hover:border-white/20 hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              Resume ↗
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2}
          className="mt-12 lg:mt-4"
        >
          <div className="relative">
            <div className="photo-glow absolute -inset-2 rounded-full bg-gradient-to-br from-cyan-400/20 via-violet-500/15 to-blue-500/20 blur-2xl" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-cyan-400/30 to-violet-500/30 opacity-0 blur-md transition-opacity duration-500 hover:opacity-100" />
            <img
              src="/sean.jpg"
              alt="Sean Welch"
              className="relative z-10 h-48 w-48 rounded-full border-2 border-white/10 object-cover shadow-2xl ring-1 ring-cyan-400/10 sm:h-64 sm:w-64"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        className="mt-10 grid gap-4 sm:grid-cols-3 lg:mt-12"
      >
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            variants={fadeUp}
            custom={5 + i}
            className="card-glow group overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm"
          >
            <div className={`absolute inset-0 bg-gradient-to-b ${c.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
            <div className="relative">
              <span className="text-lg text-cyan-400/60 transition-colors group-hover:text-cyan-400">{c.icon}</span>
              <p className="mt-3 text-sm font-semibold text-white">{c.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500 transition-colors group-hover:text-zinc-400">{c.text}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
