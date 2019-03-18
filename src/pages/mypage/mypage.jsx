import "./my.less"
import './myless2.less'
import React from 'react';
import {Component} from 'refast'
import Commest from "../../components/mycomponent/Comtest"

class MyPage extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <Commest/>
        )
    }
}

export default MyPage;
