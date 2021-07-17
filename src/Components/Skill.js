import Paper from '@material-ui/core/Paper';
import { animated } from 'react-spring';
import { useState, useEffect } from 'react';

const Skill = ({icon, width, height, alt}) => {
    const [Scale, setScale] = useState(false)

    const style = {
        image: {
            width: width,
            height: height,
            backgroundColor: '#222222',
        },

        paper: {
            backgroundColor: '#222222',
            transform: Scale ? 'scale(1.3)' : 'scale(1)',
            transition: 'transform 250ms',
        }
    }

    useEffect(() => {
        if(!Scale){
            return;
        }

        const timeout = setTimeout(() => {
            setScale(false)
        }, 250)

        return () => {
            clearTimeout(timeout)
        }
    }, [Scale])

    return (
       <animated.div>
        <Paper style={style.paper} onMouseEnter={() => {setScale(true)}} elevation={0}>
            <img alt={alt} src={icon} style={style.image}></img>
        </Paper> 
       </animated.div>
    )
}

export default Skill