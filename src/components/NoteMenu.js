import React from 'react';


export default function NoteMenu({ showArchive, onClickMenu, onSearch }) {
  const onSearchEventHandler = (event) => {
    onSearch({
      searchText: event.target.value,
    });
  };
  return (
    <div className="note-menu">
      <ul>
        <li 
          className={!showArchive ? 'active' : ''} 
          onClick={() => onClickMenu(false)}>
            Active Note
        </li>
        <li 
          className={showArchive ? 'active' : ''} 
          onClick={() => onClickMenu(true)}>
            Archived
        </li>
      </ul>
      <input
        type="text"
        className="input"
        placeholder="Search your notes..."
        onChange={onSearchEventHandler}
      />
    </div>
  );
}