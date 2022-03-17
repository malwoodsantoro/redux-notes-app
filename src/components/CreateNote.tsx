import React, { ChangeEvent } from "react";

interface CreateNoteInputProps {
  addNote(note: string): void;
}

export const CreateNote: React.FC<CreateNoteInputProps> = ({ addNote }) => {

  const [note, setNote] = React.useState("");

  const updateNote = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNote(event.target.value)
  }

  const onAddNoteClick = () => {
    addNote(note)
    setNote("")
  }

  return (
    <div>
      <div>
        <textarea
          onChange={updateNote}
          value={note}
          name="note"
          placeholder="Note"
        />
      </div>
      <div className="buttonContainer">
        <button onClick={onAddNoteClick}>Add note</button>
      </div>
    </div>
  );
};

