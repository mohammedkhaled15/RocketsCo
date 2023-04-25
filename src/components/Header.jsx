import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpenMenu = () => {
    setOpen(!open);
  };
  const handleCloseMenu = () => {
    setOpen(false);
  };
  return (
    <header className="sticky top-0 z-10 bg-teal-700 text-white">
      <section className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <h1 className="text-3xl font-medium">
          <a href="#hero">🚀Acme Rockets</a>
        </h1>
        <div>
          <button
            id="hamburger-button"
            className={`relative flex h-8 w-8 cursor-pointer flex-col gap-2 text-3xl md:hidden ${
              open ? "toggle-btn" : ""
            }`}
            onClick={handleOpenMenu}
          >
            <div
              className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded  before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded
            after:bg-white after:transition-all   after:duration-500 after:content-['']"
            ></div>

            {/* &#9776; */}
          </button>
          {/* <button
              className="text-4xl "
              onClick={handleOpenMenu}>
              &times;
            </button> */}
          <nav className="hidden space-x-8 text-xl md:block" aria-label="main">
            <a href="#rockets" className="hover:opacity-90">
              Rockets
            </a>
            <a href="#testimonials" className="hover:opacity-90">
              Testimonials
            </a>
            <a href="#contacts" className="hover:opacity-90">
              Contact US
            </a>
          </nav>
        </div>
      </section>
      <section
        id="mobile-menu"
        className={`absolute top-[68px] w-full bg-black text-5xl ${
          open ? "flex" : "hidden"
        } origin-top animate-open-menu flex-col justify-center`}
        onClick={handleCloseMenu}
      >
        <nav
          className="flex min-h-screen flex-col items-center py-8"
          aria-label="mobile"
        >
          <a
            href="#hero"
            className="w-full py-6 text-center hover:opacity-90"
            onClick={handleCloseMenu}
          >
            Home
          </a>
          <a
            href="#rockets"
            className="w-full py-6 text-center hover:opacity-90"
            onClick={handleCloseMenu}
          >
            Rockets
          </a>
          <a
            href="#testimonials"
            className="w-full py-6 text-center hover:opacity-90"
            onClick={handleCloseMenu}
          >
            Testimonials
          </a>
          <a
            href="#contacts"
            className="w-full py-6 text-center hover:opacity-90"
            onClick={handleCloseMenu}
          >
            Contacts
          </a>
          <a
            href="#footer"
            className="w-full py-6 text-center hover:opacity-90"
            onClick={handleCloseMenu}
          >
            Footer
          </a>
        </nav>
      </section>
    </header>
  );
};

export default Header;
