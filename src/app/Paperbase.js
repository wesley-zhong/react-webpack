import React from 'react';
import PropTypes from 'prop-types';
import {MuiThemeProvider, createMuiTheme, withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Navigator from './Navigator';
import Header from './Header';
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

const drawerWidth = 256;

const styles = {
    root: {
        display: 'flex',
        minHeight: '100vh',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
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

class Paperbase extends React.Component {
    state = {
        mobileOpen: false,
        tabs: [],
        activeIndex :0
    };

    handleDrawerToggle = () => {
        console.log("aaaaaaaaaa", !this.state.mobileOpen)
        this.setState(state => ({mobileOpen: !state.mobileOpen}));
    };

    handleDexpan = () => {
        console.log("this.state.navExpand", !this.state.navExpand)
        this.setState({navExpand: !this.state.navExpand})
    }

    handleNavigateClick(menuItem){
        const {tabs} = this.state;
        let activeIndex = tabs.length;
        for(var i = 0 ; i < tabs.length; ++i){
            tabs[i].active = false;
            if(tabs[i].id == menuItem.id){
                tabs[i].active = true;
                activeIndex = i;
                this.setState({activeIndex:activeIndex})
                return;
            }
        }

        let component = this.getPathComponent(menuItem.path);
        menuItem.component = component;
        tabs.push(menuItem)
        this.setState({tabs:tabs,activeIndex:activeIndex})
    }

    getPathComponent(path){
        for(var i = 0 ; i < rootRoute.length; ++i){
           if(rootRoute[i].path == path){
               return rootRoute[i].component;
           }
        }
        return null;
    }

    handleTabSelect(index){
        const {tabs, activeIndex} = this.state;
        if(index == activeIndex)
            return ;
        if(index == tabs.length){
            index = tabs.length - 1;
        }
        this.setState({activeIndex:index})
    }

    handelClose(index){
        console.log("nnnnnnnn  close index ", index)
        const {tabs} = this.state;
        tabs.splice(index, 1)
        let actIndex  = tabs.length -1;
        if(index < actIndex ){
            actIndex = index
        }
        this.setState({tabs:tabs,activeIndex:actIndex})
    }


    render() {
        const {classes} = this.props;
        const {tabs, activeIndex} = this.state;
        return (
            <MuiThemeProvider theme={theme}>
                <div className={classes.root}>
                    <CssBaseline/>
                    <nav className={classes.drawer}>
                        <Hidden xsDown implementation="js">
                            <Navigator PaperProps={{style: {width: drawerWidth}}} onMenuItemClick={this.handleNavigateClick.bind(this)}/>
                        </Hidden>
                    </nav>
                    <div className={classes.appContent}>
                        <Header onDrawerToggle = {this.handleDrawerToggle} onExpand={this.handleDexpan.bind(this)}/>
                        <main className={classes.mainContent}>
                            <FullWidthTabs tabs = {tabs}  activeIndex={activeIndex}
                                           handleTabSelect ={this.handleTabSelect.bind(this)}
                                           handelClose = {this.handelClose.bind(this)}/>
                        </main>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

Paperbase.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Paperbase);
