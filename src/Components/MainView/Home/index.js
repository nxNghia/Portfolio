import { Box, SvgIcon, Typography } from "@material-ui/core"

import Me from '../../../Assets/avatar.jpg'
import Contact from "./Contact"
import { useStyles } from "./style"
import flag from "../../../Assets/Flag_of_Vietnam-Animated.gif"

const Home = () => {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Box className={classes.basic_info}>
                <Box className={classes.basic_info_name}>
                    <Typography variant="h5">
                        Nguyen Xuan Nghia
                    </Typography>
                    <Typography variant="h6">
                        (Nah)
                    </Typography>
                    <ul>
                        <li>Living in Hanoi, Vietnam<span><img src={flag} alt='flag' width={30}/></span></li>
                        <li>Speaking Vetnamese natively</li>
                        <li>Foreign languages: English (800 TOEIC aprox) and Japanese (learning)</li>
                    </ul>
                    <Contact/>
                </Box>
                <Box className={classes.image_container}>
                    <img src={Me} alt='me' className={classes.me_image}/>
                </Box>
            </Box>
            <Box className={classes.quote}>
                <Typography variant="h6">
                    “We keep moving forward, opening new doors, and doing new things, because we're curious and curiosity keeps leading us down new paths.”
                </Typography>
                <Typography variant="h6">
                    --Walt Disney--
                </Typography>
            </Box>
        </Box>
    )
}

export default Home