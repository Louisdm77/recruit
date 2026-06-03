import React from 'react';

export default function About() {
  return (
    <div>

      {/* HERO */}
      <section className="relative bg-gradient-to-b from-[#0A0E17] via-[#111827] to-[#1E293B] text-white py-32 px-8 overflow-hidden">

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-700/20 blur-[140px] rounded-full"></div>

        <div className="max-w-6xl mx-auto relative z-10">

          <span className="uppercase tracking-[0.35em] text-purple-400 text-xs font-semibold">
            About Vertex Partners
          </span>

          <h1 className="text-5xl md:text-7xl font-light mt-6 leading-tight max-w-5xl">
            Building leadership teams that
            <span className="text-purple-400 font-semibold">
              {" "}shape industries.
            </span>
          </h1>

          <p className="mt-10 text-slate-300 text-lg leading-relaxed max-w-3xl">
            Vertex Partners is a retained executive search and talent
            intelligence firm focused on identifying exceptional leaders,
            specialists, and transformative professionals for organizations
            operating in highly competitive markets.
          </p>

        </div>

      </section>

      {/* STORY */}
      <section className="py-28 px-8 bg-white">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">

          <div>

            <span className="uppercase tracking-[0.3em] text-purple-600 text-xs font-semibold">
              Our Story
            </span>

            <h2 className="text-5xl font-bold text-slate-900 mt-4 mb-8">
              Beyond Traditional Recruitment
            </h2>

            <p className="text-slate-600 leading-relaxed mb-6">
              Vertex Partners was founded on a simple belief: the most
              exceptional talent rarely enters the market through conventional
              channels. Traditional recruiting models often rely on volume,
              databases, and public job boards, creating inefficiencies for
              both organizations and professionals.
            </p>

            <p className="text-slate-600 leading-relaxed">
              We take a different approach. Through strategic networking,
              market intelligence, executive assessment, and confidential
              engagement, we identify individuals capable of delivering
              measurable business impact and long-term leadership value.
            </p>

          </div>

          <div className="bg-slate-50 rounded-3xl p-10 border border-slate-100">

            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Our Mission
            </h3>

            <p className="text-slate-600 leading-relaxed mb-8">
              To connect visionary organizations with exceptional professionals
              through a search process built on precision, discretion,
              transparency, and long-term partnership.
            </p>

            <div className="space-y-6">

              <div>
                <h4 className="font-semibold text-slate-900">
                  Integrity
                </h4>
                <p className="text-slate-600">
                  Every search is conducted with professionalism and confidentiality.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">
                  Excellence
                </h4>
                <p className="text-slate-600">
                  We focus on quality over volume in every engagement.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">
                  Partnership
                </h4>
                <p className="text-slate-600">
                  Long-term relationships drive our success.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* PROCESS */}
      <section className="py-28 px-8 bg-slate-50">

        <div className="max-w-7xl mx-auto">

          <div className="mb-20">

            <span className="uppercase tracking-[0.3em] text-purple-600 text-xs font-semibold">
              Search Methodology
            </span>

            <h2 className="text-5xl font-bold text-slate-900 mt-4">
              Our Placement Architecture
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white rounded-2xl p-10 shadow-sm">

              <div className="text-purple-600 text-4xl font-bold mb-6">
                01
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Strategic Positioning
              </h3>

              <p className="text-slate-600 leading-relaxed">
                We refine professional narratives, achievements, leadership
                profiles, and market positioning to ensure candidates are
                presented with clarity and credibility.
              </p>

            </div>

            <div className="bg-white rounded-2xl p-10 shadow-sm">

              <div className="text-purple-600 text-4xl font-bold mb-6">
                02
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Market Engagement
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Through extensive market intelligence and confidential outreach,
                we connect with decision-makers, leadership teams, and hiring
                stakeholders across targeted sectors.
              </p>

            </div>

            <div className="bg-white rounded-2xl p-10 shadow-sm">

              <div className="text-purple-600 text-4xl font-bold mb-6">
                03
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Executive Alignment
              </h3>

              <p className="text-slate-600 leading-relaxed">
                We manage interview preparation, stakeholder expectations,
                compensation discussions, and onboarding support to ensure
                successful long-term outcomes.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* VALUES */}
      <section className="py-28 px-8 bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <span className="uppercase tracking-[0.3em] text-purple-600 text-xs font-semibold">
              Core Principles
            </span>

            <h2 className="text-5xl font-bold text-slate-900 mt-4">
              What Defines Us
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="p-8 border border-slate-200 rounded-2xl">
              <h3 className="font-bold text-xl mb-4">Confidentiality</h3>
              <p className="text-slate-600">
                Protecting both clients and candidates throughout every engagement.
              </p>
            </div>

            <div className="p-8 border border-slate-200 rounded-2xl">
              <h3 className="font-bold text-xl mb-4">Precision</h3>
              <p className="text-slate-600">
                Focused searches designed to deliver quality rather than volume.
              </p>
            </div>

            <div className="p-8 border border-slate-200 rounded-2xl">
              <h3 className="font-bold text-xl mb-4">Insight</h3>
              <p className="text-slate-600">
                Deep market intelligence supporting every recommendation.
              </p>
            </div>

            <div className="p-8 border border-slate-200 rounded-2xl">
              <h3 className="font-bold text-xl mb-4">Results</h3>
              <p className="text-slate-600">
                Delivering measurable outcomes for organizations and professionals.
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}