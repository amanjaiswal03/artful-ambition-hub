import dbHero from '../../images/DB/db_hero.png';
import dbProblem from '../../images/DB/db_problem.png';
import dbPainPoints from '../../images/DB/db_pain_points.png';
import dbSolution from '../../images/DB/db_solution.png';
import dbMidFidelity from '../../images/DB/db_mid_fidelity_screens.png';
import dbMidFidelity2 from '../../images/DB/db_mid_fidelity_2.png';
import dbImpact from '../../images/DB/db_impact.png';
import dbOutcome from '../../images/DB/db_outcome.png';
import figmaLogo from '../../images/figma_logo.svg';
import NavBar from './NavBar';
import Footer from './Footer';


function SectionTitle({ children, className = "" }) {
  return (
    <h2 className={`text-[#1A1A25] text-[32px] sm:text-[36px] leading-tight font-['Helvetica_Neue'] font-medium ${className}`}>{children}</h2>
  );
}

function BodyText({ children, className = "" }) {
  return (
    <p className={`text-[#8a8a8a] text-[18px] leading-[28px] font-['Helvetica_Neue'] ${className}`}>{children}</p>
  );
}

function ImageSection({ src, alt, className = "" }) {
  return (
    <div className={`w-full rounded-2xl overflow-hidden ${className}`}>
      <img src={src} alt={alt} className="w-full h-auto object-contain" />
    </div>
  );
}

function FooterBar() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-row gap-[292px] h-24 items-center justify-start px-14 py-0 w-full">
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0">
        <div className="font-['Helvetica_Neue:Regular',_sans-serif] leading-[0] not-italic text-[#8a8a8a] text-[20px] text-left">
          <p className="block leading-[32px]">© 2025 Sonja Weissberg. All Rights Reserved</p>
        </div>
      </div>
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0">
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0">
          <div className="font-['Helvetica_Neue:Regular',_sans-serif] leading-[0] not-italic text-[#000000] text-[20px] text-left">
            <p className="block leading-[32px]">Case Studies</p>
          </div>
        </div>
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0">
          <div className="font-['Helvetica_Neue:Regular',_sans-serif] leading-[0] not-italic text-[#8a8a8a] text-[20px]">Lumio</div>
          <div className="font-['Helvetica_Neue:Regular',_sans-serif] leading-[0] not-italic text-[#8a8a8a] text-[20px]">•</div>
          <div className="font-['Helvetica_Neue:Regular',_sans-serif] leading-[0] not-italic text-[#8a8a8a] text-[20px]">Rizing</div>
          <div className="font-['Helvetica_Neue:Regular',_sans-serif] leading-[0] not-italic text-[#8a8a8a] text-[20px]">•</div>
          <div className="font-['Helvetica_Neue:Regular',_sans-serif] leading-[0] not-italic text-[#8a8a8a] text-[20px]">Deutsche Bahn</div>
        </div>
      </div>
    </div>
  );
}

export default function DBCaseStudy({ onBackToHome, onNavigateToLumio, onNavigateToRizing }) {
  return (
    <div className="min-h-screen w-full bg-white">
      <NavBar
        onBackToHome={onBackToHome}
        onNavigateToLumio={onNavigateToLumio}
        onNavigateToRizing={onNavigateToRizing}
        onNavigateToDB={() => { }}
        showBackButton={true}
      />
      <main className="pb-16">
        {/* Hero */}
        <div className="relative w-full overflow-hidden">
          <div className="relative w-full max-w-[1280px] mx-auto h-[1249px]">
            <div className="absolute font-['Helvetica_Neue:Regular',_sans-serif] leading-[0] left-1/2 not-italic text-[#000000] text-[48px] text-center top-[103px] transform -translate-x-1/2 w-[880px]">
              <p className="block leading-[60px]">Designing a Unified Multi-Item Booking Flow</p>
              <p className="block leading-[60px]">for Deutsche Bahn</p>
            </div>
            <div className="absolute left-1/2 top-[297px] -translate-x-1/2 w-[1000px] max-w-[92vw]">
              <ImageSection src={dbHero} alt="DB hero" />
            </div>
          </div>
        </div>

        {/* My Role and Tools - below hero image */}
        <section className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1140px] mx-auto px-6 flex flex-col md:flex-row md:justify-between gap-12">
            <div className="md:w-[701px]">
              <div className="font-['Helvetica_Neue:Medium',_sans-serif] text-[#000000] text-[24px] mb-6">
                <p className="leading-[1.25]">🔥 My Role</p>
              </div>
              <div className="font-['Helvetica_Neue:Regular',_sans-serif] text-[#8a8a8a] text-[20px] leading-[1.25]">
                <p className="mb-0">
                  When booking tickets for my summer holiday to Brandenburg with my bike and dog, I encountered an inconsistent flow: prices for the bike and dog tickets were unclear, and it wasn’t possible to book all three in one go. I designed an improved flow that makes these costs transparent upfront and enables passengers, bikes, and pets to be booked together in one seamless process.
                </p>
              </div>
            </div>
            <div className="md:w-[206px]" data-name="Tools">
              <div className="font-['Helvetica_Neue:Medium',_sans-serif] text-[#000000] text-[24px] mb-6">
                <p className="leading-[1.25]">Tools</p>
              </div>
              <div className="flex flex-row items-center gap-4">
                <div className="bg-[#ffffff] rounded-xl shadow-[1.821px_1.821px_24.719px_9.105px_rgba(0,0,0,0.22)] size-14 flex items-center justify-center">
                  <div className="overflow-clip relative shrink-0 size-10">
                    <img alt="Figma" className="block max-w-none size-full" src={figmaLogo} />
                  </div>
                </div>
                <div className="font-['Helvetica_Neue:Regular',_sans-serif] text-[#000000] text-[18px]">Figma</div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <SectionTitle className="mb-6">Problem</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

            <div>
              <div className="bg-white rounded-3xl border border-[#bebebe]">
                <div className="px-8 py-6">
                  <h4 className="text-[#1A1A25] text-[24px] font-medium font-['Helvetica_Neue'] mb-4">It’s not always the happy flow</h4>
                  <BodyText>
                    Going on a journey with your dog and bike shouldn’t be that complicated — you would think. But when trying to book all three tickets with Deutsche Bahn, it turned into a major struggle. So in this case study, I investigate a more complex booking scenario.
                  </BodyText>
                </div>
              </div>
            </div>
            <div>
              <ImageSection src={dbProblem} alt="Problem – Deutsche Bahn" />
            </div>
          </div>
        </section>

        {/* Pain Points under Problem */}
        <section className="max-w-6xl mx-auto pt-0 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="mt-0">
            <h3 className="text-[#1A1A25] text-[24px] leading-tight font-['Helvetica_Neue'] font-medium mb-6">Pain Points</h3>
            <ImageSection src={dbPainPoints} alt="Pain Points – Deutsche Bahn" />
          </div>
        </section>

        {/* Solution */}
        <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <SectionTitle className="mb-8">Solution</SectionTitle>
          <div className="flex flex-col lg:flex-row gap-11 items-start">
            <div className="flex flex-col gap-8 w-full lg:w-[603px]">
              <h3 className="text-[#000000] text-[24px] font-medium font-['Helvetica_Neue'] leading-[1.25] px-0">
                Making complex travel scenarios easy to book
              </h3>
              <div className="flex flex-col gap-[9px]">
                <div className="bg-white rounded-3xl border border-[#bebebe] w-full max-w-[440px]">
                  <div className="px-[25px] py-6 flex flex-col gap-3">
                    <div className="text-[#000000] text-[24px] font-medium font-['Helvetica_Neue'] leading-[30px]">
                      ✅
                    </div>
                    <BodyText className="leading-[1.25]">
                      My redesign focused on a straightforward booking experience for bikes and pets, with the possibility to additionally book them or remove them from the booking.
                    </BodyText>
                  </div>
                </div>
                <div className="bg-white rounded-3xl border border-[#bebebe] w-full max-w-[440px]">
                  <div className="px-[25px] py-6 flex flex-col gap-3">
                    <div className="text-[#000000] text-[24px] font-medium font-['Helvetica_Neue'] leading-[30px]">
                      ✅
                    </div>
                    <BodyText className="leading-[1.25]">
                      Dogs were treated as a separate entity in the filter system to avoid confusion and provide transparent pricing information.
                    </BodyText>
                  </div>
                </div>
                <div className="bg-white rounded-3xl border border-[#bebebe] w-full max-w-[440px]">
                  <div className="px-[25px] py-6 flex flex-col gap-3">
                    <div className="text-[#000000] text-[24px] font-medium font-['Helvetica_Neue'] leading-[30px]">
                      ✅
                    </div>
                    <BodyText className="leading-[1.25]">
                      Filter settings were made accessible from every step of the booking process, not just at the beginning.
                    </BodyText>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <ImageSection src={dbSolution} alt="DB solution" />
            </div>
          </div>
        </section>

        {/* Mid-fidelity screens */}
        <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-2.5 mb-8">
            <h3 className="text-[#000000] text-[24px] font-medium font-['Helvetica_Neue'] leading-[1.25]">
              Mid-fidelity screens
            </h3>
            <BodyText className="leading-[1.25] max-w-[404px]">
              A more user-centered booking experience of managing travel add-ons like bikes and pets.
            </BodyText>
          </div>
          <div className="bg-[#d4dde2] h-[760px] w-full overflow-hidden relative rounded-lg">
            <ImageSection src={dbMidFidelity} alt="DB mid fidelity screens" className="absolute inset-0 w-full h-full" />
          </div>
          <div className="mt-8">
            <div className="flex flex-col lg:flex-row gap-[66px] items-start">
              <div className="flex flex-col gap-6 w-full lg:w-[464px]">
                <h3 className="text-[#000000] text-[24px] font-medium font-['Helvetica_Neue'] leading-[1.25]">
                  Considerations after testing the flow
                </h3>
                <BodyText className="leading-[1.25]">
                  After creating and testing the redesigned booking flow, several questions and usability considerations came up:
                </BodyText>
                <div className="flex flex-col gap-6 w-full max-w-[434px]">
                  <div className="flex flex-row gap-3 items-start">
                    <div className="text-[#000000] text-[24px] leading-[1.25] w-8 h-8 flex-shrink-0">
                      ❌
                    </div>
                    <BodyText className="leading-[1.25] w-[382px]">
                      Why keep an error state if I could just fix the issue for the user directly?
                    </BodyText>
                  </div>
                  <div className="flex flex-row gap-3 items-start">
                    <div className="text-[#000000] text-[24px] leading-[1.25] w-8 h-8 flex-shrink-0">
                      ❌
                    </div>
                    <BodyText className="leading-[1.25] w-[382px]">
                      Users might not understand the logic of removing tickets from their itinerary if they still appear visually below.
                    </BodyText>
                  </div>
                  <div className="flex flex-row gap-3 items-start">
                    <div className="text-[#000000] text-[24px] leading-[1.25] w-8 h-8 flex-shrink-0">
                      ❌
                    </div>
                    <BodyText className="leading-[1.25] w-[382px]">
                      Is the information on ticket pricing actually presented in a clear way from the start?
                    </BodyText>
                  </div>
                </div>
              </div>
              <div className="flex-1 max-w-[290px]">
                <ImageSection src={dbMidFidelity2} alt="DB mid fidelity 2" />
              </div>
            </div>
          </div>
        </section>

        {/* Outcome */}
        <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <SectionTitle className="mb-8">Outcome</SectionTitle>
          <ImageSection src={dbOutcome} alt="DB outcome" />
        </section>

        {/* Impact & Learnings */}
        <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-[#000000] text-[24px] font-medium font-['Helvetica_Neue'] leading-[1.25] text-left">
              Impact & Learnings
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="bg-white rounded-3xl border border-[#bebebe] w-full lg:w-[411px]">
              <div className="px-8 py-6 flex flex-col gap-[45px]">
                <h3 className="text-[#000000] text-[24px] font-medium font-['Helvetica_Neue'] leading-[30px]">
                  Small Issue – Big Impact
                </h3>
                <div className="text-[#8a8a8a] text-[18px] font-['Helvetica_Neue'] leading-[1.25] space-y-4">
                  <p>
                    This project began as a self-imposed challenge after my own frustrating experience with Deutsche Bahn's booking system. At times, I questioned whether the problem was "big enough" to focus on. But I was reminded that even small UX issues can have an outsized impact — shaping how users perceive a brand and influencing their decision to return. While travelers booking with both a bike and a dog may be a minority, the principle applies on a larger scale: if one flow is confusing or incomplete, many other users could be encountering similar friction every day. Designing for these cases not only improves inclusivity but also strengthens the overall customer experience.
                  </p>
                  <p>Fortunately, we had a wonderful holiday after all.</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[480px] h-[640px] rounded-[30.545px] overflow-hidden">
              <ImageSection src={dbImpact} alt="DB impact" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Back to Projects CTA */}
        <section className="max-w-md mx-auto py-16 sm:py-20 lg:py-24 text-center">
          <button
            onClick={onBackToHome}
            className="mx-auto size-[160px] sm:size-[200px] bg-[#fcf4e9] rounded-[60px] flex items-center justify-center hover:bg-[#f5e6d3] transition-colors cursor-pointer group"
          >
            <span className="text-[96px] group-hover:scale-110 transition-transform">👈</span>
          </button>
          <p className="mt-6 text-[20px] text-[#1A1A25]">Back to all projects</p>
        </section>


      </main>
      <Footer onNavigateToLumio={onNavigateToLumio} onNavigateToRizing={onNavigateToRizing} onNavigateToDB={() => { }} />
    </div>
  );
}


