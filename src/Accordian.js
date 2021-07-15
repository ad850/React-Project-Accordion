import React from "react";
import { question } from "./api";
import './accordion.css';
import { useState } from "react";
import Myaccordian from "./Mysccordian";


const Accordion = () => {

    const [state, setstate] = useState(question);


    

    return (<>


        <section className="main">

            <section className="center">

                <h1>RECAT INVERVIEW QUESTIONS </h1>

                {

                    state.map((values) => {

                        return <Myaccordian ques={values.question} ans={values.ans} key={values.id} />
                    })

                }
            </section>

        </section>

    </>)

}

export default Accordion;