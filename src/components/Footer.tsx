export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-3 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-zinc-600">
          © {new Date().getFullYear()} Sean Welch
        </p>

        <div className="flex items-center gap-5 text-xs">
          {[
            { label: 'GitHub', href: 'https://github.com/seanpwelch90' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/sean-p-welch' },
            { label: 'Email', href: 'mailto:sean.welch@me.com' },
          ].map((l) => (
            <a
              key={l.label}
              className="text-zinc-600 transition-colors hover:text-zinc-300"
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel={l.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
