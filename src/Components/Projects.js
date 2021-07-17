import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Project from './Project';
import { useEffect, useState } from 'react';
import data from './db.json';

const Projects = ({lan}) => {
    const [projects, setProject] = useState([])
    const style = {
        intro: {
            fontSize: 40,
            fontWeight: 'bold',
            color: '#ffffff',
        }
    }

    useEffect(() => {
        setProject(data.e_projects)
    }, [])

    return (
        <Container>
            {lan ? <p style={style.intro}>Projects</p> : <p style={style.intro}>プロジェクト</p>}
            <Grid container spacing={4} justify='center'>
                {projects.map((project) => (
                    <Grid item xs={4} key={project.id}><Project projectImage={project.thumbnail} projectName={project.title} projectLink={project.link} projectInfo={project.info}></Project></Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Projects