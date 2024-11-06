"use client"
import Image from "next/image";
import Replies from "./replies";
import ReplyBox from "./replyBox";
import Data from "./data.json";
import UpvoteBtn from "./upvoteBtn";
import ReplyBtn from "./replyBtn";
import { useState } from "react";
export default function Comment() {
    const lastComment = Data.comments.length;
    console.log(lastComment);
     const [activeCommentBox, setActiveCommentBox] = useState<number| null>(lastComment);

     const toggleCommentBox = (id:number) => {
         setActiveCommentBox(id );
         console.log(lastComment === id);
     }

  return (
    <>
      {Data.comments.map((data) => (
        <section key={data.id} className=" flex flex-col gap-[8px]   ">
          <div className="flex gap-[20px] bg-[#ffffff] items-center justify-between p-[30px] box-border w-[100%] h-[210px] rounded-md ">
            <UpvoteBtn initialScore={data.score} />

            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="flex gap-4 items-center justify-center">
                  <Image
                    alt="img"
                    src={data.user.image.png}
                    width={64}
                    height={64}
                  />
                  <p className=" font-[500] text-[18px]">
                    {data.user.username}
                  </p>
                  <p className=" font-[400] text-[16px]">{data.createdAt}</p>
                </div>

                <ReplyBtn toggleBox={toggleCommentBox} id ={data.id} />
              </div>

              <div>
                <p className=" text-[#67727e] font-[400] text-[18px]">
                  {data.content}
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-6 w-[95%] justify-center ml-auto ">
            {data.replies.length > 0 && (
              <div className="flex">
                <div className=" w-1 self-stretch border-[1px] bg-[#c3c4ef]">
                  
                </div>
              </div>
            )}

            <div className="flex flex-col h-full gap-2">
              {data.replies.map((reply) => (
                <Replies
                  key={reply.id}
                  currentUser={Data.currentUser}
                  reply={reply}
                  activeCommentBox={activeCommentBox}
                  toggleBox = {toggleCommentBox}
                />
              ))}
            </div>
          </div>

          {activeCommentBox === data.id && <ReplyBox currentUser={Data.currentUser} />}
        </section>
      ))}
    </>
  );
}
