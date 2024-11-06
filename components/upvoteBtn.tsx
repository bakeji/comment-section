"use client"
import Image from 'next/image'
import { useState } from 'react'

export default function UpvoteBtn({initialScore}:{initialScore:number}){
    const [score, setScore] = useState <number>(initialScore)

    const plusBtn = () =>{
        setScore(prev => prev + 1)
    }
    const minusBtn = ()=>{
        setScore(prev => Math.max(0, prev - 1))
    }

    return(
        <div className=" flex flex-col items-center justify-between h-[110px] w-[70px] p-[10px] rounded-lg bg-[#f5f6fa] ">
        <button onClick={plusBtn} className="bg-[transparent] outline-none border-none"><Image alt="plus" src="/icon-plus.svg" width={11} height={11}/></button>
        <p className="text-[#5457b6] font-[400] text-[16px]">{score}</p>
        <button onClick={minusBtn} className="bg-[transparent] outline-none border-none"><Image alt="minus" src="/icon-minus.svg" width={11} height={11}/></button>
    </div>
    )
}