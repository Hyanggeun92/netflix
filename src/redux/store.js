import { createStore, applyMiddleware } from 'redux'; 
//reducer가 여러 개일 경우, 복잡하게 얽혀있을 때
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

let store = createStore (
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;