import { site } from "../../data/site";

export default function Pricing() {
  return (
    <section id="pricing" className="w-full bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <p className="text-gray-600 text-sm font-medium mb-4 text-center">
          Pricing
        </p>

        {/* Main Headline */}
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-16 text-center">
          Simple, transparent pricing.
        </h2>

        {/* Package Card */}

        <div className="w-full max-w-md mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            {/* Package Label */}
            <p className="text-gray-600 text-lg mb-4">One-off</p>

            {/* Price */}
            <h2 className="text-6xl font-bold text-gray-900 mb-3">$2497</h2>

            {/* Package Description */}
            <p className="text-gray-500 mb-6">High-converting landing page.</p>

            {/* Tagline */}
            <p className="text-gray-900 text-lg mb-8">
              Perfect for single, high-impact, conversion-focused websites &
              landing pages.
            </p>

            {/* Divider */}
            <div className="border-t border-gray-200 my-8"></div>

            {/* Features List */}
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3 text-gray-900">
                <span className="text-xl mt-0.5">👀</span>
                <span>2x revisions</span>
              </li>
              <li className="flex items-start gap-3 text-gray-900">
                <span className="text-xl mt-0.5">👀</span>
                <span>High-converting copy</span>
              </li>

              <li className="flex items-start gap-3 text-gray-900">
                <span className="text-xl mt-0.5">👀</span>
                <span>Updates delivered every 48 hours</span>
              </li>
            </ul>

            {/* CTA Button */}
            <button className="w-full bg-transparent border-2 border-gray-900 text-gray-900 font-semibold py-4 px-6 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-200 cursor-pointer">
              <a href={site.calLink} target="_blank">
                Get started today
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
