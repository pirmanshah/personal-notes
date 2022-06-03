import React from "react";
import NoteItemBody from "./NoteItemBody";
import NoteItemButton from "./NoteItemButton";

export default function NoteItem({ id, title, body, archived, createdAt, onDelete, onArchive }) {
    return (
        <div className="note-item">
            <NoteItemBody 
              title={title} 
              body={body} 
              createdAt={createdAt} 
            />
            <NoteItemButton 
              id={id} 
              onDelete={onDelete} 
              onArchive={onArchive} 
              archived={archived} 
            />
        </div>
    );
}
