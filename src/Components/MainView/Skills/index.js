import { Box } from "@material-ui/core";

import { useStyles } from "./style";
import Category from "./Categories";
import { languages, framework, database, other } from "./Items/data";

const Skills = () => {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Category name="Language" data={languages}/>
            <Category name="Framework / Library" data={framework}/>
            <Category name="Database" data={database}/>
            <Category name="Other" data={other}/>
        </Box>
    )
}

export default Skills