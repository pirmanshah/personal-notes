import React from "react";

class NoteInput extends React.Component {

    constructor(porps) {
        super(porps);

        this.state = {
            title: '',
            body: ''
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
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
        return parseInt(title.length)
    }

    onSubmitEventHandler(event) {
        event.preventDefault();

        this.props.addNote(this.state)
    }

    render() {

        const { remainChar } = this.props;
        const char = remainChar - this.countTitleLength(this.state.title);

        return (
            <React.Fragment>
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
                      required
                    />
                    <textarea 
                      className="input" 
                      rows="5" 
                      value={this.state.body} 
                      onChange={this.onBodyChangeEventHandler} 
                      placeholder="Description here..."
                      required>
                    </textarea>
                    <button type="submit">ADD NOTE</button>
                </form>
            </React.Fragment>
        );
    }
}

export default NoteInput;