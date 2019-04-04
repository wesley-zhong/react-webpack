import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import WdTabpaneTab from '../components/wd_tabpane_tab/WdTabpaneTab'

function TabContainer({children, dir}) {
    return (
        <Typography component="div" dir={dir} variant='body2'>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.default,
    },
});

class FullWidthTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        const {handleTabSelect} = this.props;
        handleTabSelect(value)
    };

    handleChangeIndex = index => {
        console.log("nnnnnnnn  change index ", index)
        this.setState({value: index});
    };

    handelTabClose(index) {
        const {handelClose} = this.props;
        handelClose(index)
    }


    createTable(tabName, key) {
        return (<WdTabpaneTab tab={tabName} index={key} onClose={this.handelTabClose.bind(this, key)}/>)

    }

    render() {
        const {classes, tabs, theme, activeIndex} = this.props;
        let t = this;
        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    {
                        tabs.length > 0 ?
                            <Tabs
                                value={activeIndex}
                                onChange={this.handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                variant="scrollable"
                                scrollButtons="auto"
                            >
                                {
                                    tabs.map(function (item, key) {
                                        return <Tab key={key} label={t.createTable(item.id, key)}/>
                                    })
                                }
                            </Tabs> : ""
                    }
                </AppBar>
                {
                   // tabs.length > 0 ?
                     //   <TabContainer dir={theme.direction}>{tabs[activeIndex].component}</TabContainer> : ""
                    tabs.map(function (item, key) {
                        return (
                            activeIndex === key && <TabContainer dir={theme.direction}  key = {key}>{tabs[key].component}</TabContainer>
                        )
                    })
                }
            </div>
        );
    }
}

FullWidthTabs.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(FullWidthTabs);
