

//afisare  si butonele 

import {useSelector} from "react-redux";
import {React,useState,useRef} from "react";
import { useDispatch } from "react-redux";
import {Delete,Update,complete} from '../features/task/TaskSlice'
export default function TaskShow ()  {
   
const dispatch=useDispatch()
    let Tasks = useSelector((state)=>state.Task)


    const [show, setShow]=useState(true)
    let ID  = useRef ("")



let [search,searchinput] =useState([])

    let input1 = useRef("")
    let input2 = useRef("")
    let input3 = useRef("")
    let input4 = useRef("")


  
    
    function editTask(id)
    {
    
     ID.current=id
  
        
    }
    
    
   
    



return(<div className="container  d-flex justify-content-center  flex-column  align-items-center">


<div id="showTasks" className=" d-flex justify-content-center  flex-column  align-items-center w-75" >

<h1>ALL TASKS</h1>      {   Tasks.length>0 ?  <input type="text" className="form-control text-center"  placeholder="Search whit Data of Tasks  , Difficulty  Tasks or Task Name  "  onChange={(e)=>{ searchinput(e.target.value) }} />  : ""}
{
    Tasks.length>0 ?


    (Tasks.filter((val)=>{




                if (search.toString()==="") {return val}

                 else if (val.TodaysDate.toLowerCase().includes(search.toLowerCase() ) ||
                   val.difficulty.toLowerCase().includes(search.toLowerCase() ) ||
                    val.TaskName.toLowerCase().includes(search.toLowerCase() ))
               {return val}

    }





    ).filter((item)=> {

                if (  ID.current.toString()==="")

                        {return item;}


                else if (item.id.toString().includes(  ID.current.toString()))
                { return item}

                            }


    ).map((item, index) => {


    return (

        <div id="tasks"  key={index}  className={[" form-control   m-3 w-50  btn btn-outline "]} style={{ borderColor :  item.difficulty ==="Easy" ?  "green" : item.difficulty === 'Normal' ? "yellow" :"red" ,
      
        
        }}>
                                        
            <h3 style={{color:"black"}}>TaskName</h3>
            { show ?     <h2  /*onClick={()=>{complete(item.id)}}*/  className="form-control  "   id={[ item.completed ? 'completed'  : ''] }      style={{color:"Blue"}} >{item.TaskName}</h2> :   <input maxLength={60} className="form-control" type="text" defaultValue={item.TaskName} ref={input1}/>}

            <h3 style={{color:"black"}}>Task   Content</h3>
            { show ? <p   /*onClick={()=>{complete(item.id)}}*/  className="form-control  "   id={[ item.completed ? 'completed'  : ''] }     style={{color : "Blue"  }}  >{item.TaskContent}</p> :(  <input maxLength={60} className="form-control" type="text" defaultValue={item.TaskContent}  ref={input2}/> )}

            <h3 style={{color:"black"}}>Until</h3>
            { show ? <h3   className="form-control  " /*onClick={()=>{complete(item.id)}}*/   id={[ item.completed ? 'completed'  : ''] }      style={{color : "Blue"}}>{item.Until}</h3> : <input maxLength={60}   className="form-control" type="text" defaultValue={item.Until}  ref={input3}/> }

            <h3 style={{color:"black"}}>Difficulty</h3>
            { show ? <h3 className="form-control  "  /*onClick={()=>{complete(item.id)}}*/  id={[ item.completed ? 'completed'  : ''] }      style={{color : item.difficulty ==="Easy"  ? 'green'   :  item.difficulty === 'Normal' ? 'yellow' : 'red' }}>{item.difficulty}</h3> :  <select className="form-control"  defaultValue={item.difficulty}   ref={input4}>   <option value="Easy">Easy</option>     <option value="Normal">Normal</option>     <option value="Hard">Hard</option>          </select>  }


            <h3 style={{color:"black"}}>Creation date of a tasks</h3>
             <h2  /*onClick={()=>{complete(item.id)}}*/  className="form-control  "   id={[ item.completed ? 'completed'  : ''] }     style={{color : "Blue"}}>{item.TodaysDate}</h2> 
             {/* { show ? <h2 onClick={()=>{complete(item.id)}}   className={[item.completed ? 'completed'  : '']}   style={{color : "Blue"}}>{item.TodaysDate}</h2> : <input className="form-control" type="text" defaultValue={item.TodaysDate}  ref={input5}/> } */}
           {item.completed ? <h4 className="text-danger" >  Date Of Completed {item.DateOfCompleted} </h4> : <h4></h4>}

            { show ? <button onClick={()=>{  ;    setShow(false); editTask(item.id)   }} className="btn btn-outline-primary m-3">Edit Task</button> :
            <button onClick={()=>{  dispatch ( Update({
                
                
                id:item.id,
                input1:input1.current.value ,
                input2: input2.current.value,
                input3: input3.current.value,
                input4: input4.current.value,
                input5 :new Date().toLocaleString()
            
            
            
            })) ;   ID.current="";  setShow(true) ;     }} className="btn btn-outline-primary m-3">Update Task</button>}
                <button onClick={()=>{dispatch(Delete({id:item.id})) }} className="btn btn-outline-danger m-3">Delete Task</button>
               <button onClick={()=>{dispatch(complete({id:item.id}) ); }} className="btn btn-outline-success" >  {item.completed ? <> Incompleted</> : <> Completed</>}</button>

        </div>

    )


                         }      )) : <h1>No have Tasks </h1>





}


</div>

</div>)

}