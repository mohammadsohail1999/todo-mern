import {combineReducers} from 'redux';

import {TitleReducer,PostTitleReducer,TitlebyidReducer} from './reducers/TitleReducer';
import {TodoReducer} from './reducers/TodoReducer';
export const Reducer = combineReducers({

    

    List : TitleReducer,
    CreatedTitle: PostTitleReducer,
    TitlebyId: TitlebyidReducer,
    Todos: TodoReducer






})