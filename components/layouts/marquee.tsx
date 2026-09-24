import '@/app/globals.css'
import { div } from 'framer-motion/client';
export default function Marquee() {
    const text = [
        "INTELLIGENT AUTOMATION",
        "AI-POWERED WORKFLOWS",
        "SMARTER DECISIONS",
        "GENERATIVE AI",
        "AI PRODUCTIVITY",
        "INTELLIGENT ASSISTANCE",
        "AUTOMATED WORKFLOWS",
        "AI-DRIVEN INNOVATION",
        "CONTEXT-AWARE AI",
        "NEXT-GEN INTELLIGENCE",
        "SEAMLESS AI EXPERIENCE",
        "THE FUTURE OF WORK",
    ];
    return (
        <>
            <div className="divider bg-[#F1F3FF] flex items-center h-[50px] md:h-[60px] lg:h-[75px]  w-full overflow-hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <div className='flex'>
                    <div className="flex gap-x-4 md:gap-x-12 items-center animate-marquee" >
                        {text.map((word, index) => (
                            <div className='flex gap-x-4 md:gap-x-12 items-center'>
                                <span key={index} className="whitespace-nowrap text-xl md:2xl lg:text-3xl font-bold tracking-widest text-black">{word}</span>
                                <span className="text-indigo-400 text-l">✦</span>
                            </div>

                        )

                        )}
                    </div>
                    <div className="flex gap-x-12 items-center animate-marquee" >
                        {text.map((word, index) => (
                            <>
                                <span key={index} className="whitespace-nowrap text-3xl font-bold tracking-widest text-black">{word}</span>
                                <span className="text-indigo-400 text-l">✦</span>
                            </>

                        )

                        )}
                    </div>
                </div>
            </div>
        </>
    )
}