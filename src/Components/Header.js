import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Container from '@material-ui/core/Container';
import { useEffect } from 'react';
import { useState } from 'react';

const Header = () => {
    const [speed, setSpeed] = useState(1)
    const [backward, setBackward] = useState(false)
    const [index, setIndex] = useState(0)
    const [text, setText] = useState('')

    const fullText = 'Nguyen Xuan Nghia'

    const style = {
        header: {
            textAlign: 'center',
            fontSize: 60,
        },

        checkIcon: {
            color: 'blue',
            fontSize: 50,
        },

        sentimentIcon: {
            color: 'yellow',
        }
    }

    useEffect(() => {
        const typing = setInterval(() => {
            if(index === fullText.length)
                setBackward(true)
            
            if(index === 0)
                setBackward(false)
            
            setText(fullText.substring(0, index))
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
    }, [index, backward, speed])

    return (
        <Container style={style.header}>
            <p>{text}_<CheckCircleIcon style={style.checkIcon}></CheckCircleIcon></p>
        </Container>
    )
}

export default Header