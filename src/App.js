import Box from '@material-ui/core/Box';
import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ScrollIntoView from 'react-scroll-into-view';
import { useState, useEffect } from 'react';
import { ReactComponent as Eng} from './Components/Icons/gb.svg';
import { ReactComponent as Jap} from './Components/Icons/jp.svg';
import SvgIcon from '@material-ui/core/SvgIcon';

function App() {
  const [isEnglish, setEnglish] = useState(true)
  const style = {
    navbar: {
      backgroundColor: '#cccccc',
      paddingBottom: 30,
      position: 'realative'
    },

    navbar_index: {
      cursor: 'pointer',
    },

    header: {
      backgroundColor: '#ffbb99',
      position: 'relative',
    },

    about: {
      backgroundColor: '#ffbb99',
      position: 'relative',
    },

    skills: {
      backgroundColor: '#222222',
      paddingTop: 50,
      paddingBottom: 100,
    },

    brand: {
      fontSize: 'xx-large',
      fontWeight: 'bold',
      // position: 'absolute',
    },

    nav: {
        paddingTop: 20,
    },

    index: {
        paddingTop: 45,
        // position: 'absolute',
    }
  }

  const [index, setIndex] = useState([])
  

  useEffect(() => {
    if(isEnglish)
    {
      setIndex(['Portfolio', 'About', 'Skill', 'Contact'])
    }else{
      setIndex(['ポートフォリオ', '私', 'スキル', '連絡'])
    }
  }, [isEnglish])

  return (
    <>
      <Box style={style.navbar}>
        <Container>
            <Grid container spacing={2} style={style.nav}>
                <Grid item xs={7} style={style.brand}><p>{index[0]}</p></Grid>
                <Grid item style={style.index} xs={1}>
                    <ScrollIntoView selector='#about'>
                        <p style={style.navbar_index}>{index[1]}</p>
                    </ScrollIntoView>
                </Grid>
                <Grid item style={style.index} xs={1}>
                    <ScrollIntoView selector='#skill'>
                        <p style={style.navbar_index}>{index[2]}</p>
                    </ScrollIntoView>
                </Grid>
                <Grid item style={style.index} xs={1}>
                    <ScrollIntoView selector='#contact'>
                        <p style={style.navbar_index}>{index[3]}</p>
                    </ScrollIntoView>
                </Grid>
                <Grid item style={style.index}>
                  <SvgIcon component={Eng} viewBox="0 0 600 476.6" fontSize='large' onClick={() => setEnglish(true)}></SvgIcon>
                  <SvgIcon component={Jap} viewBox="0 0 600 476.6" fontSize='large' onClick={() => setEnglish(false)}></SvgIcon>
                </Grid>
            </Grid>
        </Container>
      </Box>
      <Box style={style.header}>
        <Header lan={isEnglish}></Header>
      </Box>
      <Box id='about' style={style.about}>
        <About lan={isEnglish}></About>
      </Box>
      <Box style={style.skills} id='skill'>
        <Skills lan={isEnglish}></Skills>
        <Projects lan={isEnglish}></Projects>
      </Box>
      <Box id='contact'>
        <Contact lan={isEnglish}></Contact>
      </Box>
    </>
  )
}

export default App;
