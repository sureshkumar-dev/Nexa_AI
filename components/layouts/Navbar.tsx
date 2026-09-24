'use client'
export default function Navbar(){
    return(
        <>
            <nav className="w-full fixed top-0 left-0 bg-white z-50 p-2 flex justify-center shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                <div className="flex justify-between items-center  h-[40px] md:h-[45px] max-w-[1400px] w-[500px] md:w-[1100px] lg:w-[1400px]">
                    <h1 className="text-3xl md:text-4xl font-[700]">Nexa<span className="text-[#4F46E5]">AI</span></h1>
                    <ul className="hidden md:flex gap-x-6 text-[#5A5E6A] text-l font-[500]">
                        <li>Features</li>
                        <li>How It Works</li>
                        <li>Use Cases</li>
                    </ul>
                    <div className="flex pl-10 gap-x-8">
                        <button className=" hidden md:block font-[400]">Login</button>
                        <button className="p-1 px-2 md:p-2 md:px-4 bg-[#3323CC] text-white font-[400] rounded-l rounded-r">Get Started</button>
                    </div>
                </div>
            </nav>
        </>
    )
}