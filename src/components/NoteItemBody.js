import React from "react";
import { showFormattedDate } from '../utils/data'

function NoteItemBody({ title, body, createdAt }) {
    
    const date = showFormattedDate(createdAt);

    return (
        <div className="note-item__body">
            <h3 className="note-item__title">{title}</h3>
            <small className="note-item__date">{date}</small>
            <p className="note-item__desc">{body}</p>
        </div>
    );
}

export default NoteItemBody;