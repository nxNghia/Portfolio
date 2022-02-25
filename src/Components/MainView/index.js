import Home from "./Home";
import { useStyles } from "./style";

const MainView = () => {
    const classes = useStyles()

    return (
        <Home className={classes.root}/>
    )
}

export default MainView