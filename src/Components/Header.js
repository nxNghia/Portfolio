import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Container from '@material-ui/core/Container';

const Header = () => {
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
    return (
        <Container style={style.header}>
            <p>Nguyen Xuan Nghia <CheckCircleIcon style={style.checkIcon}></CheckCircleIcon></p>
            {/* <p>A Vietnamese IT student with a difficult to pronounce name</p> */}
        </Container>
    )
}

export default Header