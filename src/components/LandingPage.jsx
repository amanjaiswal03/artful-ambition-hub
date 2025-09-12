import { useState } from 'react';
import lumioImage from '../../images/lumio.png';
import rizingImage from '../../images/rizing.png';
import deutschlandImage from '../../images/DB.png';
import rocketEmj from '../../images/rocket-emj.svg';

function NavBar({ onNavigateToLumio, onNavigateToRizing, onNavigateToDB }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      className="box-border content-stretch flex flex-row items-start justify-between px-14 py-8 relative size-full"
      data-name="Navigation bar"
    >
      <div
        className="box-border content-stretch flex flex-row font-['Helvetica_Neue:Medium',_sans-serif] gap-4 items-center justify-start leading-[0] not-italic p-0 relative shrink-0 text-[20px] text-left"
      >
        <div className="relative shrink-0 text-[#8a8a8a] w-[157px]">
          <p className="block leading-[32px]">Sonja Weissberg</p>
        </div>
        <div className="relative shrink-0 text-[#000000] w-[164px]">
          <p className="block leading-[32px]">Product Designer</p>
        </div>
      </div>
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="bg-[#e9e9e9] box-border content-stretch flex flex-row gap-px h-11 items-center justify-center p-0 relative rounded-[13px] shrink-0 w-[181px] hover:bg-[#ddd] transition-colors"
        >
          <div className="font-['Helvetica_Neue:Medium',_sans-serif] h-8 leading-[0] not-italic relative shrink-0 text-[#8e8e8e] text-[18px] text-left w-28">
            <p className="block leading-[32px]">Case Studies</p>
          </div>
          <div className={`relative shrink-0 size-8 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>
            <svg className="block max-w-none size-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="#8e8e8e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>
        
        {isDropdownOpen && (
          <div className="absolute top-full right-0 mt-2 w-[181px] bg-white rounded-xl shadow-[3px_3px_40px_15px_rgba(0,0,0,0.15)] border border-gray-100 py-2 z-50">
            <button
              onClick={onNavigateToDB}
              className="w-full text-left font-['Helvetica_Neue:Regular',_sans-serif] text-[#8a8a8a] text-[16px] px-4 py-2 hover:bg-gray-50 hover:text-black transition-colors"
            >
              Deutsche Bahn
            </button>
            <button
              onClick={onNavigateToLumio}
              className="w-full text-left font-['Helvetica_Neue:Regular',_sans-serif] text-[#8a8a8a] text-[16px] px-4 py-2 hover:bg-gray-50 hover:text-black transition-colors"
            >
              Lumio
            </button>
            <button
              onClick={onNavigateToRizing}
              className="w-full text-left font-['Helvetica_Neue:Regular',_sans-serif] text-[#8a8a8a] text-[16px] px-4 py-2 hover:bg-gray-50 hover:text-black transition-colors"
            >
              Rizing
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ title, description, imageSrc, rotateClass, imageScale = "scale-100", onClick }) {
  return (
    <div 
      onClick={onClick}
      className={`w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px] h-[260px] sm:h-[310px] md:h-[360px] lg:h-[410px] xl:h-[460px] bg-white rounded-2xl shadow-[3px_3px_40px_15px_rgba(0,0,0,0.06)] p-4 ${rotateClass} transition-all duration-500 ease-out hover:rotate-3 hover:-translate-y-1 hover:translate-x-1 hover:scale-110 hover:shadow-[8px_8px_60px_25px_rgba(0,0,0,0.1)] cursor-pointer group`}
    >
      <div className="h-full rounded-xl overflow-hidden flex items-center justify-center">
        <img src={imageSrc} alt={title} className={`max-w-full max-h-full object-contain ${imageScale} scale-[0.8] transition-all duration-500 ease-out group-hover:-rotate-2`} />
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
    <div className={`text-center ${maxWidth}`}>
      <p className="text-[#1A1A25] text-xl leading-8">{title}</p>
      <p className="text-[#8a8a8a] text-base leading-[30px]">
        {renderDescription()}
      </p>
    </div>
  );
}

function Chip({ children }) {
  return (
    <div className="bg-[#efefef] rounded-3xl h-12 px-[16px] inline-flex items-center gap-2 text-[#8a8a8a] text-[18px]">
      {children}
    </div>
  );
}

export default function LandingPage({ onNavigateToLumio, onNavigateToRizing, onNavigateToDB }) {
  return (
    <div className="min-h-screen w-full bg-white">
      <NavBar onNavigateToLumio={onNavigateToLumio} onNavigateToRizing={onNavigateToRizing} onNavigateToDB={onNavigateToDB} />

      <main className="pb-16">
        {/* Hero */}
        <section className="max-w-4xl mx-auto pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-[34px] sm:text-[48px] leading-tight text-[#1A1A25] font-['Helvetica_Neue']">
            <span>Where others see </span>
            <span className="text-[#8a8a8a]">problems</span>
          </h1>
          <h2 className="text-[34px] sm:text-[48px] leading-tight text-[#1A1A25] font-['Helvetica_Neue']">
            <span>I create </span>
            <span className="text-[#8a8a8a]">solutions</span>
            <span className="align-middle inline-flex ml-2 bg-[#fcf4e9] text-[#1A1A25] rounded-2xl size-10 items-center justify-center">
              <img src={rocketEmj} alt="rocket" className="w-7 h-7" />
            </span>
          </h2>
        </section>

        {/* Projects */}
        <section className="w-full py-16 sm:py-20 lg:py-24">
          {/* Project Cards */}
          <div className="relative h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] xl:h-[700px] flex items-center justify-center w-full">
            {/* Deutsche Bahn - Left card with text */}
            <div className="absolute -left-4 sm:-left-8 md:-left-12 lg:-left-16 xl:left-0 top-8 z-10">
              <div className="flex flex-col items-center">
                <ProjectCard
                  imageSrc={deutschlandImage}
                  rotateClass="-rotate-[3deg]"
                  imageScale="scale-[1.02]"
                  onClick={onNavigateToDB}
                />
                <div className="mt-12">
                  <ProjectText
                    title="Deutsche Bahn"
                    description="Designing a Unified Multi-Item Booking Flow for Deutsche Bahn"
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
                  onClick={onNavigateToLumio}
                />
                <div className="mt-20">
                  <ProjectText
                    title="Lumio"
                    description={["Enabling Faster API Onboarding", "Through Custom Chatbot Dashboard"]}
                    maxWidth="max-w-[320px]"
                  />
                </div>
              </div>
            </div>

            {/* Rizing - Right card with text */}
            <div className="absolute -right-4 sm:-right-8 md:-right-12 lg:-right-16 xl:right-0 top-8 z-10">
              <div className="flex flex-col items-center">
                <ProjectCard
                  imageSrc={rizingImage}
                  rotateClass="-rotate-[5deg]"
                  
                  onClick={onNavigateToRizing}
                />
                <div className="mt-12">
                  <ProjectText
                    title="Rizing"
                    description="A Rebrand to Support Growth from 1:1 Coaching to Company Partnerships"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About chips */}
        <section className="max-w-4xl mx-auto py-20 sm:py-24 lg:py-28 flex flex-col items-center gap-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-4">
                         <p className="text-[#1A1A25] text-[48px] leading-[56px] text-center">
              Hi, I'm Sonja, a <span className="text-[#8a8a8a]">Product Designer</span> <br />
              from Berlin.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Chip><span>Critical Thinker</span><span>🧠</span></Chip>
            <Chip><span>Dog Person</span><span>🐩</span></Chip>
            <Chip><span>Private Chef</span><span>🧄</span></Chip>
            <Chip><span>Pop-culture Nerd</span><span>🔥</span></Chip>
        </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Chip><span>Dry Humorist</span><span>🍸</span></Chip>
            <Chip><span>Master of Arts</span><span>🎓</span></Chip>
            <Chip><span>Detail Lover</span><span>🕸️</span></Chip>
      </div>
        </section>

        {/* CTA */}
        <section className="max-w-md mx-auto py-16 sm:py-20 lg:py-24 text-center px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => window.open('mailto:s.semjonowna@gmail.com', '_self')}
            className="mx-auto size-[160px] sm:size-[200px] bg-[#fcf4e9] rounded-[60px] flex items-center justify-center hover:bg-[#f5e6d3] transition-colors cursor-pointer group"
          >
            <span className="text-[96px] group-hover:scale-110 transition-transform">✉️</span>
          </button>
          <p className="mt-6 text-[20px] text-[#1A1A25]">Send me a note</p>
        </section>

        {/* Footer */}
        <footer className="bg-white w-full py-8" data-name="Footer">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="content-stretch flex gap-4 items-center justify-start" data-name="Copyright">
              <div className="font-['Helvetica_Neue:Regular',_sans-serif] leading-[0] not-italic text-[#8a8a8a] text-[20px]">
                <p className="leading-[32px]">© 2025 Sonja Weissberg. All Rights Reserved</p>
              </div>
            </div>
            <div className="content-stretch flex gap-4 items-center justify-start" data-name="Case Studies">
              <div className="content-stretch flex gap-1 items-center justify-start" data-name="Case Studies">
                <div className="font-['Helvetica_Neue:Regular',_sans-serif] leading-[0] not-italic text-[20px] text-black">
                  <p className="leading-[32px]">Case Studies</p>
                </div>
              </div>
              <div className="content-stretch flex gap-3 items-center justify-start">
                <div className="content-stretch flex gap-4 items-center justify-start" data-name="DB">
                  <button 
                    onClick={onNavigateToDB}
                    className="font-['Helvetica_Neue:Regular',_sans-serif] leading-[0] not-italic text-[#8a8a8a] text-[20px] hover:text-black transition-colors cursor-pointer"
                  >
                    <p className="leading-[32px]">Deutsche Bahn</p>
                  </button>
                </div>
                <div className="font-['Helvetica_Neue:Regular',_sans-serif] leading-[0] not-italic text-[#8a8a8a] text-[20px] text-center">
                  <p className="leading-[32px]">•</p>
                </div>
                <div className="content-stretch flex gap-4 items-center justify-start" data-name="Lumio">
                  <button 
                    onClick={onNavigateToLumio}
                    className="font-['Helvetica_Neue:Regular',_sans-serif] leading-[0] not-italic text-[#8a8a8a] text-[20px] hover:text-black transition-colors cursor-pointer"
                  >
                    <p className="leading-[32px]">Lumio</p>
                  </button>
                </div>
                <div className="font-['Helvetica_Neue:Regular',_sans-serif] leading-[0] not-italic text-[#8a8a8a] text-[20px] text-center">
                  <p className="leading-[32px]">•</p>
                </div>
                <div className="content-stretch flex gap-4 items-center justify-start" data-name="Rizing">
                  <button 
                    onClick={onNavigateToRizing}
                    className="font-['Helvetica_Neue:Regular',_sans-serif] leading-[0] not-italic text-[#8a8a8a] text-[20px] hover:text-black transition-colors cursor-pointer"
                  >
                    <p className="leading-[32px]">Rizing</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}