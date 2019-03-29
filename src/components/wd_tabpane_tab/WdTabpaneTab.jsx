import React from 'react';
import {Component} from 'react';
import Close from '@material-ui/icons/Close'
import './WdTabpaneTab.less';
import Grid from '@material-ui/core/Grid';

class WdTabpaneTab extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        let t = this;
        const {tab, onClose, index} = this.props;
        return (
            <Grid container
                  spacing={8}
                  alignItems={"center"}>
                <Grid item xs={7}>
                    {tab}
                </Grid>
                <Grid item  xs = {1}>
                    <Close fontSize={"small"} onClick={onClose.bind(t, tab)}/>
                </Grid>
            </Grid>
        );
    }
}

export default WdTabpaneTab;
