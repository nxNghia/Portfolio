import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const Navbar = () => {
    const style = {
        brand: {
            fontSize: 'x-large',
            fontWeight: 'bold',
        },

        nav: {
            paddingTop: 20,
        },

        index: {
            paddingTop: 30,
        }
    }

    return (
        <Container>
            <Grid container spacing={5} style={style.nav}>
                <Grid item xs={9} style={style.brand}><p>Portfolio</p></Grid>
                <Grid item style={style.index}>
                    <p>About</p>
                </Grid>
                <Grid item style={style.index}>
                    <p>Skills</p>
                </Grid>
                <Grid item style={style.index}>
                    <p>Contact</p>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Navbar