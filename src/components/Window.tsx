// MUI
import { Box, Stack } from "@mui/material";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import MinimizeIcon from '@mui/icons-material/Minimize';
// Types
import { SxProps, Theme } from "@mui/material";
// Styles
import "src/styles/components/Window.css"

interface Props {
  width: string
  height?: string,
  colourBar: string,
  colourBackground: string;
  children: string | JSX.Element | JSX.Element[],
  sx?: SxProps<Theme>
}

const Window = ({ width, height, colourBar, colourBackground, children, sx }: Props) => {
  return (
    <Stack className="window-container" width={`${width}`} height={height === undefined ? 'auto' : `calc(${height} + 30px)`} direction="column" spacing={0} sx={sx}>
      <Box className="window-bar" sx={{ backgroundColor: `${colourBar}` }}>
        <MinimizeIcon></MinimizeIcon>
        <WebAssetIcon></WebAssetIcon>
        <CloseOutlinedIcon></CloseOutlinedIcon>
      </Box>
      <Box className="window-body" sx={{ backgroundColor: `${colourBackground}` }}>
        {children}
      </Box>
    </Stack>
  );
}

export default Window;