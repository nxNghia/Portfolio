import { Box, Typography } from "@material-ui/core"

import { useStyles } from "./style"
import Currently from "./Current"
import Interest from "./Interesting"

const Category = ({ name, data }) => {
    const classes = useStyles()

    return (
        <Box className={classes.category}>
            <Typography variant="h5" className={classes.title}>{name}</Typography>
            <Currently skills={data.currently}/>
            {data.interesting.length !== 0 && <Interest skills={data.interesting}/>}
        </Box>
    )
}

export default Category