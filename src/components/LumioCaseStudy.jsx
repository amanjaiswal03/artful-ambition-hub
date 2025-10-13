import lumioHero from '../../images/Lumio/lumio_hero.png';
import lumioBrandIdentity from '../../images/Lumio/lumio_brand_identity.png';
import lumioFoundation from '../../images/Lumio/lumio_foundation.png';
import lumioImpact from '../../images/Lumio/lumio_impact.png';
import lumioMarketAnalysis from '../../images/Lumio/lumio_market_analysis.png';
import lumioOutcome from '../../images/Lumio/lumio_outcome.png';
import lumioUserNeeds from '../../images/Lumio/lumio_user_needs.png';
import lumioWireframe from '../../images/Lumio/lumio_wireframe.png';
import gradientVector from '../../images/Lumio/gradient_vector.png';
import figmaLogo from '../../images/figma_logo.svg';
import NavBar from './NavBar';
import Footer from './Footer';


function SectionTitle({ children, className = "" }) {
  return (
    <h2 className={`text-[#1A1A25] text-[32px] sm:text-[36px] leading-tight font-['Helvetica_Neue'] font-medium ${className}`}>
      {children}
    </h2>
  );
}

function SectionSubtitle({ children, className = "" }) {
  return (
    <h3 className={`text-[#1A1A25] text-[24px] sm:text-[28px] leading-tight font-['Helvetica_Neue'] font-medium ${className}`}>
      {children}
    </h3>
  );
}

function BodyText({ children, className = "" }) {
  return (
    <p className={`text-[#8a8a8a] text-[18px] leading-[28px] font-['Helvetica_Neue'] ${className}`}>
      {children}
    </p>
  );
}

function ImageSection({ src, alt, className = "" }) {
  return (
    <div className={`w-full rounded-2xl overflow-hidden shadow-[3px_3px_40px_15px_rgba(0,0,0,0.06)] ${className}`}>
      <img src={src} alt={alt} className="w-full h-auto object-contain" />
    </div>
  );
}



export default function LumioCaseStudy({ onBackToHome, onNavigateToRizing, onNavigateToDB }) {
  return (
    <div className="min-h-screen w-full bg-white">
      <NavBar
        onBackToHome={onBackToHome}
        onNavigateToRizing={onNavigateToRizing}
        onNavigateToDB={onNavigateToDB}
        onNavigateToLumio={() => { }}
        showBackButton={true}
      />

      <main className="pb-16">
        {/* Hero Section - Exact Figma Design */}
        <div className="relative w-full overflow-hidden" data-name="Hero">
          <div className="relative w-full max-w-[1280px] mx-auto h-[1100px]">
            <div className="absolute h-[1136px] left-1/2 top-[-95px] w-[1280px] transform -translate-x-1/2">
              <div
                className="w-full h-full bg-center bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `url('${gradientVector}')`
                }}
              ></div>
            </div>
            <div
              className="absolute h-[589.24px] left-1/2 overflow-clip top-[312px] w-[1009px] transform -translate-x-1/2"
              data-name="Macbook Pro 16"
            >

              <div
                className="absolute bg-center bg-cover bg-no-repeat inset-[3.01%_9.22%_10.53%_9.86%] rounded-[15px]"
                data-name="Screen mockup (REPLACE FILL)"
                style={{ backgroundImage: `url('${lumioHero}')` }}
              />
            </div>
            <div
              className="absolute font-['Helvetica_Neue:Regular',_sans-serif] leading-[0] left-1/2 not-italic text-[#000000] text-[48px] text-center top-[103px] transform -translate-x-1/2 w-[880px]"
            >
              <p className="block leading-[60px]">Enabling Faster API Onboarding Through a Custom Chatbot Dashboard</p>
            </div>
            <div
              className="absolute bg-gradient-to-b from-[#ffffff14] from-[53.655%] h-[1149px] left-1/2 to-[#ffffff] to-[72.933%] top-0 w-[1280px] transform -translate-x-1/2"
              data-name="blur"
            />
            {/* My Role and Tools sections positioned as in original Figma but centered */}
            <div className="absolute left-1/2 top-[906px] transform -translate-x-1/2 w-full max-w-[1140px] flex justify-between">
              <div
                className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] not-italic p-0 text-left w-[701px]"
              >
                <div
                  className="font-['Helvetica_Neue:Medium',_sans-serif] relative shrink-0 text-[#000000] text-[24px]"
                >
                  <p className="block leading-[1.25]">🔥 My Role</p>
                </div>
                <div
                  className="font-['Helvetica_Neue:Regular',_sans-serif] leading-[1.25] relative shrink-0 text-[#8a8a8a] text-[20px] w-full"
                >
                  <p className="block mb-0">{`I joined a startup to lead the product and brand design for Lumio, `}</p>
                  <p className="block">
                    an AI chatbot that simplifies API adoption by integrating into documentation and providing real-time
                    answers—streamlining onboarding and reducing support workload for dev and product teams.
                  </p>
                </div>
              </div>
              <div
                className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 w-[135px]"
                data-name="Tools"
              >
                <div
                  className="font-['Helvetica_Neue:Medium',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#000000] text-[24px] text-left"
                  style={{ width: "min-content" }}
                >
                  <p className="block leading-[1.25]">Tools</p>
                </div>
                <div
                  className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0"
                >
                  <div
                    className="bg-[#ffffff] box-border content-stretch flex flex-row gap-[7px] items-center justify-center p-0 relative rounded-xl shadow-[1.821px_1.821px_24.719px_9.105px_rgba(0,0,0,0.22)] shrink-0 size-14"
                  >
                    <div
                      className="overflow-clip relative shrink-0 size-10"
                      data-name="Figma Logo Full Color"
                    >
                      <div
                        className="absolute inset-[11.56%_24.38%_11.56%_24.37%]"
                        data-name="Logo"
                      >
                        <img alt="" className="block max-w-none size-full" src={figmaLogo} />
                      </div>
                    </div>
                  </div>
                  <div
                    className="font-['Helvetica_Neue:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#000000] text-[18px] text-left w-[55px]"
                  >
                    <p className="block leading-[1.25]">Figma</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Challenge & Problem Statement */}
        <section className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8" style={{ marginTop: '200px' }}>
          <SectionTitle className="mb-8">The Challenge</SectionTitle>
          <BodyText className="mb-8 text-[20px] leading-[32px]">
            API onboarding processes were taking developers weeks to complete, with complex documentation
            and scattered resources creating friction in the developer experience. Our goal was to create
            an intuitive solution that could reduce onboarding time from weeks to hours.
          </BodyText>

          <ImageSection
            src={lumioFoundation}
            alt="Lumio Foundation - Problem analysis and research"
            className="my-12"
          />
        </section>

        {/* User Research & Market Analysis */}
        <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <SectionTitle className="mb-8 text-center">Understanding Our Users</SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <SectionSubtitle className="mb-6">User Needs Analysis</SectionSubtitle>
              <BodyText className="mb-8">
                Through extensive user interviews and surveys, we identified key pain points in the current
                API onboarding process. Developers needed immediate answers, contextual guidance, and
                hands-on examples to successfully integrate our APIs.
              </BodyText>
              <ImageSection
                src={lumioUserNeeds}
                alt="User needs analysis and research findings"
              />
            </div>

            <div>
              <SectionSubtitle className="mb-6">Market Analysis</SectionSubtitle>
              <BodyText className="mb-8">
                Competitive analysis revealed that most API providers still relied on traditional documentation.
                This presented an opportunity to differentiate through an AI-powered, conversational approach
                to developer onboarding.
              </BodyText>
              <ImageSection
                src={lumioMarketAnalysis}
                alt="Market analysis and competitive research"
              />
            </div>
          </div>
        </section>

        {/* Design Process & Wireframes */}
        <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <SectionTitle className="mb-8 text-center">Design Process</SectionTitle>
          <BodyText className="mb-12 text-center text-[20px] leading-[32px] max-w-3xl mx-auto">
            Starting with low-fidelity wireframes, we iterated through multiple design concepts,
            focusing on creating an intuitive conversational interface that could handle complex
            technical queries while maintaining simplicity.
          </BodyText>

          <ImageSection
            src={lumioWireframe}
            alt="Lumio wireframes and design iterations"
            className="mb-16"
          />
        </section>

        {/* Brand Identity & Visual Design */}
        <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <SectionTitle className="mb-8 text-center">Visual Identity</SectionTitle>
          <BodyText className="mb-12 text-center text-[20px] leading-[32px] max-w-3xl mx-auto">
            The visual design needed to feel approachable yet professional, with a color palette and
            typography that would appeal to developers while maintaining trust and credibility.
          </BodyText>

          <ImageSection
            src={lumioBrandIdentity}
            alt="Lumio brand identity and visual design system"
            className="mb-16"
          />
        </section>

        {/* Results & Impact */}
        <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <SectionTitle className="mb-8 text-center">Impact & Results</SectionTitle>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <ImageSection
                src={lumioImpact}
                alt="Lumio impact metrics and success indicators"
              />
            </div>

            <div className="flex flex-col justify-center">
              <SectionSubtitle className="mb-6">Key Metrics</SectionSubtitle>
              <div className="space-y-6">
                <div>
                  <h4 className="text-[#1A1A25] text-[24px] font-medium font-['Helvetica_Neue'] mb-2">85%</h4>
                  <BodyText>Reduction in onboarding time</BodyText>
                </div>
                <div>
                  <h4 className="text-[#1A1A25] text-[24px] font-medium font-['Helvetica_Neue'] mb-2">92%</h4>
                  <BodyText>User satisfaction score</BodyText>
                </div>
                <div>
                  <h4 className="text-[#1A1A25] text-[24px] font-medium font-['Helvetica_Neue'] mb-2">60%</h4>
                  <BodyText>Increase in API adoption</BodyText>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Outcome */}
        <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <SectionTitle className="mb-8 text-center">Final Outcome</SectionTitle>
          <BodyText className="mb-12 text-center text-[20px] leading-[32px] max-w-3xl mx-auto">
            The final solution successfully transformed the API onboarding experience, creating a
            seamless bridge between complex technical documentation and user-friendly interaction.
          </BodyText>

          <ImageSection
            src={lumioOutcome}
            alt="Lumio final outcome and solution overview"
            className="mb-16"
          />
        </section>

        {/* Key Learnings */}
        <section className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <SectionTitle className="mb-8 text-center">Key Learnings</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50/80 rounded-2xl p-8">
              <h4 className="text-[#1A1A25] text-[20px] font-medium font-['Helvetica_Neue'] mb-4">
                Conversational Design Principles
              </h4>
              <BodyText>
                Designing for AI-powered conversations requires careful consideration of context,
                error handling, and progressive disclosure to maintain user engagement.
              </BodyText>
            </div>
            <div className="bg-gray-50/80 rounded-2xl p-8">
              <h4 className="text-[#1A1A25] text-[20px] font-medium font-['Helvetica_Neue'] mb-4">
                Developer-Centric Approach
              </h4>
              <BodyText>
                Understanding the developer mindset and workflow was crucial for creating a tool
                that truly integrated into their existing processes.
              </BodyText>
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
      <Footer onNavigateToLumio={() => { }} onNavigateToRizing={onNavigateToRizing} onNavigateToDB={onNavigateToDB} />
    </div>
  );
}
