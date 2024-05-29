// Components
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface Props{
  path: string
  colourHover: string
  children: string | JSX.Element | JSX.Element[]
}

const PixelButton = ({path, children, colourHover} : Props) => {
  return ( 
    <Link to={`${path}`} >
      <Typography variant="h2" sx={{"&:hover" : {color: `${colourHover}`}}}>
        {children}
      </Typography>
    </Link>
   );
}


export default PixelButton;