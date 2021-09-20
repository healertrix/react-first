import React, { useState, useEffect, useCallback } from "react";
import './Final.css'
import ActionAreaCard from "./ActionAreaCard";
import CircularIndeterminate from "./CircularIndeterminate";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";



const url = "https://www.scorebat.com/video-api/v3/";
export const Final = () => {
  const [open, setOpen] = React.useState(false);

    const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [mapp, setMap] = useState([]);
  



const handleClick = () => {
  setOpen(true);
};

const handleClose = (event, reason) => {
  if (reason === "clickaway") {
    return;
  }

  setOpen(false);
};

const action = (
  <React.Fragment>
    <Button color="secondary" size="small" onClick={handleClose}>
      UNDO
    </Button>
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  </React.Fragment>
);


    const getProducts = useCallback(async () => {
      const response = await fetch(url);
      const products = await response.json();
      setProducts(products);
      setMap(products);
      setLoading(false);
      
        
      
    }, []);

    useEffect(() => {
      getProducts();
    }, [getProducts]);
  
  const [text, setText] = useState("");
  
  
  const handleSearch = (e) => {
    const result = products.response.filter((word) => {
      if (
        word.title.includes(text) ||
        word.title.toLowerCase().includes(text) ||
        word.competition.includes(text) ||
        word.competition.toLowerCase().includes(text)
      ) {
        return word;
      }
      return 0;
    });
    if (result!=='undefined'&&result.length>0) {
      // console.log(result);
      let final = {
        "response":result
      }
      console.log(final, "final");
      console.log(products,"products");
      // setProducts(final);
      setMap(final);
      // console.log(mapp, "map");
    }
    else {
      handleClick();
    }
   
  }


 
  
  return (
    <>
      <Stack spacing={2} direction="row" sx={{ padding: "1.5rem" }}>
        <Box
          sx={{
            width: " 100%",
            maxWidth: "100%",
          }}
        >
          <TextField
            fullWidth
            label="Search Match"
            id="fullWidth"
            onChange={(e) => setText(e.target.value)}
          />
        </Box>
        <Button variant="contained" onClick={(e) => handleSearch(e)}>
          Search
        </Button>
      </Stack>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="No Match found"
        action={action}
      />
      <div className="main">
        {loading ? (
          <CircularIndeterminate />
        ) : (
          mapp.response.map((item, index) => {
            const { title, competition, videos, thumbnail, matchviewUrl } =
              item;

            return (
              <ActionAreaCard
                videoDiv={videos[0].embed}
                title={title}
                competition={competition}
                key={index}
                thumbnail={thumbnail}
                matchviewUrl={matchviewUrl}
              />
            );
          })
        )}
      </div>
    </>
  );
    }
