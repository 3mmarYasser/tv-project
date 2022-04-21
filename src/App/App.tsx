import React from 'react';
import {BrowserRouter as Router, Routes} from "react-router-dom";
import {Route} from "react-router";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import Header from "../components/Header/Header";
import Styles from "./App.module.scss"
import classNames from "classnames";


const App: React.FC = () => {
    return (
        <div className={classNames([Styles.App], 'overflow-visible text-white')}>
            <Router>
                <Header/>
                <div>
                    <Routes>
                        <Route index element={<HomeScreen/>}/>
                        <Route path="*" element={<h1 className="mt-[100px] text-red-700">404 Page</h1>}/>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
