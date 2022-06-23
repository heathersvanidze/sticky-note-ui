import React from "react";

const Note = (props) => {
  const updateTitle = (e) => {
    const updatedValue = e.target.value;
    const editMeId = props.note.id;
    props.onType(editMeId, "title", updatedValue);
  };
  const updateDescription = (e) => {
    const updatedValue = e.target.value;
    const editMeId = props.note.id;
    props.onType(editMeId, "description", updatedValue);
  };
  const deleteByIndex = () => props.removeNote(props.note.id);

  return (
    <li className="note">
      <input
        className="note__title"
        type="text"
        placeholder="Title"
        onChange={updateTitle}
        value={props.note.title}
      />
      <textarea
        value={props.note.description}
        className="note__description"
        placeholder="Description..."
        onChange={updateDescription}
      />
      <span onClick={deleteByIndex} className="note__delete">
        X
      </span>
    </li>
  );
};

export default Note;
