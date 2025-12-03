import { NotificationButton } from "./components/NotificationButton";
import { ServiceWorkerRegistrar } from "./register-sw";

const products = [
  {
    id: 1,
    name: "CloudSoft Cotton Onesie",
    price: "₹499",
    tag: "Bestseller",
    badgeColor: "bg-emerald-100 text-emerald-700",
  },
  {
    id: 2,
    name: "Dreamy Nights Swaddle Set",
    price: "₹899",
    tag: "New Arrival",
    badgeColor: "bg-sky-100 text-sky-700",
  },
  {
    id: 3,
    name: "Gentle Touch Baby Lotion",
    price: "₹349",
    tag: "Dermat Tested",
    badgeColor: "bg-rose-100 text-rose-700",
  },
  {
    id: 4,
    name: "Little Steps Booties",
    price: "₹299",
    tag: "Limited Stock",
    badgeColor: "bg-amber-100 text-amber-700",
  },
];

export default function HomePage() {
  return (
    <>
      <ServiceWorkerRegistrar />
      <main className="min-h-screen px-4 pb-16 pt-6 sm:px-8 lg:px-16 lg:pt-10">
        <header className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-3xl bg-white/70 px-4 py-3 shadow-sm shadow-rose-100 backdrop-blur sm:px-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-tr from-brand to-brand-dark text-xl shadow-md shadow-brand/40">
              🍼
            </div>
            <div>
              <p className="text-sm font-bold tracking-tight text-slate-900 sm:text-base">
                BabyBliss
              </p>
              <p className="text-[11px] text-slate-500 sm:text-xs">
                Inspired by FirstCry • Demo PWA
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-4 text-xs font-medium text-slate-600 sm:flex sm:text-sm">
            <button className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-800 shadow-inner">
              Home
            </button>
            <button className="rounded-full px-3 py-1.5 hover:bg-slate-100">
              Baby Care
            </button>
            <button className="rounded-full px-3 py-1.5 hover:bg-slate-100">
              Diapers
            </button>
            <button className="rounded-full px-3 py-1.5 hover:bg-slate-100">
              Toys
            </button>
          </nav>
          <div className="flex items-center gap-3">
            <NotificationButton />
          </div>
        </header>

        <section className="mx-auto mt-8 grid max-w-6xl items-center gap-8 lg:grid-cols-[1.2fr,1fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-3 py-1 text-xs font-medium text-rose-600 shadow-sm shadow-rose-100">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
              Trusted by parents across India (demo)
            </div>
            <h1 className="text-balance text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Everything your little one needs, curated with{" "}
              <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">
                love & care
              </span>
              .
            </h1>
            <p className="max-w-xl text-sm text-slate-600 sm:text-base">
              Explore premium baby products inspired by the FirstCry experience
              – clothes, diapers, skincare and more – crafted into a smooth,
              installable PWA demo.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button className="rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-400/40 transition hover:bg-slate-800 hover:shadow-xl active:scale-95">
                Start shopping (demo)
              </button>
              <button className="rounded-full border border-slate-200 bg-white/80 px-5 py-2.5 text-sm font-medium text-slate-800 shadow-sm backdrop-blur hover:border-slate-300 hover:shadow">
                View baby essentials
              </button>
              <p className="text-xs text-slate-500">
                No checkout — this is a UI + PWA capabilities demo.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 rounded-2xl bg-white/70 p-4 text-xs text-slate-600 shadow-sm shadow-rose-100 backdrop-blur">
              <div>
                <p className="font-semibold text-slate-900">Ultra-responsive</p>
                <p>Mobile-first layouts optimised for touch interactions.</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">
                  PWA + Notifications
                </p>
                <p>Installable app shell with demo push-style notification.</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Smooth UX</p>
                <p>Micro-interactions, soft shadows and baby-soft gradients.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-baby-blue via-white to-baby-mint opacity-80 blur-2xl" />
            <div className="rounded-[2rem] bg-white/80 p-4 shadow-xl shadow-rose-100/80 backdrop-blur">
              <div className="flex items-center justify-between gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-xs text-white">
                <div>
                  <p className="font-semibold">Today&apos;s Baby Picks</p>
                  <p className="text-[11px] text-slate-300">
                    Curated for 0–24 months
                  </p>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-[11px]">
                  20% OFF Demo
                </span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {products.map((p) => (
                  <article
                    key={p.id}
                    className="group flex flex-col overflow-hidden rounded-2xl bg-slate-50/80 shadow-sm shadow-slate-100 transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="relative h-28 overflow-hidden bg-gradient-to-br from-baby-pink via-white to-baby-mint">
                      <div className="absolute inset-4 flex items-center justify-center text-4xl">
                        {p.id === 1 && "👶"}
                        {p.id === 2 && "🌙"}
                        {p.id === 3 && "🧴"}
                        {p.id === 4 && "🧦"}
                      </div>
                      <div className="absolute left-2 top-2 rounded-full px-2 py-1 text-[10px] font-semibold shadow-sm backdrop-blur-sm">
                        <span className={p.badgeColor}>{p.tag}</span>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-3">
                      <div>
                        <h3 className="line-clamp-2 text-xs font-semibold text-slate-900">
                          {p.name}
                        </h3>
                        <p className="mt-1 text-[11px] text-slate-500">
                          Ultra-soft • Safe on baby skin • Parent favourite
                        </p>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <p className="text-sm font-bold text-slate-900">
                          {p.price}
                        </p>
                        <button className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-brand shadow-sm shadow-rose-100 transition group-hover:bg-brand group-hover:text-white">
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}


