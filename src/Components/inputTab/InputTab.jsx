import React, {useState} from 'react'
import './inputTab.css'

export default function InputTab(props) {

    const [value, setvalue] = useState();

    const onEnter = () =>{

        const newTask = {

            id: Math.random().toLocaleString,
            Data: value


        }

        props.getInputData(newTask)

    }

    const ChangeHandler = (event) => {

        setvalue(event.target.value)

    }

    return (

        <div className='InputTab'>

            <div className='container'>

                <div className='Input'>

                    <input onChange={ChangeHandler} />

                </div>

                <div className='btn' >
                    <button onClick={onEnter}>Enter</button>

                </div>

            </div>

        </div>

    )
}
