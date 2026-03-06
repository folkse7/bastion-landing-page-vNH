"use client";

export function ComingSoon() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-8 py-10 backdrop-blur-xl">
      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-fuchsia-500/10" />
      <div className="absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-200">
          <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
          Product demo dropping next week.
        </div>

        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          See Bastion in action.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
          We’re putting the finishing touches on our product demo. A full walkthrough of
          Bastion’s portfolio monitoring workflows, document processing, and reporting
          experience is dropping next week.
        </p>

        {/* <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-200"
          >
            Get early access
          </a>

          <div className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-5 py-3 text-sm text-zinc-300">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5">
              ▶
            </span>
            <div className="text-left">
              <p className="font-medium text-white">Product demo</p>
              <p className="text-xs text-zinc-400">Available next week</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
