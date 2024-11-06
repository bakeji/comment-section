import Image from 'next/image'

type currentUser ={
    currentUser: {
        image: {
            png: string;
            webp: string;
        };
        username: string;
    }
}
export default function ReplyBox( {currentUser}: currentUser){
    return(
        <div className='flex gap-[20px] bg-[#ffffff] items-start justify-between p-[30px] box-border w-[100%] h-[160px] rounded-md '>
            <Image alt="" src={currentUser.image.png} width={64} height={64}/>

            <div className='w-[70%] cursor-pointer flex items-center justify-center border-[1px] border-[#324152] rounded-md h-[90%]'>
                <input className=' w-[98%] h-[90%] border-none outline-none  ' type="text" />
            </div>

            <button className='w-[120px] h-[40px] bg-[#5457b6] hover:bg-[#c3c4ef] rounded-md text-[#ffffff] font-[500] text-[18px]'>REPLY</button>


        </div>
    )

    
}