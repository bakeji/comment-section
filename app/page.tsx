import Comment from "@/components/comment";

export default function Page(){
  return(
    <div className=" bg-[#eaecf1] w-[100%] flex items-center justify-center flex-col" >
      <div className=" w-[50%] h-[50%] gap-[20px] flex flex-col items-center justify-center mt-[70px]">
      <Comment/>
      </div>
    </div>
  )
}