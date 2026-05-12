import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Download,
  ExternalLink,
  FileCheck2,
  FileText,
  GraduationCap,
  Library,
  LockKeyhole,
  Mail,
  Menu,
  MonitorSmartphone,
  Phone,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserCheck,
  UsersRound,
  X,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const appUrl = 'https://scopesolutions.com.et'
const apkDownloadUrl = '/downloads/incisio-android.apk'

const contactDetails = [
  {
    label: 'Contact name',
    value: 'Dr. Mahad',
    href: null,
    icon: UserCheck,
  },
  {
    label: 'Email',
    value: 'residentcompanion@gmail.com',
    href: 'mailto:residentcompanion@gmail.com',
    icon: Mail,
  },
  {
    label: 'Tel',
    value: '+251-911053336',
    href: 'tel:+251911053336',
    icon: Phone,
  },
]

const navItems = [
  ['Platform', '#platform'],
  ['Tour', '#tour'],
  ['Outcomes', '#outcomes'],
  ['Security', '#security'],
  ['Pricing', '#pricing'],
  ['Contact', '#contact'],
]

const metrics = [
  ['3', 'Role-specific workspaces'],
  ['1', 'Longitudinal training record'],
  ['Web', 'Accessible from browser'],
  ['Secure', 'Role-governed data access'],
]

const painPoints = [
  'Retrospective end-of-year logbook reconstruction is time-consuming and inefficient',
  'Consultant verification is difficult due to delayed documentation and high workload',
  'Paper-based systems lead to inconsistent and unreliable case records',
  'Departments lack centralized analytics and real-time resident progress tracking',
  'Manual formatting, signatures, printing, and binding create unnecessary administrative burden',
]

const features = [
  {
    icon: ClipboardCheck,
    title: 'Structured procedure capture',
    text: 'Residents record patient context, case type, operative role, diagnosis, outcome, complications, team members, and tagged consultant in a consistent workflow.',
  },
  {
    icon: FileCheck2,
    title: 'Validation workflow',
    text: 'Consultants review cases, approve or reject submissions, leave feedback, and keep resident records aligned with supervised clinical exposure.',
  },
  {
    icon: BarChart3,
    title: 'Program dashboard',
    text: 'Coordinators can evaluate resident procedure exposure, procedure volume, type, and validated training output.',
  },
  {
    icon: GraduationCap,
    title: 'Quiz and progress engine',
    text: 'Question-bank practice is connected to performance tracking, coverage, accuracy, streaks, history, and system-level learning signals.',
  },
  {
    icon: Library,
    title: 'Curated library',
    text: 'Standard reference books, landmark guidelines, seminar materials, and learning resources in one controlled library.',
  },
  {
    icon: BadgeCheck,
    title: 'Identity verification',
    text: 'Consultants and coordinators submit proof of identity documents for review before receiving higher-trust access.',
  },
  {
    icon: FileText,
    title: 'Export-ready records',
    text: 'Validated resident and consultant activity can be prepared for program review, reporting, and institutional documentation.',
  },
]

const outcomes = [
  {
    title: 'For residents',
    text: 'A clean record of operative exposure, assisted roles, outcomes, learning activity, and progress over time.',
    icon: Stethoscope,
  },
  {
    title: 'For consultants',
    text: 'A real-time, organized overview of trainee operative activity with instant validation workflows: no more end-of-year signature bottlenecks or forgotten cases.',
    icon: UserCheck,
  },
  {
    title: 'For coordinators',
    text: 'A clearer view of training volume, consultant supervision, resident distribution, and case patterns.',
    icon: Building2,
  },
]

const roles = [
  {
    title: 'Residents',
    icon: Stethoscope,
    tone: 'bg-brand-ink text-white',
    description: 'Document real exposure and connect it to learning progress.',
    items: ['Log procedures', 'Tag consultants', 'Track quizzes and reports'],
  },
  {
    title: 'Consultants',
    icon: UserCheck,
    tone: 'bg-brand-teal text-white',
    description: 'Validate the work they supervise without losing context.',
    items: ['Approve cases', 'Give feedback', 'Export reviewed work'],
  },
  {
    title: 'Coordinators',
    icon: UsersRound,
    tone: 'bg-brand-blue text-white',
    description: 'See department-level activity and approve report requests.',
    items: ['Monitor residents', 'Review exports', 'Assess volume'],
  },
]

const workflow = [
  {
    label: 'Capture',
    title: 'Resident records the case',
    text: 'The entry captures structured clinical and training fields instead of loose notes.',
  },
  {
    label: 'Validate',
    title: 'Consultant reviews the submission',
    text: 'Approval, rejection, feedback, and reviewer identity become part of the record.',
  },
  {
    label: 'Monitor',
    title: 'Coordinator oversees the entire operative performance',
    text: 'The coordinator oversees the entire training program, ensuring structured case tracking, validation flow, and consistent residency progression.',
  },
  {
    label: 'Improve',
    title: 'Learning data closes the loop',
    text: 'Quiz performance and procedure history help residents understand where to focus.',
  },
]

const security = [
  'Role-based access for residents, consultants, and coordinators',
  'Controlled access to training records, messages, payments, and reviews',
  'Restricted document uploads with ownership and file-type checks',
  'Identity verification workflows for senior user roles',
  'Protected application access behind secure sign-in',
]

const roleTour = {
  Resident: {
    icon: Stethoscope,
    image: '/resident-dashboard-app-screenshot.png',
    headline: 'A focused workspace for every procedure and every learning signal.',
    subline: 'Residents can log procedures, tag supervisors, add assistants, review progress, and continue quiz preparation from the same place.',
    stats: [
      ['Logbook', 'New entry'],
      ['Progress', 'Personal'],
      ['Learning', 'Quiz active'],
    ],
    bullets: ['Step-by-step logbook entry', 'Supervisor tagging', 'Progress reports and question history'],
  },
  Consultant: {
    icon: UserCheck,
    image: '/consultant-dashboard-app-screenshot.png',
    headline: 'Fast validation without losing clinical context.',
    subline: 'Consultants see pending cases, approve or reject submissions, leave feedback, and export reviewed work when needed.',
    stats: [
      ['Reviews', 'Assigned'],
      ['Feedback', 'Recorded'],
      ['Status', 'Verified'],
    ],
    bullets: ['Case review queue', 'Approve/reject feedback', 'Validated supervision history'],
  },
  Coordinator: {
    icon: UsersRound,
    image: '/coordinator-dashboard-app-screenshot.png',
    headline: 'Department oversight that stays connected to resident records.',
    subline: 'Coordinators can monitor residents, review consultant requests, and understand institutional procedure distribution.',
    stats: [
      ['Residents', 'Department view'],
      ['Activity', 'Program insights'],
      ['Reports', 'Export-ready'],
    ],
    bullets: ['Department activity view', 'Resident profile summaries', 'Consultant export review'],
  },
}

const pricingPlans = [
  {
    role: 'Resident',
    name: 'Basic',
    price: '1,999 Birr/year',
    text: 'Essential tools for daily resident operations.',
    items: [
      '# of quizzes/day: 3',
      'Questions/block: 15, 25',
      'Practice modes: Tutor mode',
      { text: 'Spaced Repetition: No', muted: true },
      'Analytics: Individual gross stats',
      { text: 'Leaderboards / percentiles: No', muted: true },
      'Push notifications: Basic reminders',
      { text: 'Multiple Review Books: No', muted: true },
      'Logbook: Full features',
      'Multi-device sync: 1',
    ],
  },
  {
    role: 'Resident',
    name: 'Premium',
    price: '2,249 Birr/year',
    text: 'Most popular resident plan with advanced learning and progress tools.',
    items: [
      '# of quizzes/day: Unlimited',
      'Questions/block: 15, 25, 50, 100',
      'Practice modes: Tutor mode, Exam mode',
      'Spaced Repetition: Yes',
      'Analytics: Basic + granular, system stats',
      'Leaderboards: Global percentiles + cohort comparisons',
      'Push notifications: Smart reminders',
      'Multiple Review Books: Yes',
      'Logbook: Full features',
      'Multi-device sync: 2',
    ],
    featured: true,
    badge: 'Popular',
  },
  {
    role: 'Consultant',
    name: 'Basic',
    price: 'Free Forever',
    text: 'Core validation tools at no cost.',
    items: [
      'Pending Procedure Review',
      'Review History',
      'Procedure Breakdown & Filters',
      { text: 'Submit for Coordinator Approval', muted: true },
      { text: 'Export PDF / XLSX', muted: true },
    ],
  },
  {
    role: 'Consultant',
    name: 'Premium',
    price: '2,999 Birr/year',
    text: 'Unlock the full consultant workflow.',
    items: [
      'Everything in Basic',
      'Submit Report for Coordinator Approval',
      'Export Logbook as PDF',
      'Export Logbook as XLSX',
    ],
    badge: 'Recommended',
  },
]

const faqs = [
  {
    q: 'Can institutions use it from a browser?',
    a: 'Yes. The application is already deployed as a web app, so residents and staff can open it from a phone, tablet, or desktop browser.',
  },
  {
    q: 'Is the platform protected behind sign-in?',
    a: 'Yes. The public website presents the product, while the application workspace is protected for authenticated users.',
  },
  {
    q: 'Can it support a university or hospital cohort?',
    a: 'Yes. Incisiō is structured around role-based cohorts, department oversight, resident records, and consultant validation.',
  },
]

function App() {
  useRevealAnimations()

  return (
    <main className="min-h-screen bg-brand-mist text-brand-text">
      <ScrollProgress />
      <SiteHeader />
      <Hero />
      <Stats />
      <Problem />
      <CaseStudy />
      <Platform />
      <ProductTour />
      <Outcomes />
      <RoleExperience />
      <Workflow />
      <Security />
      <Pricing />
      <RequestAccess />
      <FAQ />
      <Footer />
    </main>
  )
}

function useRevealAnimations() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll('[data-reveal]'))
    const viewportBottom = window.innerHeight * 0.96

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
    )

    items.forEach((item, index) => {
      item.style.setProperty('--reveal-delay', `${Math.min(index % 8, 6) * 70}ms`)
      const rect = item.getBoundingClientRect()
      if (rect.top < viewportBottom) {
        item.classList.add('is-visible')
      } else {
        observer.observe(item)
      }
    })

    return () => observer.disconnect()
  }, [])
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div className="fixed left-0 top-0 z-50 h-1 w-full bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-[#7BD7C9] via-brand-gold to-white transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 18)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div
        className={`site-header-shell mx-auto flex max-w-7xl items-center justify-between border px-4 py-3 transition-all duration-300 sm:px-5 ${
          scrolled
            ? 'rounded-lg border-white/20 shadow-soft backdrop-blur-xl'
            : 'rounded-lg border-white/18 shadow-soft backdrop-blur-xl'
        }`}
      >
        <a href="#top" className="flex items-center gap-3 text-white">
          <img
            src="/incisio-icon.png"
            alt="Incisiō logo"
            className="h-10 w-10 rounded-lg object-cover shadow-line"
          />
          <div>
            <span className="block text-base font-extrabold">Incisiō</span>
            <span className="block text-[11px] font-semibold text-white/68">
              Your surgical residency, organized.
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-extrabold text-white lg:flex">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="nav-link hover:text-white">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <a
            href={apkDownloadUrl}
            download
            className="btn-lift inline-flex items-center gap-2 rounded-lg border border-white/28 px-4 py-3 text-sm font-extrabold text-white hover:bg-white/10"
          >
            Download APK
            <Download size={17} />
          </a>
          <a
            href={appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-lift inline-flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-extrabold text-brand-ink shadow-soft hover:bg-brand-mist"
          >
            Open App
            <ArrowRight size={17} />
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/18 bg-white/10 text-white lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-7xl px-5 lg:hidden">
          <div className="rounded-lg border border-white/16 bg-brand-ink/92 p-3 shadow-soft backdrop-blur-xl">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-extrabold text-white/84 hover:bg-white/10"
              >
                {label}
              </a>
            ))}
            <a
              href={apkDownloadUrl}
              download
              className="mt-2 flex items-center justify-center gap-2 rounded-lg border border-white/18 px-4 py-3 text-sm font-extrabold text-white"
            >
              Download APK
              <Download size={16} />
            </a>
            <a
              href={appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-extrabold text-brand-ink"
            >
              Open App
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  const heroRef = useRef(null)

  const handlePointerMove = (event) => {
    const hero = heroRef.current
    if (!hero) return

    const rect = hero.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height

    hero.style.setProperty('--cursor-x', `${x * 100}%`)
    hero.style.setProperty('--cursor-y', `${y * 100}%`)
    hero.style.setProperty('--motion-x', `${x - 0.5}`)
    hero.style.setProperty('--motion-y', `${y - 0.5}`)
  }

  const handlePointerLeave = () => {
    const hero = heroRef.current
    if (!hero) return

    hero.style.setProperty('--cursor-x', '50%')
    hero.style.setProperty('--cursor-y', '45%')
    hero.style.setProperty('--motion-x', '0')
    hero.style.setProperty('--motion-y', '0')
  }

  return (
    <section
      ref={heroRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="hero-interactive relative min-h-[92svh] overflow-hidden bg-brand-ink text-white"
    >
      <img
          src="/incisio-hero-bg.png"
        alt=""
        className="hero-bg absolute inset-0 h-full w-full object-cover opacity-[0.54]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,38,44,0.94),rgba(33,69,78,0.76),rgba(33,69,78,0.56))]" />
      <div className="hero-cursor-glow absolute inset-0" />
      <div className="hero-sheen absolute inset-0" />
      <div className="mesh-lines absolute inset-0 opacity-70" />

      <header className="hidden">
        <a href="#top" className="flex items-center gap-3">
          <img
              src="/incisio-icon.png"
              alt="Incisiō logo"
            className="h-11 w-11 rounded-lg object-cover shadow-line"
          />
          <div>
              <span className="block text-lg font-extrabold">Incisiō</span>
            <span className="block text-xs font-semibold text-white/68">
              Your surgical residency, organized.
            </span>
          </div>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-white/76 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={label} href={href} className="nav-link hover:text-white">
              {label}
            </a>
          ))}
        </nav>
        <a
          href={appUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-lift hidden items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-extrabold text-brand-ink shadow-soft hover:bg-brand-mist sm:inline-flex"
        >
          Open App
          <ArrowRight size={17} />
        </a>
      </header>

      <div
        id="top"
        className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:pb-20 lg:pt-36"
      >
        <div className="min-w-0 max-w-3xl" data-reveal>
          <div className="glass-chip mb-6 inline-flex max-w-full items-start gap-2 rounded-lg border border-white/18 bg-white/10 px-3 py-2 text-sm font-bold leading-6 text-white/88 backdrop-blur">
            <Sparkles className="mt-1 shrink-0" size={16} />
            <span className="min-w-0 break-words">
              Digital logbook, validation, and learning in one place.
            </span>
          </div>
          <h1 className="text-4xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">
              Incisiō
          </h1>
          <p className="mt-4 max-w-2xl text-xl font-extrabold leading-tight text-white sm:text-3xl">
            Digital logbook, validation, and learning in one place.
          </p>
          <p className="mt-5 max-w-2xl break-words text-base font-semibold leading-8 text-white/78 sm:text-lg">
            A modern all-in-one surgical residency companion built to modernize surgical training through structured tracking, intelligent learning, and accountable supervision.
          </p>
          <p className="mt-4 max-w-2xl break-words text-sm font-semibold leading-7 text-white/72 sm:text-base">
            Centered around a powerful digital logbook, residents can record operative cases with consultant validation and program director oversight, creating a transparent and reliable training record. Incisiō also features an adaptive QBank powered by spaced repetition, performance analytics, study scheduling tools, and upcoming curated learning resources: all designed to help residents train smarter, retain more, and measure their progress with precision.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={apkDownloadUrl}
              download
              className="btn-lift inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-4 text-sm font-extrabold text-brand-ink shadow-soft hover:bg-brand-mist"
            >
              Download Android APK
              <Download size={18} />
            </a>
            <a
              href={appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lift inline-flex items-center justify-center gap-2 rounded-lg border border-white/32 px-5 py-4 text-sm font-extrabold text-white hover:bg-white/10"
            >
              Launch Web App
              <ArrowRight size={18} />
            </a>
            <a
              href="#platform"
              className="btn-lift inline-flex items-center justify-center gap-2 rounded-lg border border-white/32 px-5 py-4 text-sm font-extrabold text-white hover:bg-white/10"
            >
              Explore Platform
              <MonitorSmartphone size={18} />
            </a>
          </div>
          <div className="mt-8 flex max-w-2xl flex-wrap gap-x-5 gap-y-2 text-sm font-extrabold uppercase tracking-[0.08em] text-white/70">
            {['Residents', 'Consultants', 'Coordinators'].map((label) => (
              <span
                key={label}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        <ProductPreview />
      </div>
    </section>
  )
}

function ProductPreview() {
  return (
    <div
      className="float-panel relative mx-auto w-full min-w-0 max-w-[560px] lg:mx-0 lg:justify-self-end"
      data-reveal
    >
      <div className="absolute -right-4 -top-4 hidden rounded-lg bg-brand-gold px-4 py-3 text-sm font-extrabold text-white shadow-soft sm:block">
        Live web app
      </div>
      <div className="premium-frame rounded-lg border border-white/18 bg-white/12 p-3 shadow-soft backdrop-blur-md">
        <div className="overflow-hidden rounded-lg bg-brand-ink/30 p-2">
          <img
            src="/resident-dashboard-app-screenshot.png"
            alt="Resident logbook dashboard from the Incisiō application"
            className="block w-full rounded-lg border border-white/12 object-cover object-top shadow-soft"
          />
        </div>
      </div>
    </div>
  )
}

function Stats() {
  return (
    <section className="border-y border-brand-line bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 py-2 sm:px-8 lg:grid-cols-4">
        {metrics.map(([value, label]) => (
          <div key={label} className="px-3 py-6 text-center" data-reveal>
            <div className="text-2xl font-extrabold text-brand-ink">
              {value}
            </div>
            <div className="mt-2 text-sm font-semibold text-brand-muted">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Problem() {
  return (
    <section className="section-soft bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div data-reveal>
          <p className="text-sm font-extrabold uppercase text-brand-coral">
            The gap
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-brand-ink sm:text-4xl">
            Surgical residency logbooks are still largely paper-based and retrospective.
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-brand-muted">
            Residents often record cases in hospital systems or physical register books throughout the year, then reconstruct and format their official logbooks at the end of the academic cycle. This process is time-consuming, difficult to verify, and burdensome for both residents and consultants. Consultants are expected to retrospectively validate large volumes of cases they may no longer clearly remember, while departments struggle to aggregate data, monitor resident progress, and generate meaningful training analytics. The result is delayed verification, inconsistent documentation, limited oversight, and poor data reliability.
          </p>
        </div>
        <div className="grid gap-3">
          {painPoints.map((item) => (
            <div
              key={item}
              className="premium-card flex gap-4 rounded-lg border border-brand-line bg-brand-mist p-5"
              data-reveal
            >
              <SearchCheck className="mt-0.5 shrink-0 text-brand-teal" size={22} />
              <p className="text-sm font-bold leading-7 text-brand-text">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseStudy() {
  return (
    <section className="bg-brand-ink py-20 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div data-reveal>
            <p className="text-sm font-extrabold uppercase text-[#7BD7C9]">
              Before and after
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
              From fragmented documentation to accountable surgical training.
            </h2>
            <p className="mt-5 text-base font-medium leading-8 text-white/70">
              Incisiō turns daily operative experience into a centralized,
              validated, and insight-driven educational system.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <article className="premium-glass rounded-lg border border-white/12 bg-white/8 p-6" data-reveal>
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-white">
                <FileText size={21} />
              </div>
                <h3 className="text-xl font-extrabold">Before Incisiō</h3>
              <ul className="mt-5 space-y-4 text-sm font-semibold leading-6 text-white/72">
                {[
                  'Paper-based and fragmented logbook workflow',
                  'End-of-year case reconstruction and formatting',
                  'Delayed consultant signatures and verification',
                  'Difficult tracking of resident progress and case exposure',
                  'Limited departmental analytics and oversight',
                  'Administrative burden from printing, binding, and manual submission',
                  'Inconsistent and difficult-to-verify documentation',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-coral" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="premium-glass rounded-lg border border-[#7BD7C9]/28 bg-[#7BD7C9]/10 p-6" data-reveal>
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-[#7BD7C9] text-brand-ink">
                <BadgeCheck size={21} />
              </div>
                <h3 className="text-xl font-extrabold">After Incisiō</h3>
              <ul className="mt-5 space-y-4 text-sm font-semibold leading-6 text-white/82">
                {[
                  'Real-time digital case logging and organization',
                  'Structured logbooks generated automatically',
                  'Digital consultant validation and approval workflow',
                  'Centralized program director oversight and progress monitoring',
                  'Actionable analytics on resident activity and operative exposure',
                  'Faster, more reliable, and transparent documentation',
                  'Integrated learning tools with QBank, spaced repetition, and study planning',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check className="mt-0.5 shrink-0 text-[#7BD7C9]" size={17} />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

function Platform() {
  return (
    <section id="platform" className="section-soft bg-brand-mist py-20">
      <SectionHeader
        eyebrow="Platform"
        title="A complete training operations layer"
        text="Incisiō unifies operative case logging, consultant validation, program oversight, with the additional features of adaptive question-bank learning, and study tools into a single structured platform: eliminating fragmented paper-based logbooks, retrospective validation, and limited analytics."
      />
      <div className="mx-auto mt-10 grid max-w-7xl gap-5 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-12">
        {features.map(({ icon: Icon, title, text }, index) => (
          <article
            key={title}
            className={`premium-card group flex min-h-[255px] flex-col rounded-lg border border-brand-line bg-white p-6 shadow-line ${
              index < 3 ? 'lg:col-span-4' : 'lg:col-span-3'
            }`}
            style={{ '--reveal-delay': `${index * 70}ms` }}
            data-reveal
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-ink text-white">
                <Icon size={22} />
              </div>
              <span className="rounded-full bg-brand-mist px-3 py-1 text-xs font-extrabold text-brand-muted">
                0{index + 1}
              </span>
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-extrabold leading-tight text-brand-ink">{title}</h3>
              <p className="mt-4 text-sm font-medium leading-7 text-brand-muted">
                {text}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function ProductTour() {
  const [active, setActive] = useState('Resident')
  const current = roleTour[active]
  const Icon = current.icon

  return (
    <section id="tour" className="bg-white py-12">
      <SectionHeader
        eyebrow="Interactive tour"
        title="See how each role experiences the platform"
        text="A serious training system has to feel different for each responsibility. Incisiō keeps the interface focused while the underlying record stays connected."
      />

      <div className="mx-auto mt-7 grid max-w-6xl gap-4 px-5 sm:px-8 lg:grid-cols-[210px_1fr] lg:items-start">
        <div className="grid gap-2" data-reveal>
          {Object.keys(roleTour).map((role) => (
            <button
              key={role}
              type="button"
              onClick={() => setActive(role)}
              className={`tour-tab flex min-h-[48px] items-center justify-between rounded-lg border px-4 py-2.5 text-left transition ${
                active === role
                  ? 'border-brand-teal bg-brand-ink text-white shadow-soft'
                  : 'border-brand-line bg-brand-mist text-brand-ink hover:border-brand-teal/40 hover:bg-white'
              }`}
            >
              <span className="text-sm font-extrabold">{role}</span>
              <ArrowRight size={15} />
            </button>
          ))}
        </div>

        <div className="premium-card rounded-lg border border-brand-line bg-brand-mist p-2.5 shadow-line" data-reveal>
          <div className="grid gap-4 rounded-lg bg-white p-4 lg:grid-cols-[minmax(0,0.58fr)_minmax(300px,0.42fr)]">
            <div className="order-2 flex flex-wrap items-center justify-between gap-3 border-b border-brand-line pb-3 lg:col-start-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-ink text-white">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-xs font-extrabold uppercase text-brand-teal">
                    {active} workspace
                  </p>
                  <h3 className="mt-1 text-lg font-extrabold leading-tight text-brand-ink">
                    {current.headline}
                  </h3>
                </div>
              </div>
            </div>

            <div className="order-1 overflow-hidden rounded-lg border border-brand-line bg-brand-ink/5 shadow-line lg:row-span-4 lg:min-h-[430px]">
              <img
                src={current.image}
                alt={`${active} dashboard from the Incisiō application`}
                className="block h-[220px] w-full object-cover object-top lg:h-full"
              />
            </div>

            <p className="order-3 text-xs font-medium leading-5 text-brand-muted lg:col-start-2">
              {current.subline}
            </p>

            <div className="order-4 grid gap-2 sm:grid-cols-3 lg:col-start-2 lg:grid-cols-1">
              {current.stats.map(([label, value]) => (
                <div key={label} className="rounded-lg bg-brand-mist px-3 py-2">
                  <div className="text-[10px] font-bold uppercase text-brand-muted">
                    {label}
                  </div>
                  <div className="mt-0.5 text-sm font-extrabold text-brand-ink">
                    {value}
                  </div>
                </div>
              ))}
            </div>

            <div className="order-5 grid gap-2 lg:col-start-2">
              {current.bullets.map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-lg border border-brand-line px-3 py-1.5 text-xs font-bold text-brand-text">
                  <CheckCircle2 className="shrink-0 text-brand-teal" size={14} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Outcomes() {
  return (
    <section id="outcomes" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div data-reveal>
            <p className="text-sm font-extrabold uppercase text-brand-teal">
              Outcomes
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-brand-ink sm:text-4xl">
              Better visibility for learners, supervisors, and programs.
            </h2>
          </div>
          <p className="text-base font-medium leading-8 text-brand-muted" data-reveal>
            The product is more than a form. It is a structured training record
            that helps a program understand whether exposure, supervision, and
            preparation are moving in the right direction.
          </p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {outcomes.map(({ title, text, icon: Icon }) => (
            <article
              key={title}
              className="premium-card rounded-lg border border-brand-line bg-brand-mist p-6"
              data-reveal
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white text-brand-ink shadow-line">
                <Icon size={23} />
              </div>
              <h3 className="mt-5 text-xl font-extrabold text-brand-ink">
                {title}
              </h3>
              <p className="mt-3 text-sm font-medium leading-7 text-brand-muted">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function RoleExperience() {
  return (
    <section id="roles" className="bg-brand-ink py-20 text-white">
      <SectionHeader
        eyebrow="Role-based experience"
        title="Separate workspaces. One shared source of truth."
        text="The platform gives each user the controls they need while keeping the underlying training record connected."
        dark
      />
      <div className="mx-auto mt-10 grid max-w-7xl gap-4 px-5 sm:px-8 lg:grid-cols-3">
        {roles.map(({ title, icon: Icon, tone, description, items }) => (
          <article
            key={title}
            className="premium-glass overflow-hidden rounded-lg border border-white/14 bg-white/8"
            data-reveal
          >
            <div className={`${tone} p-5`}>
              <Icon size={25} />
              <h3 className="mt-4 text-xl font-extrabold">{title}</h3>
            </div>
            <div className="p-5">
              <p className="min-h-16 text-sm font-semibold leading-7 text-white/74">
                {description}
              </p>
              <ul className="mt-5 space-y-3">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-bold text-white/90"
                  >
                    <CheckCircle2 className="shrink-0 text-[#7BD7C9]" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Workflow() {
  return (
    <section className="dashboard-grid bg-[#EEF4F5] py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div data-reveal>
            <p className="text-sm font-extrabold uppercase text-brand-coral">
              Workflow
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-brand-ink sm:text-4xl">
              From operating room exposure to program-level insight.
            </h2>
            <p className="mt-5 text-base font-medium leading-8 text-brand-muted">
              Every stage creates a more useful record: not just what happened,
              but who supervised it, how it was validated, and how it connects
              to development.
            </p>
          </div>
          <div className="grid gap-4">
            {workflow.map(({ label, title, text }, index) => (
              <article
                key={label}
                className="premium-card rounded-lg border border-brand-line bg-white p-5 shadow-line"
                data-reveal
              >
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-gold text-sm font-extrabold text-white">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <div className="text-xs font-extrabold uppercase text-brand-teal">
                      {label}
                    </div>
                    <h3 className="mt-1 font-extrabold text-brand-ink">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm font-medium leading-7 text-brand-muted">
                      {text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Security() {
  return (
    <section id="security" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div data-reveal>
          <p className="text-sm font-extrabold uppercase text-brand-teal">
            Security posture
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-brand-ink sm:text-4xl">
            Designed for controlled clinical education data.
          </h2>
          <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-brand-muted">
            Incisiō is built around controlled access, clear permissions,
            verified senior roles, and protected records for clinical education
            programs.
          </p>
        </div>
        <div className="premium-dark-card rounded-lg bg-brand-ink p-6 text-white shadow-soft" data-reveal>
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-white text-brand-ink">
            <LockKeyhole size={23} />
          </div>
          <ul className="space-y-4">
            {security.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm font-bold leading-6 text-white/84"
              >
                <ShieldCheck className="mt-0.5 shrink-0 text-[#7BD7C9]" size={18} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  const residentPlans = pricingPlans.filter((plan) => plan.role === 'Resident')
  const supportPlans = pricingPlans.filter((plan) => plan.role !== 'Resident')

  return (
    <section id="pricing" className="dashboard-grid bg-brand-mist py-20">
      <SectionHeader
        eyebrow="Access plans"
        title="Subscription options aligned with the app"
        text="The public website now reflects the resident, consultant, and program access options shown inside Incisiō."
      />

      <div className="mx-auto mt-10 max-w-7xl px-5 sm:px-8">
        <div className="rounded-lg border border-brand-line bg-white/70 p-3 shadow-line backdrop-blur">
          <div className="grid gap-3 lg:grid-cols-[0.92fr_1.08fr]">
            {residentPlans.map((plan) => (
              <PricingPlanCard key={`${plan.role}-${plan.name}`} plan={plan} />
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3" data-reveal>
          <div className="h-px flex-1 bg-brand-line" />
          <span className="rounded-lg bg-white px-4 py-2 text-xs font-extrabold uppercase text-brand-muted shadow-line">
            Consultant access
          </span>
          <div className="h-px flex-1 bg-brand-line" />
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {supportPlans.map((plan) => (
            <PricingPlanCard key={`${plan.role}-${plan.name}`} plan={plan} compact />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-7 flex max-w-7xl flex-col gap-3 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <p className="text-sm font-semibold text-brand-muted">
          In-app payment submission supports CBE, Telebirr, and Ebirr.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={apkDownloadUrl}
            download
            className="btn-lift inline-flex items-center justify-center gap-2 rounded-lg bg-brand-ink px-4 py-3 text-sm font-extrabold text-white shadow-line hover:bg-brand-teal"
          >
            Download APK
            <Download size={17} />
          </a>
          <a
            href={appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-lift inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-extrabold text-brand-ink shadow-line hover:bg-brand-ink hover:text-white"
          >
            Open App
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  )
}

function PricingPlanCard({ plan, compact = false }) {
  const isFeatured = plan.featured

  return (
    <article
      className={`premium-card rounded-lg border p-6 ${
        isFeatured
          ? 'border-brand-teal bg-brand-ink text-white shadow-soft'
          : plan.disabled
            ? 'border-brand-line bg-white/78 text-brand-text'
            : 'border-brand-line bg-white text-brand-text'
      } ${compact ? 'min-h-full' : 'min-h-full lg:p-7'}`}
      data-reveal
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className={`text-xs font-extrabold uppercase ${isFeatured ? 'text-[#7BD7C9]' : 'text-brand-coral'}`}>
            {plan.role}
          </p>
          <h3 className={`mt-2 text-2xl font-extrabold ${isFeatured ? 'text-white' : 'text-brand-ink'}`}>
            {plan.name}
          </h3>
        </div>
        {(plan.badge || plan.disabled) && (
          <span className={`rounded-lg px-3 py-2 text-xs font-extrabold ${
            isFeatured ? 'bg-[#7BD7C9] text-brand-ink' : 'bg-brand-mist text-brand-ink'
          }`}>
            {plan.badge || 'Coming Soon'}
          </span>
        )}
      </div>

      <div className={`mt-5 font-extrabold ${compact ? 'text-2xl' : 'text-4xl'} ${isFeatured ? 'text-white' : 'text-brand-ink'}`}>
        {plan.price}
      </div>
      {plan.compareAt && (
        <p className={`mt-1 text-sm font-bold ${isFeatured ? 'text-white/58' : 'text-brand-muted'}`}>
          Regular price <span className="line-through">{plan.compareAt}</span> Birr/year
        </p>
      )}
      <p className={`mt-3 text-sm font-medium leading-7 ${isFeatured ? 'text-white/72' : 'text-brand-muted'}`}>
        {plan.text}
      </p>

      <ul className={`mt-6 grid gap-3 ${compact ? '' : 'sm:grid-cols-2'}`}>
        {plan.items.map((item) => {
          const label = typeof item === 'string' ? item : item.text
          const muted = typeof item === 'object' && item.muted

          return (
            <li
              key={label}
              className={`flex gap-3 rounded-lg ${compact ? '' : isFeatured ? 'bg-white/6 p-3' : 'bg-brand-mist p-3'} text-sm font-bold ${
                muted
                  ? isFeatured ? 'text-white/45' : 'text-brand-muted/70'
                  : isFeatured ? 'text-white/88' : 'text-brand-text'
              }`}
            >
              {muted ? (
                <X className={`mt-0.5 shrink-0 ${isFeatured ? 'text-white/36' : 'text-brand-muted/60'}`} size={17} />
              ) : (
                <Check className={`mt-0.5 shrink-0 ${isFeatured ? 'text-[#7BD7C9]' : 'text-brand-teal'}`} size={17} />
              )}
              <span>{label}</span>
            </li>
          )
        })}
      </ul>
    </article>
  )
}

function RequestAccess() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSent(true)
    event.currentTarget.reset()
  }

  return (
    <section id="contact" className="section-soft bg-white py-14 scroll-mt-28 sm:py-20">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-7 max-w-3xl sm:mb-10" data-reveal>
          <p className="text-sm font-extrabold uppercase text-brand-coral">
            Request access
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-brand-ink sm:text-4xl">
            Start a direct access conversation.
          </h2>
          <p className="mt-5 text-base font-medium leading-8 text-brand-muted">
            Residents, consultants, and coordinators can share their program
            context or contact the Incisiō team directly.
          </p>
        </div>

        <div className="contact-panel grid overflow-hidden rounded-lg border border-brand-line bg-white shadow-soft lg:grid-cols-[0.82fr_1.18fr]" data-reveal>
          <aside className="relative bg-brand-ink p-5 text-white sm:p-8">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-teal via-[#7bd7c9] to-brand-coral" />
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-[#7bd7c9] ring-1 ring-white/12 sm:h-12 sm:w-12">
              <Mail size={22} />
            </div>
            <h3 className="mt-4 text-2xl font-extrabold sm:mt-6">
              Contact details
            </h3>
            <p className="mt-2 text-sm font-semibold leading-6 text-white/68 sm:mt-3 sm:leading-7">
              Use the form for structured requests, or reach out directly using
              the official contact details below.
            </p>

            <div className="mt-5 grid gap-2 sm:mt-8 sm:gap-3">
              {contactDetails.map(({ label, value, href, icon: Icon }) => (
                <div
                  key={label}
                  className="group rounded-lg border border-white/12 bg-white/7 p-3 transition hover:border-[#7bd7c9]/60 hover:bg-white/10 sm:p-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#7bd7c9] sm:h-9 sm:w-9">
                      <Icon size={17} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-extrabold uppercase text-white/45">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="mt-1 block break-all text-sm font-extrabold leading-5 text-white transition group-hover:text-[#7bd7c9] sm:break-words"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm font-extrabold text-white">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <form
            onSubmit={handleSubmit}
            className="bg-brand-mist/70 p-5 sm:p-8"
          >
            <div className="flex flex-col gap-3 border-b border-brand-line pb-4 sm:flex-row sm:items-center sm:justify-between sm:pb-5">
              <div>
                <p className="text-xs font-extrabold uppercase text-brand-teal">
                  Access request
                </p>
                <h3 className="mt-1 text-2xl font-extrabold leading-tight text-brand-ink">
                  Tell us what you need
                </h3>
              </div>
              <span className="inline-flex w-fit items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-extrabold text-brand-teal shadow-line">
                <CheckCircle2 size={15} />
                Direct contact available
              </span>
            </div>

            <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4">
              <label className="contact-field">
                <span>Full name</span>
                <input className="form-input" name="name" required placeholder="Dr. Mahad Mohammed" />
              </label>
              <label className="contact-field">
                <span>Email</span>
                <input className="form-input" name="email" required type="email" placeholder="name@institution.edu" />
              </label>
              <label className="contact-field">
                <span>Institution</span>
                <input className="form-input" name="institution" required placeholder="University / Hospital" />
              </label>
              <label className="contact-field">
                <span>Role</span>
                <select className="form-input" name="role" defaultValue="Resident">
                  <option>Resident</option>
                  <option>Consultant</option>
                  <option>Coordinator</option>
                </select>
              </label>
            </div>

            <label className="contact-field mt-4">
              <span>Message</span>
              <textarea className="form-input min-h-28 resize-y sm:min-h-36" name="message" placeholder="Tell us about your program, cohort size, and rollout needs." />
            </label>

            <button
              type="submit"
              className="btn-lift mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-ink px-5 py-3.5 text-sm font-extrabold text-white shadow-soft hover:bg-brand-teal sm:py-4"
            >
              Submit request
              <ArrowRight size={18} />
            </button>
            {sent && (
              <p className="mt-4 flex items-center gap-3 rounded-lg border border-brand-teal/20 bg-white p-4 text-sm font-bold text-brand-teal shadow-line">
                <CheckCircle2 size={18} />
                Thank you. Your request has been received.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  return (
    <section id="faq" className="bg-brand-mist py-20">
      <SectionHeader
        eyebrow="FAQ"
        title="Clear answers for institutions and users"
        text="The promotional site can grow into a full public website with onboarding, contact forms, pricing, and institutional deployment material."
      />
      <div className="mx-auto mt-10 grid max-w-5xl gap-4 px-5 sm:px-8">
        {faqs.map((faq, index) => (
          <FAQItem key={faq.q} faq={faq} defaultOpen={index === 0} />
        ))}
      </div>
    </section>
  )
}

function FAQItem({ faq, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <article
      className="premium-card rounded-lg border border-brand-line bg-white p-6 shadow-line"
      data-reveal
    >
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 text-left"
        onClick={() => setOpen((value) => !value)}
      >
        <h3 className="font-extrabold text-brand-ink">{faq.q}</h3>
        <ChevronDown
          className={`shrink-0 text-brand-teal transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
          size={20}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? 'grid-rows-[1fr] pt-3 opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm font-medium leading-7 text-brand-muted">
            {faq.a}
          </p>
        </div>
      </div>
    </article>
  )
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-ink px-5 py-8 text-white sm:px-8">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-teal via-[#7bd7c9] to-brand-coral" />
      <div className="relative mx-auto max-w-7xl">
        <div className="rounded-lg border border-white/10 bg-white/[0.06] p-5 shadow-soft">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_1.15fr_0.8fr] lg:items-center">
            <div className="flex items-center gap-3">
              <img
                src="/incisio-icon.png"
                alt=""
                className="h-11 w-11 rounded-lg border border-white/12 bg-white object-cover"
              />
              <div>
                <div className="text-lg font-extrabold">Incisiō</div>
                <div className="text-sm font-semibold text-white/60">
                  Your surgical residency, organized.
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {navItems.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="text-sm font-bold text-white/68 transition hover:text-white"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div className="grid gap-3 lg:justify-items-end">
              <a
                href={apkDownloadUrl}
                download
                className="btn-lift inline-flex w-fit items-center justify-center gap-2 rounded-lg border border-white/16 px-5 py-2.5 text-sm font-extrabold text-white hover:bg-white/10"
              >
                Download APK
                <Download size={16} />
              </a>
              <a
                href={appUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lift inline-flex w-fit items-center justify-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-extrabold text-brand-ink hover:bg-brand-mist"
              >
                Open App
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4 text-xs font-bold text-white/42 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 A Scope Solutions Product. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SectionHeader({ eyebrow, title, text, dark = false }) {
  return (
    <div className="mx-auto max-w-3xl px-5 text-center sm:px-8" data-reveal>
      <p
        className={`text-sm font-extrabold uppercase ${
          dark ? 'text-[#7BD7C9]' : 'text-brand-coral'
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-extrabold leading-tight sm:text-4xl ${
          dark ? 'text-white' : 'text-brand-ink'
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 text-base font-medium leading-8 ${
          dark ? 'text-white/70' : 'text-brand-muted'
        }`}
      >
        {text}
      </p>
    </div>
  )
}

export default App
