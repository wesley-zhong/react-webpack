import  "./my.less"
import React from 'react';
import { withRouter } from 'react-router';
import { Button } from 'uxcore';
import { Form } from 'uxcore';

const {
    InputFormField: Input,
    DateFormField: Date,
    TextAreaFormField: TextArea,
    OtherFormField: Other,
} = Form;


class Uxform extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    handleSubmit() {
        console.log(this.form.getValues());
    }

    render() {
        return (
            <div className="demo-basic">
                <Form ref={(c) => { this.form = c; }} className="demo-basic-form">
                    <Input jsxname="theme" jsxlabel="主题" jsxplaceholder="请输入主题" />
                    <Input jsxname="location" jsxlabel="地点" jsxplaceholder="请输入地点" />
                    <Date jsxname="date" jsxlabel="时间" jsxtype="cascade" autoMatchWidth />
                    <TextArea jsxname="content" jsxlabel="内容" inputBoxMaxWidth="large" />
                    <Other>
                        <Button style={{ marginLeft: '88px', marginTop: '16px' }} onClick={() => { this.handleSubmit(); }}>确定</Button>
                    </Other>
                </Form>
            </div>
        );
    }
}


export default Uxform;
