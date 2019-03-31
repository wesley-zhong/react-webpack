import React from 'react';
import ReactDOM from 'react-dom';

import "./app.less"
import DB from './db';
import Refast from 'refast';
import LogicRender from 'refast-logic-render';
import { Message, Dialog, EmptyData } from 'uxcore';
import { assign } from 'lodash';
import  {BasicRoute}   from "./routes.jsx";

// Refast 文档请看 https://recore.github.io/refast-docs/
Refast.use('fn', {
    message: Message,
    dialog: Dialog,
    DB,
});

const Loading = () => <div className="kuma-loading" />;
const Empty = EmptyData || (() => <div>暂无数据</div>);

// 修改 LogicRender 增加默认配置
// 用来自定义Loading和Empty的样式
assign(LogicRender.defaultProps, { Empty, Loading });

ReactDOM.render(<BasicRoute/>, document.querySelector('#app'));