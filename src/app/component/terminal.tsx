'use client';
import { useState } from "react";
import { JetBrains_Mono } from "next/font/google";

const JetBrains=JetBrains_Mono ({
    subsets:["latin"]
})

export default function Terminal() {
    const [cmd, setCmd] = useState('');

   
    function process_cmd(e: any) {
        e.preventDefault();
        console.log(cmd);
    }
    
    return (
        <div className={`${JetBrains.className} flex justify-items-start border-gray rounded-xl bg-gray-900 h-[10vw] p-3 w-[50vw]`}>
            <form className='relative flex gap-2 items-center' onSubmit={process_cmd}>
                <div className="font-bold">
                    <span className="text-green-500">fucora@app</span> 
                    <span>:</span>
                    <span className="text-blue-500">~</span>
                    <span>$</span>                    
                </div>

                <div className="relative">
                    <input
                    value={cmd}
                    onChange={(e) =>setCmd(e.target.value)}
                    className="h-3 mt-1.5 text-ivory outline-none caret-transparent"
                    spellCheck= "false"
                    autoComplete="off"
                    type="text"
                    maxLength={40}
                    />
                    <span className="absolute left-0 pointers-events-none">
                        <span className="opacity-0">{cmd}</span>
                        <span className='animate-pulse'>_</span>
                    </span> 
                </div>
            </form>
        </div>
    )
}