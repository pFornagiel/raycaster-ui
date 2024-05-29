// Components
import Window from "src/components/Window";
import { Box, Stack, Typography } from "@mui/material";
import PixelButton from "src/components/PixelButton";
// Styles
import 'src/styles/pages/Common.css'

const MainMenu = () => {
  return (
    <Box className="window-wrapper-fullscreen">
      <Window width="max-content" colourBar="#ffec88" colourBackground="#0be3dc">
        <Box className='text-wrapper'>          
          <Stack direction="column" width="100%"  spacing={4}>
            <Typography variant="h1" gutterBottom> Simply-Raycaster </Typography>
            <PixelButton path='/play' colourHover="#ffec88">Play Now!</PixelButton>
            <PixelButton path='/about' colourHover="#ffec88">About Project</PixelButton>
          </Stack>
        </Box>
      </Window>
    </Box>
   );
}
 
export default MainMenu;