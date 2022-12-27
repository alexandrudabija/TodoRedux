import {configureStore} from "@reduxjs/toolkit";
import  taskReducer from '../features/task/TaskSlice'; //  taskSlice devine  taskReducer
//o exportam pentru index.js ca sa pumte utiliza si trimite in totate fisierele 
export default configureStore ({

reducer :{

Task : taskReducer

}



})

          






