
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useState } from "react";

const Myaccordian = (props) => {


    const [state, setstate] = useState(false)

    return (<>

        <div className="box" >


            <button onClick={() => setstate(!state)}>{state ? <RemoveIcon /> : <AddIcon />} </button>
            <h1 className="que"> {props.ques}</h1>

          
            {state && <div className="ans" > {props.ans}</div>}

           


        </div>
    </>)

}

export default Myaccordian;
