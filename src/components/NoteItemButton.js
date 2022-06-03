import React from "react";

export default function NoteItemButton({ id, archived, onArchive, onDelete }) {
    return (
        <div className="note-item__button">
            <a 
              className="delete" 
              href="#!" 
              onClick={() => onDelete(id)}>
                Delete
            </a>
            <a 
              className="archive" 
              href="#!" 
              onClick={() => onArchive(id)}>
                {archived ? 'Unarchive' : 'Archive'}
            </a>
        </div>
    );
}
