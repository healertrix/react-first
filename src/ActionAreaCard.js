import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Iframe from "react-iframe";

export default function ActionAreaCard({ urlVid, title, competition }) {
  // console.log(url);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>

        <Iframe
          url={urlVid}
          width="100%"
          height="100%"
          id="myId"
          display="initial"
          position="relative"
          frameBorder="0"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title || "example"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {competition || "this is a competition"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  );
}
