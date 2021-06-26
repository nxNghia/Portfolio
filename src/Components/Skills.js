import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Skill from './Skill';
import Cpp from './Icons/Cpp.svg';
import Csharp from './Icons/Csharp.svg';
import JavaScript from './Icons/JavaScript.svg';
import React from './Icons/React.svg';
import Java from './Icons/Java.svg';
import Dotnet from './Icons/DotNet.svg';
import OpenGL from './Icons/OpenGL.svg';

const Skills = () => {
    return (
        <Container>
            <p>Skills</p>
            <p>Programing languages</p>
            <Grid container spacing={10} justify='center'>
                <Grid item><Skill icon={Cpp} width={100} height={100}></Skill></Grid>
                <Grid item><Skill icon={Csharp} width={100} height={100}></Skill></Grid>
                <Grid item><Skill icon={JavaScript} width={100} height={100}></Skill></Grid>
                <Grid item><Skill icon={Java} width={100} height={100}></Skill></Grid>
            </Grid>
            <p>Framework/Library</p>
            <Grid container spacing={10} justify='center'>
                <Grid item><Skill icon={React} width={100} height={100}></Skill></Grid>
                <Grid item><Skill icon={Dotnet} width={100} height={100}></Skill></Grid>
                <Grid item><Skill icon={OpenGL} width={100} height={100}></Skill></Grid>
            </Grid>
        </Container>
    )
}

export default Skills