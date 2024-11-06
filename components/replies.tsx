import Image from "next/image";
import UpvoteBtn from "./upvoteBtn";
import DelAndEdit from "./delEdit";
// type User = {
//     currentUser: string
//   }

type RepliesProps = {
  reply: {
    id: number;
    content: string;
    score: number;
    createdAt: string;
    replyingTo: string;
    user: {
      image: {
        png: string;
        webp: string;
      };
      username: string;
    };
  };
  currentUser: string;
};

export default function Replies({ reply, currentUser }: RepliesProps) {
  return (
    <div>
      <div className="flex gap-[20px] bg-[#ffffff] items-center justify-between p-[30px] box-border w-[100%] h-[210px] rounded-md ">
        <UpvoteBtn initialScore={reply.score} />

        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex gap-4 items-center justify-center">
              <Image
                alt="avi"
                src={reply.user.image.png}
                width={64}
                height={64}
              />
              <p className=" font-[500] text-[18px]">{reply.user.username}</p>
             

              {currentUser === reply.user.username && (
                  <div>
                    <p>you</p>
                  </div>
              )}
              
             <p className=" font-[400] text-[16px]">{reply.createdAt}</p>

             
            </div>

            {currentUser !== reply.user.username && (
              <button className="border-none bg-[transparent] flex  items-center justify-center gap-2">
                
                <Image
                  alt="reply"
                  src="/icon-reply.svg"
                  width={14}
                  height={13}
                />
                reply
              </button>
            )}

            {currentUser === reply.user.username && (
              <DelAndEdit />
            )}
          </div>
          <div>
            <p className=" text-[#67727e] font-[400] text-[18px]">
              {reply.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
