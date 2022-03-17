import {createStore} from 'redux';
import { notesReducer } from './redux/reducers/notes';

export const store = createStore(notesReducer)