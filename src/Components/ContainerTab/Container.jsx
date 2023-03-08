import React, { useState } from 'react'
import TitleTab from '../TitleTab/TitleTab'
import InputTab from '../inputTab/InputTab'
import TaskElement from '../TaskElement/TaskElement'

const Task = [ 

]



export default function ContainerTab() {

    const [DelTask , setDelTask] = useState('')
    const [newTaskData, setnewTaskData] = useState(Task)

    const DelTaskin = (task) =>{

        setDelTask(task)

        let newTaskList = newTaskData.filter((task) =>(

         task.Data !== DelTask

        ))
     
        setnewTaskData(newTaskList)

       

    }

    const DataHandler = (newData) => {

        setnewTaskData((prev) => {
            
            return [ 

                newData,
                ...prev
                 
            
            ]
            

        })


}



return (

    <div className='ContainerTab'>

        <TitleTab />
        <InputTab getInputData={DataHandler} />
        

        {  
           newTaskData.map((task) =>(

           
            <TaskElement Data={task.Data} getDelTask={DelTaskin} />
           
            
            )) 

        }


    </div>


)
}
