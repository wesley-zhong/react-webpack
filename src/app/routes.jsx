import React, {cloneElement} from 'react';
import {Menu} from 'uxcore';

// `ReactRouter`文档请看  https://github.com/ReactTraining/react-router/tree/v2.8.1
import {HashRouter, Route, Switch, Link} from 'react-router-dom';

import Dnd from '../pages/dnd';
import Jqgrid from '../pages/jqxGridPage';
import Mypage from '../pages/mypage';
import Paperbase from  "./Paperbase"
import MainFrame from "./MainFrame"

// Define webpack publicPath at runtime
// __webpack_public_path__ = ((s) => (
//   s[s.length - 1].src.replace(/\/[^\/]+$/, '/')
// ))(document.getElementsByTagName('script'));

// `ReactRouter`文档请看  https://github.com/ReactTraining/react-router/tree/v2.8.1
const App = ({ children, location, routes }) => (
    <div>
        {/*<Paperbase />*/}
        <MainFrame/>
    </div>
);
//
// const rootRoute = {
//   childRoutes: [{
//     path: '/',
//     component: App,
//     // 这里可以设置首页跳转的地址
//     indexRoute: { onEnter: (nextState, replace) => replace('/home') },
//     childRoutes: [
//       // 新建页面时，请注意更新此处的路由
//       homeRoute,
//       demoRoute,
//       // error因为是泛匹配，所以要放到下面
//       // 不然会覆盖前面的
//       errorRoute,
//     ],
//   }],
// };
const BasicRoute = () => {
    return (<HashRouter>
            <Switch>
                {/*<Route exact path="/" component={Dnd}/>*/}
                <Route exact path="/about" component={Jqgrid}/>
                <Route exact path="/repos" component={Mypage}/>
                <Route component={App}/>
            </Switch>
    </HashRouter>)
};
export default BasicRoute;
