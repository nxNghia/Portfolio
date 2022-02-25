import { Box } from "@material-ui/core";
import { useSelector } from "react-redux";

import Education from "./Education";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import Item from "./Skills/Items";
import { useStyles } from "./style";
import { pageIndexSelector } from "../../Selectors/ui.selector"

const MainView = () => {
    const classes = useStyles()
    const pageIndex = useSelector(pageIndexSelector)

    const render = () => {
        switch (pageIndex)
        {
            case 0: return <Home/>
            case 1: return <Skills/>
            case 2: return <Projects/>
            case 3: return <Education/>
            default: return <Home/>
        }
    }

    return (
        <Box className={classes.root}>
            {render()}
        </Box>
    )
}

export default MainView