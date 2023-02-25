import React, {useEffect, useState} from 'react';
import Header from "./Components/Header";
import './App.scss'
import MainFrame from "./Components/frames/MainFrame";
import About from "./Components/frames/About";
const App = () => {
    const [currentScroll, setCurrentScroll] = useState("");

    useEffect( () => {
        window.scrollTo({
            top: document.getElementsByClassName("about"),
        })
    },[currentScroll]);


    return (
        <div>
            <Header {...setCurrentScroll}/>
            <div className="header-block">
                .
            </div>

            <div className="main-block">
                <MainFrame/>
            </div>
            <div className="about-block">
                <About/>
            </div>

        </div>
    );
};

export default App;