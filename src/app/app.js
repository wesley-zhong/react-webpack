import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import MyPage from "../pages/testweb/mypage"
import PageHome  from "../pages/dnd/PageHome"

const  App=()=> {
    return (
        <div>
            <Button variant="contained" color="primary">
                Hello World
            </Button>
            <MyPage/>
            <PageHome />
        </div>
    );
}
export default App;
ReactDOM.render(<App/>, document.querySelector('#app'));