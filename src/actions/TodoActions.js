import axios from "axios";

export const getAllTodos = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/v1/todos");

    console.log(data.Todos);

    const Todos = data.Todos.filter((el)=>{

      if(el.Title){
        return   el.Title._id === id
      }

      return null


    });

    dispatch({ type: "TODOS_SUCCESS", payload: Todos });
  } catch (error) {
    console.log(error);
  }
};

export const CreateTodo = (obj) => async (dispatch) => {
  try {
    const { data } = await axios.post("/api/v1/todos", obj);

    console.log(data);

    dispatch({ type: "TODO_CREATE", payload: data.CreatedTodo });
  } catch (error) {
    console.log(error);
  }
};



export const UpdateTodo = (obj,id) =>async(dispatch)=>{

    console.log(obj);

    try {
        
        const {data} = await  axios.patch(`/api/v1/todos/${id}`,obj);

        console.log(data);
        dispatch({type:'TODO_UPDATE',payload:data.updatedTodo })

    } catch (error) {
        console.log(error);
    }


}  



export const DeleteTodo = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/v1/todos/${id}`);

    dispatch({ type: "TODO_DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};
