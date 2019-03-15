import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import MyPage from "../pages/mypage"
import PageHome  from "../pages/dnd"

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