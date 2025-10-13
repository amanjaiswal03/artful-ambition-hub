export default function Footer({ onNavigateToLumio, onNavigateToRizing, onNavigateToDB }) {
    return (
        <footer className="bg-white w-full py-8" data-name="Footer">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center sm:justify-between gap-6 sm:gap-8">
                <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-6 sm:gap-8">
                    <div className="content-stretch flex gap-4 items-center justify-center text-center order-2 sm:order-1" data-name="Copyright">
                        <div className="font-['Helvetica_Neue:Regular',_sans-serif] leading-[0] not-italic text-[#8a8a8a] text-[14px] sm:text-[16px] lg:text-[20px]">
                            <p className="leading-[24px] sm:leading-[32px]">© 2025 Sonja Weissberg. All Rights Reserved</p>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center order-1 sm:order-2" data-name="Case Studies">
                        <div className="content-stretch flex gap-1 items-center justify-center" data-name="Case Studies">
                            <div className="font-['Helvetica_Neue:Regular',_sans-serif] leading-[0] not-italic text-[14px] sm:text-[16px] lg:text-[20px] text-black">
                                <p className="leading-[24px] sm:leading-[32px]">Case Studies</p>
                            </div>
                        </div>
                        <div className="content-stretch flex flex-wrap gap-2 sm:gap-3 items-center justify-center">
                            <div className="content-stretch flex gap-2 sm:gap-4 items-center justify-center" data-name="DB">
                                <button
                                    onClick={onNavigateToDB}
                                    className="font-['Helvetica_Neue:Regular',_sans-serif] leading-[0] not-italic text-[#8a8a8a] text-[14px] sm:text-[16px] lg:text-[20px] hover:text-black transition-colors cursor-pointer"
                                >
                                    <p className="leading-[24px] sm:leading-[32px] whitespace-nowrap">Deutsche Bahn</p>
                                </button>
                            </div>
                            <div className="font-['Helvetica_Neue:Regular',_sans-serif] leading-[0] not-italic text-[#8a8a8a] text-[14px] sm:text-[16px] lg:text-[20px] text-center">
                                <p className="leading-[24px] sm:leading-[32px]">•</p>
                            </div>
                            <div className="content-stretch flex gap-2 sm:gap-4 items-center justify-center" data-name="Lumio">
                                <button
                                    onClick={onNavigateToLumio}
                                    className="font-['Helvetica_Neue:Regular',_sans-serif] leading-[0] not-italic text-[#8a8a8a] text-[14px] sm:text-[16px] lg:text-[20px] hover:text-black transition-colors cursor-pointer"
                                >
                                    <p className="leading-[24px] sm:leading-[32px]">Lumio</p>
                                </button>
                            </div>
                            <div className="font-['Helvetica_Neue:Regular',_sans-serif] leading-[0] not-italic text-[#8a8a8a] text-[14px] sm:text-[16px] lg:text-[20px] text-center">
                                <p className="leading-[24px] sm:leading-[32px]">•</p>
                            </div>
                            <div className="content-stretch flex gap-2 sm:gap-4 items-center justify-center" data-name="Rizing">
                                <button
                                    onClick={onNavigateToRizing}
                                    className="font-['Helvetica_Neue:Regular',_sans-serif] leading-[0] not-italic text-[#8a8a8a] text-[14px] sm:text-[16px] lg:text-[20px] hover:text-black transition-colors cursor-pointer"
                                >
                                    <p className="leading-[24px] sm:leading-[32px]">Rizing</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
