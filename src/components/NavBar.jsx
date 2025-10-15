import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function NavBar({ showBackButton = false }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const isHomePage = location.pathname === '/';

    return (
        <div
            className="box-border content-stretch flex flex-row items-center justify-between px-4 sm:px-8 lg:px-14 py-6 sm:py-8 relative w-full"
            data-name="Navigation bar"
        >
            <div
                className="box-border content-stretch flex flex-col sm:flex-row font-['Helvetica_Neue:Medium',_sans-serif] sm:gap-4 sm:items-center justify-start leading-[0] not-italic p-0 relative shrink-0 text-[16px] sm:text-[18px] lg:text-[20px] text-left"
            >
                <div className="relative shrink-0 text-[#8a8a8a] whitespace-nowrap">
                    {!isHomePage ? (
                        <button
                            onClick={() => navigate('/')}
                            className="block leading-[22px] sm:leading-[32px] hover:text-[#1A1A25] transition-colors cursor-pointer text-left"
                        >
                            Sonja Weissberg
                        </button>
                    ) : (
                        <p className="block leading-[22px] sm:leading-[32px]">Sonja Weissberg</p>
                    )}
                </div>
                <div className="relative shrink-0 text-[#000000] whitespace-nowrap text-[12px] sm:text-[18px] lg:text-[20px]">
                    <p className="block leading-[22px] sm:leading-[32px]">Product Designer</p>
                </div>
            </div>
            <div className="relative">
                <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="bg-[#e9e9e9] box-border content-stretch flex flex-row gap-px h-11 items-center justify-center p-0 relative rounded-[13px] shrink-0 w-[160px] sm:w-[181px] hover:bg-[#ddd] transition-colors"
                >
                    <div className="font-['Helvetica_Neue:Medium',_sans-serif] h-8 leading-[0] not-italic relative shrink-0 text-[#8e8e8e] text-[16px] sm:text-[18px] text-left flex-1 text-center">
                        <p className="block leading-[28px] sm:leading-[32px]">Case Studies</p>
                    </div>
                    <div className={`relative shrink-0 mr-2 size-6 sm:size-8 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>
                        <svg className="block max-w-none size-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="#8e8e8e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </button>

                {isDropdownOpen && (
                    <div className="absolute top-full right-0 mt-2 w-[160px] sm:w-[181px] bg-white rounded-xl shadow-[3px_3px_40px_15px_rgba(0,0,0,0.15)] border border-gray-100 py-2 z-50">
                        <button
                            onClick={() => { navigate('/db'); setIsDropdownOpen(false); }}
                            className={`w-full text-left font-['Helvetica_Neue:Regular',_sans-serif] text-[14px] sm:text-[16px] px-4 py-2 hover:bg-gray-50 transition-colors ${location.pathname === '/db' ? 'text-black font-medium' : 'text-[#8a8a8a] hover:text-black'
                                }`}
                        >
                            Deutsche Bahn
                        </button>
                        <button
                            onClick={() => { navigate('/lumio'); setIsDropdownOpen(false); }}
                            className={`w-full text-left font-['Helvetica_Neue:Regular',_sans-serif] text-[14px] sm:text-[16px] px-4 py-2 hover:bg-gray-50 transition-colors ${location.pathname === '/lumio' ? 'text-black font-medium' : 'text-[#8a8a8a] hover:text-black'
                                }`}
                        >
                            Lumio
                        </button>
                        <button
                            onClick={() => { navigate('/rizing'); setIsDropdownOpen(false); }}
                            className={`w-full text-left font-['Helvetica_Neue:Regular',_sans-serif] text-[14px] sm:text-[16px] px-4 py-2 hover:bg-gray-50 transition-colors ${location.pathname === '/rizing' ? 'text-black font-medium' : 'text-[#8a8a8a] hover:text-black'
                                }`}
                        >
                            Rizing
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
