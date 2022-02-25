import { Box, Typography } from "@material-ui/core"

import { useStyles } from "./style"

const School = ({ item }) => {
    const classes = useStyles()

    return (
        <Box className={classes.root} onClick={() => window.open(item.url, '_blank')}>
            <Box className={classes.img}>
                <img height={200} src={item.imageURL} alt='school'/>
            </Box>
            <Box className={classes.info}>
                <Box className={classes.upper_info} style={{background: item.titleColor, color: item.color[0]}}>
                    <Typography variant="h5">{item.title}</Typography>
                    {item.major && <Typography variant="h6">{item.major}</Typography>}
                    <Typography className={classes.time}>{item.time}</Typography>
                </Box>
                <Box className={classes.lower_info} style={{color: item.color[1]}}>
                    <ul>
                        {item.detail.map((line, index) => <li key={index}>{line}</li>)}
                    </ul>
                </Box>
            </Box>
        </Box>
    )
}

export default School