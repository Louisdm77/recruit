import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link,
} from 'react-router-dom';

import Home from './pages/home';
import About from './pages/About';
import TalentPartners from './pages/TalentPartners';
import ClientServices from './pages/ClientServices';

function App() {
  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-purple-400 uppercase text-xs tracking-[0.25em] font-medium'
      : 'text-slate-300 hover:text-purple-400 transition-all duration-300 uppercase text-xs tracking-[0.25em] font-medium';

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">

        {/* NAVIGATION */}
        <nav className="sticky top-0 z-50 bg-[#0A0E17]/90 backdrop-blur-xl border-b border-white/10">

          <div className="max-w-7xl mx-auto px-8">

            <div className="flex items-center justify-between h-24">

              {/* LOGO */}
              <Link
                to="/"
                className="text-white text-xl md:text-2xl font-semibold tracking-[0.25em] uppercase"
              >
                Vertex
                <span className="text-purple-400 font-light ml-2">
                  Partners
                </span>
              </Link>

              {/* DESKTOP NAVIGATION */}
              <div className="hidden md:flex items-center gap-10">

                <NavLink
                  to="/"
                  end
                  className={navLinkClass}
                >
                  Home
                </NavLink>

                <NavLink
                  to="/about"
                  className={navLinkClass}
                >
                  About
                </NavLink>

                <NavLink
                  to="/partners"
                  className={navLinkClass}
                >
                  Talent Network
                </NavLink>

                <NavLink
                  to="/services"
                  className={navLinkClass}
                >
                  Services
                </NavLink>

              </div>

              {/* CTA BUTTON */}
              <Link
                to="/services"
                className="hidden md:inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg uppercase text-xs tracking-[0.25em] font-semibold transition-all duration-300 hover:scale-105"
              >
                Schedule Consultation
              </Link>

            </div>

          </div>

        </nav>

        {/* MAIN CONTENT */}
        <main className="flex-grow">

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/about"
              element={<About />}
            />

            <Route
              path="/partners"
              element={<TalentPartners />}
            />

            <Route
              path="/services"
              element={<ClientServices />}
            />

          </Routes>

        </main>

        {/* FOOTER */}
        <footer className="bg-[#0A0E17] text-slate-400 py-20 px-8 border-t border-white/10">

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

            {/* COLUMN 1 */}
            <div>

              <h3 className="text-white text-lg font-semibold mb-4">
                Vertex Partners
              </h3>

              <p className="leading-relaxed text-sm">
                Executive search, leadership intelligence,
                and strategic talent acquisition for organizations
                operating in highly competitive markets.
              </p>

            </div>

            {/* COLUMN 2 */}
            <div>

              <h4 className="text-white uppercase tracking-[0.25em] text-xs mb-4">
                Expertise
              </h4>

              <ul className="space-y-3 text-sm">

                <li>
                  Executive Search
                </li>

                <li>
                  Leadership Assessment
                </li>

                <li>
                  Talent Intelligence
                </li>

                <li>
                  Market Mapping
                </li>

              </ul>

            </div>

            {/* COLUMN 3 */}
            <div>

              <h4 className="text-white uppercase tracking-[0.25em] text-xs mb-4">
                Industries
              </h4>

              <ul className="space-y-3 text-sm">

                <li>
                  Technology
                </li>

                <li>
                  Healthcare
                </li>

                <li>
                  Life Sciences
                </li>

                <li>
                  Financial Services
                </li>

              </ul>

            </div>

            {/* COLUMN 4 */}
            <div>

              <h4 className="text-white uppercase tracking-[0.25em] text-xs mb-4">
                Contact
              </h4>

              <p className="text-sm mb-2">
                contact@vertexpartners.com
              </p>

              <p className="text-sm">
                Executive Search & Advisory
              </p>

            </div>

          </div>

          {/* BOTTOM FOOTER */}
          <div className="max-w-7xl mx-auto border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">

            <p className="text-xs text-slate-500">
              © 2026 Vertex Partners. All rights reserved.
            </p>

            <p className="text-xs text-slate-600 mt-4 md:mt-0">
              Confidential Executive Search • Strategic Talent Intelligence
            </p>

          </div>

        </footer>

      </div>
    </Router>
  );
}

export default App;