import React from 'react';

export default function ClientServices() {
  return (
    <div>

      {/* HERO */}
      <section className="relative bg-gradient-to-b from-[#0A0E17] via-[#111827] to-[#1E293B] text-white py-32 px-8 overflow-hidden">

        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-700/20 blur-[150px] rounded-full"></div>

        <div className="max-w-6xl mx-auto relative z-10">

          <span className="uppercase tracking-[0.35em] text-purple-400 text-xs font-semibold">
            Search & Advisory Services
          </span>

          <h1 className="text-5xl md:text-7xl font-light mt-6 leading-tight max-w-5xl">
            Strategic talent acquisition for
            <span className="text-purple-400 font-semibold">
              {' '}high-performance organizations.
            </span>
          </h1>

          <p className="text-slate-300 text-lg max-w-3xl mt-10 leading-relaxed">
            Vertex Partners delivers executive search, leadership advisory,
            talent intelligence, and specialized recruitment solutions for
            organizations seeking transformational talent across critical business functions.
          </p>

        </div>

      </section>

      {/* SERVICES */}
      <section className="py-28 px-8 bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <span className="uppercase tracking-[0.3em] text-purple-600 text-xs font-semibold">
              Core Services
            </span>

            <h2 className="text-5xl font-bold text-slate-900 mt-4">
              Specialized Search Capabilities
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:-translate-y-2 transition-all duration-300">

              <div className="text-purple-600 text-5xl font-bold mb-6">
                01
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Executive Leadership
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Identification and placement of C-suite executives,
                vice presidents, directors, and senior operational leaders
                responsible for driving organizational growth and transformation.
              </p>

            </div>

            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:-translate-y-2 transition-all duration-300">

              <div className="text-purple-600 text-5xl font-bold mb-6">
                02
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Technology & Engineering
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Recruitment of engineering leaders, software architects,
                digital transformation specialists, infrastructure experts,
                and highly specialized technical professionals.
              </p>

            </div>

            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:-translate-y-2 transition-all duration-300">

              <div className="text-purple-600 text-5xl font-bold mb-6">
                03
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Healthcare & Life Sciences
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Strategic placement of clinical, regulatory, scientific,
                quality, and healthcare administration professionals across
                complex and highly regulated environments.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* PROCESS */}
      <section className="py-28 px-8 bg-slate-50">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <span className="uppercase tracking-[0.3em] text-purple-600 text-xs font-semibold">
              Search Methodology
            </span>

            <h2 className="text-5xl font-bold text-slate-900 mt-4">
              How We Deliver Results
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-white p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-4">Discovery</h3>
              <p className="text-slate-600">
                Comprehensive understanding of business goals,
                culture, leadership requirements, and growth objectives.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-4">Market Mapping</h3>
              <p className="text-slate-600">
                Detailed research into talent ecosystems,
                competitors, and leadership landscapes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-4">Assessment</h3>
              <p className="text-slate-600">
                Rigorous evaluation of leadership capability,
                technical expertise, and cultural fit.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl">
              <h3 className="font-bold text-xl mb-4">Placement</h3>
              <p className="text-slate-600">
                End-to-end support through offer negotiation,
                onboarding, and leadership integration.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* INDUSTRIES */}
      <section className="py-28 px-8 bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <span className="uppercase tracking-[0.3em] text-purple-600 text-xs font-semibold">
              Industries Served
            </span>

            <h2 className="text-5xl font-bold text-slate-900 mt-4">
              Expertise Across Key Sectors
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="border border-slate-200 rounded-2xl p-8">
              <h3 className="font-bold text-xl mb-4">Technology</h3>
              <p className="text-slate-600">
                Software, AI, cybersecurity, cloud, and enterprise systems.
              </p>
            </div>

            <div className="border border-slate-200 rounded-2xl p-8">
              <h3 className="font-bold text-xl mb-4">Healthcare</h3>
              <p className="text-slate-600">
                Clinical operations, administration, and patient services.
              </p>
            </div>

            <div className="border border-slate-200 rounded-2xl p-8">
              <h3 className="font-bold text-xl mb-4">Life Sciences</h3>
              <p className="text-slate-600">
                Regulatory affairs, research, quality, and scientific leadership.
              </p>
            </div>

            <div className="border border-slate-200 rounded-2xl p-8">
              <h3 className="font-bold text-xl mb-4">Financial Services</h3>
              <p className="text-slate-600">
                Banking, fintech, operations, and executive management.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CONTACT FORM */}
      <section className="py-32 px-8 bg-[#0A0E17] text-white">

        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-16">

            <span className="uppercase tracking-[0.3em] text-purple-400 text-xs font-semibold">
              Client Inquiry
            </span>

            <h2 className="text-5xl font-bold mt-4 mb-6">
              Initiate A Search Engagement
            </h2>

            <p className="text-slate-400 max-w-2xl mx-auto">
              Share details about your hiring objectives and organizational
              requirements. Our team will contact you to discuss a customized
              search strategy.
            </p>

          </div>

          <form
            className="space-y-8"
            onSubmit={(e) => e.preventDefault()}
          >

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block text-xs uppercase tracking-[0.25em] text-slate-400 mb-3">
                  Company Name
                </label>

                <input
                  type="text"
                  placeholder="Your organization"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.25em] text-slate-400 mb-3">
                  Search Category
                </label>

                <select className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-purple-500">
                  <option>Executive Leadership</option>
                  <option>Technology & Engineering</option>
                  <option>Healthcare & Life Sciences</option>
                  <option>Financial Services</option>
                </select>
              </div>

            </div>

            <div>

              <label className="block text-xs uppercase tracking-[0.25em] text-slate-400 mb-3">
                Search Requirements
              </label>

              <textarea
                rows="6"
                placeholder="Describe the position, leadership requirements, desired experience, and organizational objectives..."
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-purple-500"
              />

            </div>

            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 px-10 py-5 rounded-xl font-semibold uppercase tracking-[0.25em] transition-all duration-300"
            >
              Submit Inquiry
            </button>

          </form>

        </div>

      </section>

    </div>
  );
}