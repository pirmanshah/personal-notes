import React from "react";
import NoteItem from "./NoteItem";
import catsImage from '../img/cats.png';

export default function NoteList({ notes, filteredText, onDelete, onArchive, showArchive }) {

    const filteredNotes = notes.filter((note) => note.title.toLowerCase().indexOf(filteredText) > -1 && note.archived === showArchive)

    if(filteredNotes.length === 0) {
        return (
            <React.Fragment>
                <img className="note-app__cats" src={catsImage} alt="Cats" />
                <h2 className='note-app__fallback'>No notes</h2>
            </React.Fragment>
        )
    }

    return (
        <div className="note-list">
            {   
                filteredNotes
                .sort((a,b) => new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1)
                .map((note) => <NoteItem key={note.id} id={note.id} archived={note.archived} onDelete={onDelete} onArchive={onArchive} {...note} />)
            }
        </div>
    );
}
