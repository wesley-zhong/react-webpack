import React from 'react';
import {Component} from 'react';
import Close from '@material-ui/icons/Close'
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
                  direction="row"
                  justify="space-evenly"
                  alignItems="center">
                <Grid item xs={8}>
                    {tab}
                </Grid>
                <Grid item  xs = {4} >
                    <Close fontSize={"small"}  onClick={onClose.bind(t,index)}/>
                </Grid>
            </Grid>
        );
    }
}

export default WdTabpaneTab;
