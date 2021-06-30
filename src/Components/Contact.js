import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillMail} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import Button from '@material-ui/core/Button';

const Contact = ({lan}) => {
    const style = {
        intro: {
            fontSize: 40,
            fontWeight: 'bold',
            color: '#000000',
        },

        container: {
            paddingBottom: 50,
        }
    }
    return (
        <Container style={style.container}>
            {lan ? <p style={style.intro}>Contact</p> : <p style={style.intro}>連絡</p>}
            <Grid container justify='center' spacing={1}>
                <Grid item xs={1}><Button><AiFillLinkedin size={50}></AiFillLinkedin></Button></Grid>
                <Grid item xs={1}><Button><AiFillMail size={50}></AiFillMail></Button></Grid>
                <Grid item xs={1}><Button><AiFillGithub size={50}></AiFillGithub></Button></Grid>
            </Grid>
            <Grid container justify='center'>
                <Grid item><Button><LocalPhoneIcon></LocalPhoneIcon><span>+84 967 388 765</span></Button></Grid>
            </Grid>
        </Container>
    )
}

export default Contact