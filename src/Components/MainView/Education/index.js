import { Box } from "@material-ui/core"

import { data } from "./data"
import School from "./School"
import { useStyles } from "./style"

const Education = () => {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            {data.map((item, index) => <School key={index} item={item}/>)}
        </Box>
    )
}

export default Education