import { useNavigate } from 'react-router-dom';
import lumioImage from '../../images/lumio.png';
import rizingImage from '../../images/rizing.png';
import deutschlandImage from '../../images/DB.png';
import rocketEmj from '../../images/rocket-emj.svg';
import NavBar from './NavBar';
import Footer from './Footer';


function ProjectCard({ title, description, imageSrc, rotateClass, imageScale = "scale-100", onClick }) {
  return (
    <div
      onClick={onClick}
      className={`w-[280px] sm:w-[320px] md:w-[380px] lg:w-[450px] xl:w-[500px] h-[240px] sm:h-[280px] md:h-[340px] lg:h-[410px] xl:h-[460px] bg-white rounded-2xl shadow-[3px_3px_40px_15px_rgba(0,0,0,0.06)] p-3 sm:p-4 ${rotateClass} transition-all duration-500 ease-out hover:rotate-3 hover:-translate-y-1 hover:translate-x-1 hover:scale-105 sm:hover:scale-110 hover:shadow-[8px_8px_60px_25px_rgba(0,0,0,0.1)] cursor-pointer group`}
    >
      <div className="h-full rounded-xl overflow-hidden flex items-center justify-center">
        <img src={imageSrc} alt={title} className={`max-w-full max-h-full object-contain ${imageScale} scale-[0.8] transition-all duration-500 ease-out`} />
      </div>
    </div>
  );
}

function ProjectText({ title, description, maxWidth = "max-w-[280px]" }) {
  const renderDescription = () => {
    if (Array.isArray(description)) {
      return description.map((line, index) => (
        <span key={index}>
          {line}
          {index < description.length - 1 && <br />}
        </span>
      ));
    }
    return description;
  };

  return (
    <div className={`text-center ${maxWidth} px-4`}>
      <p className="text-[#1A1A25] text-lg sm:text-xl leading-8 sm:leading-9 mb-2">{title}</p>
      <p className="text-[#8a8a8a] text-sm sm:text-base leading-6 sm:leading-6">
        {renderDescription()}
      </p>
    </div>
  );
}

function Chip({ children }) {
  return (
    <div className="bg-[#efefef] rounded-3xl h-10 sm:h-12 px-3 sm:px-4 inline-flex items-center gap-2 text-[#8a8a8a] text-[14px] sm:text-[16px] lg:text-[18px]">
      {children}
    </div>
  );
}

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-white">
      <NavBar />

      <main className="pb-16">
        {/* Hero */}
        <section className="max-w-4xl mx-auto pt-16 sm:pt-24 lg:pt-40 pb-12 sm:pb-16 lg:pb-24 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-[28px] sm:text-[38px] lg:text-[48px] leading-tight text-[#1A1A25] font-['Helvetica_Neue']">
            <span>Where others see </span>
            <span className="text-[#8a8a8a]">problems</span>
          </h1>
          <h2 className="text-[28px] sm:text-[38px] lg:text-[48px] leading-tight text-[#1A1A25] font-['Helvetica_Neue']">
            <span>I create </span>
            <span className="text-[#8a8a8a]">solutions</span>
            <span className="align-middle inline-flex ml-2 bg-[#fcf4e9] text-[#1A1A25] rounded-xl sm:rounded-2xl size-8 sm:size-10 items-center justify-center">
              <img src={rocketEmj} alt="rocket" className="w-5 h-5 sm:w-7 sm:h-7" />
            </span>
          </h2>
        </section>

        {/* Projects */}
        <section className="w-full py-8 sm:py-16 lg:py-24">
          {/* Mobile/Tablet: Stacked Layout */}
          <div className="lg:hidden flex flex-col items-center gap-12 px-4">
            {/* Deutsche Bahn */}
            <div className="flex flex-col items-center">
              <ProjectCard
                imageSrc={deutschlandImage}
                rotateClass="-rotate-[3deg]"
                imageScale="scale-[1.02]"
                onClick={() => navigate('/db')}
              />
              <div className="mt-8">
                <ProjectText
                  title="Deutsche Bahn"
                  description="Designing a Unified Multi-Item Booking Flow for Deutsche Bahn"
                />
              </div>
            </div>

            {/* Lumio */}
            <div className="flex flex-col items-center">
              <ProjectCard
                imageSrc={lumioImage}
                rotateClass="rotate-[4deg]"
                imageScale="scale-[1.02]"
                onClick={() => navigate('/lumio')}
              />
              <div className="mt-8">
                <ProjectText
                  title="Lumio"
                  description={["Enabling Faster API Onboarding", "Through Custom Chatbot Dashboard"]}
                  maxWidth="max-w-[320px]"
                />
              </div>
            </div>

            {/* Rizing */}
            <div className="flex flex-col items-center">
              <ProjectCard
                imageSrc={rizingImage}
                rotateClass="-rotate-[5deg]"
                onClick={() => navigate('/rizing')}
              />
              <div className="mt-8">
                <ProjectText
                  title="Rizing"
                  description="A Rebrand to Support Growth from 1:1 Coaching to Company Partnerships"
                />
              </div>
            </div>
          </div>

          {/* Desktop: Overlapping Layout */}
          <div className="hidden lg:block relative h-[600px] lg:h-[650px] xl:h-[700px] w-full">
            {/* Deutsche Bahn - Left card with text */}
            <div className="absolute left-0 lg:-left-8 xl:left-0 top-8 z-10">
              <div className="flex flex-col items-center">
                <ProjectCard
                  imageSrc={deutschlandImage}
                  rotateClass="-rotate-[3deg]"
                  imageScale="scale-[1.02]"
                  onClick={() => navigate('/db')}
                />
                <div className="mt-12">
                  <ProjectText
                    title="Deutsche Bahn"
                    description="Designing a unified multi-item booking flow for Deutsche Bahn"
                  />
                </div>
              </div>
            </div>

            {/* Lumio - Center card with text */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 z-20">
              <div className="flex flex-col items-center">
                <ProjectCard
                  imageSrc={lumioImage}
                  rotateClass="rotate-[4deg]"
                  imageScale="scale-[1.02]"
                  onClick={() => navigate('/lumio')}
                />
                <div className="mt-20">
                  <ProjectText
                    title="Lumio"
                    description={["Enabling faster API onboarding", "through custom chatbot dashboard"]}
                    maxWidth="max-w-[320px]"
                  />
                </div>
              </div>
            </div>

            {/* Rizing - Right card with text */}
            <div className="absolute right-0 lg:-right-8 xl:right-0 top-8 z-10">
              <div className="flex flex-col items-center">
                <ProjectCard
                  imageSrc={rizingImage}
                  rotateClass="-rotate-[5deg]"
                  onClick={() => navigate('/rizing')}
                />
                <div className="mt-12">
                  <ProjectText
                    title="Rizing"
                    description="A rebrand to support growth from 1:1 coaching to company partnerships"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About chips */}
        <section className="max-w-4xl mx-auto py-12 sm:py-20 lg:py-28 flex flex-col items-center gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-2 sm:mb-4">
            <p className="text-[#1A1A25] text-[28px] sm:text-[38px] lg:text-[48px] leading-[36px] sm:leading-[46px] lg:leading-[56px] text-center">
              Hi, I'm Sonja, a <span className="text-[#8a8a8a]">Product Designer</span> <br />
              from Berlin.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            <Chip><span>Critical Thinker</span><span>🧠</span></Chip>
            <Chip><span>Dog Person</span><span>🐩</span></Chip>
            <Chip><span>Private Chef</span><span>🧄</span></Chip>
            <Chip><span>Pop-culture Nerd</span><span>🔥</span></Chip>
            <Chip><span>Dry Humorist</span><span>🍸</span></Chip>
            <Chip><span>Master of Arts</span><span>🎓</span></Chip>
            <Chip><span>Detail Lover</span><span>🕸️</span></Chip>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-md mx-auto py-12 sm:py-16 lg:py-24 text-center px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => window.open('mailto:s.semjonowna@gmail.com', '_self')}
            className="mx-auto size-[140px] sm:size-[180px] lg:size-[200px] bg-[#fcf4e9] rounded-[50px] sm:rounded-[60px] flex items-center justify-center hover:bg-[#f5e6d3] transition-colors cursor-pointer group"
          >
            <span className="text-[72px] sm:text-[84px] lg:text-[96px] group-hover:scale-110 transition-transform">✉️</span>
          </button>
          <p className="mt-4 sm:mt-6 text-[18px] sm:text-[20px] text-[#1A1A25]">Send me a note</p>
        </section>

        <Footer />
      </main>
    </div>
  );
}