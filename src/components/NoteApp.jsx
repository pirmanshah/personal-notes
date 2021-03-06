import React from "react";
import autoBind from 'auto-bind';
import NoteInput from "./NoteInput";
import NoteMenu from "./NoteMenu";
import NoteList from "./NoteList";
import { getInitialData } from '../utils/data';

class NoteApp extends React.Component {

    constructor(props) {
        super(props);
        autoBind(this);

        this.state = {
            notes: getInitialData(),
            filteredText: '',
            showArchive: false
        }
    }

    onAddNoteHandler({ title, body }) {
        this.setState(prevState => {
          return {
            notes: [
                    ...prevState.notes,
                    {
                        id: new Date(),
                        title,
                        body,
                        createdAt: new Date(),
                        archived: false,
                    }
                ]
            }
        });
    }

    onSearchNoteHandler({ searchText }) {
       this.setState(prevState => {
        return {
            ...prevState,
            filteredText: searchText.toLowerCase()
          }
       });
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onArchiveHandler(id) {
        const notes = this.state.notes;
        this.setState(prevState => ({
            ...prevState, 
            notes: notes.map((note) =>
              note.id === id
                ? {
                    ...note, 
                    archived: !note.archived,
                  }
                : note,
            ),
        }));
    }

    onClickMenuHandler(val) {
        this.setState(prevState => {
            return {
                ...prevState,
                showArchive: val
            }
        });
    } 

    render() {
        return (
            <div className="note-app">
                <h1>Personal Notes</h1>
                <NoteInput 
                  remainChar={50}
                  addNote={this.onAddNoteHandler} 
                />
                <NoteMenu 
                  onSearch={this.onSearchNoteHandler} 
                  showArchive={this.state.showArchive}
                  onClickMenu={this.onClickMenuHandler}
                />
                <NoteList 
                  notes={this.state.notes} 
                  onDelete={this.onDeleteHandler} 
                  onArchive={this.onArchiveHandler}
                  showArchive={this.state.showArchive}
                  filteredText={this.state.filteredText} 
                />
            </div>
        )
    }
}

export default NoteApp;