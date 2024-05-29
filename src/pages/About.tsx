// Components
import Window from "src/components/Window";
import { Box, Stack, Typography } from "@mui/material";
import { GithubSVG } from 'src/components/SVG'
// Styles
import 'src/styles/pages/Common.css'

const About = () => {
  return (
    // Padding left introduced because of the absolute positioning of Github window
    <Box className="window-wrapper-fullscreen" sx={{ paddingLeft: 'calc(1rem + 110px)' }}>
      <Window width="100%" colourBar="#0be3dc" colourBackground="#0dd14e" sx={{ maxWidth: '1000px', position: 'relative', overflow: 'visible' }}>
        <Box className='text-wrapper'>
          <Stack direction="column" width="100%" spacing={4}>
            <Typography variant="h1" gutterBottom> About the Project </Typography>
            <Typography variant="h4" component="p" >
              What you see is a work-in-progress implementation of Raycasting Engine written natively in Typescript and inspired by Wolfenstein3D.
              If you are intrigued, visit my github to find local installation instructions and sources used. Feel free to fork and have fun!
            </Typography>
          </Stack>
          {/* Github Button Window */}
          {/* Inside  the other window to conviniently use absolute positioning */}
          <Window width='150px' height='130px' colourBar="#5b87ff" colourBackground="#ffe588" sx={{ position: 'absolute', left: '-110px', top: '-40px' }}>
            <Box className="SVG-container" sx={{ '> a > svg:hover > path': { fill: '#5b87ff' } }}>
              <a href="https://github.com/pFornagiel/raycaster-ui"><GithubSVG/></a>
            </Box>
          </Window>
        </Box>

      </Window>

    </Box>
  );
}

export default About;