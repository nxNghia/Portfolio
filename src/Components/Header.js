import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Container from '@material-ui/core/Container';
import { useEffect } from 'react';
import { useState } from 'react';

const Header = ({lan}) => {
    const [speed, setSpeed] = useState(1)
    const [backward, setBackward] = useState(false)
    const [index, setIndex] = useState(0)
    const [text, setText] = useState('')
    const [me, setMe] = useState([{"name": ' '}])

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
            // width: '100%',
            left: '30%'
        }
    }

    useEffect(() => {
        fetchName()
    }, [lan])

    useEffect(() => {
        const typing = setInterval(() => {
            if(index === me[0].name.length)
                setBackward(true)
            
            if(index === 0)
                setBackward(false)
            
            setText(me[0].name.substring(0, index))
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

    const fetchName = async () => {
        let nameFromServer;
        if(lan)
            nameFromServer = await fetch('http://localhost:5000/e_me')
        else
            nameFromServer = await fetch('http://localhost:5000/j_me')
        const data = await nameFromServer.json()
        setMe(data)
        setIndex(0)
    }

    return (
        <Container style={style.header}>
            <p style={style.p}>{text}_<CheckCircleIcon style={style.checkIcon}></CheckCircleIcon></p>
        </Container>
    )
}

export default Header