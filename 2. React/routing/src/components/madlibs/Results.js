import React from "react";

const Results = props => {
    // get props
    const {data, setHeader} = props;
    // change header
    setHeader("Results")

    return(
        <>
            <div>
                <h2>
                    Fourth Of July Bash
                </h2>
                    <ul>
                        <li>
                            Here we are at the company's annual Fourth Of July Barbeque Bash.
                        </li>
                        <li>
                            Your good friend the <span className="accent">{data.one}</span> and Uncle Sam are dancing on the fold out tables.
                        </li>
                        <li>
                            Someone arrives wearing <span className="accent">{data.color}</span>, white, and blue coveralls.
                        </li>
                        <li>
                            Fireworks go off and *BAM*!
                        </li>
                        <li>
                            You're the one who falls on your <span className="accent">{data.two}</span>.
                        </li>
                        <li>
                            Karen eats <span className="accent">{data.num}</span> slices of watermelon, and quickly realizes it's infused with vodka.
                        </li>
                        <li>
                            Someone yells, "<span className="accent">{data.three}</span>!"
                        </li>
                        <li>
                            What a spectacle!
                        </li>
                    </ul>
            </div>
            <div>
                <img src="https://c.tenor.com/Az4WpFTAUHIAAAAM/4th-of-july-happy4th-of-july.gif" alt="dog 4th of july"/>
            </div>
        </>
    )
}

export default Results;