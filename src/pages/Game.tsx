// Styles
import 'src/styles/pages/Common.css'
import 'src/styles/pages/Game.css'
// Components
import Window from 'src/components/Window';
import { Box, Stack, } from '@mui/material';
import { ArrowSVG, HelpSVG, WASD, ExitSVG } from 'src/components/SVG';
// Utils
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
// Game Engine
import { startEngine, toggleMovement } from 'engine/main'

const Game = () => {

  // State of the controls help screen visibility
  const [controls, setControls] = useState(false);
  const navigate = useNavigate();

  // Initialise the game loop when the component mounts and stop when component unomunts
  useEffect(() => {
    const loop = startEngine();
    return () => { clearInterval(loop) }
  }, [])

  const handleGoBackToMenu = () => {
    if(controls){
      setControls(false)
      toggleMovement();
    }
    navigate('/');
  }

  return (
    <Box className='window-wrapper-fullscreen'>
      <Stack className="options-wrapper" direction='column'>
        {/* Go back to main menu button */}
        <Window width='150px' height='130px' colourBar="#ffec88" colourBackground="#eeb4fe">
          <Box className="SVG-container" sx={{ '& > svg:hover > path': { fill: '#ffec88' } }}>
            <ArrowSVG onClick={handleGoBackToMenu} />
          </Box>
        </Window>
        {/* Toggle help sreen button (controls state) */}
        <Window width='150px' height='130px' colourBar="#0be3dc" colourBackground="#92ffbc" >
          <Box className="SVG-container" sx={{ '& > svg:hover > path': { fill: '#0be3dc' } }}>
            <HelpSVG onClick={() => { setControls(prev => !prev); toggleMovement() }} />
          </Box>
        </Window>
      </Stack>
      {/* Main game window */}
      <Window width="640px" height="480px" colourBar="#fd9dc2" colourBackground="#242424" sx={{ "& > .window-body": { maxHeight: '640px', overflow: 'hidden' }, minHeight: '510px' }}>
        {/* Help screen displayed when controls state is toggled */}
        <Box className="controls-wrapper" sx={{ display: `${controls ? 'flex' : 'none'}` }}>
          {/* Controls manual SVG */}
          <WASD />
          {/* Exit help screen button*/}
          <Box className="controls-absolute" sx={{ top: '20px', right: '20px', "> svg:hover > path": { fill: "#fd9dc2" } }}>
            <ExitSVG onClick={() => { setControls(false); toggleMovement() }} />
          </Box>
        </Box>
        {/* Game canvas is created below by startEngine function */}
        <div id="app"></div>
      </Window>
    </Box>
  );
}

export default Game;