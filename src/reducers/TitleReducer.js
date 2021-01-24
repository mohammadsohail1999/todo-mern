export const TitleReducer = (state = { List: [] }, action) => {
  switch (action.type) {
    case "LIST_SUCCESS":
      return {...action.payload };

    default:
      return state;
  }
};

export const PostTitleReducer = (state = {Title: null }, action) => {
  switch (action.type) {
    case "LIST_POST_SUCCESS":
      return {...action.payload};

     case "LIST_POST_CLEAR":

     return {Title:null}

    default:
      return state;
  }
};

export const TitlebyidReducer = (state = {Title: null }, action) => {
  switch (action.type) {
    case "LIST_TITLEID_SUCCESS":
      return {...action.payload};

     case "LIST_TITLEID_CLEAR":

     return {Title:null}

    default:
      return state;
  }
};
