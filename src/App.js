import React, {useEffect, useState} from 'react';
import Header from "./Components/Header";
import './App.scss'
import MainFrame from "./Components/frames/MainFrame";
import About from "./Components/frames/About";
const App = () => {
    const [currentScroll, setCurrentScroll] = useState("");

    useEffect( () => {
        window.scrollTo({
            top: document.getElementsByClassName("main"),
        })
    },[currentScroll]);

    return (
        <div>
            <Header {...setCurrentScroll}/>
            <div className="header">
                .
            </div>

            <div className="main">
                <MainFrame/>
            </div>
            <div className="about">
                <About/>
            </div>

        </div>
    );
};

export default App;