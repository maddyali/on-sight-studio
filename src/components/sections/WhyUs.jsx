export default function Benefits() {
  return (
    <section id="why-us" className="w-full bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <p className="text-gray-600 text-sm font-medium mb-4 text-center">
          Benefits
        </p>

        {/* Main Headline */}
        <h2 className="text-5xl md:text-6xl  text-gray-900 font-bold mb-16 text-center">
          Because results matter.
        </h2>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Benefit 1 */}
          <div>
            <div className="text-5xl mb-6 text-center">📈</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              We speak "ROI"
            </h3>
            <p className="text-gray-600 leading-relaxed text-center">
              Our copy, design, dev synergy aims sell, not just look pretty.
            </p>
          </div>

          {/* Benefit 2 */}
          <div>
            <div className="text-5xl mb-6 text-center">💸</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Transparent price
            </h3>
            <p className="text-gray-600 leading-relaxed text-center">
              No hidden fees or scope creep. Know exactly what you're paying
              for.
            </p>
          </div>

          {/* Benefit 3 */}
          <div>
            <div className="text-5xl mb-6 text-center">🤝</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Fast feedback
            </h3>
            <p className="text-gray-600 leading-relaxed text-center">
              We move fast and keep you posted every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
