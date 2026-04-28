import { Metadata } from "next"

export const metadata: Metadata = {
    title:"About | Fucora", 
    description:"Understand more about Fucora!"
}

export default function About() {
    return(
        <div className="flex justify-center items-center h-screen md:h-[120vh] md:mt-0 ml-5 mr-5 md:ml-20 md:mr-20 lg:ml-80 lg:mr-80">
            <div className="flex flex-col border-transparent rounded-2xl bg-fucoraCards p-3 md:p-8 lg:p-10">
                <div className="flex flex-row justify-center">
                    <h2 className="font-bold text-lg md:text-xl lg:text-2xl">Who We Are</h2>
                </div>
                <p className="mt-3 text-sm md:text-md lg:text-lg">
                    Fucora is initiated at 6th of April 2026 by a group of UNSW students, 
                    the idea is to create a tools that could help everyone activities. <br/><br/>
                    Other than that, we encourage everyone to join and help us with developing
                    our projects as our projects are open-source and the code could be accessed
                    from our GitHub.  
                </p>
                <div className="mt-10 flex flex-row justify-center">
                    <h2 className="font-bold text-lg md:text-xl lg:text-2xl">Our Mission</h2>
                </div>
                <p className="mt-3 text-sm md:text-md lg:text-lg">
                    Our mission is to offers a solution to others by utilising our projects,
                    such as tally to track pre-exam marks for UNSW student,
                    ticker to track investment portfolio and much more.<br/><br/>
                    Provide a place where future computer science students to
                    gain experience they need as it's getting harder and harder to
                    land an internship in the past year due to high layoffs rate.
                </p>
            </div>
        </div>
    )
}