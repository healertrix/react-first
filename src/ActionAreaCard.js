import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";

export default function ActionAreaCard({
  videoDiv,
  title,
  competition,
  thumbnail,
  matchviewUrl,
}) {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <Tooltip title="Click to view highlight">
            <a
              href={videoDiv.slice(90, 90 + 97)}
              target="_blank"
              rel="noreferrer"
            >
              <CardMedia
                component="img"
                height="140"
                image={thumbnail}
                style={{
                  backgroundImage:
                    "url(" +
                    "https://i.pinimg.com/originals/5f/00/32/5f0032f29fcde316f9e0ac455a7b924b.gif" +
                    ")",
                }}
              />
            </a>
          </Tooltip>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title || "example"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {competition || "this is a competition"}
            </Typography>
            <Button
              href={matchviewUrl}
              target="_blank"
              rel="noreferrer"
              size="small"
              color="primary"
            >
              More
            </Button>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
