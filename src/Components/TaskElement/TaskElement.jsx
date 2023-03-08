import React, { useState } from 'react'
import './TaskElement.css'

export default function TaskElement(props) {
    
    const [Editable, setEditable] = useState(true)
    const [NewData, setnewData] = useState(props.Data)
    const [innerText, setinnerText] = useState('Edit')


    const EditHandler = () =>{

        if(Editable === true){

            setEditable(false)
            setinnerText("Save")

        }

        else{

            setEditable(true)
            setinnerText("Edit")

        }


    }

    const clickHandler = () =>{


        let DataValue = props.Data
        props.getDelTask(DataValue)
        
    }

    const EditInput = (event) =>{

        setnewData(event.target.value)

    }

  
    
    return (

        <div className='TaskElement'>

            <div className='Element-text'>
                
                {/* <h2>{props}</h2> */}
                <input value={props.Data}  disabled={Editable} onChange={EditInput}/>
                <button onClick={EditHandler}>{innerText}</button>
                <button onClick={clickHandler}>X</button>


            </div>




        </div>

    )
}
