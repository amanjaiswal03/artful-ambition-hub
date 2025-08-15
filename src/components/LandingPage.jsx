import lumioImage from '../../images/lumio.png';
import rizingImage from '../../images/rizing.png';
import deutschlandImage from '../../images/DB.png';
import rocketEmj from '../../images/rocket-emj.svg';

function NavBar() {
  return (
    <header className="w-full px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center gap-4">
          <p className="text-[#8a8a8a] text-[20px] sm:text-lg leading-none font-medium font-['Helvetica_Neue']">Sonja Weissberg</p>
          <p className="text-[#1A1A25] text-[20px] sm:text-lg leading-none font-medium font-['Helvetica_Neue']">Product Designer</p>
        </div>
        <nav>
                      <div className="hidden sm:flex items-center bg-black/5 rounded-xl h-11 px-4 gap-1">
              <span className="text-[#8a8a8a] text-[18px] leading-[32px] font-medium font-['Helvetica_Neue']">Case Studies</span>
              <div className="w-8 h-8 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="#8a8a8a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
        </nav>
        </div>
    </header>
  );
}

function ProjectCard({ title, description, imageSrc, rotateClass, imageScale = "scale-100" }) {
  return (
    <div className={`w-[280px] sm:w-[340px] bg-gray-50/80 rounded-2xl shadow-[3px_3px_40px_15px_rgba(0,0,0,0.06)] p-4 ${rotateClass} transition-all duration-500 ease-out hover:rotate-3 hover:-translate-y-1 hover:translate-x-1 hover:scale-110 hover:shadow-[8px_8px_60px_25px_rgba(0,0,0,0.1)] cursor-pointer group`}>
      <div className="aspect-[16/10] rounded-xl overflow-hidden bg-gray-50/80 flex items-center justify-center">
        <img src={imageSrc} alt={title} className={`max-w-full max-h-full object-contain ${imageScale} transition-all duration-500 ease-out group-hover:-rotate-2 group-hover:scale-105`} />
      </div>
    </div>
  );
}

function ProjectText({ title, description }) {
  return (
    <div className="text-center max-w-[280px]">
      <p className="text-[#1A1A25] text-xl leading-8">{title}</p>
      <p className="text-[#8a8a8a] text-base leading-[30px]">{description}</p>
        </div>
  );
}

function Chip({ children }) {
  return (
    <div className="bg-[#efefef] rounded-3xl h-12 px-4 inline-flex items-center text-[#8a8a8a] text-[18px]">
      {children}
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <NavBar />

      <main className="px-4 sm:px-6 lg:px-8 pb-16">
        {/* Hero */}
        <section className="max-w-4xl mx-auto pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 text-center">
          <h1 className="text-[34px] sm:text-[44px] leading-tight text-[#1A1A25] font-['Helvetica_Neue']">
            <span>Where others see </span>
            <span className="text-[#8a8a8a]">problems</span>
          </h1>
          <h2 className="text-[34px] sm:text-[44px] leading-tight text-[#1A1A25] font-['Helvetica_Neue']">
            <span>I create </span>
            <span className="text-[#8a8a8a]">solutions</span>
            <span className="align-middle inline-flex ml-2 bg-[#fcf4e9] text-[#1A1A25] rounded-2xl size-10 items-center justify-center">
              <img src={rocketEmj} alt="rocket" className="w-7 h-7" />
            </span>
          </h2>
        </section>

        {/* Projects */}
        <section className="max-w-7xl mx-auto py-16 sm:py-20 lg:py-24">
          {/* Project Cards */}
          <div className="relative h-[320px] sm:h-[380px] flex items-center justify-center -mb-16">
            {/* Deutsche Bahn - Left card */}
            <div className="absolute left-0 sm:left-8 lg:left-16 top-8 z-10">
              <ProjectCard
                imageSrc={deutschlandImage}
                rotateClass="-rotate-[3deg]"
                imageScale="scale-[1.2]"
              />
          </div>
            
            {/* Lumio - Center card */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 z-10">
              <ProjectCard
                imageSrc={lumioImage}
                rotateClass="rotate-[4deg]"
              />
            </div>

            {/* Rizing - Right card */}
            <div className="absolute right-0 sm:right-8 lg:right-16 top-8 z-20">
              <ProjectCard
                imageSrc={rizingImage}
                rotateClass="-rotate-[5deg]"
              />
              </div>
          </div>
          
          {/* Project Text - All aligned at same level */}
          <div className="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-12 lg:gap-16">
            <div className="flex justify-center md:justify-start">
              <ProjectText
                title="Deutsche Bahn"
                description="Designing a Unified Multi-Item Booking Flow for Deutsche Bahn"
              />
        </div>
            
            <div className="flex justify-center">
              <ProjectText
                title="Lumio"
                description="Enabling Faster API Onboarding Through a Custom Chatbot Dashboard"
              />
            </div>
            
            <div className="flex justify-center md:justify-end">
              <ProjectText
                title="Rizing"
                description="A Rebrand to Support Growth from 1:1 Coaching to Company Partnerships"
              />
            </div>
          </div>
        </section>

        {/* About chips */}
        <section className="max-w-4xl mx-auto py-20 sm:py-24 lg:py-28 flex flex-col items-center gap-8">
          <div className="flex flex-col items-center mb-4">
                         <p className="text-[#1A1A25] text-[32px] leading-[44px] text-center">
              Hi, I'm Sonja, a <span className="text-[#8a8a8a]">Product Designer</span> <br />
              from Berlin.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Chip>Critical Thinker 🧠</Chip>
            <Chip>Dog Person 🐩</Chip>
            <Chip>Private Chef 🧄</Chip>
            <Chip>Undercover Nerd 👓</Chip>
        </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <Chip>Dry Humorist 🍸</Chip>
            <Chip>Master of Arts 🎓</Chip>
            <Chip>Detail Lover 🕸️</Chip>
      </div>
        </section>

        {/* CTA */}
        <section className="max-w-md mx-auto py-16 sm:py-20 lg:py-24 text-center">
          <div className="mx-auto size-[160px] sm:size-[200px] bg-[#fcf4e9] rounded-[60px] flex items-center justify-center">
            <span className="text-[96px]">✉️</span>
      </div>
          <p className="mt-6 text-[20px] text-[#1A1A25]">Send me a note</p>
        </section>
      </main>
    </div>
  );
}