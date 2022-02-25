import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import Item from "./Skills/Items";
import { useStyles } from "./style";

const MainView = () => {
    const classes = useStyles()

    return (
        // <Home className={classes.root}/>
        // <Skills/>
        <Projects/>
    )
}

export default MainView