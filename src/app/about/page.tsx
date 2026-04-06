export default function About() {
    return(
        <div className="flex justify-center mt-5 mb-5 h-[45vw]">
            <div className="flex flex-row justify-center">
                <div className="flex flex-col border-transparent rounded-2xl bg-fucoraCards p-10">
                    <div className="flex flex-row justify-center">
                        <h2 className="font-bold text-2xl">Who We Are</h2>
                    </div>
                    <p className="mt-3 text-lg">
                        Fucora is initiated at 6th of April 2026 by a group of UNSW students,<br/> 
                        the idea is to create a tools that could help everyone activities. <br/><br/>
                        Other than that, we encourage everyone to join and help us with developing<br/>
                        our projects as our projects are open-source and the code could be accessed<br/>
                        from our GitHub.  
                    </p>
                    <div className="mt-10 flex flex-row justify-center">
                        <h2 className="font-bold text-2xl">Our Mission</h2>
                    </div>
                    <p className="mt-3 text-lg">
                        Our mission is to offers a solution to others by utilising our projects,<br/>
                        such as tally to track pre-exam marks for UNSW student,<br/>
                        ticker to track investment portfolio and much more.<br/><br/>
                        Provide a place where future computer science students to<br/>
                        gain experience they need as it's getting harder and harder to<br/>
                        land an internship in the past year due to high layoffs rate.
                    </p>
                </div>
            </div>
        </div>
    )
}