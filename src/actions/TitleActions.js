import axios from "axios";

export const getList = () => async (dispatch) => {
  try {
    const { data } = await  axios.get("/api/v1/lists");
    dispatch({ type: "LIST_SUCCESS", payload: data });
  } catch (error) {
    console.log(error);
  }
};


export const postTitle = (obj) => async (dispatch) => {
  try {
    const { data } = await  axios.post("/api/v1/lists",obj);
    dispatch({ type: "LIST_POST_SUCCESS", payload: data });
  } catch (error) {
      
    console.log(error);
  }
};

export const TitlebyId = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/v1/lists/${id}`);
    dispatch({ type: "LIST_TITLEID_SUCCESS", payload: data });
  } catch (error) {

    console.log(error);
  }
};

export const DeleteTitle = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/v1/lists/${id}`);
    dispatch({ type: "LIST_DELETE"});
  } catch (error) {

    console.log(error);
  }
};




