import Image from "next/image"
interface WorkflowProps{
    number:number,
    img:string,
    alt:string,
    heading:string,
    desc:string,
    shortdesc:string

}
export default function WorkflowCard({number,img,alt,heading,desc,shortdesc}:WorkflowProps){
    return(
        <>
            <div className="h-[280px] w-[280px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col justify-between p-5 rounded-xl bg-white">
                <div className="flex  justify-between">
                    <h1 className="text-5xl font-[700] text-[#DBD9E6]">0{number}</h1>
                    <div className="p-2 rounded-xl h-max bg-blue-200 w-max">
                        <Image src={img} height={25} width={25} alt={alt}/>
                    </div>
                </div>
                <h1 className="text-2xl font-[500] ">{heading}</h1>
                <p>{desc}</p>
                <hr />
                <p className="text-blue-500">{shortdesc}</p>
            </div>
        </>
    )
}