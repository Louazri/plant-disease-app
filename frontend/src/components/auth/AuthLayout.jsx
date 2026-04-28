const backgroundImageUrl =
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80";

function AuthLayout({ title, subtitle, children, footer }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-emerald-950 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-emerald-950/90 via-emerald-950/75 to-emerald-950/95"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-16 right-8 h-44 w-44 rounded-full bg-emerald-500/25 blur-3xl" />
        <div className="absolute bottom-8 left-8 h-44 w-44 rounded-full bg-emerald-300/15 blur-3xl" />
        <div className="absolute left-1/2 top-10 h-28 w-28 -translate-x-1/2 rounded-full bg-emerald-300/10 blur-2xl" />
        <div className="absolute left-8 top-24 text-emerald-200/30 animate-float">
          <LeafDecoration className="h-10 w-10" />
        </div>
        <div className="absolute right-12 bottom-24 text-emerald-200/20 animate-float-slow">
          <LeafDecoration className="h-12 w-12" />
        </div>
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="rounded-3xl border border-white/10 bg-emerald-900/35 p-8 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl animate-fade-up">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/15 ring-1 ring-emerald-300/40">
                <LeafLogo className="h-7 w-7" />
              </div>
              <span className="text-xs uppercase tracking-[0.32em] text-emerald-200/70">
                LeafDiagnose AI
              </span>
              <h1 className="mt-3 text-2xl font-semibold text-white">{title}</h1>
              <p className="mt-2 text-sm text-emerald-100/70">{subtitle}</p>
            </div>

            <div className="mt-6">{children}</div>

            {footer && (
              <div className="mt-6 text-center text-sm text-emerald-100/70">
                {footer}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function LeafLogo({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path
        d="M4.5 15.5C9.5 4.5 18 3 20 3c0 2-1.5 10.5-12.5 15.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 18c3-1 5.5-3.5 7-6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LeafDecoration({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path
        d="M3 13c6-7 13-8 18-7-1 6-5 12-13 15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 18c1.5-2.5 4-4.5 7-6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default AuthLayout;

