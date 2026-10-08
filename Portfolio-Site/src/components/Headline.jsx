import { useEffect, useRef } from "react";
import "../styles/Headline.css";

const Headline = () => {

    const nameRef = useRef(null)

    useEffect(() => {
        const 
    })

    return (
        <section className="headline" id="headline">
            <div className="bg-glow" />

            <div className="headline-content">

                <h1 className="headline-name" ref={nameRef}></h1>
            </div>
        </section>
    )
}

export default Headline;