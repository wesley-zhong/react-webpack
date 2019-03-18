import React from 'react';
import {Component} from  'refast'

import "./jqxGridDemo.less"
import * as logic from './logic';

import JqxGrid,{jqx}  from 'jqwidgets-scripts/jqwidgets-react/react_jqxgrid'
export  default  class MyPage extends  Component {
    constructor(props) {
        super(props, logic);
    };

    render() {
        let source =
            {
                datatype: 'json',
                datafields: [
                    { name: 'name', type: 'string' },
                    { name: 'type', type: 'string' },
                    { name: 'calories', type: 'int' },
                    { name: 'totalfat', type: 'string' },
                    { name: 'protein', type: 'string' }
                ],
                id: 'id',
                url: '/mock/productions'
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let columns =
            [
                { text: 'Name', datafield: 'name', width: 250 },
                { text: 'Beverage Type', datafield: 'type', width: 250 },
                { text: 'Calories', datafield: 'calories', width: 180 },
                { text: 'Total Fat', datafield: 'totalfat', width: 120 },
                { text: 'Protein', datafield: 'protein', minwidth: 120 }
            ];

        return (
            <div style={{ fontSize: 13, fontFamily: 'Verdana', float: 'left' }}>
                <JqxGrid
                    width={850} source={dataAdapter} columnsresize={true} columns={columns}
                />
            </div>
        )
    }

}