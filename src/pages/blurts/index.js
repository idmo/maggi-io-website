import React from "react";
import BlurtRoll from "../../components/BlurtRoll";
import Layout from "../../components/Layout";
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    main: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    title: {
        paddingBottom: `1rem`,
        fontWeight: `bold`,
    }
}));

const BlurtIndexPage = () => {
    const classes = useStyles();

    return (
        <Layout>
            <CssBaseline />
            <Container maxWith="lg">
                <Typography
                    component="h2"
                    variant="h5"
                    className={classes.title}
                >
                    Blurts
                </Typography>
                <BlurtRoll />
            </Container>
        </Layout>
    )
}

export default BlurtIndexPage;