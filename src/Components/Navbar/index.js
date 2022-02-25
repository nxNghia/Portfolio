import { AppBar, Box, Toolbar, Typography, Button } from "@material-ui/core"
import { useSelector, useDispatch } from "react-redux"

import { pageIndexSelector } from "../../Selectors/ui.selector"
import { updatePageIndex } from "../../Actions/ui.action"
import { data } from "./data"
import { useStyles } from "./style"

const Navbar = () => {
    const classes = useStyles()
    const pageIndex = useSelector(pageIndexSelector)
    const dispatch = useDispatch()

    const switchPageHandle = (index) => {
        dispatch(updatePageIndex(index))
    }

    return (
        <AppBar className={classes.root} position='static'>
            <Toolbar>
                <Typography variant="h5" className={classes.pageTitle}>
                    {data.pageTitle}
                </Typography>
                <Box className={classes.indexContainer}>
                    {data.index.map((item, index) => (
                        <Button
                            key={index}
                            className={index === pageIndex ? classes.pageIndex_active : classes.pageIndex}
                            onClick={() => switchPageHandle(index)}
                        >
                            {item.name}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar