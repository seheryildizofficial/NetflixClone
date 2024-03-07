import { combineReducers,createStore, applyMiddleware} from "redux"
import movieReducer from "./actions/reducers/movieReducer"
import { thunk } from "redux-thunk"
import genreReducer from './actions/reducers/genreReducer'

const rootReducer = combineReducers({
    movie: movieReducer,
    genre: genreReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk))