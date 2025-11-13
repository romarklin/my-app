import { ReactNode } from "react"


type CvEntry = {
    title: string
    employe: string
    children: ReactNode
}

export default function CvEntry(props: CvEntry) {
    return (
        
        <div className="p-6 border-5  rounded-2xl shadow my-4 backdrop-blur-lg bg-white/30">
            <div className=" mb-4 flex item-center justify-between">      
                    <h3 className="text-2xl text-[#F54927]">{props.title} </h3>
                    <h3 className="text-[#F5F527] text-xl">{props.employe} </h3>
                    
            </div>
            {props.children}
        </div>
    )   
}
