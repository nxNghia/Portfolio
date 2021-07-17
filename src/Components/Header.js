import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Container from '@material-ui/core/Container';
import { useEffect, useState } from 'react';
import data from './db.json';

const Header = ({lan}) => {
    const [speed, setSpeed] = useState(1)
    const [backward, setBackward] = useState(false)
    const [index, setIndex] = useState(0)
    const [text, setText] = useState('')
    const [me, setMe] = useState('')

    const style = {
        header: {
            textAlign: 'center',
            fontSize: 70,
            paddingBottom: 200,
            paddingTop: 20,
        },

        checkIcon: {
            color: 'blue',
            fontSize: 50,
        },

        sentimentIcon: {
            color: 'yellow',
        },

        p: {
            position: 'absolute',
            left: '30%'
        }
    }

    useEffect(() => {
        if(lan)
            setMe(data.e_me[0].name)
        else
            setMe(data.j_me[0].name)
        setIndex(0)
    }, [lan])

    useEffect(() => {
        const typing = setInterval(() => {
            if(index === me.length)
                setBackward(true)
            
            if(index === 0)
                setBackward(false)
            
            setText(me.substring(0, index))
            if(backward)
                setIndex(index => index - 1)
            else
                setIndex(index => index + 1)

            if(backward)
                setSpeed(150)
            else
                setSpeed(300)
        }, speed);
        return () => clearInterval(typing)
    }, [index, lan])

    return (
        <Container style={style.header}>
            <p style={style.p}>{text}_<CheckCircleIcon style={style.checkIcon}></CheckCircleIcon></p>
        </Container>
    )
}

export default Header