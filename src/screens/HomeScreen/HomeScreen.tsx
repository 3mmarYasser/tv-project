import React from 'react';
import Banner from "../../components/Banner/Banner";
import {GetTrending} from "./HomeScreen.service";

const HomeScreen: React.FC = () => {
        const {data ,loading} = GetTrending();
        console.log(loading)
        console.log(data)
    return (
        <div>
            <Banner/>
            <h1>test1</h1>
            <h1>test1</h1>
            <h1>test1</h1>
            <h1>test1</h1>
            <h1>test1</h1>
            <h1>test1</h1>
            <h1>test1</h1>
            <h1>test1</h1>
            <h1>test1</h1>
            <h1>test1</h1>
            <h1>test1</h1>
            <h1>test1</h1>
            <h1>test1</h1>
            <h1>test1</h1>
            <h1>test1</h1>
            <h1>test1</h1>
            <h1>test1</h1>
            <h1>test1</h1>
        </div>
    );
};

export default HomeScreen;
