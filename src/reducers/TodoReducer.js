export const TodoReducer = (state = [], action) => {
  
    switch (action.type) {
    case "TODOS_SUCCESS":
      return [...action.payload];

      case "TODO_CREATE":
          return [...state,action.payload]

       case  "TODO_UPDATE":
         
       return state.map(el=>el._id === action.payload._id ? action.payload : el)

        case "TODO_DELETE": 
        return state.filter(el=>el._id !== action.payload)
        
    default:
      return state;
  }
};
