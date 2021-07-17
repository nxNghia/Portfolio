import { useState } from 'react';
import { animated } from 'react-spring';

const Project = ({projectImage, projectName, alt, projectLink}) => {
    const [show, setShow] = useState(false)
    const style = {
        paper: {
            paddingBottom: 60,
            textAlign: 'center',
            position: 'relative',
            width: '100%',
            marginBottom: 20,
            backgroundColor: '#555555',
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
            top: show ? '5%' : '85%',
            transition: 'top 500ms',
            width: '100%',
            bottom: 0,
        },

        link: {
            position: 'absolute',
            width: '100%',
            background: show ? 'rgba(50, 50, 50, 0.5)' : 'rgba(255, 255, 255, 0)',
            top: 0,
            left: 0,
            color: '#ffffff',
            height: '100%',
            fontWeight: 'bold',
            transition: 'background 250ms',
        },

        p: {
            position: 'relative',
            top: '40%',
            opacity: show ? 1 : 0,
            transition: 'opacity 500ms',
        }
    }

    return (
        <div style={style.paper} onMouseEnter={() => {setShow(true)}} onMouseLeave={() => {setShow(false)}}>
            <img src={'/assets/images/' + projectImage} style={style.image} alt={alt}></img>
            <animated.div style={style.detail}>
                <p>{projectName}</p>
            </animated.div>
            <a href={projectLink}>
                <animated.div style={style.link}>
                    <p style={style.p}>Click</p>
                </animated.div>
            </a>
        </div>
    )
}

Project.defaultProps = {
    projectImage: 'blank.png'
}

export default Project