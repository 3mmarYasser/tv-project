import React from 'react';
import {BrowserRouter as Router, Routes} from "react-router-dom";
import {Route} from "react-router";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import Header from "../components/Header/Header";
import Styles from "./App.module.scss"
import classNames from "classnames";

const App: React.FC = () => {
    return (
        <div className={classNames([Styles.App], 'overflow-visible')}>
            <Router>
                <Header/>
                <div>
                    <Routes>
                        <Route index element={<HomeScreen/>}/>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
