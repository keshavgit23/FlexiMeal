/**
 * Hero Section — FlexiMeal Landing Page
 *
 * Migrated from the reference HTML. Preserves the exact same visual hierarchy,
 * content, layout, responsive behaviour, and interactivity of the original.
 *
 * Assets: The two Unsplash URLs below are the same ones used in the reference
 * HTML. To swap to local imports later, replace the constants with:
 *   import heroBg from "../../../assets/hero-bg.jpg";
 *   import heroThali from "../../../assets/hero-thali.jpg";
 */

// ---------------------------------------------------------------------------
// Asset URLs — single source of truth, matching the reference HTML exactly.
// ---------------------------------------------------------------------------
const HERO_BG_URL =
  "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=2000&auto=format&fit=crop";
const HERO_THALI_URL =
  "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop";

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------
interface HeroProps {
  /** Navigate to a tab (e.g. "explore", "owner-dash"). */
  onTabChange?: (tab: string) => void;
  /** Switch the active user role. */
  onRoleChange?: (role: "visitor" | "student" | "owner") => void;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
function Hero({ onTabChange, onRoleChange }: HeroProps) {
  const handleFindMeal = () => onTabChange?.("explore");

  const handleBecomePartner = () => {
    onRoleChange?.("owner");
    onTabChange?.("owner-dash");
  };

  return (
    <section className="relative overflow-hidden">
      {/* ----------------------------------------------------------------- */}
      {/* Hero Container — dark overlay + background image                   */}
      {/* ----------------------------------------------------------------- */}
      <div
        className="relative py-24 px-4 text-white lg:py-36 sm:px-6 lg:px-8"
        style={{
          background: `linear-gradient(180deg, rgba(17,24,39,0.75) 0%, rgba(17,24,39,0.88) 100%), url('${HERO_BG_URL}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12">
          {/* ------------------------------------------------------------- */}
          {/* Left — Text content                                           */}
          {/* ------------------------------------------------------------- */}
          <div className="space-y-8 text-center lg:col-span-7 lg:text-left">
            {/* USP Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-amber-300 backdrop-blur-md">
              <span className="rounded-md bg-[var(--color-primary)] px-2 py-0.5 text-white">
                USP
              </span>
              <span>Smart Attendance &amp; Meal Prediction</span>
            </div>

            {/* Heading */}
            <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              YOUR HUNGER.
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-[var(--color-secondary)] bg-clip-text text-transparent">
                YOUR SCHEDULE.
              </span>
              <br />
              YOUR MEAL.
            </h1>

            {/* Sub-copy */}
            <p className="max-w-2xl text-lg font-light leading-relaxed text-gray-200 sm:text-xl">
              FlexiMeal gives students the freedom to eat when they want, while
              helping mess owners prepare exactly what students need. Zero wasted
              money. Zero wasted food.
            </p>

            {/* CTA Action Group */}
            <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row lg:justify-start">
              {/* Primary CTA */}
              <button
                type="button"
                onClick={handleFindMeal}
                className="flex w-full transform items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] px-8 py-4 text-base font-extrabold text-white shadow-2xl transition hover:scale-105 hover:shadow-red-500/30 sm:w-auto"
              >
                <span>🍽️ Find Your Meal</span>
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </button>

              {/* Secondary CTA */}
              <button
                type="button"
                onClick={handleBecomePartner}
                className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-base font-extrabold text-white backdrop-blur-md transition hover:bg-white/20 sm:w-auto"
              >
                <i
                  className="fa-solid fa-store text-amber-400"
                  aria-hidden="true"
                />
                <span>Become a Mess Partner</span>
              </button>
            </div>

            {/* Trust Line */}
            <div className="flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-6 text-xs font-semibold text-gray-300 lg:justify-start">
              <div className="flex items-center gap-2">
                <i
                  className="fa-solid fa-check-circle text-sm text-emerald-400"
                  aria-hidden="true"
                />
                Flexible Pay-As-You-Go
              </div>
              <div className="flex items-center gap-2">
                <i
                  className="fa-solid fa-check-circle text-sm text-emerald-400"
                  aria-hidden="true"
                />
                Fresh Homely Cooking
              </div>
              <div className="flex items-center gap-2">
                <i
                  className="fa-solid fa-check-circle text-sm text-emerald-400"
                  aria-hidden="true"
                />
                Up to 25% Less Food Waste
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* Right — Visual Card Stack                                      */}
          {/* ------------------------------------------------------------- */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-lg rotate-1 rounded-3xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-xl transition duration-500 hover:rotate-0">
              {/* Featured Meal Card */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={HERO_THALI_URL}
                  alt="Special Indian Thali"
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Top badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-emerald-600/90 px-3 py-1 text-xs font-extrabold text-white backdrop-blur-md">
                  <i className="fa-solid fa-leaf" aria-hidden="true" />
                  Pure Homestyle Thali
                </div>

                {/* Bottom info */}
                <div className="absolute right-4 bottom-4 left-4 text-left">
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                    Maa&apos;s Kitchen Special
                  </span>
                  <h3 className="mt-0.5 text-xl font-bold text-white">
                    Paneer Butter Masala + Dal Tadka Thali
                  </h3>
                  <p className="mt-1 text-xs text-gray-300">
                    3 Chapatis, Steam Rice, Salad &amp; Gulab Jamun
                  </p>

                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-lg font-extrabold text-white">
                      ₹89{" "}
                      <span className="text-xs font-normal text-gray-400">
                        / single meal
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={handleFindMeal}
                      className="rounded-xl bg-[var(--color-primary)] px-4 py-2 text-xs font-bold text-white transition hover:bg-red-700"
                    >
                      Book Meal
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Prediction Widget */}
              <div className="absolute -bottom-6 -left-6 flex max-w-xs items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 text-gray-900 shadow-2xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-lg font-bold text-emerald-700">
                  <i className="fa-solid fa-chart-line" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase text-gray-500">
                    Tomorrow&apos;s Attendance
                  </p>
                  <p className="text-sm font-extrabold text-gray-900">
                    84 / 100 Confirmed
                  </p>
                  <p className="text-[10px] font-bold text-emerald-600">
                    🎯 Mess cooks exactly 84 meals!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;