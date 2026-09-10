'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { JetBrains_Mono } from "next/font/google";

const JetBrains=JetBrains_Mono ({
    subsets:["latin"]
})

export default function Terminal() {
    const [cmd, setCmd] = useState('');
    const [history, setHistory]= useState<any[]>([]);
    const router = useRouter();
   
    function process_cmd(e: any) {
        e.preventDefault();

        let newResponse: any = null;
        let clear:Boolean = false; 

        setCmd(cmd.trim());
        const cleanInput = cmd.toLowerCase();

         if (cleanInput.startsWith("cd")) {
            if (cleanInput.includes("about")) {
                router.replace("/about");
            } else if (cleanInput.includes("projects")) {
                router.replace("/projects");
            }
        } else if(cleanInput.startsWith("status check")) {
            if (cleanInput == "status check --all") {
                newResponse = (
                    <div className="flex flex-col">
                        <div className="flex flex-row">
                            <p>[RUNNING]</p>
                            <p>Fucora Hub: Fucora 1.0.0</p>
                        </div>
                        <div className="flex flex-row">
                            <p>[CONSTRUCTION]</p>
                            <p>Tally: Construction</p>
                        </div>
                    </div>
                    
                );
            } else {
                newResponse = (
                    <div className="flex flex-row">
                        <p>[RUNNING]</p>
                        <p>Fucora Hub: Fucora 1.0.0</p>
                    </div>
                );
            }
        } else if(cleanInput.startsWith('open blueprint')) {
            newResponse = (<p>Under Construction</p>);
        } else if (cleanInput == 'clear') {
            clear = true;
        } else {
            newResponse = (<p>Command {cmd} not found</p>);
        }

        setCmd('');
        if (clear == true) {
            setHistory([]);
        } else {
            setHistory([...history, {input: cmd, output:newResponse}]);
        }
    }
    
    return (
        <div 
            style={{ borderRadius: '12px' }}
            className={`
                flex flex-col justify-items-start border-none
                bg-fucoraTerminal h-[60vw] p-3 w-[85vw] md:w-[70vw] md:h-[18vw] lg:h-[18vw] shadow-md shadow-fucoraGlow
                ${JetBrains.className}`
            }
        >
            <div className="flex flex-col">
                {history.map((item, index) =>(
                    <div key={index}>                   
                        <div className="flex flex-row">
                            <span className="text-green-500">fucora@app</span>
                            <span>:</span>
                            <span className="text-blue-500">~</span>
                            <span>$ {item.input}</span>
                        </div>

                        <div className="">
                            {item.output}
                        </div>
                    </div>
                ))}
            </div>
            <form className='relative flex gap-1' onSubmit={process_cmd}>
                <div className="font-bold h-3 shrink-0">
                    <span className="text-green-500">fucora@app</span> 
                    <span>:</span>
                    <span className="text-blue-500">~</span>
                    <span>$</span>                    
                </div>

                <div className="relative h-3">
                    <input
                    value={cmd}
                    onChange={(e) =>setCmd(e.target.value)}
                    className="text-ivory outline-none caret-transparent w-[80vw] md:w-[30vw]"
                    spellCheck= "false"
                    autoComplete="off"
                    type="text"
                    maxLength={20}
                    />
                    <span className="absolute left-1 pointers-events-none">
                        <span className="opacity-0">{cmd}</span>
                        <span className='animate-terminal-blink'>_</span>
                    </span> 
                </div>
            </form>
        </div>
    )
}