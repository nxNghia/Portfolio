import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import pictureOfme from './Images/picture1.jpg';

const About = () => {
    const style = {
        avatar: {
            width: 400,
            height: 400,
        },

        information: {
            fontSize: 30,
            paddingRight: 50,
        }
    }
    return (
        <Container>
            <p>About me</p>
            <Grid container>
                <Grid item xs={8}>
                    <p style={style.information}>
                        Call me Ghi-A if you find my name was difficult to pronounce. I am a third-year student at 
                        Hanoi University of Science and Technology. A quiet person in daily life, I love watching normal thing
                        around me, seeking special things from each of them. When working, I will become a concentrated and a grumpy
                        person due to desire of bring the best to my very own product.
                    </p>
                    <p style={style.information}>
                        Currently, I am having a interest in front-end development. The front-end library that i am using is ReactJS with
                        Material-UI components. In the near future, I intend to learn other library like Angular, Vue.
                    </p>
                </Grid>
                <Grid>
                    <Avatar src={ pictureOfme } style={style.avatar}></Avatar>
                </Grid>
            </Grid>
        </Container>
    )
}

export default About