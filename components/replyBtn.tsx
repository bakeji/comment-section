import Image from "next/image"
type replyBtnProps = {
    toggleBox: (id:number) => void
    id: number
}
export default function ReplyBtn({toggleBox, id}: replyBtnProps){
 
    return(
        <button 
        onClick={()=>{toggleBox(id)}}
         className="border-none bg-[transparent] flex  items-center justify-center gap-2">
                
        <Image
          alt="reply"
          src="/icon-reply.svg"
          width={14}
          height={13}
        />
        reply
      </button>

    )
}