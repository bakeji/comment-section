import Image from "next/image"
export default function DelAndEdit(){
    return(
        <div  className="flex gap-3 items-center justify-center">
            <button className="text-[#ed6468] font-[400] text-[14px] flex items-center justify-center gap-1"><Image alt="delete" src = "/icon-delete.svg" width = {12} height ={14} /> Delete </button>
            <button className="text-[#5457b6] font-[400] text-[14px] flex items-center justify-center gap-1"><Image alt="edit" src = "/icon-edit.svg" width = {14} height ={14} /> Edit </button>
        </div>
    )

}