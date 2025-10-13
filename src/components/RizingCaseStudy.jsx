import rizingHero from '../../images/Rizing/rizing_hero.png';
import rizingBrandIdentity from '../../images/Rizing/rizing_brand_identity.png';
import rizingLogoDevelopment from '../../images/Rizing/rizing_logo_development.png';
import rizingOutcome0 from '../../images/Rizing/rizing_outcome_0.png';
import rizingOutcome1 from '../../images/Rizing/rizing_outcome_1.png';
import rizingOutcome2 from '../../images/Rizing/rizing_outcome_2.png';
import figmaLogo from '../../images/figma_logo.svg';
import squarespaceLogo from '../../images/squarespace_logo.png';
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
    <div className={`w-full rounded-2xl overflow-hidden  ${className}`}>
      <img src={src} alt={alt} className="w-full h-auto object-contain" />
    </div>
  );
}

function FooterBar() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-row gap-[292px] h-24 items-center justify-start px-14 py-0 w-full"
      data-name="Footer"
    >
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0">
        <div
          className="font-['Helvetica_Neue:Regular',_sans-serif] leading-[0] not-italic text-[#8a8a8a] text-[20px] text-left"
        >
          <p className="block leading-[32px]">© 2025 Sonja Weissberg. All Rights Reserved</p>
        </div>
      </div>
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0">
        <div className="box-border content-stretch flex flex-row gap-1 items-center justify-start p-0">
          <div
            className="font-['Helvetica_Neue:Regular',_sans-serif] leading-[0] not-italic text-[#000000] text-[20px] text-left"
          >
            <p className="block leading-[32px]">Case Studies</p>
          </div>
        </div>
        <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0">
          <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0">
            <div className="font-['Helvetica_Neue:Regular',_sans-serif] leading-[0] not-italic text-[#8a8a8a] text-[20px] text-left">
              <p className="block leading-[32px]">Lumio</p>
            </div>
          </div>
          <div className="font-['Helvetica_Neue:Regular',_sans-serif] leading-[0] not-italic text-[#8a8a8a] text-[20px] text-center">
            <p className="block leading-[32px]">•</p>
          </div>
          <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0">
            <div className="font-['Helvetica_Neue:Regular',_sans-serif] leading-[0] not-italic text-[#8a8a8a] text-[20px] text-left">
              <p className="block leading-[32px]">Rizing</p>
            </div>
          </div>
          <div className="font-['Helvetica_Neue:Regular',_sans-serif] leading-[0] not-italic text-[#8a8a8a] text-[20px] text-center">
            <p className="block leading-[32px]">•</p>
          </div>
          <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0">
            <div className="font-['Helvetica_Neue:Regular',_sans-serif] leading-[0] not-italic text-[#8a8a8a] text-[20px] text-left">
              <p className="block leading-[32px]">Deutsche Bahn</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RizingCaseStudy({ onBackToHome, onNavigateToLumio, onNavigateToDB }) {
  return (
    <div className="min-h-screen w-full bg-white">
      <NavBar
        onBackToHome={onBackToHome}
        onNavigateToLumio={onNavigateToLumio}
        onNavigateToDB={onNavigateToDB}
        onNavigateToRizing={() => { }}
        showBackButton={true}
      />

      <main className="pb-16">
        {/* Hero Section */}
        <div className="relative w-full overflow-hidden" data-name="Hero">
          <div className="relative w-full max-w-[1280px] mx-auto h-[1249px]">
            <div className="absolute h-[1020px] left-1/2 top-[-60px] w-[1280px] transform -translate-x-1/2">
              <div
                className="w-full h-full bg-white"
              ></div>
            </div>

            {/* Headline */}
            <div
              className="absolute font-['Helvetica_Neue:Regular',_sans-serif] leading-[0] left-1/2 not-italic text-[#000000] text-[48px] text-center top-[103px] transform -translate-x-1/2 w-[880px]"
            >
              <p className="block leading-[60px]">A Rebrand to Support Growth from</p>
              <p className="block leading-[60px]">1:1 Coaching to Company Partnerships</p>
            </div>

            {/* Device mock with hero image */}
            <div className="absolute left-1/2 top-[297px] -translate-x-1/2 w-[1000px] max-w-[92vw]">
              <ImageSection src={rizingHero} alt="Rizing hero" />
            </div>

            {/* My Role and Tools moved below hero */}
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
                  I led the redesign and rebranding to support the company’s transition from individual to enterprise
                  coaching. By understanding my client’s vision and translating it into design, I created a tailored
                  design system that reinforced the new B2B brand identity and set the foundation for future growth.
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
              <div className="flex flex-row items-center gap-4 mt-4">
                <div className="bg-[#ffffff] rounded-xl shadow-[1.821px_1.821px_24.719px_9.105px_rgba(0,0,0,0.22)] size-14 flex items-center justify-center">
                  <div className="overflow-clip relative shrink-0 size-10">
                    <img alt="Squarespace" className="block max-w-none size-full" src={squarespaceLogo} />
                  </div>
                </div>
                <div className="font-['Helvetica_Neue:Regular',_sans-serif] text-[#000000] text-[18px]">Squarespace</div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8" >
          <SectionTitle className="mb-8">Problem</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl border border-[#bebebe]">
              <div className="px-8 py-6">
                <h4 className="text-[#1A1A25] text-[24px] font-medium font-['Helvetica_Neue'] mb-4">Shifting the focus</h4>
                <BodyText>
                  The rebranding marked a shift from a female-specific focus to a more gender-neutral approach,
                  reflecting the company’s growing and diverse client base. The founder Irene renamed the company
                  Rizing—a name inspired by the Gen Z slang “rizz” and the word “rising.”
                </BodyText>
              </div>
            </div>
            <div className="bg-white rounded-3xl border border-[#bebebe]">
              <div className="px-8 py-6">
                <h4 className="text-[#1A1A25] text-[24px] font-medium font-['Helvetica_Neue'] mb-4">Scaling the business</h4>
                <BodyText>
                  The new brand identity also lays the foundation for scaling the business beyond 1:1 coaching into
                  working with companies. It speaks directly to tech and business professionals seeking to elevate their
                  careers—from aspiring leaders to established executives.
                </BodyText>
              </div>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <SectionTitle className="mb-8">Solution</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl border border-[#bebebe]">
              <div className="px-8 py-6">
                <h4 className="text-[#1A1A25] text-[24px] font-medium font-['Helvetica_Neue'] mb-4">Aligning core values</h4>
                <BodyText>
                  Through conversations with the founder, I explored core values to better understand the vision. This
                  served as the foundation for designing the logo and developing a new brand identity.
                </BodyText>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Development */}
        <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <SectionTitle className="mb-6">Logo Development</SectionTitle>
          <ImageSection src={rizingLogoDevelopment} alt="Rizing logo development" />
        </section>

        {/* Brand Identity */}
        <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <SectionTitle className="mb-6">Introducing the new brand identity</SectionTitle>
          <BodyText className="mb-8 max-w-3xl">
            I created brand assets to match a trustworthy and dynamic vibe to target tech professionals who value
            authenticity and sustainable growth.
          </BodyText>
          <ImageSection src={rizingBrandIdentity} alt="Rizing brand identity" />
        </section>

        {/* Outcome */}
        <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <SectionTitle className="mb-6">Outcome</SectionTitle>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <ImageSection src={rizingOutcome0} alt="Outcome 0" />
            <div className="hidden lg:block" />
            <div className="relative lg:z-20 z-10">
              <ImageSection src={rizingOutcome1} alt="Outcome 1" />
            </div>
            <div className="relative lg:-ml-12 lg:-mt-6 lg:z-10 z-0">
              <ImageSection src={rizingOutcome2} alt="Outcome 2" />
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
          <p className="mt-6 text-[20px] text-[#1A1A25]"> Back to all projects</p>
        </section>


      </main>
      <Footer onNavigateToLumio={onNavigateToLumio} onNavigateToRizing={() => { }} onNavigateToDB={onNavigateToDB} />
    </div>
  );
}


