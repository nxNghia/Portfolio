import { useState } from 'react';
import { animated } from 'react-spring';

const Project = ({projectImage, projectName, alt, projectLink, projectInfo}) => {
    const [show, setShow] = useState(false)
    const style = {
        paper: {
            paddingBottom: 60,
            textAlign: 'center',
            position: 'relative',
            width: '100%',
            marginBottom: 20,
            borderRadius: '5%',
            background: '#555555',
            boxSizing: 'border-box',
            paddingTop: '120%',
        },

        image: {
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            position: 'absolute',
            top: 0,
            left: 0,
        },

        detail: {
            color: '#ffffff',
            fontWeight: 'bold',
            position: 'absolute',
            top: '35%',
            width: '100%',
            bottom: 0,
        },

        link: {
            position: 'absolute',
            width: '100%',
            top: 0,
            left: 0,
            color: '#ffffff',
            height: '100%',
            fontWeight: 'bold',
            transition: 'background 250ms',
        },

        name: {
            background: show ? 'rgba(85, 85, 85, 0.8)' : 'transparent',
            fontSize: show ? 'xx-large' : 'large',
            opacity: show ? 1 : 0,
            transition: 'background 250ms, font-size 500ms, opacity 250ms'
        }
    }

    return (
        <div style={style.paper} onMouseEnter={() => {setShow(true)}} onMouseLeave={() => {setShow(false)}}>
            <a href={projectLink}>
                <img src={'/assets/images/' + projectImage} style={style.image} alt={alt}></img>
                <animated.div style={style.detail}>
                    <p style={style.name}>{projectName}</p>
                </animated.div>
            </a>
        </div>
    )
}

Project.defaultProps = {
    projectImage: 'blank.png'
}

export default Project