import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});
class MuiForm extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="outlined-dense"
                    label="Dense"
                    className={classNames(classes.textField, classes.dense)}
                    margin="dense"
                    variant="outlined"
                />

            </form>
        );
    }
}


MuiForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MuiForm);
