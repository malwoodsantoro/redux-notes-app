import React from 'react';
import './App.css';
import { CreateNote } from './components/CreateNote';
import { useDispatch, useSelector } from 'react-redux';
import { NotesState } from './redux/reducers/notes';
import { addNote } from "./redux/actions/actions";

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>((state) => state.notes)
  const dispatch = useDispatch()

  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };

  return (
    <div className="container">
      <CreateNote addNote={onAddNote} />
      <ul>
        {notes.map((note) => {
          return <li key={note}>{note}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;