import React  from 'react';

import {HashRouter, Route, Switch, Link} from 'react-router-dom';

import Dnd from '../pages/dnd';
import Jqgrid from '../pages/jqxGridPage';
import Uxform from '../pages/UxCoreForm';
import Paperbase from "./Paperbase"
import MuiForm from  "../pages/MuiForm"
import MainFroma from "./Main"

const App = () => (
    <div>
        <MainFroma />
    </div>
);

const rootRoute = [
    {
        path: "/jqxGrid",
        component: <Jqgrid />
    },
    {
        path: "/dnd",
        component: <Dnd />
    },
    {
        path:"/Uxform",
        component:<Uxform/>
    },
    {
        path:"/Muiform",
        component:<MuiForm/>
    }
];


const BasicRoute = () => {
    return (<HashRouter>
        <Switch>
            <Route  exact  path={"/dnd"} component ={Dnd}/>
            <Route component={App} />
        </Switch>
    </HashRouter>)
};

export  {BasicRoute, rootRoute};
