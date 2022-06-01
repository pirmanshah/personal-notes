import React from "react";

class NoteMenu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchText: '',
        }
        this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
    }

    onSearchEventHandler(event) {
        this.setState({
            searchText: event.target.value
        });
        this.props.onSearch(this.state)
    } 

    render() {
       
        const searchText = this.state.searchText
        return (
            <div className="note-menu">
                <ul>
                    <li className={!this.props.showArchive ? 'active' : ''} onClick={() => this.props.onClickMenu(false)}>Active Note</li>
                    <li className={this.props.showArchive ? 'active' : ''} onClick={() => this.props.onClickMenu(true)}>Archived</li>
                </ul>
                <input 
                  type="text" 
                  className="input" 
                  placeholder="Search..." 
                  value={searchText}
                  onChange={this.onSearchEventHandler}
                  onKeyUp={this.onSearchEventHandler}
                />
            </div>
        );
    }
}

export default NoteMenu;