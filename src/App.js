import Box from '@material-ui/core/Box';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import About from './Components/About';
import Skills from './Components/Skills';

function App() {
  const style = {
    navbar: {
      backgroundColor: '#cccccc',
    },

    skills: {
      backgroundColor: '#222222',
    }
  }
  return (
    <>
      <Box style={style.navbar}>
        <Navbar></Navbar>
      </Box>
      <Header></Header>
      <About></About>
      <Box style={style.skills}>
        <Skills></Skills>
      </Box>
    </>
  )
}

export default App;
