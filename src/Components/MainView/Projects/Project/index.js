import { Box, Chip, Typography } from "@material-ui/core"

import { useStyles } from "./style"

const Project = ({ data }) => {
    const classes = useStyles()

    return (
        <Box className={classes.root} onClick={() => window.open(data.url, "_blank")}>
            <Typography variant="h5" className={classes.title}>{data.title}</Typography>
            <Typography className={classes.describe}>{data.describe}</Typography>
            {data.includes.map((item, index) => <Chip className={classes.chip} style={{background: item.color, color: item.font}} key={index} label={item.title} />)}
        </Box>
    )
}

export default Project