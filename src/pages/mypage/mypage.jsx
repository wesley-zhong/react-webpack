import "./my.less"
import './myless2.less'
import React from 'react';
import {Component} from  'refast'
import Commest from "../../components/mycomponent/Comtest"
import JqxBarGauge from 'jqwidgets-scripts/jqwidgets-react/react_jqxbargauge.js';
 class MyPage extends React.Component {
    constructor(props) {
        super(props);
    };
     render() {
         const values = [102, 115, 130, 137];

         const tooltip = {
             visible: true,
             formatFunction: value => {
                 const realVal = parseInt(value);
                 return 'Year: 2016<br />Price Index:' + realVal;
             }
         };

         return (
             <JqxBarGauge
                 width={600} height={600}
                 max={150} values={values} tooltip={tooltip}
             />
         );
     }
}
export default MyPage;
