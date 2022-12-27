import {React,useState,useRef} from "react";
import "../style/styles.scss";
import {useDispatch} from 'react-redux'
import {addTask} from '../features/task/TaskSlice'
// import { useEffect } from "react";

//aice se creaza task-ul  , inserarea 


export default function TaskInsert ()
{


// const [Tasks,SetTasks] =useState([])
//   useEffect(()=>{

// localStorage.setItem("Tasks",JSON.stringify(Tasks))


//   },[Tasks]);







const dispatch = useDispatch();


//task succefuly insert 
const [insert,Setinsert] =useState("")

// for check insert in input 
const input1 = useRef ()
const input2 = useRef ()
let select1 = useRef (true)
const input3 = useRef ()
let  select2 = useRef ()

    //for Until

    const [Until,setUntil] = useState("")


//1


    const [Task,setTask] = useState(
                        {
                        id : "",
                        TaskName : "",
                        TaskContent : "",
                        Until : "" ,
                        difficulty :"" ,
                        completed: false,
                        TodaysDate : ""
                        }
                                )  

    
                            function AddTask(){


                            if (input1.current.value.length>3 && input2.current.value.length >10 && input3.current.value.length>0)    
                            
                                {

                                  select1.current=true;
                                  select2.current=true;
                                    
                                    input1.current.style.color  = 'black';
                                    input2.current.style.color  = 'black';
                                    input3.current.style.color  = 'black';
                                  


                                    setTask({...Task,id:Date.now() ,TodaysDate: new Date().toLocaleString()});
                                    
                                 
                                    // localStorage.setItem("Tasks",JSON.stringify({...Task,id:Date.now() ,TodaysDate: new Date().toLocaleString()}))

                                    //il mai returnam odata ca sa putem primii id-ul
                                    dispatch(addTask({...Task,id:Date.now() ,TodaysDate: new Date().toLocaleString()}));
                                  
                                // SetTasks([...Tasks,{...Task,id:Date.now() ,TodaysDate: new Date().toLocaleString()}])
                                // SetTasks([...Tasks,{...Task,id:Date.now() ,TodaysDate: new Date().toLocaleString()}])
                                // //ca sa resetam  valorile 
                                                                        setTask({...Task,
                                        id : "",
                                        TaskName : "",
                                        TaskContent : "",
                                        Until : "" ,
                                        difficulty :"" ,
                                        completed: false,
                                        TodaysDate : "",
                                        DateOfCompleted :""})

                                                                        

                                document.getElementById("form").reset();    //fa vii resetat formular-ul 
                                
                                
                                
                              
                                setUntil(""); //pentru "pana cand "

                                Setinsert("inserted successfully !")
                                
                                }



                                else  
                                {   input1.current.style.color  ='red';
                                    input1.current.style.borderColor  ='red';
                                    input2.current.style.color  ='red';
                                    input2.current.style.borderColor  ='red';
                                    document.getElementById("form").reset();    //fa vii resetat formular-ul 
                                    Setinsert("You have an error !")
                                    select2.current=false;
                                }


                            }


return (

<div className="container  d-flex justify-content-center  flex-column  align-items-center  ">

                                    <h1>ToDo</h1>



        <form className=" btn btn-outline-danger  form-control d-flex justify-content-center  flex-column  align-items-center  w-50  m-4 " id="form" onSubmit={(e)=>{e.preventDefault();  }}>


                    <label className="w-75 form-control mt-5 m-2" htmlFor="Title">Taks Name</label>    
                    <input maxLength={25}  placeholder="Minimum 4 characters" className="w-75 form-control mb-1 text-center" type="text" name="Title"  onChange={   (e)=>{ setTask({...Task,TaskName : e.target.value })  }}  ref={input1}  />

                    <label className="w-75 form-control m-2" htmlFor="Task">Task Content</label>    
                    <input maxLength={45} placeholder="Minimum 10 characters" className="w-75 form-control mb-1 text-center"type="text" name="Task" onChange={  (e)=>{setTask({...Task,TaskContent : e.target.value }) ; select1.current=false }}  ref={input2}/>

                   
                    { Until === '' ?
                            <select   className="w-75 form-control m-3 text-center "  style={ select1.current  ? {borderColor : ""} : {borderColor : "red"}   } onChange={(e)=>{ setUntil(e.target.value) ;  }} ref={select1} >
                                <option  >Until</option>
                                <option value="Hours ">Hour / Hours</option>
                                <option value="Days ">Days / Days</option>
                                <option value="Weeks ">Week / Weeks</option>
                                <option value="Years ">Year / Years</option>
                            </select>
                    :
                    <input maxLength={25}  placeholder={' Number of ' + Until} className="w-75 form-control m-2 text-center " type="text" onChange={(e)=>{  setTask({...Task,Until :  Until +e.target.value  })}}  ref={input3}/>
                    
                    }

                    <select className="w-75  form-control m-23"  style={ select1.current  ? {borderColor : ""} : {borderColor : "red"}}    onChange={(e)=>{ setTask({...Task,difficulty : e.target.value }) ;select1.current=true}}  >

                        <option className="w-50 text-center m-1 " value="">Select the difficulty</option>
                        <option className="text-center" value="Easy">Easy</option>
                        <option className="text-center" value="Normal">Normal</option>
                        <option className="text-center form-control" value="Hard">Hard</option>
                        
                    </select>

                            <div className="m-4  ">

                                <button  onClick={()=>{  AddTask() }} style={{width : "300px"}}  className="btn btn-outline-primary  ">Add Task</button>  
                            
                            </div>
                                
                            
            </form>

   
  <h1 style={ select2.current  ? {color : "green"} : {color : "red"}}  >  {insert}</h1>

    
</div>


)



}






























//simple todo 



// import userEvent from "@testing-library/user-event";
// import {React,useState,useRef,useEffect} from "react";
// import "../style/styles.scss";
// import {useSelector,useDispatch} from "react-redux";




// export default function Task1 ()
// {
    
    
    




//     //for Until

//     const [Until,setUntil] = useState("")


//     const [show, setShow]=useState(true)
//    let [ID ,setID] =useState ([])
    
// let input1 = useRef("")
// let input2 = useRef("")
// let input3 = useRef("")
// let input4 = useRef("")
// // let input5 = useRef("")

// //1


//     const [Task,setTask] = useState(
//                         {
//                         id : "",
//                         TaskName : "",
//                         TaskContent : "",
//                         Until : "" ,
//                         difficulty :"" ,
//                         completed: false,
//                         TodaysDate : ""
//                         }
//                                 )  

                                

//   //2 declarare                              
                    
//  const [Tasks,setTasks] =  useState([]) // tabloul unde se va trimite  
//                          //obiectul de sus
 
// function addTask ()
// { 
   

//     setTasks([...Tasks,{...Task,id:Date.now() ,TodaysDate: new Date().toLocaleString()}])

// document.getElementById("form").reset();    //fa vii resetat formular-ul 

// console.log(Tasks);


// setTask({...Task,
// id : "",
// TaskName : "",
// TaskContent : "",
// Until : "" ,
// difficulty :"" ,
// completed: false,
// TodaysDate : "",
// DateOfCompleted :""})


// setUntil("")

// }


// function Delete(id)
// {
//     setTasks(Tasks.filter((item)=> item.id!==id))

// }


// function editTask(id)
// {

//  setID(id)
//  console.log(ID);
    
// }


// function Update(id)
// {
// setID("")
//     // const newBody = prompt("Enter new Body")
//     console.log(id);

//     setTasks(Tasks.map((item)=>{

//     if (item.id===id)
//     {
//     return {...item, 
//         TaskName :input1.current.value ,
//         TaskContent : input2.current.value ,
//         Until : input3.current.value ,
//         difficulty : input4.current.value ,
//         TodaysDate : new Date().toLocaleString() ,}




//     }
//     else {

//     return item

//     }

//     })
//     )

  
// }



// function complete (id)
// {

//     setTask(Tasks.map((item)=>
//     {

//         if(item.id===id) {item.completed=!item.completed; item.DateOfCompleted=new Date().toLocaleString()  }
//         { return item;}
//     }))

// }



// return (

// <div className="container  d-flex justify-content-center  flex-column  align-items-center  ">

//                                     <h1>ToDo</h1>



//         <form className=" btn btn-outline-danger  form-control d-flex justify-content-center  flex-column  align-items-center  w-50  m-4 " id="form" onSubmit={(e)=>{e.preventDefault();  }}>


//                     <label className="w-75 form-control mt-5 m-2" htmlFor="Title">Taks Name</label>    
//                     <input placeholder="Minimum 4 characters" className="w-75 form-control mb-1 text-center" type="text" name="Title"  onChange={   (e)=>{ setTask({...Task,TaskName : e.target.value })   }}  />

//                     <label className="w-75 form-control m-2" htmlFor="Task">Task Content</label>    
//                     <input placeholder="Minimum 10 characters" className="w-75 form-control mb-1 text-center"type="text" name="Task" onChange={  (e)=>{setTask({...Task,TaskContent : e.target.value }) }} />

                   
//                     { Until === '' ?
//                             <select  className="w-75 form-control m-3 text-center "  onChange={(e)=>{ setUntil(e.target.value)  }}>
//                                 <option  >Until</option>
//                                 <option value="Hours ">Hour / Hours</option>
//                                 <option value="Days ">Days / Days</option>
//                                 <option value="Weeks ">Week / Weeks</option>
//                                 <option value="Years ">Year / Years</option>
//                             </select>
//                     :
//                     <input  placeholder={' Number of ' + Until} className="w-75 form-control m-2 text-center " type="text" onChange={(e)=>{  setTask({...Task,Until :  Until +e.target.value  })}} />
                    
//                     }

//                     <select className="w-75  form-control m-23" onChange={(e)=>{setTask({...Task,difficulty : e.target.value }) }} >

//                         <option className="w-50 text-center m-1 " value="Select the difficulty">Select the difficulty</option>
//                         <option className="text-center" value="Easy">Easy</option>
//                         <option className="text-center" value="Normal">Normal</option>
//                         <option className="text-center form-control" value="Hard">Hard</option>
                        
//                     </select>

//                             <div className="m-4">

//                                 <button  onClick={()=>{addTask ()  }} style={{width : "500px"}} className="btn btn-outline-success m-3">Add Task</button>  
                            
//                             </div>
                                
                            
//             </form>

//     <div id="showTasks" className=" d-flex justify-content-center  flex-column  align-items-center w-75" >

//         <h1>ALL TASKS</h1>
//         {
//             Tasks.length>0 ?


//             (Tasks.filter((item)=> {

//                         if (ID.toString()==="")

//                                 {return item;}


//                         else if (item.id.toString().includes(ID.toString()))
//                         { return item}

                       
//                                     }


//             ).map((item, index) => {


//             return (

//                 <div id="tasks"  key={index}  className={[" form-control   m-3 w-50  btn btn-outline "]} style={{ borderColor :  item.difficulty ==="Easy" ?  "green" : item.difficulty === 'Normal' ? "yellow" :"red" ,
              
                
//                 }}>
                                                
//                     <h3 style={{color:"black"}}>TaskName</h3>
//                     { show ?     <h2 onClick={()=>{complete(item.id)}}   className={[item.completed ? 'completed'  : '']}    style={{color:"Blue"}} >{item.TaskName}</h2> :   <input className="form-control" type="text" defaultValue={item.TaskName} ref={input1}/>}

//                     <h3 style={{color:"black"}}>Task   Content</h3>
//                     { show ? <p    onClick={()=>{complete(item.id)}}   className={[ item.completed ? 'completed'  : ''] }        style={{textAlign :"center" , color : "Blue"}}  >{item.TaskContent}</p> :(  <input className="form-control" type="text" defaultValue={item.TaskContent}  ref={input2}/> )}

//                     <h3 style={{color:"black"}}>Until</h3>
//                     { show ? <h3  onClick={()=>{complete(item.id)}}   className={[item.completed ? 'completed'  : '']}   style={{color : "Blue"}}>{item.Until}</h3> : <input className="form-control" type="text" defaultValue={item.Until}  ref={input3}/> }

//                     <h3 style={{color:"black"}}>Difficulty</h3>
//                     { show ? <h3 onClick={()=>{complete(item.id)}}   className={[item.completed ? 'completed'  : '']}   style={{color : item.difficulty ==="Easy"  ? 'green'   :  item.difficulty === 'Normal' ? 'yellow' : 'red' }}>{item.difficulty}</h3> :  <select className="form-control"  defaultValue={item.difficulty}   ref={input4}>   <option value="Easy">Easy</option>     <option value="Normal">Normal</option>     <option value="Hard">Hard</option>          </select>  }


//                     <h3 style={{color:"black"}}>Creation date of a tasks</h3>
//                      <h2 onClick={()=>{complete(item.id)}}   className={[item.completed ? 'completed'  : '']}   style={{color : "Blue"}}>{item.TodaysDate}</h2> 
//                      {/* { show ? <h2 onClick={()=>{complete(item.id)}}   className={[item.completed ? 'completed'  : '']}   style={{color : "Blue"}}>{item.TodaysDate}</h2> : <input className="form-control" type="text" defaultValue={item.TodaysDate}  ref={input5}/> } */}
//                    {item.completed ? <h4 className="text-danger" >  Date Of Completed {item.DateOfCompleted} </h4> : <h4></h4>}

//                     { show ? <button onClick={()=>{  ;    setShow(false); editTask(item.id)   }} className="btn btn-outline-primary m-3">Edit Task</button> :
//                     <button onClick={()=>{    Update(item.id) ;  setShow(true)  }} className="btn btn-outline-primary m-3">Update Task</button>}


//                         <button onClick={()=>{Delete(item.id)}} className="btn btn-outline-danger m-3">Delete Task</button>
//                        <button onClick={()=>{complete(item.id) ; }} className="btn btn-outline-success" >  {item.completed ? <> Incompleted</> : <> Completed</>}</button>

//                 </div>

//             )


//                                  }      )) : <h1>No have Tasks </h1>



        

//         }


//     </div>

    
// </div>


// )



// }