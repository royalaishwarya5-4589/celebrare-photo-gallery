
export default function WelcomeBanner({ onEnter }) {
  return (
    <main
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#09051c] bg-cover bg-center px-6 py-16 text-white"
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(9, 5, 28, 0.82), rgba(23, 16, 68, 0.72), rgba(9, 5, 28, 0.88)), url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=85')",
      }}
    >
      {/* Purple glow effects */}
      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-purple-600/25 blur-[120px]" />
      <div className="absolute -right-20 top-1/4 h-96 w-96 rounded-full bg-indigo-500/25 blur-[120px]" />
      <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-fuchsia-600/20 blur-[120px]" />

      {/* Decorative stars */}
      <div className="absolute left-[15%] top-[20%] h-1 w-1 rounded-full bg-white shadow-[0_0_15px_4px_rgba(255,255,255,0.5)]" />
      <div className="absolute right-[20%] top-[25%] h-1.5 w-1.5 rounded-full bg-violet-200 shadow-[0_0_18px_4px_rgba(196,181,253,0.8)]" />
      <div className="absolute bottom-[25%] left-[25%] h-1 w-1 rounded-full bg-pink-200 shadow-[0_0_15px_4px_rgba(249,168,212,0.7)]" />
      <div className="absolute bottom-[20%] right-[12%] h-1 w-1 rounded-full bg-white shadow-[0_0_12px_3px_rgba(255,255,255,0.5)]" />

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.08] px-5 py-2.5 shadow-lg backdrop-blur-xl">
          <span className="h-2 w-2 animate-pulse rounded-full bg-violet-400" />
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-violet-200 sm:text-sm">
            Welcome to CELEBRARE
          </span>
        </div>

        <h1 className="text-5xl font-black leading-[1.1] tracking-tight sm:text-7xl lg:text-8xl">
          Every Picture
          <br />
          <span className="bg-gradient-to-r from-violet-300 via-fuchsia-200 to-indigo-300 bg-clip-text text-transparent">
            Tells a Story.
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-gray-200 sm:text-xl">
          A world of moments, emotions, and extraordinary beauty.
          Discover inspiring photography and find the stories
          waiting to be seen.
        </p>

        {/* Feature cards */}
        <div className="mx-auto mt-10 flex max-w-xl flex-wrap justify-center gap-3">
          <div className="rounded-2xl border border-white/15 bg-white/[0.08] px-5 py-3 backdrop-blur-md transition hover:bg-white/[0.15]">
            <span className="text-sm text-violet-100">
              ✦ Beautiful moments
            </span>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/[0.08] px-5 py-3 backdrop-blur-md transition hover:bg-white/[0.15]">
            <span className="text-sm text-violet-100">
              ♡ Your favorites
            </span>
          </div>
        </div>

        {/* Explore gallery button */}
        <button
          type="button"
          onClick={onEnter}
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-9 py-4 font-bold text-white shadow-[0_0_35px_rgba(139,92,246,0.45)] transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_50px_rgba(139,92,246,0.7)] focus:outline-none focus:ring-4 focus:ring-violet-300/40"
        >
          Explore Gallery
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>

        <p className="mt-8 text-xs tracking-[0.25em] text-gray-200">
          DISCOVER · EXPLORE · GET INSPIRED
        </p>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-violet-400/70 to-transparent" />
    </main>
  );
}
