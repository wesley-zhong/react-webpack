import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import PermMediaOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActual';
import PublicIcon from '@material-ui/icons/Public';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';
import TimerIcon from '@material-ui/icons/Timer';
import SettingsIcon from '@material-ui/icons/Settings';
import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {Component} from "refast";
import grey from '@material-ui/core/colors/grey'
const white = grey[50];
const categories = [
    {
        id: 'Develop',
        expand: true,
        children: [
            {id: 'Authentication', icon: <PeopleIcon/>, active: true},
            {id: 'Database', icon: <DnsRoundedIcon/>},
            {id: 'Storage', icon: <PermMediaOutlinedIcon/>},
            {id: 'Hosting', icon: <PublicIcon/>},
            {id: 'Functions', icon: <SettingsEthernetIcon/>},
            {id: 'ML Kit', icon: <SettingsInputComponentIcon/>},
        ],
    },
    {
        id: 'Quality',
        expand: false,
        children: [
            {id: 'Analytics', icon: <SettingsIcon/>},
            {id: 'Performance', icon: <TimerIcon/>},
            {id: 'Test Lab', icon: <PhonelinkSetupIcon/>},
        ],
    },
];

const styles = theme => ({
    categoryHeader: {
        paddingTop: 16,
        paddingBottom: 16,
    },
    categoryHeaderPrimary: {
        color: theme.palette.common.white,
    },
    item: {
        paddingTop: 4,
        paddingBottom: 4,
        color: 'rgba(255, 255, 255, 0.7)',
    },
    itemCategory: {
        backgroundColor: '#232f3e',
        boxShadow: '0 -1px 0 #404854 inset',
        paddingTop: 16,
        paddingBottom: 16,
    },
    firebase: {
        fontSize: 24,
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.common.white,
    },
    itemActionable: {
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
        },
    },
    itemActiveItem: {
        color: '#4fc3f7',
    },
    itemPrimary: {
        color: 'inherit',
        fontSize: theme.typography.fontSize,
        '&$textDense': {
            fontSize: theme.typography.fontSize,
        },
    },
    textDense: {},
    divider: {
        marginTop: theme.spacing.unit * 2,
    },
});


class Navigator extends React.Component {
    constructor(props) {
        super(props)
    }

    groupClick(id) {
        for (var i = 0; i < categories.length; ++i) {
            if (categories[i].id == id.id) {
                categories[i].expand = !categories[i].expand;
            }
        }
        this.setState({});
    }

    render() {
        const {classes, ...other} = this.props;
        return (
            <Drawer variant="permanent" {...other}>
                <List disablePadding>
                    <ListItem className={classNames(classes.firebase, classes.item, classes.itemCategory)}>
                        Paperbase
                    </ListItem>
                    <ListItem className={classNames(classes.item, classes.itemCategory)}>
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText
                            classes={{
                                primary: classes.itemPrimary,
                            }}
                        >
                            Project Overview
                        </ListItemText>
                    </ListItem>
                    {categories.map(({id, expand, children}) => (
                        <React.Fragment key={id}>
                            <ListItem className={classes.categoryHeader} onClick={this.groupClick.bind(this, {id})}>
                                <ListItemText
                                    classes={{
                                        primary: classes.categoryHeaderPrimary,
                                    }}
                                    inset
                                >
                                    {id}
                                </ListItemText>
                                {expand ? <ExpandLess classes={{
                                    root: classes.categoryHeaderPrimary,
                                }}/> : <ExpandMore  classes={{
                                    root: classes.categoryHeaderPrimary,
                                }}/>}
                            </ListItem>
                            <Collapse in={expand} timeout="auto" unmountOnExit>
                                {children.map(({id: childId, icon, active}) => (
                                    <ListItem
                                        button
                                        dense
                                        key={childId}
                                        className={classNames(
                                            classes.item,
                                            classes.itemActionable,
                                            active && classes.itemActiveItem,
                                        )}
                                    >
                                        <ListItemIcon>{icon}</ListItemIcon>
                                        <ListItemText
                                            classes={{
                                                primary: classes.itemPrimary,
                                                textDense: classes.textDense,
                                            }}
                                        >
                                            {childId}
                                        </ListItemText>
                                    </ListItem>
                                ))}
                            </Collapse>
                            <Divider className={classes.divider}/>
                        </React.Fragment>
                    ))}
                </List>
            </Drawer>
        );
    }
}

Navigator.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(Navigator);
