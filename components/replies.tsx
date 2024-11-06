import Image from "next/image";
import UpvoteBtn from "./upvoteBtn";
import DelAndEdit from "./delEdit";
import ReplyBtn from "./replyBtn";
import ReplyBox from "./replyBox";


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
  currentUser: { 
    image:{ png: string; webp: string; };
    username: string; 
}
activeCommentBox: number | null;
toggleBox: (id: number) => void;
};

export default function Replies({ reply, currentUser, activeCommentBox, toggleBox }: RepliesProps) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center w-[100%]">
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
             

              {currentUser.username === reply.user.username && (
                <p className=" bg-[#5457b6] px-[10px] text-[18px] text-[#ffffff] font-[400] ">you</p>
              )}

             <p className=" font-[400] text-[16px]">{reply.createdAt}</p>

             
            </div>

            {currentUser.username !== reply.user.username && (
              <ReplyBtn toggleBox={toggleBox} id={reply.id} />
            )}

            {currentUser.username === reply.user.username && (
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
      {activeCommentBox ===reply.id && <ReplyBox currentUser={currentUser}  />}
    </div>
  );
}
