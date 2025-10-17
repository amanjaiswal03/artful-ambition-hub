import { useNavigate } from 'react-router-dom';
import lumioHero from '../../images/Lumio/lumio_hero.png';
import lumioBrandIdentity from '../../images/Lumio/lumio_brand_identity.png';
import lumioFoundation from '../../images/Lumio/lumio_foundation.png';
import lumioImpact from '../../images/Lumio/lumio_impact.png';
import lumioProblemStatementDecorative from '../../images/Lumio/lumio_problem_statement_decorative.png';
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
    <h2 className={`text-black text-[28px] sm:text-[36px] md:text-[48px] leading-[1.2] md:leading-[57px] font-['Helvetica_Neue'] font-normal ${className}`}>
      {children}
    </h2>
  );
}

function SectionSubtitle({ children, className = "" }) {
  return (
    <h3 className={`text-black text-[18px] sm:text-[20px] md:text-[24px] leading-[1.2] md:leading-[30px] font-['Helvetica_Neue'] font-medium ${className}`}>
      {children}
    </h3>
  );
}

function BodyText({ children, className = "" }) {
  return (
    <p className={`text-[#8a8a8a] text-[14px] sm:text-[16px] md:text-[18px] leading-[1.25] font-['Helvetica_Neue'] font-normal ${className}`}>
      {children}
    </p>
  );
}

function Card({ title, children, className = "" }) {
  return (
    <div className={`bg-white border border-[#bebebe] border-solid rounded-[16px] md:rounded-[24px] ${className}`}>
      <div className="box-border flex flex-col gap-[24px] md:gap-[45px] items-start px-[20px] md:px-[32px] py-[20px] md:py-[24px]">
        <h3 className="text-black text-[18px] sm:text-[20px] md:text-[24px] leading-[1.2] md:leading-[30px] font-['Helvetica_Neue'] font-medium">
          {title}
        </h3>
        <div className="text-[#8a8a8a] text-[14px] sm:text-[16px] md:text-[18px] leading-[1.25] font-['Helvetica_Neue'] font-normal">
          {children}
        </div>
      </div>
    </div>
  );
}

function ImageSection({ src, alt, className = "" }) {
  return (
    <div className={`w-full rounded-2xl overflow-hidden shadow-[3px_3px_40px_15px_rgba(0,0,0,0.06)] ${className}`}>
      <img src={src} alt={alt} className="w-full h-auto object-contain" />
    </div>
  );
}



export default function LumioCaseStudy() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-white">
      <NavBar showBackButton={true} />

      <main className="pb-8 md:pb-16">
        {/* Hero Section - Responsive Design */}
        <div className="relative w-full overflow-hidden bg-gradient-to-b from-white via-white to-transparent" data-name="Hero">
          <div className="relative w-full max-w-[1280px] mx-auto h-auto pb-8 lg:pb-0 lg:h-[1108px] px-4 lg:px-0">
            {/* Background gradient vector - Both mobile and desktop */}
            <div className="absolute h-[800px] lg:h-[1136px] left-1/2 lg:left-0 top-[-50px] lg:top-[-95px] w-full lg:w-[1280px] transform -translate-x-1/2 lg:transform-none opacity-30 lg:opacity-100">
              <img
                src={gradientVector}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top fade/blur effect to mirror bottom transition */}
            <div className="absolute top-0 left-0 right-0 h-[120px] lg:h-[160px] bg-gradient-to-b from-white to-transparent pointer-events-none z-[1]" />

            {/* Title - Responsive - Above image on both mobile and desktop */}
            <div className="relative lg:absolute w-full lg:w-[880px] lg:left-[200px] pt-8 lg:pt-0 lg:top-[103px] px-4 lg:px-0 z-10">
              <p className="font-['Helvetica_Neue'] font-normal text-[28px] lg:text-[48px] leading-[1.2] lg:leading-[60px] text-black text-center">
                Enabling faster API onboarding through a custom chatbot dashboard
              </p>
            </div>

            {/* Macbook mockup - Responsive with fade effect */}
            <div className="relative lg:absolute w-full lg:w-[1009px] h-auto lg:h-[589.24px] lg:left-[135px] mt-8 lg:mt-0 lg:top-[312px] z-10">
              <div className="relative">
                <img
                  src={lumioHero}
                  alt="Lumio Dashboard"
                  className="w-full h-auto rounded-[15px]"
                />
                {/* Bottom fade effect */}
                <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t  rounded-b-[15px] pointer-events-none"></div>
              </div>
            </div>

            {/* Gradient blur overlay for smooth transition */}
            <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0.08)] from-[53.655%] to-white to-[72.933%] h-[800px] lg:h-[1149px] left-0 top-0 w-full pointer-events-none"
              data-name="blur"
            />

            {/* My Role and Tools sections - Responsive Layout */}
            <div className="relative lg:absolute w-full lg:w-auto left-0  top-auto lg:top-[911px] mt-8 lg:mt-0 px-4 sm:px-6 lg:px-[140px] flex flex-col lg:flex-row gap-8 lg:gap-[140px] z-10">
              {/* My Role section */}
              <div className="w-full lg:w-[701px] flex flex-col gap-[24px]">
                <p className="font-['Helvetica_Neue'] font-medium text-[20px] lg:text-[24px] leading-[1.25] text-black">
                  🔥 My Role
                </p>
                <div className="font-['Helvetica_Neue'] font-normal text-[16px] lg:text-[20px] leading-[1.25] text-[#8a8a8a]">
                  <p className="mb-0">I joined a startup to lead the product and brand design for Lumio, </p>
                  <p>an AI chatbot that simplifies API adoption by integrating into documentation and providing real-time answers—streamlining onboarding and reducing support workload for dev and product teams.</p>
                </div>
              </div>

              {/* Tools section */}
              <div className="w-full lg:w-[135px] flex flex-col gap-[24px]">
                <p className="font-['Helvetica_Neue'] font-medium text-[20px] lg:text-[24px] leading-[1.25] text-black">
                  Tools
                </p>
                <div className="flex gap-[16px] items-center">
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
        </div>

        {/* Problem Section */}
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-[140px] py-6 sm:py-8">
          <div className="flex flex-col gap-[24px]">
            <SectionTitle>Problem</SectionTitle>
            <div className="flex flex-col lg:flex-row gap-[24px] items-start w-full lg:w-[1022px]">
              <Card title="A wide range of struggles" className="w-full lg:w-[440px]">
                <p>
                  Depending on who you talk to, open APIs are either too simple, over-engineered, overly academic, too detailed, or too vague. This makes a one-size-fits-all solution nearly impossible.
                </p>
              </Card>
              <Card title="Common UX patterns in API documentations" className="w-full lg:w-[544px]">
                <p>
                  Current API adoption support relies on community forums, customer support, user feedback loops, FAQs, and tutorials. While helpful, these methods are often slow and time-consuming for both users and support teams.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-[140px] py-6 sm:py-8">
          <div className="flex flex-col gap-[24px]">
            <SectionTitle>Solution</SectionTitle>
            <div className="flex flex-col lg:flex-row gap-[24px] items-start h-auto lg:h-[601px]">
              <div className="flex flex-col gap-[24px] w-full lg:w-[476px]">
                <Card title="Designing with constrains" className="w-full lg:w-[440px]">
                  <p>
                    API adoption is highly context-dependent. Unlike products with standardized user journeys, the way users interact with API documentation varies significantly based on both the API itself and its target users. Given that we had a time schedule of 3 months and I was the only designer, I focused on simplicity while building the MVP.
                  </p>
                </Card>
                <Card title="The Vision" className="w-full lg:w-[440px]">
                  <p>
                    A smart and purposeful use of AI: instead of adding to the workload of already busy teams, AI would step in to handle the many questions that arise during the API adoption process. This vision was shaped by the founder's own experience working as a Software Developer and Product Manager.
                  </p>
                </Card>
              </div>
              <div className="bg-black rounded-[24px] px-[24px] py-[16px] w-full lg:w-[497px] h-auto lg:h-[376px] flex flex-col gap-[32px] lg:gap-[56px]">
                <div className="flex items-start justify-between">
                  <p className="text-[#bebebe] text-[18px] sm:text-[20px] font-medium font-['Helvetica_Neue'] leading-[1.25]">Problem Statement</p>
                  <div className="w-[50px] sm:w-[60px] h-[38px] sm:h-[45.68px] flex-shrink-0">
                    <img src={lumioProblemStatementDecorative} alt="Problem Statement" className="w-full h-full object-contain" />
                  </div>
                </div>
                <p className="text-white text-[24px] md:text-[32px] leading-[1.25] font-['Helvetica_Neue'] font-normal w-full md:w-[442px]">
                  Adopting APIs is often inefficient and error-prone, leading to frequent user queries and delays, which negatively impacts both API users and support teams.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Exploring User Needs Section */}
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-[140px] py-6 sm:py-8">
          <div className="flex flex-col gap-[24px] w-full lg:w-[1022px]">
            <SectionSubtitle>Exploring user needs</SectionSubtitle>
            <div className="bg-neutral-50 rounded-[18.68px] p-4 md:p-[32px] relative">
              <div className="mb-[24px]">
                <SectionSubtitle className="mb-[24px]">Imagining a mock scenario</SectionSubtitle>
                <BodyText>
                  A gym handling memberships, class bookings, and discounts needs to integrate a payment API. This scenario highlights how an AI chatbot can simplify onboarding by answering API-related questions in real time and helping define user needs.
                </BodyText>
              </div>
              <ImageSection
                src={lumioUserNeeds}
                alt="User personas and needs analysis"
                className="my-8"
              />
            </div>
          </div>
        </section>

        {/* Laying the Foundation Section */}
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-[140px] py-6 sm:py-8">
          <div className="mb-[32px] w-full lg:w-[404px]">
            <SectionSubtitle className="mb-[24px]">Laying the foundation for the MVP</SectionSubtitle>
            <BodyText>
              By mapping out pain points and user needs,<br /> I narrowed down to focusing on simplification, analytics and real-time assistance for the MVP.
            </BodyText>
          </div>
          <ImageSection
            src={lumioFoundation}
            alt="Lumio Foundation and MVP Strategy"
          />
        </section>

        {/* Market Analysis Section */}
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-[140px] py-6 sm:py-8">
          <div className="mb-[32px] w-full lg:w-[388px]">
            <SectionSubtitle className="mb-[24px]">How Lumio stands out</SectionSubtitle>
            <BodyText>
              To identify Lumio's strengths and opportunities, I conducted a competitive analysis to explore how other tools handle API adoption.<br /> The result: Lumio stands out by combining <br /> real-time AI assistance with an analytics tool that enables data-driven decisions.
            </BodyText>
          </div>
          <ImageSection
            src={lumioMarketAnalysis}
            alt="Market analysis and competitive research"
          />
        </section>

        {/* Wireframes Section */}
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-[140px] py-6 sm:py-8">
          <SectionTitle className="mb-[32px]">Wireframes</SectionTitle>
          <ImageSection
            src={lumioWireframe}
            alt="Lumio wireframes and design iterations"
          />
        </section>

        {/* Outcome Section */}
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-[140px] py-6 sm:py-8">
          <SectionTitle className="mb-[32px]">Outcome</SectionTitle>
          <ImageSection
            src={lumioOutcome}
            alt="Lumio outcome and final dashboard"
          />
        </section>

        {/* Brand Identity Section */}
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-[140px] py-6 sm:py-8">
          <SectionSubtitle className="mb-[32px]">Brand Identity</SectionSubtitle>
          <ImageSection
            src={lumioBrandIdentity}
            alt="Lumio brand identity and visual design system"
          />
        </section>

        {/* Impact & Learnings Section */}
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-[140px] py-6 sm:py-8">
          <SectionSubtitle className="mb-[32px]">Impact & Learnings</SectionSubtitle>
          <div className="flex flex-col lg:flex-row gap-[24px] lg:gap-[36px] w-full lg:w-[919px]">
            <Card title="Improve testing strategy" className="w-full lg:w-[440px] h-auto lg:h-[283px]">
              <p>
                Our experience at a UX Testing event showed that testing with a general audience was not effective for a tech-heavy SaaS product like Lumio. Future testing should focus on developers and product managers who actively work with APIs to generate more relevant insights.
              </p>
            </Card>
            <div className="flex flex-col gap-[24px] lg:gap-[45px] w-full lg:w-auto">
              <Card title="Expand analytics focus" className="w-full lg:w-[440px] h-auto lg:h-[191px]">
                <p>
                  While the MVP's analytics module laid the groundwork, expanding these features could strengthen Lumio's value and differentiation.
                </p>
              </Card>
              <Card title="Adjust competitive edge" className="w-full lg:w-[440px] h-auto lg:h-[237px]">
                <p>
                  Finally, the competitive landscape has shifted significantly in just one year, underscoring the need for ongoing market monitoring to refine Lumio's positioning and ensure its features remain distinctive.
                </p>
              </Card>
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
