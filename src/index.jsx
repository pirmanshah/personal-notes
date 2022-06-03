import React from 'react';
import ReactDOM from 'react-dom/client';
import NoteApp from './components/NoteApp';

// Styling
import './styles/style.css';
import 'react-notifications/lib/notifications.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NoteApp/>);
