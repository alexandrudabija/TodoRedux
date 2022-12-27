import {createSlice} from "@reduxjs/toolkit";



 const initialState =[]
  


  


const  taskSlice = createSlice({

name: "Tasks" ,

initialState :JSON.parse(localStorage.getItem("Tasks"))|| initialState   ,
//valoarea initiala 
reducers :{

addTask :(state,action) =>
{
// state.value.id =Date.now();
// state.value.TodaysDate =Date.now().toLocaleString();



state.push(action.payload);
// asa putem trimite tabloul in state

}, Delete :(state,action)=>
{
// localStorage.setItem("Tasks",JSON.stringify())
   return state.filter((item)=> item.id!=action.payload.id)

} ,


Update :(state,action) =>
{
// const {a,b,c,d} =action.payload
return state.map((item)=> {

if (item.id ===action.payload.id)
{

  
return { ...item  ,
    TaskName : action.payload.input1 ,
    TaskContent : action.payload.input2,
   Until : action.payload.input3,
    difficulty :action.payload.input4,
    TodaysDate : action.payload.input5,
    }
}


else { return item;} //in caz ca nu e id-ul care ne trebuie


})

},

complete :(state,action) =>{


   return state.map((item)=>{


if (item.id===action.payload.id)
{
     return { 
        ...item  , completed : !item.completed,
     DateOfCompleted :new Date().toLocaleString()
    
    
    } 
    
    
    
    }
 
    else { return item;} //in caz ca nu e id-ul care ne trebuie
  })

}









}




})


export const {addTask,Delete ,Update ,complete} = taskSlice.actions

export default taskSlice.reducer