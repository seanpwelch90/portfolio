import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
}

const skills = {
  Frontend: ['TypeScript', 'React', 'Next.js', 'Tailwind', 'React Native', 'Expo'],
  Backend: [
    'Node.js',
    'AWS Lambda',
    'API Gateway',
    'DynamoDB',
    'Aurora Serverless',
    'Kubernetes',
    'MySQL/PostgreSQL',
  ],
  'AI / Automation': ['Cursor', 'GitHub Copilot', 'Claude', 'Workflow optimization'],
}

export default function About() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="grid gap-12 lg:grid-cols-[1fr_300px]"
    >
      <div>
        <motion.h2
          variants={fadeUp}
          custom={0}
          className="text-3xl font-bold tracking-tight"
        >
          About
        </motion.h2>

        <motion.p variants={fadeUp} custom={1} className="mt-5 text-base leading-relaxed text-zinc-400">
          I'm a software engineer focused on building clean, reliable systems
          and user-facing experiences. Recently, I've worked across serverless
          microservices, payments/invoicing integrations, and modern React and
          React Native applications.
        </motion.p>
        <motion.p variants={fadeUp} custom={2} className="mt-4 text-base leading-relaxed text-zinc-400">
          I enjoy bridging product and engineering: making pragmatic architecture
          decisions, improving developer workflows, and shipping features that
          are easy to maintain.
        </motion.p>

        <motion.div variants={fadeUp} custom={3} className="mt-10">
          <h3 className="text-xs font-semibold tracking-widest uppercase text-zinc-500">
            Experience Highlights
          </h3>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-400">
            {[
              'Architected payment and invoicing services using AWS Lambda + Node.js/TypeScript, integrating Stripe and Basis Theory.',
              'Built serverless infrastructure (Lambda, API Gateway, DynamoDB, Aurora Serverless) provisioned via Terraform/Spacelift.',
              'Led frontend development and mentorship for React / React Native / Expo applications.',
              'Migrated and integrated backend services across teams; built CI/CD pipelines and Kubernetes deployments; added Datadog telemetry.',
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/50" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={fadeUp} custom={4} className="mt-10">
          <h3 className="text-xs font-semibold tracking-widest uppercase text-zinc-500">
            Skills
          </h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {Object.entries(skills).map(([group, items]) => (
              <div
                key={group}
                className="card-glow rounded-xl border border-white/[0.06] bg-white/[0.02] p-5"
              >
                <p className="text-sm font-semibold text-white">{group}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="skill-pill rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[11px] font-medium text-zinc-400"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.aside
        variants={fadeUp}
        custom={2}
        className="h-fit space-y-6"
      >
        <div className="overflow-hidden rounded-xl border border-white/[0.06]">
          <img
            src="/sean.jpg"
            alt="Sean Welch"
            className="aspect-square w-full object-cover"
          />
        </div>

        <a
          href="/resume.pdf"
          className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-black transition-all hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
          target="_blank"
          rel="noreferrer"
        >
          Download Resume
          <span className="transition-transform group-hover:translate-x-0.5">↗</span>
        </a>
      </motion.aside>
    </motion.section>
  )
}
