import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {MyWorks} from "./my-works/MyWorks";
import {RemoteWork} from "./remote-work/RemoteWork";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <RemoteWork/>
        </div>
    );
}

export default App;
