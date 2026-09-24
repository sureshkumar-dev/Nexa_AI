'use client'
import Image from "next/image"
import Marquee from "@/components/layouts/marquee"
import WorkflowCard from "@/components/layouts/workflow"
import { motion } from "framer-motion"
export default function App() {
    interface WorkflowProps {
        number: number,
        img: string,
        alt: string,
        heading: string,
        desc: string,
        shortdesc: string

    }
    const WorkflowArray: WorkflowProps[] = [
        {
            number: 0o1,
            img: '/start_logo.png',
            alt: 'start logo',
            heading: 'Start',
            desc: 'Open your workspace. Instant access with zero complex environment setup or API key hurdles.',
            shortdesc: 'Sub-second startup'
        },
        {
            number: 0o2,
            img: '/chat_logo.png',
            alt: 'start logo',
            heading: 'Ask & Connect',
            desc: 'Chat naturally, attach rich documents, or mention historical threads to supply full project context.',
            shortdesc: 'Multi-modal inputs'
        },
        {
            number: 0o3,
            img: '/rocket_logo.png',
            alt: 'start logo',
            heading: 'Create & Ship',
            desc: 'Turn answers into clean code, exportable markdown reports, or direct production-ready assets.',
            shortdesc: 'Actionable deliverables'
        }

    ]
    return (
        <>
            <main className=" bg-[radial-gradient(circle_at_50%_20%,#E8E7FC_0%,#F2F1FD_35%,#F9F9FF_75%)] pt-[70px] pb-[30px] lg:pb-0 h-max lg:min-h-[95vh] ">
                <div className="  max-w-[1400px] flex flex-col items-center justify-center pt-6 md:pt-15 mx-auto md:w-[800px] lg:w-[1400px]">
                    <div className=" animate-bounce  flex gap-x-3 bg-[#E3E5FC] w-max px-3 font-[400] rounded-xl justify-center items-center">
                        <div className="flex items-center justify-center ">
                            <Image src='/ai_logo.png' height={20} width={20} alt="ai logo" />
                            <p>AI workplace</p>
                        </div>

                        <p>-</p>
                        <p>Nexa 1.0 is live</p>
                    </div>
                    <div className=" text-[25px] md:text-[50px] lg:text-[90px] md:leading-[60px] lg:leading-[100px] flex flex-col pt-4 md:pt-8 items-center justify-center font-[600]">
                        <h1>Think faster Create better. </h1>
                        <h1 className="text-[#1D00A5]">With AI</h1>
                    </div>
                    <div className="text-[15px] md:text-l lg:text-xl font-[300] flex flex-col pt-4 items-center">
                        <p className="block md:hidden tracking-wide">Chat with AI, analyze documents, write code</p>
                        <p className="hidden md:blocktracking-wide">Chat with AI, analyze documents, write code, and turn ideas into useful work </p>
                        <p className="tracking-wide"> all in one intelligent, unified workspace.</p>
                    </div>
                    <div className="flex gap-x-5 text-xl pt-8">
                        <motion.button whileTap={{ y: 5 }} whileHover={{ cursor: 'pointer', backgroundColor: '#6366F1', y: -5 }} className="bg-[#3323CC] text-white p-2 font-[500] px-4 rounded-[10px]">Get Started Free</motion.button>
                        <motion.button whileTap={{ y: 5 }} whileHover={{ cursor: 'pointer', backgroundColor: '#e1e1e6', y: -5 }} className="bg-white p-2 px-4 font-[500] rounded-[10px]">Login</motion.button>
                    </div>
                    <div>
                        <div className="flex gap-x-2 md:gap-x-5 pt-10 font-[400] items-center">
                            <p>Smart AI</p>
                            <p>.</p>
                            <p>Instant Access</p>
                            <p>.</p>
                            <p>Free Trial</p>
                        </div>
                    </div>
                </div>

            </main>
            <Marquee />
            <section className=" flex flex-col items-center bg-[radial-gradient(circle_at_50%_20%,#E8E7FC_0%,#F2F1FD_35%,#F9F9FF_75%)] pt-[70px] pb-[30px] lg:pb-0 h-max lg:min-h-[95vh] ">
                <div>
                    <div className="flex flex-col gap-y-3 items-center">
                        <h1 className="text-4xl md:text-6xl font-[600]">HOW IT WORKS</h1>
                        <p className="block md:hidden">Three steps from prompt to production output.</p>
                        <p className="hidden md:block">Three friction-free steps from blank prompt to production-ready output.</p>
                    </div>
                    <div className="flex flex-col items-center lg:flex-row mt-10 gap-15 md:gap-25">
                        {WorkflowArray.map((item,index)=>(
                            <WorkflowCard key={index} number={item.number} heading={item.heading} img={item.img} desc={item.desc} shortdesc={item.shortdesc} alt={item.alt} />
                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}