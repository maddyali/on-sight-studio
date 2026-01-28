import { site } from "../../data/site";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center gap-6 pt-56 pb-20 px-6"
    >
      <div className="flex flex-col space-y-6 text-center items-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 text-center">
          Websites that convert on sight.
        </h1>
        <p className="text-2xl font-bold text-gray-900 mb-6 leading-relaxed">
          Copy, design, and development for small businesses that can't afford
          to lose.
        </p>

        <a
          href={site.calLink}
          target="_blank"
          className="px-4 py-4 border-2 rounded-full max-w-sm cursor-pointer text-center"
        >
          Book an intro call
        </a>

        {/* Add this here */}
        <div className="text-center mt-2">
          <p className="text-yellow-400 text-lg mb-1">⭐⭐⭐⭐⭐</p>
          <p className="text-sm text-gray-500">
            "Working with Maddy was a 10/10 experience."
          </p>
        </div>
      </div>
    </section>
  );
}
