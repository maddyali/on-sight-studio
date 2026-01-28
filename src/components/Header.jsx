import { useState, useEffect } from "react";
import { site } from "../data/site";
import ButtonLink from "../components/ui/ButtonLink";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      const handleClickOutside = () => setIsMenuOpen(false);
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [isMenuOpen]);

  const nav = [
    { name: "Why Us", href: "#why-us" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQs", href: "#faqs" },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200 py-2 fixed">
      <div className="flex items-center justify-between h-16 max-w-7xl mx-auto px-6">
        {/* LOGO - RESPONSIVE */}
        <div className="text-xl font-bold text-gray-900">
          {/* Show "O/S" on mobile/tablet */}
          <span className="lg:hidden">O/S</span>
          {/* Show "On Sight Studio" on desktop */}
          <span className="hidden lg:inline">On Sight Studio</span>
        </div>

        {/* DESKTOP NAV & CTA */}
        <nav className="hidden md:flex ">
          <ul className="flex gap-8">
            {nav.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="hover:text-gray-900">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <a
          href={site.calLink}
          target="_blank"
          className="hidden md:flex items-center gap-1 bg-white border-2 border-gray-900 text-gray-900 font-semibold py-2 px-4 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-200 cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
            <img
              src="/pfp.png"
              alt="Maddy"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-bold">Book a call with Maddy</span>
        </a>

        {/* MOBILE NAV & CTA */}

        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            {isMenuOpen ? (
              <X className="h-8 w-8" />
            ) : (
              <Menu className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 absolute top-full left-0 right-0 z-50 bg-white py-4 px-2">
          <nav>
            <ul className="space-y-2">
              {nav.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
