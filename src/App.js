import React, {useEffect, useState} from 'react';
import Header from "./Components/Header/Header";
import './App.scss'
import MainFrame from "./Components/frames/MainFrame";
import About from "./Components/frames/About";
const App = () => {
    const [currentScroll, setCurrentScroll] = useState("");

    const Func = (id) => {
        if(currentScroll!==id) {
            const element = document.getElementById(id);

            window.scrollTo({
                    top: element.offsetTop,
                    behavior: "smooth"
                }
            )
        }
    }


    return (
        <div>
            <Header Func={Func}/>
            <div className="header-block" id="header-block" >
                .
            </div>

            <div className="main-block" id="main-block" >
                <MainFrame/>
            </div>
            <div className="about-block" id="about-block" >
                <About/>
            </div>

        </div>
    );
};

export default App;