import { Box } from "@material-ui/core";
import Navbar from "./Components/Navbar";
import MainView from "./Components/MainView"
import { makeStyles } from "@material-ui/core";
import Footer from "./Components/Footer";

const useStyles = makeStyles(() => ({
    root: {
        background: 'inherit',
        paddingLeft: 30,
        paddingRight: 30
    }
}))

const App = () => {
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Navbar/>
            <MainView/>
            <Footer/>
        </Box>
    )
}

export default App;
