import React from 'react';

const partners = [
  {
    name: 'Patricia Nichols',
    role: 'Managing Partner',
    specialty: 'Executive Search & Leadership Advisory',
    bio: 'Patricia leads strategic executive search engagements across technology, healthcare, life sciences, and operational leadership functions. Her expertise lies in identifying transformative leaders capable of driving organizational growth and long-term enterprise value.',
    experience: '15+ Years',
  },
  {
    name: 'Dan Reynolds',
    role: 'Director, Talent Intelligence',
    specialty: 'Market Mapping & Executive Assessment',
    bio: 'Dan specializes in talent intelligence, leadership assessment, and executive positioning. His work focuses on identifying high-performing professionals and ensuring alignment between candidate capabilities and organizational objectives.',
    experience: '12+ Years',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Senior Search Consultant',
    specialty: 'Technology & Digital Leadership',
    bio: 'Sarah partners with organizations seeking senior technology executives, engineering leaders, and digital transformation specialists across competitive global markets.',
    experience: '10+ Years',
  },
];

export default function TalentPartners() {
  return (
    <div>

      {/* HERO */}
      <section className="relative bg-gradient-to-b from-[#0A0E17] via-[#111827] to-[#1E293B] text-white py-32 px-8 overflow-hidden">

        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-700/20 blur-[140px] rounded-full"></div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">

          <span className="uppercase tracking-[0.35em] text-purple-400 text-xs font-semibold">
            Leadership Team
          </span>

          <h1 className="text-5xl md:text-7xl font-light mt-6 leading-tight">
            Meet The Experts Behind
            <span className="text-purple-400 font-semibold">
              {' '}Vertex Partners
            </span>
          </h1>

          <p className="mt-10 text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Our team combines executive search expertise, talent intelligence,
            leadership assessment, and market insight to deliver exceptional
            outcomes for organizations and professionals alike.
          </p>

        </div>

      </section>

      {/* INTRO */}
      <section className="py-24 px-8 bg-white">

        <div className="max-w-6xl mx-auto text-center">

          <span className="uppercase tracking-[0.3em] text-purple-600 text-xs font-semibold">
            Strategic Advisors
          </span>

          <h2 className="text-5xl font-bold text-slate-900 mt-4 mb-8">
            A Team Built Around Excellence
          </h2>

          <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Every engagement is supported by professionals with extensive
            experience in executive search, organizational consulting,
            leadership evaluation, and strategic workforce planning.
            Our collaborative approach ensures precision at every stage
            of the search process.
          </p>

        </div>

      </section>

      {/* PARTNER CARDS */}
      <section className="py-20 px-8 bg-slate-50">

        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:-translate-y-2 transition-all duration-300"
              >

                {/* HEADER */}
                <div className="bg-gradient-to-r from-purple-700 to-indigo-700 h-32 flex items-center justify-center">

                  <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-3xl font-bold text-purple-700 border-4 border-white">
                    {partner.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>

                </div>

                {/* CONTENT */}
                <div className="p-8">

                  <span className="uppercase tracking-[0.25em] text-purple-600 text-xs font-semibold">
                    {partner.role}
                  </span>

                  <h3 className="text-2xl font-bold text-slate-900 mt-3 mb-3">
                    {partner.name}
                  </h3>

                  <p className="font-medium text-slate-500 mb-6">
                    {partner.specialty}
                  </p>

                  <p className="text-slate-600 leading-relaxed mb-8">
                    {partner.bio}
                  </p>

                  <div className="border-t border-slate-100 pt-6 flex justify-between items-center">

                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                        Experience
                      </p>
                      <p className="font-semibold text-slate-900">
                        {partner.experience}
                      </p>
                    </div>

                    <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-xs font-semibold">
                      Active Partner
                    </span>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* EXPERTISE SECTION */}
      <section className="py-28 px-8 bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <span className="uppercase tracking-[0.3em] text-purple-600 text-xs font-semibold">
              Areas Of Expertise
            </span>

            <h2 className="text-5xl font-bold text-slate-900 mt-4">
              Specialized Search Capabilities
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="p-8 border border-slate-200 rounded-2xl">
              <h3 className="font-bold text-xl mb-4">
                Executive Leadership
              </h3>

              <p className="text-slate-600">
                C-suite, VP, and senior leadership placements.
              </p>
            </div>

            <div className="p-8 border border-slate-200 rounded-2xl">
              <h3 className="font-bold text-xl mb-4">
                Technology
              </h3>

              <p className="text-slate-600">
                Engineering, product, and digital transformation leadership.
              </p>
            </div>

            <div className="p-8 border border-slate-200 rounded-2xl">
              <h3 className="font-bold text-xl mb-4">
                Healthcare
              </h3>

              <p className="text-slate-600">
                Clinical, operational, and healthcare administration roles.
              </p>
            </div>

            <div className="p-8 border border-slate-200 rounded-2xl">
              <h3 className="font-bold text-xl mb-4">
                Life Sciences
              </h3>

              <p className="text-slate-600">
                Regulatory, research, quality, and scientific leadership.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-32 px-8 bg-gradient-to-r from-purple-700 to-indigo-700 text-white">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-5xl font-bold mb-6">
            Partner With Our Team
          </h2>

          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10">
            Work with experienced search professionals dedicated to
            identifying exceptional talent and creating meaningful
            organizational impact.
          </p>

          <button className="bg-white text-purple-700 px-10 py-5 rounded-xl font-bold uppercase tracking-[0.25em] hover:scale-105 transition-all">
            Start A Conversation
          </button>

        </div>

      </section>

    </div>
  );
}