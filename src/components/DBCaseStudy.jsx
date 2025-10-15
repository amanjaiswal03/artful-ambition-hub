import { useNavigate } from 'react-router-dom';
import dbHero from '../../images/DB/db_hero.png';
import dbLogo from '../../images/DB/db_logo.png';
import dbProblem from '../../images/DB/db_problem.png';
import dbPainPoints from '../../images/DB/db_pain_points.png';
import dbProblemStatementDecorative from '../../images/DB/db_problem_statement_decorative.png';
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
    <h2 className={`text-[#1A1A25] text-[32px] sm:text-[36px] md:text-[48px] leading-tight font-['Helvetica_Neue'] font-normal ${className}`}>{children}</h2>
  );
}

function SectionSubtitle({ children, className = "" }) {
  return (
    <h3 className={`text-[#1A1A25] text-[20px] sm:text-[24px] md:text-[28px] leading-[1.2] md:leading-[30px] font-['Helvetica_Neue'] font-medium ${className}`}>{children}</h3>
  );
}

function BodyText({ children, className = "" }) {
  return (
    <p className={`text-[#8a8a8a] text-[18px] leading-[1.25] font-['Helvetica_Neue'] ${className}`}>{children}</p>
  );
}

function ImageSection({ src, alt, className = "" }) {
  return (
    <div className={`w-full rounded-2xl overflow-hidden ${className}`}>
      <img src={src} alt={alt} className="w-full h-auto object-contain" />
    </div>
  );
}



export default function DBCaseStudy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-white">
      <NavBar showBackButton={true} />
      <main className="pb-16">
        {/* Hero */}
        <div className="relative w-full overflow-hidden">
          <div className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-0">
            <div className="text-center pt-8 sm:pt-12 lg:pt-[103px] px-4">
              <h1 className="font-['Helvetica_Neue:Regular',_sans-serif] leading-tight sm:leading-[60px] text-[#000000] text-[28px] sm:text-[36px] lg:text-[48px] max-w-[880px] mx-auto">
                <span>Designing a Unified Multi-Item Booking Flow for </span>
                <span className="inline-flex items-center gap-2 align-middle">
                  <span>Deutsche Bahn</span>
                  <img src={dbLogo} alt="DB" className="h-6 sm:h-8 lg:h-10 w-auto" />
                </span>
              </h1>
            </div>
            <div className="mt-8 sm:mt-12 px-4 max-w-[860px] mx-auto">
              <ImageSection src={dbHero} alt="DB hero" />
            </div>

            {/* My Role and Tools - responsive layout */}
            <div className="px-4 sm:px-6 lg:px-[140px] flex flex-col lg:flex-row gap-8 lg:gap-[279px]">
              <div className="w-full lg:w-[726px]">
                <div className="font-['Helvetica_Neue:Medium',_sans-serif] text-[#000000] text-[20px] sm:text-[24px] mb-4 sm:mb-6">
                  <p className="leading-[1.25]">🔥 My Role</p>
                </div>
                <div className="font-['Helvetica_Neue:Regular',_sans-serif] text-[#8a8a8a] text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.25]">
                  <p className="mb-0">
                    When booking tickets for my summer holiday to Brandenburg with my bike and dog, I encountered an inconsistent flow: prices for the bike and dog tickets were unclear, and it wasn't possible to book all three in one go. I designed an improved flow that makes these costs transparent upfront and enables passengers, bikes, and pets to be booked together in one seamless process.
                  </p>
                </div>
              </div>
              <div className="w-full pb-8 lg:w-[206px]">
                <div className="font-['Helvetica_Neue:Medium',_sans-serif] text-[#000000] text-[20px] sm:text-[24px] mb-4 sm:mb-6">
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
          </div>
        </div>

        {/* Problem */}
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-[140px] py-8 sm:py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[80px] items-start">
            <div className="flex flex-col gap-4 sm:gap-6 w-full lg:w-[440px]">
              <SectionTitle>Problem</SectionTitle>
              <div className="bg-white rounded-3xl border border-[#bebebe]">
                <div className="px-6 sm:px-8 py-5 sm:py-6">
                  <h4 className="text-[#000000] text-[20px] sm:text-[24px] font-medium font-['Helvetica_Neue'] leading-[30px] mb-6 sm:mb-10">It's not always the happy flow</h4>
                  <BodyText>
                    Going on a journey with your dog and bike shouldn't be that complicated — you would think. But when trying to book all three tickets with Deutsche Bahn, it turned into a major struggle. So in this case study, I investigate a more complex booking scenario.
                  </BodyText>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[497px]">
              <div className="bg-black rounded-3xl px-5 sm:px-6 py-4 min-h-[300px] sm:min-h-[350px] lg:h-full flex flex-col gap-4 sm:gap-6">
                <div className="flex items-start justify-between">
                  <p className="text-[#bebebe] text-[18px] sm:text-[20px] font-medium font-['Helvetica_Neue'] leading-[1.25]">Problem Statement</p>
                  <div className="w-[50px] sm:w-[60px] h-[38px] sm:h-[45.68px] flex-shrink-0">
                    <img src={dbProblemStatementDecorative} alt="Problem Statement" className="w-full h-full object-contain" />
                  </div>
                </div>
                <p className="text-white text-[20px] sm:text-[26px] lg:text-[32px] font-['Helvetica_Neue'] leading-[1.15]">
                  For travelers with more complex needs Deutsche Bahn's booking flow is unclear, inconsistent, and fragmented. Key information is hidden behind external links, or missing entirely.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points under Problem */}
        <section className="w-full px-4 sm:px-6 lg:px-0 py-6">
          <div className="max-w-[1280px] mx-auto lg:px-[140px]">
            <SectionSubtitle className="mb-6 sm:mb-8">Pain Points</SectionSubtitle>
            <ImageSection src={dbPainPoints} alt="Pain Points – Deutsche Bahn" />
          </div>
        </section>

        {/* Solution */}
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-[140px] py-8">
          <SectionTitle className="mb-6 sm:mb-8">Solution</SectionTitle>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-11 items-start lg:items-center">
            <div className="flex flex-col gap-6 sm:gap-8 w-full lg:w-[603px]">
              <h3 className="text-[#000000] text-[20px] sm:text-[22px] lg:text-[24px] font-medium font-['Helvetica_Neue'] leading-[1.25]">
                Making complex travel scenarios easy to book
              </h3>
              <div className="flex flex-col gap-[9px]">
                <div className="bg-white rounded-3xl border border-[#bebebe] w-full max-w-[440px]">
                  <div className="px-5 sm:px-[25px] py-5 sm:py-6 flex flex-col gap-3">
                    <div className="text-[#000000] text-[20px] sm:text-[24px] font-medium font-['Helvetica_Neue'] leading-[30px]">
                      ✅
                    </div>
                    <BodyText className="leading-[1.25]">
                      My redesign focused on a straightforward booking experience for bikes and pets, with the possibility to additionally book them or remove them from the booking.
                    </BodyText>
                  </div>
                </div>
                <div className="bg-white rounded-3xl border border-[#bebebe] w-full max-w-[440px]">
                  <div className="px-5 sm:px-[25px] py-5 sm:py-6 flex flex-col gap-3">
                    <div className="text-[#000000] text-[20px] sm:text-[24px] font-medium font-['Helvetica_Neue'] leading-[30px]">
                      ✅
                    </div>
                    <BodyText className="leading-[1.25]">
                      Dogs were treated as a separate entity in the filter system to avoid confusion and provide transparent pricing information.
                    </BodyText>
                  </div>
                </div>
                <div className="bg-white rounded-3xl border border-[#bebebe] w-full max-w-[440px]">
                  <div className="px-5 sm:px-[25px] py-5 sm:py-6 flex flex-col gap-3">
                    <div className="text-[#000000] text-[20px] sm:text-[24px] font-medium font-['Helvetica_Neue'] leading-[30px]">
                      ✅
                    </div>
                    <BodyText className="leading-[1.25]">
                      Filter settings were made accessible from every step of the booking process, not just at the beginning.
                    </BodyText>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[597px] h-auto relative">
              <ImageSection src={dbSolution} alt="DB solution" className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* Mid-fidelity screens */}
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-[140px] py-8">
          <div className="flex flex-col gap-2.5 mb-6 sm:mb-8">
            <SectionSubtitle>
              Mid-fidelity screens
            </SectionSubtitle>
            <BodyText className="leading-[1.25] max-w-[404px]">
              A more user-centered booking experience of managing travel add-ons like bikes and pets.
            </BodyText>
          </div>
          <div className="bg-[#d4dde2] h-auto w-full overflow-hidden relative rounded-[25px] mb-6 sm:mb-8">
            <ImageSection src={dbMidFidelity} alt="DB mid fidelity screens" className="w-full h-auto" />
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-[25px] border border-[#BEBEBE] p-6 sm:p-12 lg:p-20 max-w-[980px] w-full">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-[66px] items-center">
                <div className="flex flex-col justify-center gap-4 sm:gap-6 w-full lg:w-[464px]">
                  <h3 className="text-[#000000] text-[20px] sm:text-[22px] lg:text-[24px] font-medium font-['Helvetica_Neue'] leading-[1.25]">
                    Considerations after testing the flow
                  </h3>
                  <BodyText className="leading-[1.25]">
                    After creating and testing the redesigned booking flow, several questions and usability considerations came up:
                  </BodyText>
                  <div className="flex flex-col gap-4 sm:gap-6 w-full max-w-[434px]">
                    <div className="flex flex-row gap-3 items-start">
                      <div className="text-[#000000] text-[24px] sm:text-[24px] leading-[32px] w-6 sm:w-8 h-6 sm:h-8 flex-shrink-0">
                        ❌
                      </div>
                      <BodyText className="leading-[1.25] flex-1">
                        Why keep an error state if I could just fix the issue for the user directly?
                      </BodyText>
                    </div>
                    <div className="flex flex-row gap-3 items-start">
                      <div className="text-[#000000] text-[24px] sm:text-[24px] leading-[32px] w-6 sm:w-8 h-6 sm:h-8 flex-shrink-0">
                        ❌
                      </div>
                      <BodyText className="leading-[1.25] flex-1">
                        Users might not understand the logic of removing tickets from their itinerary if they still appear visually below.
                      </BodyText>
                    </div>
                    <div className="flex flex-row gap-3 items-start">
                      <div className="text-[#000000] text-[24px] sm:text-[24px] leading-[32px] w-6 sm:w-8 h-6 sm:h-8 flex-shrink-0">
                        ❌
                      </div>
                      <BodyText className="leading-[1.25] flex-1">
                        Is the information on ticket pricing actually presented in a clear way from the start?
                      </BodyText>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-[290px]">
                  <ImageSection src={dbMidFidelity2} alt="DB mid fidelity 2" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outcome */}
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-[140px] py-8">
          <SectionTitle className="mb-6 sm:mb-8">Outcome</SectionTitle>
          <ImageSection src={dbOutcome} alt="DB outcome" />
        </section>

        {/* Impact & Learnings */}
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-[140px] py-8">
          <div className="mb-6 sm:mb-8">
            <SectionSubtitle>
              Impact & Learnings
            </SectionSubtitle>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-start">
            <div className="bg-white rounded-3xl border border-[#bebebe] w-full lg:w-[411px]">
              <div className="px-6 sm:px-8 py-5 sm:py-6 flex flex-col gap-8 sm:gap-[45px]">
                <h3 className="text-[#000000] text-[20px] sm:text-[24px] font-medium font-['Helvetica_Neue'] leading-[30px]">
                  Small Issue – Big Impact
                </h3>
                <div className="text-[#8a8a8a] text-[16px] sm:text-[18px] font-['Helvetica_Neue'] leading-[1.25] space-y-4">
                  <p>
                    This project began as a self-imposed challenge after my own frustrating experience with Deutsche Bahn's booking system. At times, I questioned whether the problem was "big enough" to focus on. But I was reminded that even small UX issues can have an outsized impact — shaping how users perceive a brand and influencing their decision to return. While travelers booking with both a bike and a dog may be a minority, the principle applies on a larger scale: if one flow is confusing or incomplete, many other users could be encountering similar friction every day. Designing for these cases not only improves inclusivity but also strengthens the overall customer experience.
                  </p>
                  <p>Fortunately, we had a wonderful holiday after all.</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[480px] h-auto lg:h-[640px] rounded-[20px] sm:rounded-[30.545px] overflow-hidden">
              <ImageSection src={dbImpact} alt="DB impact" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Back to Projects CTA */}
        <section className="max-w-md mx-auto py-16 sm:py-20 lg:py-24 text-center">
          <button
            onClick={() => navigate('/')}
            className="mx-auto size-[160px] sm:size-[200px] bg-[#fcf4e9] rounded-[60px] flex items-center justify-center hover:bg-[#f5e6d3] transition-colors cursor-pointer group"
          >
            <span className="text-[96px] group-hover:scale-110 transition-transform">👈</span>
          </button>
          <p className="mt-6 text-[20px] text-[#1A1A25]">Back to all projects</p>
        </section>


      </main>
      <Footer />
    </div>
  );
}


