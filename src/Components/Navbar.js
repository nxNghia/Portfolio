import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ScrollIntoView from 'react-scroll-into-view';

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
                    <ScrollIntoView selector='#about'>
                        <p>About</p>
                    </ScrollIntoView>
                </Grid>
                <Grid item style={style.index}>
                    <ScrollIntoView selector='#skill'>
                        <p>Skills</p>
                    </ScrollIntoView>
                </Grid>
                <Grid item style={style.index}>
                    <ScrollIntoView selector='#contact'>
                        <p>Contact</p>
                    </ScrollIntoView>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Navbar