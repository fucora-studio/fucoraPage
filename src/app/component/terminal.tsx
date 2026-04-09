'use client';
import { use, useState } from "react";
import { JetBrains_Mono } from "next/font/google";

const JetBrains=JetBrains_Mono ({
    subsets:["latin"]
})

export default function Terminal() {
    const [cmd, setCmd] = useState('');
    const [history, setHistory]= useState<any[]>([]);

   
    function process_cmd(e: any) {
        e.preventDefault();

        let newResponse: any = null;
        let clear:Boolean = false; 

        setCmd(cmd.trim());
        const cleanInput = cmd.toLowerCase();
        if(cleanInput.startsWith("status check")) {
            if (cleanInput == "status check --all") {
                newResponse = (
                    <div className="flex flex-row">
                        <p>[Construction/Maintenance]</p>
                        <p>Fucora Hub: Construction</p>
                    </div>
                );
            } else {
                newResponse = (
                    <div className="flex flex-row">
                        <p>[Construction/Maintenance]</p>
                        <p>Fucora Hub: Construction</p>
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
        <div className={`${JetBrains.className} 
        flex flex-col justify-items-start border-gray rounded-xl 
        bg-gray-900 h-[40vw] p-3 w-[90vw] md:w-[50vw] md:h[15-vw] shadow-lg shadow-fucoraButton/10 shrink-0`}>
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
            <form className='relative flex gap-2' onSubmit={process_cmd}>
                <div className="font-bold h-3 shrink-0">
                    <span className="text-green-500">fucora@app</span> 
                    <span>:</span>
                    <span className="text-blue-500">~</span>
                    <span>$</span>                    
                </div>

                <div className="relative flex-1 h-3">
                    <input
                    value={cmd}
                    onChange={(e) =>setCmd(e.target.value)}
                    className="text-ivory outline-none caret-transparent w-[90vw] md:[30vw]"
                    spellCheck= "false"
                    autoComplete="off"
                    type="text"
                    maxLength={30}
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