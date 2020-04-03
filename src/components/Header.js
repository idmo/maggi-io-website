import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link } from 'gatsby';


const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid $(theme.palette.divider)`,
        padding: theme.spacing(2),
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
    navMenu: {
        paddingBottom: theme.spacing(4),
    }

}));

const Header = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Toolbar className={classes.toolbar}>
                    <Typography
                        component="h2"
                        variant="h4"
                        color="inherit"
                        align="center"
                        noWrap
                        className={classes.toolbarTitle}>
                        Brian Maggi
                </Typography>
                </Toolbar>
                <NavMenu />
            </Container>
        </React.Fragment>
    )
}

Header.propsTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};

export default Header;

const NavMenu = () => {
    const classes = useStyles();
    return (
        <nav className={classes.navMenu}>
            <Link to="/">Home</Link>{" "}
            <Link to="/blog">Blog</Link>{" "}
            <Link to="/blurts">Blurts</Link>{" "}
        </nav>
    )
}