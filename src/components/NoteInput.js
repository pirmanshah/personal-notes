import React from "react";
import autoBind from 'auto-bind';
import { NotificationContainer, NotificationManager } from 'react-notifications';

class NoteInput extends React.Component {

    constructor(porps) {
        super(porps);
        autoBind(this);

        this.state = {
            title: '',
            body: ''
        }
    }

    onTitleChangeEventHandler(event) {
        let maxLength = this.props.remainChar;
        if(this.countTitleLength(event.target.value) <= maxLength) {
            this.setState(prevState => {
                return {
                    ...prevState,
                    title: event.target.value,
                }
            });
        }
    }

    onBodyChangeEventHandler(event) {
        this.setState(prevState => {
            return {
                ...prevState,
                body: event.target.value
            }
        });
    }
 
    countTitleLength(title) {
        return parseInt(title.length);
    }

    onSubmitEventHandler(event) {
        event.preventDefault();

        if(this.state.title === '' || this.state.body === ''){
            NotificationManager.warning('Warning message', 'Please input all field!', 3000);
        } else {
            this.props.addNote(this.state);
            this.setState(() => {
                return {
                    title: '',
                    body: ''
                }
            });
            NotificationManager.success('Success message', 'Create note success!');
        }
    }

    render() {

        const { remainChar } = this.props;
        const char = remainChar - this.countTitleLength(this.state.title);

        return (
            <React.Fragment>
                <NotificationContainer/>
                <p>Characters remaining: {char}</p>
                <form 
                    className="note-form" 
                    onSubmit={this.onSubmitEventHandler}>
                    <input 
                      className="input" 
                      type="text" 
                      value={this.state.title} 
                      onChange={this.onTitleChangeEventHandler} 
                      placeholder="Title..."
                    />
                    <textarea 
                      className="input" 
                      rows="5" 
                      value={this.state.body} 
                      onChange={this.onBodyChangeEventHandler} 
                      placeholder="Description here...">
                    </textarea>
                    <button type="submit">ADD NOTE</button>
                </form>
            </React.Fragment>
        );
    }
}

export default NoteInput;