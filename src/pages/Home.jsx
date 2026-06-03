import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#0A0E17] via-[#111827] to-[#1E293B] text-white py-36 px-8 overflow-hidden">

        {/* Background Glow Effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-700/20 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[140px] rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10">

          <span className="text-purple-400 text-xs font-semibold tracking-[0.35em] uppercase block mb-6">
            Executive Talent Intelligence
          </span>

          <h1 className="text-5xl md:text-7xl font-light leading-tight max-w-5xl mb-8">
            Connecting organizations with
            <span className="font-semibold text-purple-400">
              {" "}exceptional leadership talent
            </span>
            {" "}before the market ever sees them.
          </h1>

          <p className="text-slate-300 text-lg max-w-3xl leading-relaxed mb-12">
            Our proprietary search methodology combines executive assessment,
            confidential networking, market mapping, and strategic positioning
            to identify professionals who rarely engage through traditional
            recruiting channels. We specialize in delivering transformative
            leaders capable of accelerating growth, innovation, and operational excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mb-24">

            <Link
              to="/partners"
              className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 uppercase text-xs tracking-[0.25em] font-semibold px-10 py-5 text-center rounded-lg"
            >
              Explore Partnerships
            </Link>

            <Link
              to="/about"
              className="border border-white/20 hover:bg-white/5 transition-all duration-300 uppercase text-xs tracking-[0.25em] font-semibold px-10 py-5 text-center rounded-lg"
            >
              Our Approach
            </Link>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-4xl font-bold text-purple-400 mb-2">500+</h3>
              <p className="text-slate-400">
                Executive searches successfully completed.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-4xl font-bold text-purple-400 mb-2">92%</h3>
              <p className="text-slate-400">
                Candidate retention after placement.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-4xl font-bold text-purple-400 mb-2">48hrs</h3>
              <p className="text-slate-400">
                Average identification turnaround.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-4xl font-bold text-purple-400 mb-2">20+</h3>
              <p className="text-slate-400">
                Industries actively covered worldwide.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CLIENT LOGOS */}
      <section className="py-20 px-8 bg-white">

        <div className="max-w-7xl mx-auto text-center">

          <span className="uppercase text-xs tracking-[0.35em] text-slate-500 font-semibold">
            Trusted By Industry Leaders
          </span>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mt-12">

            {[
              "FORTUNE 500",
              "LIFE SCIENCES",
              "TECHNOLOGY",
              "HEALTHCARE",
              "FINANCIAL"
            ].map((item) => (
              <div
                key={item}
                className="border border-slate-200 rounded-xl py-8 font-semibold text-slate-500"
              >
                {item}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="py-28 px-8 bg-slate-50">

        <div className="max-w-7xl mx-auto">

          <div className="mb-20">

            <span className="uppercase tracking-[0.3em] text-purple-600 text-xs font-semibold">
              Why Organizations Choose Us
            </span>

            <h2 className="text-5xl font-bold text-slate-900 mt-4 max-w-4xl">
              Precision search, market intelligence, and exceptional execution.
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white p-10 rounded-2xl shadow-sm hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">
                Confidential Talent Mapping
              </h3>

              <p className="text-slate-600 leading-relaxed">
                We maintain active relationships with high-performing leaders
                who are rarely visible in public talent markets, providing
                access to candidates competitors never see.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">
                Executive Assessment
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Every candidate undergoes rigorous evaluation across leadership
                capability, strategic thinking, communication effectiveness,
                and organizational alignment.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">
                Industry Specialization
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Dedicated expertise across healthcare, life sciences,
                technology, manufacturing, finance, and executive operations.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* STRATEGIC PILLARS */}
      <section className="py-28 px-8 bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="mb-20">

            <span className="uppercase tracking-[0.3em] text-purple-600 text-xs font-semibold">
              Strategic Framework
            </span>

            <h2 className="text-5xl font-bold text-slate-900 mt-4">
              The Four Pillars Of Our Search Model
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <span className="text-purple-600 font-mono font-bold">01</span>

              <h3 className="font-bold text-xl mt-4 mb-4">
                Market Intelligence
              </h3>

              <p className="text-slate-600">
                Deep analysis of executive movement, compensation trends,
                and emerging leadership markets.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <span className="text-purple-600 font-mono font-bold">02</span>

              <h3 className="font-bold text-xl mt-4 mb-4">
                Candidate Positioning
              </h3>

              <p className="text-slate-600">
                Strategic optimization of executive profiles, achievements,
                and professional narratives.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <span className="text-purple-600 font-mono font-bold">03</span>

              <h3 className="font-bold text-xl mt-4 mb-4">
                Network Penetration
              </h3>

              <p className="text-slate-600">
                Direct engagement with boards, investors, founders,
                and senior decision-makers.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <span className="text-purple-600 font-mono font-bold">04</span>

              <h3 className="font-bold text-xl mt-4 mb-4">
                Placement Success
              </h3>

              <p className="text-slate-600">
                Structured onboarding and leadership transition support
                designed to maximize long-term impact.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* PROCESS TIMELINE */}
      <section className="py-28 px-8 bg-slate-950 text-white">

        <div className="max-w-7xl mx-auto">

          <div className="mb-20">

            <span className="uppercase tracking-[0.3em] text-purple-400 text-xs font-semibold">
              Our Process
            </span>

            <h2 className="text-5xl font-bold mt-4">
              A Refined Search Methodology
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-10">

            {[
              {
                number: "01",
                title: "Discovery",
                text: "Deep consultation to understand organizational objectives."
              },
              {
                number: "02",
                title: "Market Mapping",
                text: "Comprehensive analysis of relevant talent ecosystems."
              },
              {
                number: "03",
                title: "Assessment",
                text: "Rigorous interviews and executive evaluations."
              },
              {
                number: "04",
                title: "Placement",
                text: "Successful integration and onboarding support."
              }
            ].map((item) => (
              <div key={item.number}>
                <span className="text-purple-400 text-3xl font-bold">
                  {item.number}
                </span>

                <h3 className="text-xl font-semibold mt-4 mb-4">
                  {item.title}
                </h3>

                <p className="text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 px-8 bg-white">

        <div className="max-w-5xl mx-auto text-center">

          <span className="uppercase tracking-[0.3em] text-purple-600 text-xs font-semibold">
            Client Perspective
          </span>

          <h2 className="text-5xl font-bold text-slate-900 mt-4 mb-16">
            What Our Partners Say
          </h2>

          <div className="bg-slate-50 p-12 rounded-3xl">

            <p className="text-2xl text-slate-700 leading-relaxed italic">
              "Their ability to identify and engage exceptional leadership
              talent significantly accelerated our growth strategy. The process
              was meticulous, discreet, and highly effective."
            </p>

            <div className="mt-8">
              <h4 className="font-bold text-slate-900">
                Chief Executive Officer
              </h4>

              <p className="text-slate-500">
                Global Technology Organization
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-32 px-8 bg-gradient-to-r from-purple-700 to-indigo-700 text-white">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-bold mb-6">
            Transform Your Leadership Pipeline
          </h2>

          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10">
            Gain access to exceptional executives, strategic market insights,
            and a search process designed for long-term organizational success.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-white text-purple-700 font-bold uppercase tracking-[0.25em] px-12 py-5 rounded-xl hover:scale-105 transition-all duration-300"
          >
            Schedule A Consultation
          </Link>

        </div>

      </section>

    </div>
  );
}