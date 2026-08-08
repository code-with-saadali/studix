"use client";

const NAV_LINKS = ["Home", "About us", "Work Gallery", "Contact"];
const SOCIAL_LINKS = ["Instagram", "Linkedin", "Twitter"];

export default function Footer() {
  return (
    <footer className="w-full bg-white py-12 sm:py-16">
      <div className=" grid grid-cols-1 gap-10 px-5 lg:grid-cols-[1fr_2.2fr] lg:gap-16 lg:px-20">
        {/* Left: logo */}
        <span className="text-2xl font-black uppercase tracking-tight text-black">
          Studix<sup className="text-xs font-bold align-super">®</sup>
        </span>

        {/* Right: form + link columns */}
        <div>
          <form className="flex w-full font-inter">
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full bg-neutral-100 px-6 py-4 text-sm text-neutral-500 placeholder:text-neutral-400 focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 bg-black px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-neutral-800"
            >
              Submit
            </button>
          </form>

          <div className="mt-14 grid grid-cols-1 gap-10 sm:mt-16 sm:grid-cols-3">
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-lg font-inter text-black transition-colors duration-200 hover:text-red-500"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <ul className="space-y-3">
              {SOCIAL_LINKS.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-lg font-inter text-black transition-colors duration-200 hover:text-red-500"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <div>
              <a
                href="mailto:hello@studix.com"
                className="text-xl font-semibold uppercase text-black"
              >
                Hello@studix.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}