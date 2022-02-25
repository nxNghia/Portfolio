import { Box, Button } from "@material-ui/core"

import { data } from "./data"
import Project from "./Project"
import { useStyles } from "./style"

const Projects = () => {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Box className={classes.projects_container}>
                {data.map((item, index) => <Project key={index} data={item}/>)}
            </Box>
            <Box className={classes.button_container}>
                <Button color="secondary" variant="contained" size="large" onClick={() => window.open("https://github.com/nxNghia?tab=repositories", "_blank")}>View more projects</Button>
            </Box>
        </Box>
    )
}

export default Projects