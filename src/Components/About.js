import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import pictureOfme from './Images/picture1.jpg';
import { useState, useEffect } from 'react';
import data from './db.json';

const About = ({lan}) => {
    const [about, setAbout] = useState([])
    const style = {
        avatar: {
            width: 400,
            height: 400,
        },

        information: {
            fontSize: 30,
            paddingRight: 50,
        },

        container: {
            paddingBottom: 50,
            paddingTop: 20,
        },

        intro: {
            fontSize: 40,
            fontWeight: 'bold',
        }
    }

    useEffect(() => {
        fetchAbout()
    }, [lan])

    const fetchAbout = () => {
        if(lan)
            setAbout(data.e_about)
        else
            setAbout(data.j_about)
    }

    return (
        <Container style={style.container}>
            {lan ? <p style={style.intro}>About me</p> : <p style={style.intro}>私について</p>}
            <Grid container>
                <Grid item xs={8}>
                    {about.map((info) => (
                        <p key={info.id} style={style.information}>{info.body}</p>
                    ))}
                </Grid>
                <Grid>
                    <Avatar src={ pictureOfme } style={style.avatar}></Avatar>
                </Grid>
            </Grid>
        </Container>
    )
}

export default About