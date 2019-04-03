import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {createMuiTheme, MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Navigator from "./Navigator";
import {rootRoute} from "./routes";
import FullWidthTabs from "./DragTabs"

let theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        h5: {
            fontWeight: 500,
            fontSize: 26,
            letterSpacing: 0.5,
        },
    },
    palette: {
        primary: {
            light: '#63ccff',
            main: '#009be5',
            dark: '#006db3',
        },
    },
    shape: {
        borderRadius: 8,
    },
});

theme = {
    ...theme,
    overrides: {
        MuiDrawer: {
            paper: {
                backgroundColor: '#18202c',
            },
        },
        MuiButton: {
            label: {
                textTransform: 'initial',
            },
            contained: {
                boxShadow: 'none',
                '&:active': {
                    boxShadow: 'none',
                },
            },
        },
        MuiTabs: {
            root: {
                marginLeft: theme.spacing.unit,
            },
            indicator: {
                height: 3,
                borderTopLeftRadius: 3,
                borderTopRightRadius: 3,
                //  backgroundColor: theme.palette.common.white,
            },
        },
        MuiTab: {
            root: {
                textTransform: 'initial',
                margin: '0 16px',
                minWidth: 0,
                [theme.breakpoints.up('md')]: {
                    minWidth: 0,
                },
            },
            labelContainer: {
                padding: 0,
                // [theme.breakpoints.up('md')]: {
                //     padding: 0,
                // },
            },
        },
        MuiIconButton: {
            root: {
                padding: theme.spacing.unit,
            },
        },
        MuiTooltip: {
            tooltip: {
                borderRadius: 4,
            },
        },
        MuiDivider: {
            root: {
                backgroundColor: '#404854',
            },
        },
        MuiListItemText: {
            primary: {
                fontWeight: theme.typography.fontWeightMedium,
            },
        },
        MuiListItemIcon: {
            root: {
                color: 'inherit',
                marginRight: 0,
                '& svg': {
                    fontSize: 20,
                },
            },
        },
        MuiAvatar: {
            root: {
                width: 32,
                height: 32,
            },
        },
    },
    props: {
        MuiTab: {
            disableRipple: true,
        },
    },
    mixins: {
        ...theme.mixins,
        toolbar: {
            minHeight: 48,
        },
    },
};

const drawerWidth = 240;

const styles = {
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    appContent: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    mainContent: {
        flex: 1,
        background: '#eaeff1',
    },
};

class PersistentDrawerLeft extends React.Component {
    state = {
        open: true,
        tabs: [],
        activeIndex: 0
    };

    handleDrawerOpen = () => {
        this.setState({open: true});
    };

    handleDrawerClose = () => {
        this.setState({open: false});
    };


    handleNavigateClick(menuItem) {
        const {tabs} = this.state;
        let activeIndex = tabs.length;
        for (var i = 0; i < tabs.length; ++i) {
            tabs[i].active = false;
            if (tabs[i].id == menuItem.id) {
                tabs[i].active = true;
                activeIndex = i;
                this.setState({activeIndex: activeIndex})
                return;
            }
        }

        let component = this.getPathComponent(menuItem.path);
        menuItem.component = component;
        tabs.push(menuItem)
        this.setState({tabs: tabs, activeIndex: activeIndex})
    }

    getPathComponent(path) {
        for (var i = 0; i < rootRoute.length; ++i) {
            if (rootRoute[i].path == path) {
                return rootRoute[i].component;
            }
        }
        return null;
    }

    handleTabSelect(index) {
        const {tabs, activeIndex} = this.state;
        if (index == activeIndex)
            return;
        if (index == tabs.length) {
            index = tabs.length - 1;
        }
        this.setState({activeIndex: index})
    }

    handelClose(index) {
        console.log("nnnnnnnn  close index ", index)
        const {tabs} = this.state;
        tabs.splice(index, 1)
        let actIndex = tabs.length - 1;
        if (index < actIndex) {
            actIndex = index
        }
        this.setState({tabs: tabs, activeIndex: actIndex})
    }


    render() {
        const {classes} = this.props;
        const {open, tabs, activeIndex} = this.state;
        {
            console.log("bbbbbbbbbbbbbbbbbbbbbbbb  open = ", open)
        }
        return (
            <div className={classes.root}>
                <MuiThemeProvider theme={theme}>

                    <CssBaseline/>
                    <AppBar
                        position="fixed"
                        className={classNames(classes.appBar, {
                            [classes.appBarShift]: open,
                        })}
                    >
                        <Toolbar disableGutters={!open}>
                            <IconButton
                                color="inherit"
                                aria-label="Open drawer"
                                onClick={this.handleDrawerOpen}
                                className={classNames(classes.menuButton, open && classes.hide)}
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant="h6" color="inherit" noWrap>
                                Persistent drawer
                            </Typography>
                        </Toolbar>
                    </AppBar>

                    <Drawer
                        className={classes.drawer}
                        variant="persistent"
                        anchor="left"
                        open={open}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <Navigator PaperProps={{style: {width: drawerWidth}}}
                                   onMenuItemClick={this.handleNavigateClick.bind(this)}
                                   handleDrawerClose={this.handleDrawerClose.bind(this)}/>
                    </Drawer>
                </MuiThemeProvider>
                <main
                    className={classNames(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.drawerHeader}/>
                    <FullWidthTabs tabs={tabs} activeIndex={activeIndex}
                                   handleTabSelect={this.handleTabSelect.bind(this)}
                                   handelClose={this.handelClose.bind(this)}/>
                </main>
            </div>
        );
    }
}

PersistentDrawerLeft.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PersistentDrawerLeft);
