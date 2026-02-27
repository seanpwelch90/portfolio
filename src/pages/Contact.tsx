import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
}

const links = [
  {
    label: 'Email',
    value: 'sean.welch@me.com',
    href: 'mailto:sean.welch@me.com',
    icon: '✉',
  },
  {
    label: 'LinkedIn',
    value: '/in/sean-p-welch',
    href: 'https://linkedin.com/in/sean-p-welch',
    icon: '⬡',
  },
  {
    label: 'GitHub',
    value: '@seanpwelch90',
    href: 'https://github.com/seanpwelch90',
    icon: '◈',
  },
]

export default function Contact() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="max-w-2xl"
    >
      <motion.h2
        variants={fadeUp}
        custom={0}
        className="text-3xl font-bold tracking-tight"
      >
        Get in Touch
      </motion.h2>
      <motion.p
        variants={fadeUp}
        custom={1}
        className="mt-3 text-base text-zinc-400"
      >
        Want to collaborate or chat? Email is best.
      </motion.p>

      <div className="mt-8 grid gap-3">
        {links.map((link, i) => (
          <motion.a
            key={link.label}
            variants={fadeUp}
            custom={2 + i}
            className="card-glow group flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all"
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
          >
            <span className="text-xl text-cyan-400/50 transition-colors group-hover:text-cyan-400">
              {link.icon}
            </span>
            <div>
              <span className="text-xs font-medium tracking-wide uppercase text-zinc-500">
                {link.label}
              </span>
              <div className="mt-0.5 text-sm font-semibold text-white">
                {link.value}
              </div>
            </div>
            <span className="ml-auto text-zinc-600 transition-all group-hover:translate-x-1 group-hover:text-zinc-400">
              →
            </span>
          </motion.a>
        ))}
      </div>
    </motion.section>
  )
}
