import { GravityStarsBackground } from "@/components/animate-ui/components/backgrounds/gravity-stars"

export default function Projects() {
    return(
        <div className="relative flex flex-col justify-between items-center mt-20">
            <GravityStarsBackground 
                starsCount={100}
                starsOpacity={0.50}
                className="h-screen w-screen"
            />
            <div className="absolute z-10">
                <div className="flex flex-col rounded-2xl border-transparent bg-fucoraBorders p-3 w-[80vw] h-[13vh] md:w-[30vw] md:h-[15vh] item-center justify-center">
                    <a href="https://tally.fucora.app" className="flex flex-col w-[75vw] md:w-[28vw] md:h-[30vh] md:pt-4">
                        <div className="flex flex-row">
                            <img src='null' alt="tally logo"></img>
                            <p className="text-lg pl-3">Tally</p>
                        </div>
                        <p className="text-sm">Pre Exam Tracker for UNSW student by UNSW student</p>
                    </a>
                </div>
            </div>
        </div>
    )
}