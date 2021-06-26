import Paper from '@material-ui/core/Paper';

const Skill = ({icon, width, height}) => {
    const style = {
        width: width,
        height: height,
        backgroundColor: '#222222',
    }
    return (
       <Paper style={{backgroundColor: '#222222'}} elevation={0}>
           <img src={icon} style={style}></img>
       </Paper>
    )
}

export default Skill