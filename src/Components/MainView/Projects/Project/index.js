import { Box, Chip, Typography } from "@material-ui/core"
import { useMediaQuery } from 'react-responsive'

import { useStyles } from "./style"

const Project = ({ data }) => {
    const classes = useStyles()
    const limit = useMediaQuery({maxWidth: 1098})

    return (
        <Box className={limit ? classes.root_smaller : classes.root} onClick={() => window.open(data.url, "_blank")}>
            <Typography variant="h5" className={classes.title}>{data.title}</Typography>
            <Typography className={classes.describe}>{data.describe}</Typography>
            {data.includes.map((item, index) => <Chip className={classes.chip} style={{background: item.color, color: item.font}} key={index} label={item.title} />)}
        </Box>
    )
}

export default Project