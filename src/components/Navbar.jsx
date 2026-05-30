import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import navigationConfig from "../config/navigationConfig";
import siteConfig from "../config/siteConfig";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, []);

  const handleDropdownToggle = (id) => {
    setActiveDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700">
              <span className="text-lg font-bold text-white">A</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex" ref={navRef}>
            {navigationConfig.map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() =>
                  item.hasDropdown && setActiveDropdown(item.id)
                }
                onMouseLeave={() =>
                  item.hasDropdown && setActiveDropdown(null)
                }
              >
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(item.id)}
                      className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                        activeDropdown === item.id
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                      aria-expanded={activeDropdown === item.id}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <svg
                        className={`h-4 w-4 transition-transform ${
                          activeDropdown === item.id ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {/* Dropdown */}
                    <div
                      className={`absolute left-0 top-full mt-1 w-64 rounded-xl border border-gray-200 bg-white shadow-xl transition-all duration-200 ${
                        activeDropdown === item.id
                          ? "visible opacity-100 translate-y-0"
                          : "invisible opacity-0 -translate-y-1"
                      }`}
                    >
                      <div className="p-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.id}
                            to={child.path}
                            className="block rounded-lg px-4 py-3 transition-colors hover:bg-blue-50"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <span className="text-sm font-semibold text-gray-900">
                              {child.label}
                            </span>
                            {child.description && (
                              <p className="mt-0.5 text-xs text-gray-500">
                                {child.description}
                              </p>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-blue-50 text-blue-600"
                          : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-gray-200 transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <nav className="space-y-1 px-4 py-3">
          {navigationConfig.map((item) => (
            <div key={item.id}>
              {item.hasDropdown ? (
                <>
                  <button
                    onClick={() => handleDropdownToggle(item.id)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                  >
                    {item.label}
                    <svg
                      className={`h-4 w-4 transition-transform ${
                        activeDropdown === item.id ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`ml-4 overflow-hidden border-l-2 border-gray-200 pl-3 transition-all ${
                      activeDropdown === item.id
                        ? "max-h-64 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.id}
                        to={child.path}
                        className="block rounded-lg px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-600"
                        onClick={() => {
                          setActiveDropdown(null);
                          setMobileOpen(false);
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.path}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
