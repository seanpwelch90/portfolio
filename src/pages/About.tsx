import { motion } from 'framer-motion'
import {
  SiPython,
  SiTypescript,
  SiGo,
  SiRuby,
  SiKotlin,
  SiSwift,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiKubernetes,
  SiStripe,
  SiTerraform,
  SiDatadog,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { MdSmartphone } from 'react-icons/md'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
}

const langs = [
  { Icon: SiPython, label: 'Python', color: '#3776AB' },
  { Icon: SiTypescript, label: 'TypeScript', color: '#3178C6' },
  { Icon: SiGo, label: 'Go', color: '#00ADD8' },
  { Icon: SiRuby, label: 'Ruby', color: '#CC342D' },
  { Icon: SiKotlin, label: 'Kotlin', color: '#7F52FF' },
  { Icon: SiSwift, label: 'Swift', color: '#F05138' },
]

const technologies = [
  { Icon: SiReact, label: 'React' },
  { Icon: SiNextdotjs, label: 'Next.js' },
  { Icon: SiNodedotjs, label: 'Node.js' },
  { Icon: MdSmartphone, label: 'React Native' },
  { Icon: FaAws, label: 'AWS' },
  { Icon: SiKubernetes, label: 'Kubernetes' },
  { Icon: SiTerraform, label: 'Terraform' },
  { Icon: SiDatadog, label: 'Datadog' },
  { Icon: SiStripe, label: 'Stripe' },
]

const experienceBullets = [
  'Architected production payment and invoicing microservices using AWS Lambda, Node.js/TypeScript, Stripe, and Basis Theory for secure tokenized transactions.',
  'Built serverless infrastructure (Lambda, API Gateway, DynamoDB, Aurora Serverless) provisioned via Terraform and Spacelift with zero-downtime releases.',
  'Led backend integration for a newly acquired startup into MyFitnessPal — PostgreSQL to MySQL migration, Kubernetes CI/CD, Datadog telemetry.',
  'Shipped WearOS food logging endpoints used by tens of thousands of users; identified and fixed a third-party API metrics gap used to drive product decisions.',
  'Built and configured a personal AI agent platform (OpenClaw) — designing custom skills for ArgoCD GitOps workflows, Cloudflare DNS provisioning, Home Assistant smart home orchestration, and Plane project tracking; the system operates autonomously across messaging channels and CI/CD pipelines.',
  'Oversaw technical projects for the City of Pleasanton as webmaster and senior management analyst — directing web development, third-party API integrations, and cross-department initiatives.',
]

const skills = {
  Frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'React Native', 'Expo'],
  Backend: ['Node.js', 'Kotlin', 'Ruby on Rails', 'Go', 'MySQL', 'PostgreSQL', 'Redis'],
  Cloud: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'Aurora Serverless', 'Kubernetes', 'Terraform'],
  'AI / Automation': ['Cursor', 'GitHub Copilot', 'Claude', 'AI-assisted workflows'],
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
          I'm a senior software engineer who builds across the full stack — serverless
          microservices, payment infrastructure, and React frontends that work on web
          and mobile. Currently at{' '}
          <span className="text-white font-medium">Jewelers Mutual</span>, where I architected
          the payment and invoicing platform from the ground up.
        </motion.p>
        <motion.p variants={fadeUp} custom={2} className="mt-4 text-base leading-relaxed text-zinc-400">
          Before that, I spent three years at MyFitnessPal leading backend integrations for an
          acquired startup, shipping features used by millions of users, and mentoring a team of
          engineers through a major infrastructure migration. I care about pragmatic architecture,
          clean code, and systems that are actually maintainable six months later.
        </motion.p>
        <motion.p variants={fadeUp} custom={2.5} className="mt-4 text-base leading-relaxed text-zinc-400">
          Earlier in my career, I spent seven years at the City of Pleasanton as webmaster,
          developer, and senior management analyst — overseeing web properties, directing
          cross-department technical projects, and building internal tools that pulled data from
          third-party REST APIs into visualized dashboards.
        </motion.p>

        <motion.div variants={fadeUp} custom={3} className="mt-10">
          <h3 className="text-xs font-semibold tracking-widest uppercase text-zinc-500">
            Experience Highlights
          </h3>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-400">
            {experienceBullets.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/50" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={fadeUp} custom={4} className="mt-10">
          <h3 className="text-xs font-semibold tracking-widest uppercase text-zinc-500">
            Languages
          </h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {langs.map(({ Icon, label, color }) => (
              <div
                key={label}
                className="card-glow flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-2"
              >
                <Icon size={16} color={color} />
                <span className="text-sm font-medium text-zinc-300">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} custom={5} className="mt-10">
          <h3 className="text-xs font-semibold tracking-widest uppercase text-zinc-500">
            Technologies
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map(({ Icon, label }) => (
              <div
                key={label}
                className="skill-pill flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1"
              >
                <Icon size={12} className="text-zinc-400" />
                <span className="text-[11px] font-medium text-zinc-400">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} custom={6} className="mt-10">
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
