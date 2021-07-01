import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Project from './Project';
import { useEffect } from 'react';
import { useState } from 'react';

const Projects = ({lan}) => {
    const style = {
        intro: {
            fontSize: 40,
            fontWeight: 'bold',
            color: '#ffffff',
        }
    }

    const [projects, setProject] = useState([{"id": 1, "title": "2048", "link": "https://github.com/nxNghia/2048", "thumbnail": "2048.png"}])

    // useEffect(() => {
    //     fetchProjects()
    //     console.log(projects)
    // }, [])

    // const fetchProjects = () => {
    //     const projectsFromServer = await fetch('http://localhost:5000/e_projects')
    //     const data = await projectsFromServer.json()
    //     console.log(data)
    //     setProject(projects)
    // }

    return (
        <Container>
            {lan ? <p style={style.intro}>Projects</p> : <p style={style.intro}>プロジェクト</p>}
            <Grid container spacing={4} justify='center'>
                {projects.map((project) => (
                    <Grid item xs={4} key={project.id}><Project projectImage={project.thumbnail} projectName={project.title} projectLink={project.link}></Project></Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Projects