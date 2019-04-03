import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
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
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {Component} from "refast";
import grey from '@material-ui/core/colors/grey'

const white = grey[50];
// this should come from server
const categories = [
    {
        id: '业务单据',
        expand: true,
        children: [
            {id: '业务单据-form', icon: <PeopleIcon/>, active: true,},
            {id: '拖拽', icon: <DnsRoundedIcon/>, path: "/dnd",},
            {id: 'jqxGrid', icon: <PermMediaOutlinedIcon/>, path: "/jqxGrid"},
            {id: 'uxCoreForm', icon: <PublicIcon/>, path: "/Uxform"},
            {id: 'muiForm', icon: <SettingsEthernetIcon/>, path: "/Muiform"},
            {id: 'ML Kit', icon: <SettingsInputComponentIcon/>, path: "/jqxGrid"},
        ],
    },
    {
        id: '基础资料',
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

    handleItemClick(id) {
        const {onMenuItemClick} = this.props;
        for (var i = 0; i < categories.length; ++i) {
            let menuItems = categories[i].children;
            for (var ii = 0; ii < menuItems.length; ++ii) {
                menuItems[ii].active = false;
                if (menuItems[ii].id == id) {
                    menuItems[ii].active = true;
                    onMenuItemClick(menuItems[ii])
                }
            }
        }
        this.setState({});
    }

    render() {
        const {classes, onMenuItemClick, handleDrawerClose,theme,...other} = this.props;
        return (

                <List disablePadding>
                    <ListItem className={classNames(classes.firebase, classes.item, classes.itemCategory)}>
                        <ListItemText
                            classes={{
                                primary: classes.itemPrimary,
                            }}
                        >
                           aa
                        </ListItemText>
                        <IconButton >
                            <ChevronLeftIcon  onClick={handleDrawerClose} />
                        </IconButton>
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
                            bb
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
                                }}/> : <ExpandMore classes={{
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
                                        onClick={this.handleItemClick.bind(this, childId)}
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

        );
    }
}

Navigator.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);
