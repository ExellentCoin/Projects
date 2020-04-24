import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import Clicked from './components/functionClick';

function App() {
    return (
        <div className="App">
            <Clicked />
        </div>
    );
}

export default App;
